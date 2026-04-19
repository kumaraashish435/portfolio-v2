import { afterNextRender, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import gsap from 'gsap';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly root = viewChild<ElementRef<HTMLElement>>('contact');

  protected readonly sending = signal(false);
  protected readonly sent = signal(false);
  protected readonly error = signal<string | null>(null);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(120)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(256)]],
    message: ['', [Validators.required, Validators.maxLength(4000)]],
  });

  protected readonly links = {
    github: 'https://github.com/kumaraashish435',
    linkedin: 'https://www.linkedin.com/',
  };

  constructor() {
    afterNextRender(() => {
      const host = this.root()?.nativeElement;
      if (!host) return;

      const blocks = host.querySelectorAll('[data-reveal]');
      gsap.fromTo(
        blocks,
        { opacity: 0, y: 14 },
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

  protected submit(): void {
    if (this.form.invalid || this.sending()) {
      this.form.markAllAsTouched();
      return;
    }

    this.error.set(null);
    this.sent.set(false);
    this.sending.set(true);

    const v = this.form.getRawValue();

    const subject = encodeURIComponent(`Portfolio Contact from ${v.name}`);
    const body = encodeURIComponent(
      `Name: ${v.name}\nEmail: ${v.email}\n\nMessage:\n${v.message}`
    );

    // Simulate sending delay (for UX)
    setTimeout(() => {
      window.location.href = `mailto:kumaraashishcr435@gmail.com?subject=${subject}&body=${body}`;

      this.sending.set(false);
      this.sent.set(true);
      this.form.reset();
    }, 600);
  }
}