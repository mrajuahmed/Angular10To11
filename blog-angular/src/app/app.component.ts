import { Component,OnInit,OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ViewChild } from '@angular/core'

interface Alert {
  type: string;
  message: string;
}
const ALERTS: Alert[] = [{
  type: 'success',
  message: 'This is an success alert',
}, {
  type: 'info',
  message: 'This is an info alert',
}, {
  type: 'warning',
  message: 'This is a warning alert',
}, {
  type: 'danger',
  message: 'This is a danger alert',
}, {
  type: 'primary',
  message: 'This is a primary alert',
}, {
  type: 'secondary',
  message: 'This is a secondary alert',
}, {
  type: 'light',
  message: 'This is a light alert',
}, {
  type: 'dark',
  message: 'This is a dark alert',
}
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  alerts: Alert[];

  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

  title = 'Blog';
  name="Raju Ahmed.";

  getFullBlogTitile(){
    return "This "+ this.title +" is developed by "+this.name;
  }

  blogerObj={
    Id:1,
    Name:"Marginal Raju",
    Designation:"Software Engineer"
  };

  bloggerArray=['Azad','Sayed','Shohag','Anny'];

  firstButtonFunction(){
    var message="Your First Function Was Successfully Binded With This Button ";
    console.warn(message);
    alert(message);
  };

  emptyValue="__________";
  


  myClickEventValue=this.emptyValue;
  myClickEvent(evt){
    this.myClickEventValue=evt;
    this.emptyValue=evt;
  }

  myMouseOverEventValue=this.emptyValue;
  myMouseOverEvent(evt){
    this.myMouseOverEventValue=evt;
  }

  myMouseEnterEventValue=this.emptyValue;
  myMouseEnterEvent(evt){
    this.myMouseEnterEventValue=evt;
  }

  myMouseLeaveEventValue=this.emptyValue;
  myMouseLeaveEvent(evt){
    this.myMouseLeaveEventValue=evt;
  }

  keyupEvntValue=this.emptyValue;
  myKeyUpEvent(vle){
    this.keyupEvntValue=vle;
  }

  myKeyUpEnterEventValue=this.emptyValue;
  myKeyUpEnterEvent(evt){
    this.myKeyUpEnterEventValue=evt;
  }

  myKeyUpSpaceEventValue=this.emptyValue;
  myKeyUpSpaceEvent(evt){
    this.myKeyUpSpaceEventValue=evt;
  }

  keyDownEvntValue=this.emptyValue;
  myKeyDownEvent(evt){
    this.keyDownEvntValue=evt;
  }

  crntTextBoxValue='';
  crntTextBoxValue2='';
  getTextBoxValue(evt){
    this.crntTextBoxValue=evt.toUpperCase();
    this.crntTextBoxValue2=evt.toLowerCase();
  }

  
  clearTextBoxValue(){
    this.crntTextBoxValue='';
    this.crntTextBoxValue2='';
  }

  getClearMessage(evt){
    if(evt.length>0){
      alert("All text clear.");
    }    
  }

  disabledTextBox=true;
  enableBoxt(evt){
    this.disabledTextBox=!evt;
  }
  enableBoxKeyup(){
    alert('hi');
  }

  colorValue='red';
  switchColor='red';
  show=true;
  
  arryData = [
    {name:"Raju Ahmed", age: 30,email:'raju@mail.com' },
    {name:"Azad Hossain", age: 31,email:'azad@mail.com' },
    {name:"Abu Sayed", age: 32,email:'sayed@mail.com' },
    {name:"Shohag Mia", age: 33,email:'shohag@mail.com' },
    {name:"Tahira Biswas", age: 34,email:'anny@mail.com' },
    
  ];


  setFormValue=[];
  getFormValue(frm){
    debugger;
    if(frm.value.username !='')
    {
      this.setFormValue.push(frm.value);
    }
    
    console.warn(frm.value);    
  }
  @ViewChild('simpleForm') simpleForm: NgForm;

  ClearFormValue(){
    this.setFormValue=[];
    this.simpleForm.reset();
  }
  
  styleBindingColor='green';
  isStyleBinded=false;
  toggleStyleBindingColor(){
    if(this.isStyleBinded){
      this.styleBindingColor='green';
    }else{
      this.styleBindingColor='red';
    }
    this.isStyleBinded=!this.isStyleBinded;
  }
}
