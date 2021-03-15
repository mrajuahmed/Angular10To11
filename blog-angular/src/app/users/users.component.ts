import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 
  @Input() takeParentObjData;
  @Output() getDataFromChildComponent:EventEmitter<any>=new EventEmitter();

  displayedColumns: string[] = ['empName', 'Dept', 'email'];
  
  constructor() { }

  ngOnInit(): void {
    this.getDataFromChildComponent.emit([{id:1,name:"Raju",roll:2},{id:2,name:"Babul",roll:1},{id:3,name:"Kamal",roll:3}])
  }

}
