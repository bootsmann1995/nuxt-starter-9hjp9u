param(
	$tenantId = "7c804d1e-be57-4b0f-9baf-449da7c60f45",
	$subscriptionId = "ba48b53c-e4c7-49c8-91e5-c03f5df70980",
	$environment = "dev",
	$location = "northeurope"
)

az login --tenant $tenantId --out 'table'
az account set --subscription $subscriptionId --out 'table'


Write-Host "Creating shared resources" -ForegroundColor 'Green'

# $resourceGroupName = (az deployment sub create `
# --name "shared-$environment" `
# --template-file ".\shared\shared.bicep" `
# --parameters "@.\shared\shared.parameters.json" `
# --parameters environmentName=dev resourceGroupName=rg-av-ecommerce-dev vaultName=kv-av-ecommerce-dev storageAccountName=stavecommercedev eventGridName=even-av-ecommerce-dev apiManagementInstanceName=apim-av-ecommerce-dev `
# --location $location `
# --out 'jsonc' `
# | ConvertFrom-Json).properties.outputs.ResourceGroupName.value

# Write-Host "Resource group '$resourceGroupName' was created." -ForegroundColor 'Green'
# Write-Host "Creating function resources" -ForegroundColor 'Green'

# az deployment group create `
# 	--name "mockFunction-$environment" `
# 	--template-file ".\functions\autoDesktopMock.bicep" `
# 	--parameters environmentName=test vaultName=kv-av-ecommerce-test storageConnectionSecret=storageConnectionStringKey solutionName=av-ecommerce functionName=autodesktopmock `
# 	--resource-group "rg-av-ecommerce-test" `
# 	--out 'table'

az deployment sub create `
	--name "stapp-deploy-$environment" `
	--template-file ".\app.bicep" `
	--parameters "@.\app.parameters.json" `
	--location $location `
 	--parameters environment=dev resourceGroupName=rg-av-ecommerce-dev vaultName=kv-av-ecommerce-dev appName=stapp-av-ecommerce-avdk-dev `
	--out 'table'
