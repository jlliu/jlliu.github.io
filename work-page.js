function makeSubpageElement(subpageName, subpageID){
	var newLI = document.createElement("LI");
	var newA =  document.createElement("a");
	$(newA).html(subpageName)
	if (subpageID !== "default"){
		$(newA).attr("href","#"+subpageName.replace(" ","-"));
	} else{
		$(newA).attr("href","#");
	}
	
	$(newLI).addClass("subpage subpageName");
	$(newLI).attr("subpageID",subpageID);
	newLI.appendChild(newA);
	return newLI;
}



var pageInitiallyPopulated = false;
	

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
			var subpagesList = entry.fields.subpages;




			if (entry.fields.coverphoto){
				var coverphoto = entry.fields.coverphoto.fields.file.url;
				$("#coverPhoto").attr("src",coverphoto);
			}


			function loadMainPage(){
				$(".description").html(description);
			  	$("#doneFor").html(doneFor);
			  	$("#workType").html(workType);
			  	$("#timePeriod").html(timePeriod);
			  	$("#toolsUsed").html(toolsUsed);
				$(".title").html(workTitle);
				$(".heading-subheading").html(subheading);
				$("#coverPhoto").attr("src",coverphoto);
				
			}

			function loadSubpage(subpageId){
				var subpageDetail = subPages[subpageId];
				$(".description").html(subpageDetail);
			}


			//Check if the page has multiple subpages, then build page accordingly
			if (subpagesList){
				var currentSubpageTitle = entry.fields.thisSubpageName;
				var firstTab = makeSubpageElement(currentSubpageTitle,"default");
				$(".nav-pagination").append(firstTab);
				$(".nav-pagination li").addClass("active");


				var urlSplit = document.URL.split("#");
				var thisURLisSubpage = urlSplit[1];

				//Store the subpage descriptions, keyed by IDs
				var subPages = {};
				for (var i=0;i<subpagesList.length;i++){
					console.log(subpagesList[i]);
					var subpageTitle = subpagesList[i].fields.subpageTitle;
					var subpageID = subpagesList[i].sys.id;
					var element = makeSubpageElement(subpageTitle,subpageID);
					$(".nav-pagination").append(element);
					console.log(subpagesList[i].fields.subpageDetail);
					subPages[subpageID] = marked(subpagesList[i].fields.subpageDetail);
					//First check if we actually need to default to this subpage according to URL!

					if (thisURLisSubpage){
						loadSubpage(subpageID);
						$(".subpage").removeClass("active");
						$(element).addClass("active");
						pageInitiallyPopulated = true;
					}
				}

				$(".subpage").click(function(e){
					var subpageId = e.currentTarget.attributes.subpageid.value;
					$(".subpage").removeClass("active");
					$(e.currentTarget).addClass("active");
					if (subpageId == "default"){
						loadMainPage();
					} else {
						loadSubpage(subpageId);
					}
				});

			}
			
			if (!pageInitiallyPopulated){
				loadMainPage();
			}

			$("#nav-portfolioPageTitle").html(workTitle.replace("<br>"," "));
			var lastUpdatedDate = moment(entry.sys.updatedAt).format("M D Y");
			var lastUpdatedDateFormatted = lastUpdatedDate.replace(/ /g," &middot; ")


			$("#lastUpdated").html(lastUpdatedDateFormatted);

			//Then reveal page once everything loaded
			$(".work-page").css("opacity","1");
			window.sr = new ScrollReveal();
			window.sr.reveal('.scroll-reveal',{ duration: 700, scale:.94 });
			
		})


	};


//Click events for 

