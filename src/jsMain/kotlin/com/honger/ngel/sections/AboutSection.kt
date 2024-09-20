package com.honger.ngel.sections

import androidx.compose.runtime.*
import com.honger.ngel.components.sectionTitle
import com.honger.ngel.components.skillBar
import com.honger.ngel.model.Section
import com.honger.ngel.model.Skill
import com.honger.ngel.model.Theme
import com.honger.ngel.style.AboutImageStyle
import com.honger.ngel.style.AboutTextStyle
import com.honger.ngel.utils.Constants.FONT_FAMILY
import com.honger.ngel.utils.Constants.LOREM_IPSUM_SHORT
import com.honger.ngel.utils.Constants.SECTION_WIDTH
import com.honger.ngel.utils.Res.Image.IC_ABOUT_IMAGE
import com.honger.ngel.utils.animatePercentage
import com.honger.ngel.utils.observeViewportEntered
import com.varabyte.kobweb.compose.css.FontStyle
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column

import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.layout.SimpleGrid
import com.varabyte.kobweb.silk.components.layout.numColumns
import com.varabyte.kobweb.silk.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.style.toModifier
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import kotlinx.coroutines.launch
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.P
import org.jetbrains.compose.web.dom.Text

@Composable
fun aboutSection() {
    Box(
        modifier = Modifier.id(Section.About.id).maxWidth(SECTION_WIDTH.px).padding(topBottom = 150.px),
        contentAlignment = Alignment.Center
    ) {
        aboutContent()
    }
}

@Composable
fun aboutContent() {
    val breakpoint = rememberBreakpoint()
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier.fillMaxWidth(if (breakpoint >= Breakpoint.MD) 100.percent else 90.percent)
            .maxWidth(1200.px)
    ) {
        SimpleGrid(
            modifier = Modifier.fillMaxWidth(
                if (breakpoint >= Breakpoint.MD) 90.percent else 100.percent
            ), numColumns = numColumns(base = 1, md = 2)
        ) {
            if (breakpoint >= Breakpoint.MD) {
                aboutImage()
            }
            aboutMe()
        }
    }
}

@Composable
fun aboutImage() {
    Box(
        modifier = Modifier.fillMaxWidth(), contentAlignment = Alignment.Center
    ) {
        Image(
            modifier = AboutImageStyle.toModifier().fillMaxWidth(80.percent),
            src = IC_ABOUT_IMAGE,
            description = "About Image"
        )
    }
}

@Composable
fun aboutMe() {

    val scope = rememberCoroutineScope()
    var viewportEntered by remember { mutableStateOf(false) }
    val animatePercentage = remember { mutableStateListOf(0, 0, 0, 0, 0) }

    observeViewportEntered(
        sectionId = Section.About.id,
        distanceFromTop = 300.0,
        onViewportEntered = {
            viewportEntered = true
            Skill.entries.forEach { entry ->
                scope.launch {
                    animatePercentage(
                        percentage = entry.percentage.value.toInt(),
                        onUpdate = {
                            animatePercentage[entry.ordinal] = it
                        }
                    )
                }

            }
        }
    )

    Column(
        modifier = Modifier.fillMaxWidth(), verticalArrangement = Arrangement.Center
    ) {
        sectionTitle(section = Section.About)
        P(
            attrs = AboutTextStyle.toModifier().fillMaxWidth().margin(topBottom = 25.px).maxWidth(500.px)
                .fontSize(18.px).fontFamily(FONT_FAMILY).fontWeight(FontWeight.Normal).fontStyle(FontStyle.Initial)
                .color(Theme.Secondary.rgb).toAttrs()
        ) {
            Text(LOREM_IPSUM_SHORT)
        }
        Skill.entries.forEach { skill ->
            skillBar(
                name = skill.title,
                percentage = if (viewportEntered) skill.percentage else 0.percent,
                index = skill.ordinal,
                animatePercentage = if (viewportEntered) animatePercentage[skill.ordinal] else 0
            )
        }
    }
}