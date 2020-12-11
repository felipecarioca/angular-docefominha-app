import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-edita-produto',
  templateUrl: './edita-produto.component.html',
  styleUrls: ['./edita-produto.component.sass']
})

export class EditaProdutoComponent implements OnInit {
  FormProduto : FormGroup;
  Id : string;
  Produto : any;

  constructor(private route: ActivatedRoute,
            private produtoService : ProdutoService,
            private router: Router) { 
    this.FormProduto = new FormGroup({
      Id : new FormControl(this.Id),
      Nome: new FormControl('', Validators.minLength(2)),
      Preco: new FormControl('', Validators.min(1))
    });

    this.getProduto();

    
    
  }

  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get("id");
    console.log(this.Id);
    this.getProduto();
  }

  public getProduto() {
    this.Produto = this.produtoService.Get(this.Id).subscribe( res => {
      this.FormProduto.patchValue({
        Id : res["_id"],
        Nome : res["nome"],
        Preco : res["preco"]
      });
      //this.FormProduto.controls['nome'].setValue(res['Nome']);
      //console.log(this.FormProduto);
    });
    console.log(this.Produto);
  }

  public editarProduto()  {
    if(this.FormProduto.invalid){
      alert('Preencha todo os campos');
      return false;
    }

    const produto = new Produto(this.FormProduto.get('Nome').value, 
                                this.FormProduto.get('Preco').value);

    produto._id = this.Id;

    this.produtoService.Update(produto);

    this.router.navigate(['/listar-produtos']);
  } 

}
