import DBConnect from "../middleware/DBConnect";
import questionModel from "../../../models/question";
import isUserLoggedIn from "../middleware/isUserLoggedIn";
import answerModel from "../../../models/answer";
import replyModel from "../../../models/reply";
import checkOwnership from "../middleware/checkOwnership";

const DeleteQuestion = async (req, res) => {
  if ((req.method = "DELETE")) {
    try {
      //checking whether user is logged in or not
      req = await isUserLoggedIn(req, res);

      const { answerID, author } = req.body;

      const isOwner = checkOwnership(author, req);

      if (!isOwner) throw process.env.OWNERSHIP_NOT_FOUND;

      await questionModel.updateOne(
        { _id: answerID },
        { $set: { "article.active": false } },
        { new: true }
      );

      //deleting all the associated answers

      await answerModel.updateMany(
        { question: id },
        { $set: { "article.active": false } }
      );

      //deleting all the reply to answers

      return res.status(200).send({ message: process.env.QUESTION_ADDED });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ error: err });
    }
  }
};

export default DBConnect(DeleteQuestion);
