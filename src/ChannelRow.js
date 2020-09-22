import React from 'react';
import './ChannelRow.css';

import {Avatar} from '@material-ui/core';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow({ image, channel, subs, noOfVideos, description, verified }) {
    return (
        <div className='ChannelRow'>
            <Avatar
                className='ChannelRow__logo'
                alt={channel}
                src={image}
            />
        <div className='ChannelRow__text'>
            <h4>
                {channel} {verified && <VerifiedIcon />}
            </h4>
            <p>{subs} subscriber . {noOfVideos} videos</p>
            <p>{description}</p>
        </div>            
        </div>
    );
}

export default ChannelRow;
