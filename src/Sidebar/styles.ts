import { css } from "@emotion/css";


const sidebar = css({
    display: "flex",
    flexDirection: "column"
})
const sidebarClose = css({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",

    "& svg": {
        width: "32px",
        height: "32px"
    },

    "& svg path": {
        stroke: "#E7E7EB",
        fill: "#E7E7EB"
    }
})

const sidebarSearchContainer = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    width: "100%"
})

export const styles = {
    sidebarClose,
    sidebar,
    sidebarSearchContainer
}