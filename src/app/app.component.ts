import { ChangeDetectionStrategy  ,Component, OnInit } from '@angular/core';
import { Product } from './model/product';
import { DemoService } from './service/demo.service';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  constructor(private _demoservice: DemoService, private _postService: PostService){ }

  ngOnInit(){
    this._demoservice.getUsersData().subscribe(data=>{
      console.log('getting data from api', data);
      
    })

    this._demoservice.getDataPosts().subscribe(results =>{
      console.log('posts', results);
      
    })
  }
  data;
  remove;
  rname:string;
  rproduct:Product = new Product()
  name: string;
  price: number;
  product: Product = new Product();
  public uid: number;
  title= "Angular Developed by Swapnil";
  uname = " I am from app component";


  foods: string[] = [];
  employeeRecords: any =[
    {
      eName:'Swapnil', eCity:'pune', sallary:'20000'
    },
    {
      eName:'Dayanand', eCity:'Latur', sallary:'25000'
    }
  ]
  getDataFromChild(value){

  }
  handleData(value): void {
    this.data = value.target.value;
  }
  updateProduct() {
    //this.product = new Product();
    this.product.name = this.name;
    this.product.price = this.price;
  }
  removeData(value){
    this.rproduct.name = this.rname;
  
    // removeProduct(value){
  //   this.rproduct.rname = this.rname;
  // }
  }

  deleteItem(){
    this._postService.deletePostById(1).subscribe( res =>{
      console.log(res);
      
    })
  }
}
