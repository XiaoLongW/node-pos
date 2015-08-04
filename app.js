var Node = require('./node-pos.js');
var rf = require("fs");

var inputs = [
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2',
    'ITEM000005',
    'ITEM000005',
    'ITEM000005'
  ];
var options = process.argv;
if(options[2]){
   inputs = rf.readFileSync(options[2],'utf-8').split("\n");
}


Node.printReceipt(inputs);
