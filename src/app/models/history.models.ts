import { Student } from './student.models'

export class HistoryReponse {
    id: number
    user_id: number
    eventDate: Date
    studentsJson: string
}

export class History {
    id: number
    userId: number
    eventDate: Date
    students: Array<Student>
    
    constructor(history: HistoryReponse) {
        this.id = history.id
        this.userId = history.user_id
        this.eventDate = history.eventDate
        this.students = JSON.parse(history.studentsJson)
    }
}