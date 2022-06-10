import { Exception } from './exception';

export default class ThereIsAlreadyAnOffer extends Exception {
  spanishMessage = 'Ya existe una oferta con el nombre indicado';

  constructor(message?: string) {
    super(message || 'There is already an offer');
  }
}
