import { Router } from 'express';
import recipeRouter from './controller/receipe/route';
import userRouter from './controller/user/route';

const router = Router();

router.get("/health-check", (req, res) => {
    res.status(200).send("I am OK");
  });

  router.use(
    "/recipes",
    // (req, res) => console.log("routerrrrrrrrrrrrrrrrr"),
    recipeRouter,
  );

  router.use(
    "/users",
    // (req, res) => console.log("routerrrrrrrrrrrrrrrrr"),
    userRouter,
  );
  

export default router;