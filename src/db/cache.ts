const pem = "jl4L6SkyKvsP8WnwjPW7DrxXXBNxcZgC";

import { createClient } from "redis";

const client = createClient({
     password: pem,
     socket: {
          host: "redis-16159.c54.ap-northeast-1-2.ec2.cloud.redislabs.com",
          port: 16159,
     },
});

async function connectRds() {
     client.on("ready", () => {
          console.log("Connected!");
     });
     client.on("error", (err) => {
          console.error(err);
     });
     return await client.connect();
}

export { connectRds, client as Rds };
