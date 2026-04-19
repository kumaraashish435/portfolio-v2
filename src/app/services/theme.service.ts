import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';

const STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);

  /** false = dark (default), true = light */
  private readonly light = signal(this.readInitial());

  readonly isLight = computed(() => this.light());

  constructor() {
    this.apply(this.light());
  }

  toggle(): void {
    const next = !this.light();
    this.light.set(next);
    this.persist(next);
    this.apply(next);
  }

  private readInitial(): boolean {
    if (typeof localStorage === 'undefined') return false;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light') return true;
    if (stored === 'dark') return false;
    return false;
  }

  private persist(light: boolean): void {
    localStorage.setItem(STORAGE_KEY, light ? 'light' : 'dark');
  }

  private apply(light: boolean): void {
    const root = this.doc.documentElement;
    root.classList.toggle('dark', !light);
    root.style.colorScheme = light ? 'light' : 'dark';
  }
}
