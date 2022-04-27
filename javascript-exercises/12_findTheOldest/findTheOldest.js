const findTheOldest = function(people) {
    return people.reduce((oldest, person) => getAge(person) > getAge(oldest)? person : oldest);
};

const getAge = function(person) {
    if ('yearOfDeath' in person) {
        return -person.yearOfBirth + +person.yearOfDeath;
    }
    return -person.yearOfBirth + new Date().getFullYear();
}

// Do not edit below this line
module.exports = findTheOldest;
