import React, {FC} from "react";

import './DayOfWeek.css';

interface DayOfWeekProps {
    dayName: string
}

const DayOfWeek: FC<DayOfWeekProps> = ({dayName}) => {
    return (
        <div className="Week-day">
            <b className="Week-day-title">{`${dayName}`}</b>
            <ul className="Week-day-list">
                <li>
                    <div className="Week-day-check"></div>
                    <div className="Week-day-data">
                        Пить чай
                    </div>
                </li>
                <li>
                    <div className="Week-day-check"></div>
                    <div className="Week-day-data"></div>
                </li>
                <li>
                    <div className="Week-day-check"></div>
                    <div className="Week-day-data"></div>
                </li>
                <li>
                    <div className="Week-day-check"></div>
                    <div className="Week-day-data"></div>
                </li>
                <li>
                    <div className="Week-day-check"></div>
                    <div className="Week-day-data"></div>
                </li>
                <li>
                    <div className="Week-day-check"></div>
                    <div className="Week-day-data"></div>
                </li>
                <li>
                    <div className="Week-day-check"></div>
                    <div className="Week-day-data"></div>
                </li>
            </ul>
            
        </div>
    )
}

export default DayOfWeek;