const exec = require('child_process').exec;

exec('git rev-parse HEAD', function(err, stdout) {
    console.log('latest hash:', stdout.trim());
});
