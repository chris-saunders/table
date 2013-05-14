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
			var self = this;
			this.model.on('change', function() {
				self.render();
			});
			this.template = this.options.template || TableTpl;
			this.template = Handlebars.compile(this.template);
		},

		render: function() {
			this.$el.html( this.template(this.model.toJSON()) );
			return this;
		}

	});
});
