const path = require('path');
const glob = require('glob');

function getEntry(globPath) {
  let entries = {},basename,temp,pathname;
  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry,path.extname());
    temp = entry.split('/').splice(-3);
    console.log('splice(-3) is'+temp);
    pathname = temp.splice(0,1)+'/'+ basename;
    entries[pathname] = entry;
  });
  console.log(entries);
  return entries;
}
module.exports = getEntry;
