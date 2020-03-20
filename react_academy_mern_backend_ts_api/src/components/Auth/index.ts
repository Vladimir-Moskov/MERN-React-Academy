import AuthService from './service';
import HttpError from '../../config/error';
import { IUserModel } from '../User/model';
import { NextFunction, Request, Response } from 'express';
import oauth from '../../config/oauth';
import * as OAuth2Server from 'oauth2-server';

/**
 * @export
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 * @returns {Promise < void >}
 */
export async function signup(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const user: IUserModel = await AuthService.createUser(req.body);
        
        res.json({
            status: 200,
            user: {
                email: user.email
            }
        });
    } catch (error) {
        if (error.code === 500) {
            return next(new HttpError(error.message.status, error.message));
        }
        res.json({
            status: 400,
            message: error.message
        });
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function login(req: Request, res: Response, next: NextFunction): Promise < void > {
    const _req: OAuth2Server.Request = new OAuth2Server.Request(req);
    const _res: OAuth2Server.Response = new OAuth2Server.Response(res);

    const options: OAuth2Server.AuthorizeOptions = {
        authenticateHandler: {
            handle: async (req: Request, res: Response): Promise<OAuth2Server.User> => {
                try {
                    const user: OAuth2Server.User = await AuthService.getUser(req.body);

                    return user;
                } catch (error) {
                    throw new Error(error);
                }
            }
        }
    };
    const code: OAuth2Server.AuthorizationCode = await oauth.authorize(_req, _res, options);

    res.redirect(`${code.redirectUri}?code=${code.authorizationCode}&state=${req.query.state}`);
}
/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next
 * @returns {Promise < void >} 
 */
export async function token(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const _req: OAuth2Server.Request = new OAuth2Server.Request(req);
        const _res: OAuth2Server.Response = new OAuth2Server.Response(res);
        const token: OAuth2Server.Token = await oauth.token(_req, _res);

        res.json({
            accessToken: token.accessToken,
            refreshToken: token.refreshToken
        });
    } catch (error) {
        return next(new HttpError(error.status, error.message));
    }
}
