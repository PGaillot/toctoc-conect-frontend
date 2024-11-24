import { Component } from '@angular/core';
import { NetworkService } from '../../services/network.service';
import { WifiNetwork } from '../../models/wifiNetwork.model';
import { NetworkComponent } from "../../components/network/network.component";
import { interval, take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wifi-connection',
  standalone: true,
  imports: [NetworkComponent],
  templateUrl: './wifi-connection.component.html',
  styleUrl: './wifi-connection.component.scss'
})
export class WifiConnectionComponent {

  networks: WifiNetwork[] = [];
  loading: boolean = false;

  constructor(private networkService: NetworkService, private router: Router) { }

  getRandomNum(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  createNetwork(): WifiNetwork {
    const security: string[] = ['wpa', 'wep', 'wpa2', 'wpa3'];
    const ssids: string[] = [
      "FreeWifi_PasGratuit",
      "MotDePasseOublié",
      "ConnexionInterdite",
      "HackMeIfYouCan",
      "VirusDetected",
      "NePasSeConnecter",
      "404_NetworkNotFound",
      "WiFi_De_Lea",
      "Police_Cyber",
      "FBI_SurveillanceVan",
      "PasDeWifiPourToi",
      "Orange_5G_Relax",
      "CafardNet",
      "DéménagementEnCours",
      "MamanInternetMarchePlus",
      "SFR_Arnaque",
      "LeRéseauDuVoisin",
      "TropTardDéjàConnecté"
    ]
    return {
      ssid: ssids[this.getRandomNum(ssids.length - 1)],
      quality: this.getRandomNum(5).toString(),
      security: security[this.getRandomNum(security.length - 1)]
    }
  }

  ngOnInit(): void {
    this.refresh();
    const newtworkInterval = interval(2000);
    const countNumber = newtworkInterval.pipe(take(20));
    countNumber.subscribe((count: number) => this.networks.push(this.createNetwork()));
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

  navToNetwork(network: WifiNetwork) {
    this.router.navigate(['wifi-log', network.ssid], { state: { network: network } })
  }
}
