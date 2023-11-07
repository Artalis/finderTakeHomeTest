import * as React from "react";

import { IconProps } from "@phosphor-icons/react";

export type PhosphorIconProps = Omit<IconProps, "type"> & {
  type: JSX.Element;
};

export const Icon = ({ type, size, ...props }: PhosphorIconProps) => {
  return React.cloneElement(type, { ...props, size }, null);
};
