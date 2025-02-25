const axios = require("axios");

const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${process.env.WEATHER_API_KEY}&units=metric`;

const CRYPTO_API = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH&convert=USD";
const NEWS_API = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`;

const MAX_RETRIES = 3;
const RETRY_DELAY = 5000; // 5 seconds

async function fetchWithRetry(url, options = {}, retries = MAX_RETRIES) {
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    if (error.response?.status === 429 && retries > 0) {
      console.warn(`Rate limit hit! Retrying in ${RETRY_DELAY / 1000} seconds...`);
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
      return fetchWithRetry(url, options, retries - 1);
    }
    console.error(`Error fetching ${url}:`, error.message);
    return null; // Return null so that other APIs can still work
  }
}

async function fetchData() {
  try {
    const [weatherRes, cryptoRes, newsRes] = await Promise.all([
      fetchWithRetry(WEATHER_API),
      fetchWithRetry(CRYPTO_API, {
        headers: { "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY },
      }),
      fetchWithRetry(NEWS_API),
    ]);

    return {
      weather: weatherRes
        ? {
            city: weatherRes.name,
            temperature: weatherRes.main.temp,
            humidity: weatherRes.main.humidity,
            description: weatherRes.weather[0].description,
          }
        : { error: "Weather data unavailable" },
      crypto: cryptoRes
        ? {
            bitcoin: cryptoRes.data?.BTC?.quote?.USD?.price || "N/A",
            ethereum: cryptoRes.data?.ETH?.quote?.USD?.price || "N/A",
          }
        : { error: "Crypto data unavailable" },
      news: newsRes
        ? newsRes.articles.slice(0, 5).map((article) => ({
            title: article.title,
            url: article.url,
          }))
        : [{ error: "News data unavailable" }],
    };
  } catch (error) {
    return { error: "Failed to fetch data" };
  }
}

module.exports = fetchData;
