import * as Joi from 'joi';
import AuthorModel, { IAuthorModel } from './model';
import BookModel, { IBookModel } from '../Book/model';
import AuthorValidation from './validation';
import { IAuthorService } from './interface';

/**
 * @export
 * @implements {IAuthorModelService}
 */
const AuthorService: IAuthorService = {
    /**
     * @returns {Promise < IAuthorModel[] >}
     * @memberof AuthorService
     */
    async findAll(): Promise<IAuthorModel[]> {
        try {
            return await AuthorModel.find({})
                .populate('author')
                .sort([['family_name', 'ascending']]);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IAuthorModel >}
     * @memberof AuthorService
     */
    async findOne(id: string): Promise<IAuthorModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string
            }> = AuthorValidation.getAuthor({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            let books: IBookModel[];
            let author: IAuthorModel;
            [books, author] = await Promise.all([
                await BookModel.find({ 'author': id }, 'title summary'),
                await AuthorModel.findOne({ _id: id }).populate('book')
            ]);
            author.books = books;

            return author;

            //return await AuthorModel.findById(id).populate('books');
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

export default AuthorService;
