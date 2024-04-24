import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center w-full  bg-gradient-to-b from-purple-700 to-purple-300 h-screen ">
      <Header />
      <div className="text-center p-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Notes App</h1>
        <p className="text-lg mb-8">
          This is a simple app where you can view and add notes to keep track of
          your thoughts and ideas.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="p-4 bg-gray-200 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">View Your Notes</h2>
          <p className="text-lg mb-4">
            Click the button below to view your existing notes.
          </p>
          <Link
            className="px-6 py-3 bg-indigo-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            href="/notes"
          >
            View Notes
          </Link>
        </div>

        <div className="p-4 bg-gray-200 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Add a New Note</h2>
          <p className="text-lg mb-4">
            Ready to add a new note? Click the button below to get started.
          </p>
          <Link
            className="px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-green-600 transition duration-300"
            href="/add-note"
          >
            Add Note
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
