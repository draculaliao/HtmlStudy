import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  APserver: string = "1.165.189.119:8011/"
  httpOptions: any;
  http: HttpClient;
  constructor(private client: HttpClient) {
    this.http = client;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
}
