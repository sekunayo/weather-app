import { css } from "@emotion/css"

const search = css({
    width: "calc(100% - 100px)",
    height: "48px",
    border: "1px solid #E7E7EB",
    padding: "0px 10px",
    display: "flex",
    alignItems: "center",

    "& input": {
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "19px",
        letterSpacing: "0em",
        color: "#616475"

    }

})

export const styles = {
    search
}