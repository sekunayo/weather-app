import { css } from "@emotion/css";

const weatherSummaryCard = css({
    padding: "20px 18px",
    backgroundColor: "#1E213A",
    height: "auto",
})

const weatherSummaryCardTemp = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "31px"
})

const weatherSummaryCardHeading = css({
    color: "#E7E7EB",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    textAlign: "center",
    marginBottom: "10px"
})

const weatherSummaryCardCelTemp = css({
    color: "#E7E7EB",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal"
})

const weatherSummaryCardFahTemp = css({
    color: "#A09FB1",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal"
})

const weatherSummaryCardIcon = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

export const styles = {
    weatherSummaryCard,
    weatherSummaryCardHeading,
    weatherSummaryCardCelTemp,
    weatherSummaryCardFahTemp,
    weatherSummaryCardTemp,
    weatherSummaryCardIcon,
}