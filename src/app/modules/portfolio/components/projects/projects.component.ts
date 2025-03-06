import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialoglogPanel } from '../../enum/EDialoglogPanel';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/temig.png',
      alt: 'Projeto IA',
      title: 'Sistema Especialista',
      width: '250px',
      height: '150px',
      description:
        '<p>Este projeto é um Sistema Especialista Inteligente (IA) desenvolvido com JavaScript puro, com armazenamento local utilizando localStorage. A aplicação permite a criação e execução de sistemas especialistas, utilizando regras, fatos e inferência para tomar decisões automáticas baseadas em dados fornecidos pelo usuário.</p>',
      links: [
        {
          name: 'Conheca o Site',
          href: 'https://cotemigtrabalhoia.netlify.app/',
        },
        {
          name: 'Repositório GitHub',
          href: 'https://github.com/arthurigm1/Trabalho-Sistemas-IA',
        },
      ],
    },
    {
      src: 'assets/img/projects/mainlogo.png',
      alt: 'Lista de Tarefas',
      title: 'Arthur TaskList',
      width: '250px',
      height: '150px',
      description: `
      <p>
        O <strong>Arthur TaskList</strong> é uma aplicação web desenvolvida para gerenciar tarefas de forma simples e eficiente, permitindo aos usuários adicionar tarefas, visualizar a lista de atividades pendentes e marcá-las como concluídas assim que finalizadas.
      </p>
      <p>
        <strong>Front-End:</strong> Desenvolvido com Angular, o front-end oferece uma interface interativa e amigável, permitindo que o usuário navegue e gerencie suas tarefas de maneira intuitiva.
      </p>
      <p>
        <strong>Back-End:</strong> Implementado em Java utilizando o framework Spring Boot, o back-end fornece uma API RESTful para manipulação de usuarios e senhas, garantindo escalabilidade e facilidade de manutenção.
      </p>
      <p>
        <strong>Banco de Dados:</strong> Utilizado PostgreSQL para armazenamento persistente de dados, garantindo segurança, integridade e alta performance no gerenciamento das informações.
      </p>`,
      links: [
        {
          name: 'Conheca o Site',
          href: 'https://listatarefasagm1.netlify.app/',
        },
        {
          name: 'Repositório GitHub',
          href: 'https://github.com/arthurigm1/ListaTarefas',
        },
      ],
    },
    {
      src: 'assets/img/projects/pagiinova.png',
      alt: 'PagiInova E-commerce',
      title: 'PagiInova',
      width: '250px',
      height: '150px',
      description: `
    <p>
      O <strong>PagiInova</strong> é um e-commerce desenvolvido com foco em inovação e eficiência digital, permitindo que os usuários explorem produtos, façam compras e realizem pagamentos de maneira rápida e segura.
    </p>
    <p>
      <strong>Front-End:</strong> Desenvolvido com Angular, o front-end oferece uma experiência de navegação interativa e responsiva, proporcionando uma interface intuitiva e fácil de usar.
    </p>
    <p>
      <strong>Back-End:</strong> Implementado em Java utilizando o framework Spring Boot, o back-end fornece uma API RESTful robusta para manipulação de usuários, produtos e pedidos, garantindo uma boa escalabilidade e facilidade de manutenção.
    </p>
    <p>
      <strong>Banco de Dados:</strong> Utilizado PostgreSQL para armazenamento seguro e eficiente dos dados dos usuários, produtos e transações, com alto desempenho e integridade dos dados.
    </p>`,
      links: [
        {
          name: 'Conheça o Site',
          href: 'https://pagiinova.netlify.app/',
        },
        {
          name: 'Repositório GitHub',
          href: 'https://github.com/arthurigm1/FullStackLivros',
        },
      ],
    },
  ]);

  public opendialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialoglogPanel.PROJECTS,
    });
  }
}
