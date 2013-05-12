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

			if (! _.isArray(attrs.data)) {
				return "Data must be an array of objects";
			}

			if (_.isEmpty(attrs.columnTitles) && _.isEmpty(attrs.data)) {
				return "Must provide either column titles or data"
			}
		},

		set: function(attributes, options) {
			options = options || {};
			options.validate = true;

			return Backbone.Model.prototype.set.call(this, attributes, options);
		}

	});
});
