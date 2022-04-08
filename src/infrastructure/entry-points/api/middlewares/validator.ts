import { ClassConstructor, plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { STATUS_CODE } from '../../../../application/config/constants/constants';

export const classValidator = (dto: ClassConstructor<any>) => async (req: Request, res: Response, next: NextFunction) => {
	try {
		const objInstance = plainToClass(dto, req.body);
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