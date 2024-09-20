package com.honger.ngel.model

import com.honger.ngel.utils.Res

enum class Portfolio(val image: String, val title: String, val description: String) {
    One(image = Res.Image.IC_PORTFOLIO1, title = "Kudoe", description = "Web Design"),
    Two(image = Res.Image.IC_PORTFOLIO2, title = "Landing Page", description = "Frontend"),
    Three(image = Res.Image.IC_PORTFOLIO3, title = "NFT Application", description = "Frontend/Backend"),
    Four(image = Res.Image.IC_PORTFOLIO4, title = "Game Statistics", description = "Web/Mobile App"),
    Five(image = Res.Image.IC_PORTFOLIO5, title = "Platform for Online Courses", description = "Web/Mobile"),
}