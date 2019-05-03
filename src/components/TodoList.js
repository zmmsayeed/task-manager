import React, { Component } from 'react';
import TodoItems from './TodoItems';

import 'bootstrap/dist/css/bootstrap.css';
import './TodoList.css';


class TodoList extends Component {

    constructor(props) {
        super(props);

        this.origItems = [];

        this.state = {
            items: [],
            selectedDate: "DD:MM:YYYY",
            selectedTime: "00:00"
        }

        this.addItem = this.addItem.bind(this);
        this.showUpcoming = this.showUpcoming.bind(this);
    }


    addItem = async function(e) {
        e.preventDefault();

        var selectedTime = this._inputElement4.value;
        console.log(selectedTime);

        if(this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now(),
                description: this._inputElement1.value,
                date: this.state.selectedDate,
                time: this.state.selectedTime
            };

            await this.setState((prevState) => { 
                return {
                    items: prevState.items.concat(newItem)
                }
            });

            // this.setState((prevState) => {
            //     return {
            //         items: prevState.items.concat(newItem)
            //     };
            // });


            this.origItems = this.state.items;
            this._inputElement.value = "";
            this._inputElement1.value = "";
            this._inputElement3.value = "";            
            this._inputElement4.value = "";            
        }

        // console.log(this.origItems);
        // console.log(this.state.items);
        // console.log(this.state.selectedTime);
    }

    showUpcoming = async function(e) {
        e.preventDefault();

        var today = new Date();
        var presentTime = today.getHours() + ":" + today.getMinutes();
        // console.log(presentTime);

        var presentDate = today.getFullYear() + "-" + today.getMonth()+1 + "-" + today.getDate();

        var filteredItems = [];
        this.state.items.map(item => {
            if(item.date > presentDate || item.time > presentTime) {
                filteredItems.push(item);
            }
            return filteredItems;
        });
        

        await this.setState( {
            items:filteredItems
        });
    }

    showAll = async function(e) {
        e.preventDefault();

        var items1 = this.origItems;

        await this.setState( {
            items: items1
        });
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
                                    <input ref={ (c) => this._inputElement3 = c } 
                                           onChange={(c) => { this.setState({selectedDate: c.target.value})}} 
                                           type="date" className="form-control" 
                                           id="inputEmail4" placeholder="Date:" required/>
                                </div>

                                <div className="form-group col-md-6">
                                    <input ref={ (d) => this._inputElement4 = d } 
                                           onChange={(d) => { this.setState({selectedTime: d.target.value})}}
                                           type="time" className="form-control" 
                                           id="time" placeholder="Time:  " required/>
                                </div>
                            </div>

                            <button className="btn btn-lg btn-outline-dark col-sm-12 btn-task-create" type="submit">Create Task</button>
                            
                            <hr className="lastHr" />
                        </form>
                    </div>

                    <div className="col-md-4 offset-md-2 taskbar">
                        <button className="btn btn-outline-dark col-md-5 col-sm-12 text-center" onClick={this.showAll}>All</button>
                        <button className="btn btn-outline-dark offset-md-2 col-md-5 col-sm-12 text-center" onClick={this.showUpcoming}>Upcoming</button>

                        <TodoItems entries={this.state.items} />
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default TodoList;