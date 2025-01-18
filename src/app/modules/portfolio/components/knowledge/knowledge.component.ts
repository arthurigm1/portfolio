import { Component, signal } from '@angular/core';
import { IKnowLedge } from '../../interface/IKnowLedge.interface'; //interface

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
public arrayKnowledge = signal<IKnowLedge[]>([
  {
    src: `assets/icons/knowledge/html5.svg`,
    alt: 'Icone de conhecimento de html5',
  },
    {
    src: `assets/icons/knowledge/css3.svg`,
    alt: 'Icone de conhecimento de html5',
  },
    {
    src: `assets/icons/knowledge/javascript.svg`,
    alt: 'Icone de conhecimento de html5',
  },
    {
    src: `assets/icons/knowledge/java.svg`,
    alt: 'Icone de conhecimento de Java',
  },
    {
    src: `assets/icons/knowledge/angular.svg`,
    alt: 'Icone de conhecimento de html5',
  },
])
}
