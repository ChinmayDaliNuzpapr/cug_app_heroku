import DBConnect from "../middleware/DBConnect";
import answerModel from "../../../models/answer";
import replyModel from "../../../models/reply";
import isUserLoggedIn from "../middleware/isUserLoggedIn";
import checkOwnership from "../middleware/checkOwnership";

const deleteAnswer = async (req, res) => {
  try {
    req = await isUserLoggedIn(req, res);

    const { answerID, author } = req.body;

    const isOwner = checkOwnership(author, req);

    if (!isOwner) throw process.env.OWNERSHIP_NOT_FOUND;

    //deleting the answer
    const answer = await answerModel.findOneAndUpdate(
      {
        _id: answerID,
      },
      {
        $set: { "article.active": false },
      },
      { new: true }
    );

    //deleting all respective replies
    await replyModel.updateMany(
      { answer: answer._id },
      {
        $set: {
          "article.active": false,
        },
      }
    );

    return res.status(200).send({ message: process.env.ANSWER_DELETED });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: err });
  }
};

export default DBConnect(deleteAnswer);
