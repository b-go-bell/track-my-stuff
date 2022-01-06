import { Component } from 'react';
import Get from "../components/Get";
import Add from "../components/Add";

class App extends Component {
    render(){
        return (
            <div>
                <Add/>
                <Get/>
            </div>
        );
    }
}

export default App;
