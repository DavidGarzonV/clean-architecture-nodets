import { NextFunction, Response, Request } from 'express';
import { GetUsersUseCase } from '../../../../domain/usecase/get-users/getUsers.usecase';
import { APIUsersImpl } from '../../../gateways/external-apis/apiUsers.impl';
import { User } from '../../../../domain/entities/user.entity';
import { StatusCodes } from '../../../../application/config/constants/enums';

export const getUsersController = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const getUsersUseCase = new GetUsersUseCase(
			new APIUsersImpl(),
		);

		const users: User[] = await getUsersUseCase.run();
		res.status(StatusCodes.SUCCESS).json({ users });
	} catch (error) {
		next(error);
	}
}