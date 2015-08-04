'use strict';
var CartItem = require('../lib/cart-item.js');
var Pos = require('../lib/pos.js');
var Cart = require('../lib/cart.js');
var Scanner = require('../lib/scanner.js');
var BuyTwoGetOneFree = require('../lib/two-get-one.js');
var Item = require('../lib/item.js');
var Utils = require('../lib/utils.js');

describe("Pos",function(){

  describe('#scan()', function() {
      it('should return right cartItems', function() {
        var inputs = [
            'ITEM000001'
        ];
        var cartItems =[new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00),1)];
        var promotionType = new BuyTwoGetOneFree();
        var cart = new Cart(promotionType);

        var scanner = new Scanner();

        var pos = new Pos(scanner, cart);

        pos.scan(inputs);
        expect(pos.cart.cartItems).toEqual(cartItems);
      });
    });

    describe('#printReceipt()', function() {
        it('should return right receipt', function() {
          var promotionType = new BuyTwoGetOneFree ();
          var cart = new Cart(promotionType);

          var scanner = new Scanner ();

          var pos = new Pos(scanner, cart);
          pos.cart.cartItems = [new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00),1)];

          var expectText =
            '***<没钱赚商店>收据***\n' +
            '打印时间：' + Utils.getTime() + '\n' +
            '----------------------\n' +
            '名称：雪碧，数量：1瓶，单价：3.00(元)，小计：3.00(元)\n' +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            '----------------------\n' +
            '总计：3.00(元)\n' +
            '节省：0.00(元)\n' +
            '**********************';

          expect(pos.printReceipt()).toEqual(expectText);
        });

      });
});
