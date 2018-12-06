const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");

const Trail = mongoose.model("trails");

module.exports = app => {
  app.post("/api/trails", requireLogin, async (req, res) => {
    console.log("REQUEST=", req);
    const {
      peakName,
      trailHead_lat,
      trailHead_lng,
      parkingRestrictions,
      petRestrictions,
      campingRestrictions,
      licenseRequired,
      description,
      difficulty,
      elevation,
      elevationGain,
      isLoop,
      hikeInDistance,
      totalHikeDistance
    } = req.body;

    const trail = new Trail({
      peakName,
      trailHead_lat,
      trailHead_lng,
      parkingRestrictions,
      petRestrictions,
      campingRestrictions,
      licenseRequired,
      description,
      difficulty,
      elevation,
      elevationGain,
      isLoop,
      hikeInDistance,
      totalHikeDistance
    });

    try {
      await trail.save();
      res.send(trail);
    } catch {
      res.send(err);
      res.status(422).send(err);
    }
  });

  app.get("/api/trails", requireLogin, async (req, res) => {
    const trails = await Trail.find();
    res.send(trails);
  });
};
