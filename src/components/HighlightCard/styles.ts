import { css } from "@emotion/css"

const hightlightCard = css({
    width: "328px",
    height: "fit-content",
    backgroundColor: "#1E213A",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "20px",
    alignItems: "center",
    padding: "22px 50px  30px 50px"
})

const hightlightCardMeasureTitle = css({
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "19px",
    letterSpacing: "0em",
    color: "#E7E7EB",
    textTransform: "capitalize"
})

const hightlightCardMeasureTitleContent = css({
    fontSize: "64px",
    fontWeight: 700,
    lineHeight: "75px",
    letterSpacing: "0em",
    color: "#E7E7EB"
})

const hightlightCardMeasureTitleContentUnit = css({
    fontSize: "36px",
    fontWeight: 500,
    lineHeight: "42px",
    letterSpacing: "0em",
    color: "#E7E7EB"
})

export const styles = {
    hightlightCardMeasureTitle,
    hightlightCard,
    hightlightCardMeasureTitleContent,
    hightlightCardMeasureTitleContentUnit
}