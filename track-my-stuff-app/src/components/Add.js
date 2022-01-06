import { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(nameEvent){
        this.setState({name: nameEvent.target.value});
    }

    handleTypeChange(typeEvent){
        this.setState({type: typeEvent.target.value});
    }

    handleSubmit(submitEvent) {
        fetch('/items', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                type: this.state.type
        })
        }).then( response => response.text())
        .then(data => {
            alert("success: " + data);
        })
        .catch((error) => {
            alert("error: " + error);
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Item Name:
                    <br />
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                    <br />
                    Item Type:
                    <br />
                    <input
                        type="text"
                        name="type"
                        value={this.state.type}
                        onChange={this.handleTypeChange}
                    />
                    <br />
                    <button>Add Item</button>
                </form>
            </div>
        )
    }
}

export default Add;