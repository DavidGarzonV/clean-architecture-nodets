import { NextFunction, Response, Request } from 'express';
import { GetUsersUseCase } from '../../../../../domain/usecase/users/get-users/getUsers.usecase';
import { User } from '../../../../../domain/entities/user.entity';
import { APIUsersImpl } from '../../../../gateways/external-apis/apiUsers.impl';

export const getUsersController = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const getUsersUseCase = new GetUsersUseCase(
			new APIUsersImpl(),
		);

		const users: User[] = await getUsersUseCase.run();
		res.json({ users });
	} catch (error) {
		next(error);
	}
}