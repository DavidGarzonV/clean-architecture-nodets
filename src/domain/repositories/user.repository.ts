import { User } from '../entities/user.entity';

export interface UsersRepository {
	get(): Promise<User[]>;
}
