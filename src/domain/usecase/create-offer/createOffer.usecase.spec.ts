import { CreateOfferUseCase } from './createOffer.usecase';
import ThereIsAlreadyAnOffer from '../../exceptions/thereIsAlreadyAnOffer.exception';
import { mockOfferRepository } from '../../../../test/mocks/offers/offerRepository.mock';
import { mockNewOffer, mockOffer } from '../../../../test/mocks/offers/offer.mock';
import { mockFileUploader, uploadMethodMock } from '../../../../test/mocks/helpers/fileUploader.mock';
import { mockFile } from '../../../../test/mocks/file.mock';
import { Offer } from '../../entities/offer.entity';

describe('createOffer', () => {
	let createOfferUseCase: CreateOfferUseCase;

	beforeEach(() => {
		createOfferUseCase = new CreateOfferUseCase(
			mockOfferRepository,
			mockFileUploader,
		);
		jest.clearAllMocks();
		jest.resetAllMocks();
		jest.restoreAllMocks();
	})

	test('should create and return new offer', async () => {
		(mockOfferRepository.create as jest.Mock).mockResolvedValue(mockNewOffer);
		const newOffer = await createOfferUseCase.run(mockOffer, [])

		expect(newOffer).toBe(mockNewOffer)
	});

	test('should create an offer with image', async () => {
		const files = [mockFile('image')];
		const imagePath = 'uploads/upload.png';
		(mockFileUploader.upload as jest.Mock).mockResolvedValue(imagePath);

		await createOfferUseCase.run(mockOffer, files);
		expect(uploadMethodMock).toHaveBeenCalled();
		expect(mockOfferRepository.create).toHaveBeenCalledWith({
			...mockOffer,
			image: imagePath,
		}, undefined)
	});

	test('should catch an exception when offer already exists', async () => {
		(mockOfferRepository.getByName as jest.Mock).mockResolvedValue(mockNewOffer);

		try {
			await createOfferUseCase.run(mockOffer, [])
		} catch (error) {
			expect(error).toBeInstanceOf(ThereIsAlreadyAnOffer)
		}
	});
});