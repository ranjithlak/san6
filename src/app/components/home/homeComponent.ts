import { Component ,OnInit} from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdunitService } from 'src/app/adunit.service';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
  
})
export class HomeComponent  implements OnInit{

  angForm: FormGroup;
   
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});


   constructor(private adunitservice: AdunitService,private fb: FormBuilder) { 
    this.createForm();
    
   }
   createForm() {
    this.angForm = this.fb.group({
      fname: ['', Validators.required ],
      lname: ['', Validators.required ],
      email: ['', Validators.required ],
      subject: ['', Validators.required ],
      message: ['', Validators.required ]
     
   });
  }
   addAdUnit(fname: any,lname: any,email: any,subject: any,message: any) {
    this.adunitservice.addAdUnit(fname,lname,email,subject,message);
}


   ngOnInit(){this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
   this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        console.log('ImageUpload:uploaded:', item, status, response);
        alert('File uploaded successfully');
    };
}

   
   
   
}