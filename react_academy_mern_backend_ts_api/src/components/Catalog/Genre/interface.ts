import { IGenreModel } from './model';

/**
 * @export
 * @interface IGenreService
 */
export interface IGenreService {

    /**
     * @returns {Promise<IGenreModel[]>}
     * @memberof IGenreService
     */
    findAll(): Promise<IGenreModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IUserModel>}
     * @memberof IUserService
     */
    findOne(code: string): Promise<IGenreModel>;

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
