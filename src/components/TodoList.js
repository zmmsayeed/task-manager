import React, { Component } from 'react';
import TodoItems from './TodoItems';

import 'bootstrap/dist/css/bootstrap.css';
import './TodoList.css';


class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        if(this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
    
            this._inputElement.value = "";
        }

        console.log(this.state.items);

        e.preventDefault();
    }

    render() {
        return (
            <div className="container taskeditor">
                <div className="row">

                    <div className="col-md-6">
                        <h1 className="text-center">Task Manager</h1>

                        <form onSubmit={ this.addItem }>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Task Name</label>
                                <input ref={ (a) => this._inputElement = a } type="text" className="form-control" id="exampleInputEmail1" 
                                       aria-describedby="emailHelp" placeholder="Enter task" required/>
                            </div>

                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Task Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" 
                                          placeholder="Enter the task description"></textarea>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input type="date" className="form-control" id="inputEmail4" placeholder="Select Date:  " required/>
                                </div>

                                <div className="form-group col-md-6">
                                    <input type="time" className="form-control" id="inputPassword4" placeholder="Select Time:  " required/>
                                </div>
                            </div>

                            <button className="btn btn-lg btn-outline-dark col-sm-12 btn-task-create" type="submit">Create Task</button>
                        </form>
                    </div>

                    <div className="col-md-4 offset-md-2 taskbar">
                        <button className="btn btn-outline-dark col-md-5 text-center">Upcoming</button>
                        <button className="btn btn-outline-dark offset-md-2 col-md-5 text-center">All</button>

                        <TodoItems entries={this.state.items} />
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default TodoList;