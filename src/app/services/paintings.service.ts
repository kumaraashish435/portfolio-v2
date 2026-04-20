import { Injectable } from '@angular/core';

export interface PaintingDto {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  year?: string;
  medium?: string;
}

const BASE = 'assets/paintings/';

@Injectable({ providedIn: 'root' })
export class PaintingsService {
  
  private readonly paintings: PaintingDto[] = [
    {
      id: '1',
      title: 'Sunset Dreams',
      description: 'A vibrant exploration of warm colors capturing the essence of twilight',
      imageUrl: `${BASE}abstract1.jpg`,
      year: '2024',
      medium: 'Oil on Canvas'
    },
    {
      id: '2',
      title: 'Urban Rhythm',
      description: 'Abstract interpretation of city life and movement',
      imageUrl: `${BASE}abstract2.jpg`,
      year: '2024',
      medium: 'Acrylic on Canvas'
    },
    {
      id: '3',
      title: "Nature's Whisper",
      description: 'Delicate brushwork celebrating the subtleties of natural forms',
      imageUrl: `${BASE}abstract3.jpg`,
      year: '2023',
      medium: 'Watercolor'
    },
    {
      id: '4',
      title: 'Geometric Harmony',
      description: 'Mathematical precision meets artistic expression',
      imageUrl: `${BASE}abstract4.jpeg`,
      year: '2023',
      medium: 'Mixed Media'
    },
    {
      id: '5',
      title: 'Emotional Landscape',
      description: 'An inner journey expressed through color and form',
      imageUrl: `${BASE}abstract5.jpeg`,
      year: '2024',
      medium: 'Oil on Canvas'
    },
    {
      id: '6',
      title: 'Silent Contemplation',
      description: 'Minimalist approach to profound themes',
      imageUrl: `${BASE}abstract6.jpg`,
      year: '2023',
      medium: 'Charcoal and Pastel'
    }
  ];

  list(): PaintingDto[] {
    return this.paintings;
  }
}