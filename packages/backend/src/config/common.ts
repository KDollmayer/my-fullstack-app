import { connect } from "mongoose";

const setupMongoDb = async (url: string) => {
  await connect(url);
};
export default setupMongoDb;
