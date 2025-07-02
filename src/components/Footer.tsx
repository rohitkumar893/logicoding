import React from 'react'
import { Layout } from 'antd';
const { Footer } = Layout;

const LayoutFooter:React.FC = () => {
  return (
    <Footer className='text-center'>
        <h2 className='text-lg text-gray-700'>Logicoding • 2025</h2>
    </Footer>
  )
}

export default LayoutFooter