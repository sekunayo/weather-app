import { css } from "@emotion/css";

const todayView = css({
    backgroundColor: "#1E213A",
    height: "100vh",
    width: "459px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: 'center',
    padding: "42px 46px 52px 46px"
})

const todayViewTemperature = css({
    color: "#E7E7EB",
    fontSize: "124px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal"
})

const todayViewTemperatureUnit = css({
    fontSize: "48px",
    fontWeight: 100,
    lineHeight: "56px",
    letterSpacing: "0em",
})

const todayViewTitle = css({
    fontSize: "36px",
    fontWeight: 600,
    lineHeight: "42px",
    letterSpacing: "0em",
    color: "#A09FB1"
})

const todayViewLocationContent = css({
    color: "#88869D",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal"
})

const todayViewDescription = css({
    display: "flex",
    flexDirection: "column",
    gap: "31px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
})

const todayViewDate = css({
    color: "#88869D",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    display: "flex",
    justifyContent: "space-between",
    width: "200px",
    alignItems: "center"
})

const todayViewNavigationIcon = css({
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.20)",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& svg": {
        width: "24px",
        height: "24px",
        fill: "#E7E7EB"
    }
})

const todayViewNavigation = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
})


export const styles = {
    todayView,
    todayViewTemperature,
    todayViewTitle,
    todayViewTemperatureUnit,
    todayViewLocationContent,
    todayViewDescription,
    todayViewDate,
    todayViewNavigationIcon,
    todayViewNavigation
}