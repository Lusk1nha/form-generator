interface ISectionProps {
  name: string;
}

function Section({ name }: ISectionProps) {
  return (
    <div className="w-full px-4 py-2">
      <h3>{name}</h3>

      <div></div>
    </div>
  );
}

export { Section };
