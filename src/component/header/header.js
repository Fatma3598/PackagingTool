import "./style.scss";
const element = document.createElement("header");

class Person {
    
    constructor(fname, lname) {
       this.fname = fname;
       this.lname = lname;
    }
 
    get fullname() {
       return this.fname +" "+this.lname;
    }
 }
 element.innerHTML = new Person("Fatma","Gamal").fullname;
 element.classList.add('info')
 document.body.appendChild(element);
 console.log(new Person("Fatma","Gamal"));



