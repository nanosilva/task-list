import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from '../../Task';


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
    this.taskService.deleteTask(task)
      .subscribe(
        ()=> [
          this.tasks = this.tasks.filter( (t)=> {
            console.log("task delete!");
            return t.id !== task.id      
          })
        ]
      )}
      
  toggleReminder(task: Task){
    task.reminder =!task.reminder
    this.taskService.updateTaskReminder(task).subscribe();
    }

  addTask(task:Task){
      console.log(task);
      this.taskService.addTask(task).subscribe((task) => {
        this.tasks.push(task)
      })
  
}
}