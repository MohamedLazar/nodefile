    const fs = require('fs'); 
     
    var directory = '.'; 
     
    fs.readdir(directory, (err, files) => { 
    	if(err) { 
    		// handle error; e.g., folder didn't exist 
    	} 
    	// 'files' is an array of the files found in the directory 
    }); 
