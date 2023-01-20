const { google } = require("googleapis");

const calendarId = "Enter your calendar id";

function getBusy(timeMin, timeMax) {
  const calendar = google.calendar({ version: "v3" });
  calendar.freebusy.query(
    {
      auth: "",
      calendarId: calendarId,
      timeMin,
      timeMax,
    },
    (err, res) => {
      if (err) {
        return -1;
      }
      const busyIntervals = res.data.calendars[calendarId].busy;
      return busyIntervals;
    }
  );
}

const weekAgo = new Date(Date.now() - 6048e5)
const now = new Date()
const timeMin = weekAgo.toISOString()
const timeMax = now.toISOString()

const busyIntervals = getBusy(timeMin, timeMax);