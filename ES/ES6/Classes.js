class student{
    constructor(studentname, Course){
        this.studentname=studentname;
        this.Course=Course;
    }

}
const Student1=new student("Mansi Saxena","Btechda");
const Student2=new student("Tanya Maheshwari","Btech core");
console.log("Name: "+Student1.studentname +" "+"Course:"+" "+ Student1.Course);
console.log("Name: "+Student2.studentname +" "+"Course:"+" " + Student2.Course);