import { Component } from '@angular/core';
import { LeafDividerComponent } from '../../shared/leaf-divider/leaf-divider.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-adults-notice',
  standalone: true,
  imports: [LeafDividerComponent, ScrollRevealDirective],
  templateUrl: './adults-notice.component.html',
  styleUrl: './adults-notice.component.scss',
})
export class AdultsNoticeComponent {}
