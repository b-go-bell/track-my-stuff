import { Component } from 'react';
import GetItem from '../components/GetItem.js';
import {Link} from "react-router-dom";

class GetItemPage extends Component {
    render(){
        return (
            <div>
                <GetItem/>
                <br/>
                <br/>
                <Link to={"/items"}>Return to All Items</Link>
                <br/>
                <Link to={"/"}>Home</Link>
            </div>
        );
    }
}

export default GetItemPage;