
if (true) {
  let x = 10;
  var y = 20;
}

console.log(y); 
console.log(x); 

const profile = {
  user: {
    details: {
      email: "test@mail.com",
    },
  },
};

// Accessing safely
console.log(profile.user?.details?.email); 
console.log(profile.user?.details?.phone); 
const student = {
  name: "Rahul",
  marks: {
    math: 89,
  },
};



console.log(student.marks?.science?.score);

