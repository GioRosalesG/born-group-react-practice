import React, {useState} from "react";
import "./index.css";
import Item from "./item";

export default function StockData() {
  const [dateToSearch, setDateToSearch] = useState('');
  const [stockData, setStockData] = useState({});
  const [isFetched, setIsFetched] = useState(false);
  const handleOnChange = ({target: {value}}) => {
    setDateToSearch(value);
  };
  const handleSubmit = async () => {
    const resp = await fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${cleanInput(dateToSearch)}`);
    
    if(!resp.ok) {
      return [];
    }

    const data = await resp.json();

    console.log(data)

    setIsFetched(true);
    setStockData(data.data[0] || {});
    return;
  };
  const cleanInput = (textToClean) => {
    return textToClean;
  }
  return (
    <div className="layout-column align-items-center mt-50">
      <h1>Hola a todos</h1>
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" placeholder="5-January-2000" id="app-input" data-testid="app-input" value={dateToSearch} onChange={handleOnChange}/>
        <button className="" id="submit-button" data-testid="submit-button" onClick={handleSubmit}>Search</button>
      </section>
      {isFetched && Object.keys(stockData).length !== 0 ? <Item stockItems={stockData} /> : ''}
      {Object.keys(stockData).length === 0 ? <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result">{isFetched ? 'No results found' : ''}</div> : ''} 
      
    </div>
  );
}
