import { MisdemeanourKind } from "../types/misdemeanours.types";
import React, { useState } from "react";
import axios from "axios";

type ReasonForContact = MisdemeanourKind | "just-talk";

interface Confession {
  subject: string;
  details: string;
  reason: ReasonForContact;
}

const Confession = () => {
  //  const [confessions, setConfessions] = useState<Confession[]>([]);
  // const effectCalled = useRef<boolean>(false);

  const [subject, setSubject] = useState<string>("");
  const [details, setDetails] = useState<string>("");

  const BASE_URL = "http://localhost:8080/api";

  const confessButton = () => {
    console.log(subject);
    console.log(reason);
    console.log(details);

    if (subject.length !== 0 && reason.length !== 0 && details.length !== 0) {
      console.log("values", subject, reason, details);
      return (
        <div>
          <button className="confess-button" onClick={storeConfession}>
            Confess
          </button>
        </div>
      );
    }
  };

  const storeConfession = async () => {
    console.log(subject);
    console.log(reason);
    console.log(details);

    const confessInput = { subject, details, reason };
    console.log(confessInput);

    try {
      const response = await axios.put(`${BASE_URL}/confess/${confessInput}`);
      console.log(response);
    } catch (error) {
      console.error("Error sending confession to server:", error);
    }
  };

  const getInitialReasonState = () => {
    const reason = "just-talk";
    return reason;
  };

  const [reason, setReason] = useState(getInitialReasonState);

  const handleChangeSubject = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSubject(e.target.value);
  };

  const handleChangeReason = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setReason(e.target.value);
  };

  const handleChangeDetails = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDetails(e.target.value);
  };

  return (
    <section>
      <p>
        It's very difficult to catch people committing misdemeanours so we
        appreciate it when citizens confess to us directly.
      </p>
      <p>
        However, if you're just having a hard day and need to vent then you're
        welcome to contact us here to. It's up to you.
      </p>

      <div className="feedback-form">
        <form className="form-style-1">
          <div>
            <label htmlFor="subject"> Subject </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={handleChangeSubject}
            />
          </div>
          <div>
            <label htmlFor="reason"> Reason for Contact </label>
            <select
              id="reason"
              name="reason"
              value={reason}
              onChange={handleChangeReason}
            >
              <option value="just-talk"> Just Talk</option>
              <option value="rudeness"> Rudeness 😜</option>
              <option value="Lift"> Lift 🗣️</option>
              <option value="vegetables"> Vegetables 🥗</option>
              <option value="united"> United 😈</option>
            </select>
          </div>
          <fieldset>
            <div>
              <label htmlFor="details"> Details </label>
              <input
                type="textarea"
                id="details"
                name="details"
                value={details}
                onChange={handleChangeDetails}
              />
            </div>
          </fieldset>

          <p>
            {subject} {reason} {details}
          </p>
          {confessButton()}
        </form>
      </div>
    </section>
  );
};

export default Confession;
