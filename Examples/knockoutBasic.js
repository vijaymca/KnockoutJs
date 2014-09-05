var myViewModel = {
	personName : ko.observable('Vijay Bhaskar'),
	personAge : ko.observable(23)
};

//ko.applyBindings(myViewModel);


function AppViewModel() {

	var self = this;
	self.firstName = ko.observable('Vijay');
	self.lastName = ko.observable('Bhaskar');

	self.fullName = ko.computed(function () {
			return self.firstName() + " " + self.lastName();
		}, this);

	self.todos = ko.observableArray([{
					item : "One"
				}, {
					item : "Two"
				}
			]);

	self.len = ko.computed(function () {
			var count = 0;
			count = self.todos().length;
			return count;
		});

	self.newTodo = ko.observable();
	self.addNewTodo = function () {
		self.todos.push({
			item : self.newTodo()
		});
		$('#lblCount').html(self.todos().length);
		self.newTodo("");
	}

	self.removeTodo = function () {
		self.todos.remove(this);
	}
}

ko.applyBindings(new AppViewModel());