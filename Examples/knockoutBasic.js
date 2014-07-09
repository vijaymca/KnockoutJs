var myViewModel = {
    personName: ko.observable('Vijay Bhaskar'),
    personAge: ko.observable(23)
};

ko.applyBindings(myViewModel);