

	function populatePage(entryId){
		console.log('populate page');

		var client = contentful.createClient({
		  space: 't9p4c9x03bar',
		  accessToken: '13f8aeca80c777b1e2991e2cfe37175daba1fd946552e12e57bb93097c221bc4'
		})


		client.getEntry(entryId)
		.then(function (entry) {
			var workTitle = entry.fields.workTitle;
			var workType = entry.fields.workType;
			var doneFor = entry.fields.doneFor;
			var toolsUsed = entry.fields.toolsUsed;
			var timePeriod = entry.fields.timePeriod;
			var description = marked(entry.fields.description);
			var subheading = entry.fields.subheading;


			var lastUpdatedDate = moment(entry.sys.updatedAt).format("M D Y");
			var lastUpdatedDateFormatted = lastUpdatedDate.replace(/ /g," &middot; ")


		  	$("#doneFor").html(doneFor);
		  	$("#workType").html(workType);
		  	$("#timePeriod").html(timePeriod);
		  	$("#toolsUsed").html(toolsUsed);
			$(".title").html(workTitle);
			$(".description").html(description);
			$(".heading-subheading").html(subheading);

			$("#lastUpdated").html(lastUpdatedDateFormatted);


			//Then reveal page once everything loaded
			$(".work-page").css("opacity","1");
			window.sr = new ScrollReveal();
			window.sr.reveal('.scroll-reveal',{ duration: 700, scale:.94 });
			
		})


	};




