import React, {FC} from "react";

import './Hour.css';

interface HourProps {
    clock: string,
    changedHour: string,
    data: { index: number, task: string, priority: number}[],
    priority: number
}

const Hour: FC<HourProps> = ({clock, changedHour, data, priority}) => {
    

    function getColor(priority: number) {
        let color = '';
        switch(true) {
            case priority === 0: color = 'blueColor';
            break;
            case priority === 1: color = 'redColor';
            break;
            case priority === 2: color = 'greenColor';
            break;
        }

        return color;
    }

    /* console.log(data[0].priority) */

    return (
        <div className={`Hour ${changedHour === clock ? 'changed' : ''}`} data-time={clock}>
            <div className="Hour-time">
                {clock}
            </div>
            <div className='Hour-content'>
                <div className={`Hour-task ${getColor(data[0] ? data[0].priority : 0)}`}>{data[0] ? data[0].task : ''}</div>
                <div className={`Hour-task ${getColor(data[1] ? data[1].priority : 0)}`}>{data[1] ? data[1].task : ''}</div>
                <div className={`Hour-task ${getColor(data[2] ? data[2].priority : 0)}`}>{data[2] ? data[2].task : ''}</div>
            </div>
        </div>
    )
}

export default Hour;