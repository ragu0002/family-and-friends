const TypeButton = ({ type, color, textcol }) => {
  return (
    <button className={`rounded-full ${color} ${textcol} px-3 py-1`}>
      <p>{type}</p>
    </button>
  );
};

export default TypeButton;
