import { IBookModel } from './model';

/**
 * @export
 * @interface IBookService
 */
export interface IBookService {

    /**
     * @returns {Promise<IBookModel[]>}
     * @memberof IBookService
     */
    findAll(): Promise<IBookModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IBookModel>}
     * @memberof IBookService
     */
    findOne(code: string): Promise<IBookModel>;

    /**
     * @param {IUserModel} IUserModel
     * @returns {Promise<IUserModel>}
     * @memberof IUserService
     */
    //insert(IUserModel: IUserModel): Promise<IUserModel>;

    /**
     * @param {string} id
     * @returns {Promise<IUserModel>}
     * @memberof IUserService
     */
    //remove(id: string): Promise<IUserModel>;
}
