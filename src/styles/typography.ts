import { css } from "styled-components";

export const defaultFamily = css`
  font-family: sans-serif;
`;

export const textDefault = css`
  ${defaultFamily};
  font-weight: 700;
  line-height: 1.4;
`;

export const normalTextForScreenDefault = css`
  ${defaultFamily};
  font-weight: 400;
  line-height: 1.4;
`;

export const boldTextForScreenDefault = css`
  ${defaultFamily};
  font-weight: 700;
  line-height: 1.4;
`;
export const titleTextForScreenDefault = css`
  ${defaultFamily};
  font-weight: 700;
  line-height: 1.4;
`;

export const typography = {
  text: {
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
  textForScreen: {
    normal: {
      to360pxIs14px: css`
        ${normalTextForScreenDefault};
        font-size: 0.875rem;
      `,
      from361pxTo575pxIs16px: css`
        ${normalTextForScreenDefault};
        font-size: 1rem;
      `,
      from576pxTo767pxIs18px: css`
        ${normalTextForScreenDefault};
        font-size: 1.125rem;
      `,
      from768pxTo1023pxIs20px: css`
        ${normalTextForScreenDefault};
        font-size: 1.25rem;
      `,
      from1024pxTo1439pxIs22px: css`
        ${normalTextForScreenDefault};
        font-size: 1.375rem;
      `,
      from1440pxIs24px: css`
        ${normalTextForScreenDefault};
        font-size: 1.5rem;
      `,
    },
    bold: {
      to360pxIs14px: css`
        ${boldTextForScreenDefault};
        font-size: 0.875rem;
      `,
      from361pxTo575pxIs16px: css`
        ${boldTextForScreenDefault};
        font-size: 1rem;
      `,
      from576pxTo767pxIs18px: css`
        ${boldTextForScreenDefault};
        font-size: 1.125rem;
      `,
      from768pxTo1023pxIs20px: css`
        ${boldTextForScreenDefault};
        font-size: 1.25rem;
      `,
      from1024pxTo1439pxIs22px: css`
        ${boldTextForScreenDefault};
        font-size: 1.375rem;
      `,
      from1440pxIs24px: css`
        ${boldTextForScreenDefault};
        font-size: 1.5rem;
      `,
    },
  },
  titleTextForScreen: {
    "18px": css`
      ${titleTextForScreenDefault};
      font-size: 18px;
    `,
    "20px": css`
      ${titleTextForScreenDefault};
      font-size: 20px;
    `,
    "24px": css`
      ${titleTextForScreenDefault};
      font-size: 24px;
    `,
    "28px": css`
      ${titleTextForScreenDefault};
      font-size: 28px;
    `,
    "32px": css`
      ${titleTextForScreenDefault};
      font-size: 32px;
    `,
    "36px": css`
      ${titleTextForScreenDefault};
      font-size: 36px;
    `,
    "48px": css`
      ${titleTextForScreenDefault};
      font-size: 48px;
    `,
  },
};
