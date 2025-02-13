// src/components/AnimatedEdge.tsx
import { memo } from 'react';
import { getBezierPath, EdgeProps } from 'react-flow-renderer';
import { motion } from 'framer-motion';

const AnimatedEdge = (props: EdgeProps) => {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
  } = props;

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <g className="react-flow__edge">
      <motion.path
        id={id}
        d={edgePath}
        stroke="black"
        strokeWidth={2}
        style={style}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        markerEnd={markerEnd}
      />
    </g>
  );
};

export default memo(AnimatedEdge);
