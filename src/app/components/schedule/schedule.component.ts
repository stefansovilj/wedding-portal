import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafDividerComponent } from '../../shared/leaf-divider/leaf-divider.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, LeafDividerComponent, ScrollRevealDirective],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent {
  events: ScheduleItem[] = [
    {
      time: '14:00',
      title: 'Crkveno venčanje',
      description: 'Crkva Svetih Apostola Petra i Pavla, Topčider',
      icon: '⛪',
    },
    {
      time: '16:00',
      title: 'Skupljanje svatova',
      description: 'Restoran Đurđevdan – Zrenjaninski put 106B, Beograd',
      icon: '🥂',
    },
    {
      time: 'Nakon 16h',
      title: 'Matičar',
      description: 'Građansko venčanje',
      icon: '📜',
    },
    {
      time: 'Uveče',
      title: 'Sečenje torte',
      description: 'Slatki trenutak koji pamtimo zauvek',
      icon: '🎂',
    },
    {
      time: '00:00',
      title: 'Poslednji ples',
      description: 'Noć koja traje zauvek',
      icon: '✨',
    },
  ];
}
