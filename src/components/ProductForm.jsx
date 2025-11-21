"use client";
import { useActionState } from "react";
import { submitAnimal } from "@/app/action/action";
import { useFormStatus } from "react-dom";

const ResponseMessage = ({ state }) => {
  return (
    <>
      {state.error.succes === true && (
        <p className="capitalize">{`Form has been submitted`}</p>
      )}
      {state.error.succes === false && (
        <p className="text-red-500 capitalize">{`Form has been not been submitted.. try again`}</p>
      )}
    </>
  );
};
const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`bg-button-pink rounded-xl border border-none border-black px-4 py-2 text-white ${pending ? `cursor-not-allowed opacity-50` : ``}`}
    >
      {pending ? "Submitting.." : "Add animal"}
    </button>
  );
};
const ProductForm = () => {
  const [state, postAnimal] = useActionState(submitAnimal, { error: {} });
  return (
    <form className="mt-10 grid gap-5" action={postAnimal}>
      <h1 className="text-center text-2xl">Add your own pet</h1>
      <ResponseMessage state={state} />
      {state.error?.productName && (
        <p className="text-red-500">{state.error.productName}</p>
      )}
      <input
        type="text"
        className="rounded-xl border border-black p-3 text-center capitalize"
        name="productname"
        defaultValue={state.productName}
        placeholder="Animal Name"
      />

      {state.error?.productNumber && (
        <p className="text-red-500">{state.error.productNumber}</p>
      )}
      <input
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
      <SubmitButton />
    </form>
  );
};

export default ProductForm;
