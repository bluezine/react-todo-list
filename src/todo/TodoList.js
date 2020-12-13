import React from 'react';
import TodoItem from './TodoItem.js';
import './TodoComponent.css';

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.listData.map((item) => (
                    <TodoItem key={item.id} item={item} changeItem={this.props.changeItem} />
                ))}
            </ul>
        );
    }
}

export default TodoList;