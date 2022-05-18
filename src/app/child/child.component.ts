import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() message: string = '';
  @Output() messageToParen = new EventEmitter<string>();

  constructor( private dataService: ServiceService ) {
    dataService.childComponent = this
   }

  ngOnInit(): void {
  }

  launchMessage(){
    this.messageToParen.emit('child using output property');
  }

  childService(){
    this.dataService.parentComponent.messageFromChild = 'child using service!!'
  } 

  observableChild(){
    this.dataService.sendFromChild()
      .subscribe( messageChild => {
        this.messageToParen.emit(messageChild);
      })
  }

}
