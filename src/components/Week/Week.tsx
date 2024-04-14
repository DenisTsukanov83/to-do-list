import React, {FC, MouseEvent} from "react";

import './Week.css';

import { timeType } from "../types/timeType";
import { dataType } from "../types/dataType";

import DayOfWeek from "../DayOfWeek/DayOfWeek";

interface WeekProps {
    time: timeType,
    numberWeek: number,
    getDaysArr: () => {
        id: string; 
        status: string;
        date: Date;
        numberWeek: number;
    }[],
    data: dataType[],
    dataNative: dataType,
    cooseDateWeek: (date: Date) => any,
    changedDate: Date
}

const Week: FC<WeekProps>  = ({time, getDaysArr, numberWeek, data, dataNative, cooseDateWeek, changedDate}) => {
    const newDaysArr = getDaysArr().filter(el => el.numberWeek === numberWeek);
    console.log(newDaysArr)
    return (
        <div className="Week">
            <div className="Week-title">
                <h3>{`План на ${numberWeek} неделю`}</h3>
            </div>
            <div className="Week-calendar">
                {
                    time.dayName.map((el, i) => {
                        let newData = dataNative;
                        data.forEach(el => {
                            if(el.date.getTime() === newDaysArr[i].date.getTime()) {
                                newData = el;
                            }
                        });
                        let tasksArr: { index: number; task: string; priority: number}[][] = [];
                        if(Object.keys(newData).length) {
                            for(let key in newData.hours) {
                                tasksArr.push(newData.hours[key])
                            }
                        }
                        
                        return <DayOfWeek key={i} dayName={el} tasksArr={tasksArr.flat()} cooseDateWeek={cooseDateWeek} date={newDaysArr[i].date} changedDate={changedDate}/>
                    })
                }
            </div>
        </div>
    )
}

export default Week;