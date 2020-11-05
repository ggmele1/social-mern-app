import express from 'express';


import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
console.log("ser/routes/posts RAN")

export default router;