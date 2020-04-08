import React, { Component } from 'react';
import '../styles/404.scss';
import logo from '../assets/favicon.png';

class NotFound extends Component {

  numberRender() {
    const numberList: JSX.Element[] = [];
    for (let i = 0; i < 25; i++) {
      numberList.push(<span className="particle">4</span>)
      numberList.push(<span className="particle">0</span>)
      numberList.push(<span className="particle">4</span>)
    }
    return numberList
  }

  render() {
    return (
      <main className="container">
        {this.numberRender()}
        <article className="content">
          <img src={logo} width="100" height="100"></img>
          <h1><strong>404</strong></h1>
          <p>你要找的页面走丢了</p>
          <p>
            <a href="/"><button>返回首页</button></a>
          </p>
        </article>
      </main>
    );
  }
}

export default NotFound;