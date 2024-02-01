import { saveToLocalStorage } from "../../../u/utils";
import "./book-ticket-modal.css";

const BookTicketModal = ({ openModal, onCloseModal }) => {
  return (
    <aside className={`book-ticket ${openModal ? "show-modal" : ""}`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
    
          const formData = new FormData(e.target)

          console.log(Object.fromEntries(formData))

          saveToLocalStorage(Object.fromEntries(formData));
        }}
      >
        <button onClick={onCloseModal} className="close-modal-btn">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </button>
        <label for="movieName">Movie Name:</label>
        <input
          type="text"
          id="movieName"
          name="movieName"
          readonly
          value="All Rise"
        />

        <label for="genres">Genres:</label>
        <input
          type="text"
          id="genres"
          name="genres"
          readonly
          value="Drama, Legal"
        />

        <label for="premiereDate">Premiere Date:</label>
        <input
          type="text"
          id="premiereDate"
          name="premiereDate"
          readonly
          value="2019-09-23"
        />

        <label for="userName">Your Name:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="Enter your name"
        />

        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />

        <label for="seats">Number of Seats:</label>
        <input
          type="number"
          id="seats"
          name="seats"
          placeholder="Enter the number of seats"
        />

        <button className="modal-confirm-btn" type="submit">
          Confirm Ticket
        </button>
      </form>
    </aside>
  );
};

export default BookTicketModal;
