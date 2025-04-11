import { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Students - UNW CS Club",
  description:
    "This is the official site of University of Northwestern " +
    "- St.Paul's very own Computer Science Club.",
};

const students = [
  { id: "daniel-deutsch", name: "Daniel Deutsch" },
  { id: "/breyon-gunn", name: "Breyon Gunn" },
  { id: "/violet-haveman", name: "Violet Haveman" },
  { id: "/andrew-hayes", name: "Andrew Hayes" },
  { id: "/carter-leitch", name: "Carter Leitch" },
  { id: "/austin-long", name: "Austin Long" },
  { id: "/josie-mellick", name: "Josie Mellick" },
  { id: "/josiah-paul", name: "Josiah Paul" },
  { id: "/dylan-weakly", name: "Dylan Weakly" },
  // Add more students as needed
];

const StudentsPage: React.FC = () => {
  return (
    <div>
      <h1 className="pt-10 text-5xl font-extrabold">Students List</h1>
      <ul className="font- pt-5 text-xl text-gray-300">
        {students.map((student) => (
          <li
            className="mt-3 transition-colors duration-500 ease-in-out hover:font-bold hover:text-white"
            key={student.id}
          >
            <Link href={`/students/${student.id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsPage;
