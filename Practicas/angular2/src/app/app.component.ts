import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from './modules/user';
import { CargarScriptsService } from './services/cargar-scripts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2';

  constructor(private _CargarScriptsService:CargarScriptsService){
    _CargarScriptsService.Carga(['app']);
  }

  arrayBarrasSpan =[false,false,false];
  arrayUsers : User[] = [
    {id:1,name:"pedro",lastName:"casas",age:32},
    {id:2,name:"juan",lastName:"beltran",age:32},
    {id:3,name:"ignacio",lastName:"garcia",age:32},
    {id:4,name:"simon",lastName:"rincon",age:32},
    {id:5,name:"alberto",lastName:"valbuena",age:32}
  ];

  userSelected: User = new User();

  banderaSelectUser: boolean = false;
  contenidoSelectUser: string ='';

  clear(text:string, bool:boolean){
    this.userSelected = new User();
        this.desplegarBarras(0,text,true);
        this.desplegarBarras(1,text,true);
        this.desplegarBarras(2,text,true);
  }
  
  addUser(){
    Swal.fire(
      {
        icon:"question",
        text:'Quieres agregar este usuario?',
        showDenyButton:true,
        confirmButtonText:"Guardar",
        confirmButtonColor:"#58D68D",
        denyButtonText:"Cancelar"
      }
    ).then((result)=>{
      if(result.isConfirmed){   
        if(this.arrayUsers.length == 0)this.userSelected.id = 1;
        else this.userSelected.id = this.arrayUsers[this.arrayUsers.length - 1].id + 1;
        this.arrayUsers.push(this.userSelected);
        Swal.fire({
          icon:"success",
          title:"Usuario agregado correctamente"
        });
        this.clear('',false);

      }
    })
  }

  deleteUser(){
    Swal.fire(
      {
        icon:"question",
        text:'Quieres eliminar este usuario?',
        showDenyButton:true,
        confirmButtonText:"Eliminar",
        confirmButtonColor:"#58D68D",
        denyButtonText:"Cancelar"
      }
    ).then((result) =>{
      if(result.isConfirmed){
        this.arrayUsers = this.arrayUsers.filter(x => x != this.userSelected);
        this.userSelected = new User();
        Swal.fire({
          icon:"success",
          title:"Usuario eliminado correctamente"
        });
        this.clear('',false);
      }
    })
  }

  selectDeselectUser(user:User){
    if(user == this.userSelected){
      this.clear('',true);
    }
    else{
      this.banderaSelectUser = true;
      this.userSelected = user;
      this.desplegarBarras(0,this.userSelected.name,true);
      this.desplegarBarras(1,this.userSelected.lastName,true);
      this.desplegarBarras(2,this.userSelected.age.toString(),true);
    }
  }

  desplegarBarras = (indiceSpan:number, contenidoInp:string, option:boolean) => {
    if(contenidoInp == '' && option == false)this.arrayBarrasSpan[indiceSpan] = !this.arrayBarrasSpan[indiceSpan];
    else if(option == true && contenidoInp != ''){
      this.arrayBarrasSpan[indiceSpan] = true;
    }
    else if(option == true && contenidoInp == ''){
      this.arrayBarrasSpan[indiceSpan] = false;
    }
  }  
}
