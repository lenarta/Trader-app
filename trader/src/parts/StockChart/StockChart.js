import React from 'react';
import Plot from 'react-plotly.js';
import StockDatabase from './StockDatabase';

function StockChart({ company }) {
  let dataOne = '';

  if (company === "GOOG") {
    dataOne = StockDatabase.GOOG;
  } else if (company === "MSFT") {
    dataOne = StockDatabase.MSFT;
  } else if (company === "TWTR") {
    dataOne = StockDatabase.TWTR;
  } else if (company === "FB") {
    dataOne = StockDatabase.FB;
  }

  var trace1 = {  
    x: [],    
    close: [],    
    decreasing: {line: {color: 'red'}},    
    high: [],    
    increasing: {line: {color: 'green'}},    
    line: {color: 'black'},    
    low: [],    
    open: [],    
    type: 'candlestick', 
    xaxis: 'x', 
    yaxis: 'y'
  };

  for (let i = 0; i < dataOne.length; i++) {
    trace1.x.push(dataOne[i].date);
    trace1.close.push(dataOne[i].close);
    trace1.high.push(dataOne[i].high);
    trace1.low.push(dataOne[i].low);
    trace1.open.push(dataOne[i].open);
  }
  
  var data = [trace1];
  
  var layout = {
    width: 400, height: 260,
    dragmode: 'zoom', 
    margin: {
      r: 10, 
      t: 25, 
      b: 40, 
      l: 60
    }, 
    showlegend: false, 
    xaxis: {
      autorange: true, 
      domain: [0, 1], 
      rangeslider: {visible: false}, 
      title: 'Date', 
      type: 'date'
    }, 
    yaxis: {
      autorange: true, 
      domain: [0, 1], 
      title: 'Price',
      type: 'linear'
    }
  };

  return (
    <div id='stock-chart'>
      <Plot data={data} layout={layout} />
    </div>
  );
}

export default StockChart;