import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
    constructor() {
        super();
        this.renderInventory = this.renderInventory.bind(this)
    }
    renderInventory(key) {
        const fish = this.props.fishes[key];
        return (
            <div className="fish-edit" key={key}>
                <input type="text" name="name" defaultValue={fish.name} placeholder="Fish name" />
                <input type="text" name="price" defaultValue={fish.price} placeholder="Fish price" />
                <select type="text" name="status" defaultValue={fish.status} placeholder="Fish status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea type="text" name="desc" defaultValue={fish.desc} placeholder="Fish desc">

                </textarea>
                <input type="text" name="image" defaultValue={fish.image} placeholder="Fish image" />
            </div>
        )
    } 
    render() {
        return (
            <div>
                <h2>Inventory</h2>
                {Object.keys(this.props.fishes).map(this.renderInventory)}
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSamples}>Load Sample Fish</button>
            </div>
        )
    }
}

export default Inventory;