const student = {
    Name: "Kirill", 
    Flow: "fr-125",
    Specialization: "Frontend-developer"
  };

  console.log(showProps(student, "age")); //false
  console.log(showProps(student, "Name")); //true