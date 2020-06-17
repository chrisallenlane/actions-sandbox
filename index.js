const exec = require('child_process').exec;

exec('git rev-parse HEAD', function(err, stdout) {
  console.log('latest hash:\t', stdout.trim());

  exec('git describe', function(err, stdout) {
    console.log('latest release:\t', stdout.trim());
  });
});
