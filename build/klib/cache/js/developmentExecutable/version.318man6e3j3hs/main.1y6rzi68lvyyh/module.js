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
  var ensureNotNull = kotlin_kotlin.$_$.xf;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.k;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var removePrefix = kotlin_kotlin.$_$.sd;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var AppGlobals_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.j;
  var to = kotlin_kotlin.$_$.ig;
  var mapOf = kotlin_kotlin.$_$.x7;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var Unit_getInstance = kotlin_kotlin.$_$.m4;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var THROW_CCE = kotlin_kotlin.$_$.ef;
  var renderWithDeferred = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var protoOf = kotlin_kotlin.$_$.cc;
  var initMetadataForObject = kotlin_kotlin.$_$.eb;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var hasClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var toString = kotlin_kotlin.$_$.hg;
  var toInt = kotlin_kotlin.$_$.fe;
  var charSequenceLength = kotlin_kotlin.$_$.oa;
  var toBoolean = kotlin_kotlin.$_$.de;
  var isBlank = kotlin_kotlin.$_$.md;
  var VOID = kotlin_kotlin.$_$.f;
  var removeSuffix = kotlin_kotlin.$_$.td;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.e;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.i5;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v3;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p3;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.w5;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.y4;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var P = kotlin_org_jetbrains_compose_html_html_core.$_$.s5;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.w4;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var rememberBreakpoint = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var zIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var Bottom_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var End_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var IconSize_LG_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.j;
  var FaArrowUp = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.c;
  var KMutableProperty0 = kotlin_kotlin.$_$.oc;
  var THROW_ISE = kotlin_kotlin.$_$.gf;
  var getLocalDelegateReference = kotlin_kotlin.$_$.ua;
  var CoroutineImpl = kotlin_kotlin.$_$.ba;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var isInterface = kotlin_kotlin.$_$.ob;
  var initMetadataForLambda = kotlin_kotlin.$_$.db;
  var toModifier_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d3;
  var visibility = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s1;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var SuspendFunction1 = kotlin_kotlin.$_$.ca;
  var attrsModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var Form = kotlin_org_jetbrains_compose_html_html_core.$_$.o5;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var Label = kotlin_org_jetbrains_compose_html_html_core.$_$.r5;
  var toModifier_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.m5;
  var Text_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var id = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r1;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var Input = kotlin_org_jetbrains_compose_html_html_core.$_$.q5;
  var Email_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var TextArea = kotlin_org_jetbrains_compose_html_html_core.$_$.v5;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.n5;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var numColumns = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var SimpleGrid = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var fillMaxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.s4;
  var times = kotlin_org_jetbrains_compose_html_html_core.$_$.d5;
  var CSSTransition_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j2;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var Center_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var SpaceBetween_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var End_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var copyToArray = kotlin_kotlin.$_$.x6;
  var take = kotlin_kotlin.$_$.y8;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var Companion_getInstance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y2;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var Link = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.c;
  var IconSize_XL_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.k;
  var FaBars = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.d;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.v3;
  var Long = kotlin_kotlin.$_$.ye;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.m9;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var FaXmark = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.i;
  var OpenLinkStrategy_IN_PLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var Companion_getInstance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v2;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var Companion_getInstance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w2;
  var scrollBehavior = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var OpenLinkStrategy_IN_NEW_TAB_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var Link_0 = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.d;
  var Companion_getInstance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u2;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var Image_0 = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var Companion_getInstance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f3;
  var width_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var Start_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s3;
  var equals = kotlin_kotlin.$_$.ra;
  var Companion_getInstance_13 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x2;
  var CenterHorizontally_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var margin_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var borderRadius_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var times_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.e5;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var FaLinkedin = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.g;
  var FaFacebook = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.e;
  var FaTwitter = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.h;
  var FaInstagram = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.f;
  var THROW_IAE = kotlin_kotlin.$_$.ff;
  var enumEntries = kotlin_kotlin.$_$.fa;
  var Enum = kotlin_kotlin.$_$.te;
  var initMetadataForClass = kotlin_kotlin.$_$.za;
  var rgb = kotlin_org_jetbrains_compose_html_html_core.$_$.z4;
  var Top_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var numberToInt = kotlin_kotlin.$_$.ac;
  var Companion_getInstance_14 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p2;
  var fontStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var get_deg = kotlin_org_jetbrains_compose_html_html_core.$_$.v3;
  var transform = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var TopCenter_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t3;
  var Breakpoint_LG_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var FaArrowLeft = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.a;
  var FaArrowRight = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.b;
  var listOf = kotlin_kotlin.$_$.v7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ag;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var rotate = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var Companion_getInstance_15 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a3;
  var CSSTransition = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var filter = kotlin_org_jetbrains_compose_html_html_core.$_$.x3;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var get_focus = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var get_anyLink = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var KProperty0 = kotlin_kotlin.$_$.qc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.wa;
  var ComponentStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var EventListener = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.e;
  var numberRangeToNumber = kotlin_kotlin.$_$.xb;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.bb;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForObject(ComposableSingletons$BackToTopBottomKt, 'ComposableSingletons$BackToTopBottomKt');
  initMetadataForLambda(backToTopBottom$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(ComposableSingletons$ContactFormKt, 'ComposableSingletons$ContactFormKt');
  initMetadataForObject(ComposableSingletons$HeaderKt, 'ComposableSingletons$HeaderKt');
  initMetadataForLambda(overflowMenu$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(overflowMenu$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(overflowMenu$lambda$lambda$lambda$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(overflowMenu$lambda$lambda$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(ComposableSingletons$PortfolioCardKt, 'ComposableSingletons$PortfolioCardKt');
  initMetadataForObject(ComposableSingletons$RatingBarKt, 'ComposableSingletons$RatingBarKt');
  initMetadataForLambda(sectionTitle$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(ComposableSingletons$SocailBarKt, 'ComposableSingletons$SocailBarKt');
  initMetadataForClass(Achievement, 'Achievement', VOID, Enum);
  initMetadataForClass(Experience, 'Experience', VOID, Enum);
  initMetadataForClass(Portfolio, 'Portfolio', VOID, Enum);
  initMetadataForClass(Section, 'Section', VOID, Enum);
  initMetadataForClass(Service, 'Service', VOID, Enum);
  initMetadataForClass(Skill, 'Skill', VOID, Enum);
  initMetadataForClass(Testimonial, 'Testimonial', VOID, Enum);
  initMetadataForClass(Theme, 'Theme', VOID, Enum);
  initMetadataForObject(ComposableSingletons$AboutSectionKt, 'ComposableSingletons$AboutSectionKt');
  initMetadataForLambda(aboutMe$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(achievementsContent$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(ComposableSingletons$ContactSectionKt, 'ComposableSingletons$ContactSectionKt');
  initMetadataForLambda(contactContent$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(ComposableSingletons$ExperienceSectionKt, 'ComposableSingletons$ExperienceSectionKt');
  initMetadataForObject(ComposableSingletons$FooterSectionKt, 'ComposableSingletons$FooterSectionKt');
  initMetadataForObject(ComposableSingletons$MainSectionKt, 'ComposableSingletons$MainSectionKt');
  initMetadataForObject(ComposableSingletons$PortfolioSectionKt, 'ComposableSingletons$PortfolioSectionKt');
  initMetadataForObject(ComposableSingletons$ServiceSectionKt, 'ComposableSingletons$ServiceSectionKt');
  initMetadataForObject(ComposableSingletons$TestimonialSectionKt, 'ComposableSingletons$TestimonialSectionKt');
  initMetadataForObject(Constants, 'Constants');
  initMetadataForObject(Icon, 'Icon');
  initMetadataForObject(Image_1, 'Image');
  initMetadataForObject(Res, 'Res');
  initMetadataForLambda(observeViewportEntered$slambda, CoroutineImpl, [CoroutineImpl], [1]);
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
    get_api(window).set_logOnError_wi584t_k$(true);
    Companion_getInstance().set_wjk6wo_k$('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.addRouteInterceptor_kgq7h7_k$(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.navigateTo$default_onbd51_k$(removePrefix(window.location.href, window.location.origin), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    AppGlobals_getInstance().initialize_8ufbf0_k$(mapOf(to('title', 'LandingPage')));
    renderComposable('root', ComposableLambda$invoke$ref_2(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      homePage($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -471532736, true, ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75(it));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'ComposableSingletons$MainKt.lambda-2.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it_0;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      renderWithDeferred(tmp0, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_2$lambda$lambda_8o4o75($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        tmp = $it($composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-994802423, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-527747544, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_4b504g_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_2_bldq01_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
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
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_0($lastVersion, $status, $shouldReload) {
    return function (evt) {
      var version = toInt(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp;
      if ($lastVersion._v == null) {
        $lastVersion._v = version;
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($lastVersion._v === version)) {
        $lastVersion._v = version;
        var tmp_1;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = $status.className;
        if (charSequenceLength(this_0) > 0) {
          $shouldReload._v = true;
          tmp_1 = Unit_getInstance();
        } else {
          forceReloadNow();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      }
      return Unit_getInstance();
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
        tmp_2 = Unit_getInstance();
      } else {
        var tmp_3;
        if ($status.className === 'fade-in') {
          $status.className = 'fade-out';
          tmp_3 = Unit_getInstance();
        }
        tmp_2 = tmp_3;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_2($eventSource) {
    return function (it) {
      $eventSource.close();
      return Unit_getInstance();
    };
  }
  function main$lambda(ctx) {
    ctx.get_router_j3zccy_k$().register$default_rn243d_k$('/', VOID, ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
    return Unit_getInstance();
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.set_path_tgrnnc_k$(removeSuffix(removeSuffix($this$addRouteInterceptor.get_path_wos8ry_k$(), '.html'), '.htm'));
    return Unit_getInstance();
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('about-image', get_AboutImageStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('about-text', get_AboutTextStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('back-to-top-button', get_BackToTopButtonStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('input', get_InputStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('portfolio-section', get_PortfolioSectionStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('portfolio-arrow-icon', get_PortfolioArrowIconStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('service-card', get_ServiceCardStyle());
    ctx.get_theme_iz24rk_k$().registerStyle_4iezkn_k$(get_NavigationStyle());
    ctx.get_theme_iz24rk_k$().registerStyle_4iezkn_k$(get_LogoStyle());
    ctx.get_theme_iz24rk_k$().registerStyle_4iezkn_k$(get_SocialLinkStyle());
    ctx.get_theme_iz24rk_k$().registerStyle_4iezkn_k$(get_MainButtonStyle());
    ctx.get_theme_iz24rk_k$().registerStyle_4iezkn_k$(get_MainImageStyle());
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        $router.renderActivePage_fc13h0_k$(ComposableSingletons$MainKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 70, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
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
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      appEntry(tmp0, $composer_0, 6);
      return Unit_getInstance();
    };
  }
  function mainWrapper() {
    main();
  }
  function appEntry(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-309455147);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.appEntry.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 1303471060, true, appEntry$lambda(content));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.appEntry.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      SilkApp(tmp0, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(appEntry$lambda_0(content, $changed));
    }
  }
  function appEntry$lambda$lambda($content) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function appEntry$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = minHeight(toModifier(get_SmoothColorStyle(), $composer_0, 0), get_vh(100));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.appEntry.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -1628355974, true, appEntry$lambda$lambda($content));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.appEntry.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Surface(tmp_0, null, null, null, null, tmp0, $composer_0, 196616, 30);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function appEntry$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      appEntry($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function achievementCard(modifier, animatedNumber, achievement, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-390580831);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(animatedNumber) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(achievement) ? 256 : 128);
    if (!(($default & 1) === 1) || (!(($dirty & 731) === 146) || !$composer_0.get_skipping_3owdve_k$())) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      var tmp = modifier_0._v;
      var tmp_0 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.achievementCard.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -276533634, true, achievementCard$lambda(achievement, animatedNumber));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.achievementCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_9(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Row(tmp, null, tmp_0, null, tmp0, $composer_0, 25096, 10);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(achievementCard$lambda_0(modifier_0, animatedNumber, achievement, $changed, $default));
    }
  }
  function achievementCard$lambda$lambda$lambda($achievement, $animatedNumber) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($achievement.equals(Achievement_Completed_getInstance()) ? '' + $animatedNumber + '+' : '' + $animatedNumber, $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function achievementCard$lambda$lambda$lambda_0($achievement) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($achievement.get_description_emjre5_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function achievementCard$lambda$lambda($achievement, $animatedNumber) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(Companion_getInstance_1()), get_px(0)), ['Roboto']), get_px(30)), Companion_getInstance_2().get_Bolder_3mclb9_k$()), Theme_Primary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.achievementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 848462537, true, achievementCard$lambda$lambda$lambda($achievement, $animatedNumber));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.achievementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_6(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        P(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_4 = toAttrs(opacity(color(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(Companion_getInstance_1()), get_px(0)), ['Roboto']), get_px(16)), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), get_percent(50)));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.achievementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_5, 1453722226, true, achievementCard$lambda$lambda$lambda_0($achievement));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.achievementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_7(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        P(tmp_4, tmp0_0, $composer_0, 48, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function achievementCard$lambda($achievement, $animatedNumber) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp0_modifier = margin_0(size(Companion_getInstance_1(), get_px(70)), VOID, get_px(20));
        var tmp1_src = $achievement.get_icon_wont8i_k$();
        Image(tmp1_src, tmp0_modifier, null, null, null, 'Achievement Icon', false, null, $composer_0, 196672, 220);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.achievementCard.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 1255489831, true, achievementCard$lambda$lambda($achievement, $animatedNumber));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.achievementCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_8(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Column(null, null, null, null, tmp0, $composer_0, 24576, 15);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function achievementCard$lambda_0($modifier, $animatedNumber, $achievement, $$changed, $$default) {
    return function ($composer, $force) {
      achievementCard($modifier._v, $animatedNumber, $achievement, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function backToTopBottom($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1390415206);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(468285089);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.backToTopBottom.<anonymous>' call
        var value = mutableStateOf(null);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var scroll$delegate = tmp0_group;
      $composer_0.startReplaceableGroup_ip860b_k$(468287113);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.backToTopBottom.<anonymous>' call
        var value_0 = backToTopBottom$slambda_0(scroll$delegate, null);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      LaunchedEffect(Unit_getInstance(), tmp1_group, $composer_0, 70);
      var tmp_3 = fillMaxSize(Companion_getInstance_1());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      Companion_getInstance_3();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_4 = zIndex(position(tmp_3, 'fixed'), 1);
      $composer_0.startReplaceableGroup_ip860b_k$(468296450);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.backToTopBottom.<anonymous>' call
        var value_1 = backToTopBottom$lambda_1;
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = it_1;
      }
      var tmp_6 = tmp_5;
      var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_7 = styleModifier(tmp_4, tmp2_group);
      var tmp_8 = Bottom_getInstance();
      var tmp_9 = End_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.backToTopBottom.<anonymous>' call
      var tmp_10 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_10, -1733682481, true, backToTopBottom$lambda_2(breakpoint, scroll$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_11;
      if (invalid || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.backToTopBottom.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_11(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_2);
        tmp_11 = value_2;
      } else {
        tmp_11 = it_2;
      }
      var tmp_12 = tmp_11;
      var tmp0 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column(tmp_7, tmp_8, tmp_9, null, tmp0, $composer_0, 25160, 8);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp3_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.updateScope_t8jcf_k$(backToTopBottom$lambda_3($changed));
    }
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$BackToTopBottomKt$lambda_1$lambda_u1vics($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      FaArrowUp(color(Companion_getInstance_1(), Colors_getInstance().get_White_ij46ow_k$()), IconSize_LG_getInstance(), $composer_0, 56, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$BackToTopBottomKt() {
    ComposableSingletons$BackToTopBottomKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(948565513, false, ComposableSingletons$BackToTopBottomKt$lambda_1$lambda_u1vics));
  }
  protoOf(ComposableSingletons$BackToTopBottomKt).get_lambda_1_4b504g_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$BackToTopBottomKt_instance;
  function ComposableSingletons$BackToTopBottomKt_getInstance() {
    if (ComposableSingletons$BackToTopBottomKt_instance == null)
      new ComposableSingletons$BackToTopBottomKt();
    return ComposableSingletons$BackToTopBottomKt_instance;
  }
  function backToTopBottom$lambda($scroll$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('scroll', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $scroll$delegate.get_value_j01efc_k$();
  }
  function backToTopBottom$lambda_0($scroll$delegate, _set____db54di) {
    getLocalDelegateReference('scroll', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $scroll$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function backToTopBottom$slambda$lambda($scroll$delegate) {
    return function (it) {
      var tmp2_safe_receiver = document.documentElement;
      backToTopBottom$lambda_0($scroll$delegate, tmp2_safe_receiver == null ? null : tmp2_safe_receiver.scrollTop);
      return Unit_getInstance();
    };
  }
  function backToTopBottom$slambda($scroll$delegate, resultContinuation) {
    this.$scroll$delegate_1 = $scroll$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(backToTopBottom$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(backToTopBottom$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(backToTopBottom$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp_0 = window;
          tmp_0.addEventListener('scroll', backToTopBottom$slambda$lambda(this.$scroll$delegate_1));
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(backToTopBottom$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new backToTopBottom$slambda(this.$scroll$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(backToTopBottom$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function backToTopBottom$slambda_0($scroll$delegate, resultContinuation) {
    var i = new backToTopBottom$slambda($scroll$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function backToTopBottom$lambda_1($this$styleModifier) {
    $this$styleModifier.property_wcrait_k$('pointer-events', 'none');
    return Unit_getInstance();
  }
  function backToTopBottom$lambda$lambda(it) {
    var tmp3_safe_receiver = document.documentElement;
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.scroll(0.0, 0.0);
    }
    return Unit_getInstance();
  }
  function backToTopBottom$lambda$lambda_0($this$styleModifier) {
    $this$styleModifier.property_wcrait_k$('pointer-events', 'auto');
    return Unit_getInstance();
  }
  function backToTopBottom$lambda_2($breakpoint, $scroll$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = cursor(backgroundColor(margin_0(borderRadius(visibility(size(toModifier_0(get_BackToTopButtonStyle(), $composer_0, 6), get_px(50)), !(backToTopBottom$lambda($scroll$delegate) == null) && ensureNotNull(backToTopBottom$lambda($scroll$delegate)) > 400.0 ? Companion_getInstance_4().get_Visible_yikvpz_k$() : Companion_getInstance_4().get_Hidden_viqel_k$()), get_percent(20)), VOID, $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) <= 0 ? get_px(30) : get_px(40), $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) <= 0 ? get_px(30) : get_px(40)), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), Companion_getInstance_5().get_Pointer_m64vg4_k$());
        $composer_0.startReplaceableGroup_ip860b_k$(1232742617);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.backToTopBottom.<anonymous>.<anonymous>.<anonymous>' call
          var value = backToTopBottom$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        var tmp_3 = onClick(tmp_0, tmp0_group);
        $composer_0.startReplaceableGroup_ip860b_k$(1232746505);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.backToTopBottom.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = backToTopBottom$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        var tmp_6 = styleModifier(tmp_3, tmp1_group);
        var tmp_7 = Center_getInstance();
        Box(tmp_6, tmp_7, null, ComposableSingletons$BackToTopBottomKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3144, 4);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function backToTopBottom$lambda_3($$changed) {
    return function ($composer, $force) {
      backToTopBottom($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function contactForm(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-335591189);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = Companion_getInstance_1();
      $composer_0.startReplaceableGroup_ip860b_k$(565339356);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.contactForm.<anonymous>' call
        var value = contactForm$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_2 = toAttrs(attrsModifier(tmp, tmp0_group));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.contactForm.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -905639630, true, contactForm$lambda_0(breakpoint));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.contactForm.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_23(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Form('https://formspree.io/f/xdknvqka', tmp_2, tmp0, $composer_0, 390, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(contactForm$lambda_1(breakpoint, $changed));
    }
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactFormKt$lambda_1$lambda_27lvxi($this$Label, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Name', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactFormKt$lambda_2$lambda_qm0l4p($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    var tmp4_attrs = toAttrs(classNames(margin_1(Companion_getInstance_1(), VOID, VOID, get_px(15)), ['form-label']));
    Label('inputName', tmp4_attrs, ComposableSingletons$ContactFormKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 390, 0);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactFormKt$lambda_3$lambda_flgzs8($this$Label, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Email', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactFormKt$lambda_4$lambda_d85h9z($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    var tmp5_attrs = toAttrs(margin_1(classNames(Companion_getInstance_1(), ['form-label']), VOID, VOID, get_px(15)));
    Label('inputEmail', tmp5_attrs, ComposableSingletons$ContactFormKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 390, 0);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactFormKt$lambda_5$lambda_szc3my($this$Label, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Message', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactFormKt$lambda_6$lambda_5pmkr($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    var tmp6_attrs = toAttrs(margin_1(classNames(Companion_getInstance_1(), ['form-label']), VOID, VOID, get_px(15)));
    Label('inputMessage', tmp6_attrs, ComposableSingletons$ContactFormKt_getInstance().lambda_5_r8sbbl_1, $composer_0, 390, 0);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactFormKt$lambda_7$lambda_snwuhg($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Submit', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactFormKt$lambda_8$lambda_djkqfh($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      Button(toAttrs(cursor(color(backgroundColor(borderRadius(border(height(toModifier_1(get_MainButtonStyle(), [], $composer_0, 72), get_px(50)), get_px(0)), get_px(5)), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), Colors_getInstance().get_White_ij46ow_k$()), Companion_getInstance_5().get_Pointer_m64vg4_k$())), ComposableSingletons$ContactFormKt_getInstance().lambda_7_r8sbbj_1, $composer_0, 48, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ContactFormKt() {
    ComposableSingletons$ContactFormKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-1493410702, false, ComposableSingletons$ContactFormKt$lambda_1$lambda_27lvxi));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-872356239, false, ComposableSingletons$ContactFormKt$lambda_2$lambda_qm0l4p));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(444420586, false, ComposableSingletons$ContactFormKt$lambda_3$lambda_flgzs8));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(277305385, false, ComposableSingletons$ContactFormKt$lambda_4$lambda_d85h9z));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(1843374188, false, ComposableSingletons$ContactFormKt$lambda_5$lambda_szc3my));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(1676258987, false, ComposableSingletons$ContactFormKt$lambda_6$lambda_5pmkr));
    var tmp_5 = this;
    tmp_5.lambda_7_r8sbbj_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(-1141899202, false, ComposableSingletons$ContactFormKt$lambda_7$lambda_snwuhg));
    var tmp_6 = this;
    tmp_6.lambda_8_r8sbbi_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(639669560, false, ComposableSingletons$ContactFormKt$lambda_8$lambda_djkqfh));
  }
  protoOf(ComposableSingletons$ContactFormKt).get_lambda_1_4b504g_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$ContactFormKt).get_lambda_2_bldq01_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$ContactFormKt).get_lambda_3_rhwg4i_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$ContactFormKt).get_lambda_4_rmovq5_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$ContactFormKt).get_lambda_5_bq65lo_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$ContactFormKt).get_lambda_6_46ckit_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
  protoOf(ComposableSingletons$ContactFormKt).get_lambda_7_k2vana_k$ = function () {
    return this.lambda_7_r8sbbj_1;
  };
  protoOf(ComposableSingletons$ContactFormKt).get_lambda_8_z1q17d_k$ = function () {
    return this.lambda_8_r8sbbi_1;
  };
  var ComposableSingletons$ContactFormKt_instance;
  function ComposableSingletons$ContactFormKt_getInstance() {
    if (ComposableSingletons$ContactFormKt_instance == null)
      new ComposableSingletons$ContactFormKt();
    return ComposableSingletons$ContactFormKt_instance;
  }
  function contactForm$lambda($this$attrsModifier) {
    $this$attrsModifier.attr_w68641_k$('method', 'POST');
    return Unit_getInstance();
  }
  function contactForm$lambda$lambda($this$attrsModifier) {
    $this$attrsModifier.attr_w68641_k$('placeholder', 'Full Name');
    $this$attrsModifier.attr_w68641_k$('name', 'name');
    $this$attrsModifier.attr_w68641_k$('required', 'true');
    return Unit_getInstance();
  }
  function contactForm$lambda$lambda$lambda($this$attrsModifier) {
    $this$attrsModifier.attr_w68641_k$('placeholder', 'Full Name');
    $this$attrsModifier.attr_w68641_k$('name', 'name');
    $this$attrsModifier.attr_w68641_k$('required', 'true');
    return Unit_getInstance();
  }
  function contactForm$lambda$lambda_0($breakpoint) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = Text_getInstance();
      var tmp_0 = fontSize(padding(boxShadow(backgroundColor(width(margin_1(classNames(id(toModifier_0(get_InputStyle(), $composer_0, 6), 'inputName'), ['form-control']), VOID, VOID, get_px(15)), $breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_px(600) : get_px(300)), Theme_LighterGray_getInstance().get_rgb_18ix0c_k$()), get_px(0), get_px(0), get_px(0), get_px(0), null), get_px(12)), get_px(18));
      $composer_0.startReplaceableGroup_ip860b_k$(-1137550926);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.contactForm.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = contactForm$lambda$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Input(tmp, toAttrs(attrsModifier(tmp_0, tmp0_group)), $composer_0, 8);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function contactForm$lambda$lambda_1($this$attrsModifier) {
    $this$attrsModifier.attr_w68641_k$('placeholder', 'Email Address');
    $this$attrsModifier.attr_w68641_k$('name', 'email');
    $this$attrsModifier.attr_w68641_k$('required', 'true');
    return Unit_getInstance();
  }
  function contactForm$lambda$lambda$lambda_0($this$attrsModifier) {
    $this$attrsModifier.attr_w68641_k$('placeholder', 'Email Address');
    $this$attrsModifier.attr_w68641_k$('name', 'email');
    $this$attrsModifier.attr_w68641_k$('required', 'true');
    return Unit_getInstance();
  }
  function contactForm$lambda$lambda_2($breakpoint) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = Email_getInstance();
      var tmp_0 = fontSize(padding(boxShadow(backgroundColor(width(margin_1(classNames(id(toModifier_0(get_InputStyle(), $composer_0, 6), 'inputEmail'), ['form-control']), VOID, VOID, get_px(15)), $breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_px(600) : get_px(300)), Theme_LighterGray_getInstance().get_rgb_18ix0c_k$()), get_px(0), get_px(0), get_px(0), get_px(0), null), get_px(12)), get_px(18));
      $composer_0.startReplaceableGroup_ip860b_k$(-1137505257);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.contactForm.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = contactForm$lambda$lambda$lambda_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Input(tmp, toAttrs(attrsModifier(tmp_0, tmp0_group)), $composer_0, 8);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function contactForm$lambda$lambda_3($this$attrsModifier) {
    $this$attrsModifier.attr_w68641_k$('placeholder', 'Your Message');
    $this$attrsModifier.attr_w68641_k$('name', 'message');
    $this$attrsModifier.attr_w68641_k$('required', 'true');
    return Unit_getInstance();
  }
  function contactForm$lambda$lambda$lambda_1($this$attrsModifier) {
    $this$attrsModifier.attr_w68641_k$('placeholder', 'Your Message');
    $this$attrsModifier.attr_w68641_k$('name', 'message');
    $this$attrsModifier.attr_w68641_k$('required', 'true');
    return Unit_getInstance();
  }
  function contactForm$lambda$lambda_4($breakpoint) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = fontSize(padding(boxShadow(backgroundColor(width(margin_1(height(classNames(id(toModifier_0(get_InputStyle(), $composer_0, 6), 'inputMessage'), ['form-control']), get_px(200)), VOID, VOID, get_px(25)), $breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_px(600) : get_px(300)), Theme_LighterGray_getInstance().get_rgb_18ix0c_k$()), get_px(0), get_px(0), get_px(0), get_px(0), null), get_px(12)), get_px(18));
      $composer_0.startReplaceableGroup_ip860b_k$(-1137459048);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.contactForm.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = contactForm$lambda$lambda$lambda_1;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      TextArea(null, toAttrs(attrsModifier(tmp, tmp0_group)), $composer_0, 0, 1);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function contactForm$lambda_0($breakpoint) {
    return function ($this$Form, $composer, $changed) {
      var $composer_0 = $composer;
      Div(toAttrs(margin_1(classNames(Companion_getInstance_1(), ['form-label']), VOID, VOID, get_px(10))), ComposableSingletons$ContactFormKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 48, 0);
      var tmp = classNames(Companion_getInstance_1(), ['form-control']);
      $composer_0.startReplaceableGroup_ip860b_k$(1375638467);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.contactForm.<anonymous>.<anonymous>.<anonymous>' call
        var value = contactForm$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_2 = toAttrs(attrsModifier(tmp, tmp0_group));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.contactForm.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 1725312232, true, contactForm$lambda$lambda_0($breakpoint));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.contactForm.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_20(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Div(tmp_2, tmp0, $composer_0, 48, 0);
      Div(toAttrs(margin_1(classNames(Companion_getInstance_1(), ['mb-3']), VOID, VOID, get_px(10))), ComposableSingletons$ContactFormKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 48, 0);
      var tmp_6 = classNames(Companion_getInstance_1(), ['form-control']);
      $composer_0.startReplaceableGroup_ip860b_k$(1375685192);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.contactForm.<anonymous>.<anonymous>.<anonymous>' call
        var value_1 = contactForm$lambda$lambda_1;
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp1_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_9 = toAttrs(attrsModifier(tmp_6, tmp1_group));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.contactForm.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_10 = $composer_0;
      var dispatchReceiver_0 = composableLambda(tmp_10, -1170701462, true, contactForm$lambda$lambda_2($breakpoint));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_11;
      if (invalid_0 || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.contactForm.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_21(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_2);
        tmp_11 = value_2;
      } else {
        tmp_11 = it_2;
      }
      var tmp_12 = tmp_11;
      var tmp0_0 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      Div(tmp_9, tmp0_0, $composer_0, 48, 0);
      Div(toAttrs(margin_1(classNames(Companion_getInstance_1(), ['form-label']), VOID, VOID, get_px(10))), ComposableSingletons$ContactFormKt_getInstance().lambda_6_r8sbbk_1, $composer_0, 48, 0);
      var tmp_13 = classNames(Companion_getInstance_1(), ['form-control']);
      $composer_0.startReplaceableGroup_ip860b_k$(1375731337);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_14;
      if (false || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.contactForm.<anonymous>.<anonymous>.<anonymous>' call
        var value_3 = contactForm$lambda$lambda_3;
        $composer_0.updateRememberedValue_l1wh71_k$(value_3);
        tmp_14 = value_3;
      } else {
        tmp_14 = it_3;
      }
      var tmp_15 = tmp_14;
      var tmp2_group = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_16 = toAttrs(attrsModifier(tmp_13, tmp2_group));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.contactForm.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_17 = $composer_0;
      var dispatchReceiver_1 = composableLambda(tmp_17, 228252140, true, contactForm$lambda$lambda_4($breakpoint));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      $composer_3.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_3, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_3.rememberedValue_4dg93v_k$();
      var tmp_18;
      if (invalid_1 || it_4 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.contactForm.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref_22(dispatchReceiver_1);
        $composer_3.updateRememberedValue_l1wh71_k$(value_4);
        tmp_18 = value_4;
      } else {
        tmp_18 = it_4;
      }
      var tmp_19 = tmp_18;
      var tmp0_1 = (tmp_19 == null ? true : !(tmp_19 == null)) ? tmp_19 : THROW_CCE();
      $composer_3.endReplaceableGroup_ern0ak_k$();
      Div(tmp_16, tmp0_1, $composer_0, 48, 0);
      var tmp_20 = fillMaxWidth(Companion_getInstance_1());
      var tmp_21 = Center_getInstance();
      Box(tmp_20, tmp_21, null, ComposableSingletons$ContactFormKt_getInstance().lambda_8_r8sbbi_1, $composer_0, 3144, 4);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function contactForm$lambda_1($breakpoint, $$changed) {
    return function ($composer, $force) {
      contactForm($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function experienceCard(breakpoint, active, experience, animatedMargin, $composer, $changed, $default) {
    var active_0 = {_v: active};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(732224792);
    if (!(($default & 2) === 0)) {
      active_0._v = false;
    }
    var tmp7_modifier = maxWidth(fillMaxWidth(Companion_getInstance_1()), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(60) : get_percent(90));
    var tmp8_numColumns = numColumns(1, VOID, 2);
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.honger.ngel.components.experienceCard.<anonymous>' call
    var tmp = $composer_0;
    var dispatchReceiver = composableLambda(tmp, 493347983, true, experienceCard$lambda(active_0, experience, breakpoint, animatedMargin));
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
    sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.rememberedValue_4dg93v_k$();
    var tmp_0;
    if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'com.honger.ngel.components.experienceCard.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_24(dispatchReceiver);
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    SimpleGrid(tmp8_numColumns, tmp7_modifier, null, null, tmp0, $composer_0, 24648, 12);
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(experienceCard$lambda_0(breakpoint, active_0, experience, animatedMargin, $changed, $default));
    }
  }
  function experienceDescription(active, description, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1765860943);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(active) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(description) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = backgroundColor(padding(margin(fillMaxWidth(Companion_getInstance_1()), get_px(14)), get_px(14)), active ? Theme_Primary_getInstance().get_rgb_18ix0c_k$() : Theme_LighterGray_getInstance().get_rgb_18ix0c_k$());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.experienceDescription.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -2034019371, true, experienceDescription$lambda(active, description));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.experienceDescription.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_26(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Box(tmp, null, null, tmp0, $composer_0, 3080, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(experienceDescription$lambda_0(active, description, $changed));
    }
  }
  function experienceDetails(breakpoint, active, experience, animatedMargin, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(136943258);
    var tmp = margin_0(fillMaxWidth(Companion_getInstance_1()), VOID, VOID, VOID, breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_px(14) : get_px(0));
    var tmp_0 = CenterVertically_getInstance();
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.honger.ngel.components.experienceDetails.<anonymous>' call
    var tmp_1 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_1, 1937272477, true, experienceDetails$lambda(breakpoint, active, experience, animatedMargin));
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
    sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.rememberedValue_4dg93v_k$();
    var tmp_2;
    if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      // Inline function 'com.honger.ngel.components.experienceDetails.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_31(dispatchReceiver);
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp_2 = value;
    } else {
      tmp_2 = it;
    }
    var tmp_3 = tmp_2;
    var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    Row(tmp, null, tmp_0, null, tmp0, $composer_0, 25096, 10);
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(experienceDetails$lambda_0(breakpoint, active, experience, animatedMargin, $changed));
    }
  }
  function experienceNumber(active, experience, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1300635667);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(active) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(experience) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = fillMaxHeight(margin_0(Companion_getInstance_1(), VOID, get_px(14)));
      var tmp_0 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.experienceNumber.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -623056435, true, experienceNumber$lambda(active, experience));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.experienceNumber.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_34(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Box(tmp, tmp_0, null, tmp0, $composer_0, 3144, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(experienceNumber$lambda_0(active, experience, $changed));
    }
  }
  function experienceCard$lambda($active, $experience, $breakpoint, $animatedMargin) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        experienceDescription($active._v, $experience.get_description_emjre5_k$(), $composer_0, 0);
        experienceDetails($breakpoint, $active._v, $experience, $animatedMargin, $composer_0, 4096);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function experienceCard$lambda_0($breakpoint, $active, $experience, $animatedMargin, $$changed, $$default) {
    return function ($composer, $force) {
      experienceCard($breakpoint, $active._v, $experience, $animatedMargin, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function experienceDescription$lambda$lambda($description) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($description, $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function experienceDescription$lambda($active, $description) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.experienceDescription.<anonymous>.<anonymous>.<anonymous>' call
        var $this$run = Companion_getInstance_1();
        var tmp_0 = toAttrs(color(fontWeight(lineHeight(fontSize(fontFamily(margin($this$run, get_px(0)), ['Roboto']), get_px(14)), 1.6), Companion_getInstance_2().get_Normal_22avww_k$()), $active ? Colors_getInstance().get_White_ij46ow_k$() : Theme_Secondary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.experienceDescription.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 1450788851, true, experienceDescription$lambda$lambda($description));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.experienceDescription.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_25(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        P(tmp_0, tmp0, $composer_0, 48, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function experienceDescription$lambda_0($active, $description, $$changed) {
    return function ($composer, $force) {
      experienceDescription($active, $description, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function experienceDetails$lambda$lambda$lambda($experience) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($experience.get_jobPosition_k6sg9v_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function experienceDetails$lambda$lambda$lambda_0($experience) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($experience.get_from_wom7eb_k$() + ' - ' + $experience.get_to_kntnng_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function experienceDetails$lambda$lambda$lambda_1($experience) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($experience.get_company_gzg49g_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function experienceDetails$lambda$lambda($experience) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(Companion_getInstance_1(), get_px(0)), ['Roboto']), get_px(20)), Companion_getInstance_2().get_Bold_wnz5ke_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -1965840270, true, experienceDetails$lambda$lambda$lambda($experience));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_27(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        P(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_4 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(Companion_getInstance_1(), get_px(0)), ['Roboto']), get_px(14)), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_5, 298010153, true, experienceDetails$lambda$lambda$lambda_0($experience));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_28(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        P(tmp_4, tmp0_0, $composer_0, 48, 0);
        var tmp_8 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(Companion_getInstance_1(), get_px(0)), ['Roboto']), get_px(14)), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Primary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_9 = $composer_0;
        var dispatchReceiver_1 = composableLambda(tmp_9, 1770288746, true, experienceDetails$lambda$lambda$lambda_1($experience));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        $composer_3.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_3, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.rememberedValue_4dg93v_k$();
        var tmp_10;
        if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_29(dispatchReceiver_1);
          $composer_3.updateRememberedValue_l1wh71_k$(value_1);
          tmp_10 = value_1;
        } else {
          tmp_10 = it_1;
        }
        var tmp_11 = tmp_10;
        var tmp0_1 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        $composer_3.endReplaceableGroup_ern0ak_k$();
        P(tmp_8, tmp0_1, $composer_0, 48, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function experienceDetails$lambda($breakpoint, $active, $experience, $animatedMargin) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        $composer_0.startReplaceableGroup_ip860b_k$(1383166124);
        if ($breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0) {
          experienceNumber($active, $experience, $composer_0, 0);
        }
        $composer_0.endReplaceableGroup_ern0ak_k$();
        var tmp_0 = transition(margin_0(fillMaxSize(Companion_getInstance_1()), VOID, VOID, VOID, $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) <= 0 ? get_px(0) : $animatedMargin), [CSSTransition_init_$Create$('margin', get_ms(500), VOID, times($experience.get_ordinal_ip24qg_k$(), get_ms(100)))]);
        var tmp_1 = Center_getInstance_0();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, -505880236, true, experienceDetails$lambda$lambda($experience));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.experienceDetails.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_30(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Column(tmp_0, tmp_1, null, null, tmp0, $composer_0, 24648, 12);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function experienceDetails$lambda_0($breakpoint, $active, $experience, $animatedMargin, $$changed) {
    return function ($composer, $force) {
      experienceDetails($breakpoint, $active, $experience, $animatedMargin, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function experienceNumber$lambda$lambda$lambda($experience) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($experience.get_number_hay53m_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function experienceNumber$lambda$lambda($active, $experience) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(Companion_getInstance_1(), get_px(0)), ['Roboto']), get_px(16)), Companion_getInstance_2().get_Bold_wnz5ke_k$()), $active ? Colors_getInstance().get_White_ij46ow_k$() : Theme_Primary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.experienceNumber.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -776419054, true, experienceNumber$lambda$lambda$lambda($experience));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.experienceNumber.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_32(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        P(tmp_0, tmp0, $composer_0, 48, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function experienceNumber$lambda($active, $experience) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = backgroundColor(width(fillMaxHeight(Companion_getInstance_1()), get_px(3)), Theme_Primary_getInstance().get_rgb_18ix0c_k$());
        Box(tmp_0, null, null, null, $composer_0, 8, 14);
        var tmp_1 = size(Companion_getInstance_1(), get_px(40));
        var tmp_2 = get_px(3);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
        Companion_getInstance_6();
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = borderRadius(backgroundColor(border(tmp_1, tmp_2, 'solid', Theme_Primary_getInstance().get_rgb_18ix0c_k$()), $active ? Theme_Primary_getInstance().get_rgb_18ix0c_k$() : Colors_getInstance().get_White_ij46ow_k$()), get_percent(50));
        var tmp_4 = Center_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.experienceNumber.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_5, 637945072, true, experienceNumber$lambda$lambda($active, $experience));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.experienceNumber.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_33(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_6 = value;
        } else {
          tmp_6 = it;
        }
        var tmp_7 = tmp_6;
        var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Box(tmp_3, tmp_4, null, tmp0, $composer_0, 3144, 4);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function experienceNumber$lambda_0($active, $experience, $$changed) {
    return function ($composer, $force) {
      experienceNumber($active, $experience, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function header(onMenuClicked, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-986929174);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onMenuClicked) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = margin(fillMaxWidth(Companion_getInstance_1(), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0 ? get_percent(80) : get_percent(90)), get_px(50));
      var tmp_0 = SpaceBetween_getInstance();
      var tmp_1 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.header.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 1226713965, true, header$lambda(breakpoint, onMenuClicked));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.header.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_36(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_3 = value;
      } else {
        tmp_3 = it;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Row(tmp, tmp_0, tmp_1, null, tmp0, $composer_0, 25160, 8);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(header$lambda_0(onMenuClicked, $changed));
    }
  }
  function leftSide(breakpoint, onMenuClicked, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1395679644);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onMenuClicked) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.leftSide.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -1853232391, true, leftSide$lambda(breakpoint, onMenuClicked));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.leftSide.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_37(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Row(null, null, tmp, null, tmp0, $composer_0, 25088, 11);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(leftSide$lambda_0(breakpoint, onMenuClicked, $changed));
    }
  }
  function rightSide($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1095296046);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = padding(backgroundColor(borderRadius(fillMaxWidth(Companion_getInstance_1()), get_px(50)), Theme_LighterGray_getInstance().get_rgb_18ix0c_k$()), get_px(20));
      var tmp_0 = End_getInstance_0();
      Row(tmp, tmp_0, null, null, ComposableSingletons$HeaderKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24648, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(rightSide$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$HeaderKt$lambda_1$lambda_fev17j($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = get_entries_2();
      var tmp$ret$0 = copyToArray(this_0);
      var tmp0_iterator = take(tmp$ret$0, 6).iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.honger.ngel.components.ComposableSingletons$HeaderKt.lambda-1.<anonymous>.<anonymous>' call
        var tmp11_modifier = textDecorationLine(fontWeight(fontSize(fontFamily(padding_0(toModifier_1(get_NavigationStyle(), [], $composer_0, 72), VOID, get_px(30)), ['Roboto']), get_px(18)), Companion_getInstance_2().get_Normal_22avww_k$()), Companion_getInstance_7().get_None_wo6tgh_k$());
        var tmp12_path = element.get_path_wos8ry_k$();
        var tmp13_text = element.get_title_iz32un_k$();
        Link(tmp12_path, tmp13_text, tmp11_modifier, null, null, null, null, false, null, $composer_0, 512, 504);
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$HeaderKt() {
    ComposableSingletons$HeaderKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_35(composableLambdaInstance(-387564139, false, ComposableSingletons$HeaderKt$lambda_1$lambda_fev17j));
  }
  protoOf(ComposableSingletons$HeaderKt).get_lambda_1_4b504g_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$HeaderKt_instance;
  function ComposableSingletons$HeaderKt_getInstance() {
    if (ComposableSingletons$HeaderKt_instance == null)
      new ComposableSingletons$HeaderKt();
    return ComposableSingletons$HeaderKt_instance;
  }
  function header$lambda($breakpoint, $onMenuClicked) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        leftSide($breakpoint, $onMenuClicked, $composer_0, 0);
        if ($breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0) {
          rightSide($composer_0, 0);
        }
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function header$lambda_0($onMenuClicked, $$changed) {
    return function ($composer, $force) {
      header($onMenuClicked, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function leftSide$lambda$lambda($onMenuClicked) {
    return function (it) {
      $onMenuClicked();
      return Unit_getInstance();
    };
  }
  function leftSide$lambda($breakpoint, $onMenuClicked) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        $composer_0.startReplaceableGroup_ip860b_k$(-2026112039);
        if ($breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) <= 0) {
          var tmp_0 = margin_0(Companion_getInstance_1(), VOID, get_px(15));
          $composer_0.startReplaceableGroup_ip860b_k$(-2026107046);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_0.changed_ga7h3f_k$($onMenuClicked);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_1;
          if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'com.honger.ngel.components.leftSide.<anonymous>.<anonymous>.<anonymous>' call
            var value = leftSide$lambda$lambda($onMenuClicked);
            $composer_0.updateRememberedValue_l1wh71_k$(value);
            tmp_1 = value;
          } else {
            tmp_1 = it;
          }
          var tmp_2 = tmp_1;
          var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          $composer_0.endReplaceableGroup_ern0ak_k$();
          FaBars(onClick(tmp_0, tmp0_group), IconSize_XL_getInstance(), $composer_0, 56, 0);
        }
        $composer_0.endReplaceableGroup_ern0ak_k$();
        var tmp9_modifier = toModifier_1(get_LogoStyle(), [], $composer_0, 72);
        var tmp10_src = 'logo.svg';
        Image(tmp10_src, tmp9_modifier, null, null, null, 'Logo Image', false, null, $composer_0, 196678, 220);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function leftSide$lambda_0($breakpoint, $onMenuClicked, $$changed) {
    return function ($composer, $force) {
      leftSide($breakpoint, $onMenuClicked, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function rightSide$lambda($$changed) {
    return function ($composer, $force) {
      rightSide($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function overflowMenu(onMenuClosed, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(177339778);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onMenuClosed) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(773894976);
      sourceInformation($composer_1, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = overflowMenu$lambda_3;
      }
      var composer = $composer_1;
      $composer_1.startReplaceableGroup_ip860b_k$(-954370320);
      sourceInformation($composer_1, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var wrapper = tmp1_group;
      var tmp0 = wrapper.get_coroutineScope_5k7h45_k$();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var scope = tmp0;
      var breakpoint = rememberBreakpoint($composer_0, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(-1689870390);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.overflowMenu.<anonymous>' call
        var value_0 = mutableStateOf(get_percent(-100));
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var translateX$delegate = tmp0_group;
      $composer_0.startReplaceableGroup_ip860b_k$(-1689868379);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.overflowMenu.<anonymous>' call
        var value_1 = mutableStateOf(get_percent(0));
        this_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var opacity$delegate = tmp1_group_0;
      LaunchedEffect(breakpoint, overflowMenu$slambda_0(breakpoint, scope, translateX$delegate, opacity$delegate, onMenuClosed, null), $composer_0, 64);
      var tmp_5 = height(fillMaxWidth(Companion_getInstance_1()), get_vh(100));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      Companion_getInstance_3();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_6 = transition(backgroundColor(opacity(zIndex(position(tmp_5, 'fixed'), 2), overflowMenu$lambda_1(opacity$delegate)), Companion_getInstance_8().argb_eb1cjw_k$(0.5, 0.0, 0.0, 0.0)), [CSSTransition_init_$Create$('opacity', get_ms(500))]);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.overflowMenu.<anonymous>' call
      var tmp_7 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_7, 2124450681, true, overflowMenu$lambda_4(breakpoint, translateX$delegate, scope, onMenuClosed, opacity$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_8;
      if (invalid || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.overflowMenu.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_40(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value_2);
        tmp_8 = value_2;
      } else {
        tmp_8 = it_2;
      }
      var tmp_9 = tmp_8;
      var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      Column(tmp_6, null, null, null, tmp0_0, $composer_0, 24584, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(overflowMenu$lambda_5(onMenuClosed, $changed));
    }
  }
  function overflowMenu$lambda($translateX$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('translateX', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $translateX$delegate.get_value_j01efc_k$();
  }
  function overflowMenu$lambda_0($translateX$delegate, _set____db54di) {
    getLocalDelegateReference('translateX', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $translateX$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function overflowMenu$lambda_1($opacity$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('opacity', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $opacity$delegate.get_value_j01efc_k$();
  }
  function overflowMenu$lambda_2($opacity$delegate, _set____db54di) {
    getLocalDelegateReference('opacity', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $opacity$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function overflowMenu$lambda_3() {
    return EmptyCoroutineContext_getInstance();
  }
  function overflowMenu$slambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    this.$onMenuClosed_1 = $onMenuClosed;
    this.$translateX$delegate_1 = $translateX$delegate;
    this.$opacity$delegate_1 = $opacity$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(overflowMenu$slambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(overflowMenu$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(overflowMenu$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            overflowMenu$lambda_0(this.$translateX$delegate_1, get_percent(-100));
            overflowMenu$lambda_2(this.$opacity$delegate_1, get_percent(0));
            this.set_state_rjd8d0_k$(1);
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.$onMenuClosed_1();
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(overflowMenu$slambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new overflowMenu$slambda$slambda(this.$onMenuClosed_1, this.$translateX$delegate_1, this.$opacity$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(overflowMenu$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function overflowMenu$slambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    var i = new overflowMenu$slambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function overflowMenu$slambda($breakpoint, $scope, $translateX$delegate, $opacity$delegate, $onMenuClosed, resultContinuation) {
    this.$breakpoint_1 = $breakpoint;
    this.$scope_1 = $scope;
    this.$translateX$delegate_1 = $translateX$delegate;
    this.$opacity$delegate_1 = $opacity$delegate;
    this.$onMenuClosed_1 = $onMenuClosed;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(overflowMenu$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(overflowMenu$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(overflowMenu$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          overflowMenu$lambda_0(this.$translateX$delegate_1, get_percent(0));
          overflowMenu$lambda_2(this.$opacity$delegate_1, get_percent(100));
          if (this.$breakpoint_1.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0) {
            launch(this.$scope_1, VOID, VOID, overflowMenu$slambda$slambda_0(this.$onMenuClosed_1, this.$translateX$delegate_1, this.$opacity$delegate_1, null));
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(overflowMenu$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new overflowMenu$slambda(this.$breakpoint_1, this.$scope_1, this.$translateX$delegate_1, this.$opacity$delegate_1, this.$onMenuClosed_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(overflowMenu$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function overflowMenu$slambda_0($breakpoint, $scope, $translateX$delegate, $opacity$delegate, $onMenuClosed, resultContinuation) {
    var i = new overflowMenu$slambda($breakpoint, $scope, $translateX$delegate, $opacity$delegate, $onMenuClosed, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function overflowMenu$lambda$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    this.$onMenuClosed_1 = $onMenuClosed;
    this.$translateX$delegate_1 = $translateX$delegate;
    this.$opacity$delegate_1 = $opacity$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(overflowMenu$lambda$lambda$lambda$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(overflowMenu$lambda$lambda$lambda$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(overflowMenu$lambda$lambda$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            overflowMenu$lambda_0(this.$translateX$delegate_1, get_percent(-100));
            overflowMenu$lambda_2(this.$opacity$delegate_1, get_percent(0));
            this.set_state_rjd8d0_k$(1);
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.$onMenuClosed_1();
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(overflowMenu$lambda$lambda$lambda$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new overflowMenu$lambda$lambda$lambda$lambda$slambda(this.$onMenuClosed_1, this.$translateX$delegate_1, this.$opacity$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(overflowMenu$lambda$lambda$lambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function overflowMenu$lambda$lambda$lambda$lambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    var i = new overflowMenu$lambda$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function overflowMenu$lambda$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function (it) {
      launch($scope, VOID, VOID, overflowMenu$lambda$lambda$lambda$lambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, null));
      return Unit_getInstance();
    };
  }
  function overflowMenu$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = margin_0(cursor(Companion_getInstance_1(), Companion_getInstance_5().get_Pointer_m64vg4_k$()), VOID, get_px(20));
        FaXmark(onClick(tmp_0, overflowMenu$lambda$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate)), IconSize_LG_getInstance(), $composer_0, 56, 0);
        var tmp14_modifier = size(Companion_getInstance_1(), get_px(80));
        var tmp15_src = 'logo.svg';
        Image(tmp15_src, tmp14_modifier, null, null, null, 'Logo Image', false, null, $composer_0, 196678, 220);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function overflowMenu$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    this.$onMenuClosed_1 = $onMenuClosed;
    this.$translateX$delegate_1 = $translateX$delegate;
    this.$opacity$delegate_1 = $opacity$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(overflowMenu$lambda$lambda$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(overflowMenu$lambda$lambda$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(overflowMenu$lambda$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            overflowMenu$lambda_0(this.$translateX$delegate_1, get_percent(-100));
            overflowMenu$lambda_2(this.$opacity$delegate_1, get_percent(0));
            this.set_state_rjd8d0_k$(1);
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.$onMenuClosed_1();
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(overflowMenu$lambda$lambda$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new overflowMenu$lambda$lambda$lambda$slambda(this.$onMenuClosed_1, this.$translateX$delegate_1, this.$opacity$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(overflowMenu$lambda$lambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function overflowMenu$lambda$lambda$lambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    var i = new overflowMenu$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function overflowMenu$lambda$lambda$lambda_0($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function (it) {
      launch($scope, VOID, VOID, overflowMenu$lambda$lambda$lambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, null));
      return Unit_getInstance();
    };
  }
  function overflowMenu$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = margin_1(Companion_getInstance_1(), VOID, VOID, get_px(25));
        var tmp_1 = CenterVertically_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.overflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, -1327424525, true, overflowMenu$lambda$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.overflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_38(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Row(tmp_0, null, tmp_1, null, tmp0, $composer_0, 25096, 10);
        // Inline function 'kotlin.collections.forEach' call
        // Inline function 'kotlin.collections.toTypedArray' call
        var this_0 = get_entries_2();
        var tmp$ret$7 = copyToArray(this_0);
        var tmp0_iterator = take(tmp$ret$7, 6).iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.honger.ngel.components.overflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_5 = textDecorationLine(fontWeight(fontSize(fontFamily(margin_1(toModifier_1(get_NavigationStyle(), [], $composer_0, 72), VOID, VOID, get_px(10)), ['Roboto']), get_px(16)), Companion_getInstance_2().get_Normal_22avww_k$()), Companion_getInstance_7().get_None_wo6tgh_k$());
          var tmp16_modifier = onClick(tmp_5, overflowMenu$lambda$lambda$lambda_0($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate));
          var tmp17_path = element.get_path_wos8ry_k$();
          var tmp18_text = element.get_title_iz32un_k$();
          var tmp19_openInternalLinksStrategy = OpenLinkStrategy_IN_PLACE_getInstance();
          Link(tmp17_path, tmp18_text, tmp16_modifier, null, tmp19_openInternalLinksStrategy, null, null, false, null, $composer_0, 25088, 488);
        }
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function overflowMenu$lambda_4($breakpoint, $translateX$delegate, $scope, $onMenuClosed, $opacity$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.overflowMenu.<anonymous>.<anonymous>.<anonymous>' call
        var $this$run = Companion_getInstance_1();
        var tmp_0 = transition(translateX(backgroundColor(scrollBehavior(overflow(width(padding(fillMaxHeight($this$run), get_px(25)), $breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) < 0 ? get_percent(50) : get_percent(25)), Companion_getInstance_9().get_Auto_wnyn88_k$()), Companion_getInstance_10().get_Smooth_4edjo7_k$()), Colors_getInstance().get_White_ij46ow_k$()), overflowMenu$lambda($translateX$delegate)), [CSSTransition_init_$Create$('translate', get_ms(500))]);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.overflowMenu.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 1058266096, true, overflowMenu$lambda$lambda($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.overflowMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_39(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Column(tmp_0, null, null, null, tmp0, $composer_0, 24584, 14);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function overflowMenu$lambda_5($onMenuClosed, $$changed) {
    return function ($composer, $force) {
      overflowMenu($onMenuClosed, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function portfolioCard(modifier, portfolio, link, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var link_0 = {_v: link};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1756415168);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(portfolio) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(link_0._v) ? 256 : 128);
    if (!(($default & 1) === 1) || (!(($dirty & 731) === 146) || !$composer_0.get_skipping_3owdve_k$())) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      if (!(($default & 4) === 0)) {
        link_0._v = 'https://www.google.com';
      }
      var tmp24_modifier = textDecorationLine(toModifier(get_PortfolioSectionStyle(), $composer_0, 6), Companion_getInstance_7().get_None_wo6tgh_k$());
      var tmp25_openExternalLinksStrategy = OpenLinkStrategy_IN_NEW_TAB_getInstance();
      var tmp = link_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.portfolioCard.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 79007631, true, portfolioCard$lambda(modifier_0, portfolio));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.portfolioCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_46(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Link_0(tmp, tmp24_modifier, null, null, tmp25_openExternalLinksStrategy, null, false, null, tmp0, $composer_0, 100687936 | 14 & $dirty >> 6, 236);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(portfolioCard$lambda_0(modifier_0, portfolio, link_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_41($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$PortfolioCardKt$lambda_1$lambda_d17v02($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp22_modifier = size(id(Companion_getInstance_1(), 'linkIcon'), get_px(32));
      var tmp23_src = 'link_icon.svg';
      Image(tmp23_src, tmp22_modifier, null, null, null, 'Link Icon', false, null, $composer_0, 196678, 220);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$PortfolioCardKt() {
    ComposableSingletons$PortfolioCardKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_41(composableLambdaInstance(1435665170, false, ComposableSingletons$PortfolioCardKt$lambda_1$lambda_d17v02));
  }
  protoOf(ComposableSingletons$PortfolioCardKt).get_lambda_1_4b504g_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
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
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp20_modifier = objectFit(size(Companion_getInstance_1(), get_px(300)), Companion_getInstance_11().get_Cover_i8910u_k$());
        var tmp21_src = $portfolio.get_image_it3i2a_k$();
        Image_0(tmp21_src, 'Portfolio Image', tmp20_modifier, null, null, null, false, null, $composer_0, 560, 248);
        var tmp_0 = backgroundColor(fillMaxHeight(id(Companion_getInstance_1(), 'greenOverlay')), Companion_getInstance_8().argb_g07r6c_k$(0.5, 0, 167, 142));
        var tmp_1 = Center_getInstance();
        Box(tmp_0, tmp_1, null, ComposableSingletons$PortfolioCardKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3144, 4);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_42($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function portfolioCard$lambda$lambda$lambda_0($portfolio) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($portfolio.get_title_iz32un_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_43($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function portfolioCard$lambda$lambda$lambda_1($portfolio) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($portfolio.get_title_iz32un_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_44($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function portfolioCard$lambda$lambda($portfolio) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = maxWidth(fillMaxWidth(margin_1(id(Companion_getInstance_1(), 'boxParent'), VOID, VOID, get_px(20))), get_px(300));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -2044386036, true, portfolioCard$lambda$lambda$lambda($portfolio));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_42(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Box(tmp_0, null, null, tmp0, $composer_0, 3080, 6);
        var tmp_4 = toAttrs(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(id(Companion_getInstance_1(), 'portfolioTitle')), get_px(0)), ['Roboto']), get_px(18)), Companion_getInstance_2().get_Bold_wnz5ke_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_5, -1924580316, true, portfolioCard$lambda$lambda$lambda_0($portfolio));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_43(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        P(tmp_4, tmp0_0, $composer_0, 48, 0);
        var tmp_8 = toAttrs(color(opacity(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(id(Companion_getInstance_1(), 'portfolioDesc')), get_px(0)), ['Roboto']), get_px(14)), Companion_getInstance_2().get_Normal_22avww_k$()), get_percent(50)), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_9 = $composer_0;
        var dispatchReceiver_1 = composableLambda(tmp_9, -1073880037, true, portfolioCard$lambda$lambda$lambda_1($portfolio));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        $composer_3.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_3, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.rememberedValue_4dg93v_k$();
        var tmp_10;
        if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_44(dispatchReceiver_1);
          $composer_3.updateRememberedValue_l1wh71_k$(value_1);
          tmp_10 = value_1;
        } else {
          tmp_10 = it_1;
        }
        var tmp_11 = tmp_10;
        var tmp0_1 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        $composer_3.endReplaceableGroup_ern0ak_k$();
        P(tmp_8, tmp0_1, $composer_0, 48, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_45($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function portfolioCard$lambda($modifier, $portfolio) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = width_0(id($modifier._v, 'columnParent'), Companion_getInstance_12().get_MaxContent_n32482_k$());
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -1047671674, true, portfolioCard$lambda$lambda($portfolio));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.portfolioCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_45(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Column(tmp_0, null, null, null, tmp0, $composer_0, 24584, 14);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_46($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function portfolioCard$lambda_0($modifier, $portfolio, $link, $$changed, $$default) {
    return function ($composer, $force) {
      portfolioCard($modifier._v, $portfolio, $link._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function ratingBar(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(463401325);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 1) === 1) || (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$())) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      var tmp = modifier_0._v;
      Row(tmp, null, null, null, ComposableSingletons$RatingBarKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24584, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ratingBar$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_47($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$RatingBarKt$lambda_1$lambda_q5uqrw($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < 5)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.honger.ngel.components.ComposableSingletons$RatingBarKt.lambda-1.<anonymous>.<anonymous>' call
          var tmp26_modifier = size(margin_0(Companion_getInstance_1(), VOID, !(index === 4) ? get_px(2) : get_px(0)), get_px(16));
          var tmp27_src = 'star_icon.svg';
          Image(tmp27_src, tmp26_modifier, null, null, null, 'Star Icon', false, null, $composer_0, 196678, 220);
        }
         while (inductionVariable < 5);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RatingBarKt() {
    ComposableSingletons$RatingBarKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_47(composableLambdaInstance(-793630774, false, ComposableSingletons$RatingBarKt$lambda_1$lambda_q5uqrw));
  }
  protoOf(ComposableSingletons$RatingBarKt).get_lambda_1_4b504g_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$RatingBarKt_instance;
  function ComposableSingletons$RatingBarKt_getInstance() {
    if (ComposableSingletons$RatingBarKt_instance == null)
      new ComposableSingletons$RatingBarKt();
    return ComposableSingletons$RatingBarKt_instance;
  }
  function ratingBar$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      ratingBar($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function sectionTitle(modifier, section, alignment, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var alignment_0 = {_v: alignment};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(538238262);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(section) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 128;
    if (!(($default & 5) === 5) || (!(($dirty & 731) === 146) || !$composer_0.get_skipping_3owdve_k$())) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance_1();
        }
        if (!(($default & 4) === 0)) {
          alignment_0._v = Start_getInstance();
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(773894976);
      sourceInformation($composer_1, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = sectionTitle$lambda_3;
      }
      var composer = $composer_1;
      $composer_1.startReplaceableGroup_ip860b_k$(-954370320);
      sourceInformation($composer_1, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var wrapper = tmp1_group;
      var tmp0 = wrapper.get_coroutineScope_5k7h45_k$();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var scope = tmp0;
      $composer_0.startReplaceableGroup_ip860b_k$(-1923573837);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.sectionTitle.<anonymous>' call
        var value_0 = mutableStateOf(get_px(50));
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var titleMargin$delegate = tmp0_group;
      $composer_0.startReplaceableGroup_ip860b_k$(-1923571885);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.sectionTitle.<anonymous>' call
        var value_1 = mutableStateOf(get_px(50));
        this_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var subtitleMargin$delegate = tmp1_group_0;
      var tmp_5 = section.get_id_kntnx8_k$();
      observeViewportEntered(tmp_5, 700.0, sectionTitle$lambda_4(scope, alignment_0, subtitleMargin$delegate, titleMargin$delegate), $composer_0, 48);
      var tmp_6 = modifier_0._v;
      var tmp_7 = alignment_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.sectionTitle.<anonymous>' call
      var tmp_8 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_8, 870218605, true, sectionTitle$lambda_5(alignment_0, titleMargin$delegate, section, subtitleMargin$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.sectionTitle.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_50(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value_2);
        tmp_9 = value_2;
      } else {
        tmp_9 = it_2;
      }
      var tmp_10 = tmp_9;
      var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      Column(tmp_6, null, tmp_7, null, tmp0_0, $composer_0, 25096, 10);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(sectionTitle$lambda_6(modifier_0, section, alignment_0, $changed, $default));
    }
  }
  function sectionTitle$lambda($titleMargin$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('titleMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $titleMargin$delegate.get_value_j01efc_k$();
  }
  function sectionTitle$lambda_0($titleMargin$delegate, _set____db54di) {
    getLocalDelegateReference('titleMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $titleMargin$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function sectionTitle$lambda_1($subtitleMargin$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('subtitleMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $subtitleMargin$delegate.get_value_j01efc_k$();
  }
  function sectionTitle$lambda_2($subtitleMargin$delegate, _set____db54di) {
    getLocalDelegateReference('subtitleMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $subtitleMargin$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function sectionTitle$lambda_3() {
    return EmptyCoroutineContext_getInstance();
  }
  function sectionTitle$lambda$slambda($alignment, $subtitleMargin$delegate, $titleMargin$delegate, resultContinuation) {
    this.$alignment_1 = $alignment;
    this.$subtitleMargin$delegate_1 = $subtitleMargin$delegate;
    this.$titleMargin$delegate_1 = $titleMargin$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(sectionTitle$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(sectionTitle$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(sectionTitle$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            sectionTitle$lambda_2(this.$subtitleMargin$delegate_1, get_px(0));
            if (equals(this.$alignment_1._v, Start_getInstance())) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = delay(new Long(25, 0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            sectionTitle$lambda_0(this.$titleMargin$delegate_1, get_px(0));
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(sectionTitle$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new sectionTitle$lambda$slambda(this.$alignment_1, this.$subtitleMargin$delegate_1, this.$titleMargin$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(sectionTitle$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function sectionTitle$lambda$slambda_0($alignment, $subtitleMargin$delegate, $titleMargin$delegate, resultContinuation) {
    var i = new sectionTitle$lambda$slambda($alignment, $subtitleMargin$delegate, $titleMargin$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sectionTitle$lambda_4($scope, $alignment, $subtitleMargin$delegate, $titleMargin$delegate) {
    return function () {
      launch($scope, VOID, VOID, sectionTitle$lambda$slambda_0($alignment, $subtitleMargin$delegate, $titleMargin$delegate, null));
      return Unit_getInstance();
    };
  }
  function sectionTitle$lambda$lambda($section) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($section.get_title_iz32un_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_48($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function sectionTitle$lambda$lambda_0($section) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($section.get_subtitle_55eoyp_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_49($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function sectionTitle$lambda_5($alignment, $titleMargin$delegate, $section, $subtitleMargin$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = fillMaxWidth(Companion_getInstance_1());
        var tmp28_subject = $alignment._v;
        var tmp29_$receiver = textAlign(tmp_0, equals(tmp28_subject, CenterHorizontally_getInstance()) ? Companion_getInstance_13().get_Center_3arb0i_k$() : equals(tmp28_subject, End_getInstance()) ? Companion_getInstance_13().get_End_18ju7i_k$() : Companion_getInstance_13().get_Start_ih4i6x_k$());
        var tmp30_left = sectionTitle$lambda($titleMargin$delegate);
        var tmp31_top = get_px(0);
        var tmp32_bottom = get_px(0);
        var tmp_1 = toAttrs(transition(color(fontWeight(fontSize(fontFamily(margin_0(tmp29_$receiver, tmp31_top, VOID, tmp32_bottom, tmp30_left), ['Roboto']), get_px(25)), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), [CSSTransition_init_$Create$('margin', get_ms(300))]));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.sectionTitle.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 409301387, true, sectionTitle$lambda$lambda($section));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.sectionTitle.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_48(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        P(tmp_1, tmp0, $composer_0, 48, 0);
        var tmp_5 = fillMaxWidth(Companion_getInstance_1());
        var tmp33_subject = $alignment._v;
        var tmp34_$receiver = textAlign(tmp_5, equals(tmp33_subject, CenterHorizontally_getInstance()) ? Companion_getInstance_13().get_Center_3arb0i_k$() : equals(tmp33_subject, End_getInstance()) ? Companion_getInstance_13().get_End_18ju7i_k$() : Companion_getInstance_13().get_Start_ih4i6x_k$());
        var tmp35_left = equals($alignment._v, Start_getInstance()) ? sectionTitle$lambda_1($subtitleMargin$delegate) : get_px(0);
        var tmp36_right = equals($alignment._v, CenterHorizontally_getInstance()) ? sectionTitle$lambda_1($subtitleMargin$delegate) : get_px(0);
        var tmp37_bottom = get_px(10);
        var tmp38_top = get_px(0);
        var tmp_6 = toAttrs(transition(color(fontWeight(fontSize(fontFamily(margin_0(tmp34_$receiver, tmp38_top, tmp36_right, tmp37_bottom, tmp35_left), ['Roboto']), get_px(40)), Companion_getInstance_2().get_Bold_wnz5ke_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), [CSSTransition_init_$Create$('margin', get_ms(300))]));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.sectionTitle.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_7, 1675868866, true, sectionTitle$lambda$lambda_0($section));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_8;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.sectionTitle.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_49(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_8 = value_0;
        } else {
          tmp_8 = it_0;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        P(tmp_6, tmp0_0, $composer_0, 48, 0);
        var tmp_10 = borderRadius(backgroundColor(width(height(Companion_getInstance_1(), get_px(2)), get_px(80)), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), get_px(50));
        Box(tmp_10, null, null, null, $composer_0, 8, 14);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_50($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function sectionTitle$lambda_6($modifier, $section, $alignment, $$changed, $$default) {
    return function ($composer, $force) {
      sectionTitle($modifier._v, $section, $alignment._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function serviceCard(service, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1081581483);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(service) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = padding(margin_2(maxWidth(toModifier_0(get_ServiceCardStyle(), $composer_0, 6), get_px(300)), get_px(20)), get_px(20));
      var tmp_0 = get_px(2);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_6();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = border(tmp, tmp_0, 'solid', Theme_LighterGray_getInstance().get_rgb_18ix0c_k$());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.serviceCard.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 703709474, true, serviceCard$lambda(service));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.serviceCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_54(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_3 = value;
      } else {
        tmp_3 = it;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column(tmp_1, null, null, null, tmp0, $composer_0, 24584, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(serviceCard$lambda_0(service, $changed));
    }
  }
  function serviceCard$lambda$lambda($service) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp44_modifier = size(Companion_getInstance_1(), get_px(40));
        var tmp45_src = $service.get_icon_wont8i_k$();
        var tmp46_description = $service.get_description_emjre5_k$();
        Image_0(tmp45_src, tmp46_description, tmp44_modifier, null, null, null, false, null, $composer_0, 512, 248);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_51($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function serviceCard$lambda$lambda_0($service) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($service.get_title_iz32un_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_52($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function serviceCard$lambda$lambda_1($service) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($service.get_description_emjre5_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_53($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function serviceCard$lambda($service) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = margin_1(padding(id(Companion_getInstance_1(), 'iconBox'), get_px(10)), VOID, VOID, get_px(20));
        var tmp_1 = get_px(2);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
        Companion_getInstance_6();
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp39_$receiver = border(tmp_0, tmp_1, 'solid', Theme_Primary_getInstance().get_rgb_18ix0c_k$());
        var tmp40_topLeft = get_px(20);
        var tmp41_topRight = get_px(20);
        var tmp42_bottomLeft = get_px(20);
        var tmp43_bottomRight = get_px(0);
        var tmp_2 = borderRadius_0(tmp39_$receiver, tmp40_topLeft, tmp41_topRight, tmp43_bottomRight, tmp42_bottomLeft);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.serviceCard.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, 2037159592, true, serviceCard$lambda$lambda($service));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.serviceCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_51(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_4 = value;
        } else {
          tmp_4 = it;
        }
        var tmp_5 = tmp_4;
        var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Box(tmp_2, null, null, tmp0, $composer_0, 3080, 6);
        var tmp_6 = toAttrs(fontWeight(fontFamily(fontSize(margin_1(fillMaxWidth(Companion_getInstance_1()), get_px(0), VOID, get_px(10)), get_px(18)), ['Roboto']), Companion_getInstance_2().get_Bold_wnz5ke_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.serviceCard.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_7 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_7, -1947983424, true, serviceCard$lambda$lambda_0($service));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_8;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.serviceCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_52(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_8 = value_0;
        } else {
          tmp_8 = it_0;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        P(tmp_6, tmp0_0, $composer_0, 48, 0);
        var tmp_10 = toAttrs(fontWeight(fontFamily(fontSize(margin_1(fillMaxWidth(Companion_getInstance_1()), get_px(0), VOID, get_px(0)), get_px(14)), ['Roboto']), Companion_getInstance_2().get_Normal_22avww_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.serviceCard.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_11 = $composer_0;
        var dispatchReceiver_1 = composableLambda(tmp_11, -303747529, true, serviceCard$lambda$lambda_1($service));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        $composer_3.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_3, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.rememberedValue_4dg93v_k$();
        var tmp_12;
        if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.serviceCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_53(dispatchReceiver_1);
          $composer_3.updateRememberedValue_l1wh71_k$(value_1);
          tmp_12 = value_1;
        } else {
          tmp_12 = it_1;
        }
        var tmp_13 = tmp_12;
        var tmp0_1 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
        $composer_3.endReplaceableGroup_ern0ak_k$();
        P(tmp_10, tmp0_1, $composer_0, 48, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_54($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function serviceCard$lambda_0($service, $$changed) {
    return function ($composer, $force) {
      serviceCard($service, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function skillBar(name, index, progressBarHeight, percentage, animatePercentage, $composer, $changed, $default) {
    var progressBarHeight_0 = {_v: progressBarHeight};
    var percentage_0 = {_v: percentage};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1869387119);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(index) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 128;
    if (!(($default & 8) === 0))
      $dirty = $dirty | 1024;
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(animatePercentage) ? 16384 : 8192);
    if (!(($default & 12) === 12) || (!(($dirty & 46811) === 9362) || !$composer_0.get_skipping_3owdve_k$())) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 4) === 0)) {
          progressBarHeight_0._v = get_px(5);
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          percentage_0._v = get_percent(50);
          $dirty = $dirty & -7169;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      var tmp = padding_1(maxWidth(margin_1(fillMaxWidth(Companion_getInstance_1()), VOID, VOID, get_px(10)), get_percent(500)), get_px(5));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.skillBar.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 1844909754, true, skillBar$lambda(name, animatePercentage, progressBarHeight_0, percentage_0, index));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.skillBar.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_59(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column(tmp, null, null, null, tmp0, $composer_0, 24584, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(skillBar$lambda_0(name, index, progressBarHeight_0, percentage_0, animatePercentage, $changed, $default));
    }
  }
  function skillBar$lambda$lambda$lambda($name) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($name, $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_55($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function skillBar$lambda$lambda$lambda_0($animatePercentage) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text('' + $animatePercentage + '%', $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_56($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function skillBar$lambda$lambda($name, $animatePercentage) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(Companion_getInstance_1(), get_px(0)), ['Roboto']), get_px(18)), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Primary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.skillBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -240498439, true, skillBar$lambda$lambda$lambda($name));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.skillBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_55(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        P(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_4 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(Companion_getInstance_1(), get_px(0)), ['Roboto']), get_px(18)), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Primary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.skillBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_5, 1593477730, true, skillBar$lambda$lambda$lambda_0($animatePercentage));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.skillBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_56(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        P(tmp_4, tmp0_0, $composer_0, 48, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_57($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function skillBar$lambda$lambda_0($progressBarHeight, $percentage, $index) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = backgroundColor(height(fillMaxWidth(Companion_getInstance_1()), $progressBarHeight._v), Theme_LightGray_getInstance().get_rgb_18ix0c_k$());
        Box(tmp_0, null, null, null, $composer_0, 8, 14);
        var tmp_1 = transition(backgroundColor(height(fillMaxWidth(Companion_getInstance_1(), $percentage._v), $progressBarHeight._v), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), [CSSTransition_init_$Create$('width', get_ms(1000), VOID, times_0(get_ms(100), $index))]);
        Box(tmp_1, null, null, null, $composer_0, 8, 14);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_58($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function skillBar$lambda($name, $animatePercentage, $progressBarHeight, $percentage, $index) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = margin_1(fillMaxWidth(Companion_getInstance_1()), VOID, VOID, get_px(5));
        var tmp_1 = SpaceBetween_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.skillBar.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 70707159, true, skillBar$lambda$lambda($name, $animatePercentage));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.skillBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_57(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Row(tmp_0, tmp_1, null, null, tmp0, $composer_0, 24648, 12);
        var tmp_5 = fillMaxWidth(Companion_getInstance_1());
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.skillBar.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_6 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_6, 986250612, true, skillBar$lambda$lambda_0($progressBarHeight, $percentage, $index));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_7;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.skillBar.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_58(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = it_0;
        }
        var tmp_8 = tmp_7;
        var tmp0_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        Box(tmp_5, null, null, tmp0_0, $composer_0, 3080, 6);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_59($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function skillBar$lambda_0($name, $index, $progressBarHeight, $percentage, $animatePercentage, $$changed, $$default) {
    return function ($composer, $force) {
      skillBar($name, $index, $progressBarHeight._v, $percentage._v, $animatePercentage, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function socialBar(row, $composer, $changed, $default) {
    var row_0 = {_v: row};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1157755090);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(row_0._v) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        row_0._v = false;
      }
      if (row_0._v) {
        $composer_0.startReplaceableGroup_ip860b_k$(921407726);
        var tmp47_modifier = backgroundColor(borderRadius(minHeight(padding_1(margin_1(Companion_getInstance_1(), get_px(25)), VOID, get_px(25)), get_px(40)), get_px(20)), Colors_getInstance().get_White_ij46ow_k$());
        var tmp48_verticalAlignment = CenterVertically_getInstance();
        var tmp49_horizontalArrangement = Center_getInstance_0();
        Row(tmp47_modifier, tmp49_horizontalArrangement, tmp48_verticalAlignment, null, ComposableSingletons$SocailBarKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 25160, 8);
        $composer_0.endReplaceableGroup_ern0ak_k$();
      } else {
        $composer_0.startReplaceableGroup_ip860b_k$(921838130);
        var tmp = backgroundColor(borderRadius(minWidth(padding_1(margin_0(Companion_getInstance_1(), VOID, get_px(25)), get_px(25)), get_px(40)), get_px(20)), Colors_getInstance().get_White_ij46ow_k$());
        var tmp_0 = Center_getInstance_0();
        var tmp_1 = CenterHorizontally_getInstance();
        Column(tmp, tmp_0, tmp_1, null, ComposableSingletons$SocailBarKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 25160, 8);
        $composer_0.endReplaceableGroup_ern0ak_k$();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(socialBar$lambda(row_0, $changed, $default));
    }
  }
  function socialLink(row, $composer, $changed, $default) {
    var row_0 = {_v: row};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-946802197);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(row_0._v) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        row_0._v = false;
      }
      var tmp = OpenLinkStrategy_IN_NEW_TAB_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.socialLink.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 799046332, true, socialLink$lambda(row_0));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.socialLink.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_63(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Link_0('https://www.google.com', null, null, null, tmp, null, false, null, tmp0, $composer_0, 100687878, 238);
      var tmp_3 = OpenLinkStrategy_IN_NEW_TAB_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.socialLink.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver_0 = composableLambda(tmp_4, -1479730075, true, socialLink$lambda_0(row_0));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.socialLink.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_64(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      Link_0('https://www.google.com', null, null, null, tmp_3, null, false, null, tmp0_0, $composer_0, 100687878, 238);
      var tmp_7 = OpenLinkStrategy_IN_NEW_TAB_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.socialLink.<anonymous>' call
      var tmp_8 = $composer_0;
      var dispatchReceiver_1 = composableLambda(tmp_8, -1060213244, true, socialLink$lambda_1(row_0));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_3 = $composer_0;
      $composer_3.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_3, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_3.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.socialLink.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_65(dispatchReceiver_1);
        $composer_3.updateRememberedValue_l1wh71_k$(value_1);
        tmp_9 = value_1;
      } else {
        tmp_9 = it_1;
      }
      var tmp_10 = tmp_9;
      var tmp0_1 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_3.endReplaceableGroup_ern0ak_k$();
      Link_0('https://www.google.com', null, null, null, tmp_7, null, false, null, tmp0_1, $composer_0, 100687878, 238);
      var tmp_11 = OpenLinkStrategy_IN_NEW_TAB_getInstance();
      Link_0('https://www.google.com', null, null, null, tmp_11, null, false, null, ComposableSingletons$SocailBarKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 100687878, 238);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(socialLink$lambda_2(row_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_60($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SocailBarKt$lambda_1$lambda_fi68ng($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      socialLink(true, $composer_0, 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_61($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SocailBarKt$lambda_2$lambda_qpbc9h($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      socialLink(false, $composer_0, 0, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_62($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$SocailBarKt$lambda_3$lambda_24b4sq($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      FaLinkedin(toModifier_1(get_SocialLinkStyle(), [], $composer_0, 72), IconSize_LG_getInstance(), $composer_0, 56, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$SocailBarKt() {
    ComposableSingletons$SocailBarKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_60(composableLambdaInstance(1184506764, false, ComposableSingletons$SocailBarKt$lambda_1$lambda_fi68ng));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_61(composableLambdaInstance(1675550409, false, ComposableSingletons$SocailBarKt$lambda_2$lambda_qpbc9h));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_62(composableLambdaInstance(-640696413, false, ComposableSingletons$SocailBarKt$lambda_3$lambda_24b4sq));
  }
  protoOf(ComposableSingletons$SocailBarKt).get_lambda_1_4b504g_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$SocailBarKt).get_lambda_2_bldq01_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$SocailBarKt).get_lambda_3_rhwg4i_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$SocailBarKt_instance;
  function ComposableSingletons$SocailBarKt_getInstance() {
    if (ComposableSingletons$SocailBarKt_instance == null)
      new ComposableSingletons$SocailBarKt();
    return ComposableSingletons$SocailBarKt_instance;
  }
  function socialBar$lambda($row, $$changed, $$default) {
    return function ($composer, $force) {
      socialBar($row._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function socialLink$lambda($row) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp50_$receiver = toModifier_1(get_SocialLinkStyle(), [], $composer_0, 72);
        var tmp51_bottom = $row._v ? get_px(0) : get_px(40);
        var tmp52_right = $row._v ? get_px(40) : get_px(0);
        FaFacebook(margin_0(tmp50_$receiver, VOID, tmp52_right, tmp51_bottom), IconSize_LG_getInstance(), $composer_0, 56, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_63($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function socialLink$lambda_0($row) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp53_$receiver = toModifier_1(get_SocialLinkStyle(), [], $composer_0, 72);
        var tmp54_bottom = $row._v ? get_px(0) : get_px(40);
        var tmp55_right = $row._v ? get_px(40) : get_px(0);
        FaTwitter(margin_0(tmp53_$receiver, VOID, tmp55_right, tmp54_bottom), IconSize_LG_getInstance(), $composer_0, 56, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_64($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function socialLink$lambda_1($row) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp56_$receiver = toModifier_1(get_SocialLinkStyle(), [], $composer_0, 72);
        var tmp57_bottom = $row._v ? get_px(0) : get_px(40);
        var tmp58_right = $row._v ? get_px(40) : get_px(0);
        FaInstagram(margin_0(tmp56_$receiver, VOID, tmp58_right, tmp57_bottom), IconSize_LG_getInstance(), $composer_0, 56, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_65($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function socialLink$lambda_2($row, $$changed, $$default) {
    return function ($composer, $force) {
      socialLink($row._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function testimonialCard(modifier, testimonial, breakpoint, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1385257975);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(testimonial) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 256 : 128);
    if (!(($default & 1) === 1) || (!(($dirty & 731) === 146) || !$composer_0.get_skipping_3owdve_k$())) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      var tmp = maxWidth(modifier_0._v, get_px(500));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -1739118452, true, testimonialCard$lambda(breakpoint, testimonial));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_72(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Row(tmp, null, null, null, tmp0, $composer_0, 24584, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(testimonialCard$lambda_0(modifier_0, testimonial, breakpoint, $changed, $default));
    }
  }
  function testimonialCard$lambda$lambda$lambda$lambda$lambda($testimonial) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($testimonial.get_fullName_9skygt_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_66($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function testimonialCard$lambda$lambda$lambda$lambda$lambda_0($testimonial) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($testimonial.get_profession_uuavt1_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_67($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function testimonialCard$lambda$lambda$lambda$lambda($testimonial) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(Companion_getInstance_1()), get_px(0)), ['Roboto']), get_px(18)), Companion_getInstance_2().get_Bold_wnz5ke_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -557673061, true, testimonialCard$lambda$lambda$lambda$lambda$lambda($testimonial));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_66(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        P(tmp_0, tmp0, $composer_0, 48, 0);
        var tmp_4 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(Companion_getInstance_1()), get_px(0)), ['Roboto']), get_px(12)), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_5, -661403630, true, testimonialCard$lambda$lambda$lambda$lambda$lambda_0($testimonial));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_67(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        P(tmp_4, tmp0_0, $composer_0, 48, 0);
        ratingBar(margin_1(Companion_getInstance_1(), get_px(5)), $composer_0, 8, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_68($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function testimonialCard$lambda$lambda$lambda($testimonial) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 1795885309, true, testimonialCard$lambda$lambda$lambda$lambda($testimonial));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_68(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Column(null, null, null, null, tmp0, $composer_0, 24576, 15);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_69($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function testimonialCard$lambda$lambda$lambda_0($testimonial) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($testimonial.get_review_iyht9d_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_70($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function testimonialCard$lambda$lambda($testimonial) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = margin_1(fillMaxWidth(Companion_getInstance_1()), VOID, VOID, get_px(10));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -596721274, true, testimonialCard$lambda$lambda$lambda($testimonial));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_69(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Row(tmp_0, null, null, null, tmp0, $composer_0, 24584, 14);
        var tmp_4 = toAttrs(color(fontWeight(fontSize(fontFamily(margin(fillMaxWidth(Companion_getInstance_1()), get_px(0)), ['Roboto']), get_px(12)), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_5, 1879226849, true, testimonialCard$lambda$lambda$lambda_0($testimonial));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_70(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        P(tmp_4, tmp0_0, $composer_0, 48, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_71($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function testimonialCard$lambda($breakpoint, $testimonial) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp59_$receiver = maxWidth(margin_0(Companion_getInstance_1(), VOID, get_px(20)), $breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_px(160) : get_px(80));
        var tmp60_topLeft = get_px(60);
        var tmp61_topRight = get_px(60);
        var tmp62_bottomLeft = get_px(60);
        var tmp63_bottomRight = get_px(0);
        var tmp64_modifier = borderRadius_0(tmp59_$receiver, tmp60_topLeft, tmp61_topRight, tmp63_bottomRight, tmp62_bottomLeft);
        var tmp65_src = $testimonial.get_image_it3i2a_k$();
        Image(tmp65_src, tmp64_modifier, null, null, null, 'Avatar Image', false, null, $composer_0, 196672, 220);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 763147715, true, testimonialCard$lambda$lambda($testimonial));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.components.testimonialCard.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_71(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Column(null, null, null, null, tmp0, $composer_0, 24576, 15);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_72($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function testimonialCard$lambda_0($modifier, $testimonial, $breakpoint, $$changed, $$default) {
    return function ($composer, $force) {
      testimonialCard($modifier._v, $testimonial, $breakpoint, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var Achievement_Completed_instance;
  var Achievement_Active_instance;
  var Achievement_Satisfied_instance;
  var Achievement_Team_instance;
  function values() {
    return [Achievement_Completed_getInstance(), Achievement_Active_getInstance(), Achievement_Satisfied_getInstance(), Achievement_Team_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Completed':
        return Achievement_Completed_getInstance();
      case 'Active':
        return Achievement_Active_getInstance();
      case 'Satisfied':
        return Achievement_Satisfied_getInstance();
      case 'Team':
        return Achievement_Team_getInstance();
      default:
        Achievement_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Achievement_entriesInitialized;
  function Achievement_initEntries() {
    if (Achievement_entriesInitialized)
      return Unit_getInstance();
    Achievement_entriesInitialized = true;
    Achievement_Completed_instance = new Achievement('Completed', 0, 'checkmark_icon.svg', 120, 'Completed Projects');
    Achievement_Active_instance = new Achievement('Active', 1, 'shield_icon.svg', 12, 'Active Projects');
    Achievement_Satisfied_instance = new Achievement('Satisfied', 2, 'happy_icon.svg', 42, 'Satisfied Clients');
    Achievement_Team_instance = new Achievement('Team', 3, 'user_icon.svg', 10, 'Team Members');
  }
  var $ENTRIES;
  function Achievement(name, ordinal, icon, number, description) {
    Enum.call(this, name, ordinal);
    this.icon_1 = icon;
    this.number_1 = number;
    this.description_1 = description;
  }
  protoOf(Achievement).get_icon_wont8i_k$ = function () {
    return this.icon_1;
  };
  protoOf(Achievement).get_number_hay53m_k$ = function () {
    return this.number_1;
  };
  protoOf(Achievement).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
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
  function valueOf_0(value) {
    switch (value) {
      case 'First':
        return Experience_First_getInstance();
      case 'Second':
        return Experience_Second_getInstance();
      case 'Third':
        return Experience_Third_getInstance();
      default:
        Experience_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Experience_entriesInitialized;
  function Experience_initEntries() {
    if (Experience_entriesInitialized)
      return Unit_getInstance();
    Experience_entriesInitialized = true;
    Experience_First_instance = new Experience('First', 0, '01', 'Kotlin Multi-Platform Developer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Google', 'February 2022', 'NOW');
    Experience_Second_instance = new Experience('Second', 1, '02', 'Mobile Developer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Facebook', 'January 2021', 'October 2021');
    Experience_Third_instance = new Experience('Third', 2, '03', 'Freelancer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Netflix', 'March 2020', 'August 2020');
  }
  var $ENTRIES_0;
  function Experience(name, ordinal, number, jobPosition, description, company, from, to) {
    Enum.call(this, name, ordinal);
    this.number_1 = number;
    this.jobPosition_1 = jobPosition;
    this.description_1 = description;
    this.company_1 = company;
    this.from_1 = from;
    this.to_1 = to;
  }
  protoOf(Experience).get_number_hay53m_k$ = function () {
    return this.number_1;
  };
  protoOf(Experience).get_jobPosition_k6sg9v_k$ = function () {
    return this.jobPosition_1;
  };
  protoOf(Experience).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(Experience).get_company_gzg49g_k$ = function () {
    return this.company_1;
  };
  protoOf(Experience).get_from_wom7eb_k$ = function () {
    return this.from_1;
  };
  protoOf(Experience).get_to_kntnng_k$ = function () {
    return this.to_1;
  };
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
  function valueOf_1(value) {
    switch (value) {
      case 'One':
        return Portfolio_One_getInstance();
      case 'Two':
        return Portfolio_Two_getInstance();
      case 'Three':
        return Portfolio_Three_getInstance();
      case 'Four':
        return Portfolio_Four_getInstance();
      case 'Five':
        return Portfolio_Five_getInstance();
      default:
        Portfolio_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var Portfolio_entriesInitialized;
  function Portfolio_initEntries() {
    if (Portfolio_entriesInitialized)
      return Unit_getInstance();
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
    this.image_1 = image;
    this.title_1 = title;
    this.description_1 = description;
  }
  protoOf(Portfolio).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(Portfolio).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(Portfolio).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
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
  function valueOf_2(value) {
    switch (value) {
      case 'Home':
        return Section_Home_getInstance();
      case 'About':
        return Section_About_getInstance();
      case 'Service':
        return Section_Service_getInstance();
      case 'Portfolio':
        return Section_Portfolio_getInstance();
      case 'Experience':
        return Section_Experience_getInstance();
      case 'Contact':
        return Section_Contact_getInstance();
      case 'Testimonial':
        return Section_Testimonial_getInstance();
      case 'Achievements':
        return Section_Achievements_getInstance();
      default:
        Section_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var Section_entriesInitialized;
  function Section_initEntries() {
    if (Section_entriesInitialized)
      return Unit_getInstance();
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
    this.id_1 = id;
    this.title_1 = title;
    this.subtitle_1 = subtitle;
    this.path_1 = path;
  }
  protoOf(Section).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(Section).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(Section).get_subtitle_55eoyp_k$ = function () {
    return this.subtitle_1;
  };
  protoOf(Section).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
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
  function valueOf_3(value) {
    switch (value) {
      case 'Android':
        return Service_Android_getInstance();
      case 'IOS':
        return Service_IOS_getInstance();
      case 'Flutter':
        return Service_Flutter_getInstance();
      case 'React':
        return Service_React_getInstance();
      case 'WEB':
        return Service_WEB_getInstance();
      case 'Design':
        return Service_Design_getInstance();
      case 'Business':
        return Service_Business_getInstance();
      case 'SEO':
        return Service_SEO_getInstance();
      default:
        Service_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_3() {
    if ($ENTRIES_3 == null)
      $ENTRIES_3 = enumEntries(values_3());
    return $ENTRIES_3;
  }
  var Service_entriesInitialized;
  function Service_initEntries() {
    if (Service_entriesInitialized)
      return Unit_getInstance();
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
    this.icon_1 = icon;
    this.imageDes_1 = imageDes;
    this.title_1 = title;
    this.description_1 = description;
  }
  protoOf(Service).get_icon_wont8i_k$ = function () {
    return this.icon_1;
  };
  protoOf(Service).get_imageDes_p0dim8_k$ = function () {
    return this.imageDes_1;
  };
  protoOf(Service).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(Service).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
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
  function valueOf_4(value) {
    switch (value) {
      case 'Creative':
        return Skill_Creative_getInstance();
      case 'Accountable':
        return Skill_Accountable_getInstance();
      case 'HardWorking':
        return Skill_HardWorking_getInstance();
      case 'Value':
        return Skill_Value_getInstance();
      case 'Delivery':
        return Skill_Delivery_getInstance();
      default:
        Skill_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_4() {
    if ($ENTRIES_4 == null)
      $ENTRIES_4 = enumEntries(values_4());
    return $ENTRIES_4;
  }
  var Skill_entriesInitialized;
  function Skill_initEntries() {
    if (Skill_entriesInitialized)
      return Unit_getInstance();
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
    this.title_1 = title;
    this.percentage_1 = percentage;
  }
  protoOf(Skill).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(Skill).get_percentage_zf35ct_k$ = function () {
    return this.percentage_1;
  };
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
  function values_5() {
    return [Testimonial_First_getInstance(), Testimonial_Second_getInstance(), Testimonial_Third_getInstance(), Testimonial_Fourth_getInstance(), Testimonial_Fifth_getInstance(), Testimonial_Sixth_getInstance()];
  }
  function valueOf_5(value) {
    switch (value) {
      case 'First':
        return Testimonial_First_getInstance();
      case 'Second':
        return Testimonial_Second_getInstance();
      case 'Third':
        return Testimonial_Third_getInstance();
      case 'Fourth':
        return Testimonial_Fourth_getInstance();
      case 'Fifth':
        return Testimonial_Fifth_getInstance();
      case 'Sixth':
        return Testimonial_Sixth_getInstance();
      default:
        Testimonial_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_5() {
    if ($ENTRIES_5 == null)
      $ENTRIES_5 = enumEntries(values_5());
    return $ENTRIES_5;
  }
  var Testimonial_entriesInitialized;
  function Testimonial_initEntries() {
    if (Testimonial_entriesInitialized)
      return Unit_getInstance();
    Testimonial_entriesInitialized = true;
    Testimonial_First_instance = new Testimonial('First', 0, 'avatar1.png', 'Milica Ilic', 'Web Designer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    Testimonial_Second_instance = new Testimonial('Second', 1, 'avatar2.png', 'Stefan Jovanovic', 'Android Developer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    Testimonial_Third_instance = new Testimonial('Third', 2, 'avatar3.png', 'Ana Milic', 'Business Analyst', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    Testimonial_Fourth_instance = new Testimonial('Fourth', 3, 'avatar4.png', 'Darko Pesic', 'Top Manager', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    Testimonial_Fifth_instance = new Testimonial('Fifth', 4, 'avatar5.png', 'Milena Nesovic', 'HR Recruiter', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    Testimonial_Sixth_instance = new Testimonial('Sixth', 5, 'avatar6.png', 'Aca Rodic', 'Cyber Security Analyst', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  }
  var $ENTRIES_5;
  function Testimonial(name, ordinal, image, fullName, profession, review) {
    Enum.call(this, name, ordinal);
    this.image_1 = image;
    this.fullName_1 = fullName;
    this.profession_1 = profession;
    this.review_1 = review;
  }
  protoOf(Testimonial).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(Testimonial).get_fullName_9skygt_k$ = function () {
    return this.fullName_1;
  };
  protoOf(Testimonial).get_profession_uuavt1_k$ = function () {
    return this.profession_1;
  };
  protoOf(Testimonial).get_review_iyht9d_k$ = function () {
    return this.review_1;
  };
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
  function values_6() {
    return [Theme_Primary_getInstance(), Theme_Secondary_getInstance(), Theme_Gray_getInstance(), Theme_LightGray_getInstance(), Theme_LighterGray_getInstance()];
  }
  function valueOf_6(value) {
    switch (value) {
      case 'Primary':
        return Theme_Primary_getInstance();
      case 'Secondary':
        return Theme_Secondary_getInstance();
      case 'Gray':
        return Theme_Gray_getInstance();
      case 'LightGray':
        return Theme_LightGray_getInstance();
      case 'LighterGray':
        return Theme_LighterGray_getInstance();
      default:
        Theme_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_6() {
    if ($ENTRIES_6 == null)
      $ENTRIES_6 = enumEntries(values_6());
    return $ENTRIES_6;
  }
  var Theme_entriesInitialized;
  function Theme_initEntries() {
    if (Theme_entriesInitialized)
      return Unit_getInstance();
    Theme_entriesInitialized = true;
    Theme_Primary_instance = new Theme('Primary', 0, '#00A78E', rgb(0, 167, 142));
    Theme_Secondary_instance = new Theme('Secondary', 1, '#121D34', rgb(18, 29, 52));
    Theme_Gray_instance = new Theme('Gray', 2, '#CFCFCF', rgb(207, 207, 207));
    Theme_LightGray_instance = new Theme('LightGray', 3, '#EDEDED', rgb(237, 237, 237));
    Theme_LighterGray_instance = new Theme('LighterGray', 4, '#F9F9F9', rgb(249, 249, 249));
  }
  var $ENTRIES_6;
  function Theme(name, ordinal, hexValue, rgb) {
    Enum.call(this, name, ordinal);
    this.hexValue_1 = hexValue;
    this.rgb_1 = rgb;
  }
  protoOf(Theme).get_hexValue_vgfysf_k$ = function () {
    return this.hexValue_1;
  };
  protoOf(Theme).get_rgb_18ix0c_k$ = function () {
    return this.rgb_1;
  };
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(279025250);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startReplaceableGroup_ip860b_k$(88049748);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.pages.homePage.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var menuOpened$delegate = tmp0_group;
      var tmp_1 = fillMaxSize(Companion_getInstance_1());
      var tmp_2 = Top_getInstance();
      var tmp_3 = CenterHorizontally_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.pages.homePage.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, 298293387, true, homePage$lambda_1(menuOpened$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.pages.homePage.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_73(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column(tmp_1, tmp_2, tmp_3, null, tmp0, $composer_0, 25160, 8);
      backToTopBottom($composer_0, 0);
      if (homePage$lambda(menuOpened$delegate)) {
        $composer_0.startReplaceableGroup_ip860b_k$(88067304);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_1 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = this_1.rememberedValue_4dg93v_k$();
        var tmp_7;
        if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.pages.homePage.<anonymous>' call
          var value_1 = homePage$lambda_2(menuOpened$delegate);
          this_1.updateRememberedValue_l1wh71_k$(value_1);
          tmp_7 = value_1;
        } else {
          tmp_7 = it_1;
        }
        var tmp_8 = tmp_7;
        var tmp1_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        overflowMenu(tmp1_group, $composer_0, 6);
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(homePage$lambda_3($changed));
    }
  }
  function homePage$lambda($menuOpened$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('menuOpened', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $menuOpened$delegate.get_value_j01efc_k$();
  }
  function homePage$lambda_0($menuOpened$delegate, _set____db54di) {
    getLocalDelegateReference('menuOpened', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $menuOpened$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function homePage$lambda$lambda($menuOpened$delegate) {
    return function () {
      homePage$lambda_0($menuOpened$delegate, true);
      return Unit_getInstance();
    };
  }
  function homePage$lambda_1($menuOpened$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        $composer_0.startReplaceableGroup_ip860b_k$(-305906714);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.pages.homePage.<anonymous>.<anonymous>.<anonymous>' call
          var value = homePage$lambda$lambda($menuOpened$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        mainSection(tmp0_group, $composer_0, 6);
        aboutSection($composer_0, 0);
        serviceSection($composer_0, 0);
        portfolioSection($composer_0, 0);
        achievementsSection($composer_0, 0);
        testimonialSection($composer_0, 0);
        experienceSection($composer_0, 0);
        contactSection($composer_0, 0);
        footerSection($composer_0, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_73($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function homePage$lambda_2($menuOpened$delegate) {
    return function () {
      homePage$lambda_0($menuOpened$delegate, false);
      return Unit_getInstance();
    };
  }
  function homePage$lambda_3($$changed) {
    return function ($composer, $force) {
      homePage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function aboutSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(925734960);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = padding_1(maxWidth(id(Companion_getInstance_1(), Section_About_getInstance().get_id_kntnx8_k$()), get_px(1920)), get_px(150));
      var tmp_0 = Center_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$AboutSectionKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3144, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(aboutSection$lambda($changed));
    }
  }
  function aboutContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-580419132);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp2_horizontalAlignment = CenterHorizontally_getInstance();
      var tmp3_modifier = maxWidth(fillMaxWidth(Companion_getInstance_1(), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90)), get_px(1200));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.aboutContent.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -16381907, true, aboutContent$lambda(breakpoint));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.aboutContent.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_78(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column(tmp3_modifier, null, tmp2_horizontalAlignment, null, tmp0, $composer_0, 25096, 10);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(aboutContent$lambda_0($changed));
    }
  }
  function aboutImage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1466923802);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = fillMaxWidth(Companion_getInstance_1());
      var tmp_0 = Center_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$AboutSectionKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 3144, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(aboutImage$lambda($changed));
    }
  }
  function aboutMe($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(516335809);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(773894976);
      sourceInformation($composer_1, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = aboutMe$lambda_1;
      }
      var composer = $composer_1;
      $composer_1.startReplaceableGroup_ip860b_k$(-954370320);
      sourceInformation($composer_1, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var wrapper = tmp1_group;
      var tmp0 = wrapper.get_coroutineScope_5k7h45_k$();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var scope = tmp0;
      $composer_0.startReplaceableGroup_ip860b_k$(450863617);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.aboutMe.<anonymous>' call
        var value_0 = mutableStateOf(false);
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var viewportEntered$delegate = tmp0_group;
      $composer_0.startReplaceableGroup_ip860b_k$(450865645);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.aboutMe.<anonymous>' call
        var value_1 = mutableStateListOf([0, 0, 0, 0, 0]);
        this_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var animatePercentage = tmp1_group_0;
      var tmp_5 = Section_About_getInstance().get_id_kntnx8_k$();
      observeViewportEntered(tmp_5, 300.0, aboutMe$lambda_2(scope, viewportEntered$delegate, animatePercentage), $composer_0, 48);
      var tmp_6 = fillMaxWidth(Companion_getInstance_1());
      var tmp_7 = Center_getInstance_0();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.aboutMe.<anonymous>' call
      var tmp_8 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_8, -1157233480, true, aboutMe$lambda_3(animatePercentage, viewportEntered$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.aboutMe.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_79(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value_2);
        tmp_9 = value_2;
      } else {
        tmp_9 = it_2;
      }
      var tmp_10 = tmp_9;
      var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      Column(tmp_6, tmp_7, null, null, tmp0_0, $composer_0, 24648, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(aboutMe$lambda_4($changed));
    }
  }
  function ComposableLambda$invoke$ref_74($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_1$lambda_zx8t0($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      aboutContent($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_75($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_2$lambda_rtp897($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp4_modifier = fillMaxWidth(toModifier(get_AboutImageStyle(), $composer_0, 0), get_percent(80));
      var tmp5_src = 'about_image.png';
      Image_0(tmp5_src, 'About Image', tmp4_modifier, null, null, null, false, null, $composer_0, 566, 248);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_76($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutSectionKt$lambda_3$lambda_edscnq($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutSectionKt() {
    ComposableSingletons$AboutSectionKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_74(composableLambdaInstance(-697821590, false, ComposableSingletons$AboutSectionKt$lambda_1$lambda_zx8t0));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_75(composableLambdaInstance(2062109088, false, ComposableSingletons$AboutSectionKt$lambda_2$lambda_rtp897));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_76(composableLambdaInstance(-2046959018, false, ComposableSingletons$AboutSectionKt$lambda_3$lambda_edscnq));
  }
  protoOf(ComposableSingletons$AboutSectionKt).get_lambda_1_4b504g_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$AboutSectionKt).get_lambda_2_bldq01_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$AboutSectionKt).get_lambda_3_rhwg4i_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
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
    return $viewportEntered$delegate.get_value_j01efc_k$();
  }
  function aboutMe$lambda_0($viewportEntered$delegate, _set____db54di) {
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $viewportEntered$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function aboutSection$lambda($$changed) {
    return function ($composer, $force) {
      aboutSection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function aboutContent$lambda$lambda($breakpoint) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        $composer_0.startReplaceableGroup_ip860b_k$(-1055600419);
        if ($breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0) {
          aboutImage($composer_0, 0);
        }
        $composer_0.endReplaceableGroup_ern0ak_k$();
        aboutMe($composer_0, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_77($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function aboutContent$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp0_modifier = fillMaxWidth(Companion_getInstance_1(), $breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(90) : get_percent(100));
        var tmp1_numColumns = numColumns(1, VOID, 2);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.sections.aboutContent.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, -1065714652, true, aboutContent$lambda$lambda($breakpoint));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.sections.aboutContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_77(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        SimpleGrid(tmp1_numColumns, tmp0_modifier, null, null, tmp0, $composer_0, 24648, 12);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_78($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function aboutContent$lambda_0($$changed) {
    return function ($composer, $force) {
      aboutContent($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function aboutImage$lambda($$changed) {
    return function ($composer, $force) {
      aboutImage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function aboutMe$lambda_1() {
    return EmptyCoroutineContext_getInstance();
  }
  function aboutMe$lambda$slambda$lambda($animatePercentage, $entry) {
    return function (it) {
      $animatePercentage.set_9t5s9l_k$($entry.get_ordinal_ip24qg_k$(), it);
      return Unit_getInstance();
    };
  }
  function aboutMe$lambda$slambda($entry, $animatePercentage, resultContinuation) {
    this.$entry_1 = $entry;
    this.$animatePercentage_1 = $animatePercentage;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(aboutMe$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(aboutMe$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(aboutMe$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = numberToInt(this.$entry_1.get_percentage_zf35ct_k$().value);
            suspendResult = animatePercentage(tmp_0, VOID, aboutMe$lambda$slambda$lambda(this.$animatePercentage_1, this.$entry_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(aboutMe$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new aboutMe$lambda$slambda(this.$entry_1, this.$animatePercentage_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(aboutMe$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function aboutMe$lambda$slambda_0($entry, $animatePercentage, resultContinuation) {
    var i = new aboutMe$lambda$slambda($entry, $animatePercentage, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function aboutMe$lambda_2($scope, $viewportEntered$delegate, $animatePercentage) {
    return function () {
      aboutMe$lambda_0($viewportEntered$delegate, true);
      var tmp0_iterator = get_entries_4().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.honger.ngel.sections.aboutMe.<anonymous>.<anonymous>' call
        launch($scope, VOID, VOID, aboutMe$lambda$slambda_0(element, $animatePercentage, null));
      }
      return Unit_getInstance();
    };
  }
  function aboutMe$lambda_3($animatePercentage, $viewportEntered$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = Section_About_getInstance();
        sectionTitle(null, tmp_0, null, $composer_0, 48, 5);
        P(toAttrs(color(fontStyle(fontWeight(fontFamily(fontSize(maxWidth(margin(fillMaxWidth(toModifier(get_AboutTextStyle(), $composer_0, 0)), get_px(25)), get_px(500)), get_px(18)), ['Roboto']), Companion_getInstance_2().get_Normal_22avww_k$()), Companion_getInstance_14().get_Initial_a0h2v9_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$())), ComposableSingletons$AboutSectionKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 48, 0);
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = get_entries_4().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.honger.ngel.sections.aboutMe.<anonymous>.<anonymous>.<anonymous>' call
          var tmp6_name = element.get_title_iz32un_k$();
          var tmp7_percentage = aboutMe$lambda($viewportEntered$delegate) ? element.get_percentage_zf35ct_k$() : get_percent(0);
          var tmp8_index = element.get_ordinal_ip24qg_k$();
          var tmp9_animatePercentage = aboutMe$lambda($viewportEntered$delegate) ? $animatePercentage.get_c1px32_k$(element.get_ordinal_ip24qg_k$()) : 0;
          skillBar(tmp6_name, tmp8_index, null, tmp7_percentage, tmp9_animatePercentage, $composer_0, 4096, 4);
        }
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_79($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function aboutMe$lambda_4($$changed) {
    return function ($composer, $force) {
      aboutMe($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function achievementsSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1768467656);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = backgroundColor(padding_1(maxWidth(fillMaxWidth(id(Companion_getInstance_1(), Section_Achievements_getInstance().get_id_kntnx8_k$())), get_px(1920)), get_px(100)), Theme_LighterGray_getInstance().get_rgb_18ix0c_k$());
      var tmp_0 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.achievementsSection.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1649632242, true, achievementsSection$lambda(breakpoint));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.achievementsSection.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_80(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Box(tmp, tmp_0, null, tmp0, $composer_0, 3144, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(achievementsSection$lambda_0($changed));
    }
  }
  function achievementsContent(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2009039307);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(773894976);
      sourceInformation($composer_1, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = achievementsContent$lambda_1;
      }
      var composer = $composer_1;
      $composer_1.startReplaceableGroup_ip860b_k$(-954370320);
      sourceInformation($composer_1, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var wrapper = tmp1_group;
      var tmp0 = wrapper.get_coroutineScope_5k7h45_k$();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var scope = tmp0;
      $composer_0.startReplaceableGroup_ip860b_k$(1786169777);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.achievementsContent.<anonymous>' call
        var value_0 = mutableStateOf(false);
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var viewportEntered$delegate = tmp0_group;
      $composer_0.startReplaceableGroup_ip860b_k$(1786171738);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.achievementsContent.<anonymous>' call
        var value_1 = mutableStateListOf([0, 0, 0, 0]);
        this_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var animatedNumbers = tmp1_group_0;
      var tmp_5 = Section_Achievements_getInstance().get_id_kntnx8_k$();
      observeViewportEntered(tmp_5, 700.0, achievementsContent$lambda_2(scope, viewportEntered$delegate, animatedNumbers), $composer_0, 54);
      var tmp_6 = numColumns(1, VOID, 2, 4);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.achievementsContent.<anonymous>' call
      var tmp_7 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_7, -1903969620, true, achievementsContent$lambda_3(breakpoint, animatedNumbers, viewportEntered$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_8;
      if (invalid || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.achievementsContent.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_81(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value_2);
        tmp_8 = value_2;
      } else {
        tmp_8 = it_2;
      }
      var tmp_9 = tmp_8;
      var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      SimpleGrid(tmp_6, null, null, null, tmp0_0, $composer_0, 24584, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(achievementsContent$lambda_4(breakpoint, $changed));
    }
  }
  function achievementsContent$lambda($viewportEntered$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $viewportEntered$delegate.get_value_j01efc_k$();
  }
  function achievementsContent$lambda_0($viewportEntered$delegate, _set____db54di) {
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $viewportEntered$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function achievementsSection$lambda($breakpoint) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        achievementsContent($breakpoint, $composer_0, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_80($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function achievementsSection$lambda_0($$changed) {
    return function ($composer, $force) {
      achievementsSection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function achievementsContent$lambda_1() {
    return EmptyCoroutineContext_getInstance();
  }
  function achievementsContent$lambda$slambda$lambda($animatedNumbers, $achievement) {
    return function (it) {
      $animatedNumbers.set_9t5s9l_k$($achievement.get_ordinal_ip24qg_k$(), it);
      return Unit_getInstance();
    };
  }
  function achievementsContent$lambda$slambda($achievement, $animatedNumbers, resultContinuation) {
    this.$achievement_1 = $achievement;
    this.$animatedNumbers_1 = $animatedNumbers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(achievementsContent$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(achievementsContent$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(achievementsContent$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = this.$achievement_1.get_number_hay53m_k$();
            suspendResult = animateNumbers(tmp_0, VOID, achievementsContent$lambda$slambda$lambda(this.$animatedNumbers_1, this.$achievement_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(achievementsContent$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new achievementsContent$lambda$slambda(this.$achievement_1, this.$animatedNumbers_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(achievementsContent$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function achievementsContent$lambda$slambda_0($achievement, $animatedNumbers, resultContinuation) {
    var i = new achievementsContent$lambda$slambda($achievement, $animatedNumbers, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function achievementsContent$lambda_2($scope, $viewportEntered$delegate, $animatedNumbers) {
    return function () {
      achievementsContent$lambda_0($viewportEntered$delegate, true);
      var tmp0_iterator = get_entries().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.honger.ngel.sections.achievementsContent.<anonymous>.<anonymous>' call
        launch($scope, VOID, VOID, achievementsContent$lambda$slambda_0(element, $animatedNumbers, null));
      }
      return Unit_getInstance();
    };
  }
  function achievementsContent$lambda_3($breakpoint, $animatedNumbers, $viewportEntered$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = get_entries().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.honger.ngel.sections.achievementsContent.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = Companion_getInstance_1();
          var tmp_1;
          if (element.equals(Achievement_Team_getInstance())) {
            tmp_1 = get_px(0);
          } else {
            tmp_1 = $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) > 0 ? get_px(40) : get_px(0);
          }
          achievementCard(margin_0(tmp_0, VOID, tmp_1, $breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0 ? get_px(0) : get_px(40)), achievementsContent$lambda($viewportEntered$delegate) ? $animatedNumbers.get_c1px32_k$(element.get_ordinal_ip24qg_k$()) : 0, element, $composer_0, 8, 0);
        }
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_81($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function achievementsContent$lambda_4($breakpoint, $$changed) {
    return function ($composer, $force) {
      achievementsContent($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function contactSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1171098864);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = padding_1(maxWidth(id(Companion_getInstance_1(), Section_Contact_getInstance().get_id_kntnx8_k$()), get_px(1920)), get_px(100));
      var tmp_0 = Center_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$ContactSectionKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3144, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(contactSection$lambda($changed));
    }
  }
  function contactContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1181202524);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(773894976);
      sourceInformation($composer_1, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = contactContent$lambda_1;
      }
      var composer = $composer_1;
      $composer_1.startReplaceableGroup_ip860b_k$(-954370320);
      sourceInformation($composer_1, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var wrapper = tmp1_group;
      var tmp0 = wrapper.get_coroutineScope_5k7h45_k$();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      var scope = tmp0;
      $composer_0.startReplaceableGroup_ip860b_k$(-35812799);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.contactContent.<anonymous>' call
        var value_0 = mutableStateOf(get_deg(0));
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var animatedRotation$delegate = tmp0_group;
      var tmp_3 = Section_Contact_getInstance().get_id_kntnx8_k$();
      observeViewportEntered(tmp_3, 500.0, contactContent$lambda_2(scope, animatedRotation$delegate), $composer_0, 54);
      var tmp_4 = fillMaxWidth(Companion_getInstance_1(), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_5 = CenterHorizontally_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.contactContent.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_6, 1112240525, true, contactContent$lambda_3(breakpoint, animatedRotation$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.contactContent.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_83(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp0_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      Column(tmp_4, null, tmp_5, null, tmp0_0, $composer_0, 25096, 10);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(contactContent$lambda_4($changed));
    }
  }
  function ComposableLambda$invoke$ref_82($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ContactSectionKt$lambda_1$lambda_3nkjr($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      contactContent($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ContactSectionKt() {
    ComposableSingletons$ContactSectionKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_82(composableLambdaInstance(523191370, false, ComposableSingletons$ContactSectionKt$lambda_1$lambda_3nkjr));
  }
  protoOf(ComposableSingletons$ContactSectionKt).get_lambda_1_4b504g_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
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
    return $animatedRotation$delegate.get_value_j01efc_k$();
  }
  function contactContent$lambda_0($animatedRotation$delegate, _set____db54di) {
    getLocalDelegateReference('animatedRotation', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $animatedRotation$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function contactSection$lambda($$changed) {
    return function ($composer, $force) {
      contactSection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function contactContent$lambda_1() {
    return EmptyCoroutineContext_getInstance();
  }
  function contactContent$lambda$slambda($animatedRotation$delegate, resultContinuation) {
    this.$animatedRotation$delegate_1 = $animatedRotation$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(contactContent$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(contactContent$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(contactContent$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            contactContent$lambda_0(this.$animatedRotation$delegate_1, get_deg(0));
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(contactContent$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new contactContent$lambda$slambda(this.$animatedRotation$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(contactContent$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function contactContent$lambda$slambda_0($animatedRotation$delegate, resultContinuation) {
    var i = new contactContent$lambda$slambda($animatedRotation$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function contactContent$lambda_2($scope, $animatedRotation$delegate) {
    return function () {
      contactContent$lambda_0($animatedRotation$delegate, get_deg(10));
      launch($scope, VOID, VOID, contactContent$lambda$slambda_0($animatedRotation$delegate, null));
      return Unit_getInstance();
    };
  }
  function contactContent$lambda$lambda($animatedRotation$delegate) {
    return function ($this$transform) {
      $this$transform.rotate_utl8m_k$(contactContent$lambda($animatedRotation$delegate));
      return Unit_getInstance();
    };
  }
  function contactContent$lambda_3($breakpoint, $animatedRotation$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = margin_1(fillMaxWidth(Companion_getInstance_1()), VOID, VOID, get_px(25));
        $composer_0.startReplaceableGroup_ip860b_k$(1916039290);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.sections.contactContent.<anonymous>.<anonymous>.<anonymous>' call
          var value = contactContent$lambda$lambda($animatedRotation$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        sectionTitle(transition(transform(tmp_0, tmp0_group), [CSSTransition_init_$Create$('transform', get_ms(500))]), Section_Contact_getInstance(), CenterHorizontally_getInstance(), $composer_0, 568, 0);
        contactForm($breakpoint, $composer_0, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_83($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function contactContent$lambda_4($$changed) {
    return function ($composer, $force) {
      contactContent($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function experienceSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(851235140);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = padding_1(maxWidth(id(Companion_getInstance_1(), Section_Experience_getInstance().get_id_kntnx8_k$()), get_px(1920)), get_px(100));
      var tmp_0 = Center_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$ExperienceSectionKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3144, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(experienceSection$lambda($changed));
    }
  }
  function experienceContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(500810800);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(-325864244);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.experienceContent.<anonymous>' call
        var value = mutableStateOf(get_px(200));
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var animatedMargin$delegate = tmp0_group;
      var tmp_1 = Section_Experience_getInstance().get_id_kntnx8_k$();
      $composer_0.startReplaceableGroup_ip860b_k$(-325858825);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.experienceContent.<anonymous>' call
        var value_0 = experienceContent$lambda_1(animatedMargin$delegate);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      observeViewportEntered(tmp_1, 500.0, tmp1_group, $composer_0, 438);
      var tmp_4 = fillMaxWidth(Companion_getInstance_1(), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_5 = CenterHorizontally_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.experienceContent.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_6, 425073497, true, experienceContent$lambda_2(breakpoint, animatedMargin$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.experienceContent.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_85(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column(tmp_4, null, tmp_5, null, tmp0, $composer_0, 25096, 10);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(experienceContent$lambda_3($changed));
    }
  }
  function ComposableLambda$invoke$ref_84($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ExperienceSectionKt$lambda_1$lambda_jj9ub5($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      experienceContent($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ExperienceSectionKt() {
    ComposableSingletons$ExperienceSectionKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_84(composableLambdaInstance(-582856962, false, ComposableSingletons$ExperienceSectionKt$lambda_1$lambda_jj9ub5));
  }
  protoOf(ComposableSingletons$ExperienceSectionKt).get_lambda_1_4b504g_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
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
    return $animatedMargin$delegate.get_value_j01efc_k$();
  }
  function experienceContent$lambda_0($animatedMargin$delegate, _set____db54di) {
    getLocalDelegateReference('animatedMargin', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $animatedMargin$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function experienceSection$lambda($$changed) {
    return function ($composer, $force) {
      experienceSection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function experienceContent$lambda_1($animatedMargin$delegate) {
    return function () {
      experienceContent$lambda_0($animatedMargin$delegate, get_px(50));
      return Unit_getInstance();
    };
  }
  function experienceContent$lambda_2($breakpoint, $animatedMargin$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = margin_1(fillMaxWidth(Companion_getInstance_1(), $breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(60) : get_percent(90)), VOID, VOID, get_px(25));
        var tmp_1 = Section_Experience_getInstance();
        sectionTitle(tmp_0, tmp_1, null, $composer_0, 56, 4);
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = get_entries_0().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.honger.ngel.sections.experienceContent.<anonymous>.<anonymous>.<anonymous>' call
          experienceCard($breakpoint, element.equals(Experience_First_getInstance()), element, experienceContent$lambda($animatedMargin$delegate), $composer_0, 4096, 0);
        }
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_85($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function experienceContent$lambda_3($$changed) {
    return function ($composer, $force) {
      experienceContent($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function footerSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1818837862);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = backgroundColor(padding_1(maxWidth(fillMaxWidth(Companion_getInstance_1()), get_px(1920)), get_px(100)), Theme_LighterGray_getInstance().get_rgb_18ix0c_k$());
      var tmp_0 = Center_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$FooterSectionKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3144, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(footerSection$lambda($changed));
    }
  }
  function footerContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1922266030);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = fillMaxWidth(Companion_getInstance_1(), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_0 = CenterHorizontally_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.footerContent.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -1048372101, true, footerContent$lambda(breakpoint));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.footerContent.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_89(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column(tmp, null, tmp_0, null, tmp0, $composer_0, 25096, 10);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(footerContent$lambda_0($changed));
    }
  }
  function footerMenu(row, $composer, $changed, $default) {
    var row_0 = {_v: row};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2712130);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(row_0._v) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        row_0._v = true;
      }
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = get_entries_2();
      var tmp$ret$0 = copyToArray(this_0);
      var tmp0_iterator = take(tmp$ret$0, 6).iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.honger.ngel.sections.footerMenu.<anonymous>' call
        var tmp78_modifier = textDecorationLine(fontWeight(fontSize(padding_0(fontFamily(toModifier_1(get_NavigationStyle(), [], $composer_0, 72), ['Roboto']), VOID, row_0._v ? get_px(20) : get_px(0), row_0._v ? get_px(0) : get_px(20)), get_px(12)), Companion_getInstance_2().get_Normal_22avww_k$()), Companion_getInstance_7().get_None_wo6tgh_k$());
        var tmp79_path = element.get_path_wos8ry_k$();
        var tmp80_text = element.get_title_iz32un_k$();
        Link(tmp79_path, tmp80_text, tmp78_modifier, null, null, null, null, false, null, $composer_0, 512, 504);
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(footerMenu$lambda(row_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_86($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterSectionKt$lambda_1$lambda_vzniu8($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      footerContent($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_87($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterSectionKt$lambda_2$lambda_a7u22p($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      footerMenu(false, $composer_0, 0, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_88($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterSectionKt$lambda_3$lambda_ilsezi($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      footerMenu(false, $composer_0, 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$FooterSectionKt() {
    ComposableSingletons$FooterSectionKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_86(composableLambdaInstance(654121760, false, ComposableSingletons$FooterSectionKt$lambda_1$lambda_vzniu8));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_87(composableLambdaInstance(704591709, false, ComposableSingletons$FooterSectionKt$lambda_2$lambda_a7u22p));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_88(composableLambdaInstance(328951040, false, ComposableSingletons$FooterSectionKt$lambda_3$lambda_ilsezi));
  }
  protoOf(ComposableSingletons$FooterSectionKt).get_lambda_1_4b504g_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$FooterSectionKt).get_lambda_2_bldq01_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$FooterSectionKt).get_lambda_3_rhwg4i_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$FooterSectionKt_instance;
  function ComposableSingletons$FooterSectionKt_getInstance() {
    if (ComposableSingletons$FooterSectionKt_instance == null)
      new ComposableSingletons$FooterSectionKt();
    return ComposableSingletons$FooterSectionKt_instance;
  }
  function footerSection$lambda($$changed) {
    return function ($composer, $force) {
      footerSection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function footerContent$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp76_modifier = size(Companion_getInstance_1(), get_px(100));
        var tmp77_src = 'logo.svg';
        Image(tmp77_src, tmp76_modifier, null, null, null, 'Logo Image', false, null, $composer_0, 196678, 220);
        if ($breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) > 0) {
          $composer_0.startReplaceableGroup_ip860b_k$(-1185033211);
          var tmp_0 = fillMaxWidth(Companion_getInstance_1());
          var tmp_1 = Center_getInstance_0();
          Row(tmp_0, tmp_1, null, null, ComposableSingletons$FooterSectionKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 24648, 12);
          $composer_0.endReplaceableGroup_ern0ak_k$();
        } else {
          $composer_0.startReplaceableGroup_ip860b_k$(-1184830161);
          var tmp_2 = fillMaxWidth(Companion_getInstance_1());
          var tmp_3 = CenterHorizontally_getInstance();
          Column(tmp_2, null, tmp_3, null, ComposableSingletons$FooterSectionKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 25096, 10);
          $composer_0.endReplaceableGroup_ern0ak_k$();
        }
        socialBar(true, $composer_0, 6, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_89($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function footerContent$lambda_0($$changed) {
    return function ($composer, $force) {
      footerContent($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function footerMenu$lambda($row, $$changed, $$default) {
    return function ($composer, $force) {
      footerMenu($row._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function mainSection(onMenuClicked, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1707756986);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onMenuClicked) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = maxWidth(id(Companion_getInstance_1(), Section_Home_getInstance().get_id_kntnx8_k$()), get_px(1920));
      var tmp_0 = TopCenter_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.mainSection.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -1563058484, true, mainSection$lambda(onMenuClicked));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.mainSection.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_96(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Box(tmp, tmp_0, null, tmp0, $composer_0, 3144, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(mainSection$lambda_0(onMenuClicked, $changed));
    }
  }
  function mainBackground($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(462435147);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp0_modifier = objectFit(fillMaxSize(Companion_getInstance_1()), Companion_getInstance_11().get_Cover_i8910u_k$());
      var tmp1_src = 'background.svg';
      Image(tmp1_src, tmp0_modifier, null, null, null, 'Background Image', false, null, $composer_0, 196678, 220);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(mainBackground$lambda($changed));
    }
  }
  function mainContent(onMenuClicked, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-133773350);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onMenuClicked) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = fillMaxSize(Companion_getInstance_1());
      var tmp_0 = SpaceBetween_getInstance();
      var tmp_1 = CenterHorizontally_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.mainContent.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -511645359, true, mainContent$lambda(onMenuClicked, breakpoint));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.mainContent.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_99(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_3 = value;
      } else {
        tmp_3 = it;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column(tmp, tmp_0, tmp_1, null, tmp0, $composer_0, 25160, 8);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(mainContent$lambda_0(onMenuClicked, $changed));
    }
  }
  function mainText(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1749016445);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = Center_getInstance_0();
      var tmp_0 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.mainText.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1435727040, true, mainText$lambda(breakpoint));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.mainText.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_101(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Row(null, tmp, tmp_0, null, tmp0, $composer_0, 25152, 9);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(mainText$lambda_0(breakpoint, $changed));
    }
  }
  function mainImage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1258092052);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = fillMaxHeight(fillMaxSize(Companion_getInstance_1(), get_percent(80)));
      var tmp_0 = Center_getInstance_0();
      Column(tmp, tmp_0, null, null, ComposableSingletons$MainSectionKt_getInstance().lambda_6_r8sbbk_1, $composer_0, 24648, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(mainImage$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_90($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_1$lambda_21924i($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text("Hello, I'm", $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_91($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_2$lambda_uuvj6p($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Jonathan Smith', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_92($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_3$lambda_bcm1q8($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Mobile & Web Developer/Designer', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_93($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_4$lambda_hh0fbz($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_94($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_5$lambda_oqh5ky($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    var tmp4_modifier = textDecorationLine(color(Companion_getInstance_1(), Colors_getInstance().get_White_ij46ow_k$()), Companion_getInstance_7().get_None_wo6tgh_k$());
    var tmp5_path = Section_Contact_getInstance().get_path_wos8ry_k$();
    Link(tmp5_path, 'Hire me', tmp4_modifier, null, null, null, null, false, null, $composer_0, 560, 504);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_95($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainSectionKt$lambda_6$lambda_435bh9($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp6_modifier = fillMaxSize(toModifier_1(get_MainImageStyle(), [], $composer_0, 72));
      var tmp7_src = 'main_image.png';
      Image_0(tmp7_src, 'Main Image', tmp6_modifier, null, null, null, false, null, $composer_0, 566, 248);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainSectionKt() {
    ComposableSingletons$MainSectionKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_90(composableLambdaInstance(-2131432619, false, ComposableSingletons$MainSectionKt$lambda_1$lambda_21924i));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_91(composableLambdaInstance(256794956, false, ComposableSingletons$MainSectionKt$lambda_2$lambda_uuvj6p));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_92(composableLambdaInstance(1056369485, false, ComposableSingletons$MainSectionKt$lambda_3$lambda_bcm1q8));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_93(composableLambdaInstance(1855944014, false, ComposableSingletons$MainSectionKt$lambda_4$lambda_hh0fbz));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_94(composableLambdaInstance(-613130819, false, ComposableSingletons$MainSectionKt$lambda_5$lambda_oqh5ky));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_95(composableLambdaInstance(-1599132459, false, ComposableSingletons$MainSectionKt$lambda_6$lambda_435bh9));
  }
  protoOf(ComposableSingletons$MainSectionKt).get_lambda_1_4b504g_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MainSectionKt).get_lambda_2_bldq01_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$MainSectionKt).get_lambda_3_rhwg4i_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$MainSectionKt).get_lambda_4_rmovq5_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$MainSectionKt).get_lambda_5_bq65lo_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$MainSectionKt).get_lambda_6_46ckit_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
  var ComposableSingletons$MainSectionKt_instance;
  function ComposableSingletons$MainSectionKt_getInstance() {
    if (ComposableSingletons$MainSectionKt_instance == null)
      new ComposableSingletons$MainSectionKt();
    return ComposableSingletons$MainSectionKt_instance;
  }
  function mainSection$lambda($onMenuClicked) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        mainBackground($composer_0, 0);
        mainContent($onMenuClicked, $composer_0, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_96($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function mainSection$lambda_0($onMenuClicked, $$changed) {
    return function ($composer, $force) {
      mainSection($onMenuClicked, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function mainBackground$lambda($$changed) {
    return function ($composer, $force) {
      mainBackground($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function mainContent$lambda$lambda$lambda($breakpoint) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        mainText($breakpoint, $composer_0, 0);
        mainImage($composer_0, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_97($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function mainContent$lambda$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp2_modifier = fillMaxWidth(Companion_getInstance_1(), $breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(80) : get_percent(90));
        var tmp3_numColumns = numColumns(1, VOID, 2);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.sections.mainContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 1630925553, true, mainContent$lambda$lambda$lambda($breakpoint));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.sections.mainContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_97(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        SimpleGrid(tmp3_numColumns, tmp2_modifier, null, null, tmp0, $composer_0, 24648, 12);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_98($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function mainContent$lambda($onMenuClicked, $breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        header($onMenuClicked, $composer_0, 0);
        var tmp_0 = fillMaxSize(Companion_getInstance_1());
        var tmp_1 = Bottom_getInstance();
        var tmp_2 = CenterHorizontally_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.sections.mainContent.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, 421858632, true, mainContent$lambda$lambda($breakpoint));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.sections.mainContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_98(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_4 = value;
        } else {
          tmp_4 = it;
        }
        var tmp_5 = tmp_4;
        var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Column(tmp_0, tmp_1, tmp_2, null, tmp0, $composer_0, 25160, 8);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_99($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function mainContent$lambda_0($onMenuClicked, $$changed) {
    return function ($composer, $force) {
      mainContent($onMenuClicked, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function mainText$lambda$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        P(toAttrs(color(fontWeight(fontSize(fontFamily(margin(Companion_getInstance_1(), get_px(0)), ['Roboto']), $breakpoint.compareTo_30rs7w_k$(Breakpoint_LG_getInstance()) >= 0 ? get_px(45) : get_px(20)), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Primary_getInstance().get_rgb_18ix0c_k$())), ComposableSingletons$MainSectionKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
        P(toAttrs(color(fontWeight(fontSize(fontFamily(margin_1(Companion_getInstance_1(), get_px(20), VOID, get_px(0)), ['Roboto']), $breakpoint.compareTo_30rs7w_k$(Breakpoint_LG_getInstance()) >= 0 ? get_px(68) : get_px(40)), Companion_getInstance_2().get_Bolder_3mclb9_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$())), ComposableSingletons$MainSectionKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 48, 0);
        P(toAttrs(color(fontWeight(fontSize(fontFamily(margin_1(Companion_getInstance_1(), get_px(10), VOID, get_px(5)), ['Roboto']), get_px(20)), Companion_getInstance_2().get_Bold_wnz5ke_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$())), ComposableSingletons$MainSectionKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 48, 0);
        P(toAttrs(color(fontWeight(fontStyle(fontSize(fontFamily(maxWidth(margin_1(Companion_getInstance_1(), VOID, VOID, get_px(25)), get_px(400)), ['Roboto']), get_px(15)), Companion_getInstance_14().get_Italic_8h4fb_k$()), Companion_getInstance_2().get_Normal_22avww_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$())), ComposableSingletons$MainSectionKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 48, 0);
        Button(toAttrs(cursor(color(backgroundColor(borderRadius(border(height(toModifier_1(get_MainButtonStyle(), [], $composer_0, 72), get_px(40)), get_px(0)), get_px(5)), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), Colors_getInstance().get_White_ij46ow_k$()), Companion_getInstance_5().get_Pointer_m64vg4_k$())), ComposableSingletons$MainSectionKt_getInstance().lambda_5_r8sbbl_1, $composer_0, 48, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_100($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function mainText$lambda($breakpoint) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        $composer_0.startReplaceableGroup_ip860b_k$(-1233285202);
        if ($breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0) {
          socialBar(false, $composer_0, 0, 1);
        }
        $composer_0.endReplaceableGroup_ern0ak_k$();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.sections.mainText.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 165314487, true, mainText$lambda$lambda($breakpoint));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.sections.mainText.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_100(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Column(null, null, null, null, tmp0, $composer_0, 24576, 15);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_101($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function mainText$lambda_0($breakpoint, $$changed) {
    return function ($composer, $force) {
      mainText($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function mainImage$lambda($$changed) {
    return function ($composer, $force) {
      mainImage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function portfolioSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1142133488);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = padding_1(maxWidth(id(Companion_getInstance_1(), Section_Portfolio_getInstance().get_id_kntnx8_k$()), get_px(1920)), get_px(100));
      var tmp_0 = Center_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$PortfolioSectionKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3144, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(portfolioSection$lambda($changed));
    }
  }
  function portfolioContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2033151140);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = fillMaxWidth(Companion_getInstance_1(), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_0 = CenterHorizontally_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.portfolioContent.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, -1090946547, true, portfolioContent$lambda(breakpoint));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.portfolioContent.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_105(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column(tmp, null, tmp_0, null, tmp0, $composer_0, 25096, 10);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(portfolioContent$lambda_0($changed));
    }
  }
  function portfolioCard_0(breakpoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-355929858);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 4 : 2);
    if (!(($dirty & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = scrollBehavior(overflow(maxWidth(margin_1(fillMaxWidth(id(Companion_getInstance_1(), 'scrollableContainer'), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0 ? get_px(950) : breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) > 0 ? get_px(625) : get_px(300)), VOID, VOID, get_px(25)), get_px(950)), Companion_getInstance_9().get_Hidden_viqel_k$()), Companion_getInstance_10().get_Smooth_4edjo7_k$());
      Row(tmp, null, null, null, ComposableSingletons$PortfolioSectionKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 24584, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(portfolioCard$lambda_1(breakpoint, $changed));
    }
  }
  function portfolioNavigation($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1748959155);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = fillMaxWidth(Companion_getInstance_1());
      var tmp_0 = Center_getInstance_0();
      Row(tmp, tmp_0, null, null, ComposableSingletons$PortfolioSectionKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 24648, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(portfolioNavigation$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_102($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_1$lambda_ozf5($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      portfolioContent($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_103($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_2$lambda_subghc($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = get_entries_1().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.honger.ngel.sections.ComposableSingletons$PortfolioSectionKt.lambda-2.<anonymous>.<anonymous>' call
        var tmp = margin_0(Companion_getInstance_1(), VOID, !element.equals(Portfolio_Five_getInstance()) ? get_px(25) : get_px(0));
        portfolioCard(tmp, element, null, $composer_0, 8, 4);
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_104($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_3$lambda_dd64fl($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = cursor(margin_0(toModifier(get_PortfolioArrowIconStyle(), $composer_0, 6), VOID, get_px(40)), Companion_getInstance_5().get_Pointer_m64vg4_k$());
      $composer_0.startReplaceableGroup_ip860b_k$(1301323803);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.ComposableSingletons$PortfolioSectionKt.lambda-3.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$PortfolioSectionKt$lambda_3$lambda$lambda_xijbwk;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      FaArrowLeft(onClick(tmp, tmp0_group), IconSize_LG_getInstance(), $composer_0, 56, 0);
      var tmp_2 = cursor(toModifier(get_PortfolioArrowIconStyle(), $composer_0, 6), Companion_getInstance_5().get_Pointer_m64vg4_k$());
      $composer_0.startReplaceableGroup_ip860b_k$(1301334488);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.ComposableSingletons$PortfolioSectionKt.lambda-3.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$PortfolioSectionKt$lambda_3$lambda$lambda_xijbwk_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      FaArrowRight(onClick(tmp_2, tmp1_group), IconSize_LG_getInstance(), $composer_0, 56, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_3$lambda$lambda_xijbwk(it) {
    var tmp92_safe_receiver = document.getElementById('scrollableContainer');
    if (tmp92_safe_receiver == null)
      null;
    else {
      tmp92_safe_receiver.scrollBy(-325.0, 0.0);
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$PortfolioSectionKt$lambda_3$lambda$lambda_xijbwk_0(it) {
    var tmp93_safe_receiver = document.getElementById('scrollableContainer');
    if (tmp93_safe_receiver == null)
      null;
    else {
      tmp93_safe_receiver.scrollBy(325.0, 0.0);
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$PortfolioSectionKt() {
    ComposableSingletons$PortfolioSectionKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_102(composableLambdaInstance(-951447222, false, ComposableSingletons$PortfolioSectionKt$lambda_1$lambda_ozf5));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_103(composableLambdaInstance(-1606349183, false, ComposableSingletons$PortfolioSectionKt$lambda_2$lambda_subghc));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_104(composableLambdaInstance(-1542433098, false, ComposableSingletons$PortfolioSectionKt$lambda_3$lambda_dd64fl));
  }
  protoOf(ComposableSingletons$PortfolioSectionKt).get_lambda_1_4b504g_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$PortfolioSectionKt).get_lambda_2_bldq01_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$PortfolioSectionKt).get_lambda_3_rhwg4i_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$PortfolioSectionKt_instance;
  function ComposableSingletons$PortfolioSectionKt_getInstance() {
    if (ComposableSingletons$PortfolioSectionKt_instance == null)
      new ComposableSingletons$PortfolioSectionKt();
    return ComposableSingletons$PortfolioSectionKt_instance;
  }
  function portfolioSection$lambda($$changed) {
    return function ($composer, $force) {
      portfolioSection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function portfolioContent$lambda($breakpoint) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Column) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_1 = $this$Column.align_45bqjp_k$(margin_1(fillMaxWidth(Companion_getInstance_1()), VOID, VOID, get_px(25)), Start_getInstance());
        var tmp_2 = Section_Portfolio_getInstance();
        sectionTitle(tmp_1, tmp_2, null, $composer_0, 56, 4);
        portfolioCard_0($breakpoint, $composer_0, 0);
        portfolioNavigation($composer_0, 0);
        tmp_0 = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_105($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function portfolioContent$lambda_0($$changed) {
    return function ($composer, $force) {
      portfolioContent($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function portfolioCard$lambda_1($breakpoint, $$changed) {
    return function ($composer, $force) {
      portfolioCard_0($breakpoint, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function portfolioNavigation$lambda($$changed) {
    return function ($composer, $force) {
      portfolioNavigation($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function serviceSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1866827920);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = padding_1(maxWidth(id(Companion_getInstance_1(), Section_Service_getInstance().get_id_kntnx8_k$()), get_px(1920)), get_px(100));
      var tmp_0 = Center_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$ServiceSectionKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3144, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(serviceSection$lambda($changed));
    }
  }
  function serviceContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1876931580);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = fillMaxSize(Companion_getInstance_1(), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_0 = CenterHorizontally_getInstance();
      Column(tmp, null, tmp_0, null, ComposableSingletons$ServiceSectionKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 25096, 10);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(serviceContent$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_106($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ServiceSectionKt$lambda_1$lambda_vjhl50($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      serviceContent($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_107($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$ServiceSectionKt$lambda_2$lambda_anzzrx($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = get_entries_3().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.honger.ngel.sections.ComposableSingletons$ServiceSectionKt.lambda-2.<anonymous>.<anonymous>' call
        serviceCard(element, $composer_0, 0);
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_108($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ServiceSectionKt$lambda_3$lambda_i5mhaa($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      sectionTitle(margin_1(fillMaxWidth(Companion_getInstance_1()), VOID, VOID, get_px(20)), Section_Service_getInstance(), CenterHorizontally_getInstance(), $composer_0, 568, 0);
      var tmp = numColumns(1, 2, 3);
      SimpleGrid(tmp, null, null, null, ComposableSingletons$ServiceSectionKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 24584, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ServiceSectionKt() {
    ComposableSingletons$ServiceSectionKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_106(composableLambdaInstance(-172537686, false, ComposableSingletons$ServiceSectionKt$lambda_1$lambda_vjhl50));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_107(composableLambdaInstance(1651447396, false, ComposableSingletons$ServiceSectionKt$lambda_2$lambda_anzzrx));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_108(composableLambdaInstance(416511469, false, ComposableSingletons$ServiceSectionKt$lambda_3$lambda_i5mhaa));
  }
  protoOf(ComposableSingletons$ServiceSectionKt).get_lambda_1_4b504g_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$ServiceSectionKt).get_lambda_2_bldq01_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$ServiceSectionKt).get_lambda_3_rhwg4i_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$ServiceSectionKt_instance;
  function ComposableSingletons$ServiceSectionKt_getInstance() {
    if (ComposableSingletons$ServiceSectionKt_instance == null)
      new ComposableSingletons$ServiceSectionKt();
    return ComposableSingletons$ServiceSectionKt_instance;
  }
  function serviceSection$lambda($$changed) {
    return function ($composer, $force) {
      serviceSection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function serviceContent$lambda($$changed) {
    return function ($composer, $force) {
      serviceContent($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function testimonialSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1417972144);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = padding_1(maxWidth(id(Companion_getInstance_1(), Section_Testimonial_getInstance().get_id_kntnx8_k$()), get_px(1920)), get_px(100));
      var tmp_0 = Center_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$TestimonialSectionKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3144, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(testimonialSection$lambda($changed));
    }
  }
  function testimonialContent($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-855247804);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      var breakpoint = rememberBreakpoint($composer_0, 0);
      $composer_0.startReplaceableGroup_ip860b_k$(175356030);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.testimonialContent.<anonymous>' call
        var value = mutableStateOf(0);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var selectedPage$delegate = tmp0_group;
      var tmp_1 = fillMaxWidth(Companion_getInstance_1(), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(100) : get_percent(90));
      var tmp_2 = CenterHorizontally_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.testimonialContent.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -624351955, true, testimonialContent$lambda_1(breakpoint, selectedPage$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.testimonialContent.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_110(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column(tmp_1, null, tmp_2, null, tmp0, $composer_0, 25096, 10);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(testimonialContent$lambda_2($changed));
    }
  }
  function testimonialCards(breakpoint, selectedPage, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1610779462);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(breakpoint) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(selectedPage) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      var testimonial1 = listOf([Testimonial_First_getInstance(), Testimonial_Third_getInstance(), Testimonial_Fifth_getInstance()]);
      var testimonial2 = listOf([Testimonial_Second_getInstance(), Testimonial_Fourth_getInstance(), Testimonial_Sixth_getInstance()]);
      var tmp94_modifier = margin_1(fillMaxWidth(Companion_getInstance_1(), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0 ? get_percent(90) : get_percent(100)), VOID, VOID, get_px(40));
      var tmp95_numColumns = numColumns(1, VOID, 2);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.testimonialCards.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1505709775, true, testimonialCards$lambda(testimonial1, breakpoint, selectedPage, testimonial2));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.testimonialCards.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_113(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      SimpleGrid(tmp95_numColumns, tmp94_modifier, null, null, tmp0, $composer_0, 24648, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(testimonialCards$lambda_0(breakpoint, selectedPage, $changed));
    }
  }
  function testimonialNavigation(selectedPage, onNavigate, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1766761003);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(selectedPage) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onNavigate) ? 32 : 16);
    if (!(($dirty & 91) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      var tmp = fillMaxWidth(Companion_getInstance_1());
      var tmp_0 = Center_getInstance_0();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.honger.ngel.sections.testimonialNavigation.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 187421064, true, testimonialNavigation$lambda(selectedPage, onNavigate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.sections.testimonialNavigation.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_114(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Row(tmp, tmp_0, null, null, tmp0, $composer_0, 24648, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(testimonialNavigation$lambda_0(selectedPage, onNavigate, $changed));
    }
  }
  function setVisibility(selectedPage, testimonial) {
    var tmp;
    switch (testimonial.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = selectedPage === 0 ? Companion_getInstance_4().get_Visible_yikvpz_k$() : Companion_getInstance_4().get_Hidden_viqel_k$();
        break;
      case 1:
        tmp = selectedPage === 0 ? Companion_getInstance_4().get_Visible_yikvpz_k$() : Companion_getInstance_4().get_Hidden_viqel_k$();
        break;
      case 2:
        tmp = selectedPage === 1 ? Companion_getInstance_4().get_Visible_yikvpz_k$() : Companion_getInstance_4().get_Hidden_viqel_k$();
        break;
      case 3:
        tmp = selectedPage === 1 ? Companion_getInstance_4().get_Visible_yikvpz_k$() : Companion_getInstance_4().get_Hidden_viqel_k$();
        break;
      case 4:
        tmp = selectedPage === 2 ? Companion_getInstance_4().get_Visible_yikvpz_k$() : Companion_getInstance_4().get_Hidden_viqel_k$();
        break;
      case 5:
        tmp = selectedPage === 2 ? Companion_getInstance_4().get_Visible_yikvpz_k$() : Companion_getInstance_4().get_Hidden_viqel_k$();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function setOpacity(selectedPage, testimonial) {
    var tmp;
    switch (testimonial.get_ordinal_ip24qg_k$()) {
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
  function ComposableLambda$invoke$ref_109($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$TestimonialSectionKt$lambda_1$lambda_dqfz6u($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      testimonialContent($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$TestimonialSectionKt() {
    ComposableSingletons$TestimonialSectionKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_109(composableLambdaInstance(1939964138, false, ComposableSingletons$TestimonialSectionKt$lambda_1$lambda_dqfz6u));
  }
  protoOf(ComposableSingletons$TestimonialSectionKt).get_lambda_1_4b504g_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
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
    return $selectedPage$delegate.get_value_j01efc_k$();
  }
  function testimonialContent$lambda_0($selectedPage$delegate, _set____db54di) {
    getLocalDelegateReference('selectedPage', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $selectedPage$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function testimonialSection$lambda($$changed) {
    return function ($composer, $force) {
      testimonialSection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function testimonialContent$lambda$lambda($selectedPage$delegate) {
    return function (index) {
      testimonialContent$lambda_0($selectedPage$delegate, index);
      return Unit_getInstance();
    };
  }
  function testimonialContent$lambda_1($breakpoint, $selectedPage$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        sectionTitle(margin_1(fillMaxWidth(Companion_getInstance_1()), VOID, VOID, get_px(25)), Section_Testimonial_getInstance(), CenterHorizontally_getInstance(), $composer_0, 568, 0);
        testimonialCards($breakpoint, testimonialContent$lambda($selectedPage$delegate), $composer_0, 0);
        var tmp_0 = testimonialContent$lambda($selectedPage$delegate);
        $composer_0.startReplaceableGroup_ip860b_k$(2132775964);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.sections.testimonialContent.<anonymous>.<anonymous>.<anonymous>' call
          var value = testimonialContent$lambda$lambda($selectedPage$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        testimonialNavigation(tmp_0, tmp0_group, $composer_0, 48);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_110($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function testimonialContent$lambda_2($$changed) {
    return function ($composer, $force) {
      testimonialContent($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function testimonialCards$lambda$lambda($testimonial1, $breakpoint, $selectedPage) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = $testimonial1.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.honger.ngel.sections.testimonialCards.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          testimonialCard(transition(opacity(visibility(margin_0(Companion_getInstance_1(), VOID, $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) > 0 ? get_px(40) : get_px(0), $breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0 ? get_px(0) : get_px(40)), setVisibility($selectedPage, element)), setOpacity($selectedPage, element)), [CSSTransition_init_$Create$('visibility', get_ms(300)), CSSTransition_init_$Create$('opacity', get_ms(300))]), element, $breakpoint, $composer_0, 8, 0);
        }
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_111($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function testimonialCards$lambda$lambda_0($testimonial2, $breakpoint, $selectedPage) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = $testimonial2.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.honger.ngel.sections.testimonialCards.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          testimonialCard(transition(opacity(visibility(margin_0(Companion_getInstance_1(), VOID, $breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) > 0 ? get_px(40) : get_px(0), $breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0 ? get_px(0) : get_px(40)), setVisibility($selectedPage, element)), setOpacity($selectedPage, element)), [CSSTransition_init_$Create$('visibility', get_ms(300)), CSSTransition_init_$Create$('opacity', get_ms(300))]), element, $breakpoint, $composer_0, 8, 0);
        }
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_112($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function testimonialCards$lambda($testimonial1, $breakpoint, $selectedPage, $testimonial2) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.sections.testimonialCards.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 429306475, true, testimonialCards$lambda$lambda($testimonial1, $breakpoint, $selectedPage));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.sections.testimonialCards.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_111(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Box(null, null, null, tmp0, $composer_0, 3072, 7);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.honger.ngel.sections.testimonialCards.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_3, 943920596, true, testimonialCards$lambda$lambda_0($testimonial2, $breakpoint, $selectedPage));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.honger.ngel.sections.testimonialCards.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_112(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        Box(null, null, null, tmp0_0, $composer_0, 3072, 7);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_113($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function testimonialCards$lambda_0($breakpoint, $selectedPage, $$changed) {
    return function ($composer, $force) {
      testimonialCards($breakpoint, $selectedPage, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function testimonialNavigation$lambda$lambda($onNavigate, $index) {
    return function (it) {
      $onNavigate($index);
      return Unit_getInstance();
    };
  }
  function testimonialNavigation$lambda($selectedPage, $onNavigate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        // Inline function 'kotlin.repeat' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < 3)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'com.honger.ngel.sections.testimonialNavigation.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_0 = backgroundColor(borderRadius(size(cursor(margin_0(Companion_getInstance_1(), VOID, get_px(10)), Companion_getInstance_5().get_Pointer_m64vg4_k$()), get_px(12)), get_px(50)), $selectedPage === index ? Theme_Primary_getInstance().get_rgb_18ix0c_k$() : Theme_LightGray_getInstance().get_rgb_18ix0c_k$());
            $composer_0.startReplaceableGroup_ip860b_k$(818338156);
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid = !!($composer_0.changed_ga7h3f_k$($onNavigate) | $composer_0.changed_kpusro_k$(index));
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it = $composer_0.rememberedValue_4dg93v_k$();
            var tmp_1;
            if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
              // Inline function 'com.honger.ngel.sections.testimonialNavigation.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var value = testimonialNavigation$lambda$lambda($onNavigate, index);
              $composer_0.updateRememberedValue_l1wh71_k$(value);
              tmp_1 = value;
            } else {
              tmp_1 = it;
            }
            var tmp_2 = tmp_1;
            var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
            $composer_0.endReplaceableGroup_ern0ak_k$();
            var tmp_3 = onClick(tmp_0, tmp0_group);
            Box(tmp_3, null, null, null, $composer_0, 8, 14);
          }
           while (inductionVariable < 3);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_114($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function testimonialNavigation$lambda_0($selectedPage, $onNavigate, $$changed) {
    return function ($composer, $force) {
      testimonialNavigation($selectedPage, $onNavigate, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
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
    $this$CssStyle.base_y8uu8g_k$(AboutImageStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.invoke_ts7809_k$(AboutImageStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function AboutImageStyle$lambda$lambda() {
    _init_properties_AboutImageStyle_kt__1fxtxt();
    var tmp = Companion_getInstance_1();
    return transition(rotate(borderRadius(styleModifier(tmp, AboutImageStyle$lambda$lambda$lambda), get_px(0)), get_deg(0)), [new CSSTransition(Companion_getInstance_15().get_All_18jx7s_k$(), get_ms(200))]);
  }
  function AboutImageStyle$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_AboutImageStyle_kt__1fxtxt();
    filter($this$styleModifier, AboutImageStyle$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function AboutImageStyle$lambda$lambda$lambda$lambda($this$filter) {
    _init_properties_AboutImageStyle_kt__1fxtxt();
    $this$filter.grayscale_jgyvp1_k$(get_percent(100));
    return Unit_getInstance();
  }
  function AboutImageStyle$lambda$lambda_0() {
    _init_properties_AboutImageStyle_kt__1fxtxt();
    var tmp = Companion_getInstance_1();
    return rotate(borderRadius(styleModifier(tmp, AboutImageStyle$lambda$lambda$lambda_0), get_px(100)), get_deg(10));
  }
  function AboutImageStyle$lambda$lambda$lambda_0($this$styleModifier) {
    _init_properties_AboutImageStyle_kt__1fxtxt();
    filter($this$styleModifier, AboutImageStyle$lambda$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function AboutImageStyle$lambda$lambda$lambda$lambda_0($this$filter) {
    _init_properties_AboutImageStyle_kt__1fxtxt();
    $this$filter.grayscale_jgyvp1_k$(get_percent(0));
    return Unit_getInstance();
  }
  function AboutTextStyle$lambda($this$CssStyle) {
    _init_properties_AboutImageStyle_kt__1fxtxt();
    $this$CssStyle.base_y8uu8g_k$(AboutTextStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.invoke_ts7809_k$(AboutTextStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function AboutTextStyle$lambda$lambda() {
    _init_properties_AboutImageStyle_kt__1fxtxt();
    return transition(opacity(Companion_getInstance_1(), get_percent(50)), [CSSTransition_init_$Create$('opacity', get_ms(200))]);
  }
  function AboutTextStyle$lambda$lambda_0() {
    _init_properties_AboutImageStyle_kt__1fxtxt();
    return opacity(Companion_getInstance_1(), get_percent(100));
  }
  var properties_initialized_AboutImageStyle_kt_kwlagd;
  function _init_properties_AboutImageStyle_kt__1fxtxt() {
    if (!properties_initialized_AboutImageStyle_kt_kwlagd) {
      properties_initialized_AboutImageStyle_kt_kwlagd = true;
      AboutImageStyle = CssStyle(VOID, AboutImageStyle$lambda);
      AboutTextStyle = CssStyle(VOID, AboutTextStyle$lambda);
    }
  }
  function get_BackToTopButtonStyle() {
    _init_properties_BackToTopStyle_kt__3sr2oy();
    return BackToTopButtonStyle;
  }
  var BackToTopButtonStyle;
  function BackToTopButtonStyle$lambda($this$CssStyle) {
    _init_properties_BackToTopStyle_kt__3sr2oy();
    $this$CssStyle.base_y8uu8g_k$(BackToTopButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.invoke_ts7809_k$(BackToTopButtonStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function BackToTopButtonStyle$lambda$lambda() {
    _init_properties_BackToTopStyle_kt__3sr2oy();
    return transition(rotate(Companion_getInstance_1(), get_deg(180)), [CSSTransition_init_$Create$('rotate', get_ms(200))]);
  }
  function BackToTopButtonStyle$lambda$lambda_0() {
    _init_properties_BackToTopStyle_kt__3sr2oy();
    return rotate(Companion_getInstance_1(), get_deg(0));
  }
  var properties_initialized_BackToTopStyle_kt_mrg5c;
  function _init_properties_BackToTopStyle_kt__3sr2oy() {
    if (!properties_initialized_BackToTopStyle_kt_mrg5c) {
      properties_initialized_BackToTopStyle_kt_mrg5c = true;
      BackToTopButtonStyle = CssStyle(VOID, BackToTopButtonStyle$lambda);
    }
  }
  function get_InputStyle() {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    return InputStyle;
  }
  var InputStyle;
  function InputStyle$lambda($this$CssStyle) {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    $this$CssStyle.base_y8uu8g_k$(InputStyle$lambda$lambda);
    var tmp = get_focus($this$CssStyle);
    tmp.invoke_ts7809_k$(InputStyle$lambda$lambda_0);
    var tmp_0 = get_hover($this$CssStyle);
    tmp_0.invoke_ts7809_k$(InputStyle$lambda$lambda_1);
    return Unit_getInstance();
  }
  function InputStyle$lambda$lambda() {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border(tmp, tmp_0, 'solid', Theme_LightGray_getInstance().get_rgb_18ix0c_k$()), [CSSTransition_init_$Create$('border', get_ms(200))]);
  }
  function InputStyle$lambda$lambda_0() {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Theme_Primary_getInstance().get_rgb_18ix0c_k$());
  }
  function InputStyle$lambda$lambda_1() {
    _init_properties_ContactSectionStyle_kt__ofhc2i();
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Theme_Primary_getInstance().get_rgb_18ix0c_k$());
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
    return NavigationStyle$delegate.getValue_fbnwi2_k$(null, NavigationStyle$factory());
  }
  var NavigationStyle$delegate;
  function get_LogoStyle() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return LogoStyle$delegate.getValue_fbnwi2_k$(null, LogoStyle$factory());
  }
  var LogoStyle$delegate;
  function get_SocialLinkStyle() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return SocialLinkStyle$delegate.getValue_fbnwi2_k$(null, SocialLinkStyle$factory());
  }
  var SocialLinkStyle$delegate;
  function get_MainButtonStyle() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return MainButtonStyle$delegate.getValue_fbnwi2_k$(null, MainButtonStyle$factory());
  }
  var MainButtonStyle$delegate;
  function get_MainImageStyle() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return MainImageStyle$delegate.getValue_fbnwi2_k$(null, MainImageStyle$factory());
  }
  var MainImageStyle$delegate;
  function NavigationStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    $this$ComponentStyle.base_y8uu8g_k$(NavigationStyle$delegate$lambda$lambda);
    var tmp = get_anyLink($this$ComponentStyle);
    tmp.invoke_ts7809_k$(NavigationStyle$delegate$lambda$lambda_0);
    var tmp_0 = get_hover($this$ComponentStyle);
    tmp_0.invoke_ts7809_k$(NavigationStyle$delegate$lambda$lambda_1);
    return Unit_getInstance();
  }
  function NavigationStyle$delegate$lambda$lambda() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return transition(color(Companion_getInstance_1(), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), [CSSTransition_init_$Create$('color', get_ms(200))]);
  }
  function NavigationStyle$delegate$lambda$lambda_0() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return color(Companion_getInstance_1(), Theme_Secondary_getInstance().get_rgb_18ix0c_k$());
  }
  function NavigationStyle$delegate$lambda$lambda_1() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return color(Companion_getInstance_1(), Theme_Primary_getInstance().get_rgb_18ix0c_k$());
  }
  function LogoStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    $this$ComponentStyle.base_y8uu8g_k$(LogoStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle);
    tmp.invoke_ts7809_k$(LogoStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function LogoStyle$delegate$lambda$lambda() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    var tmp = Companion_getInstance_1();
    return transition(transform(tmp, LogoStyle$delegate$lambda$lambda$lambda), [CSSTransition_init_$Create$('transform', get_ms(200))]);
  }
  function LogoStyle$delegate$lambda$lambda$lambda($this$transform) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    $this$transform.rotate_utl8m_k$(get_deg(0));
    return Unit_getInstance();
  }
  function LogoStyle$delegate$lambda$lambda_0() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    var tmp = Companion_getInstance_1();
    return transform(tmp, LogoStyle$delegate$lambda$lambda$lambda_0);
  }
  function LogoStyle$delegate$lambda$lambda$lambda_0($this$transform) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    $this$transform.rotate_utl8m_k$(get_deg(-10));
    return Unit_getInstance();
  }
  function SocialLinkStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    $this$ComponentStyle.base_y8uu8g_k$(SocialLinkStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle);
    tmp.invoke_ts7809_k$(SocialLinkStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function SocialLinkStyle$delegate$lambda$lambda() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return transition(color(Companion_getInstance_1(), Theme_Gray_getInstance().get_rgb_18ix0c_k$()), [CSSTransition_init_$Create$('color', get_ms(200))]);
  }
  function SocialLinkStyle$delegate$lambda$lambda_0() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return color(Companion_getInstance_1(), Theme_Primary_getInstance().get_rgb_18ix0c_k$());
  }
  function MainButtonStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    $this$ComponentStyle.base_y8uu8g_k$(MainButtonStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle);
    tmp.invoke_ts7809_k$(MainButtonStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function MainButtonStyle$delegate$lambda$lambda() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return transition(width(Companion_getInstance_1(), get_px(100)), [CSSTransition_init_$Create$('width', get_ms(200))]);
  }
  function MainButtonStyle$delegate$lambda$lambda_0() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    return width(Companion_getInstance_1(), get_px(120));
  }
  function MainImageStyle$delegate$lambda($this$ComponentStyle) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    $this$ComponentStyle.base_y8uu8g_k$(MainImageStyle$delegate$lambda$lambda);
    var tmp = get_hover($this$ComponentStyle);
    tmp.invoke_ts7809_k$(MainImageStyle$delegate$lambda$lambda_0);
    return Unit_getInstance();
  }
  function MainImageStyle$delegate$lambda$lambda() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    var tmp = Companion_getInstance_1();
    return transition(styleModifier(tmp, MainImageStyle$delegate$lambda$lambda$lambda), [CSSTransition_init_$Create$('filter', get_ms(200))]);
  }
  function MainImageStyle$delegate$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    filter($this$styleModifier, MainImageStyle$delegate$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function MainImageStyle$delegate$lambda$lambda$lambda$lambda($this$filter) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    $this$filter.grayscale_jgyvp1_k$(get_percent(100));
    return Unit_getInstance();
  }
  function MainImageStyle$delegate$lambda$lambda_0() {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    var tmp = Companion_getInstance_1();
    return styleModifier(tmp, MainImageStyle$delegate$lambda$lambda$lambda_0);
  }
  function MainImageStyle$delegate$lambda$lambda$lambda_0($this$styleModifier) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    filter($this$styleModifier, MainImageStyle$delegate$lambda$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function MainImageStyle$delegate$lambda$lambda$lambda$lambda_0($this$filter) {
    _init_properties_MainSecionStyle_kt__8jhcbz();
    $this$filter.grayscale_jgyvp1_k$(get_percent(0));
    return Unit_getInstance();
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
    $this$CssStyle.cssRule_fe6cwq_k$(' > #columnParent > #boxParent > #greenOverlay', PortfolioSectionStyle$lambda$lambda);
    $this$CssStyle.cssRule_fe6cwq_k$(':hover > #columnParent > #boxParent > #greenOverlay', PortfolioSectionStyle$lambda$lambda_0);
    $this$CssStyle.cssRule_fe6cwq_k$(' > #columnParent > #boxParent > #greenOverlay > #linkIcon', PortfolioSectionStyle$lambda$lambda_1);
    $this$CssStyle.cssRule_fe6cwq_k$(':hover > #columnParent > #boxParent > #greenOverlay > #linkIcon', PortfolioSectionStyle$lambda$lambda_2);
    $this$CssStyle.cssRule_fe6cwq_k$(' > #columnParent > #portfolioTitle', PortfolioSectionStyle$lambda$lambda_3);
    $this$CssStyle.cssRule_fe6cwq_k$(':hover > #columnParent > #portfolioTitle', PortfolioSectionStyle$lambda$lambda_4);
    $this$CssStyle.cssRule_fe6cwq_k$(' > #columnParent > #portfolioDesc', PortfolioSectionStyle$lambda$lambda_5);
    $this$CssStyle.cssRule_fe6cwq_k$(':hover > #columnParent > #portfolioDesc', PortfolioSectionStyle$lambda$lambda_6);
    return Unit_getInstance();
  }
  function PortfolioSectionStyle$lambda$lambda() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return transition(width(Companion_getInstance_1(), get_px(0)), [CSSTransition_init_$Create$('width', get_ms(500))]);
  }
  function PortfolioSectionStyle$lambda$lambda_0() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return width(Companion_getInstance_1(), get_px(300));
  }
  function PortfolioSectionStyle$lambda$lambda_1() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return visibility(Companion_getInstance_1(), Companion_getInstance_4().get_Hidden_viqel_k$());
  }
  function PortfolioSectionStyle$lambda$lambda_2() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return visibility(Companion_getInstance_1(), Companion_getInstance_4().get_Visible_yikvpz_k$());
  }
  function PortfolioSectionStyle$lambda$lambda_3() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return transition(translateX(color(Companion_getInstance_1(), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), get_percent(0)), [CSSTransition_init_$Create$('color', get_ms(200)), CSSTransition_init_$Create$('translate', get_ms(200))]);
  }
  function PortfolioSectionStyle$lambda$lambda_4() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return translateX(color(Companion_getInstance_1(), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), get_percent(5));
  }
  function PortfolioSectionStyle$lambda$lambda_5() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return transition(translateX(Companion_getInstance_1(), get_percent(0)), [CSSTransition_init_$Create$('translate', get_ms(200))]);
  }
  function PortfolioSectionStyle$lambda$lambda_6() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return translateX(Companion_getInstance_1(), get_percent(5));
  }
  function PortfolioArrowIconStyle$lambda($this$CssStyle) {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    $this$CssStyle.base_y8uu8g_k$(PortfolioArrowIconStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.invoke_ts7809_k$(PortfolioArrowIconStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function PortfolioArrowIconStyle$lambda$lambda() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return transition(color(Companion_getInstance_1(), Theme_Gray_getInstance().get_rgb_18ix0c_k$()), [CSSTransition_init_$Create$('color', get_ms(200))]);
  }
  function PortfolioArrowIconStyle$lambda$lambda_0() {
    _init_properties_PortfolioSectionStyle_kt__ltxgaq();
    return color(Companion_getInstance_1(), Theme_Primary_getInstance().get_rgb_18ix0c_k$());
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
    $this$CssStyle.base_y8uu8g_k$(ServiceCardStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    tmp.invoke_ts7809_k$(ServiceCardStyle$lambda$lambda_0);
    $this$CssStyle.cssRule_fe6cwq_k$(' > #iconBox', ServiceCardStyle$lambda$lambda_1);
    $this$CssStyle.cssRule_fe6cwq_k$(':hover > #iconBox', ServiceCardStyle$lambda$lambda_2);
    $this$CssStyle.cssRule_fe6cwq_k$(' > p', ServiceCardStyle$lambda$lambda_3);
    $this$CssStyle.cssRule_fe6cwq_k$(':hover > p', ServiceCardStyle$lambda$lambda_4);
    return Unit_getInstance();
  }
  function ServiceCardStyle$lambda$lambda() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(backgroundColor(border(tmp, tmp_0, 'solid', Theme_LighterGray_getInstance().get_rgb_18ix0c_k$()), Colors_getInstance().get_White_ij46ow_k$()), [CSSTransition_init_$Create$('border', get_ms(200)), CSSTransition_init_$Create$('background', get_ms(200))]);
  }
  function ServiceCardStyle$lambda$lambda_0() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_6();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return backgroundColor(border(tmp, tmp_0, 'solid', Theme_Primary_getInstance().get_rgb_18ix0c_k$()), Theme_Primary_getInstance().get_rgb_18ix0c_k$());
  }
  function ServiceCardStyle$lambda$lambda_1() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return transition(backgroundColor(Companion_getInstance_1(), Colors_getInstance().get_Transparent_cxh4g9_k$()), [CSSTransition_init_$Create$('background', get_ms(200))]);
  }
  function ServiceCardStyle$lambda$lambda_2() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return backgroundColor(Companion_getInstance_1(), Colors_getInstance().get_White_ij46ow_k$());
  }
  function ServiceCardStyle$lambda$lambda_3() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return transition(color(Companion_getInstance_1(), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), [CSSTransition_init_$Create$('color', get_ms(200))]);
  }
  function ServiceCardStyle$lambda$lambda_4() {
    _init_properties_ServiceSectionStyle_kt__us8nvz();
    return color(Companion_getInstance_1(), Colors_getInstance().get_White_ij46ow_k$());
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
  function Constants() {
    Constants_instance = this;
    this.WEBSITE_1 = 'https://www.google.com';
    this.SECTION_WIDTH_1 = 1920;
    this.FONT_FAMILY_1 = 'Roboto';
    this.LOREM_IPSUM_LONG_1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    this.LOREM_IPSUM_SHORTEST_1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    this.INTRO_SHORTEST_1 = 'Kobweb is a Kotlin-based framework for building full-stack web apps with shared code across platforms.';
    this.LOREM_IPSUM_SHORT_1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  }
  protoOf(Constants).get_WEBSITE_xdykcy_k$ = function () {
    return this.WEBSITE_1;
  };
  protoOf(Constants).get_SECTION_WIDTH_r5pabh_k$ = function () {
    return this.SECTION_WIDTH_1;
  };
  protoOf(Constants).get_FONT_FAMILY_nousyd_k$ = function () {
    return this.FONT_FAMILY_1;
  };
  protoOf(Constants).get_LOREM_IPSUM_LONG_qv50o_k$ = function () {
    return this.LOREM_IPSUM_LONG_1;
  };
  protoOf(Constants).get_LOREM_IPSUM_SHORTEST_73fs96_k$ = function () {
    return this.LOREM_IPSUM_SHORTEST_1;
  };
  protoOf(Constants).get_INTRO_SHORTEST_jhkht2_k$ = function () {
    return this.INTRO_SHORTEST_1;
  };
  protoOf(Constants).get_LOREM_IPSUM_SHORT_n8jfw0_k$ = function () {
    return this.LOREM_IPSUM_SHORT_1;
  };
  var Constants_instance;
  function Constants_getInstance() {
    if (Constants_instance == null)
      new Constants();
    return Constants_instance;
  }
  function Icon() {
    Icon_instance = this;
    this.IC_ANDROID_1 = 'android_icon.svg';
    this.IC_IOS_1 = 'apple_icon.svg';
    this.IC_BUSINESS_1 = 'business_icon.svg';
    this.IC_SEO_1 = 'seo_icon.svg';
    this.IC_WEB_1 = 'web_icon.svg';
    this.IC_DESIGN_1 = 'design_icon.svg';
    this.IC_REACT_1 = 'react.png';
    this.IC_LINK_1 = 'link_icon.svg';
    this.user_1 = 'user_icon.svg';
    this.shield_1 = 'shield_icon.svg';
    this.happy_1 = 'happy_icon.svg';
    this.checkmark_1 = 'checkmark_icon.svg';
    this.star_1 = 'star_icon.svg';
  }
  protoOf(Icon).get_IC_ANDROID_llj70t_k$ = function () {
    return this.IC_ANDROID_1;
  };
  protoOf(Icon).get_IC_IOS_zh227_k$ = function () {
    return this.IC_IOS_1;
  };
  protoOf(Icon).get_IC_BUSINESS_xsmq78_k$ = function () {
    return this.IC_BUSINESS_1;
  };
  protoOf(Icon).get_IC_SEO_zguvz_k$ = function () {
    return this.IC_SEO_1;
  };
  protoOf(Icon).get_IC_WEB_zgrxk_k$ = function () {
    return this.IC_WEB_1;
  };
  protoOf(Icon).get_IC_DESIGN_mbic6e_k$ = function () {
    return this.IC_DESIGN_1;
  };
  protoOf(Icon).get_IC_REACT_nf3v3x_k$ = function () {
    return this.IC_REACT_1;
  };
  protoOf(Icon).get_IC_LINK_ujmzfu_k$ = function () {
    return this.IC_LINK_1;
  };
  protoOf(Icon).get_user_wovspg_k$ = function () {
    return this.user_1;
  };
  protoOf(Icon).get_shield_jgyfsi_k$ = function () {
    return this.shield_1;
  };
  protoOf(Icon).get_happy_iscczb_k$ = function () {
    return this.happy_1;
  };
  protoOf(Icon).get_checkmark_f49nak_k$ = function () {
    return this.checkmark_1;
  };
  protoOf(Icon).get_star_woujdn_k$ = function () {
    return this.star_1;
  };
  var Icon_instance;
  function Icon_getInstance() {
    if (Icon_instance == null)
      new Icon();
    return Icon_instance;
  }
  function Image_1() {
    Image_instance = this;
    this.IC_BACKGROUND_1 = 'background.svg';
    this.IC_LOGO_1 = 'logo.svg';
    this.IC_MAIN_IMAGE_1 = 'main_image.png';
    this.IC_ABOUT_IMAGE_1 = 'about_image.png';
    this.IC_PORTFOLIO1__1 = 'portfolio1.png';
    this.IC_PORTFOLIO2__1 = 'portfolio2.png';
    this.IC_PORTFOLIO3__1 = 'portfolio3.png';
    this.IC_PORTFOLIO4__1 = 'portfolio4.jpg';
    this.IC_PORTFOLIO5__1 = 'portfolio5.png';
    this.avatar1__1 = 'avatar1.png';
    this.avatar2__1 = 'avatar2.png';
    this.avatar3__1 = 'avatar3.png';
    this.avatar4__1 = 'avatar4.png';
    this.avatar5__1 = 'avatar5.png';
    this.avatar6__1 = 'avatar6.png';
  }
  protoOf(Image_1).get_IC_BACKGROUND_4ochmy_k$ = function () {
    return this.IC_BACKGROUND_1;
  };
  protoOf(Image_1).get_IC_LOGO_ujmv5l_k$ = function () {
    return this.IC_LOGO_1;
  };
  protoOf(Image_1).get_IC_MAIN_IMAGE_fyyisv_k$ = function () {
    return this.IC_MAIN_IMAGE_1;
  };
  protoOf(Image_1).get_IC_ABOUT_IMAGE_dpd0st_k$ = function () {
    return this.IC_ABOUT_IMAGE_1;
  };
  protoOf(Image_1).get_IC_PORTFOLIO1_xkv3fp_k$ = function () {
    return this.IC_PORTFOLIO1__1;
  };
  protoOf(Image_1).get_IC_PORTFOLIO2_xkv3fq_k$ = function () {
    return this.IC_PORTFOLIO2__1;
  };
  protoOf(Image_1).get_IC_PORTFOLIO3_xkv3fr_k$ = function () {
    return this.IC_PORTFOLIO3__1;
  };
  protoOf(Image_1).get_IC_PORTFOLIO4_xkv3fs_k$ = function () {
    return this.IC_PORTFOLIO4__1;
  };
  protoOf(Image_1).get_IC_PORTFOLIO5_xkv3ft_k$ = function () {
    return this.IC_PORTFOLIO5__1;
  };
  protoOf(Image_1).get_avatar1_98k2k1_k$ = function () {
    return this.avatar1__1;
  };
  protoOf(Image_1).get_avatar2_98k2k0_k$ = function () {
    return this.avatar2__1;
  };
  protoOf(Image_1).get_avatar3_98k2jz_k$ = function () {
    return this.avatar3__1;
  };
  protoOf(Image_1).get_avatar4_98k2jy_k$ = function () {
    return this.avatar4__1;
  };
  protoOf(Image_1).get_avatar5_98k2jx_k$ = function () {
    return this.avatar5__1;
  };
  protoOf(Image_1).get_avatar6_98k2jw_k$ = function () {
    return this.avatar6__1;
  };
  var Image_instance;
  function Image_getInstance() {
    if (Image_instance == null)
      new Image_1();
    return Image_instance;
  }
  function Res() {
    Res_instance = this;
  }
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  function com_honger_ngel_utils_Constants$stableprop_getter() {
    return com_honger_ngel_utils_Constants$stable;
  }
  function com_honger_ngel_utils_Res_Icon$stableprop_getter() {
    return com_honger_ngel_utils_Res_Icon$stable;
  }
  function com_honger_ngel_utils_Res_Image$stableprop_getter() {
    return com_honger_ngel_utils_Res_Image$stable;
  }
  function com_honger_ngel_utils_Res$stableprop_getter() {
    return com_honger_ngel_utils_Res$stable;
  }
  function observeViewportEntered(sectionId, distanceFromTop, onViewportEntered, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(130582431);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(sectionId) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_qyxff6_k$(distanceFromTop) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onViewportEntered) ? 256 : 128);
    if (!(($dirty & 731) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startReplaceableGroup_ip860b_k$(302517678);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.utils.observeViewportEntered.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var viewportEntered$delegate = tmp0_group;
      $composer_0.startReplaceableGroup_ip860b_k$(302519618);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.honger.ngel.utils.observeViewportEntered.<anonymous>' call
        var value_0 = EventListener(observeViewportEntered$lambda_1(sectionId, distanceFromTop, viewportEntered$delegate));
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var listener = tmp1_group;
      var tmp_3 = observeViewportEntered$lambda(viewportEntered$delegate);
      LaunchedEffect(tmp_3, observeViewportEntered$slambda_0(onViewportEntered, listener, viewportEntered$delegate, null), $composer_0, 64);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(observeViewportEntered$lambda_2(sectionId, distanceFromTop, onViewportEntered, $changed));
    }
  }
  function animatePercentage(percentage, delay, onUpdate, $completion) {
    delay = delay === VOID ? new Long(10, 0) : delay;
    var tmp = new $animatePercentageCOROUTINE$0(percentage, delay, onUpdate, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function animateNumbers(number, delay, onUpdate, $completion) {
    delay = delay === VOID ? new Long(10, 0) : delay;
    var tmp = new $animateNumbersCOROUTINE$1(number, delay, onUpdate, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function observeViewportEntered$lambda($viewportEntered$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $viewportEntered$delegate.get_value_j01efc_k$();
  }
  function observeViewportEntered$lambda_0($viewportEntered$delegate, _set____db54di) {
    getLocalDelegateReference('viewportEntered', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $viewportEntered$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function observeViewportEntered$lambda_1($sectionId, $distanceFromTop, $viewportEntered$delegate) {
    return function (it) {
      var tmp98_safe_receiver = document.getElementById($sectionId);
      var tmp99_safe_receiver = tmp98_safe_receiver == null ? null : tmp98_safe_receiver.getBoundingClientRect();
      var top = tmp99_safe_receiver == null ? null : tmp99_safe_receiver.top;
      var tmp;
      if (!(top == null) && top < $distanceFromTop) {
        observeViewportEntered$lambda_0($viewportEntered$delegate, true);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function observeViewportEntered$slambda($onViewportEntered, $listener, $viewportEntered$delegate, resultContinuation) {
    this.$onViewportEntered_1 = $onViewportEntered;
    this.$listener_1 = $listener;
    this.$viewportEntered$delegate_1 = $viewportEntered$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(observeViewportEntered$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(observeViewportEntered$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(observeViewportEntered$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          if (observeViewportEntered$lambda(this.$viewportEntered$delegate_1)) {
            this.$onViewportEntered_1();
            window.removeEventListener('scroll', this.$listener_1);
          } else {
            window.addEventListener('scroll', this.$listener_1);
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(observeViewportEntered$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new observeViewportEntered$slambda(this.$onViewportEntered_1, this.$listener_1, this.$viewportEntered$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(observeViewportEntered$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function observeViewportEntered$slambda_0($onViewportEntered, $listener, $viewportEntered$delegate, resultContinuation) {
    var i = new observeViewportEntered$slambda($onViewportEntered, $listener, $viewportEntered$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function observeViewportEntered$lambda_2($sectionId, $distanceFromTop, $onViewportEntered, $$changed) {
    return function ($composer, $force) {
      observeViewportEntered($sectionId, $distanceFromTop, $onViewportEntered, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function $animatePercentageCOROUTINE$0(percentage, delay, onUpdate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.percentage_1 = percentage;
    this.delay_1 = delay;
    this.onUpdate_1 = onUpdate;
  }
  protoOf($animatePercentageCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_0 = this;
            tmp_0.this0__1 = numberRangeToNumber(0, this.percentage_1);
            this.tmp0_iterator1__1 = this.this0__1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this.tmp0_iterator1__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.element2__1 = this.tmp0_iterator1__1.next_20eer_k$();
            var tmp_1 = this;
            tmp_1.it3__1 = this.element2__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = delay(this.delay_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.onUpdate_1(this.it3__1);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $animateNumbersCOROUTINE$1(number, delay, onUpdate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.number_1 = number;
    this.delay_1 = delay;
    this.onUpdate_1 = onUpdate;
  }
  protoOf($animateNumbersCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_0 = this;
            tmp_0.this0__1 = numberRangeToNumber(0, this.number_1);
            this.tmp0_iterator1__1 = this.this0__1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this.tmp0_iterator1__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.element2__1 = this.tmp0_iterator1__1.next_20eer_k$();
            var tmp_1 = this;
            tmp_1.it3__1 = this.element2__1;
            this.set_state_rjd8d0_k$(2);
            suspendResult = delay(this.delay_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.onUpdate_1(this.it3__1);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
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
