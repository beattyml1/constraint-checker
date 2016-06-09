function Null() {
	return Value(null);
}

function And(left, right) {
	return { 
		instanceTest: function(instance) {
			return left.instanceTest(instance) || right.instanceTest(instance);
		},

		constraintTest: function(constraint) {
			return left.constraintTest(constraint) || right.constraintTest(constraint);
		}
	}
}

function Or(left, right) {
	return { 
		instanceTest: function(instance) {
			return left.instanceTest(instance) && right.instanceTest(instance);
		},

		constraintTest: function(constraint) {
			return left.constraintTest(constraint) && right.constraintTest(constraint);
		}
	}
}

function Record(spec) {
	return { 
		instanceTest: function(instance) {
			for (var specProp in spec) {
				var propMatches = false;
				for(var instanceProp in instance) {
					if (specProp === instanceProp) {
						propMatches = spec[specProp] && spec[specProp].instanceTest(instance[instanceProp])
						break;
					}
				}
				if (!propMatches) {
					return false;
				}
			}
		},

		constraintTest: function(constraint) {

		}
	}
}

function Any() {
	return { 
		instanceTest: function(instance) {
			
		},

		constraintTest: function(constraint) {

		}
	}
}

function Function(...ioConstraints) {
	return { 
		instanceTest: function(instance) {
			
		},

		constraintTest: function(constraint) {

		}
	}
}

function Returns(returnConstraint){
	return { 
		instanceTest: function(instance) {
			
		},

		constraintTest: function(constraint) {

		}
	}
}

function Params(spec) {
	return { 
		instanceTest: function(instance) {
			
		},

		constraintTest: function(constraint) {

		}
	}
}

function Value(value) {
	return { 
		instanceTest: function(instance) {
			return value === instance;
		},

		constraintTest: function(constraint) {

		}
	}
}

function Type(type) {
	
}

int = "int";

function Int(){
	return Type(int);
}
