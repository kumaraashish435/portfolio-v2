import { Injectable } from '@angular/core';

export interface ProjectDto {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly projects: ProjectDto[] = [
    {
      id: '0',
      title: 'StickHero',
      description: 'C++ game automation with timing-aware control loops.',
      techStack: ['C++'],
      githubUrl: 'https://github.com/kumaraashish435/stickhero',
    },
    {
      id: '1',
      title: '3D ASCII Cube',
      description: 'Low-level 3D math rendered as ASCII in the terminal.',
      techStack: ['C++', 'OpenGL concepts'],
      githubUrl: 'https://github.com/kumaraashish435/3d-ASCIICube',
    },
    {
      id: '2',
      title: 'Reactivities',
      description: 'Clean architecture sample with C#, EF Core, and Angular.',
      techStack: ['C#', 'ASP.NET Core', 'Angular'],
      githubUrl: 'https://github.com/kumaraashish435/reactivities',
    },
    {
      id: '3',
      title: 'EcoCart',
      description: 'Business backend flows with REST and PostgreSQL.',
      techStack: ['C#', '.NET', 'PostgreSQL'],
      githubUrl: 'https://github.com/kumaraashish435/EcoCart',
    },
    {
      id: '4',
      title: 'Artone Clone',
      description: 'A clone of Artone website.',
      techStack: ['.NET 9', 'React', 'Vite.js'],
      githubUrl: 'https://github.com/kumaraashish435/artone',
    },
    {
      id: '5',
      title: 'Portfolio Website',
      description: 'Your portfolio project.',
      techStack: ['.NET 9', 'Angular', 'Docker'],
      githubUrl: 'https://github.com/kumaraashish435/portfolio',
    },
    {
      id: '6',
      title: 'Resume Analyzer',
      description: 'Application for analyzing resumes.',
      techStack: ['.NET 9', 'Angular'],
      githubUrl: 'https://github.com/kumaraashish435/ResumeAnalyzer',
    },
  ];

  list(): ProjectDto[] {
    return this.projects;
  }
}