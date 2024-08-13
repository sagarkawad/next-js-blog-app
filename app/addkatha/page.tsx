import axios from "axios";
import React from "react";
import Button from "@/components/Button";

async function postKatha() {
  try {
    const res = await axios.post("http://localhost:3000/api/topics", {
      title: "dummy title",
      description: "dummy description",
    });
    console.log("res - ", res);
  } catch (err) {
    console.log("error - ", err);
  }
}

const AddKatha = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-3/4">
        <label htmlFor="add-topic">Your Topic here...</label>
        <input
          type="text"
          name="add-topic"
          placeholder="Add Topic"
          className="border"
        />
        <label htmlFor="add-katha">Your Katha here...</label>
        <input
          type="text"
          name="add-katha"
          placeholder="Add Your Katha"
          className="border"
        />
      </div>
      <Button clickHandler={postKatha}>Post</Button>
    </div>
  );
};

export default AddKatha;
