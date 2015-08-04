'use strict';

var Item = require('../lib/item.js');

describe("Item",function(){

  describe('#find()', function() {

      it('should run ', function() {
        var result =Item.find('ITEM000001');
        var re =new Item('ITEM000001', '雪碧', '瓶', 3.00);
        expect(result).toEqual(re);
      });

  });

});
