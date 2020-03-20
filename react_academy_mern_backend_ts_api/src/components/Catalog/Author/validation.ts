import * as Joi from 'joi';
import Validation from '../../validation';
import { IAuthorModel } from './model';

/**
 * @export
 * @class AuthorValidation
 * @extends Validation
 */
class AuthorValidation extends Validation {

     /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof UserValidation
     */
    getAuthor(
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
     * Creates an instance of AuthorValidation.
     * @memberof AuthorValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IAuthorModel} params
     * @returns {Joi.ValidationResult<IAuthorModel >}
     * @memberof AuthorValidation
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

export default new AuthorValidation();
