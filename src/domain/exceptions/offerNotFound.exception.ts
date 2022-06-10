import { Exception } from './exception';

export default class OfferNotFoundException extends Exception {
  constructor(message?: string) {
    super(message || 'Offer not found');
  }
}
