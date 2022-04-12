import { GetOffersUseCase } from './getOffers.usecase';
import { mockOfferRepository } from '../../../../../test/mocks/offers/offerRepository.mock';
import { mockOffer, mockNewOffer } from '../../../../../test/mocks/offers/offer.mock';

describe('getOffers', () => {
	let getOffersUseCase: GetOffersUseCase;

	beforeEach(() => {
		getOffersUseCase = new GetOffersUseCase(
			mockOfferRepository,
		);
	})

	test('should return an array of offers', async () => {
		(mockOfferRepository.get as jest.Mock).mockReturnValue([mockNewOffer]);
		const offers = await getOffersUseCase.run(mockOffer)

		expect(offers).toHaveLength(1);
	});
});