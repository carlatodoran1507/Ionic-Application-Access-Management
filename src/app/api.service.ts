import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const SERVER_URL = 'http://localhost:2019';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  public getAllElements() {
    return this.http.get(SERVER_URL + '/rules');
  }

  public getElementsWithLimit(level: string) {
    return this.http.get(SERVER_URL + '/level/' + level);
  }

  public getElementById(id: string) {
    return this.http.get(SERVER_URL + '/rule/' + id);
  }

  public addElement(elem: any): Observable<object> {
    return this.http.post(SERVER_URL + '/space', elem);
  }

  public reserveElement(id: any): Observable<object> {
    // TODO: check if it has to be string, number, etc
    return this.http.post(SERVER_URL + '/take', { id: id });
  }

  public updateElement(elem: any): Observable<object> {
    return this.http.post(SERVER_URL + '/update', elem);
    // return this.http.put(SERVER_URL + '/courses/' + elem.id, elem);
  }

  public deleteElement(id: any): Observable<object> {
    return this.http.delete(SERVER_URL + '/space/' + id);
  }
}
