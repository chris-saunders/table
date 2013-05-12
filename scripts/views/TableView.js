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
			if (!this.rowHeaders) this.rowHeaders = [];
		},

		render: function() {
			var template = Handlebars.compile(TableTpl);
			var data = {};
			data.rows = this.collection.toJSON()
			this.$el.html( template({ rows: this.collection.toJSON() }) );
			return this;
		}

	});
});
