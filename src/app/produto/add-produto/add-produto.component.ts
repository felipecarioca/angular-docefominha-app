import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.sass']
})
export class AddProdutoComponent implements OnInit {

  FormProduto : FormGroup;
  
  constructor(private produtoService : ProdutoService,
              private router: Router) { 
    this.FormProduto = new FormGroup({
      Nome: new FormControl('', Validators.minLength(2)),
      Preco: new FormControl('', Validators.min(1))
    });
  }

  ngOnInit(): void {
  }

  public criarProduto()  {
    if(this.FormProduto.invalid){
      alert('Preencha todo os campos');
      return false;
    }

    const produto = new Produto(this.FormProduto.get('Nome').value, 
                                this.FormProduto.get('Preco').value);

    this.produtoService.Add(produto);
    
    this.router.navigate(['/listar-produtos']);
  } 
}
