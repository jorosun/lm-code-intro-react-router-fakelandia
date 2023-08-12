import {
  MisdemeanourKind,
  MISDEMEANOURS,
  Misdemeanour,
} from "../types/misdemeanours.types";

const Misdemeanours = () => {
  return (
    <section>
      <h1> Welcome to the Misdemeanours page</h1>
      <table id="misdemeanours">
        <tr>
          <th>Citizen Id</th>
          <th>Date</th>
          <th>Misdemeanour</th>
          <th>Punishment</th>
        </tr>
        <tr>
          <td>citizenId </td>
          <td>Date</td>
          <td>Misdemeanour</td>
          <td>Punishment</td>
        </tr>
      </table>
    </section>
  );
};

export default Misdemeanours;
