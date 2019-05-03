import React, { Component } from "react";
import './TodoItems.css';
 
class TodoItems extends Component {
    createTasks(item) {
    return <li key={item.key}>{item.text} 
               <span className="tasktime">{item.time}</span>
               <span className="taskDesc"><b>Description:</b> { item.description }</span>
               <span className="taskDate">{ item.date }</span>
            </li>
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};
 
export default TodoItems;