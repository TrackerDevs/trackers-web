const functions = require("firebase-functions");
const app = require("express")();
const cors = require("cors");
app.use(cors());
const FBAuth = require("./utils/fbAuth");

const {
  signUp,
  login,
  addUserDetails,
  getAuthenticatedUser,
  getUserDetails,
  googleOAuth,
  // deleteUser,
  // uploadImage
} = require("./handlers/users");

const {getTeamDetails} = require("./handlers/team");
const {getEvents, getUpcomingEvents} = require("./handlers/calendar");

const {retrieveAvatars} = require("./discordApi");

app.post("/signup", signUp);
app.post("/login", login);
app.get("/user", FBAuth, getAuthenticatedUser);
app.post("/user", FBAuth, addUserDetails);
app.get("/user/:handle", FBAuth, getUserDetails);
// app.delete('/user', FBAuth, deleteUser);
// app.post('/user/image', FBAuth, uploadImage);

app.get("/team", getTeamDetails);

app.get("/calendar", getEvents);
app.get("/calendar/upcoming", getUpcomingEvents);

// app.get("/discord/test", retrieveAvatars);

app.post("/auth/google", googleOAuth);

exports.api = functions.region("us-central1").https.onRequest(app);

exports.discordFunctions = functions.region("us-central1").pubsub.schedule("0 0 * * SUN").onRun(retrieveAvatars);
