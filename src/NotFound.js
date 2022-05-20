import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>ESTOU NA NotFound</h1>
      <Link to="/">VOLTAR PARA HOME</Link>
    </>
  );
}

export default NotFound;
