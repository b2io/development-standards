# Base Two Front End Standards

## CSS

Regardless of how the CSS is compiled (Sass, LESS, vanilla, etc), it should follow all the following standards.

### Alphabetization

We alphabetize our declarations within a declaration block. This is useful for a few reasons:

1.  Declarations are easier to find...
2.  And harder to duplicate
3.  Everything is always in the same order

```
.example {
  background: #000;
  border: 0;
  color: #fff;
  font-size: 1em;
  z-index: 100;
}
```

> **Note:**
> There are some Sass-related exceptions to this rule, which are covered in the SASS SECTION LINK HERE PLS

### Line Returns

Each selector and declaration should be on its own line.

```
#too, .many, .selectors .on .the, .same.line { content: "incorrect!"; }

#this,
.is .the,
.correct.way {
  content: "much better!";
}
```

### Value Formatting

Omit the leading 0 on fractions:`.7em` instead of `0.7em`

Omit the unit for zero values:

```
.incorrect {
  padding: 0em 2em;
}

.correct {
  padding: 0 2em;
}
```

Use shorthand wherever possible:

```
.incorrect {
  border-color: blue blue transparent blue;
  margin: 0 auto 0;
}

.correct {
  border-color: blue blue transparent;
  margin: 0 auto;
}
```

Font-weights should have numeric values, versus strings such as _normal_, _bold_, etc.
Line heights should also be unit-less where possible, unless it is necessary to use a pixel value.

### Whitespace

There should always be a space after colons and commas and before the opening curly brace of a declaration block.

```
.spaces--incorrect{
  color:rgb(0,0,0);
}

.spaces--correct {
  color: rgb(0, 0, 0);
}
```

### Declaration Order

Declarations should still be in alphabetical order in all .SCSS files. However, all `@extend` and `@include` declarations should be listed first.

```
.incorrect {
  border: 1px solid;
  @include border-radius(5px);
  color: #000;
  @extend %button;
}

.incorrect {
  @include border-radius(5px);
  @extend %button;
  border: 1px solid;
  color: #000;
}
```

### Nesting

In accordance with the [Inception Rule](https://thesassway.com/beginner/the-inception-rule), styles nested more than four levels deep should not pass a code review without justification.
