import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AdUnit } from './components/service/AdUnit';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdunitService {
  getAdUnit(): any {
    throw new Error("Method not implemented.");
  }

  uri = 'http://localhost:4000/adunites';

  constructor(private http: HttpClient) { }

  addAdUnit(fname, lname, email,subject, message) {
    const obj = {
      fname: fname,
       lname: lname,
       email: email,
      
       subject: subject,
       message: message
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(() => console.log('Done'));
  }

  getAdUnits() {
    return this
           .http
           .get(`${this.uri}`);
}
editAdUnit(fname) {
  return this
            .http
            .get(`${this.uri}/edit/${fname}`);
}
}