import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from './admin/admin';
import { User } from './user/user';
import { AttributeEX } from './attribute-ex/attribute-ex';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Admin,User,AttributeEX],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first_project');
}
