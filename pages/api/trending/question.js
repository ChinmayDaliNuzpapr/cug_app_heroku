import questionModel from "../../../models/question";
import DBConnect from "../middleware/DBConnect";
import isUserLoggedIn from "../middleware/isUserLoggedIn";
import mongoose from "mongoose";

const Trending = async (req, res) => {
  try {
    req = await isUserLoggedIn(req, res);

    //trending questions category wise

    const { categoryID } = req.body;

    //getting 5 days ago date
    let date = new Date(),
      Trending_Questions;
    date.setDate(date.getDate() - 5);

    const ObjectId = mongoose.Types.ObjectId;

    if (categoryID) {
      Trending_Questions = await questionModel.aggregate([
        {
          $match: {
            $and: [
              { category: new ObjectId(categoryID) },
              { "article.createdAt": { $gte: date } },
            ],
          },
        },
        {
          $sort: { "view.count": -1 },
        },
      ]);

      res.status(200).send({ Trending_Questions });
    } else {
      //trending questions group wise
      Trending_Questions = await questionModel.aggregate([
        {
          $match: {
            "article.createdAt": { $gte: date },
          },
        },
        {
          $sort: { "view.count": -1 },
        },
      ]);

      res.status(200).send({ Trending_Questions });
    }

    /*const q = await questionModel.find({ category: categoryID });
		console.log(q);*/
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
};

export default DBConnect(Trending);

/*
{
          $project: { _id: 1, "article.title": 1, "view.count": 1 },
        },
*/
