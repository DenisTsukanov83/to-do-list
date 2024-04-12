import React, {FC} from "react";

import './Hour.css';

interface HourProps {
    clock: string,
    changedHour: string,
    data: { index: number, task: string}[]
}

const Hour: FC<HourProps> = ({clock, changedHour, data}) => {
    

    return (
        <div className={`Hour ${changedHour === clock ? 'changed' : ''}`} data-time={clock}>
            <div className="Hour-time">
                {clock}
            </div>
            <div className="Hour-content">
                <div className="Hour-task">{data[0] ? data[0].task : ''}</div>
                <div className="Hour-task">{data[1] ? data[1].task : ''}</div>
                <div className="Hour-task">{data[2] ? data[2].task : ''}</div>
            </div>
        </div>
    )
}

export default Hour;