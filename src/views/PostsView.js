import React from "react";
import PostsList from "../components/posts/PostsList";

function PostsView(props) {
    return (
        <div>
            <h1>post view</h1>
            <PostsList/>
        </div>
    );
}

export default PostsView;