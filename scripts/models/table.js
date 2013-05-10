define([
	'jquery',
	'lodash',
	'backbone'
], function($, _, Backbone, TableTpl) {
	return Backbone.Model.extend({

		defaults: {
			title: "",
			columnTitles: {},
			data: []
		},

		initialize: function() {
		},

		validate: function(attrs) {
			
			if (! _.isPlainObject(attrs.columnTitles)) {
				return "Column titles must be a key:value object";
			}
		}

	});
});
