import React, { useState } from "react";
import "./Tweetbox.css";
import {Button, Avatar} from '@mui/material';
import db from './firebase';
function Tweetbox(){
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Naveen Prakash' ,
            userName: '@prakashpalace',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/media/DCL_44aXoAAiPlE.jpg"
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return(
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <Avatar src="https://i.pinimg.com/originals/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.png" />
                    <input onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="Whats happening" type=""></input>
                   
                </div>
                <input onChange={(e) => setTweetImage(e.target.value)} value={tweetImage} className="tweetbox__imageInput" placeholder="Enter image url" type="text"></input>
            <Button onClick={sendTweet} type="submit" className="tweetbox__tweetbutton">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox;