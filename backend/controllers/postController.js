import post from "../data.js";
import Post from "../model/PostModel.js";

//get all post
const getAllPost = async (req, res) => {
   const post = await Post.find({})

  res.json({
    status:"success",
post    });
  }
//create post
const createpost = async (req, res) => {
  // const copy = [...post]
  // const {userId,id,title,body} = req.body
  const { title, body } = req.body;
  try {
    const post = await Post.create({
      title,
      body,
    });
    console.log(post)
    res.json({
      status: "success",
      post,
    });
  } catch (err) {
    console.log(err);
    res.status(402).json({
      status: "fail",
      message: err.message,
    });
  }

  // const user = {
  //     userId,
  //     id,
  //     title,
  //     body
  // }
  // copy.push(user)
  // res.json({
  //     status:"success",
  //     user
  // })
};

//get single post

const getSinglePost = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  try {
    const post = await Post.findById({_id:id});
    res.json({
      status: "success",
      post,
    });
  } catch (err) {
    console.log(err);
    res.json({
      status: "failed",
      error: err.message,
    });
  }

  // const copy =[...post]
  // console.log(copy)
  // const {id }= req.params
  // console.log(id)
  // const user = await copy.find(item=>item.id ==id)
  // console.log(user)
  // res.send(user)
};

//update

const updateSinglePost = async (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;
  
   const post = await Post.findById({_id:id});
  try {
    if (title) {
      post.title = title;
    }
    if (body) {
      post.body = body;
    }
    await post.save()
    res.json({
      status: "success",
      post,
    });
  } catch (err) {
    console.log(err);
    res.status(402).json({
      status: "failed",
      error: err.message,
    });
  }
  //     const {_id} = req.params
  // const {title,body,} = req.body
  // const copy = [...post]
  // const user = copy.find(item =>item.id == _id)
  // console.log(user)
  // try{
  //     if(title){
  //         user.title =title
  //     }
  //     if(body){
  //         user.body = body
  //     }

  //     console.log(user)
  //     res.json({
  //     status:"success",
  //     user
  //     })
  // }catch(err){
  //     console.log(err)
  // }
};
//delete route

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;
  

  try {
    const post = await Post.findById({_id:id});
    post.remove()
    res.json({
      status: "success",
      message: "successfully deleted",
    });
  } catch (err) {
    console.log(err);
    res.json({
      status: "failed",
      error: err.message,
    });
  }
  // const {id} = req.params
  // const {title,body} = req.body
  // const copy =[...post]
  // const user = copy.filter(item=>item.id !== id)
  // console.log(user)
  // res.send({
  //     status:"successfully deleted",
  //     user,
  // })
};

// search param
const queryParam = (req, res) => {
  const { title, userId } = req.query;
  const copy = [...post];
  let searchRes = copy;

  if (title) {
    searchRes = searchRes.filter((item) => item.title.startsWith(title));
  }
  if (userId) {
    searchRes = searchRes.filter((item) => item.userId.toString() === userId);
  }

  res.json({
    status: "success",
    searchRes,
  });
};

export {
  getAllPost,
  getSinglePost,
  createpost,
  deletePost,
  queryParam,
  updateSinglePost,
};
