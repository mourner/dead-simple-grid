Dead Simple Grid
================

Dead Simple Grid is a responsive CSS grid micro framework by [Vladimir Agafonkin](http://agafonkin.com/en) (creator of [Leaflet](http://leafletjs.com)) that is just that. Dead simple. It's the *Malevich's Black Square* of grid frameworks.

 * tiny (about 250 bytes of CSS), no dependencies
 * only two classes (`row` and `col`)
 * fluid columns with fixed gutters
 * supports infinite nesting
 * incredibly flexible (use any column setup and media query breakpoints)

It embraces concepts of progressive enhancement and mobile first, serving one-column mobile layout to ancient browsers like IE 6-7. IE 8 is supported if you use [Respond.js](https://github.com/scottjehl/Respond).

[View Demo](http://mourner.github.com/dead-simple-grid) | [Download](https://github.com/mourner/dead-simple-grid/zipball/gh-pages)

### Basic Example

```html
<div class="row">
	<div class="col content"> ... </div>
	<div class="col sidebar"> ... </div>
</div>
```

```css
@media only screen and (min-width: 30em) {
	.content { width: 66.66%; }
	.sidebar { width: 33.33%; }
}
```

You start from one-column layout (all `col` elements have 100% width by default), and then set up columns for different media query breakpoints through widths in simple percentages. No other styles, classes or calculations required. As simple as that.

### Thanks

This tiny work was inspired by the following articles:

 * [Building a Modern Grid System](http://www.netmagazine.com/tutorials/building-modern-grid-system) by [Jonathan Smiley](http://www.zurb.com/about/profile/jonathan-smiley)
 * [Looking Beyond Common Media Query Breakpoints](http://mobile.smashingmagazine.com/2012/10/24/beyond-common-media-query-breakpoints/) by [Drew Thomas](http://brolik.com)
