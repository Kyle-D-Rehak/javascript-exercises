const findTheOldest = function(people) {
    const d = new Date();
    people.forEach(person => {if(person.yearOfDeath == undefined) {person.yearOfDeath = d.getFullYear()}});
    let sorted = people.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1);
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
