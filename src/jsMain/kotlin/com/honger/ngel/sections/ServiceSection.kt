package com.honger.ngel.sections

import androidx.compose.runtime.Composable
import com.honger.ngel.components.sectionTitle
import com.honger.ngel.components.serviceCard
import com.honger.ngel.model.Section
import com.honger.ngel.model.Service
import com.honger.ngel.utils.Constants.SECTION_WIDTH
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.silk.components.layout.SimpleGrid
import com.varabyte.kobweb.silk.components.layout.numColumns
import com.varabyte.kobweb.silk.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px

@Composable
fun serviceSection() {
    Box(
        modifier = Modifier.id(Section.Service.id).maxWidth(SECTION_WIDTH.px).padding(topBottom = 100.px),
        contentAlignment = Alignment.Center
    ) {
        serviceContent()
    }
}

@Composable
fun serviceContent() {
    val breakpoint = rememberBreakpoint()
    Column(
        modifier = Modifier.fillMaxSize(if (breakpoint >= Breakpoint.MD) 100.percent else 90.percent),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        sectionTitle(
            modifier = Modifier.fillMaxWidth().margin(bottom = 20.px),
            section = Section.Service,
            alignment = Alignment.CenterHorizontally,
        )
        SimpleGrid(numColumns = numColumns(base = 1, sm = 2, md = 3)) {
            Service.entries.forEach { service ->
                serviceCard(service = service)
            }
        }
    }
}