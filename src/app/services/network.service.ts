import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WifiNetwork } from '../models/wifiNetwork.model';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  apiUrl: string = 'http://127.0.0.1:5000'; // local url generate by flask.

  constructor(private http: HttpClient) {}

  getNetworks(): Observable<WifiNetwork[]> {
    return this.http.get<WifiNetwork[]>(`${this.apiUrl}/wifi`);
  }
}
