const breakPoints = {
  xxs: '420px',
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1440px',
};

export const respondBelow = (breakpoint, content) => {
  if (breakPoints.hasOwnProperty(breakpoint)) {
    return `
    @media (max-width: ${breakPoints[breakpoint]}) {
      ${content}
    }
    `;
  }
  console.warn('error respondBelow');
  return ``;
};

export const respondAbove = (breakpoint, content) => {
  if (breakPoints.hasOwnProperty(breakpoint)) {
    return `
    @media (min-width: ${breakPoints[breakpoint]}) {
      ${content}
    }
    `;
  }
  console.warn('error respondBelow');
  return ``;
};
