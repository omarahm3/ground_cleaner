var fs = require( 'fs' )
var path = require( 'path' )
var process = require( "process" )
var dir = require('node-dir')


/* PUT THE PATH OF THE INFECTED FOLDER BETWEEN " " DOWN HERE */
/* -----> */ var INPUT_DIR = "L:/STUDY" /* <------ */
/* PUT THE PATH OF THE INFECTED FOLDER BETWEEN " " ^UP HERE*/

if (INPUT_DIR === "PUT_PATH_HERE"){
	console.log('Please open script.js file and put the path to the infected folder on line (11) between the "" (  "PUT_PATH_HERE"  )')
	return;
}

var logger = fs.createWriteStream('log.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})


dir.files(INPUT_DIR, function(err, files) {
	if (err) {
		console.error('\n(-)Error happened while traversing a folder, probably it is not permitted\n')
		throw err
	}

	files.map(function(value, key) {
		var file_path = value
		value = value.split('\\')
		var completeFileName = value[value.length-1]
		var file_ext = completeFileName.split('.')[1]
		var file_name = completeFileName.split('.')[0]

		if ( ( file_ext == 'exe' || file_ext == 'ico'  ) && file_name[0] === 'g') {
			
			fs.stat(file_path, function (err, stat) {
				if (err) {
					console.error(err)
				}

				var cuttedPath = file_path.substring(0, file_path.indexOf(completeFileName))
				var newFile = path.join(cuttedPath, completeFileName.substr(1))

				fs.rename(file_path,newFile, function(err) {
					if (err)
						console.log("error while cleaninig files", err)
					else {
						console.log('----------------')
						// logger.write('----------------\r\n')
						logger.write('Infected: ' + file_path + '\r\n')
						console.log(file_path)
						logger.write('Cleaned: ' + newFile + '\r\n')
						console.log(newFile)
						logger.write('----------------' + '\r\n')
						console.log('----------------')
						logger.write('(+) file cleaned successfully\r\n\r\n')
						console.info("(+) file cleaned successfully\r\n")
						
					}
				})
			})
		}
	})
})
