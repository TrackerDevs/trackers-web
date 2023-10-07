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
  subscribeUser,
  // deleteUser,
  // uploadImage
} = require("./handlers/users");

const {getTeamDetails} = require("./handlers/team");
const {getEvents, getUpcomingEvents, rsvpEvent, getEvent} = require("./handlers/calendar");

const {retrieveAvatars, retrieveMembers} = require("./discordApi");

app.post("/signup", signUp);
app.post("/login", login);
app.get("/user", FBAuth, getAuthenticatedUser);
app.post("/user", FBAuth, addUserDetails);
app.get("/user/:handle", FBAuth, getUserDetails);
app.put("/user/subscribe", FBAuth, subscribeUser);
// app.delete('/user', FBAuth, deleteUser);
// app.post('/user/image', FBAuth, uploadImage);

app.get("/team", getTeamDetails);

app.get("/calendar", getEvents);
app.get("/calendar/:id", getEvent);
app.post("/calendar/upcoming", getUpcomingEvents);
app.post("/calendar/rsvp", FBAuth, rsvpEvent);

app.get("/discord/test", retrieveAvatars);
app.get("/discord/members", retrieveMembers);

app.post("/auth/google", googleOAuth);

exports.api = functions.region("us-central1").https.onRequest(app);

exports.discordFunctions = functions.region("us-central1").pubsub.schedule("0 0 * * SUN").onRun(retrieveAvatars);
