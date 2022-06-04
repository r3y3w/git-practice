

// class Book{
// 	constructor() {
// 		this.width= 10
// 		this.height= 10
// 	}
// }


// const circle1 = new Circle
// const circle2 = new Circle

// console.log(circle1)
// console.log(circle2)

/**** 
 * 
 * 
 * 
1) Imagine you’re a car factory, create a Class to construct cars with the following properties.
-- Name
-- Color
-- Year
-- Type
-- Create a method that return ‘Vroom vroom!’
2) Create 3 cars object.

****///



class Car{
	constructor(carName, carColor, carYear, carType ) {
		this.Name= carName
		this.Color= carColor
        this.Year= carYear
        this.Type= carType
	}

        carSound() {
        return 'Vroom vroom'
    }
}

const model = new Car('Nissan', 'Yellow', '1998', 'Sedan')
console.log(model)

///////////////////////////////////////////////////////////////////