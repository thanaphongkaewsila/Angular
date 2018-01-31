import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsreComponent } from './components/usre/usre.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import {FormsModule} from '@angular/forms'
import {TodoService} from './service/todo.service';
import {HttpModule} from '@angular/http'
import {RouterModule , Routes} from '@angular/router' 

const appRoutes:Routes = [
  {path:"", component:UsreComponent},
  {path:"about", component:AboutusComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsreComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
