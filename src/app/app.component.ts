import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LottieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'toctoc-conect';
  animationItem: AnimationItem | undefined;

  options: AnimationOptions = {
    path: './animations/door_sleep.json',
    loop: true,
    autoplay: true
  };


  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
