import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { STATUS_CODE } from '../../../../application/config/constants/constants';

type ValidTypes = 'body' | 'query' | 'params';

export const classValidator = (
	dto: ClassConstructor<any>,
	type: ValidTypes = 'body'
) => async (req: Request, res: Response, next: NextFunction) => {
	try {
    const objInstance = plainToInstance(dto, req[type]);
		const validationResult = await validate(objInstance);
		if (validationResult.length === 0) {
			next();
		}else{
			res.status(STATUS_CODE.BAD_REQUEST).json({ error: true, errors: validationResult })
		}
	} catch (error) {
		res.status(STATUS_CODE.BAD_REQUEST).json({ error: true })
	}
}