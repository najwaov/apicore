import { Component } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-example',
  imports: [FormsModule,CommonModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
// num:number=100;
// Name:string="arun";
// check:boolean=true;
// display(){
//   return "welcome...."+this.Name;}
//  name="arun"
// dclass="danger"
// buttonstatus="button not clicked";
// display(){
//   this.buttonstatus="button clicked";
// }
// msg="";
// check:boolean=true;
// display(){ 
//   this.check=false;
// }
// stlist=[{id:1,name:'anu',mark:66},
// {id:2,name:'akash',mark:61},
// {id:3,name:'amal',mark:80},
// ]
today=new Date().getDay();
amount=123.45;
company='acme coperation';
purchasedOn='2024-07-08';


}
