import React, {useEffect, useState} from "react";
import axios from "axios";
import {Card, Table} from "react-bootstrap";

function PostsList(props){

 const [posts, setPosts] = useState([]);

 async function getPosts() {
     const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
     setPosts(response.data);
 }

  useEffect(() => {
     getPosts().catch(console.error);
     },[]);

  return(
      <Card style={{ width: '18rem' }}>
          <Card.Body>
              <Card.Title>Album</Card.Title>
              {
                  posts.map((post)=>(
                      <tr key={post.id}>
                          <td>{post.id}</td>
                      </tr>
                  ))
              }
          </Card.Body>
      </Card>
    );
}

export default PostsList;
