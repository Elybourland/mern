import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most skyscrapers in the world!',
    imageUrl: 'https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=1600',
    address: '20 W 34th St., New York, NY 10001',
    location: {
      lat: 40.7484405,
      long: -73.9882447
    },
    creator: 'u1'  
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most skyscrapers in the world!',
    imageUrl: 'https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=1600',
    address: '20 W 34th St., New York, NY 10001',
    location: {
      lat: 40.7484405,
      long: -73.9882447
    },
    creator: 'u2'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;