import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DoorComponent } from "./components/door/door.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DoorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'toctoc-conect-frontend';
}
