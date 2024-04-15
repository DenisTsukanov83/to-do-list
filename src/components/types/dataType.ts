import { hourType } from "./hourType"

export interface dataType{
    id: number,
    date: Date,
    hours: {
        [key: string]: hourType[],
        '07:00': hourType[],
        '08:00': hourType[],
        '09:00': hourType[],
        '10:00': hourType[],
        '11:00': hourType[],
        '12:00': hourType[],
        '13:00': hourType[],
        '14:00': hourType[],
        '15:00': hourType[],
        '16:00': hourType[],
        '17:00': hourType[],
        '18:00': hourType[],
        '19:00': hourType[],
        '20:00': hourType[],
        '21:00': hourType[],
        '22:00': hourType[],
    }
}