import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Canal } from '../model/canal';

@Injectable({
  providedIn: 'root'
})
export class CanalService {

  api_url : string = environment.api_url;

  constructor(private http: HttpClient) { }

  public Add(canal : Canal)  {
    this.http.post(`${this.api_url}`, { canal }).subscribe( res => {
      return res;
    });
  }

  public Delete(canal : Canal)  {
    const params = new HttpParams().set('id', canal._id);
    this.http.delete(`${this.api_url}/${canal._id}`, { params }).subscribe( res => {
      return res;
    });
  }

  public Update(canal : Canal)  {
    this.http.put(`${this.api_url}/${canal._id}`, { canal }).subscribe( res => {
      return res;
    });
  }

  public Get(id : string) {
    this.http.get(`${this.api_url}/${id}`).subscribe( res => {
      return res;
    });
  }
  
  public List() {
    this.http.get(`${this.api_url}`).subscribe( res => {
      return res;
    });
  }
}
