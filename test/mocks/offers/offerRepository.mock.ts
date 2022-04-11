import { OfferRepository } from '../../../src/domain/repositories/offer.repository';

export const getMethodMock = jest.fn();
export const getByNameMethodMock = jest.fn();
export const createMethodMock = jest.fn();

export const mockOfferRepository = {
  get: getMethodMock,
	getByName: getByNameMethodMock,
	create: createMethodMock,
} as OfferRepository;
