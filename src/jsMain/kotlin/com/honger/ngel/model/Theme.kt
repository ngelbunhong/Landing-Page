package com.honger.ngel.model

import org.jetbrains.compose.web.css.CSSColorValue
import org.jetbrains.compose.web.css.rgb

enum class Theme(val hexValue: String, val rgb: CSSColorValue) {

    Primary(hexValue = "#00A78E", rgb = rgb(r = 0, g = 167, b = 142)),
    Secondary(hexValue = "#121D34", rgb = rgb(r = 18, g = 29, b = 52)),
    Gray(hexValue = "#CFCFCF", rgb = rgb(r = 207, g = 207, b = 207)),
    LightGray(hexValue = "#EDEDED", rgb = rgb(r = 237, g = 237, b = 237)),
    LighterGray(hexValue = "#F9F9F9", rgb = rgb(r = 249, g = 249, b = 249))
}