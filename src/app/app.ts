import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import gsap from 'gsap';
import { filter } from 'rxjs';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  protected readonly theme = inject(ThemeService);
  private readonly router = inject(Router);

  private readonly page = viewChild<ElementRef<HTMLElement>>('page');
  protected readonly menuOpen = signal(false);

  ngAfterViewInit(): void {
    gsap.to('#app-loader', {
      autoAlpha: 0,
      duration: 0.45,
      ease: 'power2.out',
      delay: 0.1,
      onComplete: () => {
        const el = document.getElementById('app-loader');
        el?.remove();
      },
    });

    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe(() => {
      const host = this.page()?.nativeElement;
      if (!host) return;
      gsap.fromTo(
        host,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
      );
      this.menuOpen.set(false);
    });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }
}
