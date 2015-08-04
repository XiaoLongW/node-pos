'use strict';

var CartItem = require('../lib/cart-item.js');
var Item = require('../lib/item.js');
var Cart = require('../lib/cart.js');
var BuyTwoGetOneFree = require('../lib/two-get-one.js');
var AfterPromotionItem = require('../lib/after-promotion-item.js');
var Utils = require('../lib/utils.js');

describe("CartItem",function(){

  describe('#find()', function() {

      it('should return right', function() {
        var item1 =new Item('ITEM000001', '雪碧', '瓶', 3.00);
        var cartItem1 = new CartItem(item1,1);
        var item2 =new Item('ITEM000002', '可乐', '瓶', 4.00);
        var cartItem2 = new CartItem(item2,1);
        var cartItems =[cartItem1,cartItem2];

        expect(cartItem1.find(cartItems)).toEqual(cartItem1);
      });

      it('should return undefind', function() {
        var item1 =new Item('ITEM000001', '雪碧', '瓶', 3.00);
        var cartItem1 = new CartItem(item1,1);
        var item2 =new Item('ITEM000002', '可乐', '瓶', 4.00);
        var cartItem2 = new CartItem(item2,1);
        var cartItems =[cartItem1,cartItem2];

        var item3 =new Item('ITEM000003', '红茶', '瓶', 5.00);
        var cartItem3 = new CartItem(item3,1);

        expect(cartItem3.find(cartItems)).toEqual(undefined);
      });
  });


  describe('#isPromotion()', function() {

      it('should return true', function() {
        var allPromotions = Utils.loadPromotions()[0].barcodes;
        var item =new Item('ITEM000000', '可口可乐', '瓶', 3.00);
        var cartItem = new CartItem(item,1);

        expect(cartItem.isPromotion(allPromotions)).toBe(true);
      });

      it('should return false', function() {
        var allPromotions = Utils.loadPromotions()[0].barcodes;
        var item =new Item('ITEM000002', '苹果', '斤', 5.50);
        var cartItem = new CartItem(item,1);

        expect(cartItem.isPromotion(allPromotions)).toBe(false);
      });
  });


});
