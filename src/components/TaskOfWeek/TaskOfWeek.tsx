import React, { FC } from "react";

import trueImg from '../../sources/check-true.png';
import falseImg from '../../sources/check-false.png';
import currentImg from '../../sources/check-current.png';

interface TaskOfWeekProps {
    newTaskArr: {
        index: number;
        task: string;
        priority: number;
        isDone: boolean;
        status: string
    },
    i: number
}

const TaskOfWeek: FC<TaskOfWeekProps> = ({newTaskArr, i}) => {
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
        /* if(newTaskArr) {
            if(newTaskArr.status === 'done') {
                path = trueImg;
            } else if(newTaskArr.status === 'missed') {
                path = falseImg;
            } else if(newTaskArr.status === 'current') {
                path = currentImg;
            }
        } else {
            path = currentImg;
        } */
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
    return (
        <li key={i}>
            <div className="Week-day-check">
                <img src={getImg()} alt="" />
            </div>
            <div className={`Week-day-data ${getColor(newTaskArr ? newTaskArr.priority : 0)}`}>{newTaskArr ? newTaskArr.task : ''}</div>
        </li>
    )
}

export default TaskOfWeek;