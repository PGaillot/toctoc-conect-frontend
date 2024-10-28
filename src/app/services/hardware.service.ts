import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  constructor(private http:HttpClient) {}


  // TODO: résussire a recupere l'id du hardware
  getHardwareId():Observable<string>{
   return this.http.get<string>(`${environment.FLASK_API_URL}/hardware/id`)
  }
}
