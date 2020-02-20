// Assign data from data.js to a variable
var tableData = data;

// Select the table body and save to a variable
var tbody = d3.select("tbody");

// Loop through array of JavaScript objects and add a new row of data for each UFO sighting
tableData.forEach((UFOsighting) => {
	var row = tbody.append("tr");
		
	Object.values(UFOsighting).forEach((value) => {
		row.append("td").text(value);
	});
	
});

// Add city input element, add label, update attributes
var city = d3.select("#filters").append("li");
	city.attr("class", "filter list-group-item");
	
var	city_label = city.append("label");
	city_label.text("Enter a City");
	city_label.attr("for", "city");
	
var city_input = city.append("input");
	city_input.attr("class", "form-control");
	city_input.attr("id", "city");
	city_input.attr("type", "text");
	city_input.attr("placeholder", "benton");

// Add state input element, add label, update attributes
var state = d3.select("#filters").append("li");
	state.attr("class", "filter list-group-item");
	
var	state_label = state.append("label");
	state_label.text("Enter a State");
	state_label.attr("for", "state");
	
var state_input = state.append("input");
	state_input.attr("class", "form-control");
	state_input.attr("id", "state");
	state_input.attr("type", "text");
	state_input.attr("placeholder", "ar");

// Add country input element, add label, update attributes
var country = d3.select("#filters").append("li");
	country.attr("class", "filter list-group-item");
	
var	country_label = country.append("label");
	country_label.text("Enter a Country");
	country_label.attr("for", "country");
	
var country_input = country.append("input");
	country_input.attr("class", "form-control");
	country_input.attr("id", "country");
	country_input.attr("type", "text");
	country_input.attr("placeholder", "us");

// Add shape input element, add label, update attributes
var shape = d3.select("#filters").append("li");
	shape.attr("class", "filter list-group-item");
	
var	shape_label = shape.append("label");
	shape_label.text("Enter a Shape");
	shape_label.attr("for", "shape");
	
var shape_input = shape.append("input");
	shape_input.attr("class", "form-control");
	shape_input.attr("id", "shape");
	shape_input.attr("type", "text");
	shape_input.attr("placeholder", "circle");

// Select datetime input element and update placeholder
var datetime_input = d3.select("#datetime");
	datetime_input.attr("placeholder", "1/1/2010");

// Select the filter table button
var button = d3.select("#filter-btn");

// Complete the click handler for the form
button.on("click", function() {

	// Get the value property of the input elements for
		// datetime, city, state, country, and shape
	var datetime_inputValue = datetime_input.property("value");
	var city_inputValue = city_input.property("value");
	var state_inputValue = state_input.property("value");
	var country_inputValue = country_input.property("value");
	var shape_inputValue = shape_input.property("value");	
	
	// Filter the data by the non-null datetime, city, state, country, and shape form input
	if (datetime_inputValue) {
		var filtered_data_1 = tableData.filter(UFOsighting => 
		UFOsighting.datetime == datetime_inputValue)}
	else {filtered_data_1 = tableData};
	
	if (city_inputValue) {
		var filtered_data_2 = filtered_data_1.filter(UFOsighting => 
		UFOsighting.city == city_inputValue)}
	else {filtered_data_2 = filtered_data_1};

	if (state_inputValue) {
		var filtered_data_3 = filtered_data_2.filter(UFOsighting => 
		UFOsighting.state == state_inputValue)}
	else {filtered_data_3 = filtered_data_2};
	
	if (country_inputValue) {
		var filtered_data_4 = filtered_data_3.filter(UFOsighting => 
		UFOsighting.country == country_inputValue)}
	else {filtered_data_4 = filtered_data_3};
	
	if (shape_inputValue) {
		var filtered_data_5 = filtered_data_4.filter(UFOsighting => 
		UFOsighting.shape == shape_inputValue)}
	else {filtered_data_5 = filtered_data_4};
	
	// Clear data from table
	tbody.html("");
	
	// Loop through filtered array of JavaScript objects and add a new row of data for each UFO sighting
	filtered_data_5.forEach((UFOsighting) => {
	var row = tbody.append("tr");
		
		Object.values(UFOsighting).forEach((value) => {
			row.append("td").text(value);
		});
	
	});
		
});