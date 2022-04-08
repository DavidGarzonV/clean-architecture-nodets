import { Op } from 'sequelize';
import { Offer } from '../../../domain/entities/offer.entity';
import { OfferRepository } from '../../../domain/repositories/offer.repository';
import OfferModel from '../../driven-adapters/sequelize/models/offer.model';

export class OfferRepositoryImpl implements OfferRepository {

	async getByName(name: string): Promise<Offer | undefined> {
		const offer = await OfferModel.findOne({
			where: {
				name: {
					[Op.like]: name,
				}
			},
		});

		if (offer) return offer.toJSON<Offer>();
	}

	async create(newOffer: Offer, transaction?: any): Promise<Offer> {
		const offerCreated = await OfferModel.create({ ...newOffer }, { transaction });
		return offerCreated?.get({ plain: true }) as Offer;
	}

	async get(transaction?: any): Promise<Offer[]> {
		const offersQuery = await OfferModel.findAll({ transaction });
		return offersQuery.map((item) => item.toJSON<Offer>());
	}
}