import { Component, OnInit } from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";
import {shareReplay, takeUntil} from "rxjs/operators";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.css"]
})
export class LayoutComponent implements OnInit {
  betSelect = true;
  botSelect = false;
  historySelect = false;

  loggedIn$ = new BehaviorSubject(false);
  unsub$ = new Subject();

  constructor() {}

  ngOnInit(): void {
    // this.loggedIn$.pipe(
    //   shareReplay(1),
    //   takeUntil(this.unsub$)
    // )
    //   .subscribe( value => {
    //
    //   })
  }

  clickBet() {
    this.betSelect = true;
    this.botSelect = false;
    this.historySelect = false;
  }

  clickBot() {
    this.botSelect = true;
    this.betSelect = false;
    this.historySelect = false;
  }

  clickHistory() {
    this.betSelect = false;
    this.botSelect = false;
    this.historySelect = true;
  }
}
