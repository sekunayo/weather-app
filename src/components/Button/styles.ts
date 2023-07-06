import { css } from "@emotion/css";
import { ButtonVariantType } from "../../types/component";

const button = (variant: ButtonVariantType) => css({
    width: "fit-content",
    height: "auto",
    padding: "10px 18px",
    color: "#E7E7EB",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    backgroundColor: variant === "primary" ? "#6E707A" : "#3C47E9",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
})

export const styles = {
    button
}