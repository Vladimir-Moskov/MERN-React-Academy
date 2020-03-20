import * as Joi from 'joi';
import Validation from '../../validation';
import { IGenreModel } from './model';

/**
 * @export
 * @class GenreValidation
 * @extends Validation
 */
class GenreValidation extends Validation {

    /**
     * Creates an instance of GenreValidation.
     * @memberof GenreValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof UserValidation
     */
    getGenre(
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
     * @param {IGenreModel} params
     * @returns {Joi.ValidationResult<IGenreModel >}
     * @memberof GenreValidation
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

export default new GenreValidation();
