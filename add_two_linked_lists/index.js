/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// function addTotal(currentTotal, leftOver) {
//     let total = currentTotal + leftOver;
//     console.log('addTotal ', total);
//     let currentOnesPlace = parseInt(total.toString().slice(-1));
//     let leftOverNum = leftOver;
//     if (total <= 9) return { total, leftOverNum };
//     return {
//         total: total > 9 ? currentOnesPlace : total,
//         leftOverNum: total > 9 
//         ? parseInt(total.toString().slice(0, -1) ,10)
//         : 0,
//     }
// }

// var addTwoNumbers = function(l1, l2) {
//     let currentNode1 = l1;
//     let currentNode2 = l2;
//     let totalObj = addTotal(l1.val + l2.val, 0);
//     let total = totalObj.total;
//     let leftOverNum = totalObj.leftOverNum;
//     let resultNode = new ListNode(total);
//     while(currentNode1.next || currentNode2.next) {
//         total = (
//             currentNode1 ? currentNode1.next.val : 0 
//             + currentNode2 ? currentNode2.next.val : 0
//         );
        
//         // if total > 9 make total the ones place and assign leftover to var
//         totalObj = addTotal(total, leftOverNum)
//         total = totalObj.total;
//         leftOverNum = totalObj.leftOverNum;
//         console.log('total ', total);
//         console.log('leftOverNum ', leftOverNum);
        
//         if (!resultNode.next) {
//             resultNode.next = new ListNode(total);
//         }
//         else {
//             console.log('reaching');
//             findCurrentNode(resultNode, total);
//         }
//         currentNode1 = currentNode1 && currentNode1.next;
//         currentNode2 = currentNode2 && currentNode2.next;
//     }
//     // set resultNode.next = currentTotal - if current total > 9 slice ones place and add ones before that to next total
//     if(leftOverNum) findCurrentNode(resultNode, leftOverNum);
//     console.log('returning', resultNode);
//     return resultNode;
// };

// function findCurrentNode(resultNode, total) {
//     console.log(resultNode.val);
//     if (!resultNode.next) {
//         resultNode.next = new ListNode(total);
//         console.log('returning ', resultNode.next);
//         return;
//     } else findCurrentNode(resultNode.next, total);
// }

var addTwoNumbers = (l1, l2) => {
    var dummy = new ListNode();
    var p = dummy;
    var curry = 0;
    
    while(l1 || l2 || curry > 0) {
        l1 && (curry += l1.val);
        l2 && (curry += l2.val);

        p.next = new ListNode(curry % 10);
        p = p.next;
        curry = Math.floor(curry / 10);
        
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    }
    return dummy.next;
}
// var list1 = new ListNode(1);
// list1.next = new ListNode(8);

// var list2 = new ListNode(0);
// var a = addTwoNumbers(list1, list2);
// console.log(a);


var list1 = new ListNode(2);
list1.next = new ListNode(4);
list1.next.next = new ListNode(3);

var list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);

var a = addTwoNumbers(list1, list2);
console.log(a);

// const list1 = new ListNode(5);
// const list2 = new ListNode(5);
