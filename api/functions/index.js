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
  // deleteUser,
  // uploadImage
} = require("./handlers/users");

const {getTeamDetails} = require("./handlers/team");

app.post("/signup", signUp);
app.post("/login", login);
app.get("/user", FBAuth, getAuthenticatedUser);
app.post("/user", FBAuth, addUserDetails);
app.get("/user/:handle", FBAuth, getUserDetails);
// app.delete('/user', FBAuth, deleteUser);
// app.post('/user/image', FBAuth, uploadImage);

app.get("/team", getTeamDetails);

exports.api = functions.region("us-central1").https.onRequest(app);
