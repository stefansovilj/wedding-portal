import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { VenueComponent } from './components/venue/venue.component';
import { AdultsNoticeComponent } from './components/adults-notice/adults-notice.component';
import { RsvpNoticeComponent } from './components/rsvp-notice/rsvp-notice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, ScheduleComponent, RsvpNoticeComponent, AdultsNoticeComponent, VenueComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
