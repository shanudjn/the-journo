import React from 'react';
import Post from './Post/Post';

import './styles.css';

const Posts = () => {
    return (
        <>
            <div className="post-section">
                <h1>Posts</h1>
                <Post />
                <Post />
            </div>
        </>
    )
}
export default Posts;