package com.honger.ngel.pages

import androidx.compose.runtime.*
import com.honger.ngel.components.backToTopBottom
import com.honger.ngel.components.overflowMenu
import com.honger.ngel.sections.*
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.core.Page

@Page
@Composable
fun homePage() {
    var menuOpened by remember { mutableStateOf(false) }
    Column(
        Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Top,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        mainSection(onMenuClicked = { menuOpened = true })
        aboutSection()
        serviceSection()
        portfolioSection()
        achievementsSection()
        testimonialSection()
        experienceSection()
        contactSection()
        footerSection()
    }
    backToTopBottom()
    if (menuOpened) {
        overflowMenu(onMenuClosed = { menuOpened = false })
    }
}
