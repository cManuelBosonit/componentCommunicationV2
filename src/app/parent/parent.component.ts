import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  messageToChild: string = '';
  messageFromChild: string = '';

  constructor( private dataService: ServiceService ) { }

  ngOnInit(): void {
  }

  changeMessage(){
    this.messageToChild = 'parent using input property';
  }

  parentService(){
    this.messageToChild = this.dataService.sendTochild();
  }

  onReciveMessage(message: string){
    this.messageFromChild = message;
  }

  observableParent(){
    this.dataService.sendFromParent()
      .subscribe( messageParent => {
        this.messageToChild = messageParent;
      })
      
  }

}
