import { Router } from "express";
import { create, list, read, del, patch } from "./controller.js";

const router = Router();

router.get('/', list);
router.get('/:id', read);
router.post('/', create);
router.patch('/:id', patch);
router.delete('/:id', del);

export { router };