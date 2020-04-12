import React, { Component } from 'react';
import '../styles/404.scss';
import logo from '../assets/favicon.png';

class NoAccess extends Component {

  numberRender() {
    const numberList: JSX.Element[] = [];
    for (let i = 0; i < 25; i++) {
      numberList.push(<span className="particle">Error</span>)
      numberList.push(<span className="particle">No Auth</span>)
    }
    return numberList
  }

  render() {
    return (
      <main className="container">
        {this.numberRender()}
        <article className="content">
          <img src={logo} width="100" height="100"></img>
          <h1><strong>NO_AUTH</strong></h1>
          <p>你没有访问该页面的权限</p>
          <p>
            <a href="/"><button>返回首页</button></a>
          </p>
        </article>
      </main>
    );
  }
}

export default NoAccess;