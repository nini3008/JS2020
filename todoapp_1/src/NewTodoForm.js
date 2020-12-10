import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: "" };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.createTodo({...this.state, id: uuidv4()});
        this.setState({
            task:""
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task">New to do</label>
                    <input
                        type="text"
                        name="task"
                        placeholder="New to do"
                        id="task"
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                    <button>Add new todo</button>
                </form>
            </div>
         );
    }
}

export default NewTodoForm;