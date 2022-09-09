import express from 'express'
import {getAllPost,getSinglePost,createpost,deletePost,queryParam,updateSinglePost} from '../controllers/postController.js'
const router = express.Router()
import {protect} from '../middlewares/auth.js'


router.route("/").get(getAllPost).post(createpost)


router.route("/:id")
.put(updateSinglePost)
.get(getSinglePost)
.delete(deletePost)


export default router
