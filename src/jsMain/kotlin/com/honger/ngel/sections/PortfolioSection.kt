package com.honger.ngel.sections

import androidx.compose.runtime.Composable
import com.honger.ngel.components.portfolioCard
import com.honger.ngel.components.sectionTitle
import com.honger.ngel.model.Portfolio
import com.honger.ngel.model.Section
import com.honger.ngel.style.PortfolioArrowIconStyle
import com.honger.ngel.utils.Constants.SECTION_WIDTH
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.Overflow
import com.varabyte.kobweb.compose.css.ScrollBehavior
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.silk.components.icons.fa.FaArrowLeft
import com.varabyte.kobweb.silk.components.icons.fa.FaArrowRight
import com.varabyte.kobweb.silk.components.icons.fa.IconSize
import com.varabyte.kobweb.silk.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.style.toModifier
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import kotlinx.browser.document
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px

@Composable
fun portfolioSection() {
    Box(
        modifier = Modifier.id(Section.Portfolio.id)
            .maxWidth(SECTION_WIDTH.px)
            .padding(topBottom = 100.px),
        contentAlignment = Alignment.Center
    ) {
        portfolioContent()
    }
}

@Composable
fun portfolioContent() {
    val breakpoint = rememberBreakpoint()
    Column(
        modifier = Modifier.fillMaxWidth(if (breakpoint >= Breakpoint.MD) 100.percent else 90.percent),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        sectionTitle(
            modifier = Modifier
                .fillMaxWidth()
                .margin(bottom = 25.px).align(alignment = Alignment.Start),
            section = Section.Portfolio
        )
        portfolioCard(breakpoint = breakpoint)
        portfolioNavigation()
    }
}

@Composable
fun portfolioCard(breakpoint: Breakpoint) {
    Row(
        modifier = Modifier
            .id("scrollableContainer")
            .fillMaxWidth(
                if (breakpoint > Breakpoint.MD) 950.px
                else if (breakpoint > Breakpoint.SM) 625.px
                else 300.px
            )
            .margin(bottom = 25.px)
            .maxWidth(950.px)
            .overflow(Overflow.Hidden)
            .scrollBehavior(ScrollBehavior.Smooth)
    ) {
        Portfolio.entries.forEach { portfolio ->
            portfolioCard(
                modifier = Modifier.margin(
                    right = if (portfolio != Portfolio.Five) 25.px else 0.px
                ),
                portfolio = portfolio
            )
        }
    }
}

@Composable
fun portfolioNavigation() {
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.Center
    ) {
        FaArrowLeft(
            modifier = PortfolioArrowIconStyle.toModifier()
                .margin(right = 40.px)
                .cursor(Cursor.Pointer)
                .onClick {
                    document.getElementById("scrollableContainer")
                        ?.scrollBy(x = (-325.0), y = 0.0)
                },
            size = IconSize.LG
        )
        FaArrowRight(
            modifier = PortfolioArrowIconStyle.toModifier()
                .cursor(Cursor.Pointer)
                .onClick {
                    document.getElementById("scrollableContainer")
                        ?.scrollBy(x = 325.0, y = 0.0)
                },
            size = IconSize.LG
        )
    }
}
