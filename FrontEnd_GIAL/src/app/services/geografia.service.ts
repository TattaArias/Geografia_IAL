import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GeografiaService {

  atributo: string = '';
  numeroPais : number = 0 ;
  
  constructor(private http: HttpClient) { 
  }

  getAllGeografia(): Observable<{}>{
    return this.http.get(environment.urlGeografia, httpOptions);
  }
  
}