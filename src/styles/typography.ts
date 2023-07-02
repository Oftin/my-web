import { css } from "styled-components";

export const defaultFamily = css`
  font-family: "Inter", "norserive";
`;

export const textDefault = css`
  ${defaultFamily};
  font-weight: 700;
`;

export const typography = {
  text: {
    "12px": css`
      ${textDefault};
      font-size: 0.75rem;
      line-height: 0.875rem;
    `,
    "16px": css`
      ${textDefault};
      font-size: 1rem;
      line-height: 1.25rem;
    `,
    "20px": css`
      ${textDefault};
      font-size: 1.25rem;
      line-height: 1.5rem;
    `,
    "24px": css`
      ${textDefault};
      font-size: 1.5rem;
      line-height: 1.875rem;
    `,
    "32px": css`
      ${textDefault};
      font-size: 2rem;
      line-height: 2.375rem;
    `,
    "36px": css`
      ${textDefault};
      font-size: 2.25rem;
      line-height: 2.75rem;
    `,
    "48px": css`
      ${textDefault};
      font-size: 3rem;
      line-height: 6.625rem;
    `,
    notFound: css`
      ${textDefault};
      font-size: 18.75rem;
      line-height: 22.75rem;
    `,
  },
};
