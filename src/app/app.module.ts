import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { MatFormFieldModule, 
          MatToolbarModule, 
          MatButtonModule, 
          MatSidenavModule, 
          MatIconModule, 
          MatListModule, 
          MatInputModule,
          MatGridListModule,
          MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HeaderComponent } from './header/header.component';
import{ ToolbarVisibilityDirective } from './toolbar/toolbar.directive';
import {DataService} from './data.service';
import { from } from 'rxjs';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoryComponent } from './category/category.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SearchComponent,
    ProductComponent,
    ToolbarComponent,
    HeaderComponent,
    ToolbarVisibilityDirective,
    FavouritesComponent,
    CartComponent,
    ProfileComponent,
    NotFoundComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatTreeModule,
    MatExpansionModule,
    RouterModule.forRoot([
      {
        path:'category',
        component:CategoryComponent
      },
      {
        path:'favourites',
        component:FavouritesComponent
      },
      {
        path:'cart',
        component:CartComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'search',
        component:SearchComponent
      },
      {
        path:'',
        component:ProductComponent
      },
      {
        path:'**',
        component:NotFoundComponent
      }
    ])  ,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
