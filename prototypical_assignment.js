// Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber and favoriteFoods (an array).


function Person 
    (firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteNumber = favoriteNumber;
        this.favoriteFoods = favoriteFoods;
   ; }
    
   
//    Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.

    Person.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    const peter = new Person("Peter", "Oleary", "Green", 42, ['pasta', 'pizza']);
    peter.fullName();

console.log(peter.fullName());

// Overwrite the toString method from the Object prototype by creating a toString method for Person. The toString method should return a string in the following format:

// let peter = new Person("Peter", "Oleary", "Green", 42, ['pasta', 'pizza']);
// peter.toString(); // Peter Oleary, Favorite Color: Green, Favorite Number: 42

Person.prototype.toString = function () {
    return this.firstName + " " + this.lastName + ", Favorite Color: " + this.favoriteColor + ", Favorite Number: " + this.favoriteNumber;
};
console.log(peter.toString());

// Add a property on the Person object called family which is an empty array.

Person.prototype.family = [];
console.log(peter.family);

// Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object constructed from the Person constructor - take a look at the instanceofoperator. Make sure that your family array does not include duplicates! This method should return the length of the family array.

Person.prototype.addToFamily = function (newinput) {
if (newinput instanceof Person && !this.family.includes(newinput)) {
this.family.push(newinput);
}
    return this.family.length;
};

const amanda = new Person("Amanda", "Simpson", "Green", 39, ['Brocoli', 'Pho']);
const richard = new Person("Richard", "Thompson", "Green", 24, ['Tacos', 'Pita']);
const Samuel = new Person("Samuel", "Bag", "Green", 54, ['Pasta', 'Wraps']);

console.log(amanda);

console.log(peter.addToFamily(amanda));
console.log(peter.addToFamily(richard));
console.log(peter.addToFamily(Samuel));

console.log(peter.family.length);
console.log(amanda.family.length);
console.log(richard.family.length);
console.log(Samuel.family.length);


