import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  formData: any = {};

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted:', this.formData);
    // You can add HTTP request or other logic to send the form data to the server
  }
}
