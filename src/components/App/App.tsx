import React, { FC, useState, createRef, RefObject, ChangeEvent, MouseEvent } from 'react';
import './App.css';

import { dataType } from '../types/dataType';
import { timeType } from "../types/timeType";

import Month from '../Month/Month';
import Tasks from '../Tasks/Tasks';
import Form from '../Form/Form';
import Week from '../Week/Week';



const App: FC = () => {

    let inputRef: RefObject<HTMLInputElement> = createRef();

    const [currentDate, setCurrentDate] = useState<string>(`${new Date().getFullYear()}-${new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1}-${new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()}`);

    const [changedDate, setChangedDate] = useState<Date>(new Date());

    const time: timeType = {
        get indexFirstDay(): number {
            let date: Date = new Date();
            if (currentDate) {
                date = new Date(new Date(currentDate).getFullYear(), new Date(currentDate).getMonth(), 1);
            }
            return new Date(date).getDay() === 0 ? 6 : new Date(date).getDay() - 1;
        },
        get lastDateLastMonth(): number {
            let date: number = 0;
            if (currentDate) {
                date = new Date(new Date(currentDate).getFullYear(), new Date(currentDate).getMonth(), 0).getDate();
            }
            return date;
        },
        get lastDateCurrentMonth(): number {
            let date: number = 0;
            if (currentDate) {
                date = new Date(new Date(currentDate).getFullYear(), new Date(currentDate).getMonth() + 1, 0).getDate();
            }
            return date;
        },
        get currentYear(): number {
            return new Date(currentDate).getFullYear();
        },
        get currentMonth(): number {
            return new Date(currentDate).getMonth();
        },
        monthName: [
            'январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
        ],
        monthName2: [
            'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ],
        dayName: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

    }

    // Returns the ISO week of the date.
    // eslint-disable-next-line no-extend-native
    function getNumberWeek (newDate: Date) {
        var date = new Date(newDate.getTime());
        date.setHours(0, 0, 0, 0);
        // Thursday in current week decides the year.
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        // January 4 is always in week 1.
        var week1 = new Date(date.getFullYear(), 0, 4);
        // Adjust to Thursday in week 1 and count number of weeks from date to week1.
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
            - 3 + (week1.getDay() + 6) % 7) / 7);
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setCurrentDate(inputRef.current ? inputRef.current.value : '');
        setChangedDate(new Date(e.target.value));
    }

    function getDaysArr() {
        let daysArr = [];
        let j = time.indexFirstDay;
        for (let i = 0; i < time.indexFirstDay; i++) {
            j--;
            daysArr.push({
                id: `last-${i}`,
                status: 'last',
                date: new Date(time.currentYear, time.currentMonth - 1, time.lastDateLastMonth - j),
                numberWeek: getNumberWeek(new Date(time.currentYear, time.currentMonth - 1, time.lastDateLastMonth - j))
            });
        }
        for (let i = 0; i < time.lastDateCurrentMonth; i++) {
            daysArr.push({
                id: `current-${i}`,
                status: 'current',
                date: new Date(time.currentYear, time.currentMonth, i + 1),
                numberWeek: getNumberWeek(new Date(time.currentYear, time.currentMonth, i + 1))
            });
        }
        for (let i = 0; i < 42 - time.indexFirstDay - time.lastDateCurrentMonth; i++) {
            daysArr.push({
                id: `next-${i}`,
                status: 'next',
                date: new Date(time.currentYear, time.currentMonth + 1, 1 + i),
                numberWeek: getNumberWeek(new Date(time.currentYear, time.currentMonth + 1, 1 + i))
            });
        }
        return daysArr;
    }

    const [numberWeek, setNumberWeek] = useState(getNumberWeek(new Date()));

    function chooseDate(e: MouseEvent<HTMLElement>) {
        const day = (e.target as HTMLElement).closest('.day');
        if (day) {
            let date = getDaysArr().find(el => {
                return el.id === (day as HTMLElement).id;
            });
            setChangedDate(date ? date.date : new Date());
            setCurrentDate(date ? `${date.date.getFullYear()}-${date.date.getMonth() + 1 < 10 ? '0' + (date.date.getMonth() + 1) : date.date.getMonth() + 1}-${date.date.getDate() < 10 ? '0' + date.date.getDate() : date.date.getDate()}` : '');
            setNumberWeek(date ? date.numberWeek : 1)
        }
    }

    const [changedHour, setChangedHour] = useState('07:00');

    function chooseHour(e: MouseEvent<HTMLElement>) {
        const el = (e.target as HTMLElement).closest('.Hour');
        if (el) {
            setChangedHour(el ? `${(el as HTMLElement).dataset.time}` : '');
        }
    }


    // https://stackoverflow.com/questions/54738221/typescript-array-find-possibly-undefined
    // function ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
    //     if (argument === undefined || argument === null) {
    //         throw new TypeError(message);
    //     }

    //     return argument;
    // }


    let dataNative: dataType = {
        id: 0,
        date: new Date(new Date().setHours(0, 0, 0, 0)),
        hours: {
            '07:00': [],
            '08:00': [],
            '09:00': [],
            '10:00': [],
            '11:00': [],
            '12:00': [],
            '13:00': [],
            '14:00': [],
            '15:00': [],
            '16:00': [],
            '17:00': [],
            '18:00': [],
            '19:00': [],
            '20:00': [],
            '21:00': [],
            '22:00': [],
        }
    }

    let [data, setData] = useState<dataType[]>([]);


    function addData() {
        const index = data.findIndex(el => el.date.getTime() === changedDate.getTime());
        let newArr: dataType[] = [];
        if (index >= 0) {
            const newData = data[index];
            newData.hours[changedHour].push({ index: newData.hours[changedHour].length, task: '' });
            newData.date = changedDate;
            newArr = data.filter(el => el.date.getTime() !== changedDate.getTime());
            newArr.push(newData);
        } else {
            const newData = dataNative;
            newData.hours[changedHour].push({ index: newData.hours[changedHour].length, task: '' });
            newData.date = changedDate;
            newArr = [...data, newData];
        }

        setData(newArr);


    }

    function addTask(e: ChangeEvent<HTMLInputElement>) {
        const index = data.findIndex(el => el.date.getTime() === changedDate.getTime());
        const newData = data[index];
        newData.hours[changedHour][+(e.target as HTMLInputElement).name].task = (e.target as HTMLInputElement).value;
        setData([...data, newData]);
    }

    function deleteTask(e: MouseEvent<HTMLElement>) {
        console.log((e.target as HTMLElement).dataset.index)
        const index = data.findIndex(el => el.date.getTime() === changedDate.getTime());
        const newData = data[index];
        const dataIndex: string | undefined = (e.target as HTMLElement).dataset.index
        if (dataIndex) {
            newData.hours[changedHour] = newData.hours[changedHour].filter((el, i) => i !== +dataIndex);
        }
        let newArr: dataType[] = [];
        newArr = data.filter(el => el.date.getTime() !== changedDate.getTime());
        newArr.push(newData);

        setData(newArr);
    }


    return (
        <div className="App">
            <div className='App-calendar'>
                <Month
                    inputRef={inputRef}
                    handleChange={handleChange}
                    daysArr={getDaysArr()}
                    currentDate={currentDate}
                    chooseDate={chooseDate}
                    changedDate={changedDate}
                    time={time}
                    data={data} />

                <Week 
                    time={time}/>
            </div>


            <Tasks
                time={time}
                changedDate={changedDate}
                chooseHour={chooseHour}
                changedHour={changedHour}
                data={data} />

            <Form
                changedDate={changedDate}
                changedHour={changedHour}
                time={time}
                addData={addData}
                data={data}
                addTask={addTask}
                deleteTask={deleteTask} />
        </div>
    );
}

export default App;
