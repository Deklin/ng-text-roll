# ng-text-roll
An AngularJS directive that highlights string changes by “rolling” characters.

<a href="http://daveteply.github.io/ng-text-roll/dist">Demo Page</a>

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
<ng-text-roll target="scopeValue" currency=true height="'20px'"></ng-text-roll>
```

### Options

#### target
Required.  Value to present in ngTextRoll directive.
Example: ```target="values.totalPrice" ```
#### currency
Optional.  Value to use for presentation; useful for using filters.
Example: ``` currency=true ```
### height
Element height.
Example: ```height="12px"```
