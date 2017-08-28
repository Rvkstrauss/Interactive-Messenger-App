import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interactive Messages';


getBackground() {
    return {
      'background': 'url(\'../assets/img/transparent-mist.png\')',
      'background-repeat': 'no-repeat',
      'background-size': '100% 100%',
    };
  }
}
