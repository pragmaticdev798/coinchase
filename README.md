## Features
- real-time cryptocurrency prices 
- price tracking in both usd and inr
- 24-hour price change indicators
- auto-updates every 30 seconds
- clean dark mode UI
- top 10 cryptocurrencies by market cap

## Tech Stack
- HTML
- CSS
- Javascript
- jQuery
- Coingecko api

## Running Locally
1. Clone this repo 
```bash
git clone github.com/pragmaticdev798/coinchase
```

2. Open with a local server
- Using vs code? Install live server extension and click "go live"
- Using python? Run `python -m http.server` in the project directory
- Using node? install `http-server` globally and run it

3. Open `localhost` in your browser with the port number shown by your server

## API Info
This project uses the CoinGecko API v3. No API key needed! but there are rate limits

## Screenshots


## Known Issues
- API rate limiting might cause occasional loading delays
- prices might flicker during updates due to rapid DOM manipulation