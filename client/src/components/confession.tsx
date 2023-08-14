import {
  JustTalk,
  JUST_TALK,
  Misdemeanour,
  MisdemeanourKind,
  MISDEMEANOURS,
} from "../types/misdemeanours.types";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

type ReasonForContact = MisdemeanourKind | "just-talk";

interface Confession {
  subject: string;
  reason: ReasonForContact;
  details: string;
}

const Confession = () => {
  const [confessions, setConfessions] = useState<Confession[]>([]);
  const effectCalled = useRef<boolean>(false);

  const [subject, setSubject] = useState<string | null>(null);
  const [reason, setReason] = useState<ReasonForContact | null>(null);
  const [detail, setDetail] = useState<string | null>(null);

  const BASE_URL = "http://localhost:8080/api";

  const confessButton = () => {
    if (subject !== null || reason !== null || detail != null) {
      return (
        <div className="confess-button">
          <button type="button" title="confess" value="Confess" />
        </div>
      );
    }
  };

  const storeConfession = async () => {
    try {
      await axios({
        method: "put",
        url: `${BASE_URL}/confess`,
        params: {
          subject,
          reason,
          detail,
        },
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
            <input type="text" id="reason" name="reason" required />
          </div>
          <fieldset>
            <div>
              <label htmlFor="details"> Details </label>
              <input type="text" id="details" name="details" required />
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Confession;
