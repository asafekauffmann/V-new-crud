import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { invokeGalleryAPI } from '../store/gallery.actions';
import { galleryByAlbumId, uniqueAlbumIds } from '../store/gallery.selector';

import { GalleryModel } from './gallery.model';
import { GalleryService } from './gallery.service';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
    albumSelecedId = -1;
    albumIds$ = this.store.pipe(select(uniqueAlbumIds));
    allAlbums$ = this.store.pipe(select(galleryByAlbumId(this.albumSelecedId)));

    constructor(
        private store: Store<{gallery: GalleryModel[]}>,
        private galleryService: GalleryService) { }

    ngOnInit() : void {
        //this.galleryService.loadGallery()
        //.subscribe((data) => {
        //    this.store.dispatch(retrievedGallery({allGallery: data as GalleryModel[]}));
        //});
        this.store.dispatch(invokeGalleryAPI());
    }


    onAlbumChange(value: number) {
        this.allAlbums$ = this.store.pipe(select(galleryByAlbumId(value)));
    }


}