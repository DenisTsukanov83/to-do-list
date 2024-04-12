import React, { FC, ChangeEvent, MouseEvent, RefObject } from "react";
import './Month.css';

import { dayType } from "../types/dayType";
import { timeType } from "../types/timeType";


import Day from "../Day/Day";
import { dataType } from "../types/dataType";

interface MonthProps {
    inputRef: RefObject<HTMLInputElement>,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => any,
    daysArr: dayType[],
    currentDate: string,
    chooseDate: (e: MouseEvent<HTMLElement>) => any,
    changedDate: Date,
    time: timeType,
    data: dataType[]
}

const Month: FC<MonthProps> = ({ inputRef, handleChange, daysArr, currentDate, chooseDate, changedDate, time, data }) => {
    

    return (
        <div className="Month">
            <h3>План на месяц</h3>
            <input type="date" ref={inputRef} onChange={handleChange} value={currentDate} />
            <div>{time.monthName[new Date(currentDate).getMonth()]}</div>
            <div className="Month-days">
                <strong>Пн</strong>
                <strong>Вт</strong>
                <strong>Ср</strong>
                <strong>Чт</strong>
                <strong>Пт</strong>
                <strong>Сб</strong>
                <strong>Вс</strong>
            </div>
            <div className="month-calendar" onClick={chooseDate}>
                {daysArr.map((el, i) => {
                    const index = data.findIndex(el => el.date.getTime() === daysArr[i].date.getTime());
                    let numberOfTasks = 0;
                    if(index >= 0) {
                        for(let key in data[index].hours) {
                            numberOfTasks += data[index].hours[key].length
                        }
                    }
                    return <Day key={i} daysArr={daysArr[i]} changedDate={changedDate} numberOfTasks={numberOfTasks}/>
                })}
            </div>
        </div>
    )
}

export default Month;