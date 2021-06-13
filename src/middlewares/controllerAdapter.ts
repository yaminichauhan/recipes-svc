import { APIError } from "../entities/errors";
import { SuccessResponse } from "../entities/responses";

export default function controllerAdapter(controller: any = null, functionName: string = "") {
  return async (req: any, res: any, next: any) => {
    const {
      headers: { authorization },
      params,
      query,
      body
    } = req;
    const { locals } = res;
    try {
      if (locals.isHit) {
        return next();
      }

      const result = await controller[functionName]({ headers: { authorization }, params, query, locals, body });
      res.locals.isHit = true;

      if (result.type === APIError.name) {
        // result is an APIError
        console.log(result);

        next(result);
      } else {
        const response = new SuccessResponse(result);
        res.locals.response = response;
        res.json(response);

        next();
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}
