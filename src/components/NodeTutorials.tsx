import React from 'react';

interface Props {
  selectedKey: string;
}

const NodeTutorials: React.FC<Props> = ({ selectedKey }) => {
  switch (selectedKey) {
    case 'node-basics':
      return <p><b>Node.js Basics:</b>
      
      </p>;
    case 'node-modules':
      return <p><b>Node Modules:</b>
      
      </p>;
    default:
      return null;
  }
};

export default NodeTutorials;
