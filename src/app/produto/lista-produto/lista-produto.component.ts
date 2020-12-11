import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.sass']
})
export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService : ProdutoService) { }
  ProductList : any = [];
  filtro : string = '';

  ngOnInit(): void {
    this.Listar();
  }

  public Listar() {
    this.ProductList = this.produtoService.List().subscribe( res => {
      this.ProductList = res;
      return res;
    }, (err) => {console.log(err)});
  }


  public Delete(id : string) {
    this.produtoService.Delete(id);
    this.Listar();
  }

  public AlterarFiltro(event) {
    this.filtro = event.value;
  }

  public FiltrarProdutos() {
    
    console.log(this.ProductList);
    
    if(this.filtro != '')
      return this.ProductList.filter(product => product['nome'].toLowerCase().includes(this.filtro.toLowerCase()));
    else
      return this.ProductList;

  }
}
