import { User } from '../../../domain/entities/user.entity';
import { UsersRepository } from '../../../domain/repositories/user.repository';
import config from '../../../application/config/config';
import axios from 'axios';

export class APIUsersImpl implements UsersRepository {
	private _url: string = '';

	constructor(){
		this._url = config.get('external.usersApi');
	}

	async get(): Promise<User[]> {
		const apiResponse = await axios.get<{data: User[]}>(`${this._url}/users`);
		const { data: users } = apiResponse.data;
		return users;
	}
}