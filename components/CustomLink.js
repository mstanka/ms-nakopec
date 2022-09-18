import Link from "next/link";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const CustomLink = forwardRef((props, ref) => {
  let { as, href, children, ...otherProps } = props;

  return (
    <Link as={as} href={href}>
      <a ref={ref} {...otherProps}>
        {children}
      </a>
    </Link>
  );
});
