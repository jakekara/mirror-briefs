import { json } from "d3-fetch";

const CATEGORY_ID=39891,	// budget and economy
      STORY_COUNT=10,
      POST_TYPE="brief",
      ENDPOINT="https://ctmirror.org/wp-json/wp/v2/";

function categoryUrl(id, endpoint){

    var id = id || CATEGORY_ID,
	endpoint = endpoint || ENDPOINT;
    
    return ENDPOINT + "categories/" + id + "/";
}

function postsUrl(id, endpoint){

    var id = id || CATEGORY_ID,
	endpoint = endpoint || ENDPOINT;

    return ENDPOINT + "posts?"
    // + "categories=" + id
	+ "&per_page=" + STORY_COUNT
	// + "&type=" + POST_TYPE;
}


function getPosts(id, endpoint){
    return json(postsUrl(id, endpoint));
}


export { getPosts };
