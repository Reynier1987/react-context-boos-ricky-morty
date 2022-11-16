import React from 'react'
import { UserContext } from '../context/userContext'
import { useContext } from 'react'
import { Pagination } from './pagination';


export const ChildOne = () => {
    const {character} = useContext(UserContext)
  return (
    <>
      <div className="row">
        <Pagination />
        {character.map((char) => (
          <>
            <div className=" col-3 p-0 m-0 border-1 border-dark">
              <div className="card-body">
                <img
                  src={char.image}
                  className="card-img-top mb-0 mt-3"
                  style={{ width: 230 }}
                  alt={char.name}
                ></img>
                <h5 className="card-title">Name: {char.name}</h5>
                <p className="card-text">Species: {char.species}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );


}
/*   */