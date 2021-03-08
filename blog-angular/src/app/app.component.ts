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
  }

  bloggerArray=['Azad','Sayed','Shohag','Anny']
}
