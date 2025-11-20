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
        {state.succes && <p>Navn ble sendt</p>}
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
