import { Component, OnInit } from '@angular/core';
import { movie } from '../model/movie';

@Component({
  selector: 'app-demodirectives',
  templateUrl: './demodirectives.component.html',
  styleUrls: ['./demodirectives.component.css']
})
export class DemodirectivesComponent implements OnInit {
isShow : boolean = false;
title : string ='top 3 movies';
movie : movie[] = [
  {title :'3idiots' , director: 'rajkumar' , cast:'amir khan' , releaseDate: '2007'},
  {title :'aashique2' , director: 'rohit' , cast:'salman' , releaseDate: '2013'},
  {title :'KGF' , director: 'rocky' , cast:'yash' , releaseDate: '2019'}
]
  constructor() { }

  ngOnInit() {
  }

}
