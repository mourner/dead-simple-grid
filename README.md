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

### Explanation

#### Fixed Gutters and Box Sizing

Fixed gutter widths for columns are set as padding combined with `box-sizing: border-box` for `col` elements. This  means that your fluid design can finally have consistent whitespace, and you don't need to mess with weird percentages like `margin: 0 1.337%` and related column width calculations. Need a one-third column? Set its width to `66.66%` and padding to any value you like (DSG sets 1.5em by default).

#### Mobile First and Browser Support

The `box-sizing` property is widely supported, starting from IE 8. CSS3 Media queries are supported by all modern browsers, and a polyfill (Respond.js) can be used to cover IE 8. Due to mobile first approach (we start from one column layout and build from there), older browsers which don't support both features (e.g. IE 6-7) receive the mobile layout which is perfectly accessible. So you have everyone covered nicely.

#### Infinite Nesting

Nested `row` elements get negative margin on the sides that corresponds to gutter padding of `col` elements:

```
.col      { padding: 0  1.5em; }
.row .row { margin:  0 -1.5em; }
```

This way you can nest rows inside columns infinitely, building layouts of any complexity. Feel free to change the value `1.5em` to anything you like (or even different for various elements).

#### Column Setup

All `col` elements are places inside clearfixed `row` elements and have `float: left; width: 100%` set by default. This means that you only need to change `width` to set up columns &mdash; no other properties required.

Need to turn 3 one-column elements into 3 columns? Set their width to `33.33%` and you're all set. Need to switch a 2-column block back to one-column mode? Set their width to `100%`. Forget about messing with classes or SASS/Less mixins and formulas.

### Thanks

This tiny work was inspired by the following articles:

 * [Building a Modern Grid System](http://www.netmagazine.com/tutorials/building-modern-grid-system) by [Jonathan Smiley](http://www.zurb.com/about/profile/jonathan-smiley)
 * [Looking Beyond Common Media Query Breakpoints](http://mobile.smashingmagazine.com/2012/10/24/beyond-common-media-query-breakpoints/) by [Drew Thomas](http://brolik.com)
