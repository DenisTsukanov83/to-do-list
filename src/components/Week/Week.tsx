import React, {FC, MouseEvent} from "react";

import './Week.css';

import { timeType } from "../types/timeType";
import { dataType } from "../types/dataType";
import { dayType } from "../types/dayType";

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
    changedDate: Date,
    onChangedTask: (e: MouseEvent<HTMLElement>) => any,
    changedHour: string,
    changedTask: {date: Date, hour: string, index: number}
}

const Week: FC<WeekProps>  = ({time, getDaysArr, numberWeek, data, dataNative, cooseDateWeek, changedDate, onChangedTask, changedHour, changedTask}) => {
    const newDaysArr = getDaysArr().filter(el => el.numberWeek === numberWeek);
    return (
        <div className="week">
            <div className="week-title">
                <h3>{`План на ${numberWeek} неделю`}</h3>
            </div>
            <div className="week-calendar">
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
                        for(let key in newData.hours) {
                            tasksArr.push(newData.hours[key])
                        }
                        return <DayOfWeek 
                                    key={i} 
                                    dayName={el} 
                                    tasksArr={tasksArr.flat()} 
                                    cooseDateWeek={cooseDateWeek} 
                                    date={newDaysArr[i] ? newDaysArr[i].date : new Date()} 
                                    changedDate={changedDate}
                                    onChangedTask={onChangedTask}
                                    changedHour={changedHour}
                                    data={data}
                                    changedTask={changedTask}/>
                        
                    })
                }
            </div>
        </div>
    )
}

export default Week;