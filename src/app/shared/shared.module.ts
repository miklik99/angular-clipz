import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContComponent } from './tabs-cont/tabs-cont.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AlertComponent } from './alert/alert.component';
import { EventBlockerDirective } from './directives/event-blocker.directive';
// import { ModalService } from '../services/modal.service';


@NgModule({
  declarations: [
    ModalComponent,
    TabsContComponent,
    TabComponent,
    InputComponent,
    AlertComponent,
    EventBlockerDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    ModalComponent,
    TabsContComponent,
    TabComponent,
    InputComponent,
    AlertComponent,
    EventBlockerDirective
  ],
  // providers: [ModalService]
})
export class SharedModule { }
