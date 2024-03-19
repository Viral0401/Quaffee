import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./form.css";

const Predict2 = () => {
  const [analysisResult, setAnalysisResult] = useState(null);
  const prompt = `[
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "ORANGE JUICE",
      "Price": 285.71,
      "Qty.": 1,
      "Sub_Total": 285.71
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Iced Latte (350 ML)",
      "Price": 214.29,
      "Qty.": 1,
      "Sub_Total": 214.29
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "ALMOND MILK (200 ML)",
      "Price": 85.71,
      "Qty.": 1,
      "Sub_Total": 85.71
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Chicken Calzone",
      "Price": 66.67,
      "Qty.": 1,
      "Sub_Total": 66.67
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Coconut Nankhatai (with Egg)",
      "Price": 285.71,
      "Qty.": 1,
      "Sub_Total": 285.71
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Iced Americano (350 ML)",
      "Price": 176.19,
      "Qty.": 1,
      "Sub_Total": 176.19
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Add On Syrup (Add On Vanilla Syrup)",
      "Price": 47.62,
      "Qty.": 1,
      "Sub_Total": 47.62
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Chicken Calzone",
      "Price": 66.67,
      "Qty.": 1,
      "Sub_Total": 66.67
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Calzones Veg (Calzone Paneer)",
      "Price": 66.67,
      "Qty.": 1,
      "Sub_Total": 66.67
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Cafe Latte (350 ML)",
      "Price": 238.1,
      "Qty.": 1,
      "Sub_Total": 238.1
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Add On Syrup (Add On Caramel Syrup)",
      "Price": 47.62,
      "Qty.": 1,
      "Sub_Total": 47.62
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Pick Up",
      "Area": "",
      "Item_Name": "Iced Mocha (350 ML)",
      "Price": 271.43,
      "Qty.": 1,
      "Sub_Total": 271.43
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Pick Up",
      "Area": "",
      "Item_Name": "Classic Frappe (350 ML)",
      "Price": 271.43,
      "Qty.": 1,
      "Sub_Total": 271.43
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Iced Latte (350 ML)",
      "Price": 214.29,
      "Qty.": 1,
      "Sub_Total": 214.29
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "ALMOND MILK (200 ML)",
      "Price": 85.71,
      "Qty.": 1,
      "Sub_Total": 85.71
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Rosella Jam With Filter Coffee Ganache Macaroon (1 PIC)",
      "Price": 76.19,
      "Qty.": 1,
      "Sub_Total": 76.19
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
      "Price": 76.19,
      "Qty.": 1,
      "Sub_Total": 76.19
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Double Restritto 44 Ml",
      "Price": 157.14,
      "Qty.": 1,
      "Sub_Total": 157.14
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Delivery(Parcel)",
      "Area": "Zomato",
      "Item_Name": "Iced Americano (450 Ml)",
      "Price": 288.75,
      "Qty.": 1,
      "Sub_Total": 288.75
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Private Dining Area",
      "Item_Name": "Origanal South Indian Frappe (350 ML)",
      "Price": 290.48,
      "Qty.": 30,
      "Sub_Total": 8714.4
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Pick Up",
      "Area": "",
      "Item_Name": "Hot Chocolate (250 ML)",
      "Price": 266.67,
      "Qty.": 1,
      "Sub_Total": 266.67
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Pick Up",
      "Area": "",
      "Item_Name": "Mix Berliner 2 Pcs (Lotus Biscoff Berliner)",
      "Price": 61.9,
      "Qty.": 1,
      "Sub_Total": 61.9
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Pick Up",
      "Area": "",
      "Item_Name": "Mix Berliner 2 Pcs (Nutella Berliner)",
      "Price": 61.9,
      "Qty.": 1,
      "Sub_Total": 61.9
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Baked Vada Pav",
      "Price": 76.19,
      "Qty.": 1,
      "Sub_Total": 76.19
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Cappucino (250 ML)",
      "Price": 214.29,
      "Qty.": 2,
      "Sub_Total": 428.57
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Almond Honey Latte (250 ML)",
      "Price": 271.43,
      "Qty.": 1,
      "Sub_Total": 271.43
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Origanal South Indian Frappe (350 ML)",
      "Price": 290.48,
      "Qty.": 1,
      "Sub_Total": 290.48
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Room Service",
      "Item_Name": "Cappucino (250 ML)",
      "Price": 214.29,
      "Qty.": 1,
      "Sub_Total": 214.29
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Room Service",
      "Item_Name": "Calzones Veg (Calzone Paneer)",
      "Price": 66.67,
      "Qty.": 1,
      "Sub_Total": 66.67
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Classic Frappe (350 ML)",
      "Price": 261.9,
      "Qty.": 1,
      "Sub_Total": 261.9
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Origanal South Indian Frappe (350 ML)",
      "Price": 290.48,
      "Qty.": 1,
      "Sub_Total": 290.48
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Nariyal Irish Cream Frappe (350 ML)",
      "Price": 290.48,
      "Qty.": 1,
      "Sub_Total": 290.48
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Classic Frappe (350 ML)",
      "Price": 261.9,
      "Qty.": 1,
      "Sub_Total": 261.9
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "South Indian Filter Kaapi (150 ML)",
      "Price": 133.33,
      "Qty.": 1,
      "Sub_Total": 133.33
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Hazelnut Frappe (350 ML)",
      "Price": 290.48,
      "Qty.": 1,
      "Sub_Total": 290.48
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Delivery(Parcel)",
      "Area": "Swiggy",
      "Item_Name": "Pappa Roti (Plain)",
      "Price": 166.67,
      "Qty.": 1,
      "Sub_Total": 166.67
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Delivery(Parcel)",
      "Area": "Swiggy",
      "Item_Name": "Berliners (Dark Choco Mousse Berliner)",
      "Price": 85.71,
      "Qty.": 1,
      "Sub_Total": 85.71
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Delivery(Parcel)",
      "Area": "Swiggy",
      "Item_Name": "Berliners (Lotus Biscoff Berliner)",
      "Price": 85.71,
      "Qty.": 1,
      "Sub_Total": 85.71
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Cafe Latte (250 ML)",
      "Price": 214.29,
      "Qty.": 1,
      "Sub_Total": 214.29
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Tartlets (Salted Caramel Tartlet)",
      "Price": 47.62,
      "Qty.": 1,
      "Sub_Total": 47.62
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Cafe Latte (250 ML)",
      "Price": 214.29,
      "Qty.": 1,
      "Sub_Total": 214.29
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Origanal South Indian Frappe (350 ML)",
      "Price": 290.48,
      "Qty.": 1,
      "Sub_Total": 290.48
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Private Dining Area",
      "Item_Name": "Iced Latte (450 ML)",
      "Price": 238.1,
      "Qty.": 1,
      "Sub_Total": 238.1
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Private Dining Area",
      "Item_Name": "Add On Syrup (Add On Vanilla Syrup)",
      "Price": 47.62,
      "Qty.": 1,
      "Sub_Total": 47.62
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Private Dining Area",
      "Item_Name": "Nariyal Irish Cream Frappe (350 ML)",
      "Price": 290.48,
      "Qty.": 1,
      "Sub_Total": 290.48
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Private Dining Area",
      "Item_Name": "Berliners (Nutella Berliner)",
      "Price": 66.67,
      "Qty.": 1,
      "Sub_Total": 66.67
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Cappucino (250 ML)",
      "Price": 214.29,
      "Qty.": 1,
      "Sub_Total": 214.29
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Iced Americano (350 ML)",
      "Price": 176.19,
      "Qty.": 1,
      "Sub_Total": 176.19
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Cappucino (350 ML)",
      "Price": 238.1,
      "Qty.": 1,
      "Sub_Total": 238.1
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "French Press",
      "Price": 247.62,
      "Qty.": 1,
      "Sub_Total": 247.62
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Pick Up",
      "Area": "",
      "Item_Name": "Iced Americano (350 ML)",
      "Price": 180.95,
      "Qty.": 1,
      "Sub_Total": 180.95
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Vietnamese (350 ML)",
      "Price": 290.48,
      "Qty.": 1,
      "Sub_Total": 290.48
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Calzones Veg (Calzone Veg)",
      "Price": 66.67,
      "Qty.": 1,
      "Sub_Total": 66.67
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Mix Berliner 2 Pcs (Blueberry Cheese Cake Berliner)",
      "Price": 61.9,
      "Qty.": 1,
      "Sub_Total": 61.9
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Mix Berliner 2 Pcs (Dark Choco Mousse Berliner)",
      "Price": 61.9,
      "Qty.": 1,
      "Sub_Total": 61.9
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Vietnamese (350 ML)",
      "Price": 290.48,
      "Qty.": 1,
      "Sub_Total": 290.48
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Madagascar Chocochip Frappe (350 ML)",
      "Price": 319.05,
      "Qty.": 1,
      "Sub_Total": 319.05
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Papparoti (Add On Nutella sauce)",
      "Price": 233.33,
      "Qty.": 1,
      "Sub_Total": 233.33
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Hyderabadi Chicken Keema Pav",
      "Price": 76.19,
      "Qty.": 2,
      "Sub_Total": 152.38
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Strawbery Rosella Frangipani Tart",
      "Price": 47.62,
      "Qty.": 1,
      "Sub_Total": 47.62
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Papparoti (Plain)",
      "Price": 166.67,
      "Qty.": 1,
      "Sub_Total": 166.67
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Calzones Veg (Calzone Veg)",
      "Price": 66.67,
      "Qty.": 1,
      "Sub_Total": 66.67
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Iced Mocha (350 ML)",
      "Price": 271.43,
      "Qty.": 1,
      "Sub_Total": 271.43
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "OAT MILK (200 ML)",
      "Price": 71.43,
      "Qty.": 1,
      "Sub_Total": 71.43
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Iced Latte (350 ML)",
      "Price": 214.29,
      "Qty.": 1,
      "Sub_Total": 214.29
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Baked Vada Pav",
      "Price": 76.19,
      "Qty.": 1,
      "Sub_Total": 76.19
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Iced Latte (350 ML)",
      "Price": 214.29,
      "Qty.": 1,
      "Sub_Total": 214.29
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Baked Pav Bhaji",
      "Price": 76.19,
      "Qty.": 1,
      "Sub_Total": 76.19
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Baked Vada Pav",
      "Price": 76.19,
      "Qty.": 1,
      "Sub_Total": 76.19
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Iced Latte (450 ML)",
      "Price": 238.1,
      "Qty.": 1,
      "Sub_Total": 238.1
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Classic Frappe (450 ML)",
      "Price": 304.76,
      "Qty.": 1,
      "Sub_Total": 304.76
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Baked Pav Bhaji",
      "Price": 76.19,
      "Qty.": 2,
      "Sub_Total": 152.38
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Pick Up",
      "Area": "",
      "Item_Name": "Cappucino (250 ML)",
      "Price": 223.81,
      "Qty.": 1,
      "Sub_Total": 223.81
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Pick Up",
      "Area": "",
      "Item_Name": "Papparoti (Add On Nutella sauce)",
      "Price": 233.33,
      "Qty.": 1,
      "Sub_Total": 233.33
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Private Dining Area",
      "Item_Name": "Hot Chocolate (250 ML)",
      "Price": 257.14,
      "Qty.": 1,
      "Sub_Total": 257.14
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Private Dining Area",
      "Item_Name": "Caramel Frappe (350 ML)",
      "Price": 304.76,
      "Qty.": 1,
      "Sub_Total": 304.76
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Delivery(Parcel)",
      "Area": "Zomato",
      "Item_Name": "Baked Pav Bhaji",
      "Price": 80,
      "Qty.": 1,
      "Sub_Total": 80
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Delivery(Parcel)",
      "Area": "Zomato",
      "Item_Name": "Yellow Banana Chips 60 Gm",
      "Price": 84,
      "Qty.": 1,
      "Sub_Total": 84
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Delivery(Parcel)",
      "Area": "Zomato",
      "Item_Name": "Madagascar Chocochip Frappe (350 Ml)",
      "Price": 456.75,
      "Qty.": 1,
      "Sub_Total": 456.75
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Almond Honey Latte (250 ML)",
      "Price": 271.43,
      "Qty.": 1,
      "Sub_Total": 271.43
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Pick Up",
      "Area": "",
      "Item_Name": "Iced Americano (350 ML)",
      "Price": 180.95,
      "Qty.": 1,
      "Sub_Total": 180.95
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Vietnamese (350 ML)",
      "Price": 290.48,
      "Qty.": 1,
      "Sub_Total": 290.48
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Vietnamese (350 ML)",
      "Price": 290.48,
      "Qty.": 1,
      "Sub_Total": 290.48
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Cafe Latte (250 ML)",
      "Price": 214.29,
      "Qty.": 1,
      "Sub_Total": 214.29
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Madagascar Chocochip Frappe (350 ML)",
      "Price": 319.05,
      "Qty.": 1,
      "Sub_Total": 319.05
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Delivery(Parcel)",
      "Area": "Zomato",
      "Item_Name": "Flat White 250 Ml",
      "Price": 240,
      "Qty.": 1,
      "Sub_Total": 240
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Madagascar Chocochip Frappe (350 ML)",
      "Price": 319.05,
      "Qty.": 1,
      "Sub_Total": 319.05
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Papparoti (Plain)",
      "Price": 166.67,
      "Qty.": 1,
      "Sub_Total": 166.67
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
      "Price": 66.67,
      "Qty.": 1,
      "Sub_Total": 66.67
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Americano (250 ML)",
      "Price": 176.19,
      "Qty.": 1,
      "Sub_Total": 176.19
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Vietnamese (350 ML)",
      "Price": 290.48,
      "Qty.": 1,
      "Sub_Total": 290.48
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Calzone Mix 3 Pc (Calzone Paneer)",
      "Price": 57.14,
      "Qty.": 1,
      "Sub_Total": 57.14
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Pick Up",
      "Area": "",
      "Item_Name": "Classic Frappe (350 ML)",
      "Price": 271.43,
      "Qty.": 1,
      "Sub_Total": 271.43
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Pick Up",
      "Area": "",
      "Item_Name": "Classic Frappe (450 ML)",
      "Price": 319.05,
      "Qty.": 1,
      "Sub_Total": 319.05
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Classic Frappe (350 ML)",
      "Price": 261.9,
      "Qty.": 1,
      "Sub_Total": 261.9
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Origanal South Indian Frappe (350 ML)",
      "Price": 290.48,
      "Qty.": 1,
      "Sub_Total": 290.48
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Cafe Latte (250 ML)",
      "Price": 214.29,
      "Qty.": 1,
      "Sub_Total": 214.29
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Delivery(Parcel)",
      "Area": "Swiggy",
      "Item_Name": "Pappa Roti (Add On Nutella sauce)",
      "Price": 233.33,
      "Qty.": 1,
      "Sub_Total": 233.33
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Cafe Mocha (250 ML)",
      "Price": 223.81,
      "Qty.": 1,
      "Sub_Total": 223.81
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Madagascar Chocochip Frappe (350 ML)",
      "Price": 319.05,
      "Qty.": 1,
      "Sub_Total": 319.05
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Berliners (Nutella Berliner)",
      "Price": 66.67,
      "Qty.": 1,
      "Sub_Total": 66.67
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Hot Chocolate (250 ML)",
      "Price": 257.14,
      "Qty.": 2,
      "Sub_Total": 514.28
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Bon Bon (350 ML)",
      "Price": 290.48,
      "Qty.": 1,
      "Sub_Total": 290.48
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Madagascar Hot Chocolate (250 ML)",
      "Price": 285.71,
      "Qty.": 1,
      "Sub_Total": 285.71
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "South Indian Filter Kaapi (150 ML)",
      "Price": 133.33,
      "Qty.": 2,
      "Sub_Total": 266.67
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "South Indian Filter Kaapi (150 ML)",
      "Price": 133.33,
      "Qty.": 1,
      "Sub_Total": 133.33
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Cappucino (250 ML)",
      "Price": 214.29,
      "Qty.": 1,
      "Sub_Total": 214.29
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Chicken Calzone",
      "Price": 66.67,
      "Qty.": 1,
      "Sub_Total": 66.67
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Origanal South Indian Frappe (350 ML)",
      "Price": 290.48,
      "Qty.": 1,
      "Sub_Total": 290.48
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Delivery(Parcel)",
      "Area": "Swiggy",
      "Item_Name": "Origanal South Indian Frappe (450 ML)",
      "Price": 433.33,
      "Qty.": 2,
      "Sub_Total": 866.66
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Vietnamese (350 ML)",
      "Price": 290.48,
      "Qty.": 1,
      "Sub_Total": 290.48
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Papparoti (Plain)",
      "Price": 166.67,
      "Qty.": 1,
      "Sub_Total": 166.67
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "South Indian Filter Kaapi (150 ML)",
      "Price": 133.33,
      "Qty.": 1,
      "Sub_Total": 133.33
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Papparoti (Plain)",
      "Price": 166.67,
      "Qty.": 1,
      "Sub_Total": 166.67
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Delivery(Parcel)",
      "Area": "Zomato",
      "Item_Name": "Nariyal Irish Cream Frappe (350 Ml)",
      "Price": 414.75,
      "Qty.": 2,
      "Sub_Total": 829.5
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Sea Salt Dark Mocha (250 ML)",
      "Price": 261.9,
      "Qty.": 1,
      "Sub_Total": 261.9
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Sea Salt Dark Mocha Frappe (450 ML)",
      "Price": 371.43,
      "Qty.": 1,
      "Sub_Total": 371.43
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Kaapicino (250 ML)",
      "Price": 204.76,
      "Qty.": 1,
      "Sub_Total": 204.76
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Cappucino (250 ML)",
      "Price": 214.29,
      "Qty.": 1,
      "Sub_Total": 214.29
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Berliner Mix 3 Pcs (Nutella Berliner)",
      "Price": 57.14,
      "Qty.": 1,
      "Sub_Total": 57.14
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Berliner Mix 3 Pcs (Dark Choco Mousse Berliner)",
      "Price": 57.14,
      "Qty.": 1,
      "Sub_Total": 57.14
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Rosella Cheesecake Berliner",
      "Price": 76.19,
      "Qty.": 1,
      "Sub_Total": 76.19
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Double Restritto 44 Ml",
      "Price": 157.14,
      "Qty.": 1,
      "Sub_Total": 157.14
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Origanal South Indian Frappe (350 ML)",
      "Price": 290.48,
      "Qty.": 1,
      "Sub_Total": 290.48
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Origanal South Indian Frappe (350 ML)",
      "Price": 290.48,
      "Qty.": 1,
      "Sub_Total": 290.48
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Tartlets (chocolate Tartlet)",
      "Price": 47.62,
      "Qty.": 1,
      "Sub_Total": 47.62
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Cappucino (250 ML)",
      "Price": 214.29,
      "Qty.": 1,
      "Sub_Total": 214.29
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Mix Berliner 2 Pcs (Lotus Biscoff Berliner)",
      "Price": 61.9,
      "Qty.": 1,
      "Sub_Total": 61.9
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Mix Berliner 2 Pcs (Dark Choco Mousse Berliner)",
      "Price": 61.9,
      "Qty.": 1,
      "Sub_Total": 61.9
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Pick Up",
      "Area": "",
      "Item_Name": "Baked Pav Bhaji",
      "Price": 76.19,
      "Qty.": 1,
      "Sub_Total": 76.19
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Pick Up",
      "Area": "",
      "Item_Name": "Baked Vada Pav",
      "Price": 76.19,
      "Qty.": 2,
      "Sub_Total": 152.38
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Delivery(Parcel)",
      "Area": "Zomato",
      "Item_Name": "Baked Pav Bhaji",
      "Price": 80,
      "Qty.": 1,
      "Sub_Total": 80
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Delivery(Parcel)",
      "Area": "Zomato",
      "Item_Name": "Yellow Banana Chips 60 Gm",
      "Price": 84,
      "Qty.": 1,
      "Sub_Total": 84
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Pick Up",
      "Area": "",
      "Item_Name": "Baked Vada Pav",
      "Price": 76.19,
      "Qty.": 2,
      "Sub_Total": 152.38
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Pick Up",
      "Area": "",
      "Item_Name": "Papparoti (Plain)",
      "Price": 166.67,
      "Qty.": 1,
      "Sub_Total": 166.67
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Pick Up",
      "Area": "",
      "Item_Name": "Cafe Latte (250 ML)",
      "Price": 223.81,
      "Qty.": 1,
      "Sub_Total": 223.81
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Pick Up",
      "Area": "",
      "Item_Name": "Add On Syrup (Add On Irish Syrup)",
      "Price": 47.62,
      "Qty.": 1,
      "Sub_Total": 47.62
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Pick Up",
      "Area": "",
      "Item_Name": "Cafe Mocha (350 ML)",
      "Price": 261.9,
      "Qty.": 1,
      "Sub_Total": 261.9
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Pick Up",
      "Area": "",
      "Item_Name": "Baked Vada Pav",
      "Price": 76.19,
      "Qty.": 1,
      "Sub_Total": 76.19
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Delivery(Parcel)",
      "Area": "Zomato",
      "Item_Name": "Cold Brew",
      "Price": 315,
      "Qty.": 1,
      "Sub_Total": 315
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "South Indian Filter Kaapi (150 ML)",
      "Price": 133.33,
      "Qty.": 22,
      "Sub_Total": 2933.26
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Americano (250 ML)",
      "Price": 176.19,
      "Qty.": 4,
      "Sub_Total": 704.76
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Papparoti (Plain)",
      "Price": 166.67,
      "Qty.": 8,
      "Sub_Total": 1333.36
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Origanal South Indian Frappe (350 ML)",
      "Price": 290.48,
      "Qty.": 2,
      "Sub_Total": 580.96
    },
    {
      "Date": "1/28/2024",
      "Order_Type": "Dine In",
      "Area": "Dining",
      "Item_Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
      "Price": 66.67,
      "Qty.": 1,
      "Sub_Total": 66.67
    },

based on the quantity of the items sold in the above data, make 7 combos of 2 items, such that low selling stuff is combined with the things that sell well, just give combos and no other extra text , dont give the quantity

  ]`;

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = "AIzaSyCwHHCLAEInXJrGE1ZS1XsWhLz4L4yUMkw"; // Replace with your Google Generative AI API key
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(prompt);
      setAnalysisResult(result.response.text());
    };

    fetchData();
  }, [prompt]);

  // Function to remove bold formatting from text
  const removeBoldFormatting = (text) => {
    return text.replace(/\\(.?)\\*/g, "$1");
  };

  // Function to split text into paragraphs
  const renderParagraphs = (text) => {
    return removeBoldFormatting(text)
      .split("\n")
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };

  return (
    <div className="formDiv">
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/XSWhoA4_JvE?si=OKK9I4Fo_SiLwTnX"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> */}
      {analysisResult && (
        <div className="margin:'20px'">
          <h2 className="header">Combo suggestions for profit:</h2>
          {analysisResult.split("\n").map((line, index) => (
            <div
              key={index}
              className=" card rounded-md p-4 mb-4 bg-white h-[20px] w-[50px] "
            >
              {/* <h3>{index + 1}</h3> */}
              <p>{line}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Predict2;
