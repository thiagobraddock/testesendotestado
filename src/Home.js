import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Home({ history, dispatch, name }) {
  console.log(name);
  return (
    <>
      <h1>
        ESTOU NA HOME,
        {name}
      </h1>
      <button
        type="button"
        onClick={ () => history.push('/luganenhum') }
      >
        IR PARA LUGANENHUM

      </button>
      <button
        type="button"
        onClick={ () => dispatch({ type: 'ALOOO' }) }
      >
        DISPARAR
      </button>
    </>
  );
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Home);
