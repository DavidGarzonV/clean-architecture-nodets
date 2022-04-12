import { UpdateOfferUseCase } from './updateOffer.usecase';
import { mockNewOffer, mockOffer } from '../../../../../test/mocks/offers/offer.mock';
import { getByIdMethodMock, mockOfferRepository } from '../../../../../test/mocks/offers/offerRepository.mock';
import OfferNotFoundException from '../../../exceptions/offerNotFound.exception';

const offer = {
  offerId: mockNewOffer.id!,
  ...mockOffer
};

describe('UpdateOfferUseCase', () => {
  it('should update and return offer', async () => {
    (getByIdMethodMock as jest.Mock).mockReturnValue(mockOffer);
    const updateOfferUseCase = new UpdateOfferUseCase(mockOfferRepository);
    const updatedOffer = await updateOfferUseCase.run(offer);

    expect(getByIdMethodMock).toHaveBeenCalledWith(mockNewOffer.id);
    expect(updatedOffer).toEqual(offer);
  });

  it('should catch the error when trying to update a non-existing price', async () => {
    (getByIdMethodMock as jest.Mock).mockReturnValue([]);
    try {
      const updateOfferUseCase = new UpdateOfferUseCase(mockOfferRepository);
      await updateOfferUseCase.run(offer);
    } catch (error) {
      expect(error).toBeInstanceOf(OfferNotFoundException);
    }
  });
});
