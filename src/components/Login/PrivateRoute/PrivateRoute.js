import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from './../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if(isLoading){
    return (
<div className="bg-white w-2/3 h-auto mx-auto p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none my-24">
    <div className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-200 animate-pulse">
    </div>
    <div className="flex flex-col flex-1 gap-5 sm:p-2 h-full">
        <div className="flex flex-1 flex-col gap-3">
            <div className="bg-gray-200 w-full animate-pulse h-14 rounded-2xl">
            </div>
            <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
            </div>
            <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
            </div>
            <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
            </div>
            <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
            </div>
        </div>
        <div className="mt-auto flex gap-3">
            <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full">
            </div>
            <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full">
            </div>
            <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto">
            </div>
        </div>
    </div>
</div>
    )
  }
  
  return (
    <div>
       <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    </div>
  );
};

export default PrivateRoute;