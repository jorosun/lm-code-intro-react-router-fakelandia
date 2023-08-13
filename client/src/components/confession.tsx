import {
  MisdemeanourKind,
  MISDEMEANOURS,
  Misdemeanour,
} from "../types/misdemeanours.types";

const Confession = () => {
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

      <div>
        <label for="subject">Subject </label>
        <input type="text" id="subject" name="subject" required />
      </div>

      <div>
        <label for="reason">Reason for Contact </label>
        <input type="text" id="reason" name="reason" required />
      </div>

      <div className="feedback-form">
        <form className="form-style-1">
          <fieldset>
            <div>
              <input type="text" id="message" name="message" required />
            </div>

            <button title="confess" value="Confess" />
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Confession;
