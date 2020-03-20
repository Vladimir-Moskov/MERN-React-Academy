import * as connections from '../../../config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';
import * as moment from 'moment';

/**
 * @export
 * @interface IAuthorModel
 * @extends {Document}
 */
export interface IAuthorModel extends Document {
    first_name: string;
    family_name: string;
    date_of_birth: Date;
    date_of_death: Date;
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
 *    AuthorSchema:
 *      required:
 *        - first_name
 *        - family_name
 *      properties:
 *        first_name:
 *          type: string
 *        family_name:
 *          type: string
 *        date_of_birth:
 *          type: Date
 *        date_of_death:
 *          type: Date
 *    Authors:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/AuthorSchema'
 */
const AuthorSchema: Schema = new Schema({
    first_name: { type: String, required: true, max: 100 },
    family_name: { type: String, required: true, max: 100 },
    date_of_birth: { type: Date },
    date_of_death: { type: Date },
    books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
}, {
    collection: 'authors',
    versionKey: true,
    // toObject: { virtuals: true },
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

// Virtual for author's full name
AuthorSchema
    .virtual('name')
    .get(function () {  //.get(function (this: { first_name: string, family_name: string}) {

        // To avoid errors in cases where an author does not have either a family name or first name
        // We want to make sure we handle the exception by returning an empty string for that case

        let fullname: string = '';
        if (this.first_name && this.family_name) {
            fullname = this.family_name + ', ' + this.first_name;
        }
        if (!this.first_name || !this.family_name) {
            fullname = '';
        }

        return fullname;
    });

AuthorSchema
    .virtual('url')
    .get(function () {
        return '/catalog/author/' + this._id;
    });

AuthorSchema
    .virtual('date_of_birth_formatted')
    .get(function () {
        return moment(this.date_of_birth).format('MMMM Do, YYYY');
    });

// Virtual for author's lifespan
AuthorSchema
    .virtual('lifespan')
    .get(function () {
        let lifespan: string = '';       

        if (this.date_of_birth) {
            const year_of_death: number = (this.date_of_death ? this.date_of_death.getFullYear() : (new Date()).getFullYear());

            lifespan = (year_of_death - this.date_of_birth.getFullYear()).toString();
        }

        return lifespan;
    });

export default connections.db.model<IAuthorModel>('Author', AuthorSchema);
