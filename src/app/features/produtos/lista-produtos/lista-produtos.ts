import { Component, inject } from '@angular/core';
import { signal } from '@angular/core';
import{ Produto } from '../../../features/produtos/produto/produto';
import { computed } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { effect } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { produtoService } from '../produtos.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, UpperCasePipe, PrecoFormatadoPipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  //! remover a lista de produto, dados serão carregados via API FakestoreAPI
  produtos = signal <
  { nome: string; preco: number }[]
                    > ([]);

    //? criar estado de carregamento, true: requisição em andamento, exibir dados no template
    //** true: requisição em andamento, exibir dados no template
    //! false: esconder indicador e exibir a lista de produtos

    carregando = signal (true);

//! cria o método para a requisição dos produtos

carregarProdutos (){
  this.carregando.set(true);

  this.produtoService.buscarProdutos().subscribe({
    next: (dados) => {
      const produtos = this.produtoService.transformarProdutos(dados);
      this.produtos.set(produtos);
      this.carregando.set(false);
    },
    error: (erro) => {
      console.error('Erro ao carregar os Produtos:,', erro);
      this.carregando.set(false);
    },
  });
}

 //? Métodos existentes não alterar!
  exibirProduto (nome: string){
    console.log ('Produto Selecionado: ', nome);
    this.produtoSelecionado.set(nome);
  }
adicionarProduto(){
  this.produtos.update(listaAtual => [
    ...listaAtual, {nome:'Processador Intel Core i5 14550FS', preco: 2500}
  ]);
}
totalProdutos = computed(() => this.produtos().length);

valorTotal = computed(() => {return this.produtos().reduce((total, item)=> total + item.preco, 0)});
substituirProdutos (){
  this.produtos.set([
    {nome: 'Teclado', preco: 40},
    {nome: 'Mouse', preco: 10},
    {nome: 'Monitor', preco: 100},
    {nome: 'Desktop', preco: 500},
    {nome: 'Headset', preco: 25},
  ]);
}

//! injetar httpClient dentro de constructor, restruturar constructor!!!

constructor(){


  this.carregarProdutos();

  effect(() =>{
    console.log('Lista de Produtos Alterados: ', this.produtos());
  });
  effect(() => {
    console.log('Valor Total Atualizado: ', this.valorTotal());
  });
  effect(()=> {
    if (typeof document!== 'undefined'){
      document.title = `(${this.totalProdutos()}) Minha Loja`;
    }
  });
}
produtoSelecionado = signal <string | null> (null);
carrinho = signal<{ nome : string; preco: number}[]>([]);
adicionarAoCarrinho(produto: {nome: string; preco: number}){

  this.carrinho.update(listaAtual =>[
    ...listaAtual,produto
  ]);}

private produtoService = inject(produtoService);
quantidadeCarrinho = computed(() => this.carrinho().length);

totalCarrinho = computed(()=> {
  return this.carrinho().reduce((total, item) => total + item.preco,0);
});
}