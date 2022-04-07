import { Router } from "express";
import { ReviewController } from "./controller.js";

const router = Router();
const controller = new ReviewController();

router.get("/", controller.list);
router.get("/:id", controller.read);
router.post("/", controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.remove);

export { router };
