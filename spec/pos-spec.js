'use strict';
var CartItem = require('../lib/cart-item.js');
var Pos = require('../lib/pos.js');
var Cart = require('../lib/cart.js');
var Scanner = require('../lib/scanner.js');
var BuyTwoGetOneFree = require('../lib/two-get-one.js');
var Item = require('../lib/item.js');

describe("Pos",function(){

  describe('#scan()', function() {

      it('should ', function() {

        var inputs = [
            'ITEM000001'
        ];
        var cartItems =[new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00),1)];
        var promotionType = new BuyTwoGetOneFree();
        var cart = new Cart(promotionType);
        var scanner = new Scanner();
        spyOn(scanner,'scan').and.callFake(function(){
          return new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00),1);
        })
        var pos = new Pos(cart,scanner);
        pos.scan(inputs);

        expect(pos.cart.cartItems).toEqual(cartItems);
      });
    });

    // describe('#printReceipt()', function() {
    //
    //     it('guessRandom can run', function() {
    //
    //       var compare = new CompareNumber();
    //       spyOn(compare,'game').and.callFake(function(){
    //            return '0A0B';
    //       });
    //       var guess = new Guess(answer,compare);
    //       expect(guess.guessRandom('5678')).toBe('0A0B');
    //     });
    //
    //   });
});
