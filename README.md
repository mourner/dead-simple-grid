Dead Simple Grid
================

Dead Simple Grid is a responsive CSS grid micro framework/concept by [Vladimir Agafonkin](http://agafonkin.com/en) (creator of [Leaflet](http://leafletjs.com)) that is just that. Dead simple. It's the *Malevich's Black Square* of grid frameworks.

 * tiny (about **250 bytes** of CSS), no dependencies
 * only **two classes** (`row` and `col`)
 * fluid columns with **fixed gutters**
 * supports **infinite nesting**
 * allows true **responsive design** (change column setup in media queries)
 * supports all major browsers starting from IE&nbsp;8, serving one-column mobile layout to older browsers
 * built with progressive enhancement and mobile first concepts in mind

**[View Demo](http://mourner.github.com/dead-simple-grid)** &nbsp;|&nbsp; [Source](css/grid.css)

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

Add a `col` class to each "cell" of your grid, and wrap each horizontal set of cells with a `row`-classed element.

**You only need width to set up columns** in CSS; they are 100%-width by default, so we start from a one-column mobile layout and then gradually improve it according to available screen space. We do this by setting widths in simple percentages for each media query breakpoint. No other styles, classes or calculations necessary.

### Explanation

#### Fixed Gutters and Box Sizing

Fixed gutter widths for columns are set as padding combined with `box-sizing: border-box` for `col` elements. This  means that your fluid design can finally have consistent whitespace, and you don't need to mess with weird percentages like `margin: 0 1.337%` and related column width calculations. Need a one-third column? Set its width to `33.33%` and padding to any value you like (DSG sets 1.5em by default).

#### Column Setup

All `col` elements are places inside clearfixed `row` elements and have `float: left; width: 100%` set by default. This means that you only need to change `width` to set up columns &mdash; no other properties required.

Need to turn 3 one-column elements into 3 columns? Set their width to `33.33%` and you're all set. Need to switch a 2-column block back to one-column mode? Set their width to `100%`. Forget about messing with classes or SASS/Less mixins and formulas.

#### No Width Classes

Why not define classes like `span_1_of_3` for common column widths, you say? Because this defies the purpose of true responsive design! You need to adapt *your whole grid setup* to the viewport according to *content* and its importance.

Most grid frameworks will only change the container width and switch everything into one-column mode after a point, and that's it. You need to go beyond that, designing your website across the whole variety of screen sizes. And because of the sheer simplicity of the column set up in Dead Simple Grid, it doesn't take more time than figuring out what classes to add to your elements.

For example, you can easily make 3 one-third columns turn into 1 (more important) column followed by 2 half columns for narrower screens. Not so easy with grid frameworks that use width classes.

#### Infinite Nesting

Nested `row` elements get negative margin on the sides that corresponds to gutter padding of `col` elements:

```css
.col      { padding: 0  1.5em; }
.row .row { margin:  0 -1.5em; }
```

This way you can nest rows inside columns infinitely without padding adding up, building layouts of any complexity. Feel free to change the value `1.5em` to anything you like (or even different for various elements).

#### Mobile First and Browser Support

The `box-sizing` property is widely supported, starting from IE 8. CSS3 Media queries are supported by all modern browsers, and a polyfill ([Respond.js][]) can be used to cover IE 8. Due to mobile first approach (we start from one column layout and build from there), older browsers which don't support both features (e.g. IE 6&ndash;7) receive a mobile layout which is perfectly accessible. So you have everyone covered nicely.

---

### Thanks

This tiny work was inspired by the following articles:

 * [Building a Modern Grid System](http://www.netmagazine.com/tutorials/building-modern-grid-system) by [Jonathan Smiley](http://www.zurb.com/about/profile/jonathan-smiley)
 * [Looking Beyond Common Media Query Breakpoints](http://mobile.smashingmagazine.com/2012/10/24/beyond-common-media-query-breakpoints/) by [Drew Thomas](http://brolik.com)

 [Respond.js]: https://github.com/scottjehl/Respond
