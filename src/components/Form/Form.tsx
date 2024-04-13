import React, { FC, ChangeEvent, MouseEvent } from "react";

import './Form.css';

import { timeType } from "../types/timeType";
import { dataType } from "../types/dataType";

import Task from "../Task/Task";

interface FormProps {
    changedDate: Date;
    changedHour: string;
    time: timeType,
    addData: () => any,
    data: dataType[],
    addTask: (e: ChangeEvent<HTMLInputElement>, priority: number) => any,
    deleteTask: (e: MouseEvent<HTMLElement>) => any
}

const Form: FC<FormProps> = ({ changedDate, changedHour, time, addData, data, addTask, deleteTask}) => {
    const index = data.findIndex(el => el.date.getTime() === changedDate.getTime());
    const inputsArr = index >= 0 ? data[index].hours[changedHour] : [];
    return (
        <div className="Form">
            <h3>{`Задачи на ${changedDate.getDate()} ${time.monthName2[changedDate.getMonth()]} ${changedDate.getFullYear()} / ${changedHour}`}</h3>
            <div className="Form-tasks">
                {inputsArr.map((el, i) => {
                    return <Task key={i} data={data[index].hours[changedHour][i].task} i={i} deleteTask={deleteTask} addTask={addTask}/>
                })}
            </div>
            <button onClick={addData}>Добавить задачу</button>
        </div>
    )
}

export default Form;