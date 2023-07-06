import { css } from "@emotion/css"
import { TempUnitType } from "../../types/component"

const tempUnit = (unit: TempUnitType) => css({
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: unit === "celsius" ? "#E7E7EB" : "#585676",
    color: unit === "celsius" ? "#110E3C" : "#E7E7EB",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const tempUnitContent = css({
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal"
})

export const styles = {
    tempUnit,
    tempUnitContent
}