import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { servercomponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { AttributeComponent } from './attribute/attribute.component';
import { DemoComponent } from './demo/demo.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    AppComponent,
    servercomponent,
    ServersComponent,
    DemodirectivesComponent,
    AttributeComponent,
    DemoComponent,
    TableComponent,
   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
