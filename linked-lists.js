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
    const pop = () =>{
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

    const toString = function() {
        let string = '';
        if (headNode.value === null){
            return string = 'null';
        }
        printNodeRec(headNode);

        function printNodeRec(node){
            if(node.nextNode === null){
                string += `( ${node.value} ) -> `;
                return string += 'null';
            }
            string += `( ${node.value} ) -> `;
            printNodeRec(node.nextNode);
        }
        return string;
    }



    return { append, prepend, toString, at, pop, get head(){
        return headNode
        },
        get tail(){
            return tailNode;
        }, 
        get size(){
            return listSize;
        }
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



