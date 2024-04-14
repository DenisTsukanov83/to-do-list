import React, {useState} from "react";

import './Clock.css';

function Clock() {
    function getTime() {
        const hours = new Date().getHours()
        const minutes = new Date().getMinutes() < 10 ? '0' + +(new Date().getMinutes()) : new Date().getMinutes();
        const seconds = new Date().getSeconds() < 10 ? '0' + +(new Date().getSeconds()) : new Date().getSeconds();
        const day = new Date().getDate();
        const month = new Date().getMonth() < 10 ? '0' + +(new Date().getMonth() + 1) : new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        return `${hours}:${minutes}:${seconds}`;
    }
    
    const [time, setTime] = useState(getTime());

    setInterval(() => {
        setTime(getTime())
    }, 1000);

    return <b>{time}</b>
}

export default Clock;