import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
    constructor() {
        super();
        // getinitialstate
        this.state = {
            fishes: {},
            order: {}
        };
    }
    addFish(fish) {
        //update our state
        
        // set state
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header age="5000" cool={true} tagline="Fresh Seafood market" />
                </div>
                <Order />
                <Inventory />
            </div>
        )
    }
}

export default App;