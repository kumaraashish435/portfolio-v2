import { afterNextRender, Component, ElementRef, viewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private readonly root = viewChild<ElementRef<HTMLElement>>('about');

  constructor() {
    afterNextRender(() => {
      const host = this.root()?.nativeElement;
      if (!host) return;
      const blocks = host.querySelectorAll('[data-reveal]');
      gsap.fromTo(
        blocks,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power2.out' },
      );
    });
  }
}
