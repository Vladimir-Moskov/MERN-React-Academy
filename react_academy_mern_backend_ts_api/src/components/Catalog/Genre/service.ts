import * as Joi from 'joi';
import GenreModel, { IGenreModel } from './model';
import BookModel, { IBookModel } from '../Book/model';
import GenreValidation from './validation';
import { IGenreService } from './interface';
import { Types } from 'mongoose';

/**
 * @export
 * @implements {IGenreModelService}
 */
const GenreService: IGenreService = {
    /**
     * @returns {Promise < IGenreModel[] >}
     * @memberof GenreService
     */
    async findAll(): Promise<IGenreModel[]> {
        try {
            return await GenreModel.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IGenreModel >}
     * @memberof GenreService
     */
    async findOne(id: string): Promise<IGenreModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string
            }> = GenreValidation.getGenre({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            let books: IBookModel[];
            let genre: IGenreModel;
            [books, genre] = await Promise.all([
                await BookModel.find({ 'genre': id }),
                await GenreModel.findById(id)
            ]);

            genre.books = books;

            return genre;

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

export default GenreService;
