import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

interface Countdown {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  countdown: Countdown = { days: '00', hours: '00', minutes: '00', seconds: '00' };
  private weddingDate = new Date('2026-08-29T14:00:00');
  private sub!: Subscription;

  ngOnInit(): void {
    this.tick();
    this.sub = interval(1000).subscribe(() => this.tick());
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private tick(): void {
    const now = new Date();
    const diff = this.weddingDate.getTime() - now.getTime();
    if (diff <= 0) {
      this.countdown = { days: '00', hours: '00', minutes: '00', seconds: '00' };
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    this.countdown = {
      days: String(days).padStart(3, '0'),
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    };
  }
}
