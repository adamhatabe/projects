// pages/api/notes.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET" && !req.query.id) {
    try {
      const notes = await prisma.note.findMany();
      res.status(200).json(notes);
    } catch (error) {
      console.error("Error fetching notes:", error);
      res.status(500).json({ error: "Error fetching notes" });
    }
  } else if (req.method === "POST") {
    const { title, content } = req.body;
    try {
      const newNote = await prisma.note.create({
        data: {
          title,
          content,
        },
      });
      res.status(201).json(newNote);
    } catch (error) {
      console.error("Error creating note:", error);
      res.status(500).json({ error: "Error creating note" });
    }
  } else if (req.method === "PATCH") {
    const { id, title, content } = req.body;
    try {
      const updatedNote = await prisma.note.update({
        where: { id },
        data: {
          title,
          content,
        },
      });
      res.status(200).json(updatedNote);
    } catch (error) {
      console.error("Error updating note:", error);
      res.status(500).json({ error: "Error updating note" });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.body;
    try {
      await prisma.note.delete({
        where: { id },
      });
      res.status(204).end();
    } catch (error) {
      console.error("Error deleting note:", error);
      res.status(500).json({ error: "Error deleting note" });
    }
  } else if (req.method === "GET" && req.query) {
    // Fetch a single note by its ID
    const noteId = parseInt(req.query.id);
    try {
      const note = await prisma.note.findUnique({
        where: { id: noteId },
      });
      if (!note) {
        res.status(404).json({ error: "Note not found" });
      } else {
        res.status(200).json(note);
      }
    } catch (error) {
      console.error("Error fetching note:", error);
      res.status(500).json({ error: "Error fetching note" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST", "PATCH", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
