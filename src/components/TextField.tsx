import React, { useState } from 'react';

interface Props {
  text: string,
  ok?: boolean // optional prop
}

export const TextField: React.FC<Props> = () => {
  const [count, setCount] = useState<number | null | undefined>(5);

  setCount(null);

  return (
    <div>
      <input />
    </div>
  );
};
