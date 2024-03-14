import React from "react";


export interface ReflektProviderProps {
  label: string;
}

const ReflektProvider = (props: ReflektProviderProps) => {
  return <button>{props.label}</button>;
};


export default ReflektProvider;