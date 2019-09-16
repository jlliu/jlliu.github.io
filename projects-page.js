var client = contentful.createClient({
  space: 't9p4c9x03bar',
  accessToken: '13f8aeca80c777b1e2991e2cfe37175daba1fd946552e12e57bb93097c221bc4'
})

	var projPreview = Vue.component('proj-preview', {
		props: ['slug','title','photo-url'],
		template: '<a class="third"><h2>{{title}}</h2><h4>Henlo</h4></a>'
	   
	});

Vue.component('projectpage-nav', {
	props:[],
  template: 	'<div class="links nav is-sticky" id="navbar">'+
		'<div class="nav-wrapper">'+
		'<a class="nav-name" href="/"></i> jackie liu</a> '+
		'<span id="nav-portfolioPageTitle">->  All Projects</span>'+
		// '<ul class="nav-pagination"></ul>
		'</div></div>'
});


// Vue.component('project-element',{
// 	props:["proj-entry"],
// 	template: 

// 			"<a target='_blank' v-if='projEntry.fields.slug.includes("http")'>"+

// 			"</a>"

// });



var gallery = new Vue({
	  el: '#projectContainer',
	  data: {
	  	sectionTitle: 'All projects',
	    projectLinks: [
	    ],
	    lastUpdated: "",
		sortedProjects: [],
	    methods: {
		    sortProjects: function(allProjects) {
		        allProjects.sort( ( a, b) => {
		            return new Date(b.fields.dateCreated) -  new Date(a.fields.dateCreated);
		        });
		        return allProjects;
		    }
		}
	  },
	  components:{
	  	projEntry: projPreview
	  }
	});




var populate = function(entryId){
	client.getEntry(entryId)
	.then(function (entry) {
		gallery.projectLinks = entry.fields.projectLink;
		gallery.sectionTitle= entry.fields.pageTitle;;
		var lastUpdatedDate = moment(entry.sys.updatedAt).format("M D Y");
		var lastUpdatedDateFormatted = lastUpdatedDate.replace(/ /g," &middot; ")
		gallery.lastUpdated = lastUpdatedDateFormatted;
		gallery.sortedProjects = gallery.methods.sortProjects(gallery.projectLinks);
		$(".project-page").delay(1000).css("opacity","1");
		window.sr = new ScrollReveal();
		window.sr.reveal('.scroll-reveal',{ duration: 700, scale:.94 });
		// window.fadeIn(1000);
		
	});
	
};




