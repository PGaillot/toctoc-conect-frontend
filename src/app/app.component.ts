import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { routeTransition } from '../route-transition';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LottieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations:[
    routeTransition
  ]
})
export class AppComponent {
  title = 'toctoc-conect';
  animationItem: AnimationItem | undefined;

  options: AnimationOptions = {
    path: './animations/door_sleep.json',
    loop: true,
    autoplay: true
  };

  constructor(
    protected route:ActivatedRoute
  ){}

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
