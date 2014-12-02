typographicss
=============

A CSS file with classes helping users apply OpenType font-feature-settings.

Adding any of these classes along with the .ffs class will enable the desired font-feature-setting.

The .ffs class stands for font-feature-setting and is used to enable you to select all instances where font-feature-setting's are used.
It is useful for testing or adding custom fallback solutions where desired.
If that feels like a waste simply remove the .ffs class from the typographi.css file.

.liga /* Common ligatures */
.dlig /* Discretionary ligatures */
.hlig /* Historical ligatures */
.clig /* Contextual ligatures */
.tnum /* Tabular numbers (number spacing) */
.pnum /* Proportional numbers (number spacing) */
.onum /* Old style numbers (number case) */
.lnum /* Lining numbers (number case) */
.kern /* Kerning */
.smcp /* Small caps */
.c2sc /* Caps 2 small caps */
.frac /* Normal fractions */
.afrc /* Alternate fractions */
.zero /* Slashed zero (numbers)
.nalt /* Alternative notation (numbers) */
.salt /* Stylistic character alternatives */
.calt /* Contextual character alternatives */
.hist /* Historic character alternatives */
.swsh /* Swash (character alternative) */
.ss01 /* Stylistic set 1…5 */
.ss02 /* Stylistic set 1…5 */
.ss03 /* Stylistic set 1…5 */
.ss04 /* Stylistic set 1…5 */
.ss05 /* Stylistic set 1…5 */

Example use case:

<h1 class="ffs liga">Cactus</h1> will enable common ligatures on the headline.

And keep in mind that not all fonts support OpenType features and even if they do, not all OpenType fonts support all of the features.
It is quite common with support for common ligatures, kerning, tabular numbers and small caps.

Thanks.

p.s. Feel free to share, contribute or expand on this CSS file. d.s.
