"use client";
export const Select = ({
  options,
  onSelect,
}: {
  onSelect: (value: string) => void;
  options: {
    key: string;
    value: string;
  }[];
}) => {
  return (
    <select
      style={{backgroundColor:'transparent'}}
      onChange={(e) => {
        onSelect(e.target.value);
      }}
      className="border-2 py-2 px-2 text-white  font-sans rounded block w-full p-2.5"
    >
      {options.map((option) => (
        <option
          className="px-1 py-1 font-sans font-semibold rounded font-lg"
          key={option.key}
          value={option.key}
        >
          {option.value}
        </option>
      ))}
    </select>
  );
};
