import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactApiService {
  private readonly http = inject(HttpClient);

  send(body: ContactPayload): Observable<void> {
    const base = environment.apiBaseUrl.replace(/\/$/, '');
    return this.http.post<void>(`${base}/api/contact`, body);
  }
}
