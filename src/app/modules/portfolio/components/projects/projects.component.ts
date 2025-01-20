import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import {MatDialog , MatDialogModule} from '@angular/material/dialog';
import { EDialoglogPanel } from '../../enum/EDialoglogPanel';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
#dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
    src: 'assets/img/projects/temig.png',
    alt: "Projeto IA",
    title: "Sistema Especialista",
    width: '200px',
    height: '180px',
    description: '<p>Este projeto é um Sistema Especialista Inteligente (IA) desenvolvido com JavaScript puro, com armazenamento local utilizando localStorage. A aplicação permite a criação e execução de sistemas especialistas, utilizando regras, fatos e inferência para tomar decisões automáticas baseadas em dados fornecidos pelo usuário.</p>',
    links: [
      {
        name: 'Conheca o Site',
        href: 'https://cotemigtrabalhoia.netlify.app/'
      },
    ],
  },
]);

public opendialog(data: IProjects){
  this.#dialog.open(DialogProjectsComponent, {
    data,
    panelClass: EDialoglogPanel.PROJECTS,
  })
}
}
