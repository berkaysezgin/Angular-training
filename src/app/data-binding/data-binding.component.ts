import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  user= {
    name:"Berkay",
    surname:"Sezgin",
    isEditable:false,
  };
  type="text";
  constructor(){}
  
  ngOnInit(): void {
  
  }

  changeEditable(){
    if(this.user.isEditable==true){
    this.user.isEditable=false
    }
    else this.user.isEditable=true

    
    return this.user.isEditable
  }
  inputSubmit(value:any){
    alert(value.target.value +" geldi..")

  }
}
