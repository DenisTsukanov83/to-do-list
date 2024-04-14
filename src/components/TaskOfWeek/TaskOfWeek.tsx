import React, { FC } from "react";

import trueImg from '../../sources/check-true.png';
import falseImg from '../../sources/check-false.png';

interface TaskOfWeekProps {
    i: number,
    newTaskArr: {
        index: number;
        task: string;
        priority: number;
        isDone: boolean;
    }[]
}

const TaskOfWeek: FC<TaskOfWeekProps> = ({i, newTaskArr}) => {
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

    function getImg(i: number) {
        let path = falseImg
        if(newTaskArr[i]) {
            if(newTaskArr[i].isDone) {
                path = trueImg;
            } else {
                path = falseImg;
            }
        }
        return path;
    }
    return (
        <li key={i}>
            <div className="Week-day-check">
                <img src={getImg(i)} alt="" />
            </div>
            <div className={`Week-day-data ${getColor(newTaskArr[i] ? newTaskArr[i].priority : 0)}`}>{newTaskArr[i] ? newTaskArr[i].task : ''}</div>
        </li>
    )
}

export default TaskOfWeek;