import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
   selector: 'app-userRegister',
   templateUrl: './userRegister.component.html',
   styleUrls: ['./userRegister.component.css']
})
export class UserRegisterComponent implements OnInit {

   UserRegisterFormGroup: FormGroup;


   constructor() {
      this.UserRegisterFormGroup = new FormGroup({
         name: new FormControl('', [Validators.required, Validators.minLength(10)]),
         email: new FormControl(''),
         mobile: new FormControl(''),
         address: new FormGroup({
            street: new FormControl(''),
            postalCode: new FormControl('')
         }),
         password: new FormControl(''),
         confirmPassword: new FormControl(''),
         reachedBy: new FormControl(''),
         reachedByOther: new FormControl('')
      });

   }

   ngOnInit() {
   }

   get name(){
      return this.UserRegisterFormGroup.controls['name'];
   }

   register() {

   }

}
