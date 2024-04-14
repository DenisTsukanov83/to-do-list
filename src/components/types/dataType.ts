export interface dataType{
    id: number,
    date: Date,
    hours: {
        [key: string]: {index: number, task: string, priority: number, isDone: boolean, status: string}[],
        '07:00': {index: number, task: string, priority: number, isDone: boolean, status: string}[],
        '08:00': {index: number, task: string, priority: number, isDone: boolean, status: string}[],
        '09:00': {index: number, task: string, priority: number, isDone: boolean, status: string}[],
        '10:00': {index: number, task: string, priority: number, isDone: boolean, status: string}[],
        '11:00': {index: number, task: string, priority: number, isDone: boolean, status: string}[],
        '12:00': {index: number, task: string, priority: number, isDone: boolean, status: string}[],
        '13:00': {index: number, task: string, priority: number, isDone: boolean, status: string}[],
        '14:00': {index: number, task: string, priority: number, isDone: boolean, status: string}[],
        '15:00': {index: number, task: string, priority: number, isDone: boolean, status: string}[],
        '16:00': {index: number, task: string, priority: number, isDone: boolean, status: string}[],
        '17:00': {index: number, task: string, priority: number, isDone: boolean, status: string}[],
        '18:00': {index: number, task: string, priority: number, isDone: boolean, status: string}[],
        '19:00': {index: number, task: string, priority: number, isDone: boolean, status: string}[],
        '20:00': {index: number, task: string, priority: number, isDone: boolean, status: string}[],
        '21:00': {index: number, task: string, priority: number, isDone: boolean, status: string}[],
        '22:00': {index: number, task: string, priority: number, isDone: boolean, status: string}[],
    }
}