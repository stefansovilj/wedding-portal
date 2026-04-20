import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafDividerComponent } from '../../shared/leaf-divider/leaf-divider.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-venue',
  standalone: true,
  imports: [CommonModule, LeafDividerComponent, ScrollRevealDirective],
  templateUrl: './venue.component.html',
  styleUrl: './venue.component.scss',
})
export class VenueComponent {
  locations = [
    {
      image: 'crkva.jpg',
      imageAlt: 'Crkva Svetog Vasilija Ostroškog, Banjica',
      name: 'Crkva Svetog Vasilija Ostroškog',
      address: 'Crnotravska 2, Beograd',
      mapsUrl: 'https://www.google.com/maps/place/Saint+Basil+of+Ostrog+Serbian+Orthodox+Church/@44.7619288,20.4787477,21z/data=!4m6!3m5!1s0x475a7101f780c033:0x46b8245286b87c6a!8m2!3d44.7619789!4d20.4788746!16s%2Fg%2F12lqjvmxp!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D',
      label: 'Venčanje',
    },
    {
      image: 'restoran.jpg',
      imageAlt: 'Restoran Đurđevdan',
      name: 'Restoran Đurđevdan',
      address: 'Zrenjaninski put 106B, Beograd 11000',
      mapsUrl: 'https://www.google.com/maps/place/Djurdjevdan+Open+Concept/@44.8655025,20.4759345,20.87z/data=!4m12!1m5!3m4!2zNDTCsDUxJzU2LjAiTiAyMMKwMjgnMzMuNyJF!8m2!3d44.8655432!4d20.4760132!3m5!1s0x475a64b9fb890bc7:0x23794ef89868d32b!8m2!3d44.8654999!4d20.4759805!16s%2Fg%2F1ptx9kbwg!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D',
      label: 'Slavlje',
    },
  ];
}
