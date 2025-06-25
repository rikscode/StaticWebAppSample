# Static Web App Sample

A simple static web application demonstrating how to deploy to Azure Static Web Apps using Azure Developer CLI (azd).

## Features

- 🎨 Modern, responsive design with CSS Grid and Flexbox
- ⚡ Vanilla JavaScript for interactivity
- 🚀 Ready for Azure deployment with azd
- 📱 Mobile-friendly responsive layout
- 🎯 Clean, semantic HTML structure

## Prerequisites

Before you begin, ensure you have the following installed:

1. **Azure Developer CLI (azd)** - [Install azd](https://docs.microsoft.com/en-us/azure/developer/azure-developer-cli/install-azd)
2. **Azure CLI** - [Install Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
3. **An Azure subscription** - [Create a free account](https://azure.microsoft.com/free/)

## Getting Started

### 1. Clone or Download the Project

If you're starting fresh, you already have the files. If cloning:

```bash
git clone <your-repo-url>
cd StaticWebAppSample
```

### 2. Initialize Azure Developer CLI

```bash
azd auth login
```

### 3. Initialize the Project (if needed)

```bash
azd init
```

### 4. Set Up Environment

```bash
azd env new
```

When prompted, provide:
- Environment name: `static-web-app-dev` (or your preferred name)
- Azure subscription: Select your subscription
- Azure location: `eastus2` (or your preferred region)

### 5. Deploy to Azure

```bash
azd up
```

This command will:
- Provision Azure resources (Static Web App)
- Deploy your static files
- Provide you with the URL to access your app

### 6. View Your App

After deployment, azd will provide you with the URL to your deployed static web app. You can also find it in the Azure portal.

## Project Structure

```
StaticWebAppSample/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── azure.yaml          # Azure Developer CLI configuration
├── .env               # Environment variables
├── infra/             # Infrastructure as Code (Bicep)
│   ├── main.bicep     # Main infrastructure template
│   ├── app/
│   │   └── web.bicep  # Static Web App resource
│   └── abbreviations.json
└── README.md          # This file
```

## Development

To make changes and redeploy:

1. Edit your HTML, CSS, or JavaScript files
2. Run `azd deploy` to deploy just the app (faster than `azd up`)
3. Or run `azd up` to deploy infrastructure and app changes

## Useful Commands

- `azd up` - Provision infrastructure and deploy app
- `azd deploy` - Deploy app only (faster for code changes)
- `azd down` - Delete all Azure resources
- `azd env list` - List environments
- `azd env select` - Switch between environments
- `azd logs` - View application logs

## Customization

### Updating the App

1. **HTML Content**: Edit `index.html` to change the structure and content
2. **Styling**: Modify `styles.css` to update the appearance
3. **Functionality**: Update `script.js` to add or modify JavaScript features

### Updating Infrastructure

1. **Azure Resources**: Modify files in the `infra/` directory
2. **Environment**: Update `.env` or use `azd env set <KEY> <VALUE>`

## Troubleshooting

### Common Issues

1. **Authentication Issues**
   ```bash
   azd auth login
   az login
   ```

2. **Subscription Issues**
   ```bash
   az account list
   az account set --subscription "Your Subscription Name"
   ```

3. **Resource Group Issues**
   - Check if you have permissions in the subscription
   - Try a different Azure region

### Getting Help

- [Azure Developer CLI Documentation](https://docs.microsoft.com/en-us/azure/developer/azure-developer-cli/)
- [Azure Static Web Apps Documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/)

## Clean Up

To remove all Azure resources created by this template:

```bash
azd down
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Feel free to submit issues and enhancement requests!
