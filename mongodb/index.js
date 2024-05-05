const { MongoClient } = require("mongodb");

// 用连接字符串替换 uri 字符串。
const uri = "mongodb://localhost:5300";

// 连接到mongodb数据库
const client = new MongoClient(uri);

async function run() {
  try {
    // 获取名字为yangyang的数据库
    const database = client.db('yangyang');
    // 获取yangyang数据库下的集合
    const collection = database.collection('yangyang');

    // Query for a movie that has the title 'Back to the Future'
    const query = { name: 'tom' };
    // 在集合中查询数据
    const movie = await collection.findOne(query);

    console.log(movie);
  } finally {
    // 确保完成/出错时关闭客户端
    await client.close();
  }
}
run().catch(console.dir);