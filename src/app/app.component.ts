import { Component } from "@angular/core";
import { PeopleService } from "./people.service";
import { HttpErrorResponse } from "@angular/common/http";
import { retry } from "rxjs/operators";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  people;
  message: string;
  constructor(private peopleService: PeopleService) {}

  fetchPeople() {
    this.peopleService.fetchPeople().subscribe(
      data => {
        console.log("--data--", data);
        console.log(
          "--response headers---",
          data.headers.get("my-custom-header")
        );
        this.message = null;
        this.people = data.body;
      },
      (error: HttpErrorResponse) => {
        //client side error
        if (error instanceof Error) {
          this.message = `An error occurred ${error.error.message}`;
        } else {
          //server side error
          this.message = `Backend returned error code ${
            error.status
          }, body was ${error.message} `;
        }
      }
    );
  }
}
