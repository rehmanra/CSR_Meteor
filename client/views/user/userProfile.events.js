Template.userPreferencesStats.events({
	"click #savepreferences" : function(event, template){
		//create JSON object to store in the user's profile JSON object
		user_preferences = {}
		user_preferences.show_context_help = $('#showcontexthelp:checked').val() === 'on'
		user_preferences.selectedResultPerPageScenarios = $('#resultsPerPageScenarios').val()

		//only for verification purposes
		// console.log(user_preferences);

		//call saveUserProfile with the preferences
		affectedRows = Meteor.call('updateUserProfilePreferences', user_preferences);

	}
});

Template.userDataTemplate.events({
	"click #saveprofile": function (event, template) {
		let userid = template.data._id;
		//create JSON object to store in the user's profile JSON object
		let roles = [$('#selectedRole').val()];
		//call saveUserProfile with updated role
		affectedRows = Meteor.call('updateUserProfile', userid, roles);
	}
});

Template.userDataTemplate.onRendered(function () {
	let roles = this.data.roles;
	Array.from(this.find('#selectedRole').options).forEach(function (element) {
		element.selected = roles.includes(element.value);
	});
});
