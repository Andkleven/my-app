import { Client, Collection, Ref, Get, Create } from "faunadb";
export const client = new Client({
  secret: "fnAELwxV_-ACBXgaDRjvqDf4SxkSWx6P23ccuf6f",
});
// const q = faunadb.query;
export default (req, res) => {
  if (req.method === "GET") {
    client
      .query(Get(Ref(Collection("customers"), "101")))
      .then((ret) => res.status(200).json(ret))
      .catch((err) => res.status(400).json(err));
  } else {
    const data = JSON.parse(req.body);
    client
      .query(
        Create(Collection("customers"), {
          data,
        })
      )
      .then((ret) => res.status(200).json(ret))
      .catch((err) => res.status(400).json(err));
  }
};
