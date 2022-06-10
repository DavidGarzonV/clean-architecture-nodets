import { File } from '../../../entities/file.entity';
import { OfferRepository } from '../../../repositories/offer.repository';
import { Offer } from '../../../entities/offer.entity';
import { ThereIsAlreadyAnOffer } from '../../../exceptions';
import { FileUploader } from '../../../utils/fileUploader';
import { ExistsOfferByUserName } from '../../../services/exists-offer-by-name/index';

type Params = {
	offer: Offer,
	files: File[],
	transaction?: any
}

export class CreateOfferUseCase {
	private _existsOfferByUserName: ExistsOfferByUserName;

	constructor(
		private offerRepository: OfferRepository,
		private fileUploader: FileUploader,
	) {
		this._existsOfferByUserName = new ExistsOfferByUserName(offerRepository);
	}

	async run(data: Params): Promise<Offer> {
		const { offer, files, transaction } = data;
		const existentOffer = await this._existsOfferByUserName.run(offer.name);
		if (existentOffer) throw new ThereIsAlreadyAnOffer();

		const image = files.find( f => f.fieldname === 'image' );
		if (image) {
			const imagePath = await this.fileUploader.upload( image );
			offer.image = imagePath as string;
		}

		return this.offerRepository.create(offer, transaction);
	}
}