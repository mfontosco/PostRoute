import express from 'express'
import {getUsers,createUser,loginUser} from '../controllers/usersController.js'
import { protect } from '../middlewares/auth.js'
const router =express.Router()



//@desc:get all user
router.route("/").get(getUsers)
router.route("/register").post(createUser)
router.route("/login").post(loginUser)












export default router;
