import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutComponent} from "./layout/layout.component";
import {HistoryComponent} from "./history/history.component";
import {SmokeComponent} from "./smoke/smoke.component";
import { ChatComponent } from './chat/chat.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { BettingComponent } from './betting/betting.component';
import { ScriptsComponent } from './scripts/scripts.component';
import { HistoryFullComponent } from './history-full/history-full.component';
import { GameTotalsComponent } from './game-totals/game-totals.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HistoryComponent,
    SmokeComponent,
    ChatComponent,
    LoginComponent,
    BettingComponent,
    ScriptsComponent,
    HistoryFullComponent,
    GameTotalsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
