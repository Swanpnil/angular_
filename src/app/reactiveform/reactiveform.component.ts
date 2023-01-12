import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  from, interval, Observable } from 'rxjs';
import { firaBasePost } from '../model/firebasePost';
import { FirebaseService } from '../service/firebase.service';
import { filter, map, take, takeLast, toArray } from 'rxjs/operators'
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  submitted: boolean = false;
  notAllowedNames = ['codemind' , 'technology']
  genders= [
    {
      id:"1",
      value:"Male",
    },
    {
      id:"2",
      value:"Female"
    }
  ]
  myReactiveForm: FormGroup;
  firebasePost: firaBasePost;
  constructor(private _fb: FormBuilder,private _firebaseService: FirebaseService) {
    this.createFor();
   }

  ngOnInit() {

    // const data = from(this._firebaseService.users);

    // data.pipe(
    //   map(x => x.name + 'data')
    // ).subscribe(res =>{
    //   console.log('res', res );
      
    // })

    // this._firebaseService.getPostDataFirebase().subscribe(res =>{
    //   console.log('getpostdata firebase', res);

      
    // })
    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
        
    //       'username': 'Swapnil',
    //       'email': 'test@gmail.com',
    //     'course': 'HTML',
    //     'gender': 'Male'
    //   })
    //  }, 3500);

    //  setTimeout(() => {
    //   this.myReactiveForm.patchValue({
    //     'userDetails' : {'username': 'Codemind1122','email': 'test@gmail.com'}
    //   }
    //   )}, 3500);
    
    //take operator
 
    const sourse = interval(1000);
    sourse.pipe(
      take(5)
      )
    .subscribe(res =>{
      console.log('interval time', res);
      
    })

    //take last

let randomnames = ['HTML', 'CSS', 'Javascript', 'Typescript', 'Angular', 'Ajile Jira'];
const source = from(randomnames);
source.pipe(
  takeLast(2)).subscribe(res => {
console.log('take last operator', res);

  })

  //filter

  const data = from(this._firebaseService.users);
  data.pipe(
    filter(u => u.gender =='Male'),
    toArray()
    ).subscribe(res => {
      console.log('filter operator', res);
      
    })

      }
  createFor(){
    // this.myReactiveForm = new FormGroup({
// 'userDetails': new FormGroup({
//   'username': new FormControl('', [Validators.required, this.NaNames.bind(this)]),
//   'email': new FormControl('', [Validators.required , Validators.email], this.NaEmails),
// }),
// 'username': new FormControl('', [Validators.required,  ]),//this.NaNames.bind(this)
// 'email': new FormControl('', [Validators.required , Validators.email], ),// this.NaEmails
// 'course': new FormControl('Angular'),
// 'gender': new FormControl('Male'),
// 'skills': new FormArray([
//   new FormControl(null, Validators.required)
// ])
//     })
  this.myReactiveForm = this._fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      course: ['Angular'],
      gender: ['Male'],
      skills: this._fb.array([])
    })
  }
  onSubmit(): void{
    this.submitted = true;
    // console.log(this.myReactiveForm);
    // console.log(this.myReactiveForm['controls'].username.value);
    
    this.firebasePost = new firaBasePost();
    this.firebasePost.username = this.myReactiveForm['controls'].username.value;
    this.firebasePost.email = this.myReactiveForm['controls'].email.value;
    this.firebasePost.gender = this.myReactiveForm['controls'].gender.value;
    this.firebasePost.skill = this.myReactiveForm['controls'].skills.value;
    console.log('firabase post class', this.firebasePost);
    this._firebaseService.createPostDataReactiveForm(this.firebasePost).subscribe(res =>{
      console.log('post from reactive form', res);
      
    })
    
  }

  onAddSkills(){
    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }
  // NaNames(control:FormControl)
  // {
  //   if(this.notAllowedNames.indexOf(control.value) !== -1){
  //     return{'namesNotAllowed': true}
  //   }
  //   return null;
  // }
  // NaEmails(control:FormControl): Promise<any> | Observable<any> {
  //   const myResponse = new Promise<any>((resolve, reject) => {
  //       setTimeout(() => {
  //       if(control.value === 'codemindtechnology@gmail.com'){
  //         resolve({'emailNotAllowed': true})
  //       }
  //        else {
  //         resolve(null)}
  //       }, 3000);})
  //        return myResponse;
  //       }


}

