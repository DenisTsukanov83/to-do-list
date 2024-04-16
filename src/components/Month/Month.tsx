import React, { FC, ChangeEvent, MouseEvent, RefObject } from "react";
import './Month.css';

import downBtn from '../../sources/down.png';
import upBtn from '../../sources/upload.png';
import trueImg from '../../sources/check-true.png';
import falseImg from '../../sources/check-false.png';
import currentImg from '../../sources/check-current.png';

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
    data: dataType[],
    scrollDate: (e: MouseEvent<HTMLElement>) => any
}

const Month: FC<MonthProps> = ({ inputRef, handleChange, daysArr, currentDate, chooseDate, changedDate, time, data, scrollDate }) => {

    return (
        <div className="Month">
            <div className="Month-title">
                <h3>План на месяц</h3>
                <input type="date" ref={inputRef} onChange={handleChange} value={currentDate} />
            </div>
            <div className="Month-header">
                <b>{time.monthName[new Date(currentDate).getMonth()]}</b>
                <div className="Month-btns">
                    <button className="btn Month-btn" data-btn={'up'} onClick={scrollDate}>
                        <img src={upBtn} alt="up" />
                    </button>
                    <button className="btn Month-btn" data-btn={'down'} onClick={scrollDate}>
                        <img src={downBtn} alt="down" />
                    </button>
                </div>
            </div>
            <div className="Month-wrapper">
                <div className="Month-weeks">
                    <b>{daysArr[0].numberWeek}</b>
                    <b>{daysArr[7].numberWeek}</b>
                    <b>{daysArr[14].numberWeek}</b>
                    <b>{daysArr[21].numberWeek}</b>
                    <b>{daysArr[28].numberWeek}</b>
                    <b>{daysArr[35].numberWeek}</b>
                </div>
                <div className="Month-days">
                    <b>Пн</b>
                    <b>Вт</b>
                    <b>Ср</b>
                    <b>Чт</b>
                    <b>Пт</b>
                    <b>Сб</b>
                    <b>Вс</b>
                </div>
                <div className="Month-calendar" onClick={chooseDate}>
                    {daysArr.map((el, i) => {
                        const index = data.findIndex(el => el.date.getTime() === daysArr[i].date.getTime());
                        let numberOfTasks = 0;
                        if (index >= 0) {
                            for (let key in data[index].hours) {
                                numberOfTasks += data[index].hours[key].length
                            }
                        }
                        return <Day key={i} daysArr={daysArr[i]} changedDate={changedDate} numberOfTasks={numberOfTasks} />
                    })}
                </div>
            </div>
            <div className="info">
                <div className="info-item">
                    <div>
                        <img src={trueImg} alt="" />
                    </div>
                    <div>Выполнено</div>
                </div>
                <div className="info-item">
                    <div>
                        <img src={falseImg} alt="" />
                    </div>
                    <div>Не выполнено</div>
                </div>
                <div className="info-item">
                    <div>
                        <img src={currentImg} alt="" />
                    </div>
                    <div>Нет статуса</div>
                </div>
                <div className="info-item redColor">Важный</div>
                <div className="info-item blueColor">Обычный</div>
                <div className="info-item greenColor">Не важный</div>
            </div>
        </div>
    )
}

export default Month;