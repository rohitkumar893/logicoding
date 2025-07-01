import './App.css'
import Navbar from './components/Navbar'
import PageLayout from './components/Layout'
import { Layout } from 'antd';
const { Footer } = Layout;

function App() {
  return (
    <>
      <Navbar />
      <PageLayout />
      <Footer style={{ textAlign: 'center' }}>
          Logicoding
      </Footer>
    </>
  )
}

export default App
