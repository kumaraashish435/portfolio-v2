import { afterNextRender, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import gsap from 'gsap';
import { ProjectDto, ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private readonly service = inject(ProjectsService);
  private readonly root = viewChild<ElementRef<HTMLElement>>('projects');

  protected readonly items = signal<ProjectDto[]>([]);

  constructor() {
    //  simple sync data
    this.items.set(this.service.list());

    afterNextRender(() => {
      const host = this.root()?.nativeElement;
      if (!host) return;

      const cards = host.querySelectorAll('[data-card]');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.07,
          ease: 'power2.out',
        }
      );
    });
  }

  protected onCardHover(ev: Event, over: boolean): void {
    const el = ev.currentTarget as HTMLElement | null;
    if (!el) return;

    gsap.to(el, {
      y: over ? -6 : 0,
      boxShadow: over
        ? '0 18px 40px rgba(0,0,0,0.12)'
        : '0 0 0 rgba(0,0,0,0)',
      duration: 0.25,
      ease: 'power2.out',
    });
  }
}