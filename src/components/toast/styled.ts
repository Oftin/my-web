import styled, { css } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { colors } from "@/styles/colors";

export const ToastModified = styled(ToastContainer).attrs<{
  backgroundColor?: string;
}>({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress",
})`
  width: 25rem;

  .toast {
    border-top: 2px solid white;
    border-left: 2px solid white;
    border-right: 2px solid white;

    ${(props) => {
      if (props.backgroundColor === "success") {
        return css`
          background-color: ${colors.greenThemeColor};
          border: 2px solid ${colors.greenThemeColor};
        `;
      }

      if (props.backgroundColor === "fail") {
        return css`
          background-color: ${colors.fail};
          border: 2px solid ${colors.fail};
        `;
      }
    }}

    border-bottom: 0;
  }

  .body {
    font-weight: 700;
    color: ${colors.white};

    ${(props) => {
      if (props.backgroundColor === "success") {
        return css`
          background-color: ${colors.greenThemeColor};
          border: 5px solid ${colors.greenThemeColor};
        `;
      }

      if (props.backgroundColor === "fail") {
        return css`
          background-color: ${colors.fail};
          border: 5px solid ${colors.fail};
        `;
      }
    }};
  }

  .progress {
    ${(props) => {
      if (props.backgroundColor === "success") {
        return css`
          background-color: ${colors.white};
        `;
      }

      if (props.backgroundColor === "fail") {
        return css`
          background-color: ${colors.failProgress};
        `;
      }
    }}
  }
`;
