import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title : string = 'study';
  public num : number = 10;
  public all : any = new Array();

  public printAll(arg=""){
    console.log(arg);
  }

  private print(arg=""){
    console.log(arg);
  }

  public ifIwereGoToServer() : void {  //요 메소드이다.
    //어떤 특정 데이터를 주는 서버에 갔다왔다고 
    //예를들어 ajax를 실행하고 나서 result값이 아래와 같은 배열이 나왔다고 가정하자.
    this.all.push('Result');
    this.all.push(12345);
    this.all.push(23456);
    this.all.push(78923);
  }

  constructor() {
    var text : string = 'plain text';
    this.print(text);  //규칙! this가 붙어야 한다!
    this.printAll(text);

    console.log(this.title, this.num, this.all);  //멤버들도 this를 써 주어야 한다.
  }

}
