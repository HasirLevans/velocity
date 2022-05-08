import React from "react";
import "./rightbar.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ConnContext } from "../../context/ConnContext";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <img className="rightbarAd" src="/assets/ad/3.jpg" alt="" />
      </div>
    </div>
  );
}
