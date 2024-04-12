import React, {FC, MouseEvent} from "react";

import './Tasks.css';

import { timeType } from "../types/timeType";

import Hour from "../Hour/Hour";
import { dataType } from "../types/dataType";


interface TasksProps {
    time: timeType,
    changedDate: Date,
    chooseHour: (e: MouseEvent<HTMLElement>) => void,
    changedHour: string,
    data: dataType[]
}

const Tasks: FC<TasksProps> = ({time, changedDate, chooseHour, changedHour, data}) => {
    
    const hoursArr: string[] = [];
    const index = data.findIndex(el => el.date.getTime() === changedDate.getTime());
    for(let  i = 0; i < 16; i++) {
        hoursArr.push('')
        
    }


    return (
        <div className="Tasks">
            <h3>{`План на ${changedDate.getDate()} ${time.monthName2[changedDate.getMonth()]} ${changedDate.getFullYear()}`}</h3>
            <div className="Tasks-container" onClick={chooseHour}>
                {hoursArr.map((el, i) => {
                    return <Hour key={i} clock={`${(i + 7) < 10 ? '0' + (i + 7) : (i + 7)}:00`} changedHour={changedHour} data={index >= 0 ? data[index].hours[i + 7 < 10 ? `0${i + 7}:00` : `${i + 7}:00`] : []}/>
                })}
            </div>
        </div>
    )
}

export default Tasks;