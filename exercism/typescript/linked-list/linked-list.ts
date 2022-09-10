class Node {
    constructor(
        public val: any,
        public next: Node | null = null,
        public prev: Node | null = null
    ) {};
};

export class LinkedList<T> {
    private head: Node | null;
    private tail: Node | null;
    
    constructor() {
        this.head = null;
        this.tail = null;
    };

	public push(element: T) {
        const node = new Node(element);
        if(this.count()) {
            node.prev = this.tail;
            this.tail!.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
	}
     
	public pop() {
        const node = this.tail;
        this.tail = node!.prev;
        if(this.tail) this.tail.next = null;
        this.delete(node!.val);
        return node?.val;
	}
    
	public shift() {
        const node = this.head;
        this.head = node!.next;
        if(this.head) this.head.prev = null;
        this.delete(node!.val);
        return node?.val;
	}
	
	public unshift(element: T) {
        const node = new Node(element);
        if(this.count()) {
            node.next = this.head;
            this.head!.prev = node;
            this.head = node;
        } else {
            this.head = node;
            this.tail = node;
        }
	}
	
	public delete(element: T) {
        let node = this.head;
        while(node) {
            if(node.val === element) {
	            if(!node.prev) {
	                this.head = node.next;
	            }

	            if(!node.next) {
	                this.tail = node.prev;
	            }
	            if(node.prev) node.prev.next = node.next;
	            if(node.next) node.next.prev = node.prev;
                break;
            }

            node = node.next;
        }
	}

    public count() {
        return [...this.toGenerator()].length;
    }

    public *toGenerator() {
        let head: Node | null = this.head;
        while(head) {
            yield head;
            head = head.next;
        };
    };
}
