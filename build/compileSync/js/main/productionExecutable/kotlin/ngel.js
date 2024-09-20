(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kobweb-frontend-kobweb-silk.js', './html-html-core.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-silk-icons-fa.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-silk-icons-fa.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.honger.ngel:site'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.honger.ngel:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'com.honger.ngel:site'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'com.honger.ngel:site'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'com.honger.ngel:site'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'com.honger.ngel:site'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.honger.ngel:site'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'com.honger.ngel:site'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.honger.ngel:site'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'com.honger.ngel:site'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'com.honger.ngel:site'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'com.honger.ngel:site'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'com.honger.ngel:site'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'com.honger.ngel:site'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets-kobweb'] === 'undefined') {
      throw new Error("Error loading module 'com.honger.ngel:site'. Its dependency 'kobweb-frontend-silk-widgets-kobweb' was not found. Please, check whether 'kobweb-frontend-silk-widgets-kobweb' is loaded prior to 'com.honger.ngel:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'com.honger.ngel:site'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'com.honger.ngel:site'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'com.honger.ngel:site'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'com.honger.ngel:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'com.honger.ngel:site'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'com.honger.ngel:site'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'com.honger.ngel:site'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'com.honger.ngel:site'.");
    }
    if (typeof this['kobweb-frontend-silk-icons-fa'] === 'undefined') {
      throw new Error("Error loading module 'com.honger.ngel:site'. Its dependency 'kobweb-frontend-silk-icons-fa' was not found. Please, check whether 'kobweb-frontend-silk-icons-fa' is loaded prior to 'com.honger.ngel:site'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'com.honger.ngel:site'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'com.honger.ngel:site'.");
    }
    root['com.honger.ngel:site'] = factory(typeof this['com.honger.ngel:site'] === 'undefined' ? {} : this['com.honger.ngel:site'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-core'], this['kobweb-frontend-silk-foundation'], this['compose-multiplatform-core-compose-runtime-runtime'], this['html-internal-html-core-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-silk-widgets-kobweb'], this['kobweb-frontend-kobweb-silk'], this['html-html-core'], this['kobweb-frontend-kobweb-compose'], this['kobweb-frontend-compose-html-ext'], this['kobweb-frontend-silk-icons-fa'], this['kotlinx-coroutines-core']);
  }
}(globalThis, function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobwebx_silk_icons_fa, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var ensureNotNull = kotlin_kotlin.$_$.g9;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.j;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var removePrefix = kotlin_kotlin.$_$.a8;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var AppGlobals_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var to = kotlin_kotlin.$_$.p9;
  var mapOf = kotlin_kotlin.$_$.y3;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var THROW_CCE = kotlin_kotlin.$_$.z8;
  var renderWithDeferred = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var initMetadataForObject = kotlin_kotlin.$_$.i6;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var hasClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.b;
  var toString = kotlin_kotlin.$_$.o9;
  var toInt = kotlin_kotlin.$_$.k8;
  var charSequenceLength = kotlin_kotlin.$_$.t5;
  var toBoolean = kotlin_kotlin.$_$.i8;
  var isBlank = kotlin_kotlin.$_$.v7;
  var VOID = kotlin_kotlin.$_$.e;
  var removeSuffix = kotlin_kotlin.$_$.b8;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.e;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s3;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.p3;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var P = kotlin_org_jetbrains_compose_html_html_core.$_$.m3;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.q2;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var Form = kotlin_org_jetbrains_compose_html_html_core.$_$.i3;
  var Label = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var Text_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var id = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var Input = kotlin_org_jetbrains_compose_html_html_core.$_$.k3;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var numColumns = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var SimpleGrid = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var fillMaxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var Center_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r1;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var times = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var CSSTransition_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a2;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var Center_instance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var Companion_instance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var rememberBreakpoint = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var SpaceBetween_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var End_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var copyToArray = kotlin_kotlin.$_$.b3;
  var take = kotlin_kotlin.$_$.n4;
  var toModifier_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var Link = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.c;
  var IconSize_XL_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.i;
  var FaBars = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.c;
  var Image_0 = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var OpenLinkStrategy_IN_NEW_TAB_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var Link_0 = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.d;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k2;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v2;
  var width_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var Start_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p3;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var KMutableProperty0 = kotlin_kotlin.$_$.d7;
  var THROW_ISE = kotlin_kotlin.$_$.a9;
  var getLocalDelegateReference = kotlin_kotlin.$_$.y5;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.a2;
  var CoroutineImpl = kotlin_kotlin.$_$.k5;
  var protoOf = kotlin_kotlin.$_$.u6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var isInterface = kotlin_kotlin.$_$.m6;
  var Long = kotlin_kotlin.$_$.x8;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w4;
  var equals = kotlin_kotlin.$_$.w5;
  var initMetadataForLambda = kotlin_kotlin.$_$.h6;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n2;
  var End_instance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var CenterHorizontally_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var toModifier_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var margin_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var borderRadius_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var times_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var IconSize_LG_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.h;
  var FaFacebook = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.d;
  var FaTwitter = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.g;
  var FaInstagram = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.e;
  var FaLinkedin = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.f;
  var enumEntries = kotlin_kotlin.$_$.m5;
  var Enum = kotlin_kotlin.$_$.t8;
  var initMetadataForClass = kotlin_kotlin.$_$.d6;
  var rgb = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var Top_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var numberToInt = kotlin_kotlin.$_$.s6;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var fontStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var get_deg = kotlin_org_jetbrains_compose_html_html_core.$_$.p1;
  var transform = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var TopCenter_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var Bottom_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var Companion_instance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var Companion_instance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var scrollBehavior = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var FaArrowLeft = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.a;
  var FaArrowRight = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.b;
  var listOf = kotlin_kotlin.$_$.w3;
  var Companion_instance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.i9;
  var visibility = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var rotate = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var Companion_instance_13 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q2;
  var CSSTransition = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var filter = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var get_focus = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var get_anyLink = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var KProperty0 = kotlin_kotlin.$_$.f7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a6;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var EventListener = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var numberRangeToNumber = kotlin_kotlin.$_$.q6;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.f6;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForObject(ComposableSingletons$ContactFormKt, 'ComposableSingletons$ContactFormKt');
  initMetadataForObject(ComposableSingletons$HeaderKt, 'ComposableSingletons$HeaderKt');
  initMetadataForObject(ComposableSingletons$PortfolioCardKt, 'ComposableSingletons$PortfolioCardKt');
  initMetadataForObject(ComposableSingletons$RatingBarKt, 'ComposableSingletons$RatingBarKt');
  initMetadataForLambda(sectionTitle$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(ComposableSingletons$SocailBarKt, 'ComposableSingletons$SocailBarKt');
  initMetadataForClass(Achievement, 'Achievement', VOID, Enum);
  initMetadataForClass(Experience, 'Experience', VOID, Enum);
  initMetadataForClass(Portfolio, 'Portfolio', VOID, Enum);
  initMetadataForClass(Section, 'Section', VOID, Enum);
  initMetadataForClass(Service, 'Service', VOID, Enum);
  initMetadataForClass(Skill, 'Skill', VOID, Enum);
  initMetadataForClass(Testimonial, 'Testimonial', VOID, Enum);
  initMetadataForClass(Theme, 'Theme', VOID, Enum);
  initMetadataForObject(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt');
  initMetadataForObject(ComposableSingletons$AboutSectionKt, 'ComposableSingletons$AboutSectionKt');
  initMetadataForLambda(aboutMe$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(achievementsContent$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(ComposableSingletons$ContactSectionKt, 'ComposableSingletons$ContactSectionKt');
  initMetadataForLambda(contactContent$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(ComposableSingletons$ExperienceSectionKt, 'ComposableSingletons$ExperienceSectionKt');
  initMetadataForObject(ComposableSingletons$MainSectionKt, 'ComposableSingletons$MainSectionKt');
  initMetadataForObject(ComposableSingletons$PortfolioSectionKt, 'ComposableSingletons$PortfolioSectionKt');
  initMetadataForObject(ComposableSingletons$ServiceSectionKt, 'ComposableSingletons$ServiceSectionKt');
  initMetadataForObject(ComposableSingletons$TestimonialSectionKt, 'ComposableSingletons$TestimonialSectionKt');
  initMetadataForLambda(observeViewportEntered$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($animatePercentageCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($animateNumbersCOROUTINE$1, CoroutineImpl);
  //endregion
  function forceReloadNow() {
    window.stop();
    window.location.reload();
  }
  function handleServerStatusEvents() {
    var status = ensureNotNull(document.getElementById('status'));
    var lastVersion = {_v: null};
    var shouldReload = {_v: false};
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = status.children[0];
    var warningIcon = ensureNotNull(tmp$ret$1);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = status.children[1];
    var spinnerIcon = ensureNotNull(tmp$ret$3);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = status.children[2];
    var statusText = ensureNotNull(tmp$ret$5);
    status.addEventListener('transitionend', handleServerStatusEvents$lambda(status, shouldReload));
    // Inline function 'org.w3c.dom.EventSourceInit' call
    var o = {};
    o['withCredentials'] = true;
    var eventSource = new EventSource('/api/kobweb-status', o);
    eventSource.addEventListener('version', handleServerStatusEvents$lambda_0(lastVersion, status, shouldReload));
    eventSource.addEventListener('status', handleServerStatusEvents$lambda_1(warningIcon, spinnerIcon, statusText, status));
    eventSource.onerror = handleServerStatusEvents$lambda_2(eventSource);
  }
  function main() {
    handleServerStatusEvents();
    get_api(window).u2o(true);
    Companion_instance.s2q('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.h2r(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.j2r(removePrefix(window.location.href, window.location.origin), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    AppGlobals_instance.c2p(mapOf(to('title', 'LandingPage')));
    renderComposable('root', ComposableLambda$invoke$ref_2(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.u18()) {
      homePage($composer_0, 0);
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.u19(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) || !$composer_0.u18()) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -471532736, true, ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75(it));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.e1a();
      var tmp_0;
      if (invalid || it_0 === Companion_getInstance().r13_1) {
        // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.k1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it_0;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.a19();
      renderWithDeferred(tmp0, $composer_0, 6);
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.u18()) {
        tmp = $it($composer_0, 0);
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.f3d_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-994802423, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.g3d_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-527747544, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function handleServerStatusEvents$lambda($status, $shouldReload) {
    return function (it) {
      var tmp;
      if (hasClass($status, 'fade-out')) {
        removeClass($status, ['fade-out']);
        var tmp_0;
        if ($shouldReload._v) {
          forceReloadNow();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  function handleServerStatusEvents$lambda_0($lastVersion, $status, $shouldReload) {
    return function (evt) {
      var version = toInt(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp;
      if ($lastVersion._v == null) {
        $lastVersion._v = version;
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($lastVersion._v === version)) {
        $lastVersion._v = version;
        var tmp_1;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = $status.className;
        if (charSequenceLength(this_0) > 0) {
          $shouldReload._v = true;
          tmp_1 = Unit_instance;
        } else {
          forceReloadNow();
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }
      return Unit_instance;
    };
  }
  function handleServerStatusEvents$lambda_1($warningIcon, $spinnerIcon, $statusText, $status) {
    return function (evt) {
      var tmp = JSON;
      var values = tmp.parse(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp_0 = values.text;
      var text = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      var tmp_1 = values.isError;
      var isError = toBoolean((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      var tmp_2;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(text)) {
        $warningIcon.className = isError ? 'visible' : 'hidden';
        $spinnerIcon.className = isError ? 'hidden' : 'visible';
        $statusText.innerHTML = '<i>' + text + '<\/i>';
        $status.className = 'fade-in';
        tmp_2 = Unit_instance;
      } else {
        var tmp_3;
        if ($status.className === 'fade-in') {
          $status.className = 'fade-out';
          tmp_3 = Unit_instance;
        }
        tmp_2 = tmp_3;
      }
      return Unit_instance;
    };
  }
  function handleServerStatusEvents$lambda_2($eventSource) {
    return function (it) {
      $eventSource.close();
      return Unit_instance;
    };
  }
  function main$lambda(ctx) {
    ctx.z2p_1.g2r('/', VOID, ComposableSingletons$MainKt_getInstance().f3d_1);
    return Unit_instance;
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.k2r(removeSuffix(removeSuffix($this$addRouteInterceptor.z2q_1, '.html'), '.htm'));
    return Unit_instance;
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.f2v_1.f2w('about-image', get_AboutImageStyle());
    ctx.f2v_1.f2w('about-text', get_AboutTextStyle());
    ctx.f2v_1.f2w('input', get_InputStyle());
    ctx.f2v_1.f2w('portfolio-section', get_PortfolioSectionStyle());
    ctx.f2v_1.f2w('portfolio-arrow-icon', get_PortfolioArrowIconStyle());
    ctx.f2v_1.f2w('service-card', get_ServiceCardStyle());
    ctx.f2v_1.q30(get_NavigationStyle());
    ctx.f2v_1.q30(get_LogoStyle());
    ctx.f2v_1.q30(get_SocialLinkStyle());
    ctx.f2v_1.q30(get_MainButtonStyle());
    ctx.f2v_1.q30(get_MainImageStyle());
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.u18()) {
        $router.c2r(ComposableSingletons$MainKt_getInstance().g3d_1, $composer_0, 70, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'main.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 1721402181, true, main$lambda$lambda($router));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp_0;
      if (invalid || it === Companion_getInstance().r13_1) {
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.k1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.a19();
      appEntry(tmp0, $composer_0, 6);
      return Unit_instance;
    };
  }
  function mainWrapper() {
    main();
  }
  function appEntry(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-309455147);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.u19(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.u18()) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.appEntry.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 1303471060, true, appEntry$lambda(content));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp_0;
      if (invalid || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.appEntry.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.k1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.a19();
      SilkApp(tmp0, $composer_0, 6);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(appEntry$lambda_0(content, $changed));
    }
  }
  function appEntry$lambda$lambda($content) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function appEntry$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.u18()) {
        var tmp_0 = minHeight(toModifier(get_SmoothColorStyle(), $composer_0, 0), get_vh(100));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.appEntry.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -1628355974, true, appEntry$lambda$lambda($content));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_2;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.appEntry.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.a19();
        Surface(tmp_0, null, null, null, null, tmp0, $composer_0, 196616, 30);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function appEntry$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      appEntry($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function achievementCard(modifier, animatedNumber, achievement, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-390580831);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x19(animatedNumber) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.s10(achievement) ? 256 : 128);
    if (!(($default & 1) === 1) || (!(($dirty & 731) === 146) || !$composer_0.u18())) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance_0;
      }
      var tmp = modifier_0._v;
      var tmp_0 = CenterVertically_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.achievementCard.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -276533634, true, achievementCard$lambda(achievement, animatedNumber));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp_2;
      if (invalid || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.components.achievementCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_9(dispatchReceiver);
        $composer_1.k1a(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.a19();
      Row(tmp, null, tmp_0, null, tmp0, $composer_0, 25096, 10);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(achievementCard$lambda_0(modifier_0, animatedNumber, achievement, $changed, $default));
    }
  }
  function achievementCard$lambda$lambda$lambda($achievement, $animatedNumber) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($achievement.equals(Achievement_Completed_getInstance()) ? '' + $animatedNumber + '+' : '' + $animatedNumber, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function achievementCard$lambda$lambda$lambda_0($achievement) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($achievement.l3d_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function achievementCard$lambda$lambda($achievement, $animatedNumber) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        var tmp_0 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(Companion_instance_0), get_px(0)), ['Roboto']), get_px(30)), Companion_instance_1.g2k()), Theme_Primary_getInstance().p3d_1));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.achievementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 848462537, true, achievementCard$lambda$lambda$lambda($achievement, $animatedNumber));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_2;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.achievementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_6(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.a19();
        P(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_4 = toAttrs(opacity(color(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(Companion_instance_0), get_px(0)), ['Roboto']), get_px(16)), Companion_instance_1.e2k()), Theme_Secondary_getInstance().p3d_1), get_percent(50)));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.achievementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_5, 1453722226, true, achievementCard$lambda$lambda$lambda_0($achievement));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.z18(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.s10(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.e1a();
        var tmp_6;
        if (invalid_0 || it_0 === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.achievementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_7(dispatchReceiver_0);
          $composer_2.k1a(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_2.a19();
        P(tmp_4, tmp0_0, $composer_0, 48, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function achievementCard$lambda($achievement, $animatedNumber) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        var tmp0_modifier = margin_0(size(Companion_instance_0, get_px(70)), VOID, get_px(20));
        var tmp1_src = $achievement.j3d_1;
        Image(tmp1_src, tmp0_modifier, null, null, null, 'Achievement Icon', false, null, $composer_0, 196672, 220);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.achievementCard.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 1255489831, true, achievementCard$lambda$lambda($achievement, $animatedNumber));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_1;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.achievementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_8(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.a19();
        Column(null, null, null, null, tmp0, $composer_0, 24576, 15);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function achievementCard$lambda_0($modifier, $animatedNumber, $achievement, $$changed, $$default) {
    return function ($composer, $force) {
      achievementCard($modifier._v, $animatedNumber, $achievement, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function contactForm(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-335591189);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.s10(breakpoint) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.u18()) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.contactForm.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -905639630, true, contactForm$lambda(breakpoint));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp_0;
      if (invalid || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.components.contactForm.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_11(dispatchReceiver);
        $composer_1.k1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.a19();
      Form('', null, tmp0, $composer_0, 390, 2);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(contactForm$lambda_0(breakpoint, $changed));
    }
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactFormKt$lambda_1$lambda_27lvxi($this$Label, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Name', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableSingletons$ContactFormKt() {
    ComposableSingletons$ContactFormKt_instance = this;
    var tmp = this;
    tmp.q3d_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(473428339, false, ComposableSingletons$ContactFormKt$lambda_1$lambda_27lvxi));
  }
  var ComposableSingletons$ContactFormKt_instance;
  function ComposableSingletons$ContactFormKt_getInstance() {
    if (ComposableSingletons$ContactFormKt_instance == null)
      new ComposableSingletons$ContactFormKt();
    return ComposableSingletons$ContactFormKt_instance;
  }
  function contactForm$lambda($breakpoint) {
    return function ($this$Form, $composer, $changed) {
      var $composer_0 = $composer;
      Label(null, null, ComposableSingletons$ContactFormKt_getInstance().q3d_1, $composer_0, 384, 3);
      Input(Text_getInstance(), toAttrs(backgroundColor(width(id(Companion_instance_0, 'inputName'), $breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_px(500) : get_px(250)), Theme_LighterGray_getInstance().p3d_1)), $composer_0, 8);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function contactForm$lambda_0($breakpoint, $$changed) {
    return function ($composer, $force) {
      contactForm($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function experienceCard(breakpoint, active, experience, animatedMargin, $composer, $changed, $default) {
    var active_0 = {_v: active};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(732224792);
    if (!(($default & 2) === 0)) {
      active_0._v = false;
    }
    var tmp2_modifier = maxWidth(fillMaxWidth(Companion_instance_0), breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(60) : get_percent(90));
    var tmp3_numColumns = numColumns(1, VOID, 2);
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.honger.ngel.components.experienceCard.<anonymous>' call
    var tmp = $composer_0;
    var dispatchReceiver = composableLambda(tmp, 493347983, true, experienceCard$lambda(active_0, experience, breakpoint, animatedMargin));
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_1 = $composer_0;
    $composer_1.z18(1157296644);
    sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.s10(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.e1a();
    var tmp_0;
    if (invalid || it === Companion_getInstance().r13_1) {
      // Inline function 'com.honger.ngel.components.experienceCard.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_12(dispatchReceiver);
      $composer_1.k1a(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_1.a19();
    SimpleGrid(tmp3_numColumns, tmp2_modifier, null, null, tmp0, $composer_0, 24648, 12);
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(experienceCard$lambda_0(breakpoint, active_0, experience, animatedMargin, $changed, $default));
    }
  }
  function experienceDescription(active, description, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(1765860943);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.v19(active) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s10(description) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.u18()) {
      var tmp = backgroundColor(padding(margin(fillMaxWidth(Companion_instance_0), get_px(14)), get_px(14)), active ? Theme_Primary_getInstance().p3d_1 : Theme_LighterGray_getInstance().p3d_1);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.experienceDescription.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -2034019371, true, experienceDescription$lambda(active, description));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp_1;
      if (invalid || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.components.experienceDescription.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_14(dispatchReceiver);
        $composer_1.k1a(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.a19();
      Box(tmp, null, null, tmp0, $composer_0, 3080, 6);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(experienceDescription$lambda_0(active, description, $changed));
    }
  }
  function experienceDetails(breakpoint, active, experience, animatedMargin, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(136943258);
    var tmp = margin_0(fillMaxWidth(Companion_instance_0), VOID, VOID, VOID, breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_px(14) : get_px(0));
    var tmp_0 = CenterVertically_instance;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.honger.ngel.components.experienceDetails.<anonymous>' call
    var tmp_1 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_1, 1937272477, true, experienceDetails$lambda(breakpoint, active, experience, animatedMargin));
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_1 = $composer_0;
    $composer_1.z18(1157296644);
    sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.s10(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.e1a();
    var tmp_2;
    if (invalid || it === Companion_getInstance().r13_1) {
      // Inline function 'com.honger.ngel.components.experienceDetails.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_19(dispatchReceiver);
      $composer_1.k1a(value);
      tmp_2 = value;
    } else {
      tmp_2 = it;
    }
    var tmp_3 = tmp_2;
    var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    $composer_1.a19();
    Row(tmp, null, tmp_0, null, tmp0, $composer_0, 25096, 10);
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(experienceDetails$lambda_0(breakpoint, active, experience, animatedMargin, $changed));
    }
  }
  function experienceNumber(active, experience, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(1300635667);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.v19(active) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s10(experience) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.u18()) {
      var tmp = fillMaxHeight(margin_0(Companion_instance_0, VOID, get_px(14)));
      var tmp_0 = Center_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.experienceNumber.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -623056435, true, experienceNumber$lambda(active, experience));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp_2;
      if (invalid || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.components.experienceNumber.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_22(dispatchReceiver);
        $composer_1.k1a(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.a19();
      Box(tmp, tmp_0, null, tmp0, $composer_0, 3144, 4);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(experienceNumber$lambda_0(active, experience, $changed));
    }
  }
  function experienceCard$lambda($active, $experience, $breakpoint, $animatedMargin) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.u18()) {
        experienceDescription($active._v, $experience.v3d_1, $composer_0, 0);
        experienceDetails($breakpoint, $active._v, $experience, $animatedMargin, $composer_0, 4096);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function experienceCard$lambda_0($breakpoint, $active, $experience, $animatedMargin, $$changed, $$default) {
    return function ($composer, $force) {
      experienceCard($breakpoint, $active._v, $experience, $animatedMargin, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function experienceDescription$lambda$lambda($description) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($description, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function experienceDescription$lambda($active, $description) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.experienceDescription.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = toAttrs(color(fontWeight(lineHeight(fontSize(fontFamily(margin(Companion_instance_0, get_px(0)), ['Roboto']), get_px(14)), 1.6), Companion_instance_1.e2k()), $active ? Colors_instance.p2t() : Theme_Secondary_getInstance().p3d_1));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.experienceDescription.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 1450788851, true, experienceDescription$lambda$lambda($description));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_2;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.experienceDescription.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_13(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.a19();
        P(tmp_0, tmp0, $composer_0, 48, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function experienceDescription$lambda_0($active, $description, $$changed) {
    return function ($composer, $force) {
      experienceDescription($active, $description, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function experienceDetails$lambda$lambda$lambda($experience) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($experience.u3d_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function experienceDetails$lambda$lambda$lambda_0($experience) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($experience.x3d_1 + ' - ' + $experience.y3d_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function experienceDetails$lambda$lambda$lambda_1($experience) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($experience.w3d_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function experienceDetails$lambda$lambda($experience) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        var tmp_0 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(Companion_instance_0, get_px(0)), ['Roboto']), get_px(20)), Companion_instance_1.f2k()), Theme_Secondary_getInstance().p3d_1));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -1965840270, true, experienceDetails$lambda$lambda$lambda($experience));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_2;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_15(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.a19();
        P(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_4 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(Companion_instance_0, get_px(0)), ['Roboto']), get_px(14)), Companion_instance_1.e2k()), Theme_Secondary_getInstance().p3d_1));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_5, 298010153, true, experienceDetails$lambda$lambda$lambda_0($experience));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.z18(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.s10(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.e1a();
        var tmp_6;
        if (invalid_0 || it_0 === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_16(dispatchReceiver_0);
          $composer_2.k1a(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_2.a19();
        P(tmp_4, tmp0_0, $composer_0, 48, 0);
        var tmp_8 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(Companion_instance_0, get_px(0)), ['Roboto']), get_px(14)), Companion_instance_1.e2k()), Theme_Primary_getInstance().p3d_1));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_9 = $composer_0;
        var dispatchReceiver_1 = composableLambda(tmp_9, 1770288746, true, experienceDetails$lambda$lambda$lambda_1($experience));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        $composer_3.z18(1157296644);
        sourceInformation($composer_3, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.s10(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.e1a();
        var tmp_10;
        if (invalid_1 || it_1 === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_17(dispatchReceiver_1);
          $composer_3.k1a(value_1);
          tmp_10 = value_1;
        } else {
          tmp_10 = it_1;
        }
        var tmp_11 = tmp_10;
        var tmp0_1 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        $composer_3.a19();
        P(tmp_8, tmp0_1, $composer_0, 48, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function experienceDetails$lambda($breakpoint, $active, $experience, $animatedMargin) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        $composer_0.z18(1383166124);
        if ($breakpoint.i2(Breakpoint_MD_getInstance()) >= 0) {
          experienceNumber($active, $experience, $composer_0, 0);
        }
        $composer_0.a19();
        var tmp_0 = transition(margin_0(fillMaxSize(Companion_instance_0), VOID, VOID, VOID, $breakpoint.i2(Breakpoint_SM_getInstance()) <= 0 ? get_px(0) : $animatedMargin), [CSSTransition_init_$Create$('margin', get_ms(500), VOID, times($experience.h2_1, get_ms(100)))]);
        var tmp_1 = Center_instance_0;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, -505880236, true, experienceDetails$lambda$lambda($experience));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_3;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_18(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.a19();
        Column(tmp_0, tmp_1, null, null, tmp0, $composer_0, 24648, 12);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function experienceDetails$lambda_0($breakpoint, $active, $experience, $animatedMargin, $$changed) {
    return function ($composer, $force) {
      experienceDetails($breakpoint, $active, $experience, $animatedMargin, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function experienceNumber$lambda$lambda$lambda($experience) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($experience.t3d_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function experienceNumber$lambda$lambda($active, $experience) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        var tmp_0 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(Companion_instance_0, get_px(0)), ['Roboto']), get_px(16)), Companion_instance_1.f2k()), $active ? Colors_instance.p2t() : Theme_Primary_getInstance().p3d_1));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.experienceNumber.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -776419054, true, experienceNumber$lambda$lambda$lambda($experience));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_2;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.experienceNumber.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_20(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.a19();
        P(tmp_0, tmp0, $composer_0, 48, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function experienceNumber$lambda($active, $experience) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        var tmp_0 = backgroundColor(width(fillMaxHeight(Companion_instance_0), get_px(3)), Theme_Primary_getInstance().p3d_1);
        Box(tmp_0, null, null, null, $composer_0, 8, 14);
        var tmp_1 = size(Companion_instance_0, get_px(40));
        var tmp_2 = get_px(3);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = borderRadius(backgroundColor(border(tmp_1, tmp_2, 'solid', Theme_Primary_getInstance().p3d_1), $active ? Theme_Primary_getInstance().p3d_1 : Colors_instance.p2t()), get_percent(50));
        var tmp_4 = Center_instance;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.experienceNumber.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_5, 637945072, true, experienceNumber$lambda$lambda($active, $experience));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_6;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.experienceNumber.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_21(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_6 = value;
        } else {
          tmp_6 = it;
        }
        var tmp_7 = tmp_6;
        var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_1.a19();
        Box(tmp_3, tmp_4, null, tmp0, $composer_0, 3144, 4);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function experienceNumber$lambda_0($active, $experience, $$changed) {
    return function ($composer, $force) {
      experienceNumber($active, $experience, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function header($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(894622888);
    if (!($changed === 0) || !$composer_0.u18()) {
      var breakPoint = rememberBreakpoint($composer_0, 0);
      var tmp6_modifier = margin(fillMaxWidth(Companion_instance_0, breakPoint.i2(Breakpoint_MD_getInstance()) > 0 ? get_percent(80) : get_percent(90)), get_px(50));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.header.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -2136094267, true, header$lambda(breakPoint));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp_0;
      if (invalid || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.components.header.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_24(dispatchReceiver);
        $composer_1.k1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.a19();
      Row(tmp6_modifier, SpaceBetween_instance, CenterVertically_instance, null, tmp0, $composer_0, 25160, 8);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(header$lambda_0($changed));
    }
  }
  function leftSide(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-432271000);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.s10(breakpoint) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.u18()) {
      var tmp = CenterVertically_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.leftSide.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 1282620165, true, leftSide$lambda(breakpoint));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp_1;
      if (invalid || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.components.leftSide.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_25(dispatchReceiver);
        $composer_1.k1a(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.a19();
      Row(null, null, tmp, null, tmp0, $composer_0, 25088, 11);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(leftSide$lambda_0(breakpoint, $changed));
    }
  }
  function rightSide($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-1095296046);
    if (!($changed === 0) || !$composer_0.u18()) {
      var tmp = padding(backgroundColor(borderRadius(fillMaxWidth(Companion_instance_0), get_px(50)), Theme_LighterGray_getInstance().p3d_1), get_px(16));
      var tmp_0 = End_instance;
      Row(tmp, tmp_0, null, null, ComposableSingletons$HeaderKt_getInstance().z3d_1, $composer_0, 24648, 12);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(rightSide$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$HeaderKt$lambda_1$lambda_fev17j($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.u18()) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = get_entries_2();
      var tmp$ret$0 = copyToArray(this_0);
      var tmp0_iterator = take(tmp$ret$0, 6).j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        // Inline function 'com.honger.ngel.components.ComposableSingletons$HeaderKt.lambda-1.<anonymous>.<anonymous>' call
        var tmp9_modifier = textDecorationLine(fontWeight(fontSize(fontFamily(padding_0(toModifier_0(get_NavigationStyle(), [], $composer_0, 72), VOID, get_px(30)), ['Roboto']), get_px(18)), Companion_instance_1.e2k()), Companion_instance_3.b2k());
        var tmp10_path = element.f3e_1;
        var tmp11_text = element.d3e_1;
        Link(tmp10_path, tmp11_text, tmp9_modifier, null, null, null, null, false, null, $composer_0, 512, 504);
      }
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$HeaderKt() {
    ComposableSingletons$HeaderKt_instance = this;
    var tmp = this;
    tmp.z3d_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(-387564139, false, ComposableSingletons$HeaderKt$lambda_1$lambda_fev17j));
  }
  var ComposableSingletons$HeaderKt_instance;
  function ComposableSingletons$HeaderKt_getInstance() {
    if (ComposableSingletons$HeaderKt_instance == null)
      new ComposableSingletons$HeaderKt();
    return ComposableSingletons$HeaderKt_instance;
  }
  function header$lambda($breakPoint) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        leftSide($breakPoint, $composer_0, 0);
        if ($breakPoint.i2(Breakpoint_MD_getInstance()) > 0) {
          rightSide($composer_0, 0);
        }
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function header$lambda_0($$changed) {
    return function ($composer, $force) {
      header($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function leftSide$lambda($breakpoint) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        $composer_0.z18(-2026118202);
        if ($breakpoint.i2(Breakpoint_MD_getInstance()) < 0) {
          FaBars(margin_0(Companion_instance_0, VOID, get_px(15)), IconSize_XL_getInstance(), $composer_0, 56, 0);
        }
        $composer_0.a19();
        var tmp7_modifier = toModifier_0(get_LogoStyle(), [], $composer_0, 72);
        var tmp8_src = 'logo.svg';
        Image_0(tmp8_src, 'Logo Image', tmp7_modifier, null, null, null, false, null, $composer_0, 566, 248);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function leftSide$lambda_0($breakpoint, $$changed) {
    return function ($composer, $force) {
      leftSide($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function rightSide$lambda($$changed) {
    return function ($composer, $force) {
      rightSide($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function portfolioCard(modifier, portfolio, link, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var link_0 = {_v: link};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-1756415168);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s10(portfolio) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.s10(link_0._v) ? 256 : 128);
    if (!(($default & 1) === 1) || (!(($dirty & 731) === 146) || !$composer_0.u18())) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance_0;
      }
      if (!(($default & 4) === 0)) {
        link_0._v = 'https://www.google.com';
      }
      var tmp16_modifier = textDecorationLine(toModifier(get_PortfolioSectionStyle(), $composer_0, 6), Companion_instance_3.b2k());
      var tmp17_openExternalLinksStrategy = OpenLinkStrategy_IN_NEW_TAB_getInstance();
      var tmp = link_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.portfolioCard.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 79007631, true, portfolioCard$lambda(modifier_0, portfolio));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp_1;
      if (invalid || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.components.portfolioCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_31(dispatchReceiver);
        $composer_1.k1a(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.a19();
      Link_0(tmp, tmp16_modifier, null, null, tmp17_openExternalLinksStrategy, null, false, null, tmp0, $composer_0, 100687936 | 14 & $dirty >> 6, 236);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(portfolioCard$lambda_0(modifier_0, portfolio, link_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$PortfolioCardKt$lambda_1$lambda_d17v02($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.u18()) {
      var tmp14_modifier = size(id(Companion_instance_0, 'linkIcon'), get_px(32));
      var tmp15_src = 'link_icon.svg';
      Image(tmp15_src, tmp14_modifier, null, null, null, 'Link Icon', false, null, $composer_0, 196678, 220);
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$PortfolioCardKt() {
    ComposableSingletons$PortfolioCardKt_instance = this;
    var tmp = this;
    tmp.g3e_1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(1435665170, false, ComposableSingletons$PortfolioCardKt$lambda_1$lambda_d17v02));
  }
  var ComposableSingletons$PortfolioCardKt_instance;
  function ComposableSingletons$PortfolioCardKt_getInstance() {
    if (ComposableSingletons$PortfolioCardKt_instance == null)
      new ComposableSingletons$PortfolioCardKt();
    return ComposableSingletons$PortfolioCardKt_instance;
  }
  function portfolioCard$lambda$lambda$lambda($portfolio) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        var tmp12_modifier = objectFit(size(Companion_instance_0, get_px(300)), Companion_instance_4.o2l());
        var tmp13_src = $portfolio.j3e_1;
        Image_0(tmp13_src, 'Portfolio Image', tmp12_modifier, null, null, null, false, null, $composer_0, 560, 248);
        var tmp_0 = backgroundColor(fillMaxHeight(id(Companion_instance_0, 'greenOverlay')), Companion_instance_5.c2t(0.5, 0, 167, 142));
        var tmp_1 = Center_instance;
        Box(tmp_0, tmp_1, null, ComposableSingletons$PortfolioCardKt_getInstance().g3e_1, $composer_0, 3144, 4);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function portfolioCard$lambda$lambda$lambda_0($portfolio) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($portfolio.k3e_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function portfolioCard$lambda$lambda$lambda_1($portfolio) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($portfolio.k3e_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function portfolioCard$lambda$lambda($portfolio) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        var tmp_0 = maxWidth(fillMaxWidth(margin_1(id(Companion_instance_0, 'boxParent'), VOID, VOID, get_px(20))), get_px(300));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -2044386036, true, portfolioCard$lambda$lambda$lambda($portfolio));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_2;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_27(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.a19();
        Box(tmp_0, null, null, tmp0, $composer_0, 3080, 6);
        var tmp_4 = toAttrs(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(id(Companion_instance_0, 'portfolioTitle')), get_px(0)), ['Roboto']), get_px(18)), Companion_instance_1.f2k()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_5, -1924580316, true, portfolioCard$lambda$lambda$lambda_0($portfolio));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.z18(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.s10(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.e1a();
        var tmp_6;
        if (invalid_0 || it_0 === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_28(dispatchReceiver_0);
          $composer_2.k1a(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_2.a19();
        P(tmp_4, tmp0_0, $composer_0, 48, 0);
        var tmp_8 = toAttrs(color(opacity(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(id(Companion_instance_0, 'portfolioDesc')), get_px(0)), ['Roboto']), get_px(14)), Companion_instance_1.e2k()), get_percent(50)), Theme_Secondary_getInstance().p3d_1));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_9 = $composer_0;
        var dispatchReceiver_1 = composableLambda(tmp_9, -1073880037, true, portfolioCard$lambda$lambda$lambda_1($portfolio));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        $composer_3.z18(1157296644);
        sourceInformation($composer_3, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.s10(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.e1a();
        var tmp_10;
        if (invalid_1 || it_1 === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_29(dispatchReceiver_1);
          $composer_3.k1a(value_1);
          tmp_10 = value_1;
        } else {
          tmp_10 = it_1;
        }
        var tmp_11 = tmp_10;
        var tmp0_1 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        $composer_3.a19();
        P(tmp_8, tmp0_1, $composer_0, 48, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function portfolioCard$lambda($modifier, $portfolio) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.u18()) {
        var tmp_0 = width_0(id($modifier._v, 'columnParent'), Companion_instance_6.z2l());
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -1047671674, true, portfolioCard$lambda$lambda($portfolio));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_2;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_30(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.a19();
        Column(tmp_0, null, null, null, tmp0, $composer_0, 24584, 14);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function portfolioCard$lambda_0($modifier, $portfolio, $link, $$changed, $$default) {
    return function ($composer, $force) {
      portfolioCard($modifier._v, $portfolio, $link._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ratingBar(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(463401325);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 1) === 1) || (!(($dirty & 11) === 2) || !$composer_0.u18())) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance_0;
      }
      var tmp = modifier_0._v;
      Row(tmp, null, null, null, ComposableSingletons$RatingBarKt_getInstance().m3e_1, $composer_0, 24584, 14);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(ratingBar$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$RatingBarKt$lambda_1$lambda_q5uqrw($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.u18()) {
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < 5)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.honger.ngel.components.ComposableSingletons$RatingBarKt.lambda-1.<anonymous>.<anonymous>' call
          var tmp18_modifier = size(margin_0(Companion_instance_0, VOID, !(index === 4) ? get_px(2) : get_px(0)), get_px(16));
          var tmp19_src = 'star_icon.svg';
          Image(tmp19_src, tmp18_modifier, null, null, null, 'Star Icon', false, null, $composer_0, 196678, 220);
        }
         while (inductionVariable < 5);
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$RatingBarKt() {
    ComposableSingletons$RatingBarKt_instance = this;
    var tmp = this;
    tmp.m3e_1 = ComposableLambda$invoke$ref_32(composableLambdaInstance(-793630774, false, ComposableSingletons$RatingBarKt$lambda_1$lambda_q5uqrw));
  }
  var ComposableSingletons$RatingBarKt_instance;
  function ComposableSingletons$RatingBarKt_getInstance() {
    if (ComposableSingletons$RatingBarKt_instance == null)
      new ComposableSingletons$RatingBarKt();
    return ComposableSingletons$RatingBarKt_instance;
  }
  function ratingBar$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      ratingBar($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function sectionTitle(modifier, section, alignment, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var alignment_0 = {_v: alignment};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(538238262);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s10(section) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 128;
    if (!(($default & 5) === 5) || (!(($dirty & 731) === 146) || !$composer_0.u18())) {
      $composer_0.b19();
      if (($changed & 1) === 0 || $composer_0.f19()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance_0;
        }
        if (!(($default & 4) === 0)) {
          alignment_0._v = Start_instance;
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.l13();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.c19();
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      $composer_1.z18(773894976);
      sourceInformation($composer_1, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = sectionTitle$lambda_3;
      }
      var composer = $composer_1;
      $composer_1.z18(-954370320);
      sourceInformation($composer_1, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp;
      if (false || it === Companion_getInstance().r13_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.k1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.a19();
      var wrapper = tmp1_group;
      var tmp0 = wrapper.b1g_1;
      $composer_1.a19();
      var scope = tmp0;
      $composer_0.z18(-1923573837);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.e1a();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.components.sectionTitle.<anonymous>' call
        var value_0 = mutableStateOf(get_px(50));
        this_0.k1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.a19();
      var titleMargin$delegate = tmp0_group;
      $composer_0.z18(-1923571885);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_1.e1a();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.components.sectionTitle.<anonymous>' call
        var value_1 = mutableStateOf(get_px(50));
        this_1.k1a(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.a19();
      var subtitleMargin$delegate = tmp1_group_0;
      observeViewportEntered(section.c3e_1, 700.0, sectionTitle$lambda_4(scope, alignment_0, subtitleMargin$delegate, titleMargin$delegate), $composer_0, 48);
      var tmp_5 = modifier_0._v;
      var tmp_6 = alignment_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.sectionTitle.<anonymous>' call
      var tmp_7 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_7, 870218605, true, sectionTitle$lambda_5(alignment_0, titleMargin$delegate, section, subtitleMargin$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      $composer_2.z18(1157296644);
      sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.e1a();
      var tmp_8;
      if (invalid || it_2 === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.components.sectionTitle.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_35(dispatchReceiver);
        $composer_2.k1a(value_2);
        tmp_8 = value_2;
      } else {
        tmp_8 = it_2;
      }
      var tmp_9 = tmp_8;
      var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_2.a19();
      Column(tmp_5, null, tmp_6, null, tmp0_0, $composer_0, 25096, 10);
    } else {
      $composer_0.l13();
    }
    var tmp2_safe_receiver = $composer_0.t1a();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.t1f(sectionTitle$lambda_6(modifier_0, section, alignment_0, $changed, $default));
    }
  }
  function sectionTitle$lambda($titleMargin$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('titleMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $titleMargin$delegate.w1();
  }
  function sectionTitle$lambda_0($titleMargin$delegate, _set____db54di) {
    getLocalDelegateReference('titleMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $titleMargin$delegate.mr(_set____db54di);
    return Unit_instance;
  }
  function sectionTitle$lambda_1($subtitleMargin$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('subtitleMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $subtitleMargin$delegate.w1();
  }
  function sectionTitle$lambda_2($subtitleMargin$delegate, _set____db54di) {
    getLocalDelegateReference('subtitleMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $subtitleMargin$delegate.mr(_set____db54di);
    return Unit_instance;
  }
  function sectionTitle$lambda_3() {
    return EmptyCoroutineContext_getInstance();
  }
  function sectionTitle$lambda$slambda($alignment, $subtitleMargin$delegate, $titleMargin$delegate, resultContinuation) {
    this.v3e_1 = $alignment;
    this.w3e_1 = $subtitleMargin$delegate;
    this.x3e_1 = $titleMargin$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(sectionTitle$lambda$slambda).j1h = function ($this$launch, $completion) {
    var tmp = this.k1h($this$launch, $completion);
    tmp.w8_1 = Unit_instance;
    tmp.x8_1 = null;
    return tmp.c9();
  };
  protoOf(sectionTitle$lambda$slambda).z9 = function (p1, $completion) {
    return this.j1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(sectionTitle$lambda$slambda).c9 = function () {
    var suspendResult = this.w8_1;
    $sm: do
      try {
        var tmp = this.u8_1;
        switch (tmp) {
          case 0:
            this.v8_1 = 3;
            sectionTitle$lambda_2(this.w3e_1, get_px(0));
            if (equals(this.v3e_1._v, Start_instance)) {
              this.u8_1 = 1;
              suspendResult = delay(new Long(25, 0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.u8_1 = 2;
              continue $sm;
            }

          case 1:
            this.u8_1 = 2;
            continue $sm;
          case 2:
            sectionTitle$lambda_0(this.x3e_1, get_px(0));
            return Unit_instance;
          case 3:
            throw this.x8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.v8_1 === 3) {
          throw e;
        } else {
          this.u8_1 = this.v8_1;
          this.x8_1 = e;
        }
      }
     while (true);
  };
  protoOf(sectionTitle$lambda$slambda).k1h = function ($this$launch, completion) {
    var i = new sectionTitle$lambda$slambda(this.v3e_1, this.w3e_1, this.x3e_1, completion);
    i.y3e_1 = $this$launch;
    return i;
  };
  function sectionTitle$lambda$slambda_0($alignment, $subtitleMargin$delegate, $titleMargin$delegate, resultContinuation) {
    var i = new sectionTitle$lambda$slambda($alignment, $subtitleMargin$delegate, $titleMargin$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.j1h($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sectionTitle$lambda_4($scope, $alignment, $subtitleMargin$delegate, $titleMargin$delegate) {
    return function () {
      launch($scope, VOID, VOID, sectionTitle$lambda$slambda_0($alignment, $subtitleMargin$delegate, $titleMargin$delegate, null));
      return Unit_instance;
    };
  }
  function sectionTitle$lambda$lambda($section) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($section.d3e_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function sectionTitle$lambda$lambda_0($section) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($section.e3e_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function sectionTitle$lambda_5($alignment, $titleMargin$delegate, $section, $subtitleMargin$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        var tmp_0 = fillMaxWidth(Companion_instance_0);
        var tmp20_subject = $alignment._v;
        var tmp21_$receiver = textAlign(tmp_0, equals(tmp20_subject, CenterHorizontally_instance) ? Companion_instance_7.n2j() : equals(tmp20_subject, End_instance_0) ? Companion_instance_7.p2j() : Companion_instance_7.o2j());
        var tmp22_left = sectionTitle$lambda($titleMargin$delegate);
        var tmp23_top = get_px(0);
        var tmp24_bottom = get_px(0);
        var tmp_1 = toAttrs(transition(color(fontWeight(fontSize(fontFamily(margin_0(tmp21_$receiver, tmp23_top, VOID, tmp24_bottom, tmp22_left), ['Roboto']), get_px(25)), Companion_instance_1.e2k()), Theme_Primary_getInstance().p3d_1), [CSSTransition_init_$Create$('margin', get_ms(300))]));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.sectionTitle.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 409301387, true, sectionTitle$lambda$lambda($section));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_3;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.sectionTitle.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_33(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.a19();
        P(tmp_1, tmp0, $composer_0, 48, 0);
        var tmp_5 = fillMaxWidth(Companion_instance_0);
        var tmp25_subject = $alignment._v;
        var tmp26_$receiver = textAlign(tmp_5, equals(tmp25_subject, CenterHorizontally_instance) ? Companion_instance_7.n2j() : equals(tmp25_subject, End_instance_0) ? Companion_instance_7.p2j() : Companion_instance_7.o2j());
        var tmp27_left = equals($alignment._v, Start_instance) ? sectionTitle$lambda_1($subtitleMargin$delegate) : get_px(0);
        var tmp28_right = equals($alignment._v, CenterHorizontally_instance) ? sectionTitle$lambda_1($subtitleMargin$delegate) : get_px(0);
        var tmp29_bottom = get_px(10);
        var tmp30_top = get_px(0);
        var tmp_6 = toAttrs(transition(color(fontWeight(fontSize(fontFamily(margin_0(tmp26_$receiver, tmp30_top, tmp28_right, tmp29_bottom, tmp27_left), ['Roboto']), get_px(40)), Companion_instance_1.f2k()), Theme_Secondary_getInstance().p3d_1), [CSSTransition_init_$Create$('margin', get_ms(300))]));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.sectionTitle.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_7, 1675868866, true, sectionTitle$lambda$lambda_0($section));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.z18(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.s10(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.e1a();
        var tmp_8;
        if (invalid_0 || it_0 === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.sectionTitle.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_34(dispatchReceiver_0);
          $composer_2.k1a(value_0);
          tmp_8 = value_0;
        } else {
          tmp_8 = it_0;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_2.a19();
        P(tmp_6, tmp0_0, $composer_0, 48, 0);
        var tmp_10 = borderRadius(backgroundColor(width(height(Companion_instance_0, get_px(2)), get_px(80)), Theme_Primary_getInstance().p3d_1), get_px(50));
        Box(tmp_10, null, null, null, $composer_0, 8, 14);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function sectionTitle$lambda_6($modifier, $section, $alignment, $$changed, $$default) {
    return function ($composer, $force) {
      sectionTitle($modifier._v, $section, $alignment._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function serviceCard(service, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(1081581483);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.s10(service) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.u18()) {
      var tmp = padding(margin_2(maxWidth(toModifier_1(get_ServiceCardStyle(), $composer_0, 6), get_px(300)), get_px(20)), get_px(20));
      var tmp_0 = get_px(2);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = border(tmp, tmp_0, 'solid', Theme_LighterGray_getInstance().p3d_1);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.serviceCard.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 703709474, true, serviceCard$lambda(service));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp_3;
      if (invalid || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.components.serviceCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_39(dispatchReceiver);
        $composer_1.k1a(value);
        tmp_3 = value;
      } else {
        tmp_3 = it;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.a19();
      Column(tmp_1, null, null, null, tmp0, $composer_0, 24584, 14);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(serviceCard$lambda_0(service, $changed));
    }
  }
  function serviceCard$lambda$lambda($service) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        var tmp36_modifier = size(Companion_instance_0, get_px(40));
        var tmp37_src = $service.b3f_1;
        var tmp38_description = $service.e3f_1;
        Image_0(tmp37_src, tmp38_description, tmp36_modifier, null, null, null, false, null, $composer_0, 512, 248);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function serviceCard$lambda$lambda_0($service) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($service.d3f_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function serviceCard$lambda$lambda_1($service) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($service.e3f_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function serviceCard$lambda($service) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        var tmp_0 = margin_1(padding(id(Companion_instance_0, 'iconBox'), get_px(10)), VOID, VOID, get_px(20));
        var tmp_1 = get_px(2);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp31_$receiver = border(tmp_0, tmp_1, 'solid', Theme_Primary_getInstance().p3d_1);
        var tmp32_topLeft = get_px(20);
        var tmp33_topRight = get_px(20);
        var tmp34_bottomLeft = get_px(20);
        var tmp35_bottomRight = get_px(0);
        var tmp_2 = borderRadius_0(tmp31_$receiver, tmp32_topLeft, tmp33_topRight, tmp35_bottomRight, tmp34_bottomLeft);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.serviceCard.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, 2037159592, true, serviceCard$lambda$lambda($service));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_4;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.serviceCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_36(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_4 = value;
        } else {
          tmp_4 = it;
        }
        var tmp_5 = tmp_4;
        var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_1.a19();
        Box(tmp_2, null, null, tmp0, $composer_0, 3080, 6);
        var tmp_6 = toAttrs(fontWeight(fontFamily(fontSize(margin_1(fillMaxWidth(Companion_instance_0), get_px(0), VOID, get_px(10)), get_px(18)), ['Roboto']), Companion_instance_1.f2k()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.serviceCard.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_7, -1947983424, true, serviceCard$lambda$lambda_0($service));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.z18(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.s10(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.e1a();
        var tmp_8;
        if (invalid_0 || it_0 === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.serviceCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_37(dispatchReceiver_0);
          $composer_2.k1a(value_0);
          tmp_8 = value_0;
        } else {
          tmp_8 = it_0;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_2.a19();
        P(tmp_6, tmp0_0, $composer_0, 48, 0);
        var tmp_10 = toAttrs(fontWeight(fontFamily(fontSize(margin_1(fillMaxWidth(Companion_instance_0), get_px(0), VOID, get_px(0)), get_px(14)), ['Roboto']), Companion_instance_1.e2k()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.serviceCard.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_11 = $composer_0;
        var dispatchReceiver_1 = composableLambda(tmp_11, -303747529, true, serviceCard$lambda$lambda_1($service));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        $composer_3.z18(1157296644);
        sourceInformation($composer_3, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.s10(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.e1a();
        var tmp_12;
        if (invalid_1 || it_1 === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.serviceCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_38(dispatchReceiver_1);
          $composer_3.k1a(value_1);
          tmp_12 = value_1;
        } else {
          tmp_12 = it_1;
        }
        var tmp_13 = tmp_12;
        var tmp0_1 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
        $composer_3.a19();
        P(tmp_10, tmp0_1, $composer_0, 48, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function serviceCard$lambda_0($service, $$changed) {
    return function ($composer, $force) {
      serviceCard($service, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function skillBar(name, index, progressBarHeight, percentage, animatePercentage, $composer, $changed, $default) {
    var progressBarHeight_0 = {_v: progressBarHeight};
    var percentage_0 = {_v: percentage};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-1869387119);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.s10(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x19(index) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 128;
    if (!(($default & 8) === 0))
      $dirty = $dirty | 1024;
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.x19(animatePercentage) ? 16384 : 8192);
    if (!(($default & 12) === 12) || (!(($dirty & 46811) === 9362) || !$composer_0.u18())) {
      $composer_0.b19();
      if (($changed & 1) === 0 || $composer_0.f19()) {
        if (!(($default & 4) === 0)) {
          progressBarHeight_0._v = get_px(5);
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          percentage_0._v = get_percent(50);
          $dirty = $dirty & -7169;
        }
      } else {
        $composer_0.l13();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.c19();
      var tmp = padding_1(maxWidth(margin_1(fillMaxWidth(Companion_instance_0), VOID, VOID, get_px(10)), get_percent(500)), get_px(5));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.skillBar.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 1844909754, true, skillBar$lambda(name, animatePercentage, progressBarHeight_0, percentage_0, index));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp_1;
      if (invalid || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.components.skillBar.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_44(dispatchReceiver);
        $composer_1.k1a(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.a19();
      Column(tmp, null, null, null, tmp0, $composer_0, 24584, 14);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(skillBar$lambda_0(name, index, progressBarHeight_0, percentage_0, animatePercentage, $changed, $default));
    }
  }
  function skillBar$lambda$lambda$lambda($name) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($name, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function skillBar$lambda$lambda$lambda_0($animatePercentage) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text('' + $animatePercentage + '%', $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_41($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function skillBar$lambda$lambda($name, $animatePercentage) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        var tmp_0 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(Companion_instance_0, get_px(0)), ['Roboto']), get_px(18)), Companion_instance_1.e2k()), Theme_Primary_getInstance().p3d_1));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.skillBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -240498439, true, skillBar$lambda$lambda$lambda($name));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_2;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.skillBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_40(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.a19();
        P(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_4 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(Companion_instance_0, get_px(0)), ['Roboto']), get_px(18)), Companion_instance_1.e2k()), Theme_Primary_getInstance().p3d_1));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.skillBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_5, 1593477730, true, skillBar$lambda$lambda$lambda_0($animatePercentage));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.z18(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.s10(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.e1a();
        var tmp_6;
        if (invalid_0 || it_0 === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.skillBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_41(dispatchReceiver_0);
          $composer_2.k1a(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_2.a19();
        P(tmp_4, tmp0_0, $composer_0, 48, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_42($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function skillBar$lambda$lambda_0($progressBarHeight, $percentage, $index) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        var tmp_0 = backgroundColor(height(fillMaxWidth(Companion_instance_0), $progressBarHeight._v), Theme_LightGray_getInstance().p3d_1);
        Box(tmp_0, null, null, null, $composer_0, 8, 14);
        var tmp_1 = transition(backgroundColor(height(fillMaxWidth(Companion_instance_0, $percentage._v), $progressBarHeight._v), Theme_Primary_getInstance().p3d_1), [CSSTransition_init_$Create$('width', get_ms(1000), VOID, times_0(get_ms(100), $index))]);
        Box(tmp_1, null, null, null, $composer_0, 8, 14);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_43($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function skillBar$lambda($name, $animatePercentage, $progressBarHeight, $percentage, $index) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        var tmp_0 = margin_1(fillMaxWidth(Companion_instance_0), VOID, VOID, get_px(5));
        var tmp_1 = SpaceBetween_instance;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.skillBar.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 70707159, true, skillBar$lambda$lambda($name, $animatePercentage));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_3;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.skillBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_42(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.a19();
        Row(tmp_0, tmp_1, null, null, tmp0, $composer_0, 24648, 12);
        var tmp_5 = fillMaxWidth(Companion_instance_0);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.skillBar.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_6 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_6, 986250612, true, skillBar$lambda$lambda_0($progressBarHeight, $percentage, $index));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.z18(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.s10(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.e1a();
        var tmp_7;
        if (invalid_0 || it_0 === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.skillBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_43(dispatchReceiver_0);
          $composer_2.k1a(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = it_0;
        }
        var tmp_8 = tmp_7;
        var tmp0_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_2.a19();
        Box(tmp_5, null, null, tmp0_0, $composer_0, 3080, 6);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_44($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function skillBar$lambda_0($name, $index, $progressBarHeight, $percentage, $animatePercentage, $$changed, $$default) {
    return function ($composer, $force) {
      skillBar($name, $index, $progressBarHeight._v, $percentage._v, $animatePercentage, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function socialBar($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-2026716090);
    if (!($changed === 0) || !$composer_0.u18()) {
      var tmp41_modifier = backgroundColor(borderRadius(padding_1(margin_0(Companion_instance_0, VOID, get_px(25)), get_px(15)), get_px(20)), Colors_instance.p2t());
      Column(tmp41_modifier, Center_instance_0, CenterHorizontally_instance, null, ComposableSingletons$SocailBarKt_getInstance().f3f_1, $composer_0, 25160, 8);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(socialBar$lambda($changed));
    }
  }
  function socialLink($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-414921687);
    if (!($changed === 0) || !$composer_0.u18()) {
      var tmp = OpenLinkStrategy_IN_NEW_TAB_getInstance();
      Link_0('https://www.google.com', null, null, null, tmp, null, false, null, ComposableSingletons$SocailBarKt_getInstance().g3f_1, $composer_0, 100687878, 238);
      var tmp_0 = OpenLinkStrategy_IN_NEW_TAB_getInstance();
      Link_0('https://www.google.com', null, null, null, tmp_0, null, false, null, ComposableSingletons$SocailBarKt_getInstance().h3f_1, $composer_0, 100687878, 238);
      var tmp_1 = OpenLinkStrategy_IN_NEW_TAB_getInstance();
      Link_0('https://www.google.com', null, null, null, tmp_1, null, false, null, ComposableSingletons$SocailBarKt_getInstance().i3f_1, $composer_0, 100687878, 238);
      var tmp_2 = OpenLinkStrategy_IN_NEW_TAB_getInstance();
      Link_0('https://www.google.com', null, null, null, tmp_2, null, false, null, ComposableSingletons$SocailBarKt_getInstance().j3f_1, $composer_0, 100687878, 238);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(socialLink$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_45($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$SocailBarKt$lambda_1$lambda_fi68ng($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.u18()) {
      socialLink($composer_0, 0);
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_46($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$SocailBarKt$lambda_2$lambda_qpbc9h($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.u18()) {
      FaFacebook(margin_1(toModifier_0(get_SocialLinkStyle(), [], $composer_0, 72), VOID, VOID, get_px(40)), IconSize_LG_getInstance(), $composer_0, 56, 0);
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_47($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$SocailBarKt$lambda_3$lambda_24b4sq($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.u18()) {
      FaTwitter(margin_1(toModifier_0(get_SocialLinkStyle(), [], $composer_0, 72), VOID, VOID, get_px(40)), IconSize_LG_getInstance(), $composer_0, 56, 0);
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_48($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$SocailBarKt$lambda_4$lambda_uxxlux($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.u18()) {
      FaInstagram(margin_1(toModifier_0(get_SocialLinkStyle(), [], $composer_0, 72), VOID, VOID, get_px(40)), IconSize_LG_getInstance(), $composer_0, 56, 0);
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_49($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$SocailBarKt$lambda_5$lambda_b9jz20($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.u18()) {
      FaLinkedin(margin_1(toModifier_0(get_SocialLinkStyle(), [], $composer_0, 72), VOID, VOID, get_px(40)), IconSize_LG_getInstance(), $composer_0, 56, 0);
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$SocailBarKt() {
    ComposableSingletons$SocailBarKt_instance = this;
    var tmp = this;
    tmp.f3f_1 = ComposableLambda$invoke$ref_45(composableLambdaInstance(1927210799, false, ComposableSingletons$SocailBarKt$lambda_1$lambda_fi68ng));
    var tmp_0 = this;
    tmp_0.g3f_1 = ComposableLambda$invoke$ref_46(composableLambdaInstance(542645368, false, ComposableSingletons$SocailBarKt$lambda_2$lambda_qpbc9h));
    var tmp_1 = this;
    tmp_1.h3f_1 = ComposableLambda$invoke$ref_47(composableLambdaInstance(-1366681873, false, ComposableSingletons$SocailBarKt$lambda_3$lambda_24b4sq));
    var tmp_2 = this;
    tmp_2.i3f_1 = ComposableLambda$invoke$ref_48(composableLambdaInstance(-1850357200, false, ComposableSingletons$SocailBarKt$lambda_4$lambda_uxxlux));
    var tmp_3 = this;
    tmp_3.j3f_1 = ComposableLambda$invoke$ref_49(composableLambdaInstance(1960934769, false, ComposableSingletons$SocailBarKt$lambda_5$lambda_b9jz20));
  }
  var ComposableSingletons$SocailBarKt_instance;
  function ComposableSingletons$SocailBarKt_getInstance() {
    if (ComposableSingletons$SocailBarKt_instance == null)
      new ComposableSingletons$SocailBarKt();
    return ComposableSingletons$SocailBarKt_instance;
  }
  function socialBar$lambda($$changed) {
    return function ($composer, $force) {
      socialBar($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function socialLink$lambda($$changed) {
    return function ($composer, $force) {
      socialLink($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function testimonialCard(modifier, testimonial, breakpoint, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-1385257975);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s10(testimonial) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.s10(breakpoint) ? 256 : 128);
    if (!(($default & 1) === 1) || (!(($dirty & 731) === 146) || !$composer_0.u18())) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance_0;
      }
      var tmp = maxWidth(modifier_0._v, get_px(500));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -1739118452, true, testimonialCard$lambda(breakpoint, testimonial));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp_1;
      if (invalid || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_56(dispatchReceiver);
        $composer_1.k1a(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.a19();
      Row(tmp, null, null, null, tmp0, $composer_0, 24584, 14);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(testimonialCard$lambda_0(modifier_0, testimonial, breakpoint, $changed, $default));
    }
  }
  function testimonialCard$lambda$lambda$lambda$lambda$lambda($testimonial) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($testimonial.n3f_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_50($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function testimonialCard$lambda$lambda$lambda$lambda$lambda_0($testimonial) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($testimonial.o3f_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_51($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function testimonialCard$lambda$lambda$lambda$lambda($testimonial) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        var tmp_0 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(Companion_instance_0), get_px(0)), ['Roboto']), get_px(18)), Companion_instance_1.f2k()), Theme_Secondary_getInstance().p3d_1));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -557673061, true, testimonialCard$lambda$lambda$lambda$lambda$lambda($testimonial));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_2;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_50(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.a19();
        P(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_4 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(Companion_instance_0), get_px(0)), ['Roboto']), get_px(12)), Companion_instance_1.e2k()), Theme_Secondary_getInstance().p3d_1));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_5, -661403630, true, testimonialCard$lambda$lambda$lambda$lambda$lambda_0($testimonial));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.z18(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.s10(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.e1a();
        var tmp_6;
        if (invalid_0 || it_0 === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_51(dispatchReceiver_0);
          $composer_2.k1a(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_2.a19();
        P(tmp_4, tmp0_0, $composer_0, 48, 0);
        ratingBar(margin_1(Companion_instance_0, get_px(5)), $composer_0, 8, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_52($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function testimonialCard$lambda$lambda$lambda($testimonial) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 1795885309, true, testimonialCard$lambda$lambda$lambda$lambda($testimonial));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_1;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_52(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.a19();
        Column(null, null, null, null, tmp0, $composer_0, 24576, 15);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_53($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function testimonialCard$lambda$lambda$lambda_0($testimonial) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($testimonial.p3f_1, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_54($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function testimonialCard$lambda$lambda($testimonial) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        var tmp_0 = margin_1(fillMaxWidth(Companion_instance_0), VOID, VOID, get_px(10));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -596721274, true, testimonialCard$lambda$lambda$lambda($testimonial));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_2;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_53(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.a19();
        Row(tmp_0, null, null, null, tmp0, $composer_0, 24584, 14);
        var tmp_4 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(Companion_instance_0), get_px(0)), ['Roboto']), get_px(12)), Companion_instance_1.e2k()), Theme_Secondary_getInstance().p3d_1));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_5, 1879226849, true, testimonialCard$lambda$lambda$lambda_0($testimonial));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.z18(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.s10(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.e1a();
        var tmp_6;
        if (invalid_0 || it_0 === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_54(dispatchReceiver_0);
          $composer_2.k1a(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_2.a19();
        P(tmp_4, tmp0_0, $composer_0, 48, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_55($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function testimonialCard$lambda($breakpoint, $testimonial) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        var tmp42_$receiver = maxWidth(margin_0(Companion_instance_0, VOID, get_px(20)), $breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_px(160) : get_px(80));
        var tmp43_topLeft = get_px(60);
        var tmp44_topRight = get_px(60);
        var tmp45_bottomLeft = get_px(60);
        var tmp46_bottomRight = get_px(0);
        var tmp47_modifier = borderRadius_0(tmp42_$receiver, tmp43_topLeft, tmp44_topRight, tmp46_bottomRight, tmp45_bottomLeft);
        var tmp48_src = $testimonial.m3f_1;
        Image(tmp48_src, tmp47_modifier, null, null, null, 'Avatar Image', false, null, $composer_0, 196672, 220);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 763147715, true, testimonialCard$lambda$lambda($testimonial));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_1;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_55(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.a19();
        Column(null, null, null, null, tmp0, $composer_0, 24576, 15);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_56($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function testimonialCard$lambda_0($modifier, $testimonial, $breakpoint, $$changed, $$default) {
    return function ($composer, $force) {
      testimonialCard($modifier._v, $testimonial, $breakpoint, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var Achievement_Completed_instance;
  var Achievement_Active_instance;
  var Achievement_Satisfied_instance;
  var Achievement_Team_instance;
  function values() {
    return [Achievement_Completed_getInstance(), Achievement_Active_getInstance(), Achievement_Satisfied_getInstance(), Achievement_Team_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Achievement_entriesInitialized;
  function Achievement_initEntries() {
    if (Achievement_entriesInitialized)
      return Unit_instance;
    Achievement_entriesInitialized = true;
    Achievement_Completed_instance = new Achievement('Completed', 0, 'checkmark_icon.svg', 120, 'Completed Projects');
    Achievement_Active_instance = new Achievement('Active', 1, 'shield_icon.svg', 12, 'Active Projects');
    Achievement_Satisfied_instance = new Achievement('Satisfied', 2, 'happy_icon.svg', 42, 'Satisfied Clients');
    Achievement_Team_instance = new Achievement('Team', 3, 'user_icon.svg', 10, 'Team Members');
  }
  var $ENTRIES;
  function Achievement(name, ordinal, icon, number, description) {
    Enum.call(this, name, ordinal);
    this.j3d_1 = icon;
    this.k3d_1 = number;
    this.l3d_1 = description;
  }
  function Achievement_Completed_getInstance() {
    Achievement_initEntries();
    return Achievement_Completed_instance;
  }
  function Achievement_Active_getInstance() {
    Achievement_initEntries();
    return Achievement_Active_instance;
  }
  function Achievement_Satisfied_getInstance() {
    Achievement_initEntries();
    return Achievement_Satisfied_instance;
  }
  function Achievement_Team_getInstance() {
    Achievement_initEntries();
    return Achievement_Team_instance;
  }
  var Experience_First_instance;
  var Experience_Second_instance;
  var Experience_Third_instance;
  function values_0() {
    return [Experience_First_getInstance(), Experience_Second_getInstance(), Experience_Third_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Experience_entriesInitialized;
  function Experience_initEntries() {
    if (Experience_entriesInitialized)
      return Unit_instance;
    Experience_entriesInitialized = true;
    Experience_First_instance = new Experience('First', 0, '01', 'Kotlin Multi-Platform Developer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Google', 'February 2022', 'NOW');
    Experience_Second_instance = new Experience('Second', 1, '02', 'Mobile Developer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Facebook', 'January 2021', 'October 2021');
    Experience_Third_instance = new Experience('Third', 2, '03', 'Freelancer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Netflix', 'March 2020', 'August 2020');
  }
  var $ENTRIES_0;
  function Experience(name, ordinal, number, jobPosition, description, company, from, to) {
    Enum.call(this, name, ordinal);
    this.t3d_1 = number;
    this.u3d_1 = jobPosition;
    this.v3d_1 = description;
    this.w3d_1 = company;
    this.x3d_1 = from;
    this.y3d_1 = to;
  }
  function Experience_First_getInstance() {
    Experience_initEntries();
    return Experience_First_instance;
  }
  function Experience_Second_getInstance() {
    Experience_initEntries();
    return Experience_Second_instance;
  }
  function Experience_Third_getInstance() {
    Experience_initEntries();
    return Experience_Third_instance;
  }
  var Portfolio_One_instance;
  var Portfolio_Two_instance;
  var Portfolio_Three_instance;
  var Portfolio_Four_instance;
  var Portfolio_Five_instance;
  function values_1() {
    return [Portfolio_One_getInstance(), Portfolio_Two_getInstance(), Portfolio_Three_getInstance(), Portfolio_Four_getInstance(), Portfolio_Five_getInstance()];
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var Portfolio_entriesInitialized;
  function Portfolio_initEntries() {
    if (Portfolio_entriesInitialized)
      return Unit_instance;
    Portfolio_entriesInitialized = true;
    Portfolio_One_instance = new Portfolio('One', 0, 'portfolio1.png', 'Kudoe', 'Web Design');
    Portfolio_Two_instance = new Portfolio('Two', 1, 'portfolio2.png', 'Landing Page', 'Frontend');
    Portfolio_Three_instance = new Portfolio('Three', 2, 'portfolio3.png', 'NFT Application', 'Frontend/Backend');
    Portfolio_Four_instance = new Portfolio('Four', 3, 'portfolio4.jpg', 'Game Statistics', 'Web/Mobile App');
    Portfolio_Five_instance = new Portfolio('Five', 4, 'portfolio5.png', 'Platform for Online Courses', 'Web/Mobile');
  }
  var $ENTRIES_1;
  function Portfolio(name, ordinal, image, title, description) {
    Enum.call(this, name, ordinal);
    this.j3e_1 = image;
    this.k3e_1 = title;
    this.l3e_1 = description;
  }
  function Portfolio_One_getInstance() {
    Portfolio_initEntries();
    return Portfolio_One_instance;
  }
  function Portfolio_Two_getInstance() {
    Portfolio_initEntries();
    return Portfolio_Two_instance;
  }
  function Portfolio_Three_getInstance() {
    Portfolio_initEntries();
    return Portfolio_Three_instance;
  }
  function Portfolio_Four_getInstance() {
    Portfolio_initEntries();
    return Portfolio_Four_instance;
  }
  function Portfolio_Five_getInstance() {
    Portfolio_initEntries();
    return Portfolio_Five_instance;
  }
  var Section_Home_instance;
  var Section_About_instance;
  var Section_Service_instance;
  var Section_Portfolio_instance;
  var Section_Experience_instance;
  var Section_Contact_instance;
  var Section_Testimonial_instance;
  var Section_Achievements_instance;
  function values_2() {
    return [Section_Home_getInstance(), Section_About_getInstance(), Section_Service_getInstance(), Section_Portfolio_getInstance(), Section_Experience_getInstance(), Section_Contact_getInstance(), Section_Testimonial_getInstance(), Section_Achievements_getInstance()];
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var Section_entriesInitialized;
  function Section_initEntries() {
    if (Section_entriesInitialized)
      return Unit_instance;
    Section_entriesInitialized = true;
    Section_Home_instance = new Section('Home', 0, 'home', 'Home', '', '#home');
    Section_About_instance = new Section('About', 1, 'about', 'About', 'Why Hire Me?', '#about');
    Section_Service_instance = new Section('Service', 2, 'service', 'Service', "I'm Good at", '#service');
    Section_Portfolio_instance = new Section('Portfolio', 3, 'portfolio', 'Portfolio', 'My Work', '#portfolio');
    Section_Experience_instance = new Section('Experience', 4, 'experience', 'Experience', 'Working Experience', '#experience');
    Section_Contact_instance = new Section('Contact', 5, 'contact', 'Contact', 'Get in Touch', '#contact');
    Section_Testimonial_instance = new Section('Testimonial', 6, 'testimonial', 'Testimonial', 'Happy Customers', '#testimonial');
    Section_Achievements_instance = new Section('Achievements', 7, 'achievements', 'Achievements', 'Personal Achievements', '#achievements');
  }
  var $ENTRIES_2;
  function Section(name, ordinal, id, title, subtitle, path) {
    Enum.call(this, name, ordinal);
    this.c3e_1 = id;
    this.d3e_1 = title;
    this.e3e_1 = subtitle;
    this.f3e_1 = path;
  }
  function Section_Home_getInstance() {
    Section_initEntries();
    return Section_Home_instance;
  }
  function Section_About_getInstance() {
    Section_initEntries();
    return Section_About_instance;
  }
  function Section_Service_getInstance() {
    Section_initEntries();
    return Section_Service_instance;
  }
  function Section_Portfolio_getInstance() {
    Section_initEntries();
    return Section_Portfolio_instance;
  }
  function Section_Experience_getInstance() {
    Section_initEntries();
    return Section_Experience_instance;
  }
  function Section_Contact_getInstance() {
    Section_initEntries();
    return Section_Contact_instance;
  }
  function Section_Testimonial_getInstance() {
    Section_initEntries();
    return Section_Testimonial_instance;
  }
  function Section_Achievements_getInstance() {
    Section_initEntries();
    return Section_Achievements_instance;
  }
  var Service_Android_instance;
  var Service_IOS_instance;
  var Service_Flutter_instance;
  var Service_React_instance;
  var Service_WEB_instance;
  var Service_Design_instance;
  var Service_Business_instance;
  var Service_SEO_instance;
  function values_3() {
    return [Service_Android_getInstance(), Service_IOS_getInstance(), Service_Flutter_getInstance(), Service_React_getInstance(), Service_WEB_getInstance(), Service_Design_getInstance(), Service_Business_getInstance(), Service_SEO_getInstance()];
  }
  function get_entries_3() {
    if ($ENTRIES_3 == null)
      $ENTRIES_3 = enumEntries(values_3());
    return $ENTRIES_3;
  }
  var Service_entriesInitialized;
  function Service_initEntries() {
    if (Service_entriesInitialized)
      return Unit_instance;
    Service_entriesInitialized = true;
    Service_Android_instance = new Service('Android', 0, 'android_icon.svg', 'Android Icon', 'Android Development', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    Service_IOS_instance = new Service('IOS', 1, 'apple_icon.svg', 'IOS Icon', 'IOS Development', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    Service_Flutter_instance = new Service('Flutter', 2, 'android_icon.svg', 'Flutter Icon', 'Flutter Development', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    Service_React_instance = new Service('React', 3, 'apple_icon.svg', 'React Native', 'React Native', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    Service_WEB_instance = new Service('WEB', 4, 'web_icon.svg', 'WEB Icon', 'WEB Development', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    Service_Design_instance = new Service('Design', 5, 'design_icon.svg', 'Design Icon', 'UX/UI Design', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    Service_Business_instance = new Service('Business', 6, 'business_icon.svg', 'Business Icon', 'Business Analysis', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    Service_SEO_instance = new Service('SEO', 7, 'seo_icon.svg', 'SEO Icon', 'SEO Marketing', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  }
  var $ENTRIES_3;
  function Service(name, ordinal, icon, imageDes, title, description) {
    Enum.call(this, name, ordinal);
    this.b3f_1 = icon;
    this.c3f_1 = imageDes;
    this.d3f_1 = title;
    this.e3f_1 = description;
  }
  function Service_Android_getInstance() {
    Service_initEntries();
    return Service_Android_instance;
  }
  function Service_IOS_getInstance() {
    Service_initEntries();
    return Service_IOS_instance;
  }
  function Service_Flutter_getInstance() {
    Service_initEntries();
    return Service_Flutter_instance;
  }
  function Service_React_getInstance() {
    Service_initEntries();
    return Service_React_instance;
  }
  function Service_WEB_getInstance() {
    Service_initEntries();
    return Service_WEB_instance;
  }
  function Service_Design_getInstance() {
    Service_initEntries();
    return Service_Design_instance;
  }
  function Service_Business_getInstance() {
    Service_initEntries();
    return Service_Business_instance;
  }
  function Service_SEO_getInstance() {
    Service_initEntries();
    return Service_SEO_instance;
  }
  var Skill_Creative_instance;
  var Skill_Accountable_instance;
  var Skill_HardWorking_instance;
  var Skill_Value_instance;
  var Skill_Delivery_instance;
  function values_4() {
    return [Skill_Creative_getInstance(), Skill_Accountable_getInstance(), Skill_HardWorking_getInstance(), Skill_Value_getInstance(), Skill_Delivery_getInstance()];
  }
  function get_entries_4() {
    if ($ENTRIES_4 == null)
      $ENTRIES_4 = enumEntries(values_4());
    return $ENTRIES_4;
  }
  var Skill_entriesInitialized;
  function Skill_initEntries() {
    if (Skill_entriesInitialized)
      return Unit_instance;
    Skill_entriesInitialized = true;
    Skill_Creative_instance = new Skill('Creative', 0, 'Creative', get_percent(90));
    Skill_Accountable_instance = new Skill('Accountable', 1, 'Accountable', get_percent(90));
    Skill_HardWorking_instance = new Skill('HardWorking', 2, 'HardWorking', get_percent(85));
    Skill_Value_instance = new Skill('Value', 3, 'Value for Money', get_percent(85));
    Skill_Delivery_instance = new Skill('Delivery', 4, 'On-Time Delivery', get_percent(90));
  }
  var $ENTRIES_4;
  function Skill(name, ordinal, title, percentage) {
    Enum.call(this, name, ordinal);
    this.s3f_1 = title;
    this.t3f_1 = percentage;
  }
  function Skill_Creative_getInstance() {
    Skill_initEntries();
    return Skill_Creative_instance;
  }
  function Skill_Accountable_getInstance() {
    Skill_initEntries();
    return Skill_Accountable_instance;
  }
  function Skill_HardWorking_getInstance() {
    Skill_initEntries();
    return Skill_HardWorking_instance;
  }
  function Skill_Value_getInstance() {
    Skill_initEntries();
    return Skill_Value_instance;
  }
  function Skill_Delivery_getInstance() {
    Skill_initEntries();
    return Skill_Delivery_instance;
  }
  var Testimonial_First_instance;
  var Testimonial_Second_instance;
  var Testimonial_Third_instance;
  var Testimonial_Fourth_instance;
  var Testimonial_Fifth_instance;
  var Testimonial_Sixth_instance;
  var Testimonial_entriesInitialized;
  function Testimonial_initEntries() {
    if (Testimonial_entriesInitialized)
      return Unit_instance;
    Testimonial_entriesInitialized = true;
    Testimonial_First_instance = new Testimonial('First', 0, 'avatar1.png', 'Milica Ilic', 'Web Designer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    Testimonial_Second_instance = new Testimonial('Second', 1, 'avatar2.png', 'Stefan Jovanovic', 'Android Developer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    Testimonial_Third_instance = new Testimonial('Third', 2, 'avatar3.png', 'Ana Milic', 'Business Analyst', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    Testimonial_Fourth_instance = new Testimonial('Fourth', 3, 'avatar4.png', 'Darko Pesic', 'Top Manager', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    Testimonial_Fifth_instance = new Testimonial('Fifth', 4, 'avatar5.png', 'Milena Nesovic', 'HR Recruiter', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    Testimonial_Sixth_instance = new Testimonial('Sixth', 5, 'avatar6.png', 'Aca Rodic', 'Cyber Security Analyst', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  }
  function Testimonial(name, ordinal, image, fullName, profession, review) {
    Enum.call(this, name, ordinal);
    this.m3f_1 = image;
    this.n3f_1 = fullName;
    this.o3f_1 = profession;
    this.p3f_1 = review;
  }
  function Testimonial_First_getInstance() {
    Testimonial_initEntries();
    return Testimonial_First_instance;
  }
  function Testimonial_Second_getInstance() {
    Testimonial_initEntries();
    return Testimonial_Second_instance;
  }
  function Testimonial_Third_getInstance() {
    Testimonial_initEntries();
    return Testimonial_Third_instance;
  }
  function Testimonial_Fourth_getInstance() {
    Testimonial_initEntries();
    return Testimonial_Fourth_instance;
  }
  function Testimonial_Fifth_getInstance() {
    Testimonial_initEntries();
    return Testimonial_Fifth_instance;
  }
  function Testimonial_Sixth_getInstance() {
    Testimonial_initEntries();
    return Testimonial_Sixth_instance;
  }
  var Theme_Primary_instance;
  var Theme_Secondary_instance;
  var Theme_Gray_instance;
  var Theme_LightGray_instance;
  var Theme_LighterGray_instance;
  var Theme_entriesInitialized;
  function Theme_initEntries() {
    if (Theme_entriesInitialized)
      return Unit_instance;
    Theme_entriesInitialized = true;
    Theme_Primary_instance = new Theme('Primary', 0, '#00A78E', rgb(0, 167, 142));
    Theme_Secondary_instance = new Theme('Secondary', 1, '#121D34', rgb(18, 29, 52));
    Theme_Gray_instance = new Theme('Gray', 2, '#CFCFCF', rgb(207, 207, 207));
    Theme_LightGray_instance = new Theme('LightGray', 3, '#EDEDED', rgb(237, 237, 237));
    Theme_LighterGray_instance = new Theme('LighterGray', 4, '#F9F9F9', rgb(249, 249, 249));
  }
  function Theme(name, ordinal, hexValue, rgb) {
    Enum.call(this, name, ordinal);
    this.o3d_1 = hexValue;
    this.p3d_1 = rgb;
  }
  function Theme_Primary_getInstance() {
    Theme_initEntries();
    return Theme_Primary_instance;
  }
  function Theme_Secondary_getInstance() {
    Theme_initEntries();
    return Theme_Secondary_instance;
  }
  function Theme_Gray_getInstance() {
    Theme_initEntries();
    return Theme_Gray_instance;
  }
  function Theme_LightGray_getInstance() {
    Theme_initEntries();
    return Theme_LightGray_instance;
  }
  function Theme_LighterGray_getInstance() {
    Theme_initEntries();
    return Theme_LighterGray_instance;
  }
  function homePage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(279025250);
    if (!($changed === 0) || !$composer_0.u18()) {
      var tmp = fillMaxSize(Companion_instance_0);
      var tmp_0 = Top_instance;
      var tmp_1 = CenterHorizontally_instance;
      Column(tmp, tmp_0, tmp_1, null, ComposableSingletons$IndexKt_getInstance().u3f_1, $composer_0, 25160, 8);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(homePage$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_57($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_1$lambda_5yb608($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.u18()) {
      mainSection($composer_0, 0);
      aboutSection($composer_0, 0);
      serviceSection($composer_0, 0);
      portfolioSection($composer_0, 0);
      achievementsSection($composer_0, 0);
      testimonialSection($composer_0, 0);
      experienceSection($composer_0, 0);
      contactSection($composer_0, 0);
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.u3f_1 = ComposableLambda$invoke$ref_57(composableLambdaInstance(298293387, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608));
  }
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function homePage$lambda($$changed) {
    return function ($composer, $force) {
      homePage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function aboutSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(925734960);
    if (!($changed === 0) || !$composer_0.u18()) {
      var tmp = padding_1(maxWidth(id(Companion_instance_0, Section_About_getInstance().c3e_1), get_px(1920)), get_px(150));
      var tmp_0 = Center_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$AboutSectionKt_getInstance().v3f_1, $composer_0, 3144, 4);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(aboutSection$lambda($changed));
    }
  }
  function aboutContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-580419132);
    if (!($changed === 0) || !$composer_0.u18()) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp52_modifier = maxWidth(fillMaxWidth(Companion_instance_0, breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(90) : get_percent(100)), get_px(1200));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.aboutContent.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -16381907, true, aboutContent$lambda(breakpoint));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp_0;
      if (invalid || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.aboutContent.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_62(dispatchReceiver);
        $composer_1.k1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.a19();
      Column(tmp52_modifier, null, CenterHorizontally_instance, null, tmp0, $composer_0, 25096, 10);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(aboutContent$lambda_0($changed));
    }
  }
  function aboutImage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-1466923802);
    if (!($changed === 0) || !$composer_0.u18()) {
      var tmp = fillMaxWidth(Companion_instance_0);
      var tmp_0 = Center_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$AboutSectionKt_getInstance().w3f_1, $composer_0, 3144, 4);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(aboutImage$lambda($changed));
    }
  }
  function aboutMe($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(516335809);
    if (!($changed === 0) || !$composer_0.u18()) {
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      $composer_1.z18(773894976);
      sourceInformation($composer_1, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = aboutMe$lambda_1;
      }
      var composer = $composer_1;
      $composer_1.z18(-954370320);
      sourceInformation($composer_1, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp;
      if (false || it === Companion_getInstance().r13_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.k1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.a19();
      var wrapper = tmp1_group;
      var tmp0 = wrapper.b1g_1;
      $composer_1.a19();
      var scope = tmp0;
      $composer_0.z18(450863617);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.e1a();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.aboutMe.<anonymous>' call
        var value_0 = mutableStateOf(false);
        this_0.k1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.a19();
      var viewportEntered$delegate = tmp0_group;
      $composer_0.z18(450865645);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_1.e1a();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.aboutMe.<anonymous>' call
        var value_1 = mutableStateListOf([0, 0, 0, 0, 0]);
        this_1.k1a(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.a19();
      var animatePercentage = tmp1_group_0;
      var tmp_5 = Section_About_getInstance().c3e_1;
      observeViewportEntered(tmp_5, 300.0, aboutMe$lambda_2(scope, viewportEntered$delegate, animatePercentage), $composer_0, 54);
      var tmp_6 = fillMaxWidth(Companion_instance_0);
      var tmp_7 = Center_instance_0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.aboutMe.<anonymous>' call
      var tmp_8 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_8, -1157233480, true, aboutMe$lambda_3(animatePercentage, viewportEntered$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      $composer_2.z18(1157296644);
      sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.e1a();
      var tmp_9;
      if (invalid || it_2 === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.aboutMe.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_63(dispatchReceiver);
        $composer_2.k1a(value_2);
        tmp_9 = value_2;
      } else {
        tmp_9 = it_2;
      }
      var tmp_10 = tmp_9;
      var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_2.a19();
      Column(tmp_6, tmp_7, null, null, tmp0_0, $composer_0, 24648, 12);
    } else {
      $composer_0.l13();
    }
    var tmp2_safe_receiver = $composer_0.t1a();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.t1f(aboutMe$lambda_4($changed));
    }
  }
  function ComposableLambda$invoke$ref_58($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_1$lambda_zx8t0($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.u18()) {
      aboutContent($composer_0, 0);
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_59($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_2$lambda_rtp897($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.u18()) {
      var tmp53_modifier = fillMaxWidth(toModifier(get_AboutImageStyle(), $composer_0, 6), get_percent(80));
      var tmp54_src = 'about_image.png';
      Image_0(tmp54_src, 'About Image', tmp53_modifier, null, null, null, false, null, $composer_0, 566, 248);
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_60($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_3$lambda_edscnq($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableSingletons$AboutSectionKt() {
    ComposableSingletons$AboutSectionKt_instance = this;
    var tmp = this;
    tmp.v3f_1 = ComposableLambda$invoke$ref_58(composableLambdaInstance(-697821590, false, ComposableSingletons$AboutSectionKt$lambda_1$lambda_zx8t0));
    var tmp_0 = this;
    tmp_0.w3f_1 = ComposableLambda$invoke$ref_59(composableLambdaInstance(2062109088, false, ComposableSingletons$AboutSectionKt$lambda_2$lambda_rtp897));
    var tmp_1 = this;
    tmp_1.x3f_1 = ComposableLambda$invoke$ref_60(composableLambdaInstance(-2046959018, false, ComposableSingletons$AboutSectionKt$lambda_3$lambda_edscnq));
  }
  var ComposableSingletons$AboutSectionKt_instance;
  function ComposableSingletons$AboutSectionKt_getInstance() {
    if (ComposableSingletons$AboutSectionKt_instance == null)
      new ComposableSingletons$AboutSectionKt();
    return ComposableSingletons$AboutSectionKt_instance;
  }
  function aboutMe$lambda($viewportEntered$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $viewportEntered$delegate.w1();
  }
  function aboutMe$lambda_0($viewportEntered$delegate, _set____db54di) {
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $viewportEntered$delegate.mr(_set____db54di);
    return Unit_instance;
  }
  function aboutSection$lambda($$changed) {
    return function ($composer, $force) {
      aboutSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function aboutContent$lambda$lambda($breakpoint) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.u18()) {
        $composer_0.z18(-1055600419);
        if ($breakpoint.i2(Breakpoint_MD_getInstance()) >= 0) {
          aboutImage($composer_0, 0);
        }
        $composer_0.a19();
        aboutMe($composer_0, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_61($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function aboutContent$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        var tmp49_modifier = fillMaxWidth(Companion_instance_0, $breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(90) : get_percent(100));
        var tmp50_numColumns = numColumns(1, VOID, 2);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.sections.aboutContent.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, -1065714652, true, aboutContent$lambda$lambda($breakpoint));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_1;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.sections.aboutContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_61(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.a19();
        SimpleGrid(tmp50_numColumns, tmp49_modifier, null, null, tmp0, $composer_0, 24648, 12);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_62($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function aboutContent$lambda_0($$changed) {
    return function ($composer, $force) {
      aboutContent($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function aboutImage$lambda($$changed) {
    return function ($composer, $force) {
      aboutImage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function aboutMe$lambda_1() {
    return EmptyCoroutineContext_getInstance();
  }
  function aboutMe$lambda$slambda$lambda($animatePercentage, $entry) {
    return function (it) {
      $animatePercentage.g25($entry.h2_1, it);
      return Unit_instance;
    };
  }
  function aboutMe$lambda$slambda($entry, $animatePercentage, resultContinuation) {
    this.g3g_1 = $entry;
    this.h3g_1 = $animatePercentage;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(aboutMe$lambda$slambda).j1h = function ($this$launch, $completion) {
    var tmp = this.k1h($this$launch, $completion);
    tmp.w8_1 = Unit_instance;
    tmp.x8_1 = null;
    return tmp.c9();
  };
  protoOf(aboutMe$lambda$slambda).z9 = function (p1, $completion) {
    return this.j1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(aboutMe$lambda$slambda).c9 = function () {
    var suspendResult = this.w8_1;
    $sm: do
      try {
        var tmp = this.u8_1;
        switch (tmp) {
          case 0:
            this.v8_1 = 2;
            this.u8_1 = 1;
            var tmp_0 = numberToInt(this.g3g_1.t3f_1.value);
            suspendResult = animatePercentage(tmp_0, VOID, aboutMe$lambda$slambda$lambda(this.h3g_1, this.g3g_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.x8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.v8_1 === 2) {
          throw e;
        } else {
          this.u8_1 = this.v8_1;
          this.x8_1 = e;
        }
      }
     while (true);
  };
  protoOf(aboutMe$lambda$slambda).k1h = function ($this$launch, completion) {
    var i = new aboutMe$lambda$slambda(this.g3g_1, this.h3g_1, completion);
    i.i3g_1 = $this$launch;
    return i;
  };
  function aboutMe$lambda$slambda_0($entry, $animatePercentage, resultContinuation) {
    var i = new aboutMe$lambda$slambda($entry, $animatePercentage, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.j1h($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function aboutMe$lambda_2($scope, $viewportEntered$delegate, $animatePercentage) {
    return function () {
      aboutMe$lambda_0($viewportEntered$delegate, true);
      var tmp0_iterator = get_entries_4().j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        // Inline function 'com.honger.ngel.sections.aboutMe.<anonymous>.<anonymous>' call
        launch($scope, VOID, VOID, aboutMe$lambda$slambda_0(element, $animatePercentage, null));
      }
      return Unit_instance;
    };
  }
  function aboutMe$lambda_3($animatePercentage, $viewportEntered$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        var tmp_0 = Section_About_getInstance();
        sectionTitle(null, tmp_0, null, $composer_0, 48, 5);
        P(toAttrs(color(fontStyle(fontWeight(fontFamily(fontSize(maxWidth(margin(fillMaxWidth(toModifier(get_AboutTextStyle(), $composer_0, 6)), get_px(25)), get_px(500)), get_px(18)), ['Roboto']), Companion_instance_1.e2k()), Companion_instance_8.i2k()), Theme_Secondary_getInstance().p3d_1)), ComposableSingletons$AboutSectionKt_getInstance().x3f_1, $composer_0, 48, 0);
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = get_entries_4().j();
        while (tmp0_iterator.k()) {
          var element = tmp0_iterator.l();
          // Inline function 'com.honger.ngel.sections.aboutMe.<anonymous>.<anonymous>.<anonymous>' call
          var tmp55_name = element.s3f_1;
          var tmp56_percentage = aboutMe$lambda($viewportEntered$delegate) ? element.t3f_1 : get_percent(0);
          var tmp57_index = element.h2_1;
          var tmp58_animatePercentage = aboutMe$lambda($viewportEntered$delegate) ? $animatePercentage.p(element.h2_1) : 0;
          skillBar(tmp55_name, tmp57_index, null, tmp56_percentage, tmp58_animatePercentage, $composer_0, 4096, 4);
        }
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_63($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function aboutMe$lambda_4($$changed) {
    return function ($composer, $force) {
      aboutMe($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function achievementsSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-1768467656);
    if (!($changed === 0) || !$composer_0.u18()) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = backgroundColor(padding_1(maxWidth(fillMaxWidth(id(Companion_instance_0, Section_Achievements_getInstance().c3e_1)), get_px(1920)), get_px(100)), Theme_LighterGray_getInstance().p3d_1);
      var tmp_0 = Center_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.achievementsSection.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1649632242, true, achievementsSection$lambda(breakpoint));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp_2;
      if (invalid || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.achievementsSection.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_64(dispatchReceiver);
        $composer_1.k1a(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.a19();
      Box(tmp, tmp_0, null, tmp0, $composer_0, 3144, 4);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(achievementsSection$lambda_0($changed));
    }
  }
  function achievementsContent(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-2009039307);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.s10(breakpoint) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.u18()) {
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      $composer_1.z18(773894976);
      sourceInformation($composer_1, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = achievementsContent$lambda_1;
      }
      var composer = $composer_1;
      $composer_1.z18(-954370320);
      sourceInformation($composer_1, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp;
      if (false || it === Companion_getInstance().r13_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.k1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.a19();
      var wrapper = tmp1_group;
      var tmp0 = wrapper.b1g_1;
      $composer_1.a19();
      var scope = tmp0;
      $composer_0.z18(1786169777);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.e1a();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.achievementsContent.<anonymous>' call
        var value_0 = mutableStateOf(false);
        this_0.k1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.a19();
      var viewportEntered$delegate = tmp0_group;
      $composer_0.z18(1786171738);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_1.e1a();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.achievementsContent.<anonymous>' call
        var value_1 = mutableStateListOf([0, 0, 0, 0]);
        this_1.k1a(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.a19();
      var animatedNumbers = tmp1_group_0;
      var tmp_5 = Section_Achievements_getInstance().c3e_1;
      observeViewportEntered(tmp_5, 700.0, achievementsContent$lambda_2(scope, viewportEntered$delegate, animatedNumbers), $composer_0, 54);
      var tmp_6 = numColumns(1, VOID, 2, 4);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.achievementsContent.<anonymous>' call
      var tmp_7 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_7, -1903969620, true, achievementsContent$lambda_3(breakpoint, animatedNumbers, viewportEntered$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      $composer_2.z18(1157296644);
      sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.e1a();
      var tmp_8;
      if (invalid || it_2 === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.achievementsContent.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_65(dispatchReceiver);
        $composer_2.k1a(value_2);
        tmp_8 = value_2;
      } else {
        tmp_8 = it_2;
      }
      var tmp_9 = tmp_8;
      var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_2.a19();
      SimpleGrid(tmp_6, null, null, null, tmp0_0, $composer_0, 24584, 14);
    } else {
      $composer_0.l13();
    }
    var tmp2_safe_receiver = $composer_0.t1a();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.t1f(achievementsContent$lambda_4(breakpoint, $changed));
    }
  }
  function achievementsContent$lambda($viewportEntered$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $viewportEntered$delegate.w1();
  }
  function achievementsContent$lambda_0($viewportEntered$delegate, _set____db54di) {
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $viewportEntered$delegate.mr(_set____db54di);
    return Unit_instance;
  }
  function achievementsSection$lambda($breakpoint) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        achievementsContent($breakpoint, $composer_0, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_64($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function achievementsSection$lambda_0($$changed) {
    return function ($composer, $force) {
      achievementsSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function achievementsContent$lambda_1() {
    return EmptyCoroutineContext_getInstance();
  }
  function achievementsContent$lambda$slambda$lambda($animatedNumbers, $achievement) {
    return function (it) {
      $animatedNumbers.g25($achievement.h2_1, it);
      return Unit_instance;
    };
  }
  function achievementsContent$lambda$slambda($achievement, $animatedNumbers, resultContinuation) {
    this.r3g_1 = $achievement;
    this.s3g_1 = $animatedNumbers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(achievementsContent$lambda$slambda).j1h = function ($this$launch, $completion) {
    var tmp = this.k1h($this$launch, $completion);
    tmp.w8_1 = Unit_instance;
    tmp.x8_1 = null;
    return tmp.c9();
  };
  protoOf(achievementsContent$lambda$slambda).z9 = function (p1, $completion) {
    return this.j1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(achievementsContent$lambda$slambda).c9 = function () {
    var suspendResult = this.w8_1;
    $sm: do
      try {
        var tmp = this.u8_1;
        switch (tmp) {
          case 0:
            this.v8_1 = 2;
            this.u8_1 = 1;
            suspendResult = animateNumbers(this.r3g_1.k3d_1, VOID, achievementsContent$lambda$slambda$lambda(this.s3g_1, this.r3g_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.x8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.v8_1 === 2) {
          throw e;
        } else {
          this.u8_1 = this.v8_1;
          this.x8_1 = e;
        }
      }
     while (true);
  };
  protoOf(achievementsContent$lambda$slambda).k1h = function ($this$launch, completion) {
    var i = new achievementsContent$lambda$slambda(this.r3g_1, this.s3g_1, completion);
    i.t3g_1 = $this$launch;
    return i;
  };
  function achievementsContent$lambda$slambda_0($achievement, $animatedNumbers, resultContinuation) {
    var i = new achievementsContent$lambda$slambda($achievement, $animatedNumbers, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.j1h($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function achievementsContent$lambda_2($scope, $viewportEntered$delegate, $animatedNumbers) {
    return function () {
      achievementsContent$lambda_0($viewportEntered$delegate, true);
      var tmp0_iterator = get_entries().j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        // Inline function 'com.honger.ngel.sections.achievementsContent.<anonymous>.<anonymous>' call
        launch($scope, VOID, VOID, achievementsContent$lambda$slambda_0(element, $animatedNumbers, null));
      }
      return Unit_instance;
    };
  }
  function achievementsContent$lambda_3($breakpoint, $animatedNumbers, $viewportEntered$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.u18()) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = get_entries().j();
        while (tmp0_iterator.k()) {
          var element = tmp0_iterator.l();
          // Inline function 'com.honger.ngel.sections.achievementsContent.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = Companion_instance_0;
          var tmp_1;
          if (element.equals(Achievement_Team_getInstance())) {
            tmp_1 = get_px(0);
          } else {
            tmp_1 = $breakpoint.i2(Breakpoint_SM_getInstance()) > 0 ? get_px(40) : get_px(0);
          }
          achievementCard(margin_0(tmp_0, VOID, tmp_1, $breakpoint.i2(Breakpoint_MD_getInstance()) > 0 ? get_px(0) : get_px(40)), achievementsContent$lambda($viewportEntered$delegate) ? $animatedNumbers.p(element.h2_1) : 0, element, $composer_0, 8, 0);
        }
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_65($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function achievementsContent$lambda_4($breakpoint, $$changed) {
    return function ($composer, $force) {
      achievementsContent($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function contactSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-1171098864);
    if (!($changed === 0) || !$composer_0.u18()) {
      var tmp = padding_1(maxWidth(id(Companion_instance_0, Section_Contact_getInstance().c3e_1), get_px(1920)), get_px(100));
      var tmp_0 = Center_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$ContactSectionKt_getInstance().u3g_1, $composer_0, 3144, 4);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(contactSection$lambda($changed));
    }
  }
  function contactContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-1181202524);
    if (!($changed === 0) || !$composer_0.u18()) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      $composer_1.z18(773894976);
      sourceInformation($composer_1, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = contactContent$lambda_1;
      }
      var composer = $composer_1;
      $composer_1.z18(-954370320);
      sourceInformation($composer_1, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp;
      if (false || it === Companion_getInstance().r13_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.k1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.a19();
      var wrapper = tmp1_group;
      var tmp0 = wrapper.b1g_1;
      $composer_1.a19();
      var scope = tmp0;
      $composer_0.z18(-35812799);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.e1a();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.contactContent.<anonymous>' call
        var value_0 = mutableStateOf(get_deg(0));
        this_0.k1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.a19();
      var animatedRotation$delegate = tmp0_group;
      var tmp_3 = Section_Contact_getInstance().c3e_1;
      observeViewportEntered(tmp_3, 500.0, contactContent$lambda_2(scope, animatedRotation$delegate), $composer_0, 48);
      var tmp_4 = fillMaxWidth(Companion_instance_0, breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_5 = CenterHorizontally_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.contactContent.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_6, 1112240525, true, contactContent$lambda_3(breakpoint, animatedRotation$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      $composer_2.z18(1157296644);
      sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_2.e1a();
      var tmp_7;
      if (invalid || it_1 === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.contactContent.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_67(dispatchReceiver);
        $composer_2.k1a(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp0_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_2.a19();
      Column(tmp_4, null, tmp_5, null, tmp0_0, $composer_0, 25096, 10);
    } else {
      $composer_0.l13();
    }
    var tmp1_safe_receiver = $composer_0.t1a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.t1f(contactContent$lambda_4($changed));
    }
  }
  function ComposableLambda$invoke$ref_66($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactSectionKt$lambda_1$lambda_3nkjr($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.u18()) {
      contactContent($composer_0, 0);
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ContactSectionKt() {
    ComposableSingletons$ContactSectionKt_instance = this;
    var tmp = this;
    tmp.u3g_1 = ComposableLambda$invoke$ref_66(composableLambdaInstance(523191370, false, ComposableSingletons$ContactSectionKt$lambda_1$lambda_3nkjr));
  }
  var ComposableSingletons$ContactSectionKt_instance;
  function ComposableSingletons$ContactSectionKt_getInstance() {
    if (ComposableSingletons$ContactSectionKt_instance == null)
      new ComposableSingletons$ContactSectionKt();
    return ComposableSingletons$ContactSectionKt_instance;
  }
  function contactContent$lambda($animatedRotation$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animatedRotation', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $animatedRotation$delegate.w1();
  }
  function contactContent$lambda_0($animatedRotation$delegate, _set____db54di) {
    getLocalDelegateReference('animatedRotation', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $animatedRotation$delegate.mr(_set____db54di);
    return Unit_instance;
  }
  function contactSection$lambda($$changed) {
    return function ($composer, $force) {
      contactSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function contactContent$lambda_1() {
    return EmptyCoroutineContext_getInstance();
  }
  function contactContent$lambda$slambda($animatedRotation$delegate, resultContinuation) {
    this.d3h_1 = $animatedRotation$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(contactContent$lambda$slambda).j1h = function ($this$launch, $completion) {
    var tmp = this.k1h($this$launch, $completion);
    tmp.w8_1 = Unit_instance;
    tmp.x8_1 = null;
    return tmp.c9();
  };
  protoOf(contactContent$lambda$slambda).z9 = function (p1, $completion) {
    return this.j1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(contactContent$lambda$slambda).c9 = function () {
    var suspendResult = this.w8_1;
    $sm: do
      try {
        var tmp = this.u8_1;
        switch (tmp) {
          case 0:
            this.v8_1 = 2;
            this.u8_1 = 1;
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            contactContent$lambda_0(this.d3h_1, get_deg(0));
            return Unit_instance;
          case 2:
            throw this.x8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.v8_1 === 2) {
          throw e;
        } else {
          this.u8_1 = this.v8_1;
          this.x8_1 = e;
        }
      }
     while (true);
  };
  protoOf(contactContent$lambda$slambda).k1h = function ($this$launch, completion) {
    var i = new contactContent$lambda$slambda(this.d3h_1, completion);
    i.e3h_1 = $this$launch;
    return i;
  };
  function contactContent$lambda$slambda_0($animatedRotation$delegate, resultContinuation) {
    var i = new contactContent$lambda$slambda($animatedRotation$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.j1h($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function contactContent$lambda_2($scope, $animatedRotation$delegate) {
    return function () {
      contactContent$lambda_0($animatedRotation$delegate, get_deg(10));
      launch($scope, VOID, VOID, contactContent$lambda$slambda_0($animatedRotation$delegate, null));
      return Unit_instance;
    };
  }
  function contactContent$lambda$lambda($animatedRotation$delegate) {
    return function ($this$transform) {
      $this$transform.z2f(contactContent$lambda($animatedRotation$delegate));
      return Unit_instance;
    };
  }
  function contactContent$lambda_3($breakpoint, $animatedRotation$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        var tmp_0 = margin_1(fillMaxWidth(Companion_instance_0), VOID, VOID, get_px(25));
        $composer_0.z18(1916039290);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.e1a();
        var tmp_1;
        if (false || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.sections.contactContent.<anonymous>.<anonymous>.<anonymous>' call
          var value = contactContent$lambda$lambda($animatedRotation$delegate);
          $composer_0.k1a(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.a19();
        sectionTitle(transition(transform(tmp_0, tmp0_group), [CSSTransition_init_$Create$('transform', get_ms(500))]), Section_Contact_getInstance(), CenterHorizontally_instance, $composer_0, 568, 0);
        contactForm($breakpoint, $composer_0, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_67($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function contactContent$lambda_4($$changed) {
    return function ($composer, $force) {
      contactContent($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function experienceSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(851235140);
    if (!($changed === 0) || !$composer_0.u18()) {
      var tmp = padding_1(maxWidth(id(Companion_instance_0, Section_Experience_getInstance().c3e_1), get_px(1920)), get_px(100));
      var tmp_0 = Center_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$ExperienceSectionKt_getInstance().f3h_1, $composer_0, 3144, 4);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(experienceSection$lambda($changed));
    }
  }
  function experienceContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(500810800);
    if (!($changed === 0) || !$composer_0.u18()) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      $composer_0.z18(-325864244);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.e1a();
      var tmp;
      if (false || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.experienceContent.<anonymous>' call
        var value = mutableStateOf(get_px(200));
        this_0.k1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.a19();
      var animatedMargin$delegate = tmp0_group;
      var tmp_1 = Section_Experience_getInstance().c3e_1;
      $composer_0.z18(-325858825);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.e1a();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.experienceContent.<anonymous>' call
        var value_0 = experienceContent$lambda_1(animatedMargin$delegate);
        this_1.k1a(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.a19();
      observeViewportEntered(tmp_1, 500.0, tmp1_group, $composer_0, 438);
      var tmp_4 = fillMaxWidth(Companion_instance_0, breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_5 = CenterHorizontally_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.experienceContent.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_6, 425073497, true, experienceContent$lambda_2(breakpoint, animatedMargin$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.e1a();
      var tmp_7;
      if (invalid || it_1 === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.experienceContent.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_69(dispatchReceiver);
        $composer_1.k1a(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_1.a19();
      Column(tmp_4, null, tmp_5, null, tmp0, $composer_0, 25096, 10);
    } else {
      $composer_0.l13();
    }
    var tmp2_safe_receiver = $composer_0.t1a();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.t1f(experienceContent$lambda_3($changed));
    }
  }
  function ComposableLambda$invoke$ref_68($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$ExperienceSectionKt$lambda_1$lambda_jj9ub5($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.u18()) {
      experienceContent($composer_0, 0);
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ExperienceSectionKt() {
    ComposableSingletons$ExperienceSectionKt_instance = this;
    var tmp = this;
    tmp.f3h_1 = ComposableLambda$invoke$ref_68(composableLambdaInstance(-582856962, false, ComposableSingletons$ExperienceSectionKt$lambda_1$lambda_jj9ub5));
  }
  var ComposableSingletons$ExperienceSectionKt_instance;
  function ComposableSingletons$ExperienceSectionKt_getInstance() {
    if (ComposableSingletons$ExperienceSectionKt_instance == null)
      new ComposableSingletons$ExperienceSectionKt();
    return ComposableSingletons$ExperienceSectionKt_instance;
  }
  function experienceContent$lambda($animatedMargin$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animatedMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $animatedMargin$delegate.w1();
  }
  function experienceContent$lambda_0($animatedMargin$delegate, _set____db54di) {
    getLocalDelegateReference('animatedMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $animatedMargin$delegate.mr(_set____db54di);
    return Unit_instance;
  }
  function experienceSection$lambda($$changed) {
    return function ($composer, $force) {
      experienceSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function experienceContent$lambda_1($animatedMargin$delegate) {
    return function () {
      experienceContent$lambda_0($animatedMargin$delegate, get_px(50));
      return Unit_instance;
    };
  }
  function experienceContent$lambda_2($breakpoint, $animatedMargin$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        var tmp_0 = margin_1(fillMaxWidth(Companion_instance_0, $breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(60) : get_percent(90)), VOID, VOID, get_px(25));
        var tmp_1 = Section_Experience_getInstance();
        sectionTitle(tmp_0, tmp_1, null, $composer_0, 56, 4);
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = get_entries_0().j();
        while (tmp0_iterator.k()) {
          var element = tmp0_iterator.l();
          // Inline function 'com.honger.ngel.sections.experienceContent.<anonymous>.<anonymous>.<anonymous>' call
          experienceCard($breakpoint, element.equals(Experience_First_getInstance()), element, experienceContent$lambda($animatedMargin$delegate), $composer_0, 4096, 0);
        }
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_69($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function experienceContent$lambda_3($$changed) {
    return function ($composer, $force) {
      experienceContent($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function mainSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-402873502);
    if (!($changed === 0) || !$composer_0.u18()) {
      var tmp = maxWidth(id(Companion_instance_0, Section_Home_getInstance().c3e_1), get_px(1920));
      var tmp_0 = TopCenter_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$MainSectionKt_getInstance().g3h_1, $composer_0, 3144, 4);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(mainSection$lambda($changed));
    }
  }
  function mainBackground($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(462435147);
    if (!($changed === 0) || !$composer_0.u18()) {
      var tmp59_modifier = objectFit(fillMaxSize(Companion_instance_0), Companion_instance_4.o2l());
      var tmp60_src = 'background.svg';
      Image_0(tmp60_src, 'Background Image', tmp59_modifier, null, null, null, false, null, $composer_0, 566, 248);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(mainBackground$lambda($changed));
    }
  }
  function mainContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-590006450);
    if (!($changed === 0) || !$composer_0.u18()) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = fillMaxSize(Companion_instance_0);
      var tmp_0 = CenterHorizontally_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.mainContent.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -1912323081, true, mainContent$lambda(breakpoint));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp_2;
      if (invalid || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.mainContent.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_79(dispatchReceiver);
        $composer_1.k1a(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.a19();
      Column(tmp, null, tmp_0, null, tmp0, $composer_0, 25096, 10);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(mainContent$lambda_0($changed));
    }
  }
  function mainText(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(1749016445);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.s10(breakpoint) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.u18()) {
      var tmp = Center_instance_0;
      var tmp_0 = CenterVertically_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.mainText.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1435727040, true, mainText$lambda(breakpoint));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp_2;
      if (invalid || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.mainText.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_81(dispatchReceiver);
        $composer_1.k1a(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.a19();
      Row(null, tmp, tmp_0, null, tmp0, $composer_0, 25152, 9);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(mainText$lambda_0(breakpoint, $changed));
    }
  }
  function mainImage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-1258092052);
    if (!($changed === 0) || !$composer_0.u18()) {
      var tmp = fillMaxHeight(fillMaxSize(Companion_instance_0, get_percent(80)));
      var tmp_0 = Center_instance_0;
      Column(tmp, tmp_0, null, null, ComposableSingletons$MainSectionKt_getInstance().m3h_1, $composer_0, 24648, 12);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(mainImage$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_70($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_1$lambda_21924i($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.u18()) {
      mainBackground($composer_0, 0);
      mainContent($composer_0, 0);
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_71($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_2$lambda_uuvj6p($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text("Hello, I'm", $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_72($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_3$lambda_bcm1q8($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Jonathan Smith', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_73($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_4$lambda_hh0fbz($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Mobile & Web Developer/Designer', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_74($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_5$lambda_oqh5ky($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Kobweb is a Kotlin-based framework for building full-stack web apps with shared code across platforms.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_75($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_6$lambda_435bh9($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    var tmp66_modifier = textDecorationLine(color(Companion_instance_0, Colors_instance.p2t()), Companion_instance_3.b2k());
    var tmp67_path = Section_Contact_getInstance().f3e_1;
    Link(tmp67_path, 'Hire me', tmp66_modifier, null, null, null, null, false, null, $composer_0, 566, 504);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_76($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_7$lambda_wwrsjg($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.u18()) {
      var tmp68_modifier = fillMaxSize(toModifier_0(get_MainImageStyle(), [], $composer_0, 72));
      var tmp69_src = 'main_image.png';
      Image_0(tmp69_src, 'Main Image', tmp68_modifier, null, null, null, false, null, $composer_0, 566, 248);
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainSectionKt() {
    ComposableSingletons$MainSectionKt_instance = this;
    var tmp = this;
    tmp.g3h_1 = ComposableLambda$invoke$ref_70(composableLambdaInstance(-1168807908, false, ComposableSingletons$MainSectionKt$lambda_1$lambda_21924i));
    var tmp_0 = this;
    tmp_0.h3h_1 = ComposableLambda$invoke$ref_71(composableLambdaInstance(-2131432619, false, ComposableSingletons$MainSectionKt$lambda_2$lambda_uuvj6p));
    var tmp_1 = this;
    tmp_1.i3h_1 = ComposableLambda$invoke$ref_72(composableLambdaInstance(256794956, false, ComposableSingletons$MainSectionKt$lambda_3$lambda_bcm1q8));
    var tmp_2 = this;
    tmp_2.j3h_1 = ComposableLambda$invoke$ref_73(composableLambdaInstance(1056369485, false, ComposableSingletons$MainSectionKt$lambda_4$lambda_hh0fbz));
    var tmp_3 = this;
    tmp_3.k3h_1 = ComposableLambda$invoke$ref_74(composableLambdaInstance(1855944014, false, ComposableSingletons$MainSectionKt$lambda_5$lambda_oqh5ky));
    var tmp_4 = this;
    tmp_4.l3h_1 = ComposableLambda$invoke$ref_75(composableLambdaInstance(-613130819, false, ComposableSingletons$MainSectionKt$lambda_6$lambda_435bh9));
    var tmp_5 = this;
    tmp_5.m3h_1 = ComposableLambda$invoke$ref_76(composableLambdaInstance(-1599132459, false, ComposableSingletons$MainSectionKt$lambda_7$lambda_wwrsjg));
  }
  var ComposableSingletons$MainSectionKt_instance;
  function ComposableSingletons$MainSectionKt_getInstance() {
    if (ComposableSingletons$MainSectionKt_instance == null)
      new ComposableSingletons$MainSectionKt();
    return ComposableSingletons$MainSectionKt_instance;
  }
  function mainSection$lambda($$changed) {
    return function ($composer, $force) {
      mainSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function mainBackground$lambda($$changed) {
    return function ($composer, $force) {
      mainBackground($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function mainContent$lambda$lambda$lambda($breakpoint) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.u18()) {
        mainText($breakpoint, $composer_0, 0);
        mainImage($composer_0, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_77($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function mainContent$lambda$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        var tmp61_modifier = fillMaxWidth(Companion_instance_0, $breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(80) : get_percent(90));
        var tmp62_numColumns = numColumns(1, VOID, 2);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.sections.mainContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, -137370025, true, mainContent$lambda$lambda$lambda($breakpoint));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_1;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.sections.mainContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_77(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.a19();
        SimpleGrid(tmp62_numColumns, tmp61_modifier, null, null, tmp0, $composer_0, 24648, 12);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_78($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function mainContent$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        header($composer_0, 0);
        var tmp63_modifier = fillMaxWidth(Companion_instance_0);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.sections.mainContent.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 1371831840, true, mainContent$lambda$lambda($breakpoint));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_1;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.sections.mainContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_78(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.a19();
        Column(tmp63_modifier, Bottom_instance, CenterHorizontally_instance, null, tmp0, $composer_0, 25160, 8);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_79($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function mainContent$lambda_0($$changed) {
    return function ($composer, $force) {
      mainContent($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function mainText$lambda$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        P(toAttrs(fontWeight(color(fontSize(fontFamily(margin(Companion_instance_0, get_px(0)), ['Roboto']), $breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_px(45) : get_px(20)), Theme_Primary_getInstance().p3d_1), Companion_instance_1.g2k())), ComposableSingletons$MainSectionKt_getInstance().h3h_1, $composer_0, 48, 0);
        P(toAttrs(fontWeight(color(fontSize(fontFamily(margin_1(Companion_instance_0, get_px(20), VOID, get_px(0)), ['Roboto']), $breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_px(68) : get_px(40)), Theme_Secondary_getInstance().p3d_1), Companion_instance_1.g2k())), ComposableSingletons$MainSectionKt_getInstance().i3h_1, $composer_0, 48, 0);
        P(toAttrs(fontWeight(color(fontSize(fontFamily(margin_1(Companion_instance_0, get_px(10), VOID, get_px(5)), ['Roboto']), get_px(20)), Theme_Secondary_getInstance().p3d_1), Companion_instance_1.g2k())), ComposableSingletons$MainSectionKt_getInstance().j3h_1, $composer_0, 48, 0);
        P(toAttrs(fontWeight(color(fontStyle(fontSize(maxWidth(fontFamily(margin_1(Companion_instance_0, VOID, VOID, get_px(25)), ['Roboto']), get_px(400)), get_px(15)), Companion_instance_8.i2k()), Theme_Secondary_getInstance().p3d_1), Companion_instance_1.e2k())), ComposableSingletons$MainSectionKt_getInstance().k3h_1, $composer_0, 48, 0);
        Button(toAttrs(cursor(height(borderRadius(border(color(backgroundColor(toModifier_0(get_MainButtonStyle(), [], $composer_0, 72), Theme_Primary_getInstance().p3d_1), Colors_instance.p2t()), get_px(0)), get_px(5)), get_px(40)), Companion_instance_9.y2j())), ComposableSingletons$MainSectionKt_getInstance().l3h_1, $composer_0, 48, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_80($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function mainText$lambda($breakpoint) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        $composer_0.z18(-1233294290);
        if ($breakpoint.i2(Breakpoint_MD_getInstance()) > 0) {
          socialBar($composer_0, 0);
        }
        $composer_0.a19();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.sections.mainText.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 165314487, true, mainText$lambda$lambda($breakpoint));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_1;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.sections.mainText.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_80(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.a19();
        Column(null, null, null, null, tmp0, $composer_0, 24576, 15);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_81($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function mainText$lambda_0($breakpoint, $$changed) {
    return function ($composer, $force) {
      mainText($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function mainImage$lambda($$changed) {
    return function ($composer, $force) {
      mainImage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function portfolioSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-1142133488);
    if (!($changed === 0) || !$composer_0.u18()) {
      var tmp = padding_1(maxWidth(id(Companion_instance_0, Section_Portfolio_getInstance().c3e_1), get_px(1920)), get_px(100));
      var tmp_0 = Center_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$PortfolioSectionKt_getInstance().n3h_1, $composer_0, 3144, 4);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(portfolioSection$lambda($changed));
    }
  }
  function portfolioContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(2033151140);
    if (!($changed === 0) || !$composer_0.u18()) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = fillMaxWidth(Companion_instance_0, breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_0 = CenterHorizontally_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.portfolioContent.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -1090946547, true, portfolioContent$lambda(breakpoint));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp_2;
      if (invalid || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.portfolioContent.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_85(dispatchReceiver);
        $composer_1.k1a(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.a19();
      Column(tmp, null, tmp_0, null, tmp0, $composer_0, 25096, 10);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(portfolioContent$lambda_0($changed));
    }
  }
  function portfolioCard_0(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-355929858);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.s10(breakpoint) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.u18()) {
      var tmp = scrollBehavior(overflow(maxWidth(margin_1(fillMaxWidth(id(Companion_instance_0, 'scrollableContainer'), breakpoint.i2(Breakpoint_MD_getInstance()) > 0 ? get_px(950) : breakpoint.i2(Breakpoint_SM_getInstance()) > 0 ? get_px(625) : get_px(300)), VOID, VOID, get_px(25)), get_px(950)), Companion_instance_10.u2l()), Companion_instance_11.x2l());
      Row(tmp, null, null, null, ComposableSingletons$PortfolioSectionKt_getInstance().o3h_1, $composer_0, 24584, 14);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(portfolioCard$lambda_1(breakpoint, $changed));
    }
  }
  function portfolioNavigation($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(1748959155);
    if (!($changed === 0) || !$composer_0.u18()) {
      var tmp = fillMaxWidth(Companion_instance_0);
      var tmp_0 = Center_instance_0;
      Row(tmp, tmp_0, null, null, ComposableSingletons$PortfolioSectionKt_getInstance().p3h_1, $composer_0, 24648, 12);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(portfolioNavigation$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_82($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_1$lambda_ozf5($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.u18()) {
      portfolioContent($composer_0, 0);
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_83($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_2$lambda_subghc($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.u18()) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = get_entries_1().j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        // Inline function 'com.honger.ngel.sections.ComposableSingletons$PortfolioSectionKt.lambda-2.<anonymous>.<anonymous>' call
        var tmp = margin_0(Companion_instance_0, VOID, !element.equals(Portfolio_Five_getInstance()) ? get_px(25) : get_px(0));
        portfolioCard(tmp, element, null, $composer_0, 8, 4);
      }
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_84($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_3$lambda_dd64fl($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.u18()) {
      var tmp = cursor(margin_0(toModifier(get_PortfolioArrowIconStyle(), $composer_0, 6), VOID, get_px(40)), Companion_instance_9.y2j());
      $composer_0.z18(1301323803);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.e1a();
      var tmp_0;
      if (false || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.ComposableSingletons$PortfolioSectionKt.lambda-3.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$PortfolioSectionKt$lambda_3$lambda$lambda_xijbwk;
        $composer_0.k1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.a19();
      FaArrowLeft(onClick(tmp, tmp0_group), IconSize_LG_getInstance(), $composer_0, 56, 0);
      var tmp_2 = cursor(toModifier(get_PortfolioArrowIconStyle(), $composer_0, 6), Companion_instance_9.y2j());
      $composer_0.z18(1301334488);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.e1a();
      var tmp_3;
      if (false || it_0 === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.ComposableSingletons$PortfolioSectionKt.lambda-3.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$PortfolioSectionKt$lambda_3$lambda$lambda_xijbwk_0;
        $composer_0.k1a(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.a19();
      FaArrowRight(onClick(tmp_2, tmp1_group), IconSize_LG_getInstance(), $composer_0, 56, 0);
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_3$lambda$lambda_xijbwk(it) {
    var tmp70_safe_receiver = document.getElementById('scrollableContainer');
    if (tmp70_safe_receiver == null)
      null;
    else {
      tmp70_safe_receiver.scrollBy(-325.0, 0.0);
    }
    return Unit_instance;
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_3$lambda$lambda_xijbwk_0(it) {
    var tmp71_safe_receiver = document.getElementById('scrollableContainer');
    if (tmp71_safe_receiver == null)
      null;
    else {
      tmp71_safe_receiver.scrollBy(325.0, 0.0);
    }
    return Unit_instance;
  }
  function ComposableSingletons$PortfolioSectionKt() {
    ComposableSingletons$PortfolioSectionKt_instance = this;
    var tmp = this;
    tmp.n3h_1 = ComposableLambda$invoke$ref_82(composableLambdaInstance(-951447222, false, ComposableSingletons$PortfolioSectionKt$lambda_1$lambda_ozf5));
    var tmp_0 = this;
    tmp_0.o3h_1 = ComposableLambda$invoke$ref_83(composableLambdaInstance(-1606349183, false, ComposableSingletons$PortfolioSectionKt$lambda_2$lambda_subghc));
    var tmp_1 = this;
    tmp_1.p3h_1 = ComposableLambda$invoke$ref_84(composableLambdaInstance(-1542433098, false, ComposableSingletons$PortfolioSectionKt$lambda_3$lambda_dd64fl));
  }
  var ComposableSingletons$PortfolioSectionKt_instance;
  function ComposableSingletons$PortfolioSectionKt_getInstance() {
    if (ComposableSingletons$PortfolioSectionKt_instance == null)
      new ComposableSingletons$PortfolioSectionKt();
    return ComposableSingletons$PortfolioSectionKt_instance;
  }
  function portfolioSection$lambda($$changed) {
    return function ($composer, $force) {
      portfolioSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function portfolioContent$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.s10($this$Column) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) || !$composer_0.u18()) {
        var tmp_1 = $this$Column.r2r(margin_1(fillMaxWidth(Companion_instance_0), VOID, VOID, get_px(25)), Start_instance);
        var tmp_2 = Section_Portfolio_getInstance();
        sectionTitle(tmp_1, tmp_2, null, $composer_0, 56, 4);
        portfolioCard_0($breakpoint, $composer_0, 0);
        portfolioNavigation($composer_0, 0);
        tmp_0 = Unit_instance;
      } else {
        $composer_0.l13();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_85($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function portfolioContent$lambda_0($$changed) {
    return function ($composer, $force) {
      portfolioContent($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function portfolioCard$lambda_1($breakpoint, $$changed) {
    return function ($composer, $force) {
      portfolioCard_0($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function portfolioNavigation$lambda($$changed) {
    return function ($composer, $force) {
      portfolioNavigation($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function serviceSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-1866827920);
    if (!($changed === 0) || !$composer_0.u18()) {
      var tmp = padding_1(maxWidth(id(Companion_instance_0, Section_Service_getInstance().c3e_1), get_px(1920)), get_px(100));
      var tmp_0 = Center_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$ServiceSectionKt_getInstance().q3h_1, $composer_0, 3144, 4);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(serviceSection$lambda($changed));
    }
  }
  function serviceContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-1876931580);
    if (!($changed === 0) || !$composer_0.u18()) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = fillMaxSize(Companion_instance_0, breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_0 = CenterHorizontally_instance;
      Column(tmp, null, tmp_0, null, ComposableSingletons$ServiceSectionKt_getInstance().s3h_1, $composer_0, 25096, 10);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(serviceContent$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_86($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$ServiceSectionKt$lambda_1$lambda_vjhl50($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.u18()) {
      serviceContent($composer_0, 0);
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_87($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function ComposableSingletons$ServiceSectionKt$lambda_2$lambda_anzzrx($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.u18()) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = get_entries_3().j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        // Inline function 'com.honger.ngel.sections.ComposableSingletons$ServiceSectionKt.lambda-2.<anonymous>.<anonymous>' call
        serviceCard(element, $composer_0, 0);
      }
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_88($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$ServiceSectionKt$lambda_3$lambda_i5mhaa($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.u18()) {
      sectionTitle(margin_1(fillMaxWidth(Companion_instance_0), VOID, VOID, get_px(20)), Section_Service_getInstance(), CenterHorizontally_instance, $composer_0, 568, 0);
      var tmp = numColumns(1, 2, 3);
      SimpleGrid(tmp, null, null, null, ComposableSingletons$ServiceSectionKt_getInstance().r3h_1, $composer_0, 24584, 14);
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ServiceSectionKt() {
    ComposableSingletons$ServiceSectionKt_instance = this;
    var tmp = this;
    tmp.q3h_1 = ComposableLambda$invoke$ref_86(composableLambdaInstance(-172537686, false, ComposableSingletons$ServiceSectionKt$lambda_1$lambda_vjhl50));
    var tmp_0 = this;
    tmp_0.r3h_1 = ComposableLambda$invoke$ref_87(composableLambdaInstance(1651447396, false, ComposableSingletons$ServiceSectionKt$lambda_2$lambda_anzzrx));
    var tmp_1 = this;
    tmp_1.s3h_1 = ComposableLambda$invoke$ref_88(composableLambdaInstance(416511469, false, ComposableSingletons$ServiceSectionKt$lambda_3$lambda_i5mhaa));
  }
  var ComposableSingletons$ServiceSectionKt_instance;
  function ComposableSingletons$ServiceSectionKt_getInstance() {
    if (ComposableSingletons$ServiceSectionKt_instance == null)
      new ComposableSingletons$ServiceSectionKt();
    return ComposableSingletons$ServiceSectionKt_instance;
  }
  function serviceSection$lambda($$changed) {
    return function ($composer, $force) {
      serviceSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function serviceContent$lambda($$changed) {
    return function ($composer, $force) {
      serviceContent($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function testimonialSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(1417972144);
    if (!($changed === 0) || !$composer_0.u18()) {
      var tmp = padding_1(maxWidth(id(Companion_instance_0, Section_Testimonial_getInstance().c3e_1), get_px(1920)), get_px(100));
      var tmp_0 = Center_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$TestimonialSectionKt_getInstance().t3h_1, $composer_0, 3144, 4);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(testimonialSection$lambda($changed));
    }
  }
  function testimonialContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-855247804);
    if (!($changed === 0) || !$composer_0.u18()) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      $composer_0.z18(175356030);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.e1a();
      var tmp;
      if (false || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.testimonialContent.<anonymous>' call
        var value = mutableStateOf(0);
        this_0.k1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.a19();
      var selectedPage$delegate = tmp0_group;
      var tmp_1 = fillMaxWidth(Companion_instance_0, breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_2 = CenterHorizontally_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.testimonialContent.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -624351955, true, testimonialContent$lambda_1(breakpoint, selectedPage$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.e1a();
      var tmp_4;
      if (invalid || it_0 === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.testimonialContent.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_90(dispatchReceiver);
        $composer_1.k1a(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.a19();
      Column(tmp_1, null, tmp_2, null, tmp0, $composer_0, 25096, 10);
    } else {
      $composer_0.l13();
    }
    var tmp1_safe_receiver = $composer_0.t1a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.t1f(testimonialContent$lambda_2($changed));
    }
  }
  function testimonialCards(breakpoint, selectedPage, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-1610779462);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.s10(breakpoint) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x19(selectedPage) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.u18()) {
      var testimonial1 = listOf([Testimonial_First_getInstance(), Testimonial_Third_getInstance(), Testimonial_Fifth_getInstance()]);
      var testimonial2 = listOf([Testimonial_Second_getInstance(), Testimonial_Fourth_getInstance(), Testimonial_Sixth_getInstance()]);
      var tmp72_modifier = margin_1(fillMaxWidth(Companion_instance_0, breakpoint.i2(Breakpoint_MD_getInstance()) >= 0 ? get_percent(90) : get_percent(100)), VOID, VOID, get_px(40));
      var tmp73_numColumns = numColumns(1, VOID, 2);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.testimonialCards.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1505709775, true, testimonialCards$lambda(testimonial1, breakpoint, selectedPage, testimonial2));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp_0;
      if (invalid || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.testimonialCards.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_93(dispatchReceiver);
        $composer_1.k1a(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.a19();
      SimpleGrid(tmp73_numColumns, tmp72_modifier, null, null, tmp0, $composer_0, 24648, 12);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(testimonialCards$lambda_0(breakpoint, selectedPage, $changed));
    }
  }
  function testimonialNavigation(selectedPage, onNavigate, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(1766761003);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x19(selectedPage) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.u19(onNavigate) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.u18()) {
      var tmp = fillMaxWidth(Companion_instance_0);
      var tmp_0 = Center_instance_0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.testimonialNavigation.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 187421064, true, testimonialNavigation$lambda(selectedPage, onNavigate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.z18(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.s10(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.e1a();
      var tmp_2;
      if (invalid || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.sections.testimonialNavigation.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_94(dispatchReceiver);
        $composer_1.k1a(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.a19();
      Row(tmp, tmp_0, null, null, tmp0, $composer_0, 24648, 12);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(testimonialNavigation$lambda_0(selectedPage, onNavigate, $changed));
    }
  }
  function setVisibility(selectedPage, testimonial) {
    var tmp;
    switch (testimonial.h2_1) {
      case 0:
        tmp = selectedPage === 0 ? Companion_instance_12.j2n() : Companion_instance_12.u2l();
        break;
      case 1:
        tmp = selectedPage === 0 ? Companion_instance_12.j2n() : Companion_instance_12.u2l();
        break;
      case 2:
        tmp = selectedPage === 1 ? Companion_instance_12.j2n() : Companion_instance_12.u2l();
        break;
      case 3:
        tmp = selectedPage === 1 ? Companion_instance_12.j2n() : Companion_instance_12.u2l();
        break;
      case 4:
        tmp = selectedPage === 2 ? Companion_instance_12.j2n() : Companion_instance_12.u2l();
        break;
      case 5:
        tmp = selectedPage === 2 ? Companion_instance_12.j2n() : Companion_instance_12.u2l();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function setOpacity(selectedPage, testimonial) {
    var tmp;
    switch (testimonial.h2_1) {
      case 0:
        tmp = selectedPage === 0 ? get_percent(100) : get_percent(0);
        break;
      case 1:
        tmp = selectedPage === 0 ? get_percent(100) : get_percent(0);
        break;
      case 2:
        tmp = selectedPage === 1 ? get_percent(100) : get_percent(0);
        break;
      case 3:
        tmp = selectedPage === 1 ? get_percent(100) : get_percent(0);
        break;
      case 4:
        tmp = selectedPage === 2 ? get_percent(100) : get_percent(0);
        break;
      case 5:
        tmp = selectedPage === 2 ? get_percent(100) : get_percent(0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function ComposableLambda$invoke$ref_89($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function ComposableSingletons$TestimonialSectionKt$lambda_1$lambda_dqfz6u($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.u18()) {
      testimonialContent($composer_0, 0);
    } else {
      $composer_0.l13();
    }
    return Unit_instance;
  }
  function ComposableSingletons$TestimonialSectionKt() {
    ComposableSingletons$TestimonialSectionKt_instance = this;
    var tmp = this;
    tmp.t3h_1 = ComposableLambda$invoke$ref_89(composableLambdaInstance(1939964138, false, ComposableSingletons$TestimonialSectionKt$lambda_1$lambda_dqfz6u));
  }
  var ComposableSingletons$TestimonialSectionKt_instance;
  function ComposableSingletons$TestimonialSectionKt_getInstance() {
    if (ComposableSingletons$TestimonialSectionKt_instance == null)
      new ComposableSingletons$TestimonialSectionKt();
    return ComposableSingletons$TestimonialSectionKt_instance;
  }
  function testimonialContent$lambda($selectedPage$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('selectedPage', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $selectedPage$delegate.w1();
  }
  function testimonialContent$lambda_0($selectedPage$delegate, _set____db54di) {
    getLocalDelegateReference('selectedPage', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $selectedPage$delegate.mr(_set____db54di);
    return Unit_instance;
  }
  function testimonialSection$lambda($$changed) {
    return function ($composer, $force) {
      testimonialSection($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function testimonialContent$lambda$lambda($selectedPage$delegate) {
    return function (index) {
      testimonialContent$lambda_0($selectedPage$delegate, index);
      return Unit_instance;
    };
  }
  function testimonialContent$lambda_1($breakpoint, $selectedPage$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        sectionTitle(margin_1(fillMaxWidth(Companion_instance_0), VOID, VOID, get_px(25)), Section_Testimonial_getInstance(), CenterHorizontally_instance, $composer_0, 568, 0);
        testimonialCards($breakpoint, testimonialContent$lambda($selectedPage$delegate), $composer_0, 0);
        var tmp_0 = testimonialContent$lambda($selectedPage$delegate);
        $composer_0.z18(2132775964);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.e1a();
        var tmp_1;
        if (false || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.sections.testimonialContent.<anonymous>.<anonymous>.<anonymous>' call
          var value = testimonialContent$lambda$lambda($selectedPage$delegate);
          $composer_0.k1a(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.a19();
        testimonialNavigation(tmp_0, tmp0_group, $composer_0, 48);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_90($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function testimonialContent$lambda_2($$changed) {
    return function ($composer, $force) {
      testimonialContent($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function testimonialCards$lambda$lambda($testimonial1, $breakpoint, $selectedPage) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = $testimonial1.j();
        while (tmp0_iterator.k()) {
          var element = tmp0_iterator.l();
          // Inline function 'com.honger.ngel.sections.testimonialCards.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          testimonialCard(transition(opacity(visibility(margin_0(Companion_instance_0, VOID, $breakpoint.i2(Breakpoint_SM_getInstance()) > 0 ? get_px(40) : get_px(0), $breakpoint.i2(Breakpoint_MD_getInstance()) > 0 ? get_px(0) : get_px(40)), setVisibility($selectedPage, element)), setOpacity($selectedPage, element)), [CSSTransition_init_$Create$('visibility', get_ms(300)), CSSTransition_init_$Create$('opacity', get_ms(300))]), element, $breakpoint, $composer_0, 8, 0);
        }
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_91($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function testimonialCards$lambda$lambda_0($testimonial2, $breakpoint, $selectedPage) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = $testimonial2.j();
        while (tmp0_iterator.k()) {
          var element = tmp0_iterator.l();
          // Inline function 'com.honger.ngel.sections.testimonialCards.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          testimonialCard(transition(opacity(visibility(margin_0(Companion_instance_0, VOID, $breakpoint.i2(Breakpoint_SM_getInstance()) > 0 ? get_px(40) : get_px(0), $breakpoint.i2(Breakpoint_MD_getInstance()) > 0 ? get_px(0) : get_px(40)), setVisibility($selectedPage, element)), setOpacity($selectedPage, element)), [CSSTransition_init_$Create$('visibility', get_ms(300)), CSSTransition_init_$Create$('opacity', get_ms(300))]), element, $breakpoint, $composer_0, 8, 0);
        }
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_92($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function testimonialCards$lambda($testimonial1, $breakpoint, $selectedPage, $testimonial2) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.u18()) {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.sections.testimonialCards.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 429306475, true, testimonialCards$lambda$lambda($testimonial1, $breakpoint, $selectedPage));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.z18(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.s10(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.e1a();
        var tmp_1;
        if (invalid || it === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.sections.testimonialCards.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_91(dispatchReceiver);
          $composer_1.k1a(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.a19();
        Box(null, null, null, tmp0, $composer_0, 3072, 7);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.sections.testimonialCards.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_3, 943920596, true, testimonialCards$lambda$lambda_0($testimonial2, $breakpoint, $selectedPage));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.z18(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.s10(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.e1a();
        var tmp_4;
        if (invalid_0 || it_0 === Companion_getInstance().r13_1) {
          // Inline function 'com.honger.ngel.sections.testimonialCards.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_92(dispatchReceiver_0);
          $composer_2.k1a(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_2.a19();
        Box(null, null, null, tmp0_0, $composer_0, 3072, 7);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_93($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function testimonialCards$lambda_0($breakpoint, $selectedPage, $$changed) {
    return function ($composer, $force) {
      testimonialCards($breakpoint, $selectedPage, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function testimonialNavigation$lambda$lambda($onNavigate, $index) {
    return function (it) {
      $onNavigate($index);
      return Unit_instance;
    };
  }
  function testimonialNavigation$lambda($selectedPage, $onNavigate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.u18()) {
        // Inline function 'kotlin.repeat' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < 3)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'com.honger.ngel.sections.testimonialNavigation.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_0 = backgroundColor(borderRadius(size(cursor(margin_0(Companion_instance_0, VOID, get_px(10)), Companion_instance_9.y2j()), get_px(12)), get_px(50)), $selectedPage === index ? Theme_Primary_getInstance().p3d_1 : Theme_LightGray_getInstance().p3d_1);
            $composer_0.z18(818338156);
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid = !!($composer_0.s10($onNavigate) | $composer_0.x19(index));
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it = $composer_0.e1a();
            var tmp_1;
            if (invalid || it === Companion_getInstance().r13_1) {
              // Inline function 'com.honger.ngel.sections.testimonialNavigation.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var value = testimonialNavigation$lambda$lambda($onNavigate, index);
              $composer_0.k1a(value);
              tmp_1 = value;
            } else {
              tmp_1 = it;
            }
            var tmp_2 = tmp_1;
            var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
            $composer_0.a19();
            var tmp_3 = onClick(tmp_0, tmp0_group);
            Box(tmp_3, null, null, null, $composer_0, 8, 14);
          }
           while (inductionVariable < 3);
        tmp = Unit_instance;
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_94($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function testimonialNavigation$lambda_0($selectedPage, $onNavigate, $$changed) {
    return function ($composer, $force) {
      testimonialNavigation($selectedPage, $onNavigate, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function get_AboutImageStyle() {
    _init_properties_AboutImageStyle_kt__1fxtxt();
    return AboutImageStyle;
  }
  var AboutImageStyle;
  function get_AboutTextStyle() {
    _init_properties_AboutImageStyle_kt__1fxtxt();
    return AboutTextStyle;
  }
  var AboutTextStyle;
  function AboutImageStyle$lambda($this$CssStyle) {
    _init_properties_AboutImageStyle_kt__1fxtxt();
    $this$CssStyle.m2y(AboutImageStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.r2x(AboutImageStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function AboutImageStyle$lambda$lambda() {
    _init_properties_AboutImageStyle_kt__1fxtxt();
    var tmp = Companion_instance_0;
    return transition(rotate(borderRadius(styleModifier(tmp, AboutImageStyle$lambda$lambda$lambda), get_px(0)), get_deg(0)), [new CSSTransition(Companion_instance_13.h2n(), get_ms(200))]);
  }
  function AboutImageStyle$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_AboutImageStyle_kt__1fxtxt();
    filter($this$styleModifier, AboutImageStyle$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function AboutImageStyle$lambda$lambda$lambda$lambda($this$filter) {
    _init_properties_AboutImageStyle_kt__1fxtxt();
    $this$filter.w2f(get_percent(100));
    return Unit_instance;
  }
  function AboutImageStyle$lambda$lambda_0() {
    _init_properties_AboutImageStyle_kt__1fxtxt();
    var tmp = Companion_instance_0;
    return rotate(borderRadius(styleModifier(tmp, AboutImageStyle$lambda$lambda$lambda_0), get_px(100)), get_deg(10));
  }
  function AboutImageStyle$lambda$lambda$lambda_0($this$styleModifier) {
    _init_properties_AboutImageStyle_kt__1fxtxt();
    filter($this$styleModifier, AboutImageStyle$lambda$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function AboutImageStyle$lambda$lambda$lambda$lambda_0($this$filter) {
    _init_properties_AboutImageStyle_kt__1fxtxt();
    $this$filter.w2f(get_percent(0));
    return Unit_instance;
  }
  function AboutTextStyle$lambda($this$CssStyle) {
    _init_properties_AboutImageStyle_kt__1fxtxt();
    $this$CssStyle.m2y(AboutTextStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.r2x(AboutTextStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function AboutTextStyle$lambda$lambda() {
    _init_properties_AboutImageStyle_kt__1fxtxt();
    return transition(opacity(Companion_instance_0, get_percent(50)), [CSSTransition_init_$Create$('opacity', get_ms(200))]);
  }
  function AboutTextStyle$lambda$lambda_0() {
    _init_properties_AboutImageStyle_kt__1fxtxt();
    return opacity(Companion_instance_0, get_percent(100));
  }
  var properties_initialized_AboutImageStyle_kt_kwlagd;
  function _init_properties_AboutImageStyle_kt__1fxtxt() {
    if (!properties_initialized_AboutImageStyle_kt_kwlagd) {
      properties_initialized_AboutImageStyle_kt_kwlagd = true;
      AboutImageStyle = CssStyle(VOID, AboutImageStyle$lambda);
      AboutTextStyle = CssStyle(VOID, AboutTextStyle$lambda);
    }
  }
  function get_InputStyle() {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    return InputStyle;
  }
  var InputStyle;
  function InputStyle$lambda($this$CssStyle) {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    $this$CssStyle.m2y(InputStyle$lambda$lambda);
    var tmp = get_focus($this$CssStyle);
    tmp.r2x(InputStyle$lambda$lambda_0);
    var tmp_0 = get_hover($this$CssStyle);
    tmp_0.r2x(InputStyle$lambda$lambda_1);
    return Unit_instance;
  }
  function InputStyle$lambda$lambda() {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    var tmp = Companion_instance_0;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border(tmp, tmp_0, 'solid', Theme_LightGray_getInstance().p3d_1), [CSSTransition_init_$Create$('border', get_ms(200))]);
  }
  function InputStyle$lambda$lambda_0() {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    var tmp = Companion_instance_0;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Theme_Primary_getInstance().p3d_1);
  }
  function InputStyle$lambda$lambda_1() {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    var tmp = Companion_instance_0;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Theme_Primary_getInstance().p3d_1);
  }
  var properties_initialized_ContactSectionStyle_kt_8orhq4;
  function _init_properties_ContactSectionStyle_kt__ofhc2i() {
    if (!properties_initialized_ContactSectionStyle_kt_8orhq4) {
      properties_initialized_ContactSectionStyle_kt_8orhq4 = true;
      InputStyle = CssStyle(VOID, InputStyle$lambda);
    }
  }
  function get_NavigationStyle() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return NavigationStyle$delegate.o2m(null, NavigationStyle$factory());
  }
  var NavigationStyle$delegate;
  function get_LogoStyle() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return LogoStyle$delegate.o2m(null, LogoStyle$factory());
  }
  var LogoStyle$delegate;
  function get_SocialLinkStyle() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return SocialLinkStyle$delegate.o2m(null, SocialLinkStyle$factory());
  }
  var SocialLinkStyle$delegate;
  function get_MainButtonStyle() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return MainButtonStyle$delegate.o2m(null, MainButtonStyle$factory());
  }
  var MainButtonStyle$delegate;
  function get_MainImageStyle() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return MainImageStyle$delegate.o2m(null, MainImageStyle$factory());
  }
  var MainImageStyle$delegate;
  function NavigationStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    $this$ComponentStyle.m2y(NavigationStyle$delegate$lambda$lambda);
    var tmp = get_anyLink($this$ComponentStyle);
    tmp.r2x(NavigationStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_hover($this$ComponentStyle);
    tmp_0.r2x(NavigationStyle$delegate$lambda$lambda_1);
    return Unit_instance;
  }
  function NavigationStyle$delegate$lambda$lambda() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return transition(color(Companion_instance_0, Theme_Secondary_getInstance().p3d_1), [CSSTransition_init_$Create$('color', get_ms(200))]);
  }
  function NavigationStyle$delegate$lambda$lambda_0() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return color(Companion_instance_0, Theme_Secondary_getInstance().p3d_1);
  }
  function NavigationStyle$delegate$lambda$lambda_1() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return color(Companion_instance_0, Theme_Primary_getInstance().p3d_1);
  }
  function LogoStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    $this$ComponentStyle.m2y(LogoStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle);
    tmp.r2x(LogoStyle$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function LogoStyle$delegate$lambda$lambda() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    var tmp = Companion_instance_0;
    return transition(transform(tmp, LogoStyle$delegate$lambda$lambda$lambda), [CSSTransition_init_$Create$('transform', get_ms(200))]);
  }
  function LogoStyle$delegate$lambda$lambda$lambda($this$transform) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    $this$transform.z2f(get_deg(0));
    return Unit_instance;
  }
  function LogoStyle$delegate$lambda$lambda_0() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    var tmp = Companion_instance_0;
    return transform(tmp, LogoStyle$delegate$lambda$lambda$lambda_0);
  }
  function LogoStyle$delegate$lambda$lambda$lambda_0($this$transform) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    $this$transform.z2f(get_deg(-10));
    return Unit_instance;
  }
  function SocialLinkStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    $this$ComponentStyle.m2y(SocialLinkStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle);
    tmp.r2x(SocialLinkStyle$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function SocialLinkStyle$delegate$lambda$lambda() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return transition(color(Companion_instance_0, Theme_Gray_getInstance().p3d_1), [CSSTransition_init_$Create$('color', get_ms(200))]);
  }
  function SocialLinkStyle$delegate$lambda$lambda_0() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return color(Companion_instance_0, Theme_Primary_getInstance().p3d_1);
  }
  function MainButtonStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    $this$ComponentStyle.m2y(MainButtonStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle);
    tmp.r2x(MainButtonStyle$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function MainButtonStyle$delegate$lambda$lambda() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return transition(width(Companion_instance_0, get_px(100)), [CSSTransition_init_$Create$('width', get_ms(200))]);
  }
  function MainButtonStyle$delegate$lambda$lambda_0() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return width(Companion_instance_0, get_px(120));
  }
  function MainImageStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    $this$ComponentStyle.m2y(MainImageStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle);
    tmp.r2x(MainImageStyle$delegate$lambda$lambda_0);
    return Unit_instance;
  }
  function MainImageStyle$delegate$lambda$lambda() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    var tmp = Companion_instance_0;
    return transition(styleModifier(tmp, MainImageStyle$delegate$lambda$lambda$lambda), [CSSTransition_init_$Create$('filter', get_ms(200))]);
  }
  function MainImageStyle$delegate$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    filter($this$styleModifier, MainImageStyle$delegate$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function MainImageStyle$delegate$lambda$lambda$lambda$lambda($this$filter) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    $this$filter.w2f(get_percent(100));
    return Unit_instance;
  }
  function MainImageStyle$delegate$lambda$lambda_0() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    var tmp = Companion_instance_0;
    return styleModifier(tmp, MainImageStyle$delegate$lambda$lambda$lambda_0);
  }
  function MainImageStyle$delegate$lambda$lambda$lambda_0($this$styleModifier) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    filter($this$styleModifier, MainImageStyle$delegate$lambda$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function MainImageStyle$delegate$lambda$lambda$lambda$lambda_0($this$filter) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    $this$filter.w2f(get_percent(0));
    return Unit_instance;
  }
  function NavigationStyle$factory() {
    return getPropertyCallableRef('NavigationStyle', 0, KProperty0, function () {
      return get_NavigationStyle();
    }, null);
  }
  function LogoStyle$factory() {
    return getPropertyCallableRef('LogoStyle', 0, KProperty0, function () {
      return get_LogoStyle();
    }, null);
  }
  function SocialLinkStyle$factory() {
    return getPropertyCallableRef('SocialLinkStyle', 0, KProperty0, function () {
      return get_SocialLinkStyle();
    }, null);
  }
  function MainButtonStyle$factory() {
    return getPropertyCallableRef('MainButtonStyle', 0, KProperty0, function () {
      return get_MainButtonStyle();
    }, null);
  }
  function MainImageStyle$factory() {
    return getPropertyCallableRef('MainImageStyle', 0, KProperty0, function () {
      return get_MainImageStyle();
    }, null);
  }
  var properties_initialized_MainSecionStyle_kt_qzei5t;
  function _init_properties_MainSecionStyle_kt__8jhcbz() {
    if (!properties_initialized_MainSecionStyle_kt_qzei5t) {
      properties_initialized_MainSecionStyle_kt_qzei5t = true;
      NavigationStyle$delegate = ComponentStyle(VOID, VOID, NavigationStyle$delegate$lambda);
      LogoStyle$delegate = ComponentStyle(VOID, VOID, LogoStyle$delegate$lambda);
      SocialLinkStyle$delegate = ComponentStyle(VOID, VOID, SocialLinkStyle$delegate$lambda);
      MainButtonStyle$delegate = ComponentStyle(VOID, VOID, MainButtonStyle$delegate$lambda);
      MainImageStyle$delegate = ComponentStyle(VOID, VOID, MainImageStyle$delegate$lambda);
    }
  }
  function get_PortfolioSectionStyle() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return PortfolioSectionStyle;
  }
  var PortfolioSectionStyle;
  function get_PortfolioArrowIconStyle() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return PortfolioArrowIconStyle;
  }
  var PortfolioArrowIconStyle;
  function PortfolioSectionStyle$lambda($this$CssStyle) {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    $this$CssStyle.c2z(' > #columnParent > #boxParent > #greenOverlay', PortfolioSectionStyle$lambda$lambda);
    $this$CssStyle.c2z(':hover > #columnParent > #boxParent > #greenOverlay', PortfolioSectionStyle$lambda$lambda_0);
    $this$CssStyle.c2z(' > #columnParent > #boxParent > #greenOverlay > #linkIcon', PortfolioSectionStyle$lambda$lambda_1);
    $this$CssStyle.c2z(':hover > #columnParent > #boxParent > #greenOverlay > #linkIcon', PortfolioSectionStyle$lambda$lambda_2);
    $this$CssStyle.c2z(' > #columnParent > #portfolioTitle', PortfolioSectionStyle$lambda$lambda_3);
    $this$CssStyle.c2z(':hover > #columnParent > #portfolioTitle', PortfolioSectionStyle$lambda$lambda_4);
    $this$CssStyle.c2z(' > #columnParent > #portfolioDesc', PortfolioSectionStyle$lambda$lambda_5);
    $this$CssStyle.c2z(':hover > #columnParent > #portfolioDesc', PortfolioSectionStyle$lambda$lambda_6);
    return Unit_instance;
  }
  function PortfolioSectionStyle$lambda$lambda() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return transition(width(Companion_instance_0, get_px(0)), [CSSTransition_init_$Create$('width', get_ms(500))]);
  }
  function PortfolioSectionStyle$lambda$lambda_0() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return width(Companion_instance_0, get_px(300));
  }
  function PortfolioSectionStyle$lambda$lambda_1() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return visibility(Companion_instance_0, Companion_instance_12.u2l());
  }
  function PortfolioSectionStyle$lambda$lambda_2() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return visibility(Companion_instance_0, Companion_instance_12.j2n());
  }
  function PortfolioSectionStyle$lambda$lambda_3() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return transition(translateX(color(Companion_instance_0, Theme_Secondary_getInstance().p3d_1), get_percent(0)), [CSSTransition_init_$Create$('color', get_ms(200)), CSSTransition_init_$Create$('translate', get_ms(200))]);
  }
  function PortfolioSectionStyle$lambda$lambda_4() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return translateX(color(Companion_instance_0, Theme_Primary_getInstance().p3d_1), get_percent(5));
  }
  function PortfolioSectionStyle$lambda$lambda_5() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return transition(translateX(Companion_instance_0, get_percent(0)), [CSSTransition_init_$Create$('translate', get_ms(200))]);
  }
  function PortfolioSectionStyle$lambda$lambda_6() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return translateX(Companion_instance_0, get_percent(5));
  }
  function PortfolioArrowIconStyle$lambda($this$CssStyle) {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    $this$CssStyle.m2y(PortfolioArrowIconStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.r2x(PortfolioArrowIconStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function PortfolioArrowIconStyle$lambda$lambda() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return transition(color(Companion_instance_0, Theme_Gray_getInstance().p3d_1), [CSSTransition_init_$Create$('color', get_ms(200))]);
  }
  function PortfolioArrowIconStyle$lambda$lambda_0() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return color(Companion_instance_0, Theme_Primary_getInstance().p3d_1);
  }
  var properties_initialized_PortfolioSectionStyle_kt_w1y7dw;
  function _init_properties_PortfolioSectionStyle_kt__ltxgaq() {
    if (!properties_initialized_PortfolioSectionStyle_kt_w1y7dw) {
      properties_initialized_PortfolioSectionStyle_kt_w1y7dw = true;
      PortfolioSectionStyle = CssStyle(VOID, PortfolioSectionStyle$lambda);
      PortfolioArrowIconStyle = CssStyle(VOID, PortfolioArrowIconStyle$lambda);
    }
  }
  function get_ServiceCardStyle() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return ServiceCardStyle;
  }
  var ServiceCardStyle;
  function ServiceCardStyle$lambda($this$CssStyle) {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    $this$CssStyle.m2y(ServiceCardStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.r2x(ServiceCardStyle$lambda$lambda_0);
    $this$CssStyle.c2z(' > #iconBox', ServiceCardStyle$lambda$lambda_1);
    $this$CssStyle.c2z(':hover > #iconBox', ServiceCardStyle$lambda$lambda_2);
    $this$CssStyle.c2z(' > p', ServiceCardStyle$lambda$lambda_3);
    $this$CssStyle.c2z(':hover > p', ServiceCardStyle$lambda$lambda_4);
    return Unit_instance;
  }
  function ServiceCardStyle$lambda$lambda() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    var tmp = Companion_instance_0;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(backgroundColor(border(tmp, tmp_0, 'solid', Theme_LighterGray_getInstance().p3d_1), Colors_instance.p2t()), [CSSTransition_init_$Create$('border', get_ms(200)), CSSTransition_init_$Create$('background', get_ms(200))]);
  }
  function ServiceCardStyle$lambda$lambda_0() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    var tmp = Companion_instance_0;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return backgroundColor(border(tmp, tmp_0, 'solid', Theme_Primary_getInstance().p3d_1), Theme_Primary_getInstance().p3d_1);
  }
  function ServiceCardStyle$lambda$lambda_1() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return transition(backgroundColor(Companion_instance_0, Colors_instance.d2t()), [CSSTransition_init_$Create$('background', get_ms(200))]);
  }
  function ServiceCardStyle$lambda$lambda_2() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return backgroundColor(Companion_instance_0, Colors_instance.p2t());
  }
  function ServiceCardStyle$lambda$lambda_3() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return transition(color(Companion_instance_0, Theme_Secondary_getInstance().p3d_1), [CSSTransition_init_$Create$('color', get_ms(200))]);
  }
  function ServiceCardStyle$lambda$lambda_4() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return color(Companion_instance_0, Colors_instance.p2t());
  }
  var properties_initialized_ServiceSectionStyle_kt_3weqi9;
  function _init_properties_ServiceSectionStyle_kt__us8nvz() {
    if (!properties_initialized_ServiceSectionStyle_kt_3weqi9) {
      properties_initialized_ServiceSectionStyle_kt_3weqi9 = true;
      ServiceCardStyle = CssStyle(VOID, ServiceCardStyle$lambda);
    }
  }
  var com_honger_ngel_utils_Constants$stable;
  var com_honger_ngel_utils_Res_Icon$stable;
  var com_honger_ngel_utils_Res_Image$stable;
  var com_honger_ngel_utils_Res$stable;
  function observeViewportEntered(sectionId, distanceFromTop, onViewportEntered, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(130582431);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.s10(sectionId) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.w19(distanceFromTop) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.u19(onViewportEntered) ? 256 : 128);
    if (!(($dirty & 731) === 146) || !$composer_0.u18()) {
      $composer_0.z18(302517678);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.e1a();
      var tmp;
      if (false || it === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.utils.observeViewportEntered.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.k1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.a19();
      var viewportEntered$delegate = tmp0_group;
      $composer_0.z18(302519618);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.e1a();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().r13_1) {
        // Inline function 'com.honger.ngel.utils.observeViewportEntered.<anonymous>' call
        var value_0 = EventListener(observeViewportEntered$lambda_1(sectionId, distanceFromTop, viewportEntered$delegate));
        this_1.k1a(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.a19();
      var listener = tmp1_group;
      var tmp_3 = observeViewportEntered$lambda(viewportEntered$delegate);
      LaunchedEffect(tmp_3, observeViewportEntered$slambda_0(onViewportEntered, listener, viewportEntered$delegate, null), $composer_0, 64);
    } else {
      $composer_0.l13();
    }
    var tmp2_safe_receiver = $composer_0.t1a();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.t1f(observeViewportEntered$lambda_2(sectionId, distanceFromTop, onViewportEntered, $changed));
    }
  }
  function animatePercentage(percentage, delay, onUpdate, $completion) {
    delay = delay === VOID ? new Long(10, 0) : delay;
    var tmp = new $animatePercentageCOROUTINE$0(percentage, delay, onUpdate, $completion);
    tmp.w8_1 = Unit_instance;
    tmp.x8_1 = null;
    return tmp.c9();
  }
  function animateNumbers(number, delay, onUpdate, $completion) {
    delay = delay === VOID ? new Long(10, 0) : delay;
    var tmp = new $animateNumbersCOROUTINE$1(number, delay, onUpdate, $completion);
    tmp.w8_1 = Unit_instance;
    tmp.x8_1 = null;
    return tmp.c9();
  }
  function observeViewportEntered$lambda($viewportEntered$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $viewportEntered$delegate.w1();
  }
  function observeViewportEntered$lambda_0($viewportEntered$delegate, _set____db54di) {
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $viewportEntered$delegate.mr(_set____db54di);
    return Unit_instance;
  }
  function observeViewportEntered$lambda_1($sectionId, $distanceFromTop, $viewportEntered$delegate) {
    return function (it) {
      var tmp76_safe_receiver = document.getElementById($sectionId);
      var tmp77_safe_receiver = tmp76_safe_receiver == null ? null : tmp76_safe_receiver.getBoundingClientRect();
      var top = tmp77_safe_receiver == null ? null : tmp77_safe_receiver.top;
      var tmp;
      if (!(top == null) && top < $distanceFromTop) {
        observeViewportEntered$lambda_0($viewportEntered$delegate, true);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function observeViewportEntered$slambda($onViewportEntered, $listener, $viewportEntered$delegate, resultContinuation) {
    this.g3j_1 = $onViewportEntered;
    this.h3j_1 = $listener;
    this.i3j_1 = $viewportEntered$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(observeViewportEntered$slambda).j1h = function ($this$LaunchedEffect, $completion) {
    var tmp = this.k1h($this$LaunchedEffect, $completion);
    tmp.w8_1 = Unit_instance;
    tmp.x8_1 = null;
    return tmp.c9();
  };
  protoOf(observeViewportEntered$slambda).z9 = function (p1, $completion) {
    return this.j1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(observeViewportEntered$slambda).c9 = function () {
    var suspendResult = this.w8_1;
    $sm: do
      try {
        var tmp = this.u8_1;
        if (tmp === 0) {
          this.v8_1 = 1;
          if (observeViewportEntered$lambda(this.i3j_1)) {
            this.g3j_1();
            window.removeEventListener('scroll', this.h3j_1);
          } else {
            window.addEventListener('scroll', this.h3j_1);
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.x8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(observeViewportEntered$slambda).k1h = function ($this$LaunchedEffect, completion) {
    var i = new observeViewportEntered$slambda(this.g3j_1, this.h3j_1, this.i3j_1, completion);
    i.j3j_1 = $this$LaunchedEffect;
    return i;
  };
  function observeViewportEntered$slambda_0($onViewportEntered, $listener, $viewportEntered$delegate, resultContinuation) {
    var i = new observeViewportEntered$slambda($onViewportEntered, $listener, $viewportEntered$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.j1h($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function observeViewportEntered$lambda_2($sectionId, $distanceFromTop, $onViewportEntered, $$changed) {
    return function ($composer, $force) {
      observeViewportEntered($sectionId, $distanceFromTop, $onViewportEntered, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function $animatePercentageCOROUTINE$0(percentage, delay, onUpdate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c3i_1 = percentage;
    this.d3i_1 = delay;
    this.e3i_1 = onUpdate;
  }
  protoOf($animatePercentageCOROUTINE$0).c9 = function () {
    var suspendResult = this.w8_1;
    $sm: do
      try {
        var tmp = this.u8_1;
        switch (tmp) {
          case 0:
            this.v8_1 = 4;
            var tmp_0 = this;
            tmp_0.f3i_1 = numberRangeToNumber(0, this.c3i_1);
            this.g3i_1 = this.f3i_1.j();
            this.u8_1 = 1;
            continue $sm;
          case 1:
            if (!this.g3i_1.k()) {
              this.u8_1 = 3;
              continue $sm;
            }

            this.h3i_1 = this.g3i_1.l();
            var tmp_1 = this;
            tmp_1.i3i_1 = this.h3i_1;
            this.u8_1 = 2;
            suspendResult = delay(this.d3i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.e3i_1(this.i3i_1);
            this.u8_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.x8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.v8_1 === 4) {
          throw e;
        } else {
          this.u8_1 = this.v8_1;
          this.x8_1 = e;
        }
      }
     while (true);
  };
  function $animateNumbersCOROUTINE$1(number, delay, onUpdate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r3i_1 = number;
    this.s3i_1 = delay;
    this.t3i_1 = onUpdate;
  }
  protoOf($animateNumbersCOROUTINE$1).c9 = function () {
    var suspendResult = this.w8_1;
    $sm: do
      try {
        var tmp = this.u8_1;
        switch (tmp) {
          case 0:
            this.v8_1 = 4;
            var tmp_0 = this;
            tmp_0.u3i_1 = numberRangeToNumber(0, this.r3i_1);
            this.v3i_1 = this.u3i_1.j();
            this.u8_1 = 1;
            continue $sm;
          case 1:
            if (!this.v3i_1.k()) {
              this.u8_1 = 3;
              continue $sm;
            }

            this.w3i_1 = this.v3i_1.l();
            var tmp_1 = this;
            tmp_1.x3i_1 = this.w3i_1;
            this.u8_1 = 2;
            suspendResult = delay(this.s3i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.t3i_1(this.x3i_1);
            this.u8_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.x8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.v8_1 === 4) {
          throw e;
        } else {
          this.u8_1 = this.v8_1;
          this.x8_1 = e;
        }
      }
     while (true);
  };
  //region block: init
  com_honger_ngel_utils_Constants$stable = 0;
  com_honger_ngel_utils_Res_Icon$stable = 0;
  com_honger_ngel_utils_Res_Image$stable = 0;
  com_honger_ngel_utils_Res$stable = 0;
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=ngel.js.map
