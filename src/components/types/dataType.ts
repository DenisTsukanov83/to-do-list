export interface dataType{
    id: number,
    date: Date,
    hours: {
        [key: string]: {index: number, task: string}[],
        '07:00': {index: number, task: string}[],
        '08:00': {index: number, task: string}[],
        '09:00': {index: number, task: string}[],
        '10:00': {index: number, task: string}[],
        '11:00': {index: number, task: string}[],
        '12:00': {index: number, task: string}[],
        '13:00': {index: number, task: string}[],
        '14:00': {index: number, task: string}[],
        '15:00': {index: number, task: string}[],
        '16:00': {index: number, task: string}[],
        '17:00': {index: number, task: string}[],
        '18:00': {index: number, task: string}[],
        '19:00': {index: number, task: string}[],
        '20:00': {index: number, task: string}[],
        '21:00': {index: number, task: string}[],
        '22:00': {index: number, task: string}[],
    }
}