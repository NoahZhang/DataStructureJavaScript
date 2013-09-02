function BinaryTree() {
    var rootNode = null;
    var dataIndex = 0;
    var treeData = [];
    var BuildTree = function (node, prop) {
        var data = treeData[dataIndex];

        if (dataIndex > treeData.length) {
            return;
        }

                if (data == "#") {
                    dataIndex++;
                    return;
                } else {
                    tempNode = new TNode(data);

                    if (dataIndex == 0) {
                        rootNode = tempNode;
                    }

                    if (prop != undefined) {
                        if (prop == "L") {
                            node.LNode = tempNode;
                        } else {
                            node.RNode = tempNode;
                        }
                    }

                    dataIndex++;

                    (function (n) {
                        BuildTree(n, 'L');
                        BuildTree(n, 'R');
                    } (tempNode));
                }
            };

            this.CreateBinaryTree = function (data) {
                treeData = data;

                BuildTree();
            };

            this.PreOrderTraverse = function (node) {
                if (node === undefined) {
                    node = rootNode;
                }

                if (node === null) {
                    return;
                }

                console.log(node.Data);
                this.PreOrderTraverse(node.LNode);
                this.PreOrderTraverse(node.RNode);
            };

            this.InOrderTraverse = function (node) {
                if (node === undefined) {
                    node = rootNode;
                }

                if (node === null) {
                    return;
                }

                this.InOrderTraverse(node.LNode);
                console.log(node.Data);
                this.InOrderTraverse(node.RNode);
            };

            this.PostOrderTraverse = function (node) {
                if (node === undefined) {
                    node = rootNode;
                }
              
                if (node === null) {
                    return;
                }

                this.PostOrderTraverse(node.LNode);
                this.PostOrderTraverse(node.RNode);
                console.log(node.Data);
            };
        }

        function TNode(data) {
            this.LNode = null;
            this.Data = data;
            this.RNode = null;
        }

        var tree = new BinaryTree();

        // Pre Order Create
        tree.CreateBinaryTree(['A', 'B', 'D', 'G', '#', '#', 'H', '#', '#', '#', 'C', 'E', '#', 'I', '#', '#', 'F', '#', '#']);
        console.log("---PreOrderTraverse---");
        tree.PreOrderTraverse();
        console.log("---InOrderTraverse---");
        tree.InOrderTraverse();
        console.log("---PostOrderTraverse---");
        tree.PostOrderTraverse();
