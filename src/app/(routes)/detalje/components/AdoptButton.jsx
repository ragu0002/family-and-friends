const AdoptButton = ({ name }) => {
  return (
    <button className="w-full rounded-full bg-[#F2968F] px-10 py-5">
      <h1 className="text-xl text-white">
        <span className="font-semibold">Adobter </span>
        {name}
      </h1>
    </button>
  );
};

export default AdoptButton;
