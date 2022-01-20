import { Component } from 'react';

class DeleteItem extends Component {
    constructor(props) {
        super(props);
        this.state = { delId: this.props.id};
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(submitEvent) {
        console.log(this.state.delId);
        fetch(`/items/${this.state.delId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        })
        //window.location.reload();
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button>
                        Delete
                    </button>
                </form>
            </div>
        );
    }
}

export default DeleteItem;