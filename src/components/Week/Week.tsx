import React, {FC} from "react";

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
    return (
        <div className="Week">
            <div className="Week-title">
                <h3>{`План на ${numberWeek} неделю`}</h3>
            </div>
            <div className="Week-calendar">
                {
                    time.dayName.map((el, i) => {
                        
                        let newData = dataNative;
                        data.forEach(elem => {
                            
                            if(newDaysArr[i]) {
                                if(elem.date.getTime() === newDaysArr[i].date.getTime()) {
                                    newData = elem;
                                }
                            }
                        });
                        let tasksArr: { index: number, task: string, priority: number, isDone: boolean, status: string}[][] = [];
                        /* if(Object.keys(newData.hours).length) {
                            for(let key in newData.hours) {
                                tasksArr.push(newData.hours[key])
                            }
                        } */
                        /* console.log(newData) */
                        for(let key in newData.hours) {
                            tasksArr.push(newData.hours[key])
                        }
                        return <DayOfWeek key={i} dayName={el} tasksArr={tasksArr.flat()} cooseDateWeek={cooseDateWeek} date={newDaysArr[i] ? newDaysArr[i].date : new Date()} changedDate={changedDate}/>
                        
                    })
                }
            </div>
        </div>
    )
}

export default Week;