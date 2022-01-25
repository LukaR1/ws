import React, {useEffect, useState} from "react";
import axios from "axios";
import {Card, CardGroup} from "react-bootstrap";

function PostsList(props) {

    const [posts, setPosts] = useState([]);

    async function getPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
        setPosts(response.data);
    }

    useEffect(() => {
        getPosts().catch(console.error);
    }, []);

    return (
        <CardGroup className={"row"}>
            {posts.map((post) => {
                    return (
                        <div key={post.id} className="col-lg-2 text-center mt-3 ">
                            <Card style={{width: '100%', height: '100%', backgroundColor: 'lightsteelblue',}}>
                                <Card.Header style={{fontSize: 15, color: 'white',}}>ალბომი {post.id} </Card.Header>
                                <Card.Body style={{cursor: 'pointer'}}>
                                    {post.title}
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }
            )}
        </CardGroup>
    );
}

export default PostsList;


