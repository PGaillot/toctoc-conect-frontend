import { Component, Input } from '@angular/core';
import { WifiNetwork } from '../../models/wifiNetwork.model';
import { animate, style, transition, trigger } from '@angular/animations';

const hidden = {
  transform: 'translateX(-20%)',
  opacity: '0'
}

const visible = {
  transform: 'translateX(0)',
  opacity: '1'
}
 const timing = '0.2s ease-in'

@Component({
  selector: 'app-network',
  standalone: true,
  imports: [],
  template: `
  <div @appear class="network">
    <h3>{{ network.ssid }}</h3>
    <p>quality: {{ network.quality }}</p>
    <p>Security: {{ network.security }}</p>
  </div>`,
  styleUrl: './network.component.scss',
  animations: [
    trigger('appear', [
      transition(':enter', [
        style(hidden),
        animate(timing, style(visible))
      ]),
      transition(':leave', [
        style(visible),
        animate(timing, style(hidden))
      ]),
    ])
  ]
})
export class NetworkComponent {
  @Input() network!: WifiNetwork;
}
