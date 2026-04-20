import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leaf-divider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="leaf-divider" [class.flipped]="flip">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 60" fill="none" aria-hidden="true">
        <path d="M300 30 Q240 5 180 20 Q120 35 60 15 Q30 8 0 20" stroke="#7A9E7E" stroke-width="1.5" fill="none" opacity="0.6"/>
        <path d="M300 30 Q360 5 420 20 Q480 35 540 15 Q570 8 600 20" stroke="#7A9E7E" stroke-width="1.5" fill="none" opacity="0.6"/>
        <!-- Left leaves -->
        <ellipse cx="120" cy="22" rx="18" ry="8" fill="#7A9E7E" opacity="0.35" transform="rotate(-20 120 22)"/>
        <ellipse cx="190" cy="18" rx="14" ry="6" fill="#C4A265" opacity="0.3" transform="rotate(15 190 18)"/>
        <ellipse cx="80" cy="28" rx="12" ry="5" fill="#7A9E7E" opacity="0.25" transform="rotate(-35 80 28)"/>
        <!-- Center diamond -->
        <path d="M295 30 L300 24 L305 30 L300 36 Z" fill="#C4A265" opacity="0.7"/>
        <!-- Right leaves (mirror) -->
        <ellipse cx="480" cy="22" rx="18" ry="8" fill="#7A9E7E" opacity="0.35" transform="rotate(20 480 22)"/>
        <ellipse cx="410" cy="18" rx="14" ry="6" fill="#C4A265" opacity="0.3" transform="rotate(-15 410 18)"/>
        <ellipse cx="520" cy="28" rx="12" ry="5" fill="#7A9E7E" opacity="0.25" transform="rotate(35 520 28)"/>
      </svg>
    </div>
  `,
  styles: [`
    .leaf-divider {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      padding: 8px 0;

      svg {
        width: 100%;
        height: auto;
      }

      &.flipped {
        transform: scaleY(-1);
      }
    }
  `]
})
export class LeafDividerComponent {
  @Input() flip = false;
}
