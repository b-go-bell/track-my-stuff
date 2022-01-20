import { Component } from 'react';
import {Link} from "react-router-dom";

class App extends Component {
    render(){
        return (
            <div>
                <p>Welcome to Track My Stuff</p>
                <Link to={"/items"}>View My Items</Link>
                <br/>
                <Link to={"/add"}>Add an Item</Link>
            </div>
        );
    }
}

export default App;
