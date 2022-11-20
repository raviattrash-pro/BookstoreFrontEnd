import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import './Announce.css'
function Announce() {


   const [announceStyle ,setAnnounceStyle ]=useState('bg-[#8a4af3] font-bold text-white flex  item-center justify-center')
    const handleCloseButton = () =>{
        setAnnounceStyle(announceStyle + "hidden");
        alert("you click X");
    }
    return (
        <div className={announceStyle}>
            <h2> Hurry up it's 70 % off now !!!</h2>
            <CloseIcon className='cursor-pointer' onClick={handleCloseButton} />
        </div>
    );
}

export default Announce;