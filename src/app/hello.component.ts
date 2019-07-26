import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1 (click)="sendMessageToParent()" >Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Output() sendMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() name: string;


sendMessageToParent(){
  this.sendMessage.emit("this is msg from child");
}
}