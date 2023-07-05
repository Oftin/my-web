export type TextSize =
  | "12px"
  | "16px"
  | "20px"
  | "24px"
  | "32px"
  | "36px"
  | "48px"
  | "notFound"
  | "navbar";

export interface TwoWordsTextProps {
  firstText: string;
  secondText: string;
  textSize: TextSize;
  styles?: string;
}
