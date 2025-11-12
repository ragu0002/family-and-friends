const AdoptButton = ({ name }) => {
  return (
    <button className="bg-button-pink w-full rounded-full px-10 py-5">
      <h1 className="text-xl text-white">
        <span className="font-semibold">Buy </span>
        {name}
      </h1>
    </button>
  );
};

export default AdoptButton;
