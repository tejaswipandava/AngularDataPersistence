import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WakeUp';
  constructor(private fb: FormBuilder) { }

  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any) {
    if (this.MessageForm.dirty) {
      //store data
      localStorage.setItem("teja", JSON.stringify(this.MessageForm.value));
      //show popup
      $event.returnValue = true;
    }
  }

  ngOnInit(): void {
    //retrieves data if exists.
    if (localStorage.getItem('teja')) {
      this.MessageForm.setValue(JSON.parse(localStorage.getItem('teja')));
    }
  }

  MessageForm = this.fb.group({
    Username: [''],
    Subject: [''],
    Body: ['']
  })

  onSave() {

    //removes the data with key as user
    localStorage.removeItem("teja");

    //adds new data with key as user
    localStorage.setItem("teja", JSON.stringify(this.MessageForm.value));

    //reset form once form is edited dirty flag is set 
    //so we need to reset form else on close we get 
    //notification saying form is dirty even when user clicked on save
    this.MessageForm.reset(JSON.parse(localStorage.getItem('teja')));
  }
}
