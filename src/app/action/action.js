"use server";

export const submitAnimal = async (prevState, formData) => {
  const error = {};
  const productName = formData.get("productname");
  const productNumber = formData.get("productnumber");
  const productDescription = formData.get("productdescription");
  // name validation
  if (!productName) {
    error.productName = "Du må angi et navn";
  } else if (productName.length < 5) {
    error.productName = "Ordet må ha minst 5 tegn";
  }

  // number validation: ensure we return different messages depending on the value
  if (!productNumber && productNumber !== "0") {
    error.productNumber = "Du må angi et nummer";
  } else {
    const pn = Number(productNumber);
    if (Number.isNaN(pn)) {
      error.productNumber = "Nummer må være et gyldig tall";
    } else if (pn < 1) {
      error.productNumber = "Nummer må være minst 1";
    } else if (pn > 1000) {
      error.productNumber = "Nummer er for høyt (maks 1000)";
    }
  }
  if (!productDescription) {
    error.productDescription = "Du må angi en kort beskrivelse";
  } else if (productDescription.length < 4) {
    error.productDescription = "Beskrivelsen må ha minst 20 tegn";
  }
  // if there are errors, include both values so the form can re-populate fields
  if (Object.keys(error).length > 0) {
    return { error, productName, productNumber, productDescription };
  }

  return { succes: true, productName, productNumber, productDescription };
};
