import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devUPIUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private HttpClient: HttpClient) { }

  getPosts(): Observable<any>{
    return this.HttpClient.get(`${devUPIUrl}posts`);
  }
  
  getPostById(id){
    return this.HttpClient.get(`${devUPIUrl}posts/` +  id);
  }
  deletePostById(id){
return this.HttpClient.delete('${devUPIUrl}posts/' + id)
  }
}
