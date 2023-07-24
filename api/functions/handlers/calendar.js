const axios = require("axios");
const config = require("../config");

exports.getEvents = async (req, res) => {
  const docs = await axios
      .get(`https://firestore.googleapis.com/v1/projects/${config.projectId}/databases/(default)/documents/calendar`)
      .catch((err) => {
        return res.status(500).json({error: err.response.data.error.message});
      });

  let events = [];
  const eventsData = docs.data.documents;
  if (eventsData) {
    const desc = eventsData.sort((a, b) => {
      return a.fields.startTime.timestampValue > b.fields.startTime.timestampValue;
    });
    events = await Promise.all(
        desc.map(async (a) => {
          const event = {};
          const id = a.fields.id.stringValue;
          const data = await axios
              .get(
                  `https://firestore.googleapis.com/v1/projects/${config.projectId}/databases/(default)/documents/calendar/${id}`,
              )
              .catch((e) => {
                return res.status(500).json({error: e.response.data.error.message});
              });
          event.info = data.data.fields;
          return event;
        }),
    );
  }

  return res.status(200).json({events});
};
