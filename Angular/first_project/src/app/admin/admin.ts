import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  name:string ="Tintu"
  message:string="how are you"
  display(){
    return "hello Inmakes"
  }
  mark=100
  isdisabled=true
  
  show(){
    alert(this.message)
  }
}
