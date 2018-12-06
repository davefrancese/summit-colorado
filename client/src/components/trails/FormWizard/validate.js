const validate = values => {
  const errors = {};
  if (!values.peakName) {
    errors.peakName = "Required";
  }
  if (!values.description) {
    errors.description = "Required";
  }
  if (!values.elevation) {
    errors.elevation = "Required";
  }
  if (!values.elevationGain) {
    errors.elevationGain = "Required";
  }
  if (!values.totalHikeDistance) {
    errors.totalHikeDistance = "Required";
  }
  if (!values.hikeInDistance) {
    errors.hikeInDistance = "Required";
  }
  if (!values.isLoop) {
    errors.isLoop = "Required";
  }
  if (!values.difficulty) {
    errors.difficulty = "Required";
  }
  if (!values.trailHead_lat) {
    errors.trailHead_lat = "Required";
  }
  if (!values.trailHead_lng) {
    errors.trailHead_lng = "Required";
  }
  if (!values.parkingRestrictions) {
    errors.parkingRestrictions = "Required";
  }
  if (!values.petRestrictions) {
    errors.petRestrictions = "Required";
  }
  if (!values.campingRestrictions) {
    errors.campingRestrictions = "Required";
  }
  if (!values.licenseRequired) {
    errors.licenseRequired = "Required";
  }
  return errors;
};

export default validate;
