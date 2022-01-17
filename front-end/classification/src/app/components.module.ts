import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'
import { TreeViewComponent} from './tree-view/tree-view.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree'; 
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        TreeViewComponent
    ],
    imports: [
        IonicStorageModule.forRoot(),
        MatSelectModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatRippleModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatTableModule,
        MatInputModule,
        FormsModule,
        MatSidenavModule,
        MatButtonModule,
        MatTreeModule,
        IonicModule,
        CommonModule,
        MatIconModule
    ],
    exports: [
        TreeViewComponent,
        MatSelectModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatRippleModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatTableModule,
        MatInputModule,
        FormsModule,
        MatSidenavModule,
        MatButtonModule,
        MatTreeModule,
        IonicModule,
        CommonModule,
        MatIconModule
    ]
})
export class ComponentsModule {
}