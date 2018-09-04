import React from 'react';
import ReactLoading from 'react-loading';


const Loading = ({type, color}) => (
  <ReactLoading type={"spin"} color={"#aaa"} height={667} width={375} className="loading"/>
);


export default Loading;
