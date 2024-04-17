import React, { FC, MouseEvent } from "react";

import './TaskOfWeek.css';

import { dataType } from "../types/dataType";

import trueImg from '../../sources/check-true.png';
import falseImg from '../../sources/check-false.png';
import currentImg from '../../sources/check-current.png';

interface TaskOfWeekProps {
    newTaskArr: {
        index: number;
        task: string;
        priority: number;
        isDone: boolean;
        status: string;
    },
    i: number,
    onChangedTask: (e: MouseEvent<HTMLElement>) => any,
    changedTask: {date: Date, hour: string, index: number},
    cangeClass: string
}

const TaskOfWeek: FC<TaskOfWeekProps> = ({newTaskArr, i, onChangedTask, changedTask, cangeClass}) => {
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

    function getImg() {
        let path = falseImg;
        if(newTaskArr) {
            switch(true) {
                case newTaskArr.status === 'missed' && !newTaskArr.isDone: path = falseImg;
                break;
                case newTaskArr.isDone === true: path = trueImg;
                break;
                case newTaskArr.status === "current" && !newTaskArr.isDone: path = currentImg;
            }
        } else {
            path = currentImg;
        }
        return path;
    }
    let colorBg = '';
    if(newTaskArr && cangeClass === 'changed') {
        colorBg = newTaskArr.index === changedTask.index ? 'dark-changed' : '';
    }
    
    return (
        <li key={i} className={`week-task ${colorBg}`} onClick={onChangedTask} data-task={newTaskArr ? newTaskArr.index : 0}>
            <div className="week-day-check">
                <img src={getImg()} alt="" />
            </div>
            <div className={`week-day-data ${getColor(newTaskArr ? newTaskArr.priority : 0)}`}>{newTaskArr ? newTaskArr.task : ''}</div>
        </li>
    )
}

export default TaskOfWeek;