import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { servercomponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { AttributeComponent } from './attribute/attribute.component';
import { DemoComponent } from './demo/demo.component';
import { TableComponent } from './table/table.component';
import { HooksComponent } from './hooks/hooks.component';
import { DirassignComponent } from './dirassign/dirassign.component';
import { RemoveDataComponent } from './remove-data/remove-data.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Servicecomp1Component } from './servicecomp1/servicecomp1.component';
import { Servicecomp2Component } from './servicecomp2/servicecomp2.component';
import { HttpClientModule} from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';


@NgModule({
  declarations: [
    AppComponent,
    servercomponent,
    ServersComponent,
    DemodirectivesComponent,
    AttributeComponent,
    DemoComponent,
    TableComponent,
    HooksComponent,
    DirassignComponent,
    RemoveDataComponent,
    SimpleformComponent,
    StudentFormComponent,
    ReactiveformComponent,
    Servicecomp1Component,
    Servicecomp2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
