import { Router } from 'express';
import { MovieController } from './controller.js';

const router = Router();
const controller = new MovieController();

router.get('/', controller.list);
router.get('/:id', controller.read);
router.get('/:id/reviews', controller.readWithReviews);
router.post('/', controller.create);
router.patch('/:id', controller.update);
router.delete('/:id', controller.remove);

export { router };
