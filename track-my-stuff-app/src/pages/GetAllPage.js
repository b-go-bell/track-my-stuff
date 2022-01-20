import { Component } from 'react';
import GetAll from '../components/GetAll.js';
import {Link} from "react-router-dom";

class GetAllPage extends Component {
    render(){
        return (
            <div>
                <GetAll/>
                <br/>
                <br/>
                <Link to={"/add"}>Add an Item</Link>
                <br/>
                <Link to={"/"}>Home</Link>
            </div>
        );
    }
}

export default GetAllPage;