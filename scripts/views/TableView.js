define([
	'jquery',
	'lodash',
	'handlebars',
	'backbone',
	'text!components/table/scripts/templates/tabletpl.js'
], function($, _, Handlebars, Backbone, TableTpl) {
	return Backbone.View.extend({

		className: "table",

		initialize: function() {

		},

		render: function() {
			var template = Handlebars.compile(TableTpl);
			this.$el.html( template(this.model.toJSON()) );
			return this;
		}

	});
});
