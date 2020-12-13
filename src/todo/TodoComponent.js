import React from 'react';
import TodoWriter from './TodoWriter.js';
import TodoList from './TodoList.js';
import './TodoComponent.css';

class TodoComponent extends React.Component {
    constructor() {
        super();
        this.addItem = this.addItem.bind(this);
        this.changeItem = this.changeItem.bind(this);
    }
    
    state = {
        list: [
            {"id":0, "title":"TODO 1", "status":0}
        ]
    }

    addItem(item) {
        item.id = this.state.list.length === 0 ? 0 : this.state.list[this.state.list.length - 1].id + 1;
        item.status = 0;
        let list = this.state.list;
        list.push(item);
        this.setState({
            list:list
        });
    }

    changeItem(selItem) {
        let list = this.state.list;
        let item = list.filter((sel) => {
            if (sel.id === selItem.id)
                return sel;
        })[0];

        switch (item.status) {
            case 0:
                item.status = 1;
                break;
            case 1:
                item.status = 0;
                break;
            default:
                break;
        }

        this.setState({
            list:list
        });
    }
    
    render() {
        return (
            <div className="todoComponent">
                <TodoWriter addItem={this.addItem} />
                <TodoList listData={this.state.list} changeItem={this.changeItem}  />
            </div>
        );
    }
}

export default TodoComponent;