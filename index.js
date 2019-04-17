function getSum() {
  var ar = [].concat.apply([], arguments);

  return ar.reduce((ac, val) => {
    var currentValue = +val;
    return Number.isNaN(currentValue) ? ac : ac + currentValue;
  }, 0);
}

function formatNumberSafely(sum) {
  return Number.isNaN(sum) ? sum : sum.toFixed(2);
}


module.exports = {
  formatNumberSafely,
  getSum,
};
