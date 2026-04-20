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
      medium: 'Acrylic on Paper'
    },
    {
      id: '2',
      title: 'Fragmented Reality',
      description: 'An abstract composition exploring human interaction with technology and fragmented digital environments.',
      imageUrl: `${BASE}abstract2.jpg`,
      year: '2024',
      medium: 'Acrylic on Paper'
    },
    {
      id: '3',
      title: "Unseen Emotions",
      description: 'A surreal expression of hidden identity and emotion through fluid forms and color bursts.',
      imageUrl: `${BASE}abstract3.jpg`,
      year: '2023',
      medium: 'Acrylic on Paper'
    },
    {
      id: '4',
      title: 'Vibrant Majesty',
      description: 'A bold depiction of a peacock symbolizing beauty, confidence, and natural elegance.',
      imageUrl: `${BASE}abstract4.jpeg`,
      year: '2023',
      medium: 'Acrylic, Mixed Media'
    },
    {
      id: '5',
      title: 'Chaos & Structure',
      description: 'A high-energy abstract piece balancing disorder and form through layered textures and strokes.',
      imageUrl: `${BASE}abstract5.jpeg`,
      year: '2024',
      medium: 'Acrylic on Paper'
    },
    {
      id: '6',
      title: 'Divine Rhythm',
      description: 'A stylized portrayal inspired by spiritual harmony, music, and inner peace.',
      imageUrl: `${BASE}abstract6.jpg`,
      year: '2023',
      medium: 'oil and Pastel'
    },
    {
      id: '7',
      title: 'Curious Soul',
      description: 'A playful and detailed sketch blending realism and imagination in a whimsical composition.',
      imageUrl: `${BASE}catsketch.jpg`,
      year: '2023',
      medium: 'pen and pencil'
    },
    {
      id: '8',
      title: 'Quiet Expression',
      description: 'A detailed pen sketch capturing subtle emotion and personality through fine line work.',
      imageUrl: `${BASE}porttraitsketch.webp`,
      year: '2023',
      medium: 'pen and pencil'
    }
  ];

  list(): PaintingDto[] {
    return this.paintings;
  }
}