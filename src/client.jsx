import { createClient } from "contentful";

const client = createClient({
  space: process.env.REACT_APP_API_SPACE,
  environment: "master",
  accessToken: process.env.REACT_APP_API_KEY,
});

export default client;
