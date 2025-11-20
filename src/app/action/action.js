"use server";

export const submitAnimal = async (prevState, formData) => {
  const error = {};
  const productName = formData.get("productname");

  //if (!productName || productName.length < 3) {}
  if (!productName) {
    error.productName = "Feltet skal utfylles queen!!!!";
  } else if (productName.length < 5) {
    error.productName = "Ordet må ha minst 5 tegn queen!!!";
  }
  if (Object.keys(error).length > 0) {
    return { error, productName };
  }
  return { succes: true };
};
