import { createAction, props } from '@ngrx/store';
import { GalleryModel } from '../gallery/gallery.model';

export const retrievedGallery = createAction(
    '[Gallery API] API Success',
    props<{allGallery:GalleryModel[]}> ()
);

// Props significa Propriedade (de um tipo de objeto) sendo passado na criação da Action na qual irá
// se referir ao galleryModel do nome dos elementos do Array de API JSON, criando action Api Success


export const invokeGalleryAPI = createAction(
    '[Gallery API] Invoke API'
);
