import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';



function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneOutlinedIcon />
                <h2>FILTER</h2>            
            </div>            

            <hr></hr>
            
            <div>
                <ChannelRow
                    image='https://yt3.ggpht.com/a/AATXAJxuvwdB2H7bQQyQk8Aqu28rYXWmz_WJWjbwgcBD=s176-c-k-c0x00ffffff-no-rj-mo'
                    channel='MKBHD'
                    verified
                    subs='900K'
                    noOfVideos={324}
                    description='MKBHD: Quality Tech Videos | YouTuber | Geek | Consumer Electronics | Tech Head | Internet Personality!
                    My video production gear: https://kit.co/MKBHD/video-gear               
                    marques@MKBHD.com
                    
                    NYC'                
                />
                <hr></hr>
                <VideoRow 
                    views='3.90M'
                    subs='502K'
                    description='Surface Duo: The dual screen Microsoft folding phone.
                    MKBHD Merch: http://shop.MKBHD.com
                    Surface Duo skins: https://dbrand.com/duo'
                    timestamp='1 day ago'
                    channel='MKBHD'
                    title='Surface Duo Review: The Good, The Bad & The Ugly!'
                    image='https://i.ytimg.com/vi/0fB2cQFp008/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAgPmYs7784aYbsbfJCQbWpIpOcgg'
                />

                <VideoRow 
                    views='3.90M'
                    subs='502K'
                    description='Surface Duo: The dual screen Microsoft folding phone.
                    MKBHD Merch: http://shop.MKBHD.com
                    Surface Duo skins: https://dbrand.com/duo'
                    timestamp='1 day ago'
                    channel='MKBHD'
                    title='Surface Duo Review: The Good, The Bad & The Ugly!'
                    image='https://i.ytimg.com/vi/0fB2cQFp008/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAgPmYs7784aYbsbfJCQbWpIpOcgg'
                />

                <VideoRow 
                    views='3.90M'
                    subs='502K'
                    description='Surface Duo: The dual screen Microsoft folding phone.
                    MKBHD Merch: http://shop.MKBHD.com
                    Surface Duo skins: https://dbrand.com/duo'
                    timestamp='1 day ago'
                    channel='MKBHD'
                    title='Surface Duo Review: The Good, The Bad & The Ugly!'
                    image='https://i.ytimg.com/vi/0fB2cQFp008/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAgPmYs7784aYbsbfJCQbWpIpOcgg'
                />

                <VideoRow 
                    views='3.90M'
                    subs='502K'
                    description='Surface Duo: The dual screen Microsoft folding phone.
                    MKBHD Merch: http://shop.MKBHD.com
                    Surface Duo skins: https://dbrand.com/duo'
                    timestamp='1 day ago'
                    channel='MKBHD'
                    title='Surface Duo Review: The Good, The Bad & The Ugly!'
                    image='https://i.ytimg.com/vi/0fB2cQFp008/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAgPmYs7784aYbsbfJCQbWpIpOcgg'
                />

                <VideoRow 
                    views='3.90M'
                    subs='502K'
                    description='Surface Duo: The dual screen Microsoft folding phone.
                    MKBHD Merch: http://shop.MKBHD.com
                    Surface Duo skins: https://dbrand.com/duo'
                    timestamp='1 day ago'
                    channel='MKBHD'
                    title='Surface Duo Review: The Good, The Bad & The Ugly!'
                    image='https://i.ytimg.com/vi/0fB2cQFp008/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAgPmYs7784aYbsbfJCQbWpIpOcgg'
                />

                <VideoRow 
                    views='3.90M'
                    subs='502K'
                    description='Surface Duo: The dual screen Microsoft folding phone.
                    MKBHD Merch: http://shop.MKBHD.com
                    Surface Duo skins: https://dbrand.com/duo'
                    timestamp='1 day ago'
                    channel='MKBHD'
                    title='Surface Duo Review: The Good, The Bad & The Ugly!'
                    image='https://i.ytimg.com/vi/0fB2cQFp008/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAgPmYs7784aYbsbfJCQbWpIpOcgg'
                />

                <VideoRow 
                    views='3.90M'
                    subs='502K'
                    description='Surface Duo: The dual screen Microsoft folding phone.
                    MKBHD Merch: http://shop.MKBHD.com
                    Surface Duo skins: https://dbrand.com/duo'
                    timestamp='1 day ago'
                    channel='MKBHD'
                    title='Surface Duo Review: The Good, The Bad & The Ugly!'
                    image='https://i.ytimg.com/vi/0fB2cQFp008/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAgPmYs7784aYbsbfJCQbWpIpOcgg'
                />

                <VideoRow 
                    views='3.90M'
                    subs='502K'
                    description='Surface Duo: The dual screen Microsoft folding phone.
                    MKBHD Merch: http://shop.MKBHD.com
                    Surface Duo skins: https://dbrand.com/duo'
                    timestamp='1 day ago'
                    channel='MKBHD'
                    title='Surface Duo Review: The Good, The Bad & The Ugly!'
                    image='https://i.ytimg.com/vi/0fB2cQFp008/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAgPmYs7784aYbsbfJCQbWpIpOcgg'
                />

                <VideoRow 
                    views='3.90M'
                    subs='502K'
                    description='Surface Duo: The dual screen Microsoft folding phone.
                    MKBHD Merch: http://shop.MKBHD.com
                    Surface Duo skins: https://dbrand.com/duo'
                    timestamp='1 day ago'
                    channel='MKBHD'
                    title='Surface Duo Review: The Good, The Bad & The Ugly!'
                    image='https://i.ytimg.com/vi/0fB2cQFp008/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAgPmYs7784aYbsbfJCQbWpIpOcgg'
                />

                <VideoRow 
                    views='3.90M'
                    subs='502K'
                    description='Surface Duo: The dual screen Microsoft folding phone.
                    MKBHD Merch: http://shop.MKBHD.com
                    Surface Duo skins: https://dbrand.com/duo'
                    timestamp='1 day ago'
                    channel='MKBHD'
                    title='Surface Duo Review: The Good, The Bad & The Ugly!'
                    image='https://i.ytimg.com/vi/0fB2cQFp008/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAgPmYs7784aYbsbfJCQbWpIpOcgg'
                />

                <VideoRow 
                    views='3.90M'
                    subs='502K'
                    description='Surface Duo: The dual screen Microsoft folding phone.
                    MKBHD Merch: http://shop.MKBHD.com
                    Surface Duo skins: https://dbrand.com/duo'
                    timestamp='1 day ago'
                    channel='MKBHD'
                    title='Surface Duo Review: The Good, The Bad & The Ugly!'
                    image='https://i.ytimg.com/vi/0fB2cQFp008/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAgPmYs7784aYbsbfJCQbWpIpOcgg'
                />

                <VideoRow 
                    views='3.90M'
                    subs='502K'
                    description='Surface Duo: The dual screen Microsoft folding phone.
                    MKBHD Merch: http://shop.MKBHD.com
                    Surface Duo skins: https://dbrand.com/duo'
                    timestamp='1 day ago'
                    channel='MKBHD'
                    title='Surface Duo Review: The Good, The Bad & The Ugly!'
                    image='https://i.ytimg.com/vi/0fB2cQFp008/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAgPmYs7784aYbsbfJCQbWpIpOcgg'
                />

                <VideoRow 
                    views='3.90M'
                    subs='502K'
                    description='Surface Duo: The dual screen Microsoft folding phone.
                    MKBHD Merch: http://shop.MKBHD.com
                    Surface Duo skins: https://dbrand.com/duo'
                    timestamp='1 day ago'
                    channel='MKBHD'
                    title='Surface Duo Review: The Good, The Bad & The Ugly!'
                    image='https://i.ytimg.com/vi/0fB2cQFp008/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAgPmYs7784aYbsbfJCQbWpIpOcgg'
                />

            
            </div>
            
           </div>
    );
}

export default SearchPage;
