class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(
      `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`
    );
  }

  static introducePeople(peopleArray) {
    if (!Array.isArray(peopleArray)) {
      throw new Error("introducePeople only takes an array as an argument.");
    }

    for (let person of peopleArray) {
      if (!(person instanceof Person)) {
        throw new Error("All items in array must be Person class instances.");
      }
    }

    // call introduce() on each person
    peopleArray.forEach((p) => p.introduce());
  }
}

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
