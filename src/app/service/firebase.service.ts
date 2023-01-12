import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firaBasePost } from '../model/firebasePost';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // users(users: any) {
  //   throw new Error('Method not implemented.');
  // }
url = 'https://angular-crud-operation-8aff3-default-rtdb.firebaseio.com/';
  constructor(private _httpClient: HttpClient) { }

  users: any[] = [
    { id: '101', name: 'swapnil', gender: 'Male' },
    { id: '102', name: 'sumit', gender: 'Male' },
    { id:'103', name: 'Pooja', gender:'Female'}
  ];
  createPost(){ 
    let postData = {
title: 'this is angular 8 crud',
content: 'this is firabase crud and post'
    }
   return this._httpClient.post(this.url + 'posts.json', postData);
  }

  createPostDataReactiveForm(firebasepost: firaBasePost){
    return this._httpClient.post(this.url + 'posts.json', firebasepost);
  }

  getPostDataFirebase(){
    return this._httpClient.get(this.url+ 'posts.json')
  }
}
