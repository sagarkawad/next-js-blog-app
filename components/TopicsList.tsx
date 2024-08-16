"use client";
import React from "react";
import axios from "axios";
import Button from "./Button";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("error - ", error);
  }
};

const deleteTopics = async (id: any) => {
  console.log("inside the delete topics");
  try {
    axios.post("http://localhost:3000/api/topics/delete", {
      id,
    });
    alert("katha removed");
  } catch (err) {
    console.log(err);
  }
};

const TopicsList = async () => {
  const data = await getTopics();
  const topics = (data && data.msg) || [];
  console.log(topics);
  return (
    <section className="flex flex-col items-around   p-4 w-3/4">
      {topics.map((el: { _id: any; title: string; description: string }) => {
        return (
          <div
            className="flex justify-between bg-green-200 my-2 p-4"
            key={el._id}
          >
            <div>
              <h2 className="font-bold">{el.title}</h2>
              <p>{el.description}</p>
            </div>
            <div className="flex">
              <p>✍️</p>
              {/* <p onClick={() => deleteTopics(el._id)}>✖️</p> */}
              <Button onClickHandler={() => deleteTopics(el._id)}>✖️</Button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TopicsList;
