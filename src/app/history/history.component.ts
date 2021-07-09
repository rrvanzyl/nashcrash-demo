import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"]
})
export class HistoryComponent implements OnInit {
  blue = [3.14, 1.12, 4.24, 1.07, 1.92, 2.43, 21.86];

  red = [1.31, 1.55, 1.74, 4.21, 2.42, 3.19, 8.83];

  constructor() {}

  ngOnInit(): void {}
}
