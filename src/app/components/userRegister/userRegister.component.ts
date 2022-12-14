import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/Custom Validator/NameValidator';
import { passwordMatchValidator } from 'src/app/Custom Validator/PasswordMatch';

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
         // name: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/(admin)|(user)/)]],
         name: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator]],
         email: ['', [Validators.email, Validators.required]],
         mobile: FB.array([
            FB.control('')
         ]),
         address: FB.group({
            street: [''],
            postalCode: [''],
         }),
         password: [''],
         confirmPassword: [''],
         reachedBy: [''],
         reachedByOther: [''],
      }, { validators: passwordMatchValidator });

   }

   ngOnInit() {
      /*
      check URL Params
      If Find user Id bring user data 
      else show empty Form to register
      */

      // this.UserRegisterFormGroup.setValue({ // Must Set values For all properties
      //    "name": "sabergomaa",
      //    "email": "sabergomaa261@gmail.com",
      //    "mobile": "01145595276",
      //    "address": {
      //       "street": "EGYPT",
      //       "postalCode": "1151"
      //    },
      //    "password": "",
      //    "confirmPassword": "",
      //    "reachedBy": "FB", 
      //    "reachedByOther": "NaN"
      // });


      // this.UserRegisterFormGroup.patchValue({ // can take some properties value
      //    "name": "sabergomaa",
      //    "email": "sabergomaa261@gmail.com",
      //    "mobile": ['010955484'],
      //    "address": {
      //       "street": "EGYPT",
      //       "postalCode": "11548451"
      //    },
      //    "reachedBy": "FB",
      //    "reachedByOther": ""
      // });


   }


   get name() {
      return this.UserRegisterFormGroup.controls['name'];
   }
   get reachedBy() {
      return this.UserRegisterFormGroup.controls['reachedBy'];
   }

   get password() {
      return this.UserRegisterFormGroup.controls['password'];
   }

   get confirmPassword() {
      return this.UserRegisterFormGroup.controls['confirmPassword'];
   }

   get email() {
      return this.UserRegisterFormGroup.controls['email'];

   }

   get moblie() {
      return this.UserRegisterFormGroup.controls['mobile'] as FormArray;
   }
   register() {
      // call API send {UserRegisterFormGroup.value};
   }

   resetValues() {
      this.UserRegisterFormGroup.controls['name'].reset();
   }

   addMobile() {
      this.moblie.push(this.FB.control(''))
   }
   popMobile() {
      this.moblie.removeAt(1);
   }

   addValidators() {
      if (this.reachedBy.value == 'other') {
         this.UserRegisterFormGroup.controls['reachedByOther'].setValidators([Validators.required]);
      }
      else {
         this.UserRegisterFormGroup.controls['reachedByOther'].clearValidators();
      }
      this.UserRegisterFormGroup.controls['reachedByOther'].updateValueAndValidity();
   }


}
