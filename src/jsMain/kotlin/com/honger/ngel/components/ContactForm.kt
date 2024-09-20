package com.honger.ngel.components

import androidx.compose.runtime.Composable
import com.honger.ngel.model.Theme
import com.honger.ngel.style.InputStyle
import com.honger.ngel.style.MainButtonStyle
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.attrsModifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.style.breakpoint.Breakpoint
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.*

@Composable
fun contactForm(breakpoint: Breakpoint) {
    Form(
        action = "https://formspree.io/f/xdknvqka",
        attrs = Modifier
            .attrsModifier {
                attr("method", "POST")
            }
            .toAttrs()
    ) {

        Div(attrs = Modifier.classNames("form-label").margin(bottom = 10.px).toAttrs()) {
            Label(
                attrs = Modifier
                    .margin(bottom = 15.px)
                    .classNames("form-label")
                    .toAttrs(),
                forId = "inputName"
            ) {
                Text("Name")
            }
        }
        Div(
            attrs = Modifier.classNames("form-control")
                .attrsModifier {
                    attr("placeholder", "Full Name")
                    attr("name", "name")
                    attr("required", "true")
                }.toAttrs()
        ) {
            Input(
                type = InputType.Text,
                attrs = InputStyle.toModifier()
                    .id("inputName")
                    .classNames("form-control")
                    .margin(bottom = 15.px)
                    .width(
                        if (breakpoint >= Breakpoint.MD) 600.px
                        else 300.px
                    )
                    .backgroundColor(Theme.LighterGray.rgb)
                    .boxShadow(0.px, 0.px, 0.px, 0.px, null)
                    .padding(12.px)
                    .fontSize(18.px)
                    .attrsModifier {
                        attr("placeholder", "Full Name")
                        attr("name", "name")
                        attr("required", "true")
                    }
                    .toAttrs()
            )
        }

        Div(attrs = Modifier.classNames("mb-3").margin(bottom = 10.px).toAttrs()) {
            Label(
                attrs = Modifier
                    .classNames("form-label")
                    .margin(bottom = 15.px)
                    .toAttrs(),
                forId = "inputEmail"
            ) {
                Text("Email")
            }
        }
        Div(attrs = Modifier.classNames("form-control").attrsModifier {
            attr("placeholder", "Email Address")
            attr("name", "email")
            attr("required", "true")
        }.toAttrs()) {
            Input(
                type = InputType.Email,
                attrs = InputStyle.toModifier()
                    .id("inputEmail")
                    .classNames("form-control")
                    .margin(bottom = 15.px)
                    .width(
                        if (breakpoint >= Breakpoint.MD) 600.px
                        else 300.px
                    )
                    .backgroundColor(Theme.LighterGray.rgb)
                    .boxShadow(0.px, 0.px, 0.px, 0.px, null)
                    .padding(12.px)
                    .fontSize(18.px)
                    .attrsModifier {
                        attr("placeholder", "Email Address")
                        attr("name", "email")
                        attr("required", "true")
                    }
                    .toAttrs()
            )
        }

        Div(attrs = Modifier.classNames("form-label").margin(bottom = 10.px).toAttrs()) {
            Label(
                attrs = Modifier
                    .classNames("form-label")
                    .margin(bottom = 15.px)
                    .toAttrs(),
                forId = "inputMessage"
            ) {
                Text("Message")
            }
        }
        Div(attrs = Modifier.classNames("form-control").attrsModifier {
            attr("placeholder", "Your Message")
            attr("name", "message")
            attr("required", "true")
        }.toAttrs()) {
            TextArea(
                attrs = InputStyle.toModifier()
                    .id("inputMessage")
                    .classNames("form-control")
                    .height(200.px)
                    .margin(bottom = 25.px)
                    .width(
                        if (breakpoint >= Breakpoint.MD) 600.px
                        else 300.px
                    )
                    .backgroundColor(Theme.LighterGray.rgb)
                    .boxShadow(0.px, 0.px, 0.px, 0.px, null)
                    .padding(12.px)
                    .fontSize(18.px)
                    .attrsModifier {
                        attr("placeholder", "Your Message")
                        attr("name", "message")
                        attr("required", "true")
                    }
                    .toAttrs()
            )
        }

        Box(
            modifier = Modifier.fillMaxWidth(),
            contentAlignment = Alignment.Center
        ) {
            Button(
                attrs = MainButtonStyle.toModifier()
                    .height(50.px)
                    .border(width = 0.px)
                    .borderRadius(r = 5.px)
                    .backgroundColor(Theme.Primary.rgb)
                    .color(Colors.White)
                    .cursor(Cursor.Pointer)
                    .toAttrs()
            ) {
                Text("Submit")
            }
        }
    }
}
