import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect  } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { GalleryService } from "./gallery.service";


@Injectable()
export class GalleryEffects {

    constructor(private  $actions: Actions,
        private galleryService: GalleryService) {};

    $loadGallery = createEffect(() =>
        this.$actions.pipe(
            ofType('[Gallery API] Invoke API'),
            mergeMap(() => 
                this.galleryService.loadGallery().pipe(
                    map((data) => ({type: '[Gallery API] API Success', allGallery: data}))
                )
            )
        )
    )
}