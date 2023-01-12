import { Component, OnInit } from '@angular/core';
import { rapid } from '../model/rapid';
import { RapidapiService } from '../rapidapi.service';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {
  arrrapid: rapid[] = [];
  constructor(private _rapidAPIService: RapidapiService, private _firabaseService: FirebaseService) { }

  ngOnInit() {
    this._rapidAPIService.getDataFinance().subscribe( res =>{
      console.log('rapid finance data', res);
    })
  }
createPost(){
  this._firabaseService.createPost().subscribe( res =>{
    console.log('firebase post', res);
    
  })
}
}
