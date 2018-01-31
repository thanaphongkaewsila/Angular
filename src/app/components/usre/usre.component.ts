import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-usre',
  templateUrl: './usre.component.html',
  styleUrls: ['./usre.component.css']
})
export class UsreComponent implements OnInit {
  private name:string;
  private age:number;
  private email:string;
  // dictionry
  private address:{
    street:string,
    city:string,
    province:string,
    postcode:string
  }
  private todoList:todo [];
  private isEditable:boolean = true;
  // array
  private skills:string[];
  constructor(private todoService:TodoService) {
  }

    ngOnInit() {
    this.name = "Thanaphong KAewsila";
    this.age = 21;
    this.email = "thanaphong@cpru.ac.th";

    this.address = {
      street: "39/45",
      city: "neosnga",
      province: "Chaiyaphum",
      postcode: "36130"
    };
    this.skills = ["Programming",,"Eating"];
    //call service
    this.todoService.getTodoList().subscribe((response) => {
      this.todoList = response;
    })
   }
    addSkill(skill){
      this.skills.unshift(skill);
      return false;
    }
        toggleEdit() {
          this.isEditable =! this.isEditable;
          
    }
    removeSkill(skill){
      this.skills.forEach((element, index) => {
        if (element == skill){
          this.skills.splice(index, 1);
        }
      });
    }
  }

  interface todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


