import React from 'react';
import './TodoComponent.css';

class TodoItem extends React.Component {
    constructor() {
        super();
        this.change = this.change.bind(this);
    }
    
    change() {
        this.props.changeItem(this.props.item);
    }
    
    render() {
        return (
            <li onClick={this.change} className={this.props.item.status === 0 ? 'none' : 'on'}>{this.props.item.title}</li>
        );
    }
}

export default TodoItem;