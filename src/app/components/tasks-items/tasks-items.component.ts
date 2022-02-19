import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';
import { backspaceFill } from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-tasks-items',
  templateUrl: './tasks-items.component.html',
  styleUrls: ['./tasks-items.component.css']
})
export class TasksItemsComponent implements OnInit {
  @Input() task: Task = TASKS[1];
   backspaceFill=backspaceFill
   
   
  constructor( ) { }

  ngOnInit(): void {
    
  }
  OnDelete(){
    console.log("Delete!");
  }

}
