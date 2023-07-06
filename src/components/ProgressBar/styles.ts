import { css } from "@emotion/css";

const progressBar = css({
    width: "100%",
    backgroundColor: "#E7E7EB",
    height: "8px",
    borderRadius: '80px'
})

const progressBarContainer = css({
    width: "100%",
    display: "flex",
    flexDirection: "column"
})

const progressBarCurrent = (currentValue: string) => css({
    width: `${currentValue}%`,
    backgroundColor: "#FFEC65",
    height: "100%",
    borderRadius: '80px'
})

const progressBarRange = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2px"
})

const progressBarUnit = css({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: "4px"
})

const progressBarRangeValue = css({
    color: "#A09FB1",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal"
})

const progressBarUnitValue = css({
    color: "#A09FB1",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal"
})

export const styles = {
    progressBar,
    progressBarCurrent,
    progressBarContainer,
    progressBarRange,
    progressBarRangeValue,
    progressBarUnit,
    progressBarUnitValue
}