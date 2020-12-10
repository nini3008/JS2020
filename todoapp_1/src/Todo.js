import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
         super(props);
         this.state = {
             isEditing: false,
             task: this.props.task
        }
    }

    handleRemove = () => {
        this.props.removeTodo(this.props.id)
    }

    toggleForm  = () =>{
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleUpdate = (evt) =>{
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({
            isEditing: false
        })
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        let result;
        if(this.state.isEditing){
            result = (
                <li>
                    <form onSubmit={this.handleUpdate}>
                        <input type="text" value={this.state.task} name="task" onChange={this.handleChange}/>
                        <button>Save</button>
                    </form>
                </li>
            )
        } else {
            result = (
                <li>
                    <button onClick={this.toggleForm }>Edit</button>
                    <button onClick={this.handleRemove}>X</button>
                    <span>{this.props.task}</span>
                </li>
           )
        }
        return result;
    }
}

export default Todo;