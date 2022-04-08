import inquirer from 'inquirer';
import answers from '../answers/index';
import { Offer } from '../../../../../../../domain/entities/offer.entity';

export const createOfferMenu = async (): Promise<Offer> => {
	return inquirer.prompt(answers);
}