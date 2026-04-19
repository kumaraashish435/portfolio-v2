import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ProjectDto {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

@Injectable({ providedIn: 'root' })
export class ProjectsApiService {
  private readonly http = inject(HttpClient);

  list(): Observable<ProjectDto[]> {
    const base = environment.apiBaseUrl.replace(/\/$/, '');
    return this.http.get<ProjectDto[]>(`${base}/api/projects`);
  }
}
