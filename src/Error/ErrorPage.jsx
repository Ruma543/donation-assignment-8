import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="h-[70vh] flex flex-col items-center space-y-3">
      <h1 className="text-2xl font-semibold text-red-600">Oops!</h1>
      <p className="text-2xl font-semibold">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <button className="btn btn-error">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
