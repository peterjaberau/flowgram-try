import React, { useState, useContext } from 'react';
import Card from '@/components/ui/Card'
import classNames from '@/utils/classNames';


import { WorkflowPortRender, useClientContext } from '@flowgram.ai/free-layout-editor';

import { useNodeRenderContext } from '../../hooks';
import { SidebarContext } from '../../context';
import { scrollToView } from './utils';
import { NodeWrapperStyle } from './styles';

export interface NodeWrapperProps {
  isScrollToView?: boolean;
  children: React.ReactNode;
}

/**
 * Used for drag-and-drop/click events and ports rendering of nodes
 * 用于节点的拖拽/点击事件和点位渲染
 */
export const NodeWrapper: React.FC<NodeWrapperProps> = (props) => {
  const { children, isScrollToView = false } = props;
  const nodeRender = useNodeRenderContext();
  const { selected, startDrag, ports, selectNode, nodeRef, onFocus, onBlur } = nodeRender;
  const [isDragging, setIsDragging] = useState(false);
  const sidebar = useContext(SidebarContext);
  const form = nodeRender.form;
  const ctx = useClientContext();

  return (
    <>
      <Card
          ref={nodeRef}
          className={classNames(
              'hover:shadow-lg transition duration-150 ease-in-out',
              selected ? 'shadow-lg outline-2' : ''
          )}
          draggable
          onDragStart={(e) => {
            startDrag(e);
            setIsDragging(true);
          }}
          onClick={(e) => {
            selectNode(e);
            if (!isDragging) {
              sidebar.setNodeRender(nodeRender);
// Optional: Set isScrollToView to true, so that the node can be selected and scrolled to the middle of the canvas              // Optional: Set isScrollToView to true to scroll the node to the center of the canvas after it is selected.
              if (isScrollToView) {
                scrollToView(ctx, nodeRender.node);
              }
            }
          }}
          onMouseUp={() => setIsDragging(false)}
          onFocus={onFocus}
          onBlur={onBlur}
          data-node-selected={String(selected)}
      >

      <NodeWrapperStyle

          style={{
            outline: form?.state.invalid ? '3px solid red' : 'none',
          }}




      >
        {children}
      </NodeWrapperStyle>
      </Card>
      {ports.map((p) => (
        <WorkflowPortRender key={p.id} entity={p} />
      ))}


    </>
  );
};
