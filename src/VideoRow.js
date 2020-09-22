import React from 'react';
import './VideoRow.css';

function VideoRow({views, subs, description, timestamp, channel, title, image}) {
    return (
        <div className='VideoRow'>
            <img
            className=''
            alt={channel}
            src={image}
            />
            <div className='VideoRow__text'>
                <h3>{title}</h3>
                <p className='VideoRow__headline'>
                    {channel} . {subs} Subscribers {views} . {timestamp}
                </p>
                <p className='VideoRow__description'>{description}</p>
            </div>            
        </div>
    );
}

export default VideoRow;