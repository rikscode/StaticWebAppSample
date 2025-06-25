@description('Name of the Static Web App')
param staticWebAppName string = 'static-web-app-sample'

@description('Location for the Static Web App')
param location string = 'westeurope'

@description('SKU for the Static Web App')
param sku object = {
  name: 'Free'
  tier: 'Free'
}

resource staticWebApp 'Microsoft.Web/staticSites@2022-03-01' = {
  name: staticWebAppName
  location: location
  sku: sku
  properties: {
    buildProperties: {
      skipGithubActionWorkflowGeneration: true
    }
  }
}

output staticWebAppUrl string = 'https://${staticWebApp.properties.defaultHostname}'
output staticWebAppName string = staticWebApp.name
