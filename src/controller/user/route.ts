import { Router } from 'express';
import { checkSchema } from 'express-validator/check';
import validationHandler from '../../middlewares/validationHandler';
import controllerAdapter from '../../middlewares/controllerAdapter';
import validations from './validation';
import UserControllerInstance from './UserController';


const router = Router();

router.route("/getAll").get(
    // checkSchema(validations.search as any),
    // checkSchema(validations.list as any),
    // validationHandler(),
    controllerAdapter(UserControllerInstance, "search")
  );

//#region [swagger: /users/getAll]
/**
 * @swagger
 * /users/getAll:
 *   get:
 *     security:
 *      - APIKeyHeader: []
 *     tags:
 *       - Users
 *     description: Fetch all users list.
 *     produces:
 *       - application/json
 *     parameters:
*       - name: limit
 *         in: query
 *         description: Number of records to be displayed.
 *         type: number
 *       - name: skip
 *         in: query
 *         description: Number of records to be skipped.
 *         type: number
 *     responses:
 *       200:
 *         description: Successfully fetched
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               type: array
 *               items:
 *                 type: object
 *                 required:
 *                   - email
 *                   - password
 *                   - username
 *                 properties:
 *                   email:
 *                     type: string
 *                     description: Email id of the user.
 *                     example: "ananya.kumari@gmail.com"
 *                   password:
 *                     type: string
 *                     description: Password for the user account.
 *                     example: "Any string"
 *                   username:
 *                     type: string
 *                     description: Username of the user.
 *                     example: Yamini
 *       400:
 *         description: Bad Request
 *         schema:
 *           $ref: '#/definitions/400'
 *       401:
 *         description: Unauthorized. Token not provided or invalid token.
 *         schema:
 *           $ref: '#/definitions/401'
 *       403:
 *         description: Unauthorized. Token not provided or invalid token.
 *         schema:
 *           $ref: '#/definitions/403'
 *       404:
 *         description: Not found
 *         schema:
 *           $ref: '#/definitions/404'
 *       500:
 *         description: Internal server error
 *         schema:
 *            $ref: '#/definitions/500'
 */
//#endregion

//#region [swagger: others]
/**
 * @swagger
 * definitions:
 *   400:
 *     properties:
 *       data:
 *          type: object
 *       metadata:
 *          properties:
 *            code:
 *              type: number
 *              example: 400
 *            message:
 *              type: string
 *              example: Bad Request
 *            timestamp:
 *              type: string
 */

/**
 * @swagger
 * definitions:
 *   401:
 *     properties:
 *       err:
 *        type: string
 */

/**
 * @swagger
 *  definitions:
 *    403:
 *      properties:
 *        data:
 *          type: object
 *        metadata:
 *          properties:
 *            code:
 *              type: number
 *              example: 403
 *            message:
 *              type: string
 *              example: Forbidden
 *            timestamp:
 *              type: string
 */

/**
 * @swagger
 * definitions:
 *   404:
 *     properties:
 *       data:
 *        type: object
 *       metadata:
 *          properties:
 *            code:
 *              type: number
 *              example: 404
 *            message:
 *              type: string
 *              example: Page Not found
 *            timestamp:
 *              type: string
 */

/**
 * @swagger
 * definitions:
 *   422:
 *     properties:
 *       data:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              location:
 *                type: string
 *              param:
 *                type: string
 *              value:
 *                type: string
 *              msg:
 *                type: string
 *       metadata:
 *          properties:
 *            code:
 *              type: number
 *              example: 422
 *            message:
 *              type: string
 *              example: Validation Error
 *            timestamp:
 *              type: string
 */

  router.route("/create").post(
    // (req, res) => console.log('hhhhhhhhhhhhhhhhhhhhhhhh'),
    controllerAdapter(UserControllerInstance, "create")
  );

//   router.route("/create").post(
    // (req,res) => console.log('inner router....'),
    // checkSchema(validations.search as any),
    // checkSchema(validations.list as any),
    // validationHandler(),
    // controllerAdapter(RecipeControllerInstance, "create")
//   );


//#region [swagger: /users/create]
/**
 * @swagger
 * /users/create:
 *   post:
 *     security:
 *      - APIKeyHeader: []
 *     tags:
 *       - Users
 *     description: Create User.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               description: Email id of the user
 *               example: "ananya.kumari@gmail.com"
 *             password:
 *               type: string
 *               description: Password of the user account.
 *               example: "Any string"
 *             username:
 *               type: string
 *               description: Username of the user.
 *               example: yamini
 *     responses:
 *       200:
 *         description: Successfully fetched
 *         schema:
 *           type: object
 *           properties:
 *             data:
 *               type: array
 *               items:
 *                 type: object
 *                 required:
 *                   - email
 *                   - password
 *                   - username
 *                 properties:
 *                   email:
 *                     type: string
 *                     description: Email id of the user.
 *                     example: "ananya.kumari@gmail.com"
 *                   password:
 *                     type: string
 *                     description: Password for the user account.
 *                     example: "Any string"
 *                   username:
 *                     type: string
 *                     description: Username of the user.
 *                     example: Yamini
 *       400:
 *         description: Bad Request
 *         schema:
 *           $ref: '#/definitions/400'
 *       401:
 *         description: Unauthorized. Token not provided or invalid token.
 *         schema:
 *           $ref: '#/definitions/401'
 *       403:
 *         description: Unauthorized. Token not provided or invalid token.
 *         schema:
 *           $ref: '#/definitions/403'
 *       404:
 *         description: Not found
 *         schema:
 *           $ref: '#/definitions/404'
 *       500:
 *         description: Internal server error
 *         schema:
 *            $ref: '#/definitions/500'
 */
//#endregion

//#region [swagger: others]
/**
 * @swagger
 * definitions:
 *   400:
 *     properties:
 *       data:
 *          type: object
 *       metadata:
 *          properties:
 *            code:
 *              type: number
 *              example: 400
 *            message:
 *              type: string
 *              example: Bad Request
 *            timestamp:
 *              type: string
 */

/**
 * @swagger
 * definitions:
 *   401:
 *     properties:
 *       err:
 *        type: string
 */

/**
 * @swagger
 *  definitions:
 *    403:
 *      properties:
 *        data:
 *          type: object
 *        metadata:
 *          properties:
 *            code:
 *              type: number
 *              example: 403
 *            message:
 *              type: string
 *              example: Forbidden
 *            timestamp:
 *              type: string
 */

/**
 * @swagger
 * definitions:
 *   404:
 *     properties:
 *       data:
 *        type: object
 *       metadata:
 *          properties:
 *            code:
 *              type: number
 *              example: 404
 *            message:
 *              type: string
 *              example: Page Not found
 *            timestamp:
 *              type: string
 */

/**
 * @swagger
 * definitions:
 *   422:
 *     properties:
 *       data:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              location:
 *                type: string
 *              param:
 *                type: string
 *              value:
 *                type: string
 *              msg:
 *                type: string
 *       metadata:
 *          properties:
 *            code:
 *              type: number
 *              example: 422
 *            message:
 *              type: string
 *              example: Validation Error
 *            timestamp:
 *              type: string
 */

/**
 * @swagger
 * definitions:
 *   500:
 *     properties:
 *       data:
 *          type: object
 *       metadata:
 *          properties:
 *            code:
 *              type: number
 *              example: 500
 *            message:
 *              type: string
 *              example: Internal Server Error
 *            timestamp:
 *              type: string
 */
//#endregion

export default router;
  