import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'study';

  public printAll(arg=""){
    console.log(arg);
  }

  private print(arg=""){
    console.log(arg);
  }

  constructor() {
    var text : string = 'plain text';
    this.print(text);
    this.printAll(text);
  }
}
