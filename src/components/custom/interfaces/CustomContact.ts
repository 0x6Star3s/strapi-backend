// Interface automatically generated by schemas-to-ts

import { Image } from '../../elements/interfaces/Image';
import { Button } from '../../links/interfaces/Button';
import { Image_Plain } from '../../elements/interfaces/Image';
import { Button_Plain } from '../../links/interfaces/Button';
import { Image_NoRelations } from '../../elements/interfaces/Image';
import { Button_NoRelations } from '../../links/interfaces/Button';

export interface CustomContact {
  title?: string;
  span?: string;
  image?: Image;
  button?: Button;
  politics?: string;
  description?: string;
}
export interface CustomContact_Plain {
  title?: string;
  span?: string;
  image?: Image_Plain;
  button?: Button_Plain;
  politics?: string;
  description?: string;
}

export interface CustomContact_NoRelations {
  title?: string;
  span?: string;
  image?: Image_NoRelations;
  button?: Button_NoRelations;
  politics?: string;
  description?: string;
}

