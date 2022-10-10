const common = [
  '--require ./features/**/*.ts',
  '--require-module ts-node/register',
  // '--format json:./report.json',
].join(' ')

module.exports = {
  default: common,
}
