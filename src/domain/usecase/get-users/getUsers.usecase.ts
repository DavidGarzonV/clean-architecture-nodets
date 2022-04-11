import { User } from '../../entities/user.entity';
import { UsersRepository } from '../../repositories/user.repository';

export class GetUsersUseCase {

	constructor(private usersRepository: UsersRepository) { }

	async run(): Promise<User[]> {
		return this.usersRepository.get();
	}
}