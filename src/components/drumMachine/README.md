# A Simple Drum Machine

## Overview

This is a visual representation of a drum machine, created for a coding assignment courtesy of Splice:
https://github.com/splice/js-808

Inspiration was taken from Splice's own Beat Maker: https://splice.com/sounds/beatmaker

## File Structure

General, but important, music concepts are layed out in music.types.ts, including the definition of a "Sequence" which is made up of disparate "Tracks", each of which involves a specific instrument and pattern of beats.

The root of the code is in drumMachingePage.tsx. This component uses "SeasonalPageTemplate" to integrate into my personal website. Its content includes several buttons, plus the primary DrumMachineDisplay, which itself is made up of rows of DrumMachineCells.

## Implementation notes

Different tracks can have different length patterns and different beat units, in the hope that the drum machine would be useful in an environment that has tracks of varying time signatures.

(I learned to play bass over a year ago and I STILL don't fully understand the difference between 3/4 and 6/8. I can sometimes sort of get it... and sometimes not.)

The function "getRandomInstrumentColor" is my attempt to generate vibrant looking colors. My original random color helper picked random values from 0-255 and would often end up with muddy hues. When I forced it to pick among a smaller subset of values, it still generated faded hues, colors with minute differences, or whites/blacks/greys. This algorithm forces differences between R, G, and B values to avoid these problems.

## Future

### Usability

-   Users should be able to create Tracks and Sequences themselves, by clicking on individual RowMachineCells and then saving.
-   Need to test accessibility! (Primarily: tabbing and zoom.)

### Styling

-   The drum machine display should detect from its Sequence what meter to use (e.g., darkening every third column instead of every fourth).
-   Users should be able to click on a row to highlight it.
-   Instruments should have associated icons.
-   No two instruments should be able to receive the same random color.

### Sound

-   There should be sound!
-   And volume controls as well.
-   And pitch.

### Reliability

-   Need unit tests!
