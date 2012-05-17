require.config({
    baseUrl: "js"
});

define([
    'libs/jquery',
    'models/my_model',
    'views/my_view',
    'libs/ujs'
], function($, MyModel, MyView) {
    var model = new MyModel(window.model);
    var view = new MyView({model: model, el: document.getElementById('my-view')});
});