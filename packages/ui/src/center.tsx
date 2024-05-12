export const Center = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center item-center bg">
      {children}
    </div>
  );
};
