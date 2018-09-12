
	console.log("this is external script");

	function populatePage(entryId){
		console.log('populate page');

		var client = contentful.createClient({
		  space: 't9p4c9x03bar',
		  accessToken: '13f8aeca80c777b1e2991e2cfe37175daba1fd946552e12e57bb93097c221bc4'
		})


		client.getEntry(entryId)
		.then(function (entry) {
		  // logs the entry metadata
		  console.log(entry.sys)

		  // logs the field with ID title
		  console.log(entry.fields.workTitle);
		  console.log(entry.fields.description);

		  var workTitle = entry.fields.workTitle;
		  var workType = entry.fields.workType;
		  var doneFor = entry.fields.doneFor;
		  var toolsUsed = entry.fields.toolsUsed;
		  var timePeriod = entry.fields.timePeriod;

		  console.log([workTitle,workType,doneFor,toolsUsed,timePeriod]);

		  var description = marked(entry.fields.description);


		  	$("#doneFor").html(doneFor);
		  	$("#workType").html(workType);
		  	$("#timePeriod").html(timePeriod);
		  	$("#toolsUsed").html(toolsUsed);
			$(".title").html(workTitle);
			$(".description").html(description);

		})


		
	};




