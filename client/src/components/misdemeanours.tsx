import React, { useState, useEffect, useRef } from "react";

import { Misdemeanour } from "../types/misdemeanours.types";

const MisdemeanoursPage: React.FC = () => {
  const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);
  const effectCalled = useRef<boolean>(false);

  const BASE_URL = "http://localhost:8080/api/";
  const PHOTO_URL = "https://picsum.photos/";
  const amount = 3;

  useEffect(() => {
    const fetchMisdemeanours = async () => {
      const response = await fetch(BASE_URL + `misdemeanours/${amount}`);
      const data = await response.json();
      setMisdemeanours(data.misdemeanour);
    };

    if (effectCalled.current) return;
    fetchMisdemeanours();
    effectCalled.current = true;
  }, []);

  return (
    <section>
      <h1> Welcome to the Misdemeanours Page</h1>

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
                <td>Punishment</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default MisdemeanoursPage;
