import React, {useEffect, useState} from 'react';
import "./Feed.css";
import Tweetbox from './Tweetbox';
import Post from './Post';
import db from './firebase'; 
import FlipMove from 'react-flip-move';

function Feed(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);
    return(
        <div className="feed">
            {/*Header */}
            <div className="feed__header">
                <h1>Home</h1>
            </div>
            

            {/*Tweetbox */}
            <Tweetbox />

            {/*Post */}
            <FlipMove>
            {   posts.map(post => ( <Post  
                    key={post.text}
                    displayName={post.displayName}
                    username={post.userName}
                    verified={post.verified}
                    text={post.text}
                    image={post.image}
                    avatar={post.avatar}
                    
                    />
                    
                ))}

            </FlipMove>
            
            
            {/*Post */}
            {/*Post */}
            {/*Post */}

        </div>
    )
}

export default Feed;