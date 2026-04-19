import { afterNextRender, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import gsap from 'gsap';
import { catchError, of } from 'rxjs';
import { ProjectDto, ProjectsApiService } from '../../services/projects-api.service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private readonly api = inject(ProjectsApiService);
  private readonly root = viewChild<ElementRef<HTMLElement>>('projects');

  protected readonly items = signal<ProjectDto[]>([]);
  protected readonly loadError = signal(false);

  constructor() {
    this.api
      .list()
      .pipe(
        catchError(() => {
          this.loadError.set(true);
          return of(FALLBACK_PROJECTS);
        }),
      )
      .subscribe((rows) => this.items.set(rows));

    afterNextRender(() => {
      const host = this.root()?.nativeElement;
      if (!host) return;
      const cards = host.querySelectorAll('[data-card]');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.07, ease: 'power2.out' },
      );
    });
  }

  protected onCardHover(ev: Event, over: boolean): void {
    const el = ev.currentTarget as HTMLElement | null;
    if (!el) return;
    this.hoverCard(el, over);
  }

  private hoverCard(el: HTMLElement, over: boolean): void {
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

const FALLBACK_PROJECTS: ProjectDto[] = [
  {
    id: '0',
    title: 'StickHero',
    description: 'C++ game automation with timing-aware control loops.',
    techStack: ['C++'],
    githubUrl: 'https://github.com/',
  },
  {
    id: '1',
    title: '3D ASCII Cube',
    description: 'Low-level 3D math rendered as ASCII in the terminal.',
    techStack: ['C++', 'OpenGL concepts'],
    githubUrl: 'https://github.com/',
  },
  {
    id: '2',
    title: 'Reactivities',
    description: 'Clean architecture sample with C#, EF Core, and Angular.',
    techStack: ['C#', 'ASP.NET Core', 'Angular'],
    githubUrl: 'https://github.com/',
  },
  {
    id: '3',
    title: 'EcoCart',
    description: 'Business backend flows with REST and PostgreSQL.',
    techStack: ['C#', '.NET', 'PostgreSQL'],
    githubUrl: 'https://github.com/',
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'This portfolio — API-driven content and Docker-ready deploys.',
    techStack: ['.NET 9', 'Angular', 'Docker'],
    githubUrl: 'https://github.com/',
  },
];
