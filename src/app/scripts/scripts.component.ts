import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scripts',
  templateUrl: './scripts.component.html',
  styleUrls: ['./scripts.component.scss']
})
export class ScriptsComponent implements OnInit {

  scripts = [
    {
      name: 'Script 1'
    },
    {
      name: 'Script 2'
    },
    {
      name: 'Script 3'
    },
    {
      name: 'Script 4'
    },
    {
      name: 'Script 5'
    },
    {
      name: 'Script 6'
    },
    {
      name: 'Script 7'
    },
    {
      name: 'Script 8'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
