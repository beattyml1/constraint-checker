# constraint-checker

## Example
```
var myFirstConstraint = Record({
	x: Int()
});

var myType = Record({
	add: Function(Returns(String()), Params({ x: Type(int), y: Type(int) }) ),
	myNullable: Or(Null(), Int()),
	myNotNullRecord: Record(),
	nullableRecordWithConstraints: Or(myFirstConstraint, Value(null))
});

```
