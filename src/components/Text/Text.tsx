import React, {FC, ChangeEvent} from "react";

import { dataType } from "../types/dataType";
import { timeType } from "../types/timeType";

interface TextProps {
    changedTask: {date: Date, hour: string, index: number},
    data: dataType[],
    time: timeType,
    addText: (e: ChangeEvent<HTMLTextAreaElement>) => any
}

const Text: FC<TextProps> = ({changedTask, data, time, addText}) => {
    const index = data.findIndex(el => el.date.getTime() === changedTask.date.getTime());
    
    let text = '';
    let title = '';
    if(index >= 0 && data[index].hours[changedTask.hour][changedTask.index]) {
        text = data[index].hours[changedTask.hour][changedTask.index].text;
        title = data[index].hours[changedTask.hour][changedTask.index].task;
    } else {
        text = '';
        title = '';
    }
    return(
        <div className="text">
            <h3>{`Задача: ${changedTask.date.getDate()} ${time.monthName2[changedTask.date.getMonth()]} ${changedTask.date.getFullYear()} / ${changedTask.hour}`}</h3>
            <h4>{title}</h4>
            <textarea name="" id="" cols={30} rows={10} onChange={addText} value={text ? text : ''}></textarea>
        </div>
    )
}

export default Text;