import { Injectable, signal } from '@angular/core';

export interface PaintingDto {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  year?: string;
  medium?: string;
}

@Injectable({ providedIn: 'root' })
export class PaintingsApiService {
  private readonly paintings = signal<PaintingDto[]>([]);

  constructor() {
    this.loadPaintings();
  }

  private loadPaintings(): void {
    // In a real app, this would load from an API
    // For now, we'll use static data with images from assets
    this.paintings.set([
      {
        id: '1',
        title: 'Sunset Dreams',
        description: 'A vibrant exploration of warm colors capturing the essence of twilight',
        imageUrl: '/assets/paintings/sunset-dreams.jpg',
        year: '2024',
        medium: 'Oil on Canvas'
      },
      {
        id: '2',
        title: 'Urban Rhythm',
        description: 'Abstract interpretation of city life and movement',
        imageUrl: '/assets/paintings/urban-rhythm.jpg',
        year: '2024',
        medium: 'Acrylic on Canvas'
      },
      {
        id: '3',
        title: 'Nature\'s Whisper',
        description: 'Delicate brushwork celebrating the subtleties of natural forms',
        imageUrl: '/assets/paintings/natures-whisper.jpg',
        year: '2023',
        medium: 'Watercolor'
      },
      {
        id: '4',
        title: 'Geometric Harmony',
        description: 'Mathematical precision meets artistic expression',
        imageUrl: '/assets/paintings/geometric-harmony.jpg',
        year: '2023',
        medium: 'Mixed Media'
      },
      {
        id: '5',
        title: 'Emotional Landscape',
        description: 'An inner journey expressed through color and form',
        imageUrl: '/assets/paintings/emotional-landscape.jpg',
        year: '2024',
        medium: 'Oil on Canvas'
      },
      {
        id: '6',
        title: 'Silent Contemplation',
        description: 'Minimalist approach to profound themes',
        imageUrl: '/assets/paintings/silent-contemplation.jpg',
        year: '2023',
        medium: 'Charcoal and Pastel'
      }
    ]);
  }

  list() {
    return this.paintings;
  }
}
