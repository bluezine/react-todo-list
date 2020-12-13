import React from 'react';

class TodoWriter extends React.Component {
    constructor() {
        super();
        this.changeValue = this.changeValue.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    state = {
        value : ''
    }

    changeValue(e) {
        this.setState({
            value:e.target.value
        });
        if (e.keyCode && e.keyCode === 13) {
            this.addItem();
        }
    }

    addItem() {
        let item = {};
        item.title = this.state.value;
        this.props.addItem(item);
        this.setState({
            value:''
        })
    }
    
    render() {
        return(
            <div>
                <input type="text" value={this.state.value} onChange={this.changeValue} onKeyUp={this.changeValue}></input>
                <button onClick={this.addItem}>ADD</button>
            </div>
        );
    }
}

export default TodoWriter;