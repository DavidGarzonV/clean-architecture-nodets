import { CreateOfferUseCase } from './createOffer.usecase';
import ThereIsAlreadyAnOffer from '../../exceptions/thereIsAlreadyAnOffer.exception';
import { mockOfferRepository } from '../../../../test/mocks/offers/offerRepository.mock';
import { mockNewOffer, mockOffer } from '../../../../test/mocks/offers/offer.mock';

describe('createOffer', () => {
	let createOfferUseCase: CreateOfferUseCase;

	beforeEach(() => {
		createOfferUseCase = new CreateOfferUseCase(
			mockOfferRepository,
		);
	})

	test('should create and return new offer', async () => {
		(mockOfferRepository.create as jest.Mock).mockReturnValue(mockNewOffer);
		const newOffer = await createOfferUseCase.run(mockOffer)

		expect(newOffer).toBe(mockNewOffer)
	});

	test('should catch an exception when offer already exists', async () => {
		(mockOfferRepository.getByName as jest.Mock).mockReturnValue(mockNewOffer);

		try {
			await createOfferUseCase.run(mockOffer)
		} catch (error) {
			expect(error).toBeInstanceOf(ThereIsAlreadyAnOffer)
		}
	});
});