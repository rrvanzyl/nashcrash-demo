import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages = [
    {
      from: 'TheBeggar',
      time: '10:00am',
      message: 'Hi, who can borrow me 10 Nitros please. I am waiting for my depo to come in. Will pay back asap...'
    },
    {
      from: 'ThePoliceMan',
      time: '10:02am',
      message: 'And what are you going to do with 10 Nitros?'
    },
    {
      from: 'TheBeggar',
      time: '10:03am',
      message: 'Why do you care?'
    },
    {
      from: 'ThePoliceMan',
      time: '10:03am',
      message: 'I dont... thats the point'
    },
    {
      from: 'TheBeggar',
      time: '10:03am',
      message: 'Stuff you man! Give a guy a break!'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
