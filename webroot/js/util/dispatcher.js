define([
	'libs/underscore',
	'libs/backbone'
], function(_, Backbone){
	function Dispatcher() {}
	_.extend(Dispatcher.prototype, Backbone.Events, {
		broadcast: function(obj, event) {
			obj.bind(event, function() {
				var args = Array.prototype.slice.call(arguments, 0);
				args.unshift(event);
				this.trigger.apply(this, args);
			}, this);
		}
	});
	return new Dispatcher();
});