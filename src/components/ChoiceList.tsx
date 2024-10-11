type ChoiceListProps = {
  choices: string[];
};

export function ChoiceList({ choices }: ChoiceListProps) {
  return (
    <ul className="pl-6 mb-6">
      {choices.map((choice: string, index: number) => (
        <li key={index} className="mb-2">
          {choice}
        </li>
      ))}
    </ul>
  );
}
