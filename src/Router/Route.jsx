import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Component/Home/Home';
import DonationDetails from '../Component/DonationDetails/DonationDetails';

import Donation from '../Component/Donation/Donation';
import Statistics from '../Component/Statistics/Statistics';
import ErrorPage from '../Error/ErrorPage';

const myCreateRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/donation.json'),
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
      },
      {
        path: '/donations/:id',
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('/donation.json'),
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

export default myCreateRoute;
