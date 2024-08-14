"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddKatha = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  async function postData() {
    try {
      const res = await axios.post("http://localhost:3000/api/topics", {
        title: title,
        description: description,
      });
      alert(res.data.msg);
      router.push("/");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-3/4">
        <label htmlFor="add-topic" className="mt-4">
          Your Topic here...
        </label>
        <input
          type="text"
          name="add-topic"
          placeholder="Add Topic"
          className="border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="add-katha" className="mt-4">
          Your Katha here...
        </label>
        <input
          type="text"
          name="add-katha"
          placeholder="Add Your Katha"
          className="border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button
        className="mt-4 bg-green-400 rounded w-24 h-8 text-white"
        onClick={postData}
      >
        Post
      </button>
    </div>
  );
};

export default AddKatha;
