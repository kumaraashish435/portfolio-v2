import { afterNextRender, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly root = viewChild<ElementRef<HTMLElement>>('hero');

  protected readonly typed = signal('');

  protected readonly tech = [
  { icon: 'devicon-cplusplus-plain', name: 'C++' },
  { icon: 'devicon-python-plain', name: 'Python' },
  { icon: 'devicon-csharp-plain', name: 'C#' },
  { icon: 'devicon-dotnetcore-plain', name: '.NET' },
  { icon: 'devicon-angularjs-plain', name: 'Angular' },
  { icon: 'devicon-typescript-plain', name: 'TypeScript' },
  { icon: 'devicon-postgresql-plain', name: 'PostgreSQL' },
  { icon: 'devicon-opengl-plain', name: 'OpenGL' }
];

  private readonly phrases = [
    'Building scalable systems…',
    'Designing clean APIs…',
    'Improving performance…',
    'Learning AI/ML with Kaggle…',
    'Exploring game development (SDL3, C++ & Unity)…',
  ];

  constructor() {
    afterNextRender(() => {
      this.animateHero();
      this.startTyping(0);
    });
  }

  private animateHero(): void {
    const el = this.root()?.nativeElement;
    if (!el) return;
    const q = el.querySelectorAll('[data-reveal]');
    gsap.fromTo(
      q,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: 'power3.out',
      },
    );
  }

  private startTyping(index: number): void {
    const phrase = this.phrases[index % this.phrases.length];
    this.typePhrase(phrase, 0, () => {
      gsap.delayedCall(1.2, () => this.erasePhrase(phrase.length, () => this.startTyping(index + 1)));
    });
  }

  private typePhrase(phrase: string, i: number, done: () => void): void {
    if (i > phrase.length) {
      done();
      return;
    }
    this.typed.set(phrase.slice(0, i));
    gsap.delayedCall(0.045, () => this.typePhrase(phrase, i + 1, done));
  }

  private erasePhrase(remaining: number, done: () => void): void {
    if (remaining <= 0) {
      done();
      return;
    }
    const current = this.typed();
    this.typed.set(current.slice(0, Math.max(0, current.length - 1)));
    gsap.delayedCall(0.03, () => this.erasePhrase(remaining - 1, done));
  }
}
