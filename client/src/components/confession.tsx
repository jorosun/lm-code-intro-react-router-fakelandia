import {
  JustTalk,
  JUST_TALK,
  Misdemeanour,
  MisdemeanourKind,
  MISDEMEANOURS,
} from "../types/misdemeanours.types";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Confession = () => {
  const [confessions, setConfessions] = useState<Confessions[]>([]);
  const effectCalled = useRef<boolean>(false);

  const BASE_URL = "http://localhost:8080/api";

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

            <button type="button" title="confess" value="Confess" />
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Confession;
