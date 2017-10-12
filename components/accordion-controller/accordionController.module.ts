import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { AccordionController } from './accordionController';

@NgModule({
    declarations: [
        AccordionController,
    ],
    imports: [
        IonicPageModule.forChild(AccordionController),
    ],
    exports: [
        AccordionController
    ]
})
export class AccordionControllerModule {
}