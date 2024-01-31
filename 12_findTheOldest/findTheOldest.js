const getAge = (birth, death) => {
  if (!death) {
    {
      death = new Date().getFullYear();
    }
  }
  return death - birth;
};

const findTheOldest = function (people) {
  return people.reduce((before, person) => {
    const age = getAge(person.yearOfBirth, person.yearOfDeath);
    const beforeAge = getAge(before.yearOfBirth, before.yearOfDeath);
    console.log(age);
    console.log(beforeAge);

    if (age > beforeAge) {
      // console.log(person);
      return person;
    }
    return age > before ? person : before;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
