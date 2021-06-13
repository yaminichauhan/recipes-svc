import APIError from './APIError';
import IError from './IError';
import { StatusCodes } from '../../libs/constants';


export default class UnauthorizedError extends APIError {
  constructor(errors: IError[]) {
    super('Authorization Error', StatusCodes.UNAUTHORIZED, errors, UnauthorizedError.name);
  }
}
