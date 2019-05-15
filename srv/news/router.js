import { Router } from 'express';
import { getNews, getNewsDetail } from './controller';

const router = new Router();

router.get( '/', getNews );
router.get('/:id', getNewsDetail );

export default router;