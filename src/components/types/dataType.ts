export interface dataType{
    id: number,
    date: Date,
    hours: {
        [key: string]: {index: number, task: string, priority: number, isDone: boolean}[],
        '07:00': {index: number, task: string, priority: number, isDone: boolean}[],
        '08:00': {index: number, task: string, priority: number, isDone: boolean}[],
        '09:00': {index: number, task: string, priority: number, isDone: boolean}[],
        '10:00': {index: number, task: string, priority: number, isDone: boolean}[],
        '11:00': {index: number, task: string, priority: number, isDone: boolean}[],
        '12:00': {index: number, task: string, priority: number, isDone: boolean}[],
        '13:00': {index: number, task: string, priority: number, isDone: boolean}[],
        '14:00': {index: number, task: string, priority: number, isDone: boolean}[],
        '15:00': {index: number, task: string, priority: number, isDone: boolean}[],
        '16:00': {index: number, task: string, priority: number, isDone: boolean}[],
        '17:00': {index: number, task: string, priority: number, isDone: boolean}[],
        '18:00': {index: number, task: string, priority: number, isDone: boolean}[],
        '19:00': {index: number, task: string, priority: number, isDone: boolean}[],
        '20:00': {index: number, task: string, priority: number, isDone: boolean}[],
        '21:00': {index: number, task: string, priority: number, isDone: boolean}[],
        '22:00': {index: number, task: string, priority: number, isDone: boolean}[],
    }
}