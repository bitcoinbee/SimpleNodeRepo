class Employee
{
     name ;
     gender;
     phone;
     dob;
     address;
     ssn;

     constructor(personName, personGender)
     {
         this.name=personName;
         this.gender= personGender;
     }
    }

     var cvsemployee = new Employee('Ritesh', 'Male');

     console.log(`person name is ${cvsemployee.name}`);
     console.log (`person gender is ${cvsemployee.gender}`);



