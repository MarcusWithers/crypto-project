import React from "react";
import "./Coins.css";

const Coins = ({ name, image, symbol, current_price, market_cap,price_change_24h,price_change_percentage_24h,market_cap_rank, total_volume}) => {
  return (
    <div className="content">
      <div className="general">
        <p className ="start">
        <img src={image} alt={name} width="32" height="32" />
          {name}  
        </p>
        <p className ="symbol">
        {symbol.toUpperCase()}
        </p>
        <div className = "current_price"> ${current_price.toLocaleString()}</div>
        <div className="price_change_24h"> ${price_change_24h.toFixed(2)} </div>
        {price_change_percentage_24h > 0 ? (
            <div className="price_change_24h_percent_green"> {price_change_percentage_24h.toFixed(2)}%</div>
        ) : (
            <div className="price_change_24h_percent_red"> {price_change_percentage_24h.toFixed(2)}%</div>
        )}    
        <div className = "volume"> ${total_volume.toLocaleString()}</div>
        <div className="market_info">   ${market_cap.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default Coins;
