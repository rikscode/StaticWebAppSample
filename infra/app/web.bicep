param name string
param location string = resourceGroup().location
param tags object = {}

param sku object = {
  name: 'Free'
  tier: 'Free'
}

resource web 'Microsoft.Web/staticSites@2022-03-01' = {
  name: name
  location: location
  tags: tags
  sku: sku
  properties: {
    buildProperties: {
      skipGithubActionWorkflowGeneration: true
    }
  }
}

output WEB_URI string = 'https://${web.properties.defaultHostname}'
output WEB_NAME string = web.name
