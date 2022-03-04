import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import{ Task} from '../../Task'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task>= new EventEmitter();

  id: number=0
  text: string=""
  day: string="";
  reminder: boolean=false;
  showAddTask: boolean=false;
  subscription?: Subscription;



  constructor(
    private uiService: UiService
  ) { 
    this.subscription = this.uiService.onToggle().subscribe(value=> this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("onsubmit")
    if(this.text.length===0){
      alert("Please add task");
      return
    }

    const newTask={
      id: this.id,
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.onAddTask.emit(newTask);
    alert("se agregará tarea");
    this.text=""
    this.day=""

  }

}
