// script.js
const API_URL_USD = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
const API_URL_INR = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false";

function fetchcryptodata() {
    $("#crypto-table").html('<tr><td colspan="6">Loading...</td></tr>');
    
    
    Promise.all([
        $.getJSON(API_URL_USD),
        $.getJSON(API_URL_INR)
    ]).then(([usdData, inrData]) => {
        $("#crypto-table").empty();
        
        usdData.forEach((usdCoin, index) => {
            const inrCoin = inrData[index];
            let usdChangeClass = usdCoin.price_change_percentage_24h >= 0 ? "positive" : "negative";
            let inrChangeClass = inrCoin.price_change_percentage_24h >= 0 ? "positive" : "negative";
            
            $("#crypto-table").append(`
                <tr>
                    <td>${usdCoin.name}</td>
                    <td>${usdCoin.symbol.toUpperCase()}</td>
                    <td>$${usdCoin.current_price.toFixed(2)}</td>
                    <td>₹${inrCoin.current_price.toFixed(2)}</td>
                    <td class="${usdChangeClass}">${usdCoin.price_change_percentage_24h.toFixed(2)}%</td>
                    <td class="${inrChangeClass}">${inrCoin.price_change_percentage_24h.toFixed(2)}%</td>
                </tr>
            `);
        });
    }).catch(error => {
        console.error("Error fetching data:", error);
        $("#crypto-table").html('<tr><td colspan="6">Error loading data</td></tr>');
    });
}

fetchcryptodata();
setInterval(fetchcryptodata, 30000);