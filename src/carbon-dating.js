const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
    let t;
if ((typeof(sampleActivity)!== 'string') || (isNaN(sampleActivity)) || (sampleActivity.length = 0) ||
  (sampleActivity <= 0) || (sampleActivity > MODERN_ACTIVITY)) {
  return false;
  }
else {
 t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.LN2 / HALF_LIFE_PERIOD));
}
return t;
}

module.exports = {
  dateSample
};
/*const a = dateSample('1')
 console.log(a);*/
