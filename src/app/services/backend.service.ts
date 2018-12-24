import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http: HttpClient) { }

  getSmokeTest() {
    return this.http.get('/api/smoke').toPromise();
  }

  getUsers() {
    return this.http.get('/api/users').toPromise();
  }

  createUser(user) {
    return this.http.post('/api/users', user).toPromise();
  }
}
