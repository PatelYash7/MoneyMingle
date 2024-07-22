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
      onChange={(e) => {
        onSelect(e.target.value);
      }}
      className="border py-2 px-2 text-black  font-sans rounded block w-full p-2.5"
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
