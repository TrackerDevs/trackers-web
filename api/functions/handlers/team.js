const axios = require("axios");
const config = require("../config");

exports.getTeamDetails = async (req, res) => {
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

  return res.status(200).json({teamData});
};
