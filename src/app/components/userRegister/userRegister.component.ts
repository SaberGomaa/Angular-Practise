import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
   selector: 'app-userRegister',
   templateUrl: './userRegister.component.html',
   styleUrls: ['./userRegister.component.css']
})
export class UserRegisterComponent implements OnInit {

   UserRegisterFormGroup: FormGroup;


   constructor(private FB: FormBuilder) {
      // this.UserRegisterFormGroup = new FormGroup({
      //    name: new FormControl('', [Validators.required, Validators.minLength(10)]),
      //    email: new FormControl('', [Validators.email, Validators.required]),
      //    mobile: new FormControl(''),
      //    address: new FormGroup({
      //       street: new FormControl(''),
      //       postalCode: new FormControl('')
      //    }),
      //    password: new FormControl(''),
      //    confirmPassword: new FormControl(''),
      //    reachedBy: new FormControl(''),
      //    reachedByOther: new FormControl('')
      // });

      this.UserRegisterFormGroup = FB.group({
         name: ['', [Validators.required, Validators.minLength(10)]],
         email: ['', [Validators.email, Validators.required]],
         mobile: [''],
         address: FB.group({
            street: [''],
            postalCode: [''],
         }),
         password: [''],
         confirmPassword: [''],
         reachedBy: [''],
         reachedByOther: [''],
      });

   }

   ngOnInit() {
      /*
      check URL Params
      If Find user Id bring user data 
      else show empty Form to register
      */

      this.UserRegisterFormGroup.setValue({
         "name": "sabergomaa",
         "email": "sabergomaa261@gmail.com",
         "mobile": "01145595276",
         "address": {
            "street": "EGYPT",
            "postalCode": "1151"
         },
         "password": "",
         "confirmPassword": "",
         "reachedBy": "FB", 
         "reachedByOther": "NaN"
      });

   }


   get name() {
      return this.UserRegisterFormGroup.controls['name'];
   }

   get email() {
      return this.UserRegisterFormGroup.controls['email'];
   }
   register() {
      // call API send {UserRegisterFormGroup.value};
   }

}
