import { css } from "@emotion/css";

const weeklyView = css({
    display: "flex",
    flexDirection: "column",
    gap: "72px",
    padding: "42px 0px 100px 0px",
    width: "calc(100% - 378px)",
    margin: "0 auto"

})

const weeklyViewContainer = css({
    minHeight: "100vh",
    overflowY: "auto",
    width: "100%",
})

const weeklyViewUnit = css({
    display: "flex",
    gap: "12px",
    justifyContent: "flex-end",
    alignItems: "center"
})

const weeklyViewHighlights = css({
    display: "flex",
    flexDirection: "column",
    gap: "32px"
})

const weeklyViewHeading = css({
    color: "#E7E7EB",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal"
})


const weeklyViewHighlightsList = css({
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    gridTemplateRows: "repeat(2, auto)",
    gridGap: "48px"
})

const weeklyViewSummary = css({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 180px)",
    gap: "26px"
})


export const styles = {
    weeklyView,
    weeklyViewHighlights,
    weeklyViewHighlightsList,
    weeklyViewUnit,
    weeklyViewHeading,
    weeklyViewSummary,
    weeklyViewContainer
}