function are_isomorphic(graph1, graph2) {
    // ensures same number of edges and nodes
    if (graph1[0].length != graph2[0].length || graph1[1].length != graph2[1].length) {
        return false;
    }

    // initializes control variables for Heap's Algorithm
    let control = [];
    for(let j = 0; j < graph1[0].length; j++) {
        control[j] = 0;
    }
    let i = 1;
    let permutationsLeft = factorialize(graph1[0].length) - 1 ;

    // continues until each permutation is tried
    while(permutationsLeft > 0) {
        // if the graphs match, they are isomorphic
        if(compareGraphs(graph1,graph2)){
            return true;
        }
        // otherwise, permute the graph and update the control variables
        else{
            [graph1,control,i] = permuteGraph(graph1, control, i);
            permutationsLeft--;
        }
    }
    return false;
}

// Heaps algorithm on the graph
function permuteGraph(graph, c, i) {
    let nodes = graph[0]; 
    let edges = graph[1];
    // Handle permutations of vertices
    while (i < nodes.length) {
        if (c[i] < i) {
            if (i % 2 === 0) {
                // Swap nodes
                let temp = nodes[0];
                nodes[0] = nodes[i];
                nodes[i] = temp;
            } else {
                // Swap nodes according to control array
                let temp = nodes[c[i]];
                nodes[c[i]] = nodes[i];
                nodes[i] = temp;
            }

            
            // Updates each edge based on the new node positions
            for(let i = 0; i < edges.length; i++){
                edges[i] = edgeUpdate(nodes, edges, i);
            }

            // Increment control array and reset index for the next cycle
            c[i]++;
            i = 1;
            return [graph, c, i];
        } else {
            // Reset control array and move to the next vertex
            c[i] = 0;
            i++;
        }
    }
    return [graph, c, i];
}

// compares the edges, if all are equal, it is isomorphic
function compareGraphs(graph1,graph2) {
    let edges1 = orderEdges(graph1[1]);
    let edges2 = orderEdges(graph2[1]);

    for (let i = 0; i < graph1[1].length; i++) {
        if (edges1[i][0]!=edges2[i][0]||edges1[i][1]!=edges2[i][1]) {
            return false;
        }
    }
    return true;
}

// helps permute
function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1){
        return 1;
    }
    while (num > 1) { 
        num--;
        result = result * num;
    }
    return result;
}

// make sure each edge is in format (smallest, biggest)
function orderEdges(edges) {
    edges = edges.map(edge => edge.sort());
    return edges.sort();
}

// swaps the values in each edge to reflect the new node values.
function edgeUpdate(nodes, edges, i) {
    let edgeStart = edges[i][0];
    let edgeEnd = edges[i][1];
    let newPosition = 0;
    newPosition = nodes.indexOf(edgeStart);
    edgeStart = newPosition;
    newPosition = nodes.indexOf(edgeEnd);
    edgeEnd = newPosition;
    return [edgeStart,edgeEnd];
}
