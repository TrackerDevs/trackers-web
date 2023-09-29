const axios = require("axios");
const config = require("./config");

const guildId = "747533680548904985";

exports.retrieveAvatars = async (req, res) => {
  const docs = await axios
      .get(`https://firestore.googleapis.com/v1/projects/${config.projectId}/databases/(default)/documents/team`)
      .catch((err) => {
        return res.status(500).json({error: err.response.data.error.message});
      });

  let teamData = [];
  const people = docs.data.documents;
  if (people) {
    const desc = people.sort((a, b) => {
      return a.fields.name.stringValue.localeCompare(b.fields.name.stringValue);
    });
    teamData = await Promise.all(
        desc.map(async (a) => {
          const person = {};
          const id = a.fields.id.stringValue;
          const data = await axios
              .get(
                  `https://firestore.googleapis.com/v1/projects/${config.projectId}/databases/(default)/documents/team/${id}`,
              )
              .catch((e) => {
                return res.status(500).json({error: e.response.data.error.message});
              });
          person.info = data.data.fields;
          return person;
        }),
    );
  }

  axios.defaults.headers.common["Authorization"] = `Bot ${config.discordToken}`;
  const avatars = await Promise.all(
      teamData.map(async (a) => {
        if (a.info.tag && a.info.tag.stringValue !== "") {
          const resp = await axios.get(`https://discord.com/api/guilds/${guildId}/members/search?query=${a.info.tag.stringValue}`)
              .catch((e) => {
                return res.status(500).json({error: e.response.data});
              });
          return `https://cdn.discordapp.com/avatars/${resp.data[0].user.id}/${resp.data[0].user.avatar}.png`;
        } else {
          return "https://firebasestorage.googleapis.com/v0/b/cs-trackers.appspot.com/o/public%2Fdefault-pfp.png?alt=media";
        }
      }),
  );

  delete axios.defaults.headers.common["Authorization"];
  const user = {email: config.email, password: config.password};
  const data = await axios
      .post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.apiKey}`, {
        ...user,
        returnSecureToken: true,
      })
      .catch((err) => {
        return res.status(500).json({error: "Invalid user details"});
      });
  const data2 = await axios
      .post(`https://securetoken.googleapis.com/v1/token?key=${config.apiKey}`, {
        grant_type: "refresh_token",
        refresh_token: data.data.refreshToken,
      })
      .catch((err) => {
        return res.status(500).json({error: err.response.data.error.message});
      });

  axios.defaults.headers.common["Authorization"] = `Bearer ${data2.data.id_token}`;
  await Promise.all(
      avatars.map(async (a, i) => {
        const fields = {image: {stringValue: a}};
        const mask = ["image"];

        await axios
            .post(`https://firestore.googleapis.com/v1/projects/${config.projectId}/databases/(default)/documents:commit`, {
              writes: [
                {
                  update: {
                    fields,
                    name: `projects/${config.projectId}/databases/(default)/documents/team/${teamData[i].info.id.stringValue}`,
                  },
                  updateMask: {fieldPaths: mask},
                },
              ],
            })
            .catch((err) => {
              return res.status(500).json({error: err.response.data.error.message});
            });
      }),
  );
  delete axios.defaults.headers.common["Authorization"];

  return res.status(200).json({message: "Details added successfully"});
};

exports.retrieveMembers = async (req, res) => {
  axios.defaults.headers.common["Authorization"] = `Bot ${config.discordToken}`;

  const resp = await axios.get(`https://discord.com/api/guilds/${guildId}?with_counts=true`)
      .catch((e) => {
        return res.status(500).json({error: e.response.data});
      });
  const resp2 = await axios.get("https://discord.com/api/guilds/1070476456506949762?with_counts=true")
      .catch((e) => {
        return res.status(500).json({error: e.response.data});
      });
  return res.status(200).json({cs: {members: resp.data.approximate_member_count, online: resp.data.approximate_presence_count}, me: {members: resp2.data.approximate_member_count, online: resp2.data.approximate_presence_count}});
};
