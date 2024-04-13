import React, { FC } from "react";

import './DayOfWeek.css';

interface DayOfWeekProps {
    dayName: string
    tasksArr: { index: number; task: string; priority: number}[]
}

const DayOfWeek: FC<DayOfWeekProps> = ({ dayName, tasksArr }) => {
    function getColor(priority: number) {
        let color = '';
        switch(true) {
            case priority === 1: color = 'blueColor';
            break;
            case priority === 0: color = 'redColor';
            break;
            case priority === 2: color = 'greenColor';
            break;
        }

        return color;
    }

    const newTaskArr = tasksArr.sort((a, b) => {
        return a.priority - b.priority
    })

    console.log(tasksArr)

    const arr = ['', '', '', '', '', '', ''];
    return (
        <div className="Week-day">
            <b className="Week-day-title">{`${dayName}`}</b>
            <ul className="Week-day-list">
                {arr.map((el, i) => {
                    return (
                        <li key={i}>
                            <div className="Week-day-check"></div>
                            <div className={`Week-day-data ${getColor(newTaskArr[i] ? newTaskArr[i].priority : 0)}`}>{newTaskArr[i] ? newTaskArr[i].task : ''}</div>
                        </li>
                    )
                })}

            </ul>

        </div>
    )
}

export default DayOfWeek;