param environment string
param vaultName string
param resourceGroupName string

// web app
param appName string
param skuCode string = 'Free'
param sku string = 'Free'
param domainNames array
param location string

targetScope = 'subscription'

resource rg 'Microsoft.Resources/resourceGroups@2021-04-01' existing = {
  name: resourceGroupName
}

resource vault 'Microsoft.KeyVault/vaults@2021-11-01-preview' existing = {
  name: vaultName
  scope: rg
}

module staticWebApp 'staticApp.bicep' = {
  scope: rg
  name: 'staticWebApp-deployment'
  dependsOn: [
    vault
  ]
  params: {
    environment: environment
    appName: appName
    staticAppSku: sku
    staticAppSkuCode: skuCode
    domainNames: domainNames
    vaultName: vaultName
    location: location
  }
}

output resourceGroupName string = rg.name
