import React from "react";

const Item = ({stockItems: {open, close, high, low}}) => (
  <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
    <li>Open: {open}</li>
    <li>Close: {close}</li>
    <li>High: {high}</li>
    <li>Low: {low}</li>
  </ul>
);

export default Item;
