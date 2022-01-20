import { Component } from 'react';
import Add from '../components/Add.js';
import {Link} from "react-router-dom";

class AddPage extends Component {
    render(){
        return (
            <div>
                <Add/>
                <br/>
                <Link to={"/items"}>View My Items</Link>
                <br/>
                <Link to={"/"}>Home</Link>
            </div>
        );
    }
}

export default AddPage;