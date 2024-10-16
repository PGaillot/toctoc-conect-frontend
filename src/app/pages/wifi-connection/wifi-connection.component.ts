import { Component } from '@angular/core';
import { NetworkService } from '../../services/network.service';

export interface Network {
  ssid: string;
  power: number;
  security: string;
}

@Component({
  selector: 'app-wifi-connection',
  standalone: true,
  imports: [],
  templateUrl: './wifi-connection.component.html',
  styleUrl: './wifi-connection.component.scss',
})
export class WifiConnectionComponent {
  networks: Network[] = [];
  loading: boolean = false;

  constructor(private networkService: NetworkService) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.loading = true;
    this.networkService
      .getNetworks()
      .subscribe({
        next: (networks) => {
          this.networks = networks;
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          this.loading = false;
        },
      })
      .unsubscribe();
  }
}
