import React, { Component } from 'react';
import TodoItems from './TodoItems';

import 'bootstrap/dist/css/bootstrap.css';
import './TodoList.css';


class TodoList extends Component {

    constructor(props) {
        super(props);

        var today = new Date();
        var presentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        this.state = {
            items: [],
            presentTime: presentTime
        }

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        e.preventDefault();

        if(this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now(),
                description: this._inputElement1.value,
                date: this._inputElement3.value,
                time: this._inputElement4.value
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
    
            this._inputElement.value = "";
            this._inputElement1.value = "";
            this._inputElement3.value = "";            
            this._inputElement4.value = "";            
        }

        console.log(this.state.items);
        console.log(this.state.presentTime);
    }

    showAll(e) {
        var newIt = {
            
        }
    }

    render() {
        return (
            <div className="container taskeditor">
                <div className="row">

                    <div className="col-md-6">
                        <h1 className="text-center">Task Manager</h1>

                        <form onSubmit={ this.addItem }>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Task Name</label>
                                <input ref={ (a) => this._inputElement = a } type="text" className="form-control" id="exampleInputEmail1" 
                                       aria-describedby="emailHelp" placeholder="Enter task" required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Task Description</label>
                                <textarea ref={ (b) => this._inputElement1 = b } className="form-control" id="exampleFormControlTextarea1" rows="3" 
                                          placeholder="Enter the task description"></textarea>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input ref={ (c) => this._inputElement3 = c } type="date" className="form-control" id="inputEmail4" placeholder="Date:  " required/>
                                </div>

                                <div className="form-group col-md-6">
                                    <input ref={ (d) => this._inputElement4 = d } type="time" className="form-control" id="inputPassword4" placeholder="Time:  " required/>
                                </div>
                            </div>

                            <button className="btn btn-lg btn-outline-dark col-sm-12 btn-task-create" type="submit">Create Task</button>
                        </form>
                    </div>

                    <div className="col-md-4 offset-md-2 taskbar">
                        <button className="btn btn-outline-dark col-md-5 text-center" onClick={showUpcoming}>Upcoming</button>
                        <button className="btn btn-outline-dark offset-md-2 col-md-5 text-center" onClick={showAll}>All</button>

                        <TodoItems entries={this.state.items} />
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default TodoList;