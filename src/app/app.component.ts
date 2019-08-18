import { Component, ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild('form', {static:false}) myForm: NgForm

options = ['Basic', 'Advanced', 'Pro']
defaultOption = 'basic'



  onSubmit(){
    console.log(this.myForm.value)
    this.myForm.reset()
  }
}
