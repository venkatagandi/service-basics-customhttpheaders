import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders,
  HttpResponse
} from "@angular/common/http";
import { retry, retryWhen, delay, flatMap } from "rxjs/operators";
import "rxjs/add/observable/of";
export interface Person {
  name: string;
}

@Injectable()
export class PeopleService {
  constructor(private http: HttpClient) {}

  fetchPeople(): Observable<HttpResponse<Person>> {
    // return this.http.get<Person>("/api/v1/peopleu").pipe(retry(3));
    return this.http.get<Person>("/api/v1/people", { observe: "response" });
  }
}
