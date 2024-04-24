// pages/notes/[id].tsx

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ViewNote from "@/app/components/ViewNote";
import Header from "@/app/components/Header";

const NoteDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(`/api/notes?id=${id}`);
        setNote(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching note:", error);
      }
    };

    if (id) {
      fetchNote();
    }
  }, [id]);

  return (
    <div>
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : note ? (
        <ViewNote note={note} />
      ) : (
        <p>Note not found</p>
      )}
    </div>
  );
};

export default NoteDetailsPage;
