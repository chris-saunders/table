<table>
	{{#if rowHeaders}}
		<tr>
		{{#each rowHeaders}}
			<th>{{this}}</th>
		{{/each}}
		</tr>
	{{/if}}
	{{#each rows}}
		<tr>
			{{#each this}}
				<td>{{this}}</td>
			{{/each}}
		</tr>
	{{/each}}
</table>