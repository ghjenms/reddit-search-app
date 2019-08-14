export default {
	search: function(searchTerm, sortBy, searchLimit) {
		return fetch(`https://cors-anywhere.herokuapp.com/http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`)
		.then(res => res.json())
		.then(data => {
			return data.data.children.map(data => data.data);
		})
		.catch(err => console.log(err));
	}
};