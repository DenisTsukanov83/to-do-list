import React, {useState, FC} from "react";

import { timeType } from "../types/timeType";

import './Clock.css';

interface ClockProps {
    timeObj: timeType;
}

const Clock: FC<ClockProps> = ({timeObj}) => {
    function getTime() {
        const hours = new Date().getHours()
        const minutes = new Date().getMinutes() < 10 ? '0' + +(new Date().getMinutes()) : new Date().getMinutes();
        const seconds = new Date().getSeconds() < 10 ? '0' + +(new Date().getSeconds()) : new Date().getSeconds();
        const day = new Date().getDate();
        const month = new Date().getMonth() < 10 ? '0' + +(new Date().getMonth()) : new Date().getMonth();
        const year:number = new Date().getFullYear();
        return `Сегодня: ${day} ${timeObj.monthName2[+month]} ${year} / ${hours}:${minutes}:${seconds}`;
        
    }
    
    const [time, setTime] = useState(getTime());



    setInterval(() => {
        setTime(getTime())
    }, 1000);

    return <b>{time}</b>
}

export default Clock;