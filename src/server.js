import tmi from "tmi.js";
import dotenv from "dotenv";

dotenv.config();

const { TWITCH_USERNAME, TWITCH_PASSWORD, NODE_ENV } = process.env;

const debug = NODE_ENV === "development";

const client = new tmi.Client({
    channels: ['grandalf28'],
    options: {debug: debug},
    identity: {
        username: TWITCH_USERNAME,
        password: TWITCH_PASSWORD,
    },
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    if (message === "!links") {
        client.say(channel, `@${tags.username} hey!`);
    }
    console.log(`${tags['display-name']}: ${message}`);
});