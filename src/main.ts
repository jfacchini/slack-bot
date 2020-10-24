import { App } from "@slack/bolt";

const AIYAA_SLACK_BOT_TOKEN = process.env.AIYAA_SLACK_BOT_TOKEN;
const AIYAA_SIGNING_SECRET = process.env.AIYAA_SIGNING_SECRET;

const app = new App({
  token: AIYAA_SLACK_BOT_TOKEN,
  signingSecret: AIYAA_SIGNING_SECRET,
});

// Post a message to a channel your app is in using ID and message text
async function publishMessage(id: string, text: string) {
  // Call the chat.postMessage method using the built-in WebClient
  return await app.client.chat.postMessage({
    // The token you used to initialize your app
    token: AIYAA_SLACK_BOT_TOKEN,
    channel: id,
    text: text,
    // You could also use a blocks[] array to send richer content
  });
}

publishMessage("test-aiyaa", "Hello world :tada:")
  .then(console.log)
  .catch(console.error);

// (async () => {
//   // Start your app
//   await app.start(process.env.PORT || 3000);
//
//   console.log("⚡️ Bolt app is running!");
// })();
