import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { retrievedGallery } from '../store/gallery.actions';
import { uniqueAlbumIds } from '../store/gallery.selector';

import { GalleryModel } from './gallery.model';
import { GalleryService } from './gallery.service';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {

    albumIds$ = this.store.pipe(select(uniqueAlbumIds));

    constructor(
        private store: Store<{gallery: GalleryModel[]}>,
        private galleryService: GalleryService) { }

    ngOnInit() : void {
        this.galleryService.loadGallery()
        .subscribe((data) => {
            this.store.dispatch(retrievedGallery({allGallery: data as GalleryModel[]}));
        });

    }
}