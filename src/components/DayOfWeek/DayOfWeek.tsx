import React, {FC, MouseEvent} from "react";

import './DayOfWeek.css';

import TaskOfWeek from "../TaskOfWeek/TaskOfWeek";

interface DayOfWeekProps {
    dayName: string
    tasksArr: { index: number; task: string; priority: number, isDone: boolean, status: string, hour: string}[],
    cooseDateWeek: (date: Date) => any,
    date: Date,
    changedDate: Date,
    onChangedTask: (e: MouseEvent<HTMLElement>) => any,
    changedHour: string,
    changedTask: {date: Date, hour: string, index: number}
    chooseHour: (e: MouseEvent<HTMLElement>) => any
}

const DayOfWeek: FC<DayOfWeekProps> = ({ dayName, tasksArr, cooseDateWeek, date, changedDate, onChangedTask, changedHour, changedTask, chooseHour }) => {

    const newTaskArr = tasksArr.sort((a, b) => {
        return a.priority - b.priority;
    })
    const arr = ['', '', '', '', '', '', ''];
    const cangeClass = date.getTime() === new Date(changedDate.setHours(0, 0, 0, 0)).getTime() ? 'changed' : '';
    return (
        <div className={`week-day ${cangeClass}`} onClick={() => cooseDateWeek(date)}>
            <b className="week-day-title">{`${dayName}`}</b>
            <ul className="week-day-list">
                {arr.map((el, i) => {
                    
                    return (
                        <TaskOfWeek
                            key={i}
                            newTaskArr={newTaskArr[i]}
                            i={i}
                            onChangedTask={onChangedTask}
                            changedTask={changedTask}
                            gangeClass={cangeClass}
                            chooseHour={chooseHour}
                            changedHour={changedHour}/>
                    )
                })}

            </ul>

        </div>
    )
}

export default DayOfWeek;