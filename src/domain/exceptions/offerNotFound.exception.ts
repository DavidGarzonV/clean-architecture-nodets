export default class OfferNotFoundException extends Error {
  constructor(message?: string) {
    super(message || 'Offer not found');
  }
}
