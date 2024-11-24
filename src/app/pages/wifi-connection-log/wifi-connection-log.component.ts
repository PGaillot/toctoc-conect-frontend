import { Component, Input } from '@angular/core';
import { WifiNetwork } from '../../models/wifiNetwork.model';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-wifi-connection-log',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './wifi-connection-log.component.html',
  styleUrl: './wifi-connection-log.component.scss'
})
export class WifiConnectionLogComponent {
  @Input() network:WifiNetwork | undefined;
  passwordForm:FormGroup = new FormGroup({
    password: new FormControl('',[ Validators.required, Validators.min(4)])
  })

  constructor(
    private router:Router
  ){
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['network']) {
      this.network = navigation.extras.state['network'];
    } else {
      console.warn('Aucun réseau Wi-Fi n\'a été fourni via la navigation.');
    } 
  }



}
