import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChildComponent } from '../child/child.component';
import { ParentComponent } from '../parent/parent.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  childComponent!: ChildComponent
  parentComponent!: ParentComponent

  messageServiceParent: string = 'parent using service';
  messageServiceChild: string = 'child using service';

  messageParentObservable: string = 'parent using observable';
  messageChildObservable: string = 'child using observable';

  private subjectParent: BehaviorSubject<string> = new BehaviorSubject<string>(this.messageParentObservable);
  private subjectChild: BehaviorSubject<string> = new BehaviorSubject<string>(this.messageChildObservable);

  constructor() { }


  sendToParent(){
    return this.messageServiceChild;
  }

  sendTochild(){
    return this.messageServiceParent;
  }

  sendFromParent(){
    return this.subjectParent.asObservable();
  }

  sendFromChild(){
    return this.subjectChild.asObservable();
  }
  
}
