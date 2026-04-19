import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Paintings } from './pages/paintings/paintings';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'Aashish Kumar — Software Engineer | AI & Systems' },
  { path: 'about', component: About, title: 'About — Aashish Kumar' },
  { path: 'projects', component: Projects, title: 'Projects — Aashish Kumar' },
  { path: 'paintings', component: Paintings, title: 'Paintings — Aashish Kumar' },
  { path: 'contact', component: Contact, title: 'Contact — Aashish Kumar' },
  { path: '**', redirectTo: '' },
];
