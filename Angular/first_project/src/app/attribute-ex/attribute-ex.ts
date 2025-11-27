import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-ex',
  imports: [CommonModule],
  templateUrl: './attribute-ex.html',
  styleUrl: './attribute-ex.css',
})
export class AttributeEX {
  showred=true
  isactive=true
  active(){
     this.isactive=!this.isactive
  }
}
