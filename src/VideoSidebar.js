import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorderOutlined";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";



function VideoSidebar({ likes, shares, messages }) {
    const [Liked, setLiked] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {Liked ?
                    <FavoriteIcon
                        fontSize="large"
                        onClick={e => setLiked(false)}
                    />
                    :
                    <FavoriteBorderIcon
                        fontSize="large"
                        onClick={e => setLiked(true)}
                    />
                }
                <p>{Liked ? likes + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon
                    fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon
                    fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
