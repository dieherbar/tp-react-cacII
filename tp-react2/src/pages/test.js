//import Boton from "@/components/buttons/loginBtn"
import Barra from "@/components/navBar/barra.js"
import React, { useState } from 'react';
import Head from "next/head";
import Footer from "../components/footer/Footer"
//import SocialLogin from "@/components/login/SocialLogin";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import styles from '@/styles/Home.module.css'
//import React from 'react';
import ReactDOM from 'react-dom';
//import Ingresar from "@/components/login/login";
//import LoginAi from "@/components/login/LoginAi";
//import LoginButton from "@/components/buttons/loginBtn";
import Parrafo from "@/components/ParrafoRelleno";
import Titulo from "@/components/headers/titles";

const Test = () => {
    const [tasks, setTasks] = useState([]);

  const addTask = title => {
    const newTask = {
      id: Date.now(),
      title
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

//function Test() {       
    return(
        <>
<Head>
<title>Task List</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>
</Head>
       <div className={styles.cuerpo}>
 <Barra></Barra>
       <Titulo title="Titulo del test page"></Titulo>
        <Parrafo></Parrafo>

        {/* <SocialLogin></SocialLogin> */}
        
        {/* <LoginAi></LoginAi> */}
        {/* <LoginButton></LoginButton> */}
  
        <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />

        <Footer></Footer>

        </div>
        </>
    )
}
export default Test;