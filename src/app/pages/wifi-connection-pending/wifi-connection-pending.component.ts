import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WifiNetwork } from '../../models/wifiNetwork.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { NetworkService } from '../../services/network.service';

@Component({
  selector: 'app-wifi-connection-pending',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './wifi-connection-pending.component.html',
  styleUrl: './wifi-connection-pending.component.scss'
})
export class WifiConnectionPendingComponent {

  network: WifiNetwork | undefined;
  password: string | undefined;
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  connectionSuccess$:Observable<boolean> = new Observable<boolean>();

  constructor(
    private router: Router,
    private networkService: NetworkService
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.network = navigation.extras.state['network'];
      this.password = navigation.extras.state['password'];
    }
  }


  ngOnInit(): void {
    if (this.network && this.password) {
      this.connectionSuccess$ = this.networkService.connectToNetwork(this.network, this.password).pipe(
        map((response: { success: boolean }) => {
          this.loading$.next(false);      
          return response.success;
        })
      );
    } else {
      this.loading$.next(false);
      console.warn("Réseau ou mot de passe manquant !");
    }

    this.connectionSuccess$.subscribe(res => console.log(res))
  }

}
