import questionModel from "../../../models/question";
import categoryModel from "../../../models/category";
import groupModel from "../../../models/group";
import DBConnect from "../../middleware/DBConnect";
import jwt from "jsonwebtoken";

/*isUserLoggedIn middleware is not being used here, as it throws error when token isn't there, but someone
without token can access the "global" view*/

//type of request - GET
//data to recieve here from frontend - sebd questionID in URL

const getCategoryAndQuestions = async (req, res) => {
  console.log("THE REQ BODY", req.body);
  try {
    const { category } = req.body;

    const currentCategory = category ? category : "60c1d3759e4b0d08706a9a3d"; //ID of default category "category 1"

    let questions;

    const categories = await categoryModel.find({});

    if (req.headers.authorization) {
      const token = req.headers.authorization.split("Bearer ")[1];

      const user = jwt.verify(token, process.env.secretKey);

      req.user = user;

      const currentGroup = await groupModel.findOne({
        Group_name: req.user.Group_name,
      });

      questions = await questionModel.find({
        $and: [
          { category: currentCategory },
          { group: currentGroup._id },
          { "article.scope": "company" },
        ],
      });

      res.status(200).send({ categories, questions, currentGroup });
    } else {
      //when user hasn't provided any token

      const questionLimit = 5;

      questions = await questionModel
        .find({
          $and: [{ category: currentCategory }, { "article.scope": "global" }],
        })
        .limit(questionLimit);

      res.status(200).send({ categories, questions });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
};

export default DBConnect(getCategoryAndQuestions);
