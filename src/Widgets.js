import React from 'react';
import {
    TwitterTimelineEmbed, 
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";
import SearchIcon from '@mui/icons-material/Search';

function Widgets(){
    return(
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="Widgets__searchIcon" />
                <input placeholder='Search Twitter' type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>Whats happening</h2>

                <TwitterTweetEmbed tweetId={"858551177860055040"} />
                <TwitterTimelineEmbed sourceType="profile" screenName="cleverqazi" options={{height: 400}} />
                <TwitterShareButton url={"https://facebook.com/cleverprogrammer"}  options={{ text: "#reactjs is awesome", via: "clever programmer"}} />

            </div>
        </div>
    );
}

export default Widgets;