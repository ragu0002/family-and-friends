"use server";

import { resolve } from "styled-jsx/css";

export const submitAnimal = async (prevState, formData) => {
  const state = {
    succes: null,
    error: {},
  };

  const error = {};

  const productName = formData.get("productname");
  const productNumber = formData.get("productnumber");
  const productDescription = formData.get("productdescription");
  // validering av navnet
  if (!productName) {
    error.productName = "Du må angi et navn";
  } else if (productName.length < 5) {
    error.productName = "Ordet må ha minst 5 tegn";
  }

  // validering av alderen
  if (!productNumber && productNumber !== "0") {
    error.productNumber = "Du må angi et nummer";
  } else {
    const myNumber = Number(productNumber);
    if (Number.isNaN(myNumber)) {
      error.productNumber = "Nummer må være et gyldig tall";
    } else if (myNumber < 1) {
      error.productNumber = "Nummer må være minst 1";
    } else if (myNumber > 1000) {
      error.productNumber = "Nummer er for høyt (maks 1000)";
    }
  }
  // validering av beskrivelsen
  if (!productDescription) {
    error.productDescription = "Du må angi en kort beskrivelse";
  } else if (productDescription.length < 15) {
    error.productDescription = "Beskrivelsen må ha minst 20 tegn";
  }
  // Hvis det ikke er noen feil skal den returnere succses
  if (Object.keys(error).length > 0) {
    return { error, productName, productNumber, productDescription };
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: productName,
      price: productNumber,
      description: productDescription,
      /* other product data */
    }),
  });
  console.log(response);
  error.succes = response.ok;
  return { error };
};
