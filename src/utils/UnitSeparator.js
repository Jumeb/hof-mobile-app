const FormatUnits = (number) => {
  const abbrev = ['', 'k', 'm', 'b', 't'];
  let tier = (Math.log10(Math.abs(number)) / 3) | 0;
  if (tier === 0) {
    return number;
  }
  let suffix = abbrev[tier];
  let scale = Math.pow(10, tier * 3);
  let scaled = number / scale;
  return scaled.toFixed(1) + suffix;
};

export default FormatUnits;
