import React from "react";
import './platStore.css';
import mobile from '../../../assets/mobile.jpg.jpg';

export default function PlayStore(){
    return(
        <div className="playStoreContainer">
            <img src={mobile} alt="pic" />
            <div className="content">
                <img src={} alt="arrow" />
                <div>
                <p>DownLoad the</p>
                <p>Medify App</p>
                <p>Get the link to download the app</p>
                </div>

            </div>
        </div>
    )
}