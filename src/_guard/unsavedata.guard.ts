import { AppComponent } from './../app/app.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UnsavedataGuard implements CanDeactivate<unknown> {

  canDeactivate(
    component: AppComponent): boolean {
    if (component.MessageForm.dirty) {
      localStorage.setItem("teja", JSON.stringify(component.MessageForm.value));
      return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
    }
    return true;
  }
}
