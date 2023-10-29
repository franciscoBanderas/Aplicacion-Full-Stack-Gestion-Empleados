import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

usuario:any = {};
loading:boolean= false;
constructor(){}
ngOnInit(): void{

}
crear(){}

regresar(){
  location.href="/";
}


}
