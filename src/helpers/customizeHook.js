import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  getPeopleRequest,
  openModalRequest,
  closeModalRequest,
  getEachPersonFiledRequest,
} from '../store/modules/starWars/getAllPeople';

const useCustomizeHooks = () => {
  const dispatch = useDispatch();
  const [eachPerson, setEachPerson] = useState('');
  const [eachFilm, setEachFilm] = useState(false);
  const [eachSpecies, setEachSpecies] = useState(false);
  const [eachVehicles, setEachVehicles] = useState(false);
  const [eachStarShips, setEachStarShips] = useState(false);

  React.useEffect(() => {
    const getPeople = async () => {
      const page = 1;
      dispatch(await getPeopleRequest({ pageNumber: page }));
    };
    getPeople();
  }, []);

  const open = async (name, mainData) => {
    const details = mainData.filter((value) => value.name === name);
    setEachPerson(details[0]);
    dispatch(await openModalRequest());
  };

  const close = async () => {
    dispatch(await closeModalRequest());
    setEachFilm(false);
    setEachSpecies(false);
    setEachVehicles(false);
    setEachStarShips(false);
  };
  const handleFilm = async (url) => {
    dispatch(await getEachPersonFiledRequest({ url }));
    setEachFilm(true);
    setEachSpecies(false);
    setEachVehicles(false);
    setEachStarShips(false);
  };
  const handleSpecie = async (url) => {
    dispatch(await getEachPersonFiledRequest({ url }));
    setEachFilm(false);
    setEachSpecies(true);
    setEachVehicles(false);
    setEachStarShips(false);
  };
  const handleVehicle = async (url) => {
    dispatch(await getEachPersonFiledRequest({ url }));
    setEachFilm(false);
    setEachSpecies(false);
    setEachVehicles(true);
    setEachStarShips(false);
  };
  const handleStarShips = async (url) => {
    dispatch(await getEachPersonFiledRequest({ url }));
    setEachFilm(false);
    setEachSpecies(false);
    setEachVehicles(false);
    setEachStarShips(true);
  };

  const next = async (nextPage) => {
    const currentPage = +nextPage;
    dispatch(await getPeopleRequest({ pageNumber: currentPage }));
  };

  const previous = async (previousPage) => {
    const currentPage = +previousPage - 1;
    dispatch(await getPeopleRequest({ pageNumber: currentPage }));
  };
  return {
    eachPerson,
    eachFilm,
    eachSpecies,
    eachVehicles,
    eachStarShips,
    open,
    close,
    handleVehicle,
    handleStarShips,
    handleFilm,
    handleSpecie,
    next,
    previous,
  };
};
export default useCustomizeHooks;
