package com.honger.ngel.model

enum class Section(val id: String, val title: String, val subtitle: String, val path: String) {

    Home(
        id = "home",
        title = "Home",
        subtitle = "",
        path = "#home"
    ),
    About(
        id = "about",
        title = "About",
        subtitle = "Why Hire Me?",
        path = "#about"
    ),
    Service(
        id = "service",
        title = "Service",
        subtitle = "I'm Good at",
        path = "#service"
    ),
    Portfolio(
        id = "portfolio",
        title = "Portfolio",
        subtitle = "My Work",
        path = "#portfolio"
    ),
    Experience(
        id = "experience",
        title = "Experience",
        subtitle = "Working Experience",
        path = "#experience"
    ),
    Contact(
        id = "contact",
        title = "Contact",
        subtitle = "Get in Touch",
        path = "#contact"
    ),
    Testimonial(
        id = "testimonial",
        title = "Testimonial",
        subtitle = "Happy Customers",
        path = "#testimonial"
    ),
    Achievements(
        id = "achievements",
        title = "Achievements",
        subtitle = "Personal Achievements",
        path = "#achievements"
    ),
}