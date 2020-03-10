import React from 'react';

type Props = { 
  make: string;
  year: number;
  model: string;
} & typeof defaultProps;

const defaultProps = {
  make: "Volvo",
  model: "XC60",
  year: 2012
};

const Cars = (props: Props) => {
  return (
    <div>
      {props.year}
      {props.make}
      {props.model}
    </div>
  );
}

Cars.defaultProps = defaultProps;

export default Cars;
