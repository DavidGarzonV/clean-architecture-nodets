import { File } from './../../entities/file.entity';
import { OfferRepository } from '../../repositories/offer.repository';
import { Offer } from '../../entities/offer.entity';
import { ThereIsAlreadyAnOffer } from '../../exceptions';
import { FileUploader } from '../../utils/fileUploader';

export class CreateOfferUseCase {

	constructor(
		private offerRepository: OfferRepository,
		private fileUploader: FileUploader,
	) { }

	async run(offer: Offer, files: File[], transaction?: any): Promise<Offer> {
		const existentOffer = await this.offerRepository.getByName(offer.name);
		if (existentOffer) throw new ThereIsAlreadyAnOffer();

		const image = files.find( f => f.fieldname === 'image' );
		if (image) {
			const imagePath = await this.fileUploader.upload( image );
			offer.image = imagePath as string;
		}

		return this.offerRepository.create(offer, transaction);
	}
}