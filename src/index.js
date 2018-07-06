import * as d3 from "d3";
import { dateline } from "./dateline.js";
import { getPosts } from "./wp-posts.js";


function addStoryList(container, d){

    var storyList = container.append("div");

    var links = storyList.selectAll(".newsbrief-story")
    	.data(d)
    	.enter()
    	.append("a")
    	.attr("href", d => d.link)
    	.attr("target","_blank")

    var stories = links.append("div")
    	.classed("newsbrief-story", true)

    var headlines = stories.append("span")
    	.classed("newsbrief-headline", true)
    	.html( d => d.title.rendered);

    // var datelines = stories.append("div")
    // 	.classed("newsbrief-dateline", true)
    // 	.html(d => dateline(new Date(d.date)));
    
}



function main(d){

    // render the list of stories
    var container = d3.select("#newsbrief-container").html("");

    var title = container.append("h3")
	.classed("newsbrief-header", true)
	.text("News briefs");

    var dateList = [];

    d.forEach(function(d){
	var dt = dateline(new Date(d.date));
	if (dateList.includes(dt)) return;
	dateList.push(dt);
    });

    var datelist = container.append("div")
	.classed("newsbrief-dategroup-container", true);
    
    var dategroups = datelist.selectAll(".newsbrief-dategroup")
	.data(dateList)
	.enter()
	.append("div")
	.classed("newsbrief-dategroup", true);

    var datebreaks = dategroups.append("div")
	.classed("newsbrief-datebreak", true)
	.text(d => d);

    dategroups.each(function(dtstr){
	addStoryList(d3.select(this),
		     d.filter(function(a){
			 return dateline(new Date(a.date)) === dtstr;
		     }));
    });

    var footer= container.append("div")
	.classed("newsbrief-footer", true)
	.classed("read-more", true)
	.append("a")
	.attr("href", "https://ctmirror.org/category/politics/")
	.attr("target","_blank")
	.text("More briefs")

};


// d3.json(postsUrl())
getPosts()
    .then(main);
