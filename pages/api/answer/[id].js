import DBConnect from "../middleware/DBConnect";
import answerModel from "../../../models/answer";
import isUserLoggedIn from "../middleware/isUserLoggedIn";

const viewQuestion = async (req, res) => {
  try {
    req = await isUserLoggedIn(req, res);

    const { id } = req.query;

    const answer = await answerModel.find({ question: id });

    return res.status(200).send({ answer });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: err });
  }
};

export default DBConnect(viewQuestion);
