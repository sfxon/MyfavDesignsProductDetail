const { PluginBaseClass } = window;

export default class ProductDetailAccordeonPlugin extends PluginBaseClass {
    init() {
        let tabContentTitles = document.querySelectorAll('.product-detail-tabs-content .offcanvas-body .h3.product-detail-description-title');

        for(let i = 0, j = tabContentTitles.length; i < j; i++) {
            tabContentTitles[i].addEventListener('click', function(event) {
                let parentElement = event.target.closest('.tab-pane-container');
                parentElement.classList.toggle('myfav-detail-akkordeon-opened');
            });
        }
    }
}