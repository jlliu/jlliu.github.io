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
	
Vue.component('work-summary', {
  props: ["dontusecoverphoto","worktype", "donefor", "toolsused", "externallink", "linktext", "coverphoto", "githublinkimg","externallinkimg"],


template: '<div><img v-if=!(dontusecoverphoto) id="coverPhoto" src=coverphoto class="three-fourth-center box-shadow scroll-reveal">' +
		'<div class= "grid-container center-align details"> ' +
			'<div class="fourth ">' +
				'<h4>work in</h4><p v-html=worktype></p></div>'+
			'<div class="fourth">'+
				'<h4>done for</h4><p v-html=donefor></p></div>'+
			'<div class="fourth">'+
			'<h4>using</h4><p v-html=toolsused></p></div>'+
			'<div class="fourth">'+
			'<h4><a target="_blank" href=link>{{linktext}}<br>'+
			'<div v-if=githublinkimg><img  src="/img/githublogo.png"></div>'+
			'<div v-if=externallinkimg><img  src="/img/interactiveicon.png"></div>'+
			'</a></h4>'+
			'</div>'+
		'</div></div>'
});



Vue.component('workpage-nav', {
  props: ["work", 'subpage'],
  template: 	'<div class="links nav is-sticky" id="navbar">'+
		'<div class="nav-wrapper">'+
		'<a class="nav-name" href="/"></i> jackie liu</a> '+
		'<span  id="nav-portfolioPageTitle">-><a style="color:black!important" href="/projects">All Projects</a>-> <span v-html=work></span></span>'+
		'<ul class="nav-pagination"></ul></div>'+
		'</div>'
});

		// '<span class="hide-for-mobile" v-if="subpages.length > 0" id="nav-portfolioPageTitle">-><a style="color:black!important" href="/projects">All Projects</a>-> <span v-html=work></span></span>'+


var projectPage = new Vue({
	  el: '#work-page-wrapper',
	  data: {
	  	sectionTitle: "",
	    lastUpdated: "",
	    workTitle: "",
	    workType:"",
	    doneFor: "",
	    toolsUsed:"",
	    timePeriod:"",
	    description:"",
	    subheading:"",
	    subpagesList:[],
	    descriptionContents: "",
	    hasSubpage: false
	  }
	});


function populatePage(entryId){


	console.log('populate page');

	var client = contentful.createClient({
	  space: 't9p4c9x03bar',
	  accessToken: '13f8aeca80c777b1e2991e2cfe37175daba1fd946552e12e57bb93097c221bc4'
	})


	client.getEntry(entryId)
	.then(function (entry) {

		projectPage.workTitle = entry.fields.workTitle;
		projectPage.workType = entry.fields.workType;
		projectPage.doneFor = entry.fields.doneFor;
		projectPage.toolsUsed = entry.fields.toolsUsed;
		projectPage.timePeriod = entry.fields.timePeriod;
		projectPage.description = marked(entry.fields.description);
		projectPage.subheading = entry.fields.subheading;
		projectPage.subpagesList = entry.fields.subpages;

		if (entry.fields.coverphoto){
			var coverphoto = entry.fields.coverphoto.fields.file.url;
			$("#coverPhoto").attr("src",coverphoto);
		}


		function loadMainPage(){
			projectPage.descriptionContents = projectPage.description;
			
		}

		function loadSubpage(subpageId){
			var subpageDetail = subPages[subpageId];
			projectPage.descriptionContents = subpageDetail;
		}


		//Check if the page has multiple subpages, then build page accordingly
		if (projectPage.subpagesList){
			hasSubpage = true;
			var currentSubpageTitle = entry.fields.thisSubpageName;
			var firstTab = makeSubpageElement(currentSubpageTitle,"default");
			$(".nav-pagination").append(firstTab);
			$(".nav-pagination li").addClass("active");

			var urlSplit = document.URL.split("#");
			var thisURLisSubpage = urlSplit[1];

			//Store the subpage descriptions, keyed by IDs
			var subPages = {};
			for (var i=0;i<projectPage.subpagesList.length;i++){
				var subpageTitle = projectPage.subpagesList[i].fields.subpageTitle;
				var subpageID = projectPage.subpagesList[i].sys.id;
				var element = makeSubpageElement(subpageTitle,subpageID);
				$(".nav-pagination").append(element);
				subPages[subpageID] = marked(projectPage.subpagesList[i].fields.subpageDetail);

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

		// $("#nav-portfolioPageTitle").html(projectPage.workTitle.replace("<br>"," "));


		var lastUpdatedDate = moment(entry.sys.updatedAt).format("M D Y");
		var lastUpdatedDateFormatted = lastUpdatedDate.replace(/ /g," &middot; ")
		$("#lastUpdated").html(lastUpdatedDateFormatted);
		projectPage.lastUpdated = lastUpdatedDateFormatted;

		//Then reveal page once everything loaded
		$(".work-page").css("opacity","1");
		window.sr = new ScrollReveal();
		window.sr.reveal('.scroll-reveal',{ duration: 700, scale:.94 });

		// console.log(projectPage.subpagesList.length);
		
	})


};

