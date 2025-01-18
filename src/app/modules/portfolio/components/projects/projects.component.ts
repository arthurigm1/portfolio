import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public arrayProjects = signal<IProjects[]>([
    {
    src: 'assets/img/projects/vfull.png',
    alt: "Projeto",
    title: "Titulo projeto",
    width: '100px',
    height: '51px',
    description: '<p> DESCRICAO DO PROJETO ACRESCENTAR!</p>',
    links: [
      {
        name: 'Conheca o Site',
        href: 'https://vidafullstack.com.br'
      },
    ],
  },
]);
}
