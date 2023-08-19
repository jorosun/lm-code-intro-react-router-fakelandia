import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Misdemeanour } from "../types/misdemeanours.types";

const MisdemeanoursPage: React.FC = () => {
  const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);

  const effectCalled = useRef<boolean>(false);

  const BASE_URL = `http://localhost:8080/api/`;
  const amount = 50;
  const photo_width = 150;
  const photo_height = 150;

  const table_URL = BASE_URL + `misdemeanours/${amount}`;
  const photo_URL = `https://picsum.photos/${photo_width}/${photo_height}?random=`;

  useEffect(() => {
    if (effectCalled.current) return;
    effectCalled.current = true;

    const fetchMisdemeanours = async () => {
      try {
        const response = await axios.get(table_URL);
        setMisdemeanours(response.data.misdemeanours);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMisdemeanours();
  }, [misdemeanours, table_URL]);

  const getInitialState = () => {
    const value = "All";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <section>
      <h1> Welcome to the Misdemeanours page</h1>

      <table id="misdemeanours">
        <thead>
          <tr>
            <th>Citizen Id</th>
            <th>Date</th>
            <th>
              <label htmlFor="filter"> Misdemeanour </label>
              <select
                id="filter"
                name="filter"
                value={value}
                onChange={handleChange}
              >
                <option value="all"> All</option>
                <option value="rudeness"> Rudeness 😜</option>
                <option value="Lift"> Lift 🗣️</option>
                <option value="vegetables"> Vegetables 🥗</option>
                <option value="united"> United 😈</option>
              </select>
            </th>
            <th>Punishment</th>
          </tr>
        </thead>
        <tbody>
          {misdemeanours
            .filter((misdemeanour) => misdemeanour.misdemeanour === `${value}`)
            .map((filtered) => {
              const randomNumber = Math.floor(Math.random() * amount);
              return (
                <tr>
                  <td>{filtered.citizenId} </td>
                  <td>{filtered.date} </td>
                  <td>{filtered.misdemeanour}</td>
                  <img
                    src={photo_URL + randomNumber}
                    alt="image of punishment"
                  />
                </tr>
              );
            })}
          ;
        </tbody>
      </table>
    </section>
  );
};

export default MisdemeanoursPage;
