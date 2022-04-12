import { UsersRepository } from '../../../repositories/user.repository';
import { User } from '../../../entities/user.entity';

export class GetUsersUseCase {
	constructor(private usersRepository: UsersRepository) { }

	async run(): Promise<User[]> {
		return this.usersRepository.get();
	}
}