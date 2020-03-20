import { IAuthorModel } from './model';
import { IBookModel } from '../Book/model';
/**
 * @export
 * @interface IAuthorService
 */
export interface IAuthorService {

    /**
     * @returns {Promise<IAuthorModel[]>}
     * @memberof IAuthorService
     */
    findAll(): Promise<IAuthorModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IAuthorModel>}
     * @memberof IAuthorService
     */

    findOne(code: string): Promise<IAuthorModel>;
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
