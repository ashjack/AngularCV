import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HexButtonComponent } from './components/hex-button/hex-button.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModalModule, NgbModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { HexCollectionComponent } from './components/hex-collection/hex-collection.component';
import { HttpClientModule } from '@angular/common/http';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CareerProfileComponent } from './components/career-profile/career-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HexButtonComponent,
    HeaderComponent,
    HexCollectionComponent,
    TimelineComponent,
    SkillsComponent,
    CareerProfileComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbProgressbarModule,
    NgbModalModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
