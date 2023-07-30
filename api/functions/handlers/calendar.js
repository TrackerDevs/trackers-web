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
      if (a.fields.startTime.timestampValue.split(".")[0] === b.fields.startTime.timestampValue.split(".")[0]) {
        return a.fields.name.stringValue.localeCompare(b.fields.name.stringValue);
      }
      return a.fields.startTime.timestampValue.localeCompare(b.fields.startTime.timestampValue);
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

exports.getUpcomingEvents = async (req, res) => {
  const docs = await axios
      .get(`https://firestore.googleapis.com/v1/projects/${config.projectId}/databases/(default)/documents/calendar`)
      .catch((err) => {
        return res.status(500).json({error: err.response.data.error.message});
      });

  let events = [];
  const eventsData = docs.data.documents;
  if (eventsData) {
    const desc = eventsData.sort((a, b) => {
      if (a.fields.startTime.timestampValue.split(".")[0] === b.fields.startTime.timestampValue.split(".")[0]) {
        return a.fields.name.stringValue.localeCompare(b.fields.name.stringValue);
      }
      return a.fields.startTime.timestampValue.localeCompare(b.fields.startTime.timestampValue);
    });
    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    const desc2 = desc.filter((a) => {
      return new Date(a.fields.startTime.timestampValue) >= today &&
      new Date(a.fields.startTime.timestampValue) < new Date(today.getFullYear(), today.getMonth(), today.getDate() + 8);
    });
    events = await Promise.all(
        desc2.map(async (a) => {
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
