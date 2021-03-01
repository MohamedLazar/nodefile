    var target = document.body; 
     
    function recurseItem(item,sub) { 
    	if(item.isFile) { 
    		console.log(sub+item.name); 
    	} else { 
    		let reader = item.createReader(); 
    		reader.readEntries(entries=>{ 
    			for(var entry of entries) 
    				recurseItem(entry,sub+item.name+"/"); 
    		},err=>{ 
    			throw err; 
    		}); 
    	} 
    } 
     
    target.ondragover = function(evt) { 
    	evt.preventDefault(); 
    } 
    target.ondrop = function(evt) { 
    	evt.preventDefault(); 
     
    	var items = evt.dataTransfer.items; 
    	for(var i=0; i<items.length; i++) { 
    		let entry = items[i].webkitGetAsEntry(); // only for Webkit 
    												 // though apparently 
    												 // FF has it too 
    		if(entry) recurseItem(entry,'/'); 
    	} 
    } 
