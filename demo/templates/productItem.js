var templates;
(function (templates) {
    function productItem(product) {
        return '<li id="' + product.id + '" data-click="addToCart" data-keyword="' + product.name + '">' +
            '<img src="' + product.imgSource + '" class="disableClick">' +
            '<p class="disableClick">' + product.name + '</p>' +
            '</li>';
    }
    templates.productItem = productItem;
    ;
})(templates || (templates = {}));
//# sourceMappingURL=productItem.js.map