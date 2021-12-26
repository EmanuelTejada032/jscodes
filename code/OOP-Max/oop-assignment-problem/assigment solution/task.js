

class Course{

   #price;
   get price(){
    return '$' + this.#price;
   }

   set price(value){
    if(value < 0 ) {
        console.log("invalid price value, we are changing the value to positive number"); 
        this.#price = Math.abs(value);
        return;
    }
    this.#price = value;
   }

    constructor(title, length, price){
        this.title = title;
        this.length = length;
        this.price = price;
    }

    lengthPrice(){
        console.log(`You are paying $${this.#price/ this.length} per lecture on ${this.title} course`);
    }

    printCourseSummary(){
        console.log(`this course has ${this.length} lectures
                     it's price is ${this.#price}`);
    }
}


class PracticalCourse extends Course{
    constructor(title, length, price,numOfExercises){
        super(title, length, price);
        this.numOfExercises = numOfExercises;
    }
    
}
class TheoreticalCourse extends Course{
    publish(){
        console.log(`Publishing ${this.title}`);
    }
    
}

let coursesList = []




const webDevCourse = new Course('The web development bootcamp', 409, 13.99);
webDevCourse.printCourseSummary();
webDevCourse.lengthPrice();
coursesList.push(webDevCourse);

console.log("**************");


const typeScript = new Course('The complete typescript introduction', 650, 25.99,25);
typeScript.printCourseSummary();
typeScript.lengthPrice();   
coursesList.push(typeScript);
console.log("**************");



const angularCourse = new PracticalCourse('The complete guide to angular development', 95, -54 ,25);
angularCourse.printCourseSummary();
angularCourse.lengthPrice();
coursesList.push(angularCourse)

console.log("**************");



const githubCourse = new TheoreticalCourse('Master githubb in a couple of hours', 72, 9.99);
githubCourse.printCourseSummary();
githubCourse.lengthPrice();
coursesList.push(githubCourse)

console.log("**************");


console.log(coursesList);



