<table>
	{{#if columnTitles}}
		<tr class="columnTitles">
		{{#each columnTitles}}
			<th>{{this.value}}</th>
		{{/each}}
		</tr>
	{{/if}}
	{{#each rows}}
		<tr class="rows">
			{{#each this}}
				<td>{{this}}</td>
			{{/each}}
		</tr>
	{{/each}}
</table>