// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definição da interface para tipagem TypeScript
interface CardItem {
  id: number;
  title: string;
  description: string;
  tags: string[];        // 'backend', 'frontend' ou ambos
  icon: string;          // classe do Bootstrap Icons
  highlight?: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Dados do aluno (rodapé)
  studentName = 'Diogo Oliveira Santos';
  semester = '2026/1';
  course = 'Desenvolvimento Web e Mobile';
  email = 'diogogyn100@gmail.com';
  githubUrl = 'https://github.com/diogogyn';
  linkedinUrl = 'https://www.linkedin.com/in/diogo-oliveira-santos-02336411a/';

  // Cards contendo Funcionalidades, Tecnologias, Benefícios + extras para filtro
  allCards: CardItem[] = [
    {
      id: 1,
      title: 'Funcionalidades Principais',
      description: 'Migração de monolito para microsserviços, API Gateway, Service Discovery, CI/CD com GitHub Actions, pipeline de testes integrados e deploy contínuo.',
      tags: ['backend'],
      icon: 'bi-boxes'
    },
    {
      id: 2,
      title: 'Stack Tecnológica',
      description: 'Java 21, Spring Boot 3, Maven, Angular 20, PostgreSQL, Docker, GitHub Actions para CI/CD e SonarCloud para qualidade de código.',
      tags: ['backend', 'frontend'],
      icon: 'bi-stack'
    },
    {
      id: 3,
      title: 'Benefícios & Impactos',
      description: 'Escalabilidade independente por serviço, manutenibilidade simplificada, equipes paralelas, resiliência a falhas e deploy contínuo sem downtime.',
      tags: ['geral'],
      icon: 'bi-graph-up'
    },
    {
      id: 4,
      title: 'Frontend Moderno',
      description: 'SPA com Angular 20, componentes reutilizáveis, lazy loading, integração com APIs REST, responsividade e experiência de usuário fluida.',
      tags: ['frontend'],
      icon: 'bi-window'
    },
    {
      id: 5,
      title: 'Testes Automatizados',
      description: 'JUnit 5, Mockito, Testcontainers para integração, Cypress para E2E, garantindo cobertura >80% e qualidade contínua.',
      tags: ['backend'],
      icon: 'bi-check2-circle'
    }
  ];

  // Lista filtrada que será exibida no template
  filteredCards: CardItem[] = [...this.allCards];
  
  // Controle do filtro ativo (exibição visual)
  activeFilter: string = 'todos';

  /**
   * Função de filtro em TypeScript: exibe cards com base na tag
   * @param filter tipo de filtro: 'todos', 'backend', 'frontend'
   */
  filterCards(filter: string): void {
    this.activeFilter = filter;
    if (filter === 'todos') {
      this.filteredCards = [...this.allCards];
    } else {
      this.filteredCards = this.allCards.filter(card => 
        card.tags.includes(filter)
      );
    }
  }

  // Scroll suave para seções específicas (reforço de navegação)
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}