import React from 'react';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';

import './home.scss';
import { Card } from '../../components/Card';
import Pagination from '../../components/Pagination';
import AppModal from '../../components/Modal';
import Spinner from '../../components/Spinner';
import InfoBox from '../../components/InfoBox';
import useCustomizeHooks from '../../helpers/customizeHook';
import Button from '../../components/Button';

/**
 * Home Component
 *  @returns home element
 */
const Home = () => {
  const {
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
  } = useCustomizeHooks();
  const getAllPeople = useSelector((state) => state.getAllPeople);
  const getAllField = useSelector((state) => state.getAllField);

  const {
    data, modal, loading, error,
  } = getAllPeople;
  const { eachData, loading: isLoading, error: isError } = getAllField;

  const mainData = data && data.data ? data.data.results : [];
  const getNext = data && data.data ? data.data.next : '';
  const nextPage = getNext ? getNext.split('=')[1] : getNext;
  const getPrevious = data && data.data ? data.data.previous : '';
  const previousPage = getPrevious ? getPrevious.split('=')[1] : getPrevious;
  const filmData = eachPerson ? eachPerson.films : [];
  const specieData = eachPerson ? eachPerson.species : [];
  const vehiclesData = eachPerson ? eachPerson.vehicles : [];
  const starShipsData = eachPerson ? eachPerson.starships : [];
  const eachField = eachData && eachData.data ? eachData.data : [];

  return (
    <div className="home">
      <div className="home_intro">
        <div className="home_title">
          <h3 className="title">People</h3>
        </div>
      </div>
      {error && <InfoBox message={error} />}
      <div className="home_cards">
        { loading ? <Spinner />
          : mainData.map((value) => (
            <Card
              openModal={() => open(value.name, mainData)}
              key={value.name}
              name={value.name}
              gender={value.gender}
              birthYear={value.birth_year !== 'unknown'
                ? <Moment format="YYYY">{value.birth_year.match(/\d+/g)}</Moment>
                : 'unknown'}
              birthYearDescription={value.birth_year.match(/[a-zA-Z]+/g)[0] === 'BBY' ? 'BBY' : 'ABY'}
            />
          ))}
      </div>
      <Pagination
        next={() => next(nextPage)}
        previous={() => previous(previousPage)}
        previousPage={previousPage}
        nextPage={nextPage}
      />
      <AppModal
        open={modal}
        onCloseModal={close}
        isError={isError}
        html={(
          isLoading ? <div className="loading">Loading...</div> : (
            <Card
              horizontal
              showEachFilm={(eachFilm
                ? (
                  <div>
                    <h3>{eachField.title}</h3>
                    <h4>
                    Episode
                      {eachField.episode_id}
                    </h4>
                    <p>{eachField.opening_crawl}</p>
                    <div className="card_list">
                      <div className="card_list-item">
                        <h4>Director</h4>
                        <p>{eachField.director}</p>
                      </div>
                      <div className="card_list-item">
                        <h4>Producer</h4>
                        <p>{eachField.producer}</p>
                      </div>
                      <div className="card_list-item">
                        <h4>Release Date</h4>
                        <h5>{eachField.release_date}</h5>
                      </div>
                    </div>
                  </div>
                ) : ''
            )}
              showEachSpecies={(eachSpecies
                ? (
                  <div>
                    <h3>{eachField.name}</h3>
                    <div>
                      <p>
                        Created
                        {'  '}
                        <span><Moment format="MM/DD/YYYY HH:mm">{eachField.created}</Moment></span>
                      </p>
                    </div>
                    <div className="card_list min-width ">
                      <div className="card_list-item w-100 mt-10 card_circle ">
                        <h4>Classification</h4>
                        <p>{eachField.classification}</p>
                      </div>
                      <div className="card_list-item w-100 mt-10 card_circle ">
                        <h4>Designation</h4>
                        <p>{eachField.designation}</p>
                      </div>
                      <div className="card_list-item w-100 mt-10 card_circle mr-2 ">
                        <h4>Average Height</h4>
                        <p>{eachField.average_height}</p>
                      </div>
                      <div className="card_list-item w-100 mt-10 card_circle mr-2 ">
                        <h4>Average_Lifespan</h4>
                        <p>{eachField.average_lifespan}</p>
                      </div>
                      <div className="card_list-item w-100 mt-10 card_circle ">
                        <h4>Language</h4>
                        <h5>{eachField.language}</h5>
                      </div>
                      <div className="card_list-item w-100 mt-10 card_circle ">
                        <h4>Hair Colors</h4>
                        <p>{eachField.hair_colors}</p>
                      </div>
                      <div className="card_list-item w-100 mt-10 card_circle ">
                        <h4>Eye Colors</h4>
                        <h5>{eachField.eye_colors}</h5>
                      </div>
                    </div>
                  </div>
                ) : ''
            )}
              showEachVehicles={(eachVehicles
                ? (
                  <div>
                    <h3>{eachField.name}</h3>
                    <div>
                      <p>
                        Created
                        {'  '}
                        <span><Moment format="MM/DD/YYYY HH:mm">{eachField.created}</Moment></span>
                      </p>
                    </div>
                    <div className="card_list min-width ">
                      <div className="card_list-item w-100 mt-10 card_circle ">
                        <h4>Credits</h4>
                        <p>{eachField.cost_in_credits}</p>
                      </div>
                      <div className="card_list-item w-100 mt-10 card_circle ">
                        <h4>crew</h4>
                        <p>{eachField.crew}</p>
                      </div>
                      <div className="card_list-item w-100 mt-10 card_circle ">
                        <h4>passengers</h4>
                        <p>{eachField.passengers}</p>
                      </div>
                      <div className="card_list-item w-100 mt-10 card_circle ">
                        <h4>Capacity</h4>
                        <p>{eachField.cargo_capacity}</p>
                      </div>
                      <div className="card_list-item w-100 mt-10 card_circle ">
                        <h4>consumables</h4>
                        <p>{eachField.consumables}</p>
                      </div>
                      <div className="card_list-item w-100 mt-10 card_circle ">
                        <h4>Vehicle</h4>
                        <h5>{eachField.vehicle_class}</h5>
                      </div>
                      <div className="card_list-item w-100 mt-10 card_circle ">
                        <h4>model</h4>
                        <p>{eachField.model}</p>
                      </div>
                      <div className="card_list-item w-100 mt-10 card_circle ">
                        <h4>manufacturer</h4>
                        <h5>{eachField.manufacturer}</h5>
                      </div>
                    </div>
                  </div>
                ) : ''
            )}
              showEachStarShips={(eachStarShips
                ? (
                  <div>
                    <h3>{eachField.name}</h3>
                    <div>
                      <p>
                        Created
                        {'  '}
                        <span><Moment format="MM/DD/YYYY HH:mm">{eachField.created}</Moment></span>
                      </p>
                    </div>
                    <div className="card_list min-width ">
                      <div className="card_list-item w-100 mt-10 mr-2 card_circle ">
                        <h4>Credits</h4>
                        <p>{eachField.cost_in_credits}</p>
                      </div>
                      <div className="card_list-item w-100 mt-10 mr-2 card_circle ">
                        <h4>Crew</h4>
                        <p>{eachField.crew}</p>
                      </div>
                      <div className="card_list-item w-100 mt-10 mr-2 card_circle ">
                        <h4>Passengers</h4>
                        <p>{eachField.passengers}</p>
                      </div>
                      <div className="card_list-item w-100 mt-10 mr-2 card_circle ">
                        <h4>Capacity</h4>
                        <p>{eachField.cargo_capacity}</p>
                      </div>
                      <div className="card_list-item w-100 mt-10 mr-2 card_circle ">
                        <h4>Hyper_Drive_Rating</h4>
                        <p>{eachField.hyperdrive_rating}</p>
                      </div>
                      <div className="card_list-item w-100 mt-10 mr-2 card_circle ">
                        <h4>MGLT</h4>
                        <h5>{eachField.MGLT}</h5>
                      </div>
                      <div className="card_list-item w-100 mt-10 mr-2 card_circle ">
                        <h4>Model</h4>
                        <p>{eachField.model}</p>
                      </div>
                      <div className="card_list-item w-100 mt-10 mr-2 card_circle ">
                        <h4>Manufacturer</h4>
                        <h5>{eachField.manufacturer}</h5>
                      </div>
                      <div className="card_list-item w-100 mt-10 mr-2 card_circle ">
                        <h4>Starship</h4>
                        <h5>{eachField.starship_class}</h5>
                      </div>
                    </div>
                  </div>
                ) : ''
            )}
              films={
                filmData.length ? filmData.map((value) => (
                  <Button
                    name={value}
                    button="card_film-button film mr-2"
                    key={value}
                    handleClick={() => handleFilm(value)}
                  />
                )) : 'No film available'
            }
              species={
            specieData.length ? specieData.map((value) => (
              <Button
                name={value}
                button="card_film-button mr-2"
                type="submit"
                key={value}
                handleClick={() => handleSpecie(value)}
              />
            )) : 'No specie available'
            }
              vehicles={
              vehiclesData.length ? vehiclesData.map((value) => (
                <Button
                  name={value}
                  button="card_film-button mr-2"
                  type="submit"
                  key={value}
                  handleClick={() => handleVehicle(value)}
                />
              )) : 'No vehicles available'
            }
              starShips={
            starShipsData.length ? starShipsData.map((value) => (
              <Button
                name={value}
                button="card_film-button mr-2"
                type="submit"
                key={value}
                handleClick={() => handleStarShips(value)}
              />
            )) : 'No star ships available'
            }
            />
          )
        )}
      />
    </div>
  );
};

export default Home;
