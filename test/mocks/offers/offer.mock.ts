import { Offer } from '../../../src/domain/entities/offer.entity';

export const mockOffer: Offer = {
	name: 'Offer test',
	description: 'Offer description test'
}

export const mockNewOffer: Offer = {
	id: '1e9c79d5-fb5b-4a32-8102-96d82717b191',
	...mockOffer,
}