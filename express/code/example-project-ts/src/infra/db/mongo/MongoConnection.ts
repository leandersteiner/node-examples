import { MongoClient, Db } from 'mongodb';

export class MongoConnection {
  private client: MongoClient;
  private database: Db;

  constructor(connectionString: string, dbname: string) {
    this.client = new MongoClient(connectionString);
    this.connect();
    this.database = this.client.db(dbname);
  }

  private connect = async () => {
    await this.client.connect();
  };

  public db = () => {
    return this.database;
  };
}
