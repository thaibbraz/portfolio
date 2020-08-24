import React from 'react';
import './App.css';
import {Switch, Layout, Header, Navigation,Drawer,Content } from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './components/main'
function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header  className="header-color" title="Portfolio" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title=" ">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
