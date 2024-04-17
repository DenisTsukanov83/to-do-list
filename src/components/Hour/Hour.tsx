import React, {FC, MouseEvent} from "react";

import './Hour.css';

interface HourProps {
    clock: string,
    changedHour: string,
    data: { index: number, task: string, priority: number}[],
    priority: number,
    onChangedTask: (e: MouseEvent<HTMLElement>) => any,
    changedTask: {date: Date, hour: string, index: number}
}

const Hour: FC<HourProps> = ({clock, changedHour, data, priority, onChangedTask, changedTask}) => {

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

    let colorBg1 = '';
    let colorBg2 = '';
    let colorBg3 = '';
    if(changedHour === clock && data[0] && data[1] && data[2]) {
        switch(true) {
            case data[0].index === changedTask.index: colorBg1 = 'dark-changed';
            break;
            case data[1].index === changedTask.index: colorBg2 = 'dark-changed';
            break;
            case data[2].index === changedTask.index: colorBg3 = 'dark-changed';
            break;
        }
    }

    return (
        <div className={`Hour ${changedHour === clock ? 'changed' : ''}`} data-time={clock}>
            <div className="Hour-time">
                {clock}
            </div>
            <div className='Hour-content'>
                <div className={`Hour-task ${colorBg1} ${getColor(data[0] ? data[0].priority : 0)}`} data-task={data[0] ? data[0].index : ''} onClick={onChangedTask}>{data[0] ? data[0].task : ''}</div>
                <div className={`Hour-task ${colorBg2} ${getColor(data[1] ? data[1].priority : 0)}`} data-task={data[1] ? data[1].index : ''} onClick={onChangedTask}>{data[1] ? data[1].task : ''}</div>
                <div className={`Hour-task ${colorBg3} ${getColor(data[2] ? data[2].priority : 0)}`} data-task={data[2] ? data[2].index : ''} onClick={onChangedTask}>{data[2] ? data[2].task : ''}</div>
            </div>
        </div>
    )
}

export default Hour;