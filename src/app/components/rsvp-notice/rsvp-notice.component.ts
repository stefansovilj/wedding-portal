import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-rsvp-notice',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './rsvp-notice.component.html',
  styleUrl: './rsvp-notice.component.scss',
})
export class RsvpNoticeComponent {}
