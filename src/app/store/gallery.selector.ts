import { createSelector } from "@ngrx/store";
import { GalleryModel } from "../gallery/gallery.model";
import { AppState } from "./app.state";

export const galleryRootSelector = (state: AppState) => state.gallery;

export const uniqueAlbumIds = createSelector(
    galleryRootSelector, 
    (gallery: GalleryModel[]) => {
        return [... new Set(gallery.map(_ => _.albumId))];
    }
)


