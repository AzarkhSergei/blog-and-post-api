import { Collection, Db, MongoClient } from "mongodb";
import { SETTINGS } from "../core/settings/settings";
import { BlogViewModel } from "../blogs/types/blog";
import { PostViewModel } from "../posts/types/post";

const BLOG_COLLECTION_NAME = "blogs";
const POST_COLLECTION_NAME = "posts";

export let client: MongoClient;
export let blogCollection: Collection<BlogViewModel>;
export let postCollection: Collection<PostViewModel>;

// Подключения к бд
export async function runDB(url: string): Promise<void> {
  client = new MongoClient(url);
  const db: Db = client.db(SETTINGS.DB_NAME);

  //Инициализация коллекций
  blogCollection = db.collection<BlogViewModel>(BLOG_COLLECTION_NAME);
  postCollection = db.collection<PostViewModel>(POST_COLLECTION_NAME);

  try {
    await client.connect();
    await db.command({ ping: 1 });
    console.log("✅ Connected to the database");
  } catch (e) {
    await client.close();
    throw new Error(`❌ Database not connected: ${e}`);
  }
}
