var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
       var set = line.split('');
       var f = set[0],
           b = set[1],
           max = set[2];
        var fb = '';

        for(var i=1;i<=max;i++){

            if(i % f == 0 && i % b == 0){
                fb += 'FB';
            }
            else if(i % f == 0){
                fb += 'F';
            }
            else if(i % b == 0){
                fb += 'B';
            }
            else {
               fb += i;
            }

            if(i<max){
               fb += ' ';
            }else{
               fb += '\n';
            }

        }
        process.stdout.write(fb);
    }
});

//something is wrong but what? test on node server at work.