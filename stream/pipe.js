// 就像可以把两个水管串成一个更长的水管一样，两个流也可以串起来。一个Readable流和一个Writable流串起来后，所有的数据自动从Readable流进入Writable流，这种操作叫pipe。

'use strict';

const fs = require('fs');

let rs = fs.createReadStream('sample.txt');
let ws = fs.createWriteStream('copy.txt');

rs.pipe(ws)