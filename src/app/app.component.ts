import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  errorMessage = '';

  onError(message: string) {
    this.errorMessage = message;
  }
}
