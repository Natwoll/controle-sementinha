export class Student {
    id: number
    name: string
    age: number
    class: string
    sponsor: string
    released: boolean
    entry: Date
    departure: Date
    createdAt: Date
    updatedAt: Date
}

export class StudentRequest {
  id: number
  name: string
  age: number
  className: string
  sponsor: string
  released: boolean
  entry: Date
  departure: Date

  constructor(student: Student) {
    this.id = student.id
    this.name = student.name
    this.age = student.age
    this.className = student.class
    this.sponsor = student.sponsor
    this.released = student.released
    this.entry = student.entry
    this.departure = student.departure
  }
}
