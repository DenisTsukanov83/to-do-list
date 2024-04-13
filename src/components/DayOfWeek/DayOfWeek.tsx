import React, {FC} from "react";

import './DayOfWeek.css';

interface DayOfWeekProps {
    dayName: string,
    data: {},
    tasksArr: { index: number; task: string; }[]
}

const DayOfWeek: FC<DayOfWeekProps> = ({dayName, data, tasksArr}) => {
    console.log(tasksArr)
    return (
        <div className="Week-day">
            <b className="Week-day-title">{`${dayName}`}</b>
            <ul className="Week-day-list">
                <li>
                    <div className="Week-day-check"></div>
                    <div className="Week-day-data">{tasksArr[0] ? tasksArr[0].task : ''}</div>
                </li>
                <li>
                    <div className="Week-day-check"></div>
                    <div className="Week-day-data">{tasksArr[1] ? tasksArr[1].task : ''}</div>
                </li>
                <li>
                    <div className="Week-day-check"></div>
                    <div className="Week-day-data">{tasksArr[2] ? tasksArr[2].task : ''}</div>
                </li>
                <li>
                    <div className="Week-day-check"></div>
                    <div className="Week-day-data">{tasksArr[3] ? tasksArr[3].task : ''}</div>
                </li>
                <li>
                    <div className="Week-day-check"></div>
                    <div className="Week-day-data">{tasksArr[4] ? tasksArr[4].task : ''}</div>
                </li>
                <li>
                    <div className="Week-day-check"></div>
                    <div className="Week-day-data">{tasksArr[5] ? tasksArr[5].task : ''}</div>
                </li>
                <li>
                    <div className="Week-day-check"></div>
                    <div className="Week-day-data">{tasksArr[6] ? tasksArr[6].task : ''}</div>
                </li>
            </ul>
            
        </div>
    )
}

export default DayOfWeek;