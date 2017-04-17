import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
    constructor() {
        super();

        this.addFish = this.addFish.bind(this);
        // getinitialstate
        this.state = {
            fishes: {},
            order: {}
        };
    }
    addFish(fish) {
        //update our state
        const fishes = {...this.state.fishes}  // the spread operator thake a copy of all elemnt and insert in the object
        // ad in our new fish
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        // this.state.fishes.fish1 = fish --> is possible but unsafe. better to store a copy of the state before to update it as done above
        // set state
        // this.setState({ fishes: fishes }) same of
        this.setState({ fishes })
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header age="5000" cool={true} tagline="Fresh Seafood market" />
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            </div>
        )
    }
}

export default App;