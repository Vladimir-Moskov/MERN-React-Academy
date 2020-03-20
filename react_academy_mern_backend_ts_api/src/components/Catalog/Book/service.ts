import * as Joi from 'joi';
import BookModel, { IBookModel } from './model';
import BookInstanceModel, { IBookInstanceModel } from '../BookInstance/model';
import BookValidation from './validation';
import { IBookService } from './interface';
import { Types } from 'mongoose';

/**
 * @export
 * @implements {IBookService}
 */
const BookService: IBookService = {
    /**
     * @returns {Promise < IBookModel[] >}
     * @memberof BookService
     */
    async findAll(): Promise<IBookModel[]> {
        try {
            return await BookModel.find({}, 'title author genre').populate('author').populate('genre');
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IBookModel >}
     * @memberof BookService
     */
    async findOne(id: string): Promise<IBookModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string
            }> = BookValidation.getBook({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            let book: IBookModel;
            let instance: IBookInstanceModel[];
            [instance, book] = await Promise.all([

                await BookInstanceModel.find({ 'book': id }),
                //await BookModel.findOne({ _id: id }).populate('genrer')
                await BookModel.findOne({ _id: id }, 'title author summary isbn genre author').populate('genre').populate('author')
            ]);
            book.book_instance = instance;
            
            return book;

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

export default BookService;
