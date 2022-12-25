import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  apiURL = 'https://jsonplaceholder.typicode.com/';
  
  products = [
    {name: 'laptop' , id:'101'},
    {name: 'Mobile' , id:'102'},
    {name: 'TV' , id:'103'},
  ]
  constructor(private http: HttpClient) { }

  display()
  {
    alert('subscribe successful');
  }
  getUsersData()
  {
    let users = 'users';
    return this.http.get(this.apiURL+ users);
  }
  getDataPosts (){
    let posts = 'posts';
    return this.http.get(this.apiURL+ posts);
  }

}
