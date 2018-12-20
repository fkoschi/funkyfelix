const boxen = require('boxen');

const _c = require('util').inspect.colors;
Object.keys(_c).forEach(c =>global[c] = s =>`\x1b[${_c[c][0]}m${s}\x1b[${_c[c][1]}m`);

const lines = [
  bold("Felix Koschmidder"),
  "Frontend Engineer",
  "",
  bold("       Web: ") + blue("http://fkoschi.me"),
  bold("    GitHub: ") + blue("https://github.com/funkyfelix"),
  bold("  LinkedIn: ") + blue("https://linkedin.com/in/felix-koschmidder")
];

const message = lines.join("\n");

const box = boxen(message, {
  borderColor: 'red',
  borderStyle: 'round',
  margin: 1,
  padding: 1
});

process.stdout.write(box + "\n");