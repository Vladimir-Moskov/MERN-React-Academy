import * as connections from '../../../config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';

/**
 * @export
 * @interface IBookModel
 * @extends {Document}
 */
export interface IBookModel extends Document {
    title: string;
    author: any;//string;//{type: Schema.Types.ObjectId, ref: 'Author', required: true},
    summary: string;
    isbn: string;
    genre: any[];////string;//[{type: Schema.Types.ObjectId, ref: 'Genre'}]
    book_instance: any;
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
 *    BookSchema:
 *      required:
 *        - title
 *        - author
 *        - summary
 *        - isbn
 *      properties:
 *        title:
 *          type: string
 *        summary:
 *          type: string
 *        isbn:
 *          type: string
 *        author:
 *          type: ObjectId
 *        genre:
 *          type: ObjectId
 *    Books:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/BookSchema'
 */
const BookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
    summary: { type: String, required: true },
    isbn: { type: String, required: true },
    genre: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
    book_instance: [{ type: Schema.Types.ObjectId, ref: 'BookInstance' }],
}, {
    collection: 'books',
    versionKey: true,
    toJSON: { virtuals: true }
}).pre('save', async function (next: NextFunction): Promise < void > {
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



export default connections.db.model < IBookModel > ('Book', BookSchema);
