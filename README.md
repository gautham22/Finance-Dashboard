# Personal Finance Dashboard

A React + Vite dashboard for importing monthly Excel workbooks and comparing category budgets with actual spending.

## Run locally

```bash
npm install
npm run dev
```

## Publish on GitHub Pages

This project is configured for the public repository `gautham22/Finance-Dashboard`.

1. Push the contents of this folder to the repository's `main` branch.
2. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions** if it is not already selected.
3. Open the **Actions** tab and wait for **Deploy dashboard to GitHub Pages** to complete.
4. The site will be available at `https://gautham22.github.io/Finance-Dashboard/`.

Every push to `main` will rebuild and publish the site.

## Google Sheets connection

The Google Sheets connector runs in the browser and needs a Google OAuth web client ID. Configure the deployed site's JavaScript origin in Google Cloud and enter the client ID in **Settings**. Google may require a domain you control for production OAuth; a custom domain can be connected to GitHub Pages if needed. Do not commit OAuth client secrets or financial workbooks to this repository.

The first spreadsheet tab is used for `Category` and `Budget` values. Remaining tabs are read as transaction sheets.
