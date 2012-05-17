define([
	'libs/backbone',
	'models/my_model'
], function(Backbone, MyModel){
	var MyModels = Backbone.Collection.extend({
		model: MyModel
	});
	return MyModels;
});