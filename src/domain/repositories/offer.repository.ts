import { Offer } from '../entities/offer.entity';

export interface OfferRepository {
	getByName(name: string): Promise<Offer | undefined>;
	getById(id: string): Promise<Offer | undefined>;
	create(newOffer: Offer, transaction?: any): Promise<Offer>;
	get(transaction?: any): Promise<Offer[]>;
	update(id: string, offer: object): Promise<{ affectedCount: number }>;
}
