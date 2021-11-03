import { Component } from '@angular/core';
import Swal from 'sweetalert2';
// import { Persona } from '../app/models/persona';
import {Employee} from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  employeeArray: Employee[] = [
    {id:1,name:"Paquita del barrio", country:"COL"},
    {id:2,name:"Armando casas", country:"ARG"},
    {id:3,name:"Alambre delgado", country:"MX"},
    {id:4,name:"Picapiedra", country:"USA"}
  ];

  selectedEmployee: Employee = new Employee();

  selectedBandera:boolean = false;

  addOrEdit(){
    if(this.selectedEmployee.id == null){
      this.selectedEmployee.id = this.employeeArray[this.employeeArray.length - 1].id + 1;
      this.employeeArray.push(this.selectedEmployee);
    }
    else{
      for(let i = 0; i < this.employeeArray.length; i++)
        if(this.employeeArray[i].id == this.selectedEmployee.id)this.employeeArray[i] = this.selectedEmployee;
    }
    this.selectedEmployee = new Employee();
  }

  openForEdit(employee: Employee){
    if(this.selectedBandera == false || this.selectedEmployee != employee){
      this.selectedEmployee = employee;
      this.selectedBandera = true;
    }
    else {
      this.selectedEmployee = new Employee();
      this.selectedBandera = false;
    }
  }

  deleteEmployee(){
    this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
    this.selectedEmployee = new Employee();
    Swal.fire({
      icon:'success',
      text:'Employee delete'
    });
  }

  searchEmployee(employeeInfo:string){
    this.employeeArray.forEach(employee => {
      if(employee.name.includes(employeeInfo))this.selectedEmployee = employee;
      else{
        Swal.fire({
          icon:'error',
          text:'Employee not found'
        })
      }
    });
  }

  // personasArray: Persona[] =[
  //   {id:1, name:"Julian",apellido:"Perez",edad:30},
  //   {id:2, name:"Paquita",apellido:"Barrio",edad:43},
  //   {id:3, name:"Armando",apellido:"Casas",edad:23},
  //   {id:4, name:"Jeffer",apellido:"FER",edad:30},
  // ]
  
  // flags =[
  //   false,
  //   false,
  //   false,
  //   false
  // ]

  // personaSelected: Persona = new Persona();
  
  // addPersona(){
  //   if(this.personaSelected.id == null){
  //     swal({
  //       text:"Seguro que quieres agregar el usuario ?",
  //       icon:"Danger"        
  //     });
  //     this.personasArray.push(this.personaSelected);
  //   }
  //   else this.personasArray[this.personasArray.indexOf(this.personaSelected)] = this.personaSelected;
  // }

  // rowSelected(persona:Persona){
  //   this.personaSelected = persona;
  // }

  // desplegarBarInput(indice: number){
  //   this.flags[indice] = !this.flags[indice];
  // }
}
