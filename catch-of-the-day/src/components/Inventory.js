import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
    constructor() {
        super();
        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e, key) {
        const fish = this.props.fishes[key];
        // take a copy of that fish and update it with new data
        const updatedFish = {
            ...fish,
            [e.target.name]: e.target.value // this is a computed property. prende il valore che é stato cambviato e ne stor il cambiamento
        }
        this.props.updateFish(key, updatedFish)
    }
    renderInventory(key) {
        const fish = this.props.fishes[key];
        return (
            <div className="fish-edit" key={key}>
                <input type="text" name="name" defaultValue={fish.name} placeholder="Fish name" onChange={(e) => this.handleChange(e, key)} />
                <input type="text" name="price" defaultValue={fish.price} placeholder="Fish price" onChange={(e) => this.handleChange(e, key)} />
                <select type="text" name="status" defaultValue={fish.status} placeholder="Fish status" onChange={(e) => this.handleChange(e, key)}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea type="text" name="desc" defaultValue={fish.desc} placeholder="Fish desc" onChange={(e) => this.handleChange(e, key)}>

                </textarea>
                <input type="text" name="image" defaultValue={fish.image} placeholder="Fish image" onChange={(e) => this.handleChange(e, key)} />
                <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
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