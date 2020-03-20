import * as connections from '../../../config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';

/**
 * @export
 * @interface IGenreModel
 * @extends {Document}
 */
export interface IGenreModel extends Document {
    name: string;
    books: any[];
    /* email: string;
     password: string;
     passwordResetToken: string;
     passwordResetExpires: Date;
 
     facebook: string;
     tokens: AuthToken[];
 
     profile: {
         name: string,
         gender: string,
         location: string,
         website: string,
         picture: string
     };
     comparePassword: (password: string) => Promise < boolean > ;
     gravatar: (size: number) => string;*/

}
/*
export type AuthToken = {
    accessToken: string,
    kind: string
};
*/

/**
 * @swagger
 * components:
 *  schemas:
 *    GenreSchema:
 *      required:
 *        - name
 *      properties:
 *        name:
 *          type: string
 *    Genres:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/Genrechema'
 */
const GenreSchema: Schema = new Schema({
    name: { type: String, required: true, min: 3, max: 100 },
    books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
}, {
    collection: 'genres',
    versionKey: true,
    toJSON: { virtuals: true }
}).pre('save', async function (next: NextFunction): Promise<void> {
    const user: any = this; // tslint:disable-line

    return next();

    /* if (!user.isModified('password')) {
        return next();
    }

    try {
        const salt: string = await bcrypt.genSalt(10);

        const hash: string = await bcrypt.hash(user.password, salt);

        user.password = hash;
        next();
    } catch (error) {
        return next(error);
    }*/
});

GenreSchema
    .virtual('url')
    .get(function () {
        return '/genre/' + this._id;
    });

export default connections.db.model<IGenreModel>('Genre', GenreSchema);
