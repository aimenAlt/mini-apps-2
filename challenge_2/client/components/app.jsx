import React from 'react';
import OurChart from './OurChart.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <canvas id='chart'>
          <OurChart />
        </canvas>
        <div> <i>Powered by CoinDesk</i></div>
      </div>
    );
  }
}

export default App;