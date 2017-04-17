import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';

import sampleFishes from '../sample-fishes'
import base from '../base'

class App extends React.Component {
    constructor() {
        super();

        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
        
        // getinitialstate
        this.state = {
            fishes: {},
            order: {}
        };
    }

    componentWillMount() {
        this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        })
    }

    componentWillUnmont() {
        base.removeBinding(this.ref);
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
    loadSamples() {
        this.setState({
            fishes: sampleFishes
        });
    }
    addToOrder(key) {
        // keep track of the state
        const order = {...this.state.order}
        // update the order
        order[key] = order[key] + 1 || 1;
        // update state
        this.setState({ order })
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header age="5000" cool={true} tagline="Fresh Seafood market" />
                    <ul className="list-of-fishes">
                        {
                            Object
                                .keys(this.state.fishes)
                                .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
                        }
                    </ul>
                </div>
                <Order fish={this.state.fishes} order={this.state.order}  />
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
            </div>
        )
    }
}

export default App;