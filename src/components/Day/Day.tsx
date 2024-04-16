import React, {FC} from "react";

import './Day.css';

import { dayType } from "../types/dayType";

interface DayProps {
    daysArr: dayType,
    changedDate: Date,
    numberOfTasks: number
}

const Day: FC<DayProps> = ({daysArr, changedDate, numberOfTasks}) => {

    const bgClass = daysArr.date.getTime() === new Date(new Date().setHours(0, 0, 0, 0)).getTime() ? 'today' : '';
    const bgRedClass = numberOfTasks ? 'red-round' : ''

    const cangeClass = daysArr.date.getTime() === new Date(changedDate.setHours(0, 0, 0, 0)).getTime() ? 'changed-border' : '';
    return(
        <div className={`day ${daysArr.status} ${bgClass} ${cangeClass}`} id={daysArr.id}>
            {`${daysArr.date.getDate()}`}
            <div className={`day-numbers ${bgRedClass}`}>{numberOfTasks ? numberOfTasks : ''}</div>
        </div>
    )
}

export default Day;