export function saveToLocalStorage(newData) {
  if (!localStorage.getItem("bookTicketCredentials")) {
    localStorage.setItem("bookTicketCredentials", JSON.stringify([]));
  }

  const oldData = JSON.parse(localStorage.getItem("bookTicketCredentials"));

  localStorage.setItem(
    "bookTicketCredentials",
    JSON.stringify([...oldData, newData])
  );
}
