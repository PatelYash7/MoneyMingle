export const Center = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center h-full item-center bg">
      {children}
    </div>
  );
};
