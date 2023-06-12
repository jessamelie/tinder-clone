import React from 'react';
import "../style/SwipeButtons.css";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

const SwipeButtons = () => {
    return (
        <div className='swipeButtons'>
            <IconButton className='repeatBtn'>
                <ReplayIcon/>
            </IconButton>
            <IconButton className='closeBtn'>
                <CloseIcon/>
            </IconButton>
            <IconButton className='starBtn'>
                <StarRateIcon/>
            </IconButton>
            <IconButton className='favoriteBtn'>
                <FavoriteIcon/>
            </IconButton>
            <IconButton className='flashOnBtn'>
                <FlashOnIcon/>
            </IconButton>
        </div>
    );
};

export default SwipeButtons;