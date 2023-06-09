import { createClient } from "redis";

const client = createClient({
     password: "jl4L6SkyKvsP8WnwjPW7DrxXXBNxcZgC",
     socket: {
          host: "redis-16159.c54.ap-northeast-1-2.ec2.cloud.redislabs.com",
          port: 16159,
     },
});
client.on("error", (err) => console.log("Redis Client Error", err));

const redis = await client.connect();

console.log(" redis data : ", redis);

export default redis;
