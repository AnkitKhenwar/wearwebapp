import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const connectionstring=`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.s3oyhye.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority'`
  const client = await MongoClient.connect(connectionstring);
  console.log("Database Connect!")

  return client;
}
