import {Container} from "react-bootstrap";
import Clock from "./Clock";
import {useState} from "react";
import PostsView from "./views/PostsView";

export default function App(){

    const [showClock, setShowClock] = useState(true);

    return (
        <Container fluid>
            <button
                variant="primary"
                className='mt-3'
                onClick={() => setShowClock(!showClock)}
            >
                toggle clock
            </button>
            {showClock ? <Clock/> : null}
            <PostsView/>
        </Container>
    );
}