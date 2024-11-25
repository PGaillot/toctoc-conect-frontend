import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WifiNetwork } from '../models/wifiNetwork.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {

  constructor(private http: HttpClient) {}

  getNetworks(): Observable<WifiNetwork[]> {
    return this.http.get<WifiNetwork[]>(`${environment.FLASK_API_URL}/wifi`);
  }

  connectToNetwork(network:WifiNetwork, password:string):Observable<{success:boolean}>{
    return new Observable<{success:boolean}>(observer => {
      setTimeout(() => {
        console.log('coucou')
        if(Math.random() > 0.5){
          observer.next({success:true})
        } else {
          observer.next({success:false})
        }
        observer.complete()
      }, 2000)
    })
  }
}
