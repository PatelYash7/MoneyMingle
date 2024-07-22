"use client";

export const TextInput = ({
  placeholder,
  onChange,
  label,
  value,
  readonly,
}: {
  placeholder: string;
  onChange: (value: string) => void;
  label: string;
  value?: string;
  readonly?: boolean;
}) => {
  return (
    <div className="pt-2">
      <label className="block mb-2 font-medium text-gray-900">{label}</label>
      <input
        onChange={(e) => onChange(e.target.value)}
        type="text"
        id="first_name"
        className="border py-2 px-2 text-black rounded block w-full p-2.5"
        placeholder={placeholder}
        value={value}
        readOnly={readonly}
      />
    </div>
  );
};
