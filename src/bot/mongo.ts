import { MongoClient } from "mongodb";

export class MongoClass {
  public client: MongoClient;

  constructor() {
    this.client = this.connectionDb();
  }

  private connectionDb(): MongoClient {
    try {
      if (!process.env.MONGO_URI) throw new Error("No mongo uri found");
      const client = new MongoClient(process.env.MONGO_URI);
      return client;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async insertData(data: any, collection: string) {
    try {
      const database = this.client.db("discord");
      const collectionDb = database.collection(collection);
      const result = await collectionDb.insertOne(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
