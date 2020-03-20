import * as Joi from 'joi';
import BookInstanceModel, { IBookInstanceModel } from './model';
import BookInstanceValidation from './validation';
import { IBookInstanceService } from './interface';
import { Types } from 'mongoose';

/**
 * @export
 * @implements {IBookInstanceModelService}
 */
const BookInstanceService: IBookInstanceService = {
  
    /**
     * @returns {Promise < IBookInstanceModel[] >}
     * @memberof BookInstanceService
     */
    async findAll(): Promise < IBookInstanceModel[] > {
        try {
            return await BookInstanceModel.find({}).populate('book');
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IBookInstanceModel >}
     * @memberof IBookInstanceModelService
     */
    async findOne(id: string): Promise < IBookInstanceModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = BookInstanceValidation.getBookInstance({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }
            
            return await BookInstanceModel.findById(id).populate('book');
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IUserModel} user
     * @returns {Promise < IUserModel >}
     * @memberof UserService
     */
   /* async insert(body: IUserModel): Promise < IUserModel > {
        try {
            const validate: Joi.ValidationResult < IUserModel > = UserValidation.createUser(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const user: IUserModel = await UserModel.create(body);

            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    },
*/
    /**
     * @param {string} id
     * @returns {Promise < IUserModel >}
     * @memberof UserService
     */
   /* async remove(id: string): Promise < IUserModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = UserValidation.removeUser({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const user: IUserModel = await UserModel.findOneAndRemove({
                _id: Types.ObjectId(id)
            });

            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    }*/
};

export default BookInstanceService;
