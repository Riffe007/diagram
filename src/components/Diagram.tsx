// src/components/Diagram.tsx
import React, { useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  Connection,
  useNodesState,
  useEdgesState,
} from 'react-flow-renderer';
import { motion } from 'framer-motion';
import AnimatedEdge from './AnimatedEdge';

// Define initial nodes with a custom type "customNode"
const initialNodes: Node[] = [
  {
    id: '1',
    type: 'customNode',
    data: { label: '🚀 Start' },
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    type: 'customNode',
    data: { label: '💡 Idea' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    type: 'customNode',
    data: { label: '🔥 Execution' },
    position: { x: 400, y: 100 },
  },
  {
    id: '4',
    type: 'customNode',
    data: { label: '🏆 Success' },
    position: { x: 250, y: 200 },
  },
];

// Define initial edges using our custom animated edge type
const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', type: 'animatedEdge' },
  { id: 'e1-3', source: '1', target: '3', type: 'animatedEdge' },
  { id: 'e2-4', source: '2', target: '4', type: 'animatedEdge' },
  { id: 'e3-4', source: '3', target: '4', type: 'animatedEdge' },
];

// Custom node component with Framer Motion animation
const CustomNode: React.FC<any> = ({ data }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="p-3 bg-white rounded shadow-lg border border-gray-200"
      style={{ width: 175, textAlign: 'center' }}
    >
      <div className="text-4xl">{data.label}</div>
    </motion.div>
  );
};

const nodeTypes = {
  customNode: CustomNode,
};

const edgeTypes = {
  animatedEdge: AnimatedEdge,
};

const Diagram: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="h-[80vh] w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <Background gap={16} />
        <MiniMap
          nodeStrokeColor={(n: Node) =>
            n.type === 'customNode' ? '#0070f3' : '#FFCC00'
          }
          nodeColor={(n: Node) =>
            n.type === 'customNode' ? '#e0f0ff' : '#fff'
          }
        />
        <Controls />
      </ReactFlow>
    </div>
  );
};

const DiagramWrapper: React.FC = () => {
  return (
    <ReactFlowProvider>
      <Diagram />
    </ReactFlowProvider>
  );
};

export default DiagramWrapper;
