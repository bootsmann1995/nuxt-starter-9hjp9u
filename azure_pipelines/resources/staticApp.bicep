param environment string
param appName string
param staticAppSku string
param staticAppSkuCode string
param vaultName string
param domainNames array
param location string

resource staticWebApp 'Microsoft.Web/staticSites@2021-03-01' = {
  name: appName
  location: location
  tags: {
    environment: environment
  }
  sku: {
    tier: staticAppSku
    name: staticAppSkuCode
  }
  properties: {
    stagingEnvironmentPolicy: 'Enabled'
    allowConfigFileUpdates: true
    provider: 'none'
    buildProperties: {
      skipGithubActionWorkflowGeneration: true
    }
  }

  resource domainResource 'customDomains@2021-02-01' = [for domainName in domainNames: {
    name: domainName
  }]
}

var deployment_token = listSecrets(staticWebApp.id, staticWebApp.apiVersion).properties.apiKey

resource deploymentToken 'Microsoft.KeyVault/vaults/secrets@2021-06-01-preview' = {
  name: '${vaultName}/${appName}-deploymentToken'
  properties: {
    value: deployment_token
  }
}
