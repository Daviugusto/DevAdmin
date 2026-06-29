import { css } from "styled-components";

export const Breakpoint = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1280px",
};

export const Responsive = {
  mobile: (styles) => css`
    @media (max-width: ${Breakpoint.mobile}) {
      ${styles}
    }
  `,

  tablet: (styles) => css`
    @media (max-width: ${Breakpoint.tablet}) {
      ${styles}
    }
  `,

}