import { Component } from 'react';

class Get extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: new Map()
        }
    }

    componentDidMount() {
        fetch('/items', {method: "GET"})
            .then(response => {
                return response.json();
            })
            .then(resp => {
                return resp;
            })
            .then((data) => {
                let map = new Map();
                for(var i = 0; i < data.length; i++){
                    map.set(i+1, data[i]);
                }
                this.setState({items: map});
            });
    }

    componentDidUpdate() {
        fetch('/items', {method: "GET"})
            .then(response => {
                return response.json();
            })
            .then(resp => {
                return resp;
            })
            .then((data) => {
                let map = new Map();
                for(var i = 0; i < data.length; i++){
                    map.set(i+1, data[i]);
                }
                this.setState({items: map});
            });
    }

    printList() {
        let arr = [];
        this.state.items.forEach(function(value, key){
            let input = [key, value[0], value[1]];
            arr.push(input)
        })
        return (
            <table>
                {arr.map((item) =>
                    <tr>
                        <td> {item[0]} </td>
                        <td> {item[1]} </td>
                        <td> {item[2]} </td>
                    </tr>
                )}
            </table>
        );
    }

    render(){
        return (
            <div>
                {this.printList()}
            </div>
        );
    }
}

export default Get;