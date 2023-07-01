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

    const toString = function() {
        let string = '';
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



    return { append, prepend, toString, get head(){
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


/* function createLinkedList(){
    let headNode = createNode();
    let tailNode = createNode();

    let append = function(value){
        if(headNode.value == null){
            headNode.value = value;
            return;
        }
        else if(headNode.nextNode == null){
            tailNode.value = value;
            headNode.nextNode = tailNode;
        }
        else{
            let newNode = createNode();
            newNode.value = value;
            tailNode.nextNode = newNode;
            tailNode = newNode;

        }
    }
    return { append, get head(){
        return headNode
        },
        get tail(){
            return tailNode;
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
linkedList.append(800);
*/
