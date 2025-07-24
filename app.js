function Employee(id, name, age, email){
this.id = id;
this.name = name;
this.age = age;
this.email = email
}
var employeeDetails =[];
for (i=1; i<=50; i++){
    var id= "EMP" + "0" + i ;
    var name = "Employee" + i ;
    var age = 20 + (i%10);
    var email = "employee" + i +"@gmail.com";
employeeDetails.push(new Employee(id, name, age, email));
}
console.log("all 50 employees");

for(j=0; j<=50;j++){
    console.log(employeeDetails[j]);
}