const Hello = () => {
  return (
    <div className="space-y-4">
      <p className="font-semibold">
        Thank you for using NextJs starter template by Swam. <br />
        Have fun coding :)
      </p>
      <div className="space-y-2">
        <span className="italic">Installed dependencies:</span>
        <pre className="bg-slate-200 rounded-lg p-4">
          - tailwindcss <br />
          - shadcn <br />
          - zustand <br />
          - react-hook-form <br />
          - zod <br />
          - react-query <br />
          - axios <br />
        </pre>
      </div>
    </div>
  );
};

export default Hello;
