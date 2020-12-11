import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Produto } from '../model/produto';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  api_url : string = environment.api_url;

  constructor(private http: HttpClient) { }

  public Add(produto : Produto)  {
    this.http.post(`${this.api_url}/produtos`, produto).subscribe( res => {
      return res;
    });
  }

  public Delete(id : string)  {
    this.http.delete(`${this.api_url}/produtos/${id}`, { }).subscribe( res => {
      return res;
    });
  }

  public Update(produto : Produto)  {
    this.http.put(`${this.api_url}/produtos/${produto._id}`, produto).subscribe( res => {
      return res;
    });
  }

  public Get(id : string) {
    return this.http.get(`${this.api_url}/produtos/${id}`);
  }
  
  public List() {
    return this.http.get(`${this.api_url}/produtos`);
  }
}
