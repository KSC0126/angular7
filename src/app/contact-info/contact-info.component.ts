import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
messageForm : FormGroup;
submitted: boolean= false;
success: boolean= false;

  constructor( private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['',Validators.required]
    })
   }
   onSubmit(){
     this.submitted =true;
      
     if(this.messageForm.invalid){
       return;
     }
     this.success =true;
   }

  ngOnInit() {
  }

}
