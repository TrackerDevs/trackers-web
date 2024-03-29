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

exports.getEventsAdmin = async (req, res) => {
  const userData = {};
  axios.defaults.headers.common["Authorization"] = `Bearer ${req.idToken}`;

  const doc = await axios
      .get(
          `https://firestore.googleapis.com/v1/projects/${config.projectId}/databases/(default)/documents/users/${req.user
              .userId}`,
      )
      .catch((err) => {
        return res.status(500).json({error: err.response.data.error.message});
      });

  userData.credentials = doc.data.fields;
  if (!userData.credentials.admin || !userData.credentials.admin.booleanValue) {
    delete axios.defaults.headers.common["Authorization"];
    return res.status(403).json({error: "Unauthorized"});
  }

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
          if (event.info.rsvp.arrayValue.values) {
            event.info.rsvp.arrayValue.values = await Promise.all(
                event.info.rsvp.arrayValue.values.map(async (a) => {
                  const doc = await axios
                      .get(
                          `https://firestore.googleapis.com/v1/projects/${config.projectId}/databases/(default)/documents/users/${a.stringValue}`,
                      )
                      .catch((err) => {
                        return res.status(500).json({error: err.response.data.error.message});
                      });
                  return doc.data.fields;
                }));
          }
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

exports.rsvpEvent = async (req, res) => {
  const id = req.body.eventId;
  axios.defaults.headers.common["Authorization"] = `Bearer ${req.idToken}`;

  const data = await axios
      .get(
          `https://firestore.googleapis.com/v1/projects/${config.projectId}/databases/(default)/documents/calendar/${id}`,
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json({error: err.response.data.error.message});
      });
  const mailingList = data.data.fields;

  const fields = {};
  const mask = ["rsvp"];

  if (mailingList.rsvp.arrayValue.values && mailingList.rsvp.arrayValue.values
      .map((id) => id.stringValue)
      .includes(req.user.userId)) {
    fields["rsvp"] = {arrayValue: {values:
      mailingList.rsvp.arrayValue.values.filter((id) => id.stringValue !== req.user.userId),
    }};
  } else {
    fields["rsvp"] = {arrayValue: {values:
      [...(mailingList.rsvp.arrayValue.values ?? []), {stringValue: req.user.userId}],
    }};
  }

  await axios
      .post(`https://firestore.googleapis.com/v1/projects/${config.projectId}/databases/(default)/documents:commit`, {
        writes: [
          {
            update: {
              fields,
              name: `projects/${config.projectId}/databases/(default)/documents/calendar/${id}`,
            },
            updateMask: {fieldPaths: mask},
          },
        ],
      })
      .catch((err) => {
        return res.status(500).json({error: err.response.data.error.message});
      });

  return res.status(200).json({message: "Details added successfully"});
};

exports.getEvent = async (req, res) => {
  const docs = await axios
      .get(`https://firestore.googleapis.com/v1/projects/${config.projectId}/databases/(default)/documents/calendar/${req.params.id}`)
      .catch((err) => {
        return res.status(500).json({error: err.response.data.error.message});
      });

  return res.status(200).json({event: docs.data.fields});
};
