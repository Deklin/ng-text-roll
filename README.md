# ng-text-roll
An AngularJS directive that highlights string changes by “rolling” characters.

<a href="http://daveteply.github.io/ng-text-roll/src">Demo Page (coming soon!)</a>

### Install with Bower
```sh
$ bower install ng-text-roll
```

### Adding dependency to your project
Add a dependency for the `ui.ngTextRoll` AngularJS module:

```js
angular.module('myModule', ['ui.ngTextRoll']);
```

### Example usage
Add the ngTextRoll directive to your markup:
```html
<ng-text-roll value=3></ng-text-roll>
```

### Options
NOTE: All inputs are converted to string via JavaScript ``` String() ```
#### value
Required.  Value to present in ngTextRoll directive.  
Example: ```value=3 ```
#### displayValue
Optional.  Value to use for presentaion; useful for using filters.
Example: ``` display-value="totalPrice | currency" ```
