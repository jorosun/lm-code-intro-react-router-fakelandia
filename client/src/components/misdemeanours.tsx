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
  const photo_URL = `https://picsum.photos/${photo_width}/${photo_height}`;

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

  return (
    <section>
      <h1> Welcome to the Misdemeanours page</h1>

      <table id="misdemeanours">
        <thead>
          <tr>
            <th>Citizen Id</th>
            <th>Date</th>
            <th>Misdemeanour</th>
            <th>Punishment</th>
          </tr>
        </thead>
        <tbody>
          {misdemeanours.map((misdemeanour) => {
            return (
              <tr>
                <td>{misdemeanour.citizenId} </td>
                <td>{misdemeanour.date} </td>
                <td>{misdemeanour.misdemeanour}</td>
                <img src={photo_URL} alt="image of punishment" />;
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default MisdemeanoursPage;
