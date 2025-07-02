// ReactTutorials.tsx
import React from 'react';

interface Props {
  selectedKey: string;
}

const ReactTutorials: React.FC<Props> = ({ selectedKey }) => {
  switch (selectedKey) {
    case 'react-install':
      return <p><b>React Installation:</b>
      
      </p>;
    case 'react-setup':
      return <p><b>React Setup:</b>
      
      </p>;
    case 'react-components':
      return <p><b>React Components:</b>
      
      </p>;
    default:
      return null;
  }
};

export default ReactTutorials;
