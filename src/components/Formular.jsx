"use client";
import { useActionState } from "react";
import { submitAnimal } from "@/app/action/action";

const Formular = () => {
  const [state, postAnimal] = useActionState(submitAnimal, { error: {} });
  console.log(state);
  return (
    <div>
      <form className="mt-10 grid gap-5" action={postAnimal}>
        <h1 className="text-center text-2xl">Add your own pet</h1>
        {state.succes && (
          <p className="capitalize">{`${state.productName} submitted`}</p>
        )}
        {state.error?.productName && (
          <p className="text-red-500">{state.error.productName}</p>
        )}
        <input
          type="text"
          className="rounded-xl border border-black p-3 text-center"
          name="productname"
          defaultValue={state.productName}
          placeholder="Animal Name"
        />

        {state.error?.productNumber && (
          <p className="text-red-500">{state.error.productNumber}</p>
        )}
        <input
          type="number"
          className="rounded-xl border border-black p-3 text-center"
          name="productnumber"
          defaultValue={state.productNumber}
          placeholder="Animal Age"
        />

        {state.error?.productDescription && (
          <p className="text-red-500">{state.error.productDescription}</p>
        )}
        <input
          type="text"
          className="rounded-xl border border-black p-3 text-center"
          name="productdescription"
          defaultValue={state.productDescription}
          placeholder="Add a short description of your animal"
        />
        <button
          type="submit"
          className="bg-button-pink rounded-xl border border-none border-black px-4 py-2 text-white"
        >
          Add Animal
        </button>
      </form>
    </div>
  );
};

export default Formular;
