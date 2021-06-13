import { Router } from 'express';
import { checkSchema } from 'express-validator/check';
import validationHandler from '../../middlewares/validationHandler';
import controllerAdapter from '../../middlewares/controllerAdapter';
import validations from './validation';
import RecipeControllerInstance from './RecipeController';


const router = Router();

router.route("/getAll").get(
    // checkSchema(validations.search as any),
    // checkSchema(validations.list as any),
    // validationHandler(),
    controllerAdapter(RecipeControllerInstance, "search")
  );

//#region [swagger: /recipes/getAll]
/**
 * @swagger
 * /recipes/getAll:
 *   get:
 *     security:
 *      - APIKeyHeader: []
 *     tags:
 *       - Recipes
 *     description: Get Recipes list.
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
 *                   - category
 *                   - name
 *                   - description
 *                   - instructions
 *                   - likes
 *                   - username
 *                 properties:
 *                   category:
 *                     type: string
 *                     description: Category of the receipe
 *                     example: Vegetable
 *                   name:
 *                     type: string
 *                     description: Name of the recipe.
 *                     example: Malai Kofta
 *                   description:
 *                     type: string
 *                     description: Description of the recipe.
 *                     example: "Malai means cream and kofta are fried balls. So, malai kofta translates to kofta dunked in creamy sauce."
 *                   imageUrl:
 *                     type: string
 *                     description: url of the image.
 *                     example: "https://www.thecuriouschickpea.com/wp-content/uploads/2018/03/malaikofta-4-720x720.jpg"
 *                   instructions:
 *                     type: object
 *                     description: Describes the steps to prepare the dish.
 *                     properties:
 *                      heading:
 *                        type: string
 *                        description: Describes how to start with the recipe.
 *                        example: "You need potatoes, paneer, tomatoes, cachews, onion, garlic, chillies, spices, fresh coriander for the preparation."
 *                      process1:
 *                        type: string
 *                        description: Describes how to perform the process.
 *                        example: "Kofta preparation: In a large mixing bowl take 3 potato and ¾ cup paneer. Add 1 chilli, 2 tbsp coriander, ¼ tsp cumin powder and ½ tsp salt. add 2 tbsp raisins and 2 tbsp cashew to have crunchy bite in kofta. Mix well making sure all the spices are well combined now add 2 tbsp maida and mix well forming a soft dough. Maida helps to absorb moisture and bind the mixture well. Prepare a small ball sized kofta by greasing hand with oil. Deep fry on medium hot oil. Stir occasionally, making sure the koftas are cooked uniformly. Fry until the kofta turn golden brown and crisp. Drain off the koftas and keep aside."
 *                      process2:
 *                        type: string
 *                        description: Describes further in detail how to perform the process
 *                        example: "Curry preparation for malia kofta: Firstly, in a pan heat 2 tbsp oil and saute 1 onion, 1 tsp ginger garlic paste. Saute until onions changes colour slightly. Further add 2 tomato and saute slightly. Now add 2 tbsp cashew and continue to saute until tomatoes soften completely. Cool completely and transfer to a blender. Blend to smooth paste adding water if required. Now filter the mixture to get rid of skin and seeds. Filter until silky smooth onion-tomato puree is attained. Keep aside. In a large kadai heat 1 tbsp butter and 2 tbsp oil. Saute 1 tsp cumin, 2 pod cardamom, 1 bay leaf, 1 inch cinnamon, 2 clove until it turns aromatic. Further keeping the flame on low, add 1 tsp chilli powder, ½ tsp turmeric, ¾ tsp coriander powder and ¼ tsp cumin powder. saute until the spices turn aromatic. Further add in the prepared onion tomato puree, 1 tsp salt and mix well. Cover and cook until the mixture starts to thicken and oil separates from sides. Now add ¼ cup cream and mix on low flame until it's well combined. Further, add ½ cup water and mix well adjusting consistency as required."
 *                      conclusion:
 *                        type: string  
 *                        description: Concluding the recipe
 *                        example: "Get the curry to a boil, add 1 tsp kasuri methi and ¼ tsp garam masala. mix well.finally, pour the curry over kofta and malai kofta is ready to enjoy."
 *                   likes:
 *                     type: number
 *                     description: No of likes on the dish.
 *                     example: 4
 *                   username:
 *                     type: string
 *                     description: Username of the user who shared the recipe.
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


  router.route("/create").post(
    // (req, res) => console.log('hhhhhhhhhhhhhhhhhhhhhhhh'),
    controllerAdapter(RecipeControllerInstance, "create")
  );

//   router.route("/create").post(
    // (req,res) => console.log('inner router....'),
    // checkSchema(validations.search as any),
    // checkSchema(validations.list as any),
    // validationHandler(),
    // controllerAdapter(RecipeControllerInstance, "create")
//   );


//#region [swagger: /recipes/create]
/**
 * @swagger
 * /recipes/create:
 *   post:
 *     security:
 *      - APIKeyHeader: []
 *     tags:
 *       - Recipes
 *     description: Create Recipes.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: Recipe name.
 *               example: "Malai kofta"
 *             category:
 *               type: string
 *               description: Category of the recipe.
 *               example: "Vegetable"
 *             description:
 *               type: string
 *               description: Description of the recipe
 *               example: "Malai means cream and kofta are fried balls. So, malai kofta translates to kofta dunked in creamy sauce."
 *             imageUrl:
 *               type: string
 *               description: url of the image.
 *               example: "https://www.thecuriouschickpea.com/wp-content/uploads/2018/03/malaikofta-4-720x720.jpg"
 *             instructions:
 *               type: object
 *               description: Describes the steps to prepare the dish.
 *               properties:
 *                heading:
 *                  type: string
 *                  description: Describes how to start with the recipe.
 *                  example: "You need potatoes, paneer, tomatoes, cachews, onion, garlic, chillies, spices, fresh coriander for the preparation."
 *                process1:
 *                  type: string
 *                  description: Describes how to perform the process.
 *                  example: "Kofta preparation: In a large mixing bowl take 3 potato and ¾ cup paneer. Add 1 chilli, 2 tbsp coriander, ¼ tsp cumin powder and ½ tsp salt. add 2 tbsp raisins and 2 tbsp cashew to have crunchy bite in kofta. Mix well making sure all the spices are well combined now add 2 tbsp maida and mix well forming a soft dough. Maida helps to absorb moisture and bind the mixture well. Prepare a small ball sized kofta by greasing hand with oil. Deep fry on medium hot oil. Stir occasionally, making sure the koftas are cooked uniformly. Fry until the kofta turn golden brown and crisp. Drain off the koftas and keep aside."
 *                process2:
 *                  type: string
 *                  description: Describes further in detail how to perform the process
 *                  example: "Curry preparation for malia kofta: Firstly, in a pan heat 2 tbsp oil and saute 1 onion, 1 tsp ginger garlic paste. Saute until onions changes colour slightly. Further add 2 tomato and saute slightly. Now add 2 tbsp cashew and continue to saute until tomatoes soften completely. Cool completely and transfer to a blender. Blend to smooth paste adding water if required. Now filter the mixture to get rid of skin and seeds. Filter until silky smooth onion-tomato puree is attained. Keep aside. In a large kadai heat 1 tbsp butter and 2 tbsp oil. Saute 1 tsp cumin, 2 pod cardamom, 1 bay leaf, 1 inch cinnamon, 2 clove until it turns aromatic. Further keeping the flame on low, add 1 tsp chilli powder, ½ tsp turmeric, ¾ tsp coriander powder and ¼ tsp cumin powder. saute until the spices turn aromatic. Further add in the prepared onion tomato puree, 1 tsp salt and mix well. Cover and cook until the mixture starts to thicken and oil separates from sides. Now add ¼ cup cream and mix on low flame until it's well combined. Further, add ½ cup water and mix well adjusting consistency as required."
 *                conclusion:
 *                  type: string  
 *                  description: Concluding the recipe
 *                  example: "Get the curry to a boil, add 1 tsp kasuri methi and ¼ tsp garam masala. mix well.finally, pour the curry over kofta and malai kofta is ready to enjoy."
 *             likes:
 *               type: number
 *               description: No. of likes on the dish.
 *               example: 4
 *             username:
 *               type: string
 *               description: Username of the user who shared the recipe.
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
 *                   - category
 *                   - name
 *                   - description
 *                   - instructions
 *                   - likes
 *                   - username
 *                 properties:
 *                   category:
 *                     type: string
 *                     description: Category of the receipe
 *                     example: Vegetable
 *                   name:
 *                     type: string
 *                     description: Name of the recipe.
 *                     example: Malai Kofta
 *                   description:
 *                     type: string
 *                     description: Description of the recipe.
 *                     example: "Malai means cream and kofta are fried balls. So, malai kofta translates to kofta dunked in creamy sauce."
 *                   instructions:
 *                     type: string
 *                     description: Describes whether it is a global application or a tenant group application.
 *                     example: "kofta preparation"
 *                   likes:
 *                     type: number
 *                     description: No of likes on the dish.
 *                     example: 4
 *                   username:
 *                     type: string
 *                     description: Username of the user who shared the recipe.
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


router.route("/updateLikes").put(
  // (req, res) => console.log('hhhhhhhhhhhhhhhhhhhhhhhh'),
  controllerAdapter(RecipeControllerInstance, "update")
);



//#region [swagger: /recipes/updateLikes]
/**
 * @swagger
 * /recipes/updateLikes:
 *   put:
 *     security:
 *      - APIKeyHeader: []
 *     tags:
 *       - Recipes
 *     description: Update Likes on recipes.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             likes:
 *               type: number
 *               description: No. of likes on the dish.
 *               example: 4
 *             originalId:
 *               type: string
 *               description: OriginalId of the recipe.
 *               example: "60b6f99412cc9c1c610be2d9"
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
 *                   - category
 *                   - name
 *                   - description
 *                   - instructions
 *                   - likes
 *                   - username
 *                 properties:
 *                   category:
 *                     type: string
 *                     description: Category of the receipe
 *                     example: Vegetable
 *                   name:
 *                     type: string
 *                     description: Name of the recipe.
 *                     example: Malai Kofta
 *                   description:
 *                     type: string
 *                     description: Description of the recipe.
 *                     example: "Malai means cream and kofta are fried balls. So, malai kofta translates to kofta dunked in creamy sauce."
 *                   instructions:
 *                     type: string
 *                     description: Describes whether it is a global application or a tenant group application.
 *                     example: "kofta preparation"
 *                   likes:
 *                     type: number
 *                     description: No of likes on the dish.
 *                     example: 4
 *                   username:
 *                     type: string
 *                     description: Username of the user who shared the recipe.
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
  