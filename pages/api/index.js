import { Client, Collection, Ref, Get, Update, Create } from "faunadb";

export const serverClient = new Client({
  secret: "fnAELwmBnzACBUyBCtl89djFHrtXTIBNiZHSa5iQ",
});

export default (req, res) => {
  serverClient
    .query(Get(Ref(Collection("customers"), "101")))
    .then((ret) => res.status(200).json(ret))
    .catch((err) => res.status(400).json(err));
};
