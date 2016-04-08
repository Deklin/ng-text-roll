# ng-text-roll
An AngularJS component that highlights string changes by “rolling” characters.

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
<ng-text-roll initial-value="amount" height="20px"></ng-text-roll>
```

```js
angular.moddule('myApp', []).controller('myCtrl', function($scope, ngTextRollSvc){
	$scope.amount = 1.23;
	$scope.buttonClick = function() {
		var newValue = $scope.amount + 0.02;
		ngTextRollSvc.roll(newValue);
	};
});
```

### Options

#### initialValue
Value used to present in ngTextRoll directive when first displayed.
Example: ``` initial-value="values.totalPrice" ```
### height
Element height.
Example: ```height="12px"```
If height is not provided, a warning is thrown and a default value of 1em is set.