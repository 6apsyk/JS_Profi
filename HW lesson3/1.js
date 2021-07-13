
    // class GoodsItem {
    //     // ...
    //       render() {
    //         return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
    //       }
    //     }

    // class GoodList{
    //     constructor(goods){
    //         this.goods = goods.map(item => new Good(item));
    API_URL = 'https://jsonplaceholder.typicode.com/users';
            
        // }

        //   render() {
        //     let listHtml = '';
        //     this.goods.forEach(good => {
        //       const goodItem = new GoodsItem(good.product_name, good.price);
        //       listHtml += goodItem.render();
        //     });
        //     document.querySelector('.goods-list').innerHTML = listHtml;
        //   }
function makeGETRequest(url) {
    return new Promise((resolve,reject) => {
        var xhr;
        
              if (window.XMLHttpRequest) {
              xhr = new XMLHttpRequest();
              } else if (window.ActiveXObject) { 
              xhr = new ActiveXObject("Microsoft.XMLHTTP");
              }
          
              xhr.responseType = 'json';
      
              xhr.onreadystatechange = function () {
              if (xhr.readyState === 4) {
                  resolve(xhr.response);
                  }
              }
          
              xhr.open('GET', url);
              xhr.send();
              })
            }  
        

        makeGETRequest(API_URL)
            .then(data => console.log(data))
            // .then(data => new Goodlist.render(data))