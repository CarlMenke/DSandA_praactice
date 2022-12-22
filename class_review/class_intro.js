class Student{
    constructor (firstName, lastName, grade){
        this.firstName = firstName
        this.lastName = lastName
        this.grade = grade
        this.tardies = 0
    }
    markLate(){
        this.tardies++
        return `${this.firstName} has been late ${this.tardies} times`
    }
}

let firstStudent = new Student("Jimmy", "Loco", 6)

console.log(firstStudent.markLate())

