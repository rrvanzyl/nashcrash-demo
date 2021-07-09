import { Component, OnInit } from '@angular/core';
import {users} from "@app/data/users.data";

@Component({
  selector: 'app-game-totals',
  templateUrl: './game-totals.component.html',
  styleUrls: ['./game-totals.component.scss']
})
export class GameTotalsComponent implements OnInit {

  users = users;

  constructor() { }

  ngOnInit(): void {
  }

}
