export default class CartBtnView {
    constructor(goodsCount) {
        this._data = goodsCount;
    }

    getHtml() {
        return `<span class="old-counter">${this._data}</span>`;
    }

    render($container, target = 'beforeend') {
        $container.insertAdjacentHTML(target, this.getHtml());
        
    }

}