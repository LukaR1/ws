import dateFormatter from "./utils/dateFormatter";
import {useEffect, useState} from "react";
import {Alert} from "react-bootstrap";


const df = dateFormatter('H:i:s');

function Clock(props){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return()=>{
            clearInterval(intervalId)
        }
    },[])

    return(
        <Alert
            variant="primary"
            className="mt-3"
        >
            {df(time)}
            </Alert>
    );
}

export default Clock