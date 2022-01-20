import { Component } from 'react';
import {Link} from "react-router-dom";
import DeleteItem from './DeleteItem';

class GetAll extends Component {
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
                    map.set(data[i][0], data[i] );
                }
                this.setState({items: map});
            });
    }


    printList() {
        let arr = [];
        this.state.items.forEach(function(value, key){
            let input = [key, value[1], value[2]];
            arr.push(input)
        })
        return (
            <table>
                <tbody key={"tbodyKey"}>
                {arr.map((item) =>
                    <tr key={item[0]}>
                        <td key="{item[0]}">
                            <Link to={`/items/${item[0]}`}>{item[0]}</Link>
                        </td>
                        <td key="{item[1]}"> {item[1]} </td>
                        <td key="{item[2]}"> {item[2]} </td>
                        <td key="{item[0]}del">
                            <DeleteItem id={`${item[0]}`}/>
                        </td>
                    </tr>
                )}
                </tbody>
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

export default GetAll;