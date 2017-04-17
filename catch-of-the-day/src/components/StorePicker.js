import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this)
    }
    goToStore(event) {
        event.preventDefault();
        console.log('hai cliccato');
        // first get box text value
        const storeId = this.storeInput.value;
        console.log(`going to {storeId}`)
        // create transition fro / to /store/:storeId
        // we will use imperative method
        this.context.router.transitionTo(`/store/${storeId}`)
    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}
export default StorePicker;