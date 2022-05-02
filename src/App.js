import React, { useState, useEffect } from "react";
import Coins from "./components/Coins";
import "./App.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    )
      .then((res) => res.json()) // converts to json
      .then((apidata) => {
        // data is converter under the name "apidata"
        setData(apidata); // state is set for "apidata"
        console.log(apidata); // logs fetched data
      });
  });
  return (
    <div>
      <div className = "heading"><h2>Coin</h2> <h2>Symbol</h2> <h2>Current Price</h2> <h2>Price Change</h2> <h2>Price Change %</h2> <h2>Volume</h2> <h2>Market Cap</h2> </div>
      {data.map((coin) => {
        return (
          <Coins
            name={coin.name}
            market_cap_rank = {coin.market_cap_rank}
            total_volume = {coin.total_volume}
            image={coin.image}
            symbol={coin.symbol}
            market_cap={coin.market_cap}
            current_price={coin.current_price}
            price_change_24h={coin.price_change_24h}
            price_change_percentage_24h = {coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}
