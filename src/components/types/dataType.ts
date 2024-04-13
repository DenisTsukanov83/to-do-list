export interface dataType{
    id: number,
    date: Date,
    hours: {
        [key: string]: {index: number, task: string, priority: number}[],
        '07:00': {index: number, task: string, priority: number}[],
        '08:00': {index: number, task: string, priority: number}[],
        '09:00': {index: number, task: string, priority: number}[],
        '10:00': {index: number, task: string, priority: number}[],
        '11:00': {index: number, task: string, priority: number}[],
        '12:00': {index: number, task: string, priority: number}[],
        '13:00': {index: number, task: string, priority: number}[],
        '14:00': {index: number, task: string, priority: number}[],
        '15:00': {index: number, task: string, priority: number}[],
        '16:00': {index: number, task: string, priority: number}[],
        '17:00': {index: number, task: string, priority: number}[],
        '18:00': {index: number, task: string, priority: number}[],
        '19:00': {index: number, task: string, priority: number}[],
        '20:00': {index: number, task: string, priority: number}[],
        '21:00': {index: number, task: string, priority: number}[],
        '22:00': {index: number, task: string, priority: number}[],
    }
}