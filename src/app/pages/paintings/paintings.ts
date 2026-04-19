import { afterNextRender, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import gsap from 'gsap';
import { PaintingDto, PaintingsApiService } from '../../services/paintings-api.service';

@Component({
  selector: 'app-paintings',
  imports: [],
  templateUrl: './paintings.html',
  styleUrl: './paintings.css',
})
export class Paintings {
  private readonly api = inject(PaintingsApiService);
  private readonly root = viewChild<ElementRef<HTMLElement>>('paintings');

  protected readonly items = signal<PaintingDto[]>([]);

  constructor() {
    this.items.set(this.api.list()());

    afterNextRender(() => {
      const host = this.root()?.nativeElement;
      if (!host) return;
      const cards = host.querySelectorAll('[data-painting-card]');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
      );
    });
  }

  protected onCardHover(ev: Event, over: boolean): void {
    const el = ev.currentTarget as HTMLElement | null;
    if (!el) return;
    this.hoverCard(el, over);
  }

  protected onImageClick(painting: PaintingDto): void {
    // You could implement a lightbox or modal here
    console.log('Painting clicked:', painting.title);
  }

  private hoverCard(el: HTMLElement, over: boolean): void {
    const image = el.querySelector('[data-painting-image]') as HTMLElement;
    const overlay = el.querySelector('[data-painting-overlay]') as HTMLElement;
    
    gsap.to(el, {
      y: over ? -8 : 0,
      scale: over ? 1.02 : 1,
      duration: 0.3,
      ease: 'power2.out',
    });

    if (image) {
      gsap.to(image, {
        scale: over ? 1.1 : 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    }

    if (overlay) {
      gsap.to(overlay, {
        opacity: over ? 1 : 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }
}
