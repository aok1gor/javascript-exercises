const findTheOldest = function(people) {

    let ageOfDeath = 0;
    let biggestAge = 0;
    let numberOfBiggest = 0;

    for (let i = 0; i < people.length; i++) {
        
        if (!("yearOfDeath" in people[i])) {
            people[i].yearOfDeath = new Date().getFullYear();
        }

        ageOfDeath = people[i].yearOfDeath - people[i].yearOfBirth;
        
        
        if (ageOfDeath > biggestAge) {
            biggestAge = ageOfDeath;
            numberOfBiggest = i;
        }
    }

    return people[numberOfBiggest];

};

// Do not edit below this line
module.exports = findTheOldest;
