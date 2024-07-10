"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response=await fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "Abhishek133", email: "abhishek232@yopmail" }),
      });
      
      const data = await response.json();
      console.log('Post created:', data);

    } catch (error) {
      console.error(error);
    }
  };



  useEffect(()=>{
    const getAllUser=async()=>{

      const response=await fetch("/api/add-post", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data=await response.json();
      setState(data)
      console.log('res',response);
    }

    getAllUser()

  },[])

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <button
        className="bg-red-600 p-4 text-white rounded-md"
        onClick={handleSubmit}
      >
        Add User
      </button>

      <div className="font-extrabold text-lg mt-6">User List</div>
    </main>
  );
}
