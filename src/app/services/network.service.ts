import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WifiNetwork } from '../models/wifiNetwork.model';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  apiUrl: string = 'http://192.168.4.1/api/'; // local url generate by flask.

  constructor(private http: HttpClient) {}

  getNetworks(): Observable<WifiNetwork[]> {
    return this.http.get<WifiNetwork[]>(`${this.apiUrl}/wifi`);
  }
}
