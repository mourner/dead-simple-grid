Dead Simple Grid
================

Dead Simple Grid is a responsive CSS grid micro framework by [Vladimir Agafonkin](http://agafonkin.com/en) (creator of [Leaflet](http://leafletjs.com)) that is just that. Dead simple. It's the Malevich's Black Square of CSS grid grameworks.

 * tiny (about 250 bytes of CSS), no dependencies
 * only two classes (`row` and `col`)
 * fluid columns with fixed gutters
 * infinite nesting
 * incredibly flexible (use any column ratios and media query breakpoints)

It also embraces concepts of progressive enhancement and mobile first design, serving one-column mobile layout to older browsers (IE6-8).

[Dead Simple Grid Demo](http://mourner.github.com/dead-simple-grid)

## Basic Example

```html
<div class="row">
	<div class="col sidebar">
		...
	</div>
	<div class="col content">
		...
	</div>
</div>
```

```css
@media only screen and (min-width: 30em) {
	.content { width: 66.66%; }
	.sidebar { width: 33.33%; }
}
```
