import React from 'react';
import { userPramas, useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: '1',
    title: 'Ethiopian Christian Fellowship Church',
    description: 'One of the most awesome Ethiopian Church in kansas areas',
    imageUrl: '/images/image1.jpg',
    address: '14345 W 119th St, Olathe, KS 66062',
    location: {
      lat: 38.912180,
      lng: -94.752210
    },
    creator: '1'
  },
  {
    id: '2',
    title: 'Kansas City Zoo',
    description: ' The zoo has a Friends of the Zoo program. It is home to more than 1,300 animals and is an accredited member of the Association of Zoos and Aquariums!',
    imageUrl: '/images/image5.jpg',
    address: '6800 Zoo Dr, Kansas City, MO 64132',
    location: {
      lat: 39.006828,
      lng: -94.531357
    },
    creator: '2'
  }
  ,
  {
    id: '3',
    title: 'Rose Matewos',
    description: 'The Most Awesome and Beautiful Girl On The Earth!',
    imageUrl: '/images/image4.jpg',
    address: '6800 I am Awesome Dr, Olathe KS 00000',
    location: {
      lat: 39.006828,
      lng: -94.531357
    },
    creator: '3'
  }
];
  
const UserPlaces = () => {
const userId = useParams().id;
const addedPlaces =  DUMMY_PLACES.filter(place => place.creator === userId);
  
return <PlaceList items={addedPlaces} />;
};

export default UserPlaces;