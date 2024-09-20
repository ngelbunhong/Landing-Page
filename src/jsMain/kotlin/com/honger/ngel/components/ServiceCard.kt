package com.honger.ngel.components

import androidx.compose.runtime.Composable
import com.honger.ngel.model.Service
import com.honger.ngel.model.Theme
import com.honger.ngel.style.ServiceCardStyle
import com.honger.ngel.utils.Constants.FONT_FAMILY
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.style.toModifier
import org.jetbrains.compose.web.css.LineStyle
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.P
import org.jetbrains.compose.web.dom.Text

@Composable
fun serviceCard(service: Service) {
    Column(
        modifier = ServiceCardStyle.toModifier().maxWidth(300.px).margin(all = 20.px).padding(all = 20.px)
            .border(width = 2.px, style = LineStyle.Solid, color = Theme.LighterGray.rgb)
    ) {
        Box(
            modifier = Modifier
                .id("iconBox")
                .padding(all = 10.px)
                .margin(bottom = 20.px)
                .border(width = 2.px, style = LineStyle.Solid, color = Theme.Primary.rgb)
                .borderRadius(topLeft = 20.px, topRight = 20.px, bottomLeft = 20.px, bottomRight = 0.px)
        ) {
            Image(
                modifier = Modifier.size(40.px),
                src = service.icon,
                description = service.description,
            )
        }
        P(
            attrs = Modifier
                .fillMaxWidth()
                .margin(top = 0.px, bottom = 10.px)
                .fontSize(18.px)
                .fontFamily(FONT_FAMILY)
                .fontWeight(FontWeight.Bold)
                .toAttrs()
        ) {
            Text(service.title)
        }

        P(
            attrs = Modifier
                .fillMaxWidth()
                .margin(top = 0.px, bottom = 0.px)
                .fontSize(14.px)
                .fontFamily(FONT_FAMILY)
                .fontWeight(FontWeight.Normal)
                .toAttrs()
        ) {
            Text(service.description)
        }
    }
}