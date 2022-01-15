const momentMod = require('moment')

function stampThisHour (step) {
  let from = momentMod().startOf("hour")
  let timestamp = []
  let count = 60 / step

  timestamp.push(from.format("YYYY-MM-DD HH:mm:00"))
  for (let i = 0; i < count; i++) {
    timestamp.push(from.add(step, "minutes").format("YYYY-MM-DD HH:mm:00"))
  }

  return timestamp
}

function stampLast1Hour (step) {
  let from = momentMod().subtract(1, "hour")
  let timestamp = []
  let count = 60 / step

  timestamp.push(from.format("YYYY-MM-DD HH:mm:00"))
  for (let i = 0; i < count; i++) {
    timestamp.push(from.add(step, "minutes").format("YYYY-MM-DD HH:mm:00"))
  }

  return timestamp
}

function stampBeforeDays (daysBefore, daysNum) {
  let talBefore = daysBefore + daysNum
  let from = momentMod().subtract(talBefore, "days")
  let timestamp = []

  timestamp.push(from.format("YYYY-MM-DD"))
  for (let i = 1; i < daysNum; i++) {
    timestamp.push(from.add(1, "days").format("YYYY-MM-DD"))
  }

  return timestamp
}

function stampBeforeHours (hoursBefore, hoursNum) {
  let talBefore = hoursBefore + hoursNum
  let from = momentMod().subtract(talBefore, "hours")
  let timestamp = []

  timestamp.push(from.format("YYYY-MM-DD HH"))
  for (let i = 1; i < hoursNum; i++) {
    timestamp.push(from.add(1, "hours").format("YYYY-MM-DD HH"))
  }

  return timestamp
}

function stampYesterday () {
  let nCurHour = (new Date()).getHours()
  return stampBeforeHours(Number(nCurHour), 24)
}

function lastHours (hours) {
  let from = momentMod().subtract(hours, "hours")
  let timestamp = []

  for (let i = 0; i < hours; i++) {
    timestamp.push(from.add(1, "hours").format("YYYY-MM-DD HH:00:00"))
  }

  return timestamp
}

function lastMinutes (mins) {
  let from = momentMod().subtract(mins, "minutes")
  let timestamp = []

  for (let i = 0; i < mins; i++) {
    timestamp.push(from.add(1, "minutes").format("YYYY-MM-DD HH:mm:00"))
  }

  return timestamp
}

function getCurTime () {
  let a = momentMod()
  let b = momentMod.utc()

  return ({
    localTime: a.format(),
    localTimestamp: a.valueOf(),
    UTCTime: b.format(),
    UTCTimestamp: b.valueOf()
  })
}

module.exports = {
  stampThisHour,
  stampLast1Hour,
  stampBeforeDays,
  stampBeforeHours,
  stampYesterday,
  lastHours,
  lastMinutes,
  getCurTime
}
