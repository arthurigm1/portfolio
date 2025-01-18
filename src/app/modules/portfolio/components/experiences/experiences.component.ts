import { Component, signal } from '@angular/core';
import { IExpirence } from '../../interface/IExpirence.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayexperiences= signal<IExpirence[]>([
    { summary:{
      strong:"Faculdade Cotemig",
      p:"Sistemas de Informacoes",
    },
    text:" <p> FACULDADE BH!</p>"
  }
  ])
}
