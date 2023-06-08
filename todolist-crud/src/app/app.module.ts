import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { NgModule } from '@angular/core';
import { ListComponent } from './component/list/list.component';
import { EditComponent } from './component/edit/edit.component';
import { DetailsComponent } from './component/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './component/delete/delete.component';
//import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
     FooterComponent,
     ListComponent,
     EditComponent,
     DetailsComponent,
     DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    //CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
