import React, {FC} from "react";

import './DayOfWeek.css';



import TaskOfWeek from "../TaskOfWeek/TaskOfWeek";

interface DayOfWeekProps {
    dayName: string
    tasksArr: { index: number; task: string; priority: number, isDone: boolean, status: string}[],
    cooseDateWeek: (date: Date) => any,
    date: Date,
    changedDate: Date
}

const DayOfWeek: FC<DayOfWeekProps> = ({ dayName, tasksArr, cooseDateWeek, date, changedDate }) => {

    const newTaskArr = tasksArr.sort((a, b) => {
        return a.priority - b.priority;
    })

    const arr = ['', '', '', '', '', '', ''];
    const cangeClass = date.getTime() === new Date(changedDate.setHours(0, 0, 0, 0)).getTime() ? 'changed' : '';
    return (
        <div className={`Week-day ${cangeClass}`} onClick={() => cooseDateWeek(date)}>
            <b className="Week-day-title">{`${dayName}`}</b>
            <ul className="Week-day-list">
                {arr.map((el, i) => {
                    
                    return (
                        <TaskOfWeek
                            key={i}
                            newTaskArr={newTaskArr[i]}
                            i={i}/>
                    )
                })}

            </ul>

        </div>
    )
}

export default DayOfWeek;