import { Component, signal } from '@angular/core';
//import { Produto } from './features/produtos/produto/produto';
//import {ListaProdutos} from './features/produtos/lista-produtos/lista-produtos';
import { RouterOutlet, RouterLink } from '@angular/router';
import { usuarioLogado, login, logout } from './core/auth';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  nomeLoja = 'Feira do Buritizal'; //nome do e-commerce
  usuarioLogado = usuarioLogado;
  login = login;
  logout = logout;
}