typographi.css
=============

A CSS file with classes helping users apply OpenType font-feature-settings.

Adding any of these classes along with the .ffs class will enable the desired font-feature-setting.

The .ffs class stands for font-feature-setting and is used to enable you to select all instances where font-feature-setting's are used.
It is useful for testing or adding custom fallback solutions where desired.
If that feels like a waste simply remove the .ffs class from the typographi.css file.

### Classes

.liga /* Common ligatures */<br/>
.dlig /* Discretionary ligatures */<br/>
.hlig /* Historical ligatures */<br/>
.clig /* Contextual ligatures */<br/>
.tnum /* Tabular numbers (number spacing) */<br/>
.pnum /* Proportional numbers (number spacing) */<br/>
.onum /* Old style numbers (number case) */<br/>
.lnum /* Lining numbers (number case) */<br/>
.kern /* Kerning */<br/>
.smcp /* Small caps */<br/>
.c2sc /* Caps 2 small caps */<br/>
.frac /* Normal fractions */<br/>
.afrc /* Alternate fractions */<br/>
.zero /* Slashed zero (numbers) */<br/>
.nalt /* Alternative notation (numbers) */<br/>
.salt /* Stylistic character alternatives */<br/>
.calt /* Contextual character alternatives */<br/>
.hist /* Historic character alternatives */<br/>
.swsh /* Swash (character alternative) */<br/>
.ss01 /* Stylistic set 1…5 */<br/>
.ss02 /* Stylistic set 1…5 */<br/>
.ss03 /* Stylistic set 1…5 */<br/>
.ss04 /* Stylistic set 1…5 */<br/>
.ss05 /* Stylistic set 1…5 */<br/>

### Example use case:

```html
<h1 class="ffs liga">Cactus</h1>
```

This will enable common ligatures on the headline.

And keep in mind that not all fonts support OpenType features and even if they do, not all OpenType fonts support all of the features.
It is quite common with support for common ligatures, kerning, tabular numbers and small caps.

Thanks.

p.s. Feel free to share, contribute or expand on this CSS file. d.s.
