import { css } from "@emotion/css";


const windStatusNavigation = css({
    display: "flex",
    gap: "6px",
    alignItems: "center"
})
const windStatusNavigationIcon = css({
    width: "30px",
    height: "30px",
    transform: "rotate(-180deg)",
    backgroundColor: "#FFFFFF4D",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& svg": {
        width: "18px",
        height: "18px",
        fill: "#E7E7EB"
    }
})

const windStatusNavigationText = css({
    color: "#E7E7EB",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal"
})
export const styles = {
    windStatusNavigation,
    windStatusNavigationIcon,
    windStatusNavigationText
}