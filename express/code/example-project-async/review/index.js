import { Router } from "express";
import { create, list, read, remove, update } from "./controller.js";

const router = Router();

router.get('/', list);
router.get('/:id', read);
router.post('/', create);
router.patch('/:id', update);
router.delete('/:id', remove);

export { router };