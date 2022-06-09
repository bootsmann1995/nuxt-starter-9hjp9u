@allowed([
  'dev'
  'prod'
])
param environment string
param location string = resourceGroup().location

param appServicePlanName string
param appInsightsName string
param functionAppName string
@allowed([
  '~1'
  '~2'
  '~3'
  '~4'
])
param runtimeVersion string = '~4'

param appSettings array
@secure()
param storageConnectionString string

resource appServicePlanResource 'Microsoft.Web/serverfarms@2020-12-01' = {
  name: appServicePlanName
  kind: 'functionapp'
  location: location
  sku: {
    name: 'Y1'
    tier: 'Dynamic'
    size: 'Y1'
    family: 'Y'
    capacity: 0
  }
  tags: {
    environment: environment
  }
  properties: {
    reserved: false
  }
}

resource appInsightsComponents 'Microsoft.Insights/components@2020-02-02-preview' = {
  name: appInsightsName
  location: location
  kind: 'functionapp'
  dependsOn: [
    appServicePlanResource
  ]
  tags: {
    environment: environment
  }
  properties: {
    Application_Type: 'other'
  }
}

resource functionResource 'Microsoft.Web/sites@2020-12-01' = {
  name: functionAppName
  location: location
  kind: 'functionapp'
  tags: {
    environment: environment
  }
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    serverFarmId: appServicePlanResource.id
    siteConfig: {
      http20Enabled: true
      appSettings: concat(appSettings, [
        {
          name: 'AzureWebJobsDashboard'
          value: storageConnectionString
        }
        {
          name: 'AzureWebJobsStorage'
          value: storageConnectionString
        }
        {
          name: 'WEBSITE_CONTENTAZUREFILECONNECTIONSTRING'
          value: storageConnectionString
        }
        {
          name: 'WEBSITE_CONTENTSHARE'
          value: toLower(functionAppName)
        }
        {
          name: 'FUNCTIONS_EXTENSION_VERSION'
          value: runtimeVersion
        }
        {
          name: 'APPINSIGHTS_INSTRUMENTATIONKEY'
          value: reference(appInsightsComponents.id, '2015-05-01').InstrumentationKey
        }
        {
          name: 'FUNCTIONS_WORKER_RUNTIME'
          value: 'node'
        }
        {
          name: 'WEBSITE_NODE_DEFAULT_VERSION'
          value: '~14'
        }
      ])
    }
  }
}

output Id string = functionResource.id
output name string = functionResource.name
output principalId string = functionResource.identity.principalId
