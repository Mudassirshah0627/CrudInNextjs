"use client";
import { CreateUser } from "@/Redux/Features/UserDetails";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import CreateUser from '../Redux/Features/UserDetails/'
const CreateForm = () => {
  const router = useRouter();
  const [users, setUsers] = useState({});

  const getUsersData = (e: any) => {
    setUsers({ ...users, [e.target.name]: [e.target.value] });
    // console.log(users);
  };
  const dispatch = useDispatch();
  const handleForm = (e: any) => {
    e.preventDefault();
    console.log(users);
    dispatch(CreateUser(users));
  };

  return (
    <div>
      <h1 className="text-center font-semibold text-3xl mb-12 mt-2">
        Create User
      </h1>
      <form className="flex flex-col gap-y-6" onSubmit={handleForm}>
        <div className="flex items-center justify-between gap-x-12">
          <label className="text-xl font-semibold">Name</label>
          <input
            type="text"
            className="outline-none border-2 py-1 px-4 text-black rounded-md"
            name="name"
            placeholder="name"
            onChange={getUsersData}
          />
        </div>
        <div className="flex items-center justify-between gap-x-12">
          <label className="text-xl font-semibold">Email</label>
          <input
            type="text"
            className="outline-none border-2 py-1 px-4 text-black rounded-md"
            name="email"
            onChange={getUsersData}
            placeholder="email"
          />
        </div>
        <div className="flex items-center justify-between gap-x-12">
          <label className="text-xl font-semibold">Age</label>
          <input
            type="text"
            className="outline-none border-2 py-1 px-4 text-black rounded-md"
            name="age"
            onChange={getUsersData}
            placeholder="age"
          />
        </div>
        <div className="flex items-center justify-center gap-x-12">
          <div className="flex items-center gap-x-2">
            <label>male</label>
            <input
              type="radio"
              name="male"
              value="male"
              id=""
              onChange={getUsersData}
            />
          </div>

          <div className="flex items-center gap-x-2">
            <label>female</label>
            <input
              type="radio"
              name="female"
              value="female"
              onChange={getUsersData}
              id=""
            />
          </div>
        </div>
        <button
          className="bg-blue-500 text-white py-3 px-6 rounded-md hover:scale-95"
          onClick={() => router.push("/readusers")}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
