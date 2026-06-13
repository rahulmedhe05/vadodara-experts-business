import React from 'react';

const Link = React.forwardRef<HTMLAnchorElement, any>(({ href, children, ...props }, ref) => {
  const { prefetch, replace, scroll, shallow, passHref, ...rest } = props;
  return (
    <a href={href} ref={ref} {...rest}>
      {children}
    </a>
  );
});

Link.displayName = 'Link';

export default Link;
