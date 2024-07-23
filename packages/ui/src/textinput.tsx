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
        style={{backgroundColor:'transparent'}}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        id="first_name"
        className=" py-2 px-2 text-white fill-none rounded bg-transparent border-2 block w-full p-2.5"
        placeholder={placeholder}
        value={value}
        readOnly={readonly}
      />
    </div>
  );
};
