# Inform the user that the script is starting
Write-Host "Starting NPM certificate fix" -ForegroundColor Green

# Step 1: Set NODE_TLS_REJECT_UNAUTHORIZED environment variable to 0
Write-Host "Disabling certificate checks for Node.js (NODE_TLS_REJECT_UNAUTHORIZED=0)..." -ForegroundColor Yellow
[System.Environment]::SetEnvironmentVariable("NODE_TLS_REJECT_UNAUTHORIZED", "0", "Process")

Write-Host "Setting Playwright Browser Certificate path." -ForegroundColor Yellow
npm config set cafile "C:\BrowserCert.crt"

Write-Host "Please attempt to install Playwright Browsers by typing npx playwright install on VS Code terminal." -ForegroundColor Yellow
Write-Host "If issue is still ocurring, please contact a QA Automation SME." -ForegroundColor Green
