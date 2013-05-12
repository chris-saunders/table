define([
	'jquery',
	'lodash',
	'backbone'
], function($, _, Backbone, TableTpl) {
	return Backbone.Model.extend({

		defaults: {
			title: "",
			columnTitles: {},
			rows: []
		},

		initialize: function() {
		},

		validate: function(attrs) {
			
			if (! _.isObject(attrs.columnTitles)) {
				return "Column titles must be a key:value object";
			}

			if (! _.isArray(attrs.rows)) {
				return "Rows must be an array of objects";
			}

			if (_.isEmpty(attrs.columnTitles) && _.isEmpty(attrs.rows)) {
				return "Must provide either column titles or rows"
			}
		},

		set: function(attributes, options) {
			options = options || {};
			options.validate = true;

			return Backbone.Model.prototype.set.call(this, attributes, options);
		}

	});
});
