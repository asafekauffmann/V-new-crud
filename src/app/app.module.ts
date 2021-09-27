import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryService } from './gallery/gallery.service';
import { galleryReducer } from './store/gallery.recuder';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ gallery: galleryReducer })
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
