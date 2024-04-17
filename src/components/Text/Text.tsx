import React, {FC, ChangeEvent} from "react";

import './Text.css';

import { dataType } from "../types/dataType";
import { timeType } from "../types/timeType";

interface TextProps {
    changedTask: {date: Date, hour: string, index: number},
    data: dataType[],
    time: timeType,
    addText: (e: ChangeEvent<HTMLTextAreaElement>) => any,
    changedDate: Date,
    changedHour: string
}

const Text: FC<TextProps> = ({changedTask, data, time, addText, changedDate, changedHour}) => {
    const index = data.findIndex(el => el.date.getTime() === changedDate.getTime());
    let text = ''
    let title = '';
    if(index >= 0) {
        if(data[index].hours[changedHour].findIndex(el => el.index === changedTask.index) >= 0) {
            text = data[index].hours[changedHour][data[index].hours[changedHour].findIndex(el => el.index === changedTask.index)].text
            title = data[index].hours[changedHour][data[index].hours[changedHour].findIndex(el => el.index === changedTask.index)].task;
        } else {
            text = '';
            title = '';
        }
    }
    return(
        <div className="text">
            <h3>{`Задача: ${changedTask.date.getDate()} ${time.monthName2[changedTask.date.getMonth()]} ${changedTask.date.getFullYear()} / ${changedTask.hour}`}</h3>
            <h4>{title}</h4>
            <textarea cols={35} rows={12} onChange={addText} value={text ? text : ''}  placeholder="Введите описание задачи"></textarea>
        </div>
    )
}

export default Text;