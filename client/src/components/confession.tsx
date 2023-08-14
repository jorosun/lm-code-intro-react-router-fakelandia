import {
  JustTalk,
  JUST_TALK,
  Misdemeanour,
  MisdemeanourKind,
  MISDEMEANOURS,
} from "../types/misdemeanours.types";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

type ReasonForContact = MisdemeanourKind | "just-talk";

interface Confession {
  subject: string;
  reason: ReasonForContact;
  details: string;
}

const BASE_URL = "http://localhost:8080/api";

const Confession = () => {
  const [confessions, setConfessions] = useState<Confession[]>([]);
  const effectCalled = useRef<boolean>(false);

  const [subject, setSubject] = useState<string | null>(null);
  const [reason, setReason] = useState<ReasonForContact | null>(null);
  const [detail, setDetail] = useState<string | null>(null);

  const BASE_URL = "http://localhost:8080/api";

  const checkConfession = async (
    subject: string,
    reason: ReasonForContact,
    details: string
  ) => {
    if (subject !== null || reason !== null || details != null) {
      const { subject, reason, details } = useParams<{
        subject: string;
        reason: ReasonForContact;
        details: string;
      }>();
    }
  };

  const storeConfession = async () => {
    try {
      const response = await axios({
        method: "put",
        url: `${BASE_URL}/confess/`,
        params: { Confession },
      });
    } catch (error) {
      console.error("Error sending confession to server:", error);
    }
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
            <label htmlFor="subject">Subject </label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div>
            <label htmlFor="reason"> Reason for Contact </label>
            <select name="reason" id="reason" required>
              <option value="rudeness"> Rudeness </option>
              <option value="vegetables"> Vegetables </option>
              <option value="lift"> Lift </option>
              <option value="united"> United </option>
              <option value="just-talk"> Just Talk </option>
            </select>
          </div>
          <div>
            <label htmlFor="details"> Details </label>
            <textarea id="details" name="details" cols={50} rows={5} required />
          </div>
        </form>
        <div className="confess-button">
          <button
            type="button"
            title="confess"
            value="Confess"
            onClick={() => checkConfession(subject, reason, details)}
          />
        </div>
      </div>
    </section>
  );
};

export default Confession;
