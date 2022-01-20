import {useState, useEffect }  from 'react';
import { useParams } from 'react-router-dom';


function GetItem(){
    const { id } = useParams();
    const [item, setItem] = useState("");

    useEffect(() => {
        fetch(`/items/${id}`, {method: "GET"})
            .then( response => response.json())
            .then(data => setItem(data[0]))
    }, []);

    function printItem() {
        return (
            <div>
                {item[0]}
                <br/>
                {item[1]}
                <br/>
                {item[2]}
            </div>
        );
    }

    return (
        <div>
            {!item.length ?
                <p> 'fetching...' </p> :
                printItem()
            }
        </div>
    );
}

export default GetItem;