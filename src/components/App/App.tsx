import React, { FC, useState, createRef, RefObject, ChangeEvent, MouseEvent, useEffect } from 'react';
import './App.css';

import { dataType } from '../types/dataType';
import { timeType } from "../types/timeType";
import { hourType } from '../types/hourType';

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
    function getNumberWeek(newDate: Date) {
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

    function getNameDay(index: number) {
        switch(true) {
            case index === 0: return time.dayName[6];
            case index === 1: return time.dayName[0];
            case index === 2: return time.dayName[1];
            case index === 3: return time.dayName[2];
            case index === 4: return time.dayName[3];
            case index === 5: return time.dayName[4];
            case index === 6: return time.dayName[5];
        }
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
                numberWeek: getNumberWeek(new Date(time.currentYear, time.currentMonth - 1, time.lastDateLastMonth - j)),
                nameDay: getNameDay(new Date(time.currentYear, time.currentMonth - 1, time.lastDateLastMonth - j).getDay())
            });
        }
        for (let i = 0; i < time.lastDateCurrentMonth; i++) {
            daysArr.push({
                id: `current-${i}`,
                status: 'current',
                date: new Date(time.currentYear, time.currentMonth, i + 1),
                numberWeek: getNumberWeek(new Date(time.currentYear, time.currentMonth, i + 1)),
                nameDay: getNameDay(new Date(time.currentYear, time.currentMonth, i + 1).getDay())
            });
        }
        for (let i = 0; i < 42 - time.indexFirstDay - time.lastDateCurrentMonth; i++) {
            daysArr.push({
                id: `next-${i}`,
                status: 'next',
                date: new Date(time.currentYear, time.currentMonth + 1, 1 + i),
                numberWeek: getNumberWeek(new Date(time.currentYear, time.currentMonth + 1, 1 + i)),
                nameDay: getNameDay(new Date(time.currentYear, time.currentMonth + 1, 1 + i).getDay())
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

    function cooseDateWeek(date: Date) {
        setChangedDate(date);
        setCurrentDate(`${new Date(date).getFullYear()}-${new Date(date).getMonth() + 1 < 10 ? '0' + (new Date(date).getMonth() + 1) : new Date(date).getMonth() + 1}-${new Date(date).getDate() < 10 ? '0' + new Date(date).getDate() : new Date(date).getDate()}`);
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

    useEffect(() => {
        localStorage.dataToDoList = JSON.stringify(data);
    })

    function getDataFromLocalStorage() {
        if(localStorage.dataToDoList) {
            const newDate = JSON.parse(localStorage.dataToDoList);
            newDate.map((el: dataType) => {
                const date = el.date;
                return el.date = new Date(date);
            });
            return newDate;
        } else {
            return [];
        }
    }

    let [data, setData] = useState<dataType[]>(getDataFromLocalStorage());

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

    function getIndex(arr: number[]) {
        for(let i = 0; i <= arr.length; i++) {
            if(arr[i] !== i) {
                return i;
            } else {
                continue;
            }
        }
    }

    function addData() {
        const index = data.findIndex(el => el.date.getTime() === changedDate.getTime());
        let newArr: dataType[] = [];
        let newData = dataNative;
        const matches = changedHour.match(/\d\d/);
        let h = 0
        if(matches) {
            h = +matches[0];
        }
        let status = new Date().getTime() < new Date(changedDate.setHours(h)).getTime() ? 'current' : 'missed';

        if (index >= 0) {
            newData = data[index];
            const indexArr = newData.hours[changedHour].map(el => el.index).sort((a, b) => a - b);
            const indexNum = getIndex(indexArr);
            newData.hours[changedHour].push({ index: indexNum ? indexNum: 0, task: '', priority: 1, isDone: false, status: status, text: '' });
            newData.date = changedDate;
            newArr = data.filter(el => el.date.getTime() !== changedDate.getTime());
            newArr.push(newData);
        } else {
            const indexArr = newData.hours[changedHour].map(el => el.index);
            const indexNum = getIndex(indexArr);
            newData.hours[changedHour].push({ index: indexNum ? indexNum: 0, task: '', priority: 1, isDone: false, status: status, text: '' });
            newData.date = changedDate;
            newArr = [...data, newData];
        }
        setData(newArr);
    }

    function onSelect(e: ChangeEvent<HTMLSelectElement>) {
        const index = data.findIndex(el => el.date.getTime() === changedDate.getTime());
        let newArr: dataType[] = [];
        if (index >= 0) {
            const newData = data[index];
            newData.hours[changedHour] = newData.hours[changedHour].map((el, i) => {
                if (i === +(e.target as HTMLSelectElement).name) {
                    const newTask = newData.hours[changedHour][i].task;
                    const newIsDone = newData.hours[changedHour][i].isDone;
                    const newStatus = newData.hours[changedHour][i].status;
                    const newIndex = newData.hours[changedHour][i].index;
                    const newText = newData.hours[changedHour][i].text;
                    return { index: newIndex, task: newTask, priority: +(e.target as HTMLSelectElement).value, isDone: newIsDone, status: newStatus, text: newText }
                } else {
                    return el;
                }
            });
            newData.date = changedDate;
            newArr = data.filter(el => el.date.getTime() !== changedDate.getTime());
            newArr.push(newData);
        }
        setData(newArr);
    }

    function scrollDate(e: MouseEvent<HTMLElement>) {
        const btn = (e.target as HTMLElement).closest('.Month-btn');
        let year = changedDate.getFullYear();
        let month = changedDate.getMonth();
        let date = changedDate.getDate();
        let newDate = changedDate;
        function iteration(year: number, month: number) {
            let obj : {year: number, month: number} = {year: 0, month: 0};
            if(month === 0) {
                obj = {year: year - 1, month: 12};
            } else if(month === 13) {
                obj = {year: year + 1, month: 1};
            } else {
                obj = {year: year, month: month};
            }
            return obj;
        }
        if((btn as HTMLElement).dataset.btn === 'up') {
            newDate = new Date(iteration(year, month + 1).year, iteration(year, month + 1).month, date);
        }  else {
            newDate = new Date(iteration(year, month - 1).year, iteration(year, month - 1).month, date);
        }

        setChangedDate(newDate);
        setCurrentDate(`${newDate.getFullYear()}-${newDate.getMonth() + 1 < 10 ? '0' + (newDate.getMonth() + 1) : newDate.getMonth() + 1}-${newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate()}`)
    }

    function onCheck(e: ChangeEvent<HTMLInputElement>) {
        const index = data.findIndex(el => el.date.getTime() === changedDate.getTime());
        let newArr: dataType[] = [];
        if (index >= 0) {
            const newData = data[index];
            newData.hours[changedHour] = newData.hours[changedHour].map((el, i) => {
                if (i === +(e.target as HTMLInputElement).name) {
                    el.isDone = (e.target as HTMLInputElement).checked;
                    return el
                } else {
                    return el;
                }
            });
            newData.date = changedDate;
            newArr = data.filter(el => el.date.getTime() !== changedDate.getTime());
            newArr.push(newData);
        }
        setData(newArr);
    }

    const [changedTask, setChangedTask] = useState<{date: Date, hour: string, index: number}>({date: changedDate, hour: changedHour, index: 0});

    function addTask(e: ChangeEvent<HTMLInputElement>, priority: number) {
        const index = data.findIndex(el => el.date.getTime() === changedDate.getTime());
        const newData = data[index];
        newData.hours[changedHour][+(e.target as HTMLInputElement).name].task = (e.target as HTMLInputElement).value;
        newData.hours[changedHour][+(e.target as HTMLInputElement).name].priority = priority;
        setData([...data, newData]);
    }

    function deleteTask(e: MouseEvent<HTMLElement>) {
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
        setChangedTask({date: changedDate, hour: changedHour, index: 0});
    }

    function onChangedTask(e: MouseEvent<HTMLElement>) {
        const el = (e.target as HTMLElement).closest('.task');
        let index = (el as HTMLElement).dataset.task;
        setChangedTask({date: changedDate, hour: changedHour, index: index ? +index : 0});
        
    }

    function addText(e: ChangeEvent<HTMLTextAreaElement>) {
        /* const index = data.findIndex(el => el.date.getTime() === changedTask.date.getTime());
        const newData = data[index];
        newData.hours[changedTask.hour][changedTask.index].text = (e.target as HTMLTextAreaElement).value;
        setData([...data, newData]); */
        const index = data.findIndex(el => el.date.getTime() === changedTask.date.getTime());
        let newArr: dataType[] = [];
        if (index >= 0) {
            const newData = data[index];
            newData.hours[changedHour] = newData.hours[changedHour].map((el, i) => {
                if (i === changedTask.index) {
                    const newTask = newData.hours[changedHour][i].task;
                    const newIsDone = newData.hours[changedHour][i].isDone;
                    const newStatus = newData.hours[changedHour][i].status;
                    const newIndex = newData.hours[changedHour][i].index;
                    const newPriority = newData.hours[changedHour][i].priority;
                    return { index: newIndex, task: newTask, priority: newPriority, isDone: newIsDone, status: newStatus, text: (e.target as HTMLTextAreaElement).value }
                } else {
                    return el;
                }
            });
            newData.date = changedDate;
            newArr = data.filter(el => el.date.getTime() !== changedDate.getTime());
            newArr.push(newData);
        }
        setData(newArr);
    }




    return (
        <div className="App">
            <Month
                inputRef={inputRef}
                handleChange={handleChange}
                daysArr={getDaysArr()}
                currentDate={currentDate}
                chooseDate={chooseDate}
                changedDate={changedDate}
                time={time}
                data={data} 
                scrollDate={scrollDate}/>

            <Week
                time={time}
                getDaysArr={getDaysArr}
                numberWeek={numberWeek}
                data={data}
                dataNative={dataNative}
                cooseDateWeek={cooseDateWeek}
                changedDate={changedDate}/>


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
                deleteTask={deleteTask}
                onSelect={onSelect} 
                onCheck={onCheck}
                onChangedTask={onChangedTask}
                changedTask={changedTask}
                addText={addText}/>
        </div>
    );
}

export default App;
