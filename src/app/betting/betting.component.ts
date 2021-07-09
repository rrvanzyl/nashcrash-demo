import { Component, OnInit } from '@angular/core';

export interface IWager {
  car: string,
  wager: boolean
}

export enum UomEnum {
  NITROS = 'NITROS',
  K1000 = 'K',
  M1000k = 'M'
}

@Component({
  selector: 'app-betting',
  templateUrl: './betting.component.html',
  styleUrls: ['./betting.component.scss']
})
export class BettingComponent implements OnInit {

  carWager: IWager[] = [
    {
      car: 'blue',
      wager: false
    },
    {
      car: 'red',
      wager: false
    }
  ]
  blueSelected = false;
  redSelected = false;
  blueUOM = UomEnum.NITROS;
  redUOM = UomEnum.NITROS;

  constructor() { }

  ngOnInit(): void {
  }

  selectWager(car: string) {

    let tempWager = this.carWager;
    this.carWager = [];
    const selectCar: IWager[] = tempWager.filter(w => w.car === car);
    this.carWager.push({car: car, wager: !selectCar[0].wager});

    const selectCar2: IWager[] = tempWager.filter(w => w.car !== car);
    this.carWager.push({car: selectCar2[0].car, wager: false});

  }

  getCarWager(car: string) {
    return this.carWager.filter(c => c.car === car && c.wager).length > 0;
  }

  getBlueCarSelected() {
    this.blueSelected = !this.blueSelected;
  }

  getRedCarSelected() {
    this.redSelected = !this.redSelected;
  }

  changeBlueBetUOM() {
    this.blueUOM = this.blueUOM === UomEnum.NITROS ? UomEnum.K1000 :
                   this.blueUOM === UomEnum.K1000 ? UomEnum.M1000k :
                     UomEnum.NITROS;
  }

  changeRedBetUOM() {
    this.redUOM = this.redUOM === UomEnum.NITROS ? UomEnum.K1000 :
      this.redUOM === UomEnum.K1000 ? UomEnum.M1000k :
        UomEnum.NITROS;
  }

}
