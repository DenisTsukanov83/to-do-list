import React, { FC, ChangeEvent, MouseEvent} from "react";

import './Form.css';

import { timeType } from "../types/timeType";
import { dataType } from "../types/dataType";

import Task from "../Task/Task";
import Text from "../Text/Text";

interface FormProps {
    changedDate: Date;
    changedHour: string;
    time: timeType,
    addData: () => any,
    data: dataType[],
    addTask: (e: ChangeEvent<HTMLInputElement>, priority: number) => any,
    deleteTask: (e: MouseEvent<HTMLElement>) => any,
    onSelect: (e: ChangeEvent<HTMLSelectElement>) => any,
    onCheck: (e: ChangeEvent<HTMLInputElement>) => any,
    onChangedTask: (e: MouseEvent<HTMLElement>) => any,
    changedTask: {date: Date, hour: string, index: number},
    addText: (e: ChangeEvent<HTMLTextAreaElement>) => any
}

const Form: FC<FormProps> = ({ changedDate, changedHour, time, addData, data, addTask, deleteTask, onSelect, onCheck, onChangedTask, changedTask, addText}) => {
    const index = data.findIndex(el => el.date.getTime() === changedDate.getTime());
    const inputsArr = index >= 0 ? data[index].hours[changedHour] : [];

    return (
        <div className="Form">
            <div className="Form-add">
                <h3>{`Задачи на ${changedDate.getDate()} ${time.monthName2[changedDate.getMonth()]} ${changedDate.getFullYear()} / ${changedHour}`}</h3>
                <div className="Form-tasks">
                    {inputsArr.map((el, i) => {
                        return <Task
                            key={i}
                            data={data[index].hours[changedHour][i]}
                            i={i}
                            deleteTask={deleteTask}
                            addTask={addTask}
                            onSelect={onSelect}
                            priority={data[index].hours[changedHour][i].priority}
                            onCheck={onCheck} 
                            onChangedTask={onChangedTask}
                            changedTask={changedTask}/>
                    })}
                </div>
                <button className="Form-add" onClick={addData}>Добавить задачу</button>
            </div>
            <Text
                changedTask={changedTask}
                data={data}
                time={time}
                addText={addText}
                changedDate={changedDate}
                changedHour={changedHour}/>
        </div>
    )
}

export default Form;