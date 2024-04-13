import React, {FC} from "react";

import './Week.css';

import { timeType } from "../types/timeType";

import DayOfWeek from "../DayOfWeek/DayOfWeek";

interface WeekProps {
    time: timeType
}

const Week: FC<WeekProps>  = ({time}) => {
    return (
        <div className="Week">
            <div className="Week-title">
                <h3>План на неделю</h3>
            </div>
            <div className="Week-calendar">
                {
                    time.dayName.map(el => {
                        return <DayOfWeek dayName={el}/>
                    })
                }
            </div>
        </div>
    )
}

export default Week;