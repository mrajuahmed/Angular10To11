import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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

}
