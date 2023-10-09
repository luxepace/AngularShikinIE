import {
  Component,
  ComponentRef,
  TemplateRef,
  VERSION,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicComponentComponent } from './dynamicComponent/dynamicComponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  @ViewChild('dynamicComponent', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<DynamicComponentComponent>;
  
 

  addComponent() {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(DynamicComponentComponent);
  }
  deleteComponent() {
    this.viewRef.clear();
  }
}