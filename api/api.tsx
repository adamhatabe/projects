import axios from "axios";

const deleteNote = (id: number) => {
  const isConfirmed = confirm(`Are you sure you want to delete this note?`);
  if (!isConfirmed) {
    return; 
  }
  axios({
    method: "DELETE",
    url: `/api/notes`,
    data: {
      id: id,
    },
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      window.location.href = "/notes";
    });
};

export default deleteNote;
