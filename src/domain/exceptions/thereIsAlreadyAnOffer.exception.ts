export default class ThereIsAlreadyAnOffer extends Error {
  constructor(message?: string) {
    super(message || 'There is already an offer');
  }
}
