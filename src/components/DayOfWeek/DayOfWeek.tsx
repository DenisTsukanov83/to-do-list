import React, {FC} from "react";

import './DayOfWeek.css';

interface DayOfWeekProps {
    dayName: string,
    tasksArr: { index: number; task: string; }[]
}

const DayOfWeek: FC<DayOfWeekProps> = ({dayName, tasksArr}) => {
    console.log(tasksArr)
    const arr = ['', '', '', '', '', '', ''];
    return (
        <div className="Week-day">
            <b className="Week-day-title">{`${dayName}`}</b>
            <ul className="Week-day-list">
                {arr.map((el, i) => {
                    return(
                        <li>
                            <div className="Week-day-check"></div>
                            <div className="Week-day-data">{tasksArr[i] ? tasksArr[i].task : ''}</div>
                        </li>
                    )
                })}
                
            </ul>
            
        </div>
    )
}

export default DayOfWeek;