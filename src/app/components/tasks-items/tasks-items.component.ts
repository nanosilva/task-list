import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mock-tasks';
import { backspaceFill } from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-tasks-items',
  templateUrl: './tasks-items.component.html',
  styleUrls: ['./tasks-items.component.css']
})
export class TasksItemsComponent implements OnInit {
  @Input() task: Task = TASKS[1];
  @Output() onDeleteTask : EventEmitter <Task> = new EventEmitter()

   backspaceFill=backspaceFill
   
   
  constructor( ) { }

  ngOnInit(): void {
    
  }
  OnDelete(task: Task){
    this.onDeleteTask.emit(task);
  }

}
