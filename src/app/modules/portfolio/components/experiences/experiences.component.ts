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
      p:"Sistemas de Informações | 2021 - 2026",
    },
      "text": "<p>Durante o curso de Sistemas de Informação na Faculdade Cotemig, adquiri uma sólida base em tecnologia da informação, desenvolvimento de software e gestão de sistemas. Aprendi a trabalhar com linguagens como Java, Java Back-End(Spring Boot), Kotlin, Javascript e SQL, além de metodologias ágeis, como Scrum. O programa também enfatizou práticas de engenharia de software, computação em nuvem, e projetos acadêmicos que simularam desafios reais do mercado. Esse período tem sido crucial para meu desenvolvimento técnico e profissional.</p>"

  },
  { summary:{
      strong:"Java COMPLETO Programação Orientada a Objetos + Projetos",
      p:"Curso Java Udemy - 19/11/2024",
    },
       "text": "<p>Este curso aprofundou meus conhecimentos em Java, abordando os fundamentos da linguagem e conceitos avançados de Programação Orientada a Objetos (POO). Trabalhei com práticas como encapsulamento, herança e polimorfismo, além de desenvolver projetos práticos para consolidar o aprendizado. O conteúdo incluiu também tópicos como tratamento de exceções, coleções e boas práticas de codificação, preparando-me para criar soluções robustas e escaláveis em Java.</p>"
  }
  ,
  { summary:{
      strong:"Microsserviços na prática: implementando com Java e Spring",
      p:"Curso Java Alura - 15/01/2025",
    },
       "text": "<p>Este curso proporcionou uma experiência prática no desenvolvimento de microsserviços utilizando Java e o framework Spring. Os principais tópicos abordados incluíram considerações iniciais sobre arquitetura de microsserviços, implementação prática de serviços independentes e escaláveis, e finalização de uma aplicação funcional. Além disso, foram explorados conceitos de serviço de descoberta, gateways, balanceamento de carga e a integração eficiente entre microsserviços, destacando as melhores práticas para criar sistemas distribuídos e resilientes.</p>"
  }
  ,
  { summary:{
      strong:"Minicurso de Java",
      p:"Curso Java RocketSeat - 23/05/2024",
    },
       "text": "<p>desenvolvimento de uma aplicação back-end em Java, Maven, Spring Boot, API Rest, Lombok, Integração com H2 Database Engine, Implementando segurança nos dados do usuário, Tratamento de Exceções e Deploy do back-end.</p>"
  }
  ,
  { summary:{
      strong:"Java e refatoração: melhorando códigos com boas práticas",
      p:"Curso Java Alura - 07/01/25",
    },
        "text": "<p>Este curso abordou técnicas de refatoração em Java com foco em melhorar a legibilidade, manutenção e eficiência do código. Foram exploradas boas práticas de programação, incluindo princípios de design limpo, eliminação de duplicidades, simplificação de lógica e uso adequado de padrões de projeto. Além disso, o curso destacou a importância do padrão MVC (Model-View-Controller) na organização de aplicações, bem como o uso de DTOs (Data Transfer Objects) para simplificar a troca de dados entre camadas, reduzindo o acoplamento e melhorando a escalabilidade dos sistemas.</p>"
  }
  ])
}
