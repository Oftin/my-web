import { css } from "styled-components";

export const defaultFamily = css`
  font-family: sans-serif;
`;

export const textDefault = css`
  ${defaultFamily};
  font-weight: 700;
  line-height: 1.4;
`;

export const normalTextDefault = css`
  ${defaultFamily};
  font-weight: 400;
  line-height: 1.4;
`;

export const boldTextDefault = css`
  ${defaultFamily};
  font-weight: 700;
  line-height: 1.4;
`;

export const typography = {
  textOld: {
    "12px": css`
      ${textDefault};
      font-size: 0.75rem;
    `,
    "16px": css`
      ${textDefault};
      font-size: 1rem;
    `,
    "20px": css`
      ${textDefault};
      font-size: 1.25rem;
    `,
    "24px": css`
      ${textDefault};
      font-size: 1.5rem;
    `,
    "32px": css`
      ${textDefault};
      font-size: 2rem;
    `,
    "36px": css`
      ${textDefault};
      font-size: 2.25rem;
    `,
    "48px": css`
      ${textDefault};
      font-size: 3rem;
    `,
    notFound: css`
      ${textDefault};
      font-size: 18.75rem;
    `,
    navbar: css`
      ${textDefault};
      font-size: 2rem;
    `,
  },
  text: {
    normal: {
      "6px": css`
        ${normalTextDefault};
        font-size: 0.375rem;
      `,
      "8px": css`
        ${normalTextDefault};
        font-size: 0.5rem;
      `,
      "10px": css`
        ${normalTextDefault};
        font-size: 0.625rem;
      `,
      "12px": css`
        ${normalTextDefault};
        font-size: 0.75rem;
      `,
      "14px": css`
        ${normalTextDefault};
        font-size: 0.875rem;
      `,
      "16px": css`
        ${normalTextDefault};
        font-size: 1rem;
      `,
      "18px": css`
        ${normalTextDefault};
        font-size: 1.125rem;
      `,
      "20px": css`
        ${normalTextDefault};
        font-size: 1.25rem;
      `,
      "22px": css`
        ${normalTextDefault};
        font-size: 1.375rem;
      `,
      "24px": css`
        ${normalTextDefault};
        font-size: 1.5rem;
      `,
    },
    bold: {
      "6px": css`
        ${boldTextDefault};
        font-size: 0.375rem;
      `,
      "8px": css`
        ${boldTextDefault};
        font-size: 0.5rem;
      `,
      "10px": css`
        ${boldTextDefault};
        font-size: 0.625rem;
      `,
      "12px": css`
        ${boldTextDefault};
        font-size: 0.75rem;
      `,
      "14px": css`
        ${boldTextDefault};
        font-size: 0.875rem;
      `,
      "16px": css`
        ${boldTextDefault};
        font-size: 1rem;
      `,
      "18px": css`
        ${boldTextDefault};
        font-size: 1.125rem;
      `,
      "20px": css`
        ${boldTextDefault};
        font-size: 1.25rem;
      `,
      "22px": css`
        ${boldTextDefault};
        font-size: 1.375rem;
      `,
      "24px": css`
        ${boldTextDefault};
        font-size: 1.5rem;
      `,
    },
  },
  titleText: {
    "18px": css`
      ${boldTextDefault};
      font-size: 1.125rem;
    `,
    "20px": css`
      ${boldTextDefault};
      font-size: 1.25rem;
    `,
    "24px": css`
      ${boldTextDefault};
      font-size: 1.5rem;
    `,
    "28px": css`
      ${boldTextDefault};
      font-size: 1.75rem;
    `,
    "32px": css`
      ${boldTextDefault};
      font-size: 2rem;
    `,
    "36px": css`
      ${boldTextDefault};
      font-size: 2.25rem;
    `,
    "48px": css`
      ${boldTextDefault};
      font-size: 3rem;
    `,
    notFound: {
      small: css`
        ${boldTextDefault};
        font-size: 9.375rem;
      `,
      medium: css`
        ${boldTextDefault};
        font-size: 12.5rem;
      `,
      large: css`
        ${boldTextDefault};
        font-size: 18.75rem;
      `,
    },
  },
};
