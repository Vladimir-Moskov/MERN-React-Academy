import { Router } from 'express';
import BookRouter from './BookRouter';
import AuthorRouter from './AuthorRouter';
import GenreRouter from './GenreRouter';
import BookInstanceRouter from './BookInstanceRouter';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * @description
 *  Forwards any requests to the /v1/catalog/book URI to our BookRouter
 *  Also, check if user authenticated
 * @constructs
 */
router.use('/book', BookRouter);

/**
 * @description
 *  Forwards any requests to the /v1/catalog/author URI to our AuthorRouter
 *  Also, check if user authenticated
 * @constructs
 */
router.use('/author', AuthorRouter);

/**
 * @description
 *  Forwards any requests to the /v1/catalog/genre URI to our GenreRouter
 *  Also, check if user authenticated
 * @constructs
 */
router.use('/genre', GenreRouter);

/**
 * @description
 *  Forwards any requests to the /v1/catalog/bookinstance URI to our BookInstanceRouter
 *  Also, check if user authenticated
 * @constructs
 */
router.use('/bookinstance', BookInstanceRouter);

/**
 * @export {express.Router}
 */
export default router;
