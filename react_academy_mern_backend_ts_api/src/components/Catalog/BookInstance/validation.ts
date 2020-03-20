import * as Joi from 'joi';
import Validation from '../../validation';
import { IBookInstanceModel } from './model';

/**
 * @export
 * @class BookInstanceValidation
 * @extends Validation
 */
class BookInstanceValidation extends Validation {

    /**
     * Creates an instance of GenreValidation.
     * @memberof BookInstanceValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof UserValidation
     */
    getBookInstance(
        body: {
            id: string
        }
    ): Joi.ValidationResult < {
        id: string
    } > {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });

        return Joi.validate(body, schema);
    }

    /**
     * @param {IBookInstanceModel} params
     * @returns {Joi.ValidationResult<IBookInstanceModel >}
     * @memberof BookInstanceValidation
     */
   /* createUser(
        params: IUserModel
    ): Joi.ValidationResult < IUserModel > {
        const schema: Joi.Schema = Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email({
                minDomainAtoms: 2
            }).required()
        });

        return Joi.validate(params, schema);
    }*/
    
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof UserValidation
     */
   /* removeUser(
        body: {
            id: string
        }
    ): Joi.ValidationResult < {
        id: string
    } > {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });

        return Joi.validate(body, schema);
    }*/
}

export default new BookInstanceValidation();
