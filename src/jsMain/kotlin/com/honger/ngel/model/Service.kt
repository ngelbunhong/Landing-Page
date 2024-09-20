package com.honger.ngel.model

import com.honger.ngel.utils.Constants.LOREM_IPSUM_SHORTEST
import com.honger.ngel.utils.Res

enum class Service(
    val icon: String,
    val imageDes: String,
    val title: String,
    val description: String,
) {
    Android(
        icon = Res.Icon.IC_ANDROID,
        imageDes = "Android Icon",
        title = "Android Development",
        description = LOREM_IPSUM_SHORTEST
    ),
    IOS(
        icon = Res.Icon.IC_IOS, imageDes = "IOS Icon",
        title = "IOS Development",
        description = LOREM_IPSUM_SHORTEST
    ),
    Flutter(Res.Icon.IC_ANDROID, "Flutter Icon", "Flutter Development", LOREM_IPSUM_SHORTEST),
    React(icon = Res.Icon.IC_IOS, "React Native", "React Native", LOREM_IPSUM_SHORTEST),
    WEB(
        icon = Res.Icon.IC_WEB,
        imageDes = "WEB Icon",
        title = "WEB Development",
        description = LOREM_IPSUM_SHORTEST
    ),
    Design(
        icon = Res.Icon.IC_DESIGN,
        imageDes = "Design Icon",
        title = "UX/UI Design",
        description = LOREM_IPSUM_SHORTEST
    ),
    Business(
        icon = Res.Icon.IC_BUSINESS,
        imageDes = "Business Icon",
        title = "Business Analysis",
        description = LOREM_IPSUM_SHORTEST
    ),
    SEO(
        icon = Res.Icon.IC_SEO,
        imageDes = "SEO Icon",
        title = "SEO Marketing",
        description = LOREM_IPSUM_SHORTEST
    )
}