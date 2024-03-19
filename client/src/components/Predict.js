import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./form.css";

const Predict = () => {
  const [analysisResult, setAnalysisResult] = useState(null);
  const prompt = `[
    {
      "ItemName": "Kesar Pista Macarons",
      "ItemType": "Item",
      "RawMaterial": "Kesar Pista Macarons",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Lemon Curd Macarons",
      "ItemType": "Item",
      "RawMaterial": "Lemon Curd Macarons",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Paan And Gulkand Macarons",
      "ItemType": "Item",
      "RawMaterial": "Paan & Gulkand Macarons",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Strawberry Macarons",
      "ItemType": "Item",
      "RawMaterial": "Strawberry Macarons",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Filter Coffee Macarons",
      "ItemType": "Item",
      "RawMaterial": "Filter Coffee Macarons",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "CHILLI GUVAVA JUICE",
      "ItemType": "Item",
      "RawMaterial": "Chill Guava Premium Juice Bottles",
      "Qty": 1,
      "Unit": "NOS"
    },
    {
      "ItemName": "PINAPPLE JUICE",
      "ItemType": "Item",
      "RawMaterial": "Pineapple Premium Juice Bottles",
      "Qty": 1,
      "Unit": "NOS"
    },
    {
      "ItemName": "ORANGE JUICE",
      "ItemType": "Item",
      "RawMaterial": "Orange Premium Juice Bottles",
      "Qty": 1,
      "Unit": "NOS"
    },
    {
      "ItemName": "MANGO JUICE",
      "ItemType": "Item",
      "RawMaterial": "Mango Premium Juice Bottles",
      "Qty": 1,
      "Unit": "NOS"
    },
    {
      "ItemName": "Rosella Jam With Filter Coffee Ganache Macaroon (3 PCS)",
      "ItemType": "Item",
      "RawMaterial": "Rosella Jam With Filter Coffee Ganache Macaroon",
      "Qty": 3,
      "Unit": "PCS"
    },
    {
      "ItemName": "Rosella Jam With Filter Coffee Ganache Macaroon (2 PCS)",
      "ItemType": "Item",
      "RawMaterial": "Rosella Jam With Filter Coffee Ganache Macaroon",
      "Qty": 2,
      "Unit": "PCS"
    },
    {
      "ItemName": "Rosella Jam With Filter Coffee Ganache Macaroon (1 PIC)",
      "ItemType": "Item",
      "RawMaterial": "Rosella Jam With Filter Coffee Ganache Macaroon",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Rosella Cheesecake Berliner",
      "ItemType": "Item",
      "RawMaterial": "Rosella Cheesecake Berliner",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
      "ItemType": "Item",
      "RawMaterial": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Strawbery Rosella Frangipani Tart",
      "ItemType": "Item",
      "RawMaterial": "Strawberry Rosella Frangipani Tart",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Hamper",
      "ItemType": "Item",
      "RawMaterial": "Hamper",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Sea Salt Dark Mocha Frappe (450 ML)",
      "ItemType": "Item",
      "RawMaterial": "Coffee Beans Lce Arabica",
      "Qty": 13,
      "Unit": "GM"
    },
    {
      "ItemName": "Sea Salt Dark Mocha Frappe (350 ML)",
      "ItemType": "Item",
      "RawMaterial": "Amul Milk",
      "Qty": 120,
      "Unit": "ML"
    },
    {
      "ItemName": "Almond Honey Latte (350 ML)",
      "ItemType": "Item",
      "RawMaterial": "Coffee Beans Lce Arabica",
      "Qty": 13,
      "Unit": "GM"
    },
    {
      "ItemName": "Almond Honey Latte (250 ML)",
      "ItemType": "Item",
      "RawMaterial": "Coffee Beans Lce Arabica",
      "Qty": 13,
      "Unit": "GM"
    },
    {
      "ItemName": "Iced Mocha (450 ML)",
      "ItemType": "Item",
      "RawMaterial": "Coffee Beans Lce Arabica",
      "Qty": 13,
      "Unit": "GM"
    },
    {
      "ItemName": "Iced Mocha (350 ML)",
      "ItemType": "Item",
      "RawMaterial": "Coffee Beans Lce Arabica",
      "Qty": 13,
      "Unit": "GM"
    },
    {
      "ItemName": "Vanilla Praline (450 ML)",
      "ItemType": "Item",
      "RawMaterial": "Coffee Beans Robusta Honey",
      "Qty": 3.5,
      "Unit": "GM"
    },
    {
      "ItemName": "Vanilla Praline (350 ML)",
      "ItemType": "Item",
      "RawMaterial": "Amul Milk",
      "Qty": 120,
      "Unit": "ML"
    },
    {
      "ItemName": "Caramel Frappe (450 ML)",
      "ItemType": "Item",
      "RawMaterial": "Coffee Beans Lce Arabica",
      "Qty": 13,
      "Unit": "GM"
    },
    {
      "ItemName": "Caramel Frappe (350 ML)",
      "ItemType": "Item",
      "RawMaterial": "Coffee Beans Lce Arabica",
      "Qty": 13,
      "Unit": "GM"
    },
    {
      "ItemName": "ALMOND MILK (200 ML)",
      "ItemType": "Item",
      "RawMaterial": "Almond Milk",
      "Qty": 200,
      "Unit": "ML"
    },
    {
      "ItemName": "ALMOND MILK (150 ML)",
      "ItemType": "Item",
      "RawMaterial": "Almond Milk",
      "Qty": 150,
      "Unit": "ML"
    },
    {
      "ItemName": "Hyderabadi Chicken Keema Pav",
      "ItemType": "Item",
      "RawMaterial": "Hyderabadi Chicken Keema Pav",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Hyderabadi Soya Keema Pav",
      "ItemType": "Item",
      "RawMaterial": "Hyderabadi Soya Keema Pav",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Baked Pav Bhaji",
      "ItemType": "Item",
      "RawMaterial": "Baked Pav Bhaji",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Choco-crinkle-cookies (COMBO 9 PCS)",
      "ItemType": "Item",
      "RawMaterial": "Choco-crinkle-cookies",
      "Qty": 3,
      "Unit": "PCS"
    },
    {
      "ItemName": "Choco-crinkle-cookies (COMBO 6 PCS)",
      "ItemType": "Item",
      "RawMaterial": "Choco-crinkle-cookies",
      "Qty": 2,
      "Unit": "PCS"
    },
    {
      "ItemName": "Choco-crinkle-cookies (COMBO 3 PCS)",
      "ItemType": "Item",
      "RawMaterial": "Choco-crinkle-cookies",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Samosas Chicken (COMBO 9 PCS)",
      "ItemType": "Item",
      "RawMaterial": "Samosa Chicken Chettinad",
      "Qty": 9,
      "Unit": "PCS"
    },
    {
      "ItemName": "Samosas Chicken (COMBO 6 PCS)",
      "ItemType": "Item",
      "RawMaterial": "Samosa Chicken Chettinad",
      "Qty": 6,
      "Unit": "PCS"
    },
    {
      "ItemName": "Samosas Chicken (COMBO 3 PCS)",
      "ItemType": "Item",
      "RawMaterial": "Samosa Chicken Chettinad",
      "Qty": 3,
      "Unit": "PCS"
    },
    {
      "ItemName": "Samosas Chicken (3 PCS)",
      "ItemType": "Item",
      "RawMaterial": "Samosa Chicken Chettinad",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Mix Tartlet 3 Pcs (salted Caramel tartlet)",
      "ItemType": "Item",
      "RawMaterial": "Salted Caramel Tartlet",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Mix Tartlet 3 Pcs (kodai cheese tartlet)",
      "ItemType": "Item",
      "RawMaterial": "Kodai Cheese Tartlet",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Mix Tartlet 3 Pcs (Filter Kaapi Tartlet)",
      "ItemType": "Item",
      "RawMaterial": "Filter Kaapi Tartlet",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Mix Tartlet 3 Pcs (Kacha Nimbu Tartlet)",
      "ItemType": "Item",
      "RawMaterial": "Kacha Nimbu Tartlet",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Mix Tartlet 3 Pcs (chocolate Tartlet)",
      "ItemType": "Item",
      "RawMaterial": "Chocolate Tartlet",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Mix MACRONS 3 Pcs (STRAWBERRY MACRON)",
      "ItemType": "Item",
      "RawMaterial": "Samosa Paneer Ghee Roast",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Mix MACRONS 3 Pcs (FILTER COFFEE MACRONS)",
      "ItemType": "Item",
      "RawMaterial": "Samosa Veg Ghee Roast",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Papparoti (Add On Nutella sauce)",
      "ItemType": "Item",
      "RawMaterial": "Papparoti",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Papparoti (Plain)",
      "ItemType": "Item",
      "RawMaterial": "Papparoti",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Chicken Calzone",
      "ItemType": "Item",
      "RawMaterial": "Calzone Chicken",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Samosas Veg (Veg Ghee Roast Samosa)",
      "ItemType": "Item",
      "RawMaterial": "Samosa Veg Ghee Roast",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Mix Tartlet 9 Pcs (kodai cheese tartlet)",
      "ItemType": "Item",
      "RawMaterial": "Kodai Cheese Tartlet",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Mix Tartlet 9 Pcs (chocolate Tartlet)",
      "ItemType": "Item",
      "RawMaterial": "Chocolate Tartlet",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Mix Tartlet 9 Pcs (Kacha Nimbu Tartlet)",
      "ItemType": "Item",
      "RawMaterial": "Kacha Nimbu Tartlet",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Mix Tartlet 9 Pcs (Filter Kaapi Tartlet)",
      "ItemType": "Item",
      "RawMaterial": "Filter Kaapi Tartlet",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Mix Tartlet 9 Pcs (Salted Caramel Tartlet)",
      "ItemType": "Item",
      "RawMaterial": "Salted Caramel Tartlet",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Gluten Free Hazelnut Brownie",
      "ItemType": "Item",
      "RawMaterial": "Gluten Free Hazelnut Brownie",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Espresso Tonic (Tonic Water)",
      "ItemType": "Item",
      "RawMaterial": "Coffee Beans Lce Arabica",
      "Qty": 16,
      "Unit": "GM"
    },
    {
      "ItemName": "Samosas Veg (Samosa Paneer Ghee Roast)",
      "ItemType": "Item",
      "RawMaterial": "Samosa Paneer Ghee Roast",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Calzones Veg (Calzone Veg)",
      "ItemType": "Item",
      "RawMaterial": "Calzone Veg",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Calzones Veg (Calzone Paneer)",
      "ItemType": "Item",
      "RawMaterial": "Calzone Paneer",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Tartlets (Salted Caramel Tartlet)",
      "ItemType": "Item",
      "RawMaterial": "Salted Caramel Tartlet",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Tartlets (chocolate Tartlet)",
      "ItemType": "Item",
      "RawMaterial": "Chocolate Tartlet",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Tartlets (Filter Kaapi Tartlet)",
      "ItemType": "Item",
      "RawMaterial": "Filter Kaapi Tartlet",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Tartlets (Kacha Nimbu Tartlet)",
      "ItemType": "Item",
      "RawMaterial": "Kacha Nimbu Tartlet",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Tartlets (kodai cheese tartlet)",
      "ItemType": "Item",
      "RawMaterial": "Kodai Cheese Tartlet",
      "Qty": 1,
      "Unit": "PCS"
    },
    {
      "ItemName": "Berliners (Dark Choco Mousse Berliner)",
      "ItemType": "Item",
      "RawMaterial": "Dark Choco Mousse Berliner",
      "Qty": 1,
      "Unit": "PCS"
    },
based on this data suggest what raw material should the shop keep in stock based on quantity of sales of item name with correspondance to raw material, suggest any 5 raw materials that the shop must keep in stock all the time, and just give the names of raw material, dont add asterisk for headings or any other extra characters,give output in new lines
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
      {/* {analysisResult && (
        <div className="margin:'20px'">
          <h2>Analysis Result:</h2>
          {renderParagraphs(analysisResult)}
        </div>
      )} */}
      {analysisResult && (
        <div className="margin:'20px'">
          <h1 className=" header ">Keep the following raw materials in stock:</h1>
          {analysisResult.split("\n").map((line, index) => (
            <div
              key={index}
              className=" card-dash rounded-md p-4 mb-4 bg-white h-[20px] w-[50px] "
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

export default Predict;
