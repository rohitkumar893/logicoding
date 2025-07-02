// ReactTutorials.tsx
import React from 'react';

interface Props {
  selectedKey: string;
}

const ReactTutorials: React.FC<Props> = ({ selectedKey }) => {
  switch (selectedKey) {
    case 'react-install':
      return <p className='text-xl'><b>React Installation:</b>
        {"\u00A0"}<b>How to Install React</b>
        <br /><br />
        Step 1: Install Node.js
                <br /><br />
                Before you start the React installation process, you must have Node.js installed on your computer. If you do not know what Node.js is all about, you can read more here.
                <br /><br />You have to install Node first because React.js is a JavaScript library, and Node.js is a JavaScript runtime environment that allows you to run JavaScript on the server side. So when you're writing React, you include JavaScript functions in your React project, and then Node.js helps run this JavaScript code on the web page.
                <br /><br />Node.js has various versions. The recommended version is the latest stable version, as it contains major and significant changes. These changes includes bug fixes and security updates, compatibility with your project dependencies, and so on.

                <br /><br />Once installation is complete, open your command prompt to confirm that Node has been successfully installed. Type in node -v in your command prompt, then click the enter button. This command should display the current version of Node installed on your computer.<br /><br /><br />
                

        Step 2: Install React
                <br /><br />Now you can go ahead and install React into your project. Let's go through the steps together.
                <br /><br />First, we'll look at the "traditional" way of installing React, using create-react-app (CRA), so you're aware of that process. Then we'll see how to install it using the modern Vite build tool.<br /><br />
                <br /><br /><b>Using CRA</b><br /><br />
                Still in your command prompt window, navigate to the directory that you want to use in creating your React project. To do this, type cd [directory name] then click enter.<br /><br />
                In the documents directory (or wherever you're creating your project), create a folder that you will be using to create your React app. Type mkdir [folder name]then navigate to the newly created directory using cd [newly created folder name].<br /><br />

                In the newly created folder directory, type in npx create-react-app [project name of your choice], and then wait until your React project is completely created.<br /><br />
                Lastly, open the React project in your code editor by typing in code . . Your code editor<br /><br />

                <br /><br /><b>Using Vite</b><br /><br />
                Vite is a very fast and customizable modern tool that aims to provide a linear development experience for modern web projects. You can use it to create your React apps in a fast and reliable way. It also has the same features as create-react-app (CRA).<br /><br />
                Just as we did when installing React using CRA, the first step is to make sure you have Node installed on your computer. After that, navigate to the directory you want to use and create a new folder (with any name of your choice).<br /><br />
                Open the newly created folder in your code editor (VS code).<br /><br />
                The next step is to open the terminal (located in between Run and Help).<br /><br />
                Once in the terminal, run npm create vite@latest [your project name]. In my case the project named I used is new-react-vite.<br /><br />
                At this point, you are asked to select what framework you want to install, so since you are working on React, use your arrow keys to navigate to where we have React, then click on Enter and select language.<br /><br />
                Once you have done this, you should see that your React files has been created.
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
