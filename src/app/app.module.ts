import * as platformBrowser from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileSelectDirective } from 'ng2-file-upload';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/homeComponent";
import { serviceComponent } from './components/service/service.component';
import { HttpClientModule } from '@angular/common/http';
import { AdunitService } from './adunit.service';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { serviceprofileComponent} from './components/service-profile/service-profile.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    serviceComponent,
    FileSelectDirective,SidebarComponent,serviceprofileComponent
  ],
  imports: [
    platformBrowser.BrowserModule,
    AppRoutingModule,HttpClientModule,
    ReactiveFormsModule,CommonModule,BrowserModule, SlimLoadingBarModule,FormsModule
  ],
  
  
  providers: [AdunitService,FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
