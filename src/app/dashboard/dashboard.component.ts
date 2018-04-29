import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Router, ActivatedRoute } from "@angular/router";
import "rxjs/Rx";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private sid: string;
  public entries: Array<any>;

  public constructor(private http: Http, private router: Router, private route: ActivatedRoute) {
      this.entries = [];
  }

  public ngOnInit() {
      this.route.queryParams.subscribe(params => {
          this.sid = params["sid"];
          let headers = new Headers({ "authorization": "Bearer " + params["sid"] });
          let options = new RequestOptions({ headers: headers });
          this.http.get("http://localhost:3000/metrics", options)
              .map(result => result.json())
              .subscribe(result => {
                  this.entries = result;
              });
      });
  }

  public create() {
      this.router.navigate(["/metric"], { "queryParams": { "sid": this.sid } });
  }

}
