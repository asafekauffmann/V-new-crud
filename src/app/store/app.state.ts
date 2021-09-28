import { GalleryModel } from '../gallery/gallery.model';

export interface AppState {
    gallery: GalleryModel[];
}

// Cria galeria ? e ja a remete ao array de gallerymodel (Possuindo Nome dos indicadores da API JSON)