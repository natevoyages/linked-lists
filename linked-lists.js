function createLinkedList(){
    let headNode = createNode();
    let tailNode = null;
    let listSize = 0;

    let append = function(value){
        if(headNode.value == null){
            headNode.value = value;
        }
        else if(headNode.nextNode == null){
            tailNode = createNode();
            tailNode.value = value;
            headNode.nextNode = tailNode;
        }
        else{
            let newNode = createNode();
            newNode.value = value;
            tailNode.nextNode = newNode;
            tailNode = newNode;
        }
        listSize++;
    }

    let prepend = function(value){
        if(headNode.value == null){
            headNode.value = value;
        }
        else if(headNode.nextNode == null){
            tailNode = headNode;
            headNode = createNode();
            headNode.value = value;
            headNode.nextNode = tailNode;
        }
        else{
            let newNode = createNode();
            newNode.value = value;
            newNode.nextNode = headNode;
            headNode = newNode;
        }
        listSize++;
    }

    const at = function(index){
        let count = 0;
        let foundNode = null;

        foundNode = findNode(headNode);

        function findNode(node){
            if (index == listSize || index < 0){
                return;
            }
            else if (count == index){
                return node;
            }
            else{
                count++;
                return findNode(node.nextNode);
            }
        }
        return foundNode;

    }
    const pop = function(){
        if(headNode.value == null){
            return;
        }
        else if(headNode.nextNode == null){
            headNode.value = null
        }
        else if(headNode.nextNode == tailNode){
            headNode.nextNode = null
        }
        else{
            let newTail = at(listSize - 2);
            newTail.nextNode = null;
            tailNode = newTail;
        }
        listSize--;
        
    }

    const contains =  function(value){
        let found = false;
        findValue(headNode, value);
        function findValue(node, value){
            if (node.value == value){
                found = true;
                return;
            }
            if(node.nextNode === null){
                return;
            }
            findValue(node.nextNode, value);
        }
        return found;
    }

    const find = function(value){
        let count = 0;
        findIndex(headNode, value);
        function findIndex(node, value){
            if(count == listSize){
                count = null;
                return;
            }
            else if (node.value == value){
                return;
            }
            count++;
            findIndex(node.nextNode, value);
        }
        return count;
    }

    const toString = function() {
        let string = '';
        if (headNode.value === null){
            return string = 'null';
        }
        stringNodes(headNode);

        function stringNodes(node){
            if(node.nextNode === null){
                string += `( ${node.value} ) -> `;
                return string += 'null';
            }
            string += `( ${node.value} ) -> `;
            stringNodes(node.nextNode);
        }
        return string;
    }

    const insertAt = function(value, index){
        if (index == listSize){
            append(value);
            return;
        } 
        else if (index == 0){
            prepend(value);
            return;
        }
        else if(index > listSize){
            console.log('Out of range')
            return;
        }
        let newNode = createNode();
        let next = at(index);
        let prev = at(index - 1);
        prev.nextNode = newNode;
        newNode.value = value;
        newNode.nextNode = next;
        listSize++;
    }

    const removeAt = function( index){
        if (index == listSize - 1){
            pop();
            return;
        } 
        else if (index == 0){
            let next = at(index + 1);
            headNode = next;
            listSize--;
            return;
        }
        else if(index >= listSize){
            console.log('Out of range')
            return;
        }
        let next = at(index + 1);
        let prev = at(index - 1);
        prev.nextNode = next;
        listSize--;
    }


    return { append, prepend, toString, at, pop,
         contains,find, insertAt, removeAt,
        get head(){return headNode;},
        get tail(){return tailNode;}, 
        get size(){return listSize;}
    } 
}

function createNode(){
    let value = null;
    let nextNode = null;
    return{value, nextNode};
}

let linkedList = createLinkedList();
linkedList.append(6);
linkedList.append(100);
linkedList.append(90);
linkedList.append(800);



