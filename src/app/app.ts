import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router'; //Não vou usar routeroutlet agora!
//substitui "imports:" RouterOutlet por Produto
import { Produto } from './components/produto/produto';
import {ListaProdutos} from './components/lista-produtos/lista-produtos';
@Component({
  selector: 'app-root',
  imports: [ListaProdutos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
