var myViewModel = {
    personName: ko.observable('Vijay Bhaskar'),
    personAge: ko.observable(23)
};

//ko.applyBindings(myViewModel);



function AppViewModel() {
    var self = this;
    self.firstName = ko.observable('Vijay');
    self.lastName = ko.observable('Bhaskar');

    self.fullName = ko.computed(function() {
        return self.firstName() + " " + self.lastName();
    }, this);

    self.todos = ko.observableArray([{
        item: "One"
    }, {
        item: "Two"
    }]);
}

ko.applyBindings(new AppViewModel());