import { IBookInstanceModel } from './model';

/**
 * @export
 * @interface IBookInstanceService
 */
export interface IBookInstanceService {

    /**
     * @returns {Promise<IBookInstanceModel[]>}
     * @memberof IBookInstanceService
     */
    findAll(): Promise<IBookInstanceModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IBookInstanceModel>}
     * @memberof IBookInstanceService
     */
    findOne(code: string): Promise<IBookInstanceModel>;

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
