import * as connections from '../../../config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';
import { IBookModel } from '../Book/model';
import * as moment from 'moment';

/**
 * @export
 * @interface IBookInstanceModel
 * @extends {Document}
 */
export interface IBookInstanceModel extends Document {
    imprint: string;
    status: string;
    due_back: Date;
    book: IBookModel;

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
 *    BookInstanceSchema:
 *      required:
 *        - book
 *        - imprint
 *        - status
 *      properties:
 *        book:
 *          type: string
 *        imprint:
 *          type: string
 *        status:
 *          type: string
 *        due_back:
 *          type: Date
 *    Genres:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/BookInstance'
 */
const BookInstanceSchema: Schema = new Schema({
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true }, //reference to the associated book
    imprint: { type: String, required: true },
    status: { type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance' },
    due_back: { type: Date, default: Date.now }
}, {
    collection: 'bookinstances',
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

// Virtual for bookinstance's URL
BookInstanceSchema
    .virtual('url')
    .get(function () {
        return '/catalog/bookinstance/' + this._id;
    });

BookInstanceSchema
    .virtual('due_back_formatted')
    .get(function () {
        return moment(this.due_back).format('MMMM Do, YYYY');
    });

BookInstanceSchema
    .virtual('color')
    .get(function () {
        if (this.status === 'Available') {
            return 'text-success';
        }
        else if (this.status === 'Maintenance') {
            return 'text-danger';
        }
        else {
            return 'text-warning';
        }

    });

export default connections.db.model<IBookInstanceModel>('BookInstance', BookInstanceSchema);
