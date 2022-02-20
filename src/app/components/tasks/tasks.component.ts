import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from '../../task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  tasks: Task[] = [];


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks: Task[])=> this.tasks = tasks
    
  );
  }
  DeleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=> [this.tasks = this.tasks.filter(t => t.id !== task.id)
    ]
    )}
}
