(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-compose-html-ext.js', './html-html-core.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlinx-coroutines-core.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-compose-html-ext.js'), require('./html-html-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    root['kobweb-frontend-silk-widgets'] = factory(typeof this['kobweb-frontend-silk-widgets'] === 'undefined' ? {} : this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-compose-html-ext'], this['html-html-core'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-compose'], this['kobweb-frontend-silk-foundation'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kotlinx-coroutines-core'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(globalThis, function (_, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_html_html_core, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var StyleVariable_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var protoOf = kotlin_kotlin.$_$.u6;
  var initMetadataForObject = kotlin_kotlin.$_$.i6;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s3;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var borderBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var tabIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var get_ariaDisabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var not = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var get_active = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p2;
  var listOf = kotlin_kotlin.$_$.w3;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r2;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.o1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var calc = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a;
  var VOID = kotlin_kotlin.$_$.e;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var KProperty1 = kotlin_kotlin.$_$.g7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a6;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var CssStyle_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var initMetadataForCompanion = kotlin_kotlin.$_$.e6;
  var Base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var Base_init_$Init$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u1;
  var initMetadataForClass = kotlin_kotlin.$_$.d6;
  var get_focusVisible = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u2;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s2;
  var verticalAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var Companion_instance_9 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var border_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var rowClasses = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var StyleVariable_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var paddingInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var get_placeholder = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var Companion_instance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b2;
  var appearance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var get_ariaInvalid = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var get_disabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var RectF_init_$Create$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v1;
  var clip = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var overflow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d2;
  var boxSizing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var ariaHidden = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.q2;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var borderLeft = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var ResponsiveValues = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var Breakpoint_ZERO_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t1;
  var getValue = kotlin_kotlin.$_$.m3;
  var setVariable_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r1;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var Breakpoint_LG_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var Breakpoint_XL_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s1;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var THROW_CCE = kotlin_kotlin.$_$.z8;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.h3;
  var Companion_instance_12 = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.w1;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w2;
  var mapCapacity = kotlin_kotlin.$_$.x3;
  var coerceAtLeast = kotlin_kotlin.$_$.x6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var NumberValue = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var TopStart_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var refScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w1;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.d7;
  var THROW_ISE = kotlin_kotlin.$_$.a9;
  var getLocalDelegateReference = kotlin_kotlin.$_$.y5;
  var CoroutineImpl = kotlin_kotlin.$_$.k5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var isInterface = kotlin_kotlin.$_$.m6;
  var initMetadataForLambda = kotlin_kotlin.$_$.h6;
  var Companion_instance_13 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x1;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.b3;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var toString = kotlin_kotlin.$_$.w6;
  var Blue_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y1;
  var Gray_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z1;
  var Red_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a2;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var get_name = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var suffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var addClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var base_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var KProperty0 = kotlin_kotlin.$_$.f7;
  var base_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var KMutableProperty1 = kotlin_kotlin.$_$.e7;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(TabVars, 'TabVars');
  initMetadataForObject(ButtonVars, 'ButtonVars');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ButtonSize, 'ButtonSize', VOID, Base);
  initMetadataForObject(CheckboxVars, 'CheckboxVars');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(CheckboxSize, 'CheckboxSize', VOID, Base);
  initMetadataForObject(InputVars, 'InputVars');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(InputSize, 'InputSize', VOID, Base);
  initMetadataForObject(SwitchVars, 'SwitchVars');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(SwitchSize, 'SwitchSize', VOID, Base);
  initMetadataForObject(DividerVars, 'DividerVars');
  initMetadataForObject(SurfaceVars, 'SurfaceVars');
  initMetadataForLambda(Surface$lambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(OverlayVars, 'OverlayVars');
  initMetadataForObject(PopupVars, 'PopupVars');
  initMetadataForObject(TooltipVars, 'TooltipVars');
  initMetadataForObject(TransitionDurationVars, 'TransitionDurationVars');
  initMetadataForObject(FontSizeVars, 'FontSizeVars');
  initMetadataForObject(BorderRadiusVars, 'BorderRadiusVars');
  initMetadataForClass(MutableButton, 'MutableButton', VOID, ColorGroup);
  initMetadataForClass(MutableCheckbox, 'MutableCheckbox', VOID, ColorGroup);
  initMetadataForClass(MutableInput, 'MutableInput', VOID, ColorGroup);
  initMetadataForClass(MutableSwitch, 'MutableSwitch', VOID, ColorGroup);
  initMetadataForClass(MutableTab, 'MutableTab', VOID, ColorGroup);
  initMetadataForClass(MutableTooltip, 'MutableTooltip', VOID, ColorGroup);
  //endregion
  function get_TabsStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsStyle;
  }
  var TabsStyle;
  function get_TabsTabRowStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabRowStyle;
  }
  var TabsTabRowStyle;
  function get_TabsTabStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabStyle;
  }
  var TabsTabStyle;
  function get_TabsPanelStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsPanelStyle;
  }
  var TabsPanelStyle;
  var com_varabyte_kobweb_silk_components_disclosure_TabVars$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_PanelData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabPanelData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabPanelScope$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabsScope$stable;
  function TabVars() {
    TabVars_instance = this;
    this.p33_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().i2m();
    tmp.q33_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.r33_1 = StyleVariable('silk');
    this.s33_1 = StyleVariable('silk');
    this.t33_1 = StyleVariable('silk');
    this.u33_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp1_defaultFallback = get_px(2);
    tmp_0.v33_1 = StyleVariable_0(tmp1_defaultFallback, 'silk');
    var tmp_1 = this;
    var tmp2_defaultFallback = TransitionDurationVars_getInstance().e2k().i2m();
    tmp_1.w33_1 = StyleVariable_1(tmp2_defaultFallback, 'silk');
  }
  protoOf(TabVars).f34 = function () {
    return this.p33_1.o2m(this, Color$factory());
  };
  protoOf(TabVars).g34 = function () {
    return this.q33_1.o2m(this, BorderColor$factory());
  };
  protoOf(TabVars).h34 = function () {
    return this.r33_1.o2m(this, BackgroundColor$factory());
  };
  protoOf(TabVars).i34 = function () {
    return this.s33_1.o2m(this, DisabledBackgroundColor$factory());
  };
  protoOf(TabVars).j34 = function () {
    return this.t33_1.o2m(this, HoverBackgroundColor$factory());
  };
  protoOf(TabVars).k34 = function () {
    return this.u33_1.o2m(this, PressedBackgroundColor$factory());
  };
  protoOf(TabVars).l34 = function () {
    return this.v33_1.o2m(this, BorderThickness$factory());
  };
  protoOf(TabVars).m34 = function () {
    return this.w33_1.o2m(this, ColorTransitionDuration$factory());
  };
  var TabVars_instance;
  function TabVars_getInstance() {
    if (TabVars_instance == null)
      new TabVars();
    return TabVars_instance;
  }
  function TabsStyle$lambda($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    return Unit_instance;
  }
  function TabsTabRowStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = fillMaxWidth(Companion_instance);
    var tmp_0 = TabVars_getInstance().l34().i2m();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', TabVars_getInstance().g34().i2m());
  }
  function TabsTabStyle$lambda($composer, $changed) {
    _init_properties_Tabs_kt__myintq();
    var $composer_0 = $composer;
    $composer_0.z18(2044107546);
    var tmp0 = tabIndex(Companion_instance, 0);
    $composer_0.a19();
    return tmp0;
  }
  function TabsTabStyle$lambda_0($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    $this$CssStyle.m2y(TabsTabStyle$lambda$lambda);
    var tmp = get_ariaDisabled($this$CssStyle);
    tmp.r2x(TabsTabStyle$lambda$lambda_0);
    var tmp_0 = get_hover($this$CssStyle).a2y(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_0.r2x(TabsTabStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).a2y(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_1.r2x(TabsTabStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function TabsTabStyle$lambda$lambda() {
    _init_properties_Tabs_kt__myintq();
    var tmp = padding(userSelect(color(backgroundColor(transition(cursor(Companion_instance, Companion_instance_1.y2j()), Companion_instance_2.b2n(listOf(['background-color', 'color', 'border-color']), TabVars_getInstance().m34().i2m())), TabVars_getInstance().h34().i2m()), TabVars_getInstance().f34().i2m()), Companion_instance_3.b2k()), get_cssRem(0.5));
    var tmp_0 = margin(tmp, VOID, VOID, calc(TabsTabStyle$lambda$lambda$lambda));
    var tmp_1 = TabVars_getInstance().l34().i2m();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp_0, tmp_1, 'solid', TabVars_getInstance().g34().i2m());
  }
  function TabsTabStyle$lambda$lambda$lambda($this$calc) {
    _init_properties_Tabs_kt__myintq();
    return $this$calc.l2n(TabVars_getInstance().l34().i2m());
  }
  function TabsTabStyle$lambda$lambda_0() {
    _init_properties_Tabs_kt__myintq();
    return cursor(backgroundColor(Companion_instance, TabVars_getInstance().i34().i2m()), Companion_instance_1.z2j());
  }
  function TabsTabStyle$lambda$lambda_1() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().j34().i2m());
  }
  function TabsTabStyle$lambda$lambda_2() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().k34().i2m());
  }
  function TabsPanelStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = flexGrow(fillMaxWidth(padding(Companion_instance, get_cssRem(1))), 1);
    return overflow(tmp, TabsPanelStyle$lambda$lambda);
  }
  function TabsPanelStyle$lambda$lambda($this$overflow) {
    _init_properties_Tabs_kt__myintq();
    $this$overflow.w2t(Companion_instance_4.v2l());
    return Unit_instance;
  }
  function Color$factory() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.f34();
    }, null);
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.g34();
    }, null);
  }
  function BackgroundColor$factory() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.h34();
    }, null);
  }
  function DisabledBackgroundColor$factory() {
    return getPropertyCallableRef('DisabledBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.i34();
    }, null);
  }
  function HoverBackgroundColor$factory() {
    return getPropertyCallableRef('HoverBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.j34();
    }, null);
  }
  function PressedBackgroundColor$factory() {
    return getPropertyCallableRef('PressedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.k34();
    }, null);
  }
  function BorderThickness$factory() {
    return getPropertyCallableRef('BorderThickness', 1, KProperty1, function (receiver) {
      return receiver.l34();
    }, null);
  }
  function ColorTransitionDuration$factory() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.m34();
    }, null);
  }
  var properties_initialized_Tabs_kt_moodfk;
  function _init_properties_Tabs_kt__myintq() {
    if (!properties_initialized_Tabs_kt_moodfk) {
      properties_initialized_Tabs_kt_moodfk = true;
      TabsStyle = CssStyle(VOID, TabsStyle$lambda);
      var tmp = Companion_instance_5;
      TabsTabRowStyle = base(tmp, VOID, TabsTabRowStyle$lambda);
      var tmp_0 = TabsTabStyle$lambda;
      TabsTabStyle = CssStyle_0(tmp_0, TabsTabStyle$lambda_0);
      var tmp_1 = Companion_instance_5;
      TabsPanelStyle = base(tmp_1, VOID, TabsPanelStyle$lambda);
      com_varabyte_kobweb_silk_components_disclosure_TabVars$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabData$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_PanelData$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabPanelData$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabPanelScope$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabsScope$stable = 8;
    }
  }
  function get_ButtonStyle() {
    _init_properties_Button_kt__2845m6();
    return ButtonStyle;
  }
  var ButtonStyle;
  var com_varabyte_kobweb_silk_components_forms_ButtonVars$stable;
  var com_varabyte_kobweb_silk_components_forms_ButtonSize$stable;
  function ButtonVars() {
    ButtonVars_instance = this;
    this.n34_1 = StyleVariable('silk');
    var tmp = this;
    var tmp3_defaultFallback = get_FocusOutlineColorVar().i2m();
    tmp.o34_1 = StyleVariable_0(tmp3_defaultFallback, 'silk');
    this.p34_1 = StyleVariable('silk');
    this.q34_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp4_defaultFallback = get_ColorVar().i2m();
    tmp_0.r34_1 = StyleVariable_0(tmp4_defaultFallback, 'silk');
    var tmp_1 = this;
    var tmp5_defaultFallback = TransitionDurationVars_getInstance().e2k().i2m();
    tmp_1.s34_1 = StyleVariable_1(tmp5_defaultFallback, 'silk');
    this.t34_1 = StyleVariable('silk');
    this.u34_1 = StyleVariable('silk');
    this.v34_1 = StyleVariable('silk');
  }
  protoOf(ButtonVars).w34 = function () {
    return this.n34_1.o2m(this, BackgroundDefaultColor$factory());
  };
  protoOf(ButtonVars).x34 = function () {
    return this.o34_1.o2m(this, BackgroundFocusColor$factory());
  };
  protoOf(ButtonVars).y34 = function () {
    return this.p34_1.o2m(this, BackgroundHoverColor$factory());
  };
  protoOf(ButtonVars).z34 = function () {
    return this.q34_1.o2m(this, BackgroundPressedColor$factory());
  };
  protoOf(ButtonVars).f34 = function () {
    return this.r34_1.o2m(this, Color$factory_0());
  };
  protoOf(ButtonVars).m34 = function () {
    return this.s34_1.o2m(this, ColorTransitionDuration$factory_0());
  };
  protoOf(ButtonVars).a35 = function () {
    return this.t34_1.o2m(this, FontSize$factory());
  };
  protoOf(ButtonVars).b35 = function () {
    return this.u34_1.o2m(this, Height$factory());
  };
  protoOf(ButtonVars).c35 = function () {
    return this.v34_1.o2m(this, PaddingHorizontal$factory());
  };
  var ButtonVars_instance;
  function ButtonVars_getInstance() {
    if (ButtonVars_instance == null)
      new ButtonVars();
    return ButtonVars_instance;
  }
  function Companion() {
    Companion_instance_14 = this;
    this.d35_1 = new ButtonSize(FontSizeVars_getInstance().l35().i2m(), get_cssRem(1.5), get_cssRem(0.5));
    this.e35_1 = new ButtonSize(FontSizeVars_getInstance().m35().i2m(), get_cssRem(2), get_cssRem(0.75));
    this.f35_1 = new ButtonSize(FontSizeVars_getInstance().n35().i2m(), get_cssRem(2.5), get_cssRem(1));
    this.g35_1 = new ButtonSize(FontSizeVars_getInstance().o35().i2m(), get_cssRem(3), get_cssRem(1.5));
  }
  var Companion_instance_14;
  function Companion_getInstance_0() {
    if (Companion_instance_14 == null)
      new Companion();
    return Companion_instance_14;
  }
  function ButtonSize(fontSize, height, horizontalPadding) {
    Companion_getInstance_0();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, ButtonVars_getInstance().a35(), fontSize), ButtonVars_getInstance().b35(), height), ButtonVars_getInstance().c35(), horizontalPadding), VOID, this);
  }
  function ButtonStyle$lambda($this$CssStyle) {
    _init_properties_Button_kt__2845m6();
    $this$CssStyle.m2y(ButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).a2y(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp.r2x(ButtonStyle$lambda$lambda_0);
    var tmp_0 = get_focusVisible($this$CssStyle).a2y(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_0.r2x(ButtonStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).a2y(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_1.r2x(ButtonStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda() {
    _init_properties_Button_kt__2845m6();
    var tmp = borderRadius(verticalAlign(padding_0(whiteSpace(fontWeight(fontSize(minWidth(height(lineHeight(backgroundColor(color(Companion_instance, ButtonVars_getInstance().f34().i2m()), ButtonVars_getInstance().w34().i2m()), 1.2), ButtonVars_getInstance().b35().i2m()), ButtonVars_getInstance().b35().i2m()), ButtonVars_getInstance().a35().i2m()), Companion_instance_6.d2k()), Companion_instance_7.s2m()), VOID, ButtonVars_getInstance().c35().i2m()), Companion_instance_8.l2l()), get_cssRem(0.375));
    return transition_0(userSelect(border(tmp, ButtonStyle$lambda$lambda$lambda), Companion_instance_3.b2k()), [Companion_instance_2.z2m('background-color', ButtonVars_getInstance().m34().i2m())]);
  }
  function ButtonStyle$lambda$lambda$lambda($this$border) {
    _init_properties_Button_kt__2845m6();
    $this$border.u2t(get_px(0));
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda_0() {
    _init_properties_Button_kt__2845m6();
    return cursor(backgroundColor(Companion_instance, ButtonVars_getInstance().y34().i2m()), Companion_instance_1.y2j());
  }
  function ButtonStyle$lambda$lambda_1() {
    _init_properties_Button_kt__2845m6();
    var tmp = Companion_instance;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(outline(tmp, tmp_0, 'solid', Colors_instance.d2t()), VOID, VOID, VOID, get_cssRem(0.1875), ButtonVars_getInstance().x34().i2m());
  }
  function ButtonStyle$lambda$lambda_2() {
    _init_properties_Button_kt__2845m6();
    return backgroundColor(Companion_instance, ButtonVars_getInstance().z34().i2m());
  }
  function BackgroundDefaultColor$factory() {
    return getPropertyCallableRef('BackgroundDefaultColor', 1, KProperty1, function (receiver) {
      return receiver.w34();
    }, null);
  }
  function BackgroundFocusColor$factory() {
    return getPropertyCallableRef('BackgroundFocusColor', 1, KProperty1, function (receiver) {
      return receiver.x34();
    }, null);
  }
  function BackgroundHoverColor$factory() {
    return getPropertyCallableRef('BackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.y34();
    }, null);
  }
  function BackgroundPressedColor$factory() {
    return getPropertyCallableRef('BackgroundPressedColor', 1, KProperty1, function (receiver) {
      return receiver.z34();
    }, null);
  }
  function Color$factory_0() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.f34();
    }, null);
  }
  function ColorTransitionDuration$factory_0() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.m34();
    }, null);
  }
  function FontSize$factory() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.a35();
    }, null);
  }
  function Height$factory() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.b35();
    }, null);
  }
  function PaddingHorizontal$factory() {
    return getPropertyCallableRef('PaddingHorizontal', 1, KProperty1, function (receiver) {
      return receiver.c35();
    }, null);
  }
  var properties_initialized_Button_kt_yov184;
  function _init_properties_Button_kt__2845m6() {
    if (!properties_initialized_Button_kt_yov184) {
      properties_initialized_Button_kt_yov184 = true;
      ButtonStyle = CssStyle(VOID, ButtonStyle$lambda);
      com_varabyte_kobweb_silk_components_forms_ButtonVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_ButtonSize$stable = 0;
    }
  }
  function get_CheckboxStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxStyle;
  }
  var CheckboxStyle;
  function get_CheckboxEnabledAnim() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxEnabledAnim;
  }
  var CheckboxEnabledAnim;
  function get_CheckboxIconContainerStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconContainerStyle;
  }
  var CheckboxIconContainerStyle;
  function get_UncheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return UncheckedCheckboxIconContainerVariant;
  }
  var UncheckedCheckboxIconContainerVariant;
  function get_CheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckedCheckboxIconContainerVariant;
  }
  var CheckedCheckboxIconContainerVariant;
  function get_CheckboxIconStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconStyle;
  }
  var CheckboxIconStyle;
  function get_CheckboxInputVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxInputVariant;
  }
  var CheckboxInputVariant;
  var com_varabyte_kobweb_silk_components_forms_CheckboxDefaults$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxVars$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxSize$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxIconScope$stable;
  function CheckboxVars() {
    CheckboxVars_instance = this;
    var tmp = this;
    var tmp6_defaultFallback = get_BorderColorVar().i2m();
    tmp.p35_1 = StyleVariable_0(tmp6_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp7_defaultFallback = get_cssRem(0.125);
    tmp_0.q35_1 = StyleVariable_0(tmp7_defaultFallback, 'silk');
    var tmp_1 = this;
    var tmp8_defaultFallback = get_cssRem(0.125);
    tmp_1.r35_1 = StyleVariable_0(tmp8_defaultFallback, 'silk');
    this.s35_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp9_defaultFallback = get_cssRem(0.5);
    tmp_2.t35_1 = StyleVariable_0(tmp9_defaultFallback, 'silk');
    this.u35_1 = StyleVariable('silk');
    this.v35_1 = StyleVariable('silk');
    var tmp_3 = this;
    var tmp10_defaultFallback = get_FocusOutlineColorVar().i2m();
    tmp_3.w35_1 = StyleVariable_0(tmp10_defaultFallback, 'silk');
    var tmp_4 = this;
    var tmp11_defaultFallback = get_cssRem(0.1875);
    tmp_4.x35_1 = StyleVariable_0(tmp11_defaultFallback, 'silk');
    this.y35_1 = StyleVariable('silk');
    this.z35_1 = StyleVariable('silk');
    this.a36_1 = StyleVariable('silk');
    this.b36_1 = StyleVariable('silk');
    var tmp_5 = this;
    var tmp12_defaultFallback = TransitionDurationVars_getInstance().d36().i2m();
    tmp_5.c36_1 = StyleVariable_1(tmp12_defaultFallback, 'silk');
  }
  protoOf(CheckboxVars).g34 = function () {
    return this.p35_1.o2m(this, BorderColor$factory_0());
  };
  protoOf(CheckboxVars).e36 = function () {
    return this.q35_1.o2m(this, BorderRadius$factory());
  };
  protoOf(CheckboxVars).f36 = function () {
    return this.r35_1.o2m(this, BorderWidth$factory());
  };
  protoOf(CheckboxVars).g36 = function () {
    return this.s35_1.o2m(this, Size$factory());
  };
  protoOf(CheckboxVars).h36 = function () {
    return this.t35_1.o2m(this, Spacing$factory());
  };
  protoOf(CheckboxVars).a35 = function () {
    return this.u35_1.o2m(this, FontSize$factory_0());
  };
  protoOf(CheckboxVars).i36 = function () {
    return this.v35_1.o2m(this, IconSize$factory());
  };
  protoOf(CheckboxVars).j36 = function () {
    return this.w35_1.o2m(this, FocusOutlineColor$factory());
  };
  protoOf(CheckboxVars).k36 = function () {
    return this.x35_1.o2m(this, FocusOutlineSpread$factory());
  };
  protoOf(CheckboxVars).l36 = function () {
    return this.y35_1.o2m(this, UncheckedBackgroundColor$factory());
  };
  protoOf(CheckboxVars).m36 = function () {
    return this.z35_1.o2m(this, IconColor$factory());
  };
  protoOf(CheckboxVars).n36 = function () {
    return this.a36_1.o2m(this, IconBackgroundColor$factory());
  };
  protoOf(CheckboxVars).o36 = function () {
    return this.b36_1.o2m(this, IconBackgroundHoverColor$factory());
  };
  protoOf(CheckboxVars).p36 = function () {
    return this.c36_1.o2m(this, TransitionDuration$factory());
  };
  var CheckboxVars_instance;
  function CheckboxVars_getInstance() {
    if (CheckboxVars_instance == null)
      new CheckboxVars();
    return CheckboxVars_instance;
  }
  function Companion_0() {
    Companion_instance_15 = this;
    this.q36_1 = new CheckboxSize(get_cssRem(0.875), get_cssRem(0.45), FontSizeVars_getInstance().m35().i2m());
    this.r36_1 = new CheckboxSize(get_cssRem(1), get_cssRem(0.625), FontSizeVars_getInstance().n35().i2m());
    this.s36_1 = new CheckboxSize(get_cssRem(1.25), get_cssRem(0.8), FontSizeVars_getInstance().o35().i2m());
  }
  var Companion_instance_15;
  function Companion_getInstance_1() {
    if (Companion_instance_15 == null)
      new Companion_0();
    return Companion_instance_15;
  }
  function CheckboxSize(boxSize, iconSize, fontSize) {
    Companion_getInstance_1();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, CheckboxVars_getInstance().g36(), boxSize), CheckboxVars_getInstance().i36(), iconSize), CheckboxVars_getInstance().a35(), fontSize), VOID, this);
  }
  function CheckboxStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.m2y(CheckboxStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = cursor(fontSize(userSelect(gap(Companion_instance, CheckboxVars_getInstance().h36().i2m()), Companion_instance_3.b2k()), CheckboxVars_getInstance().a35().i2m()), Companion_instance_1.y2j());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function CheckboxEnabledAnim$lambda($this$Keyframes) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$Keyframes.r2z(CheckboxEnabledAnim$lambda$lambda);
    $this$Keyframes.s2z(CheckboxEnabledAnim$lambda$lambda_0);
    return Unit_instance;
  }
  function CheckboxEnabledAnim$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 0);
  }
  function CheckboxEnabledAnim$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 1);
  }
  function CheckboxIconContainerStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.m2y(CheckboxIconContainerStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxIconContainerStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = size(fontSize(Companion_instance, CheckboxVars_getInstance().i36().i2m()), CheckboxVars_getInstance().g36().i2m());
    var tmp_0 = CheckboxVars_getInstance().f36().i2m();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(borderRadius(border_0(tmp, tmp_0, 'solid', CheckboxVars_getInstance().g34().i2m()), CheckboxVars_getInstance().e36().i2m()), Companion_instance_2.b2n(listOf(['background-color', 'border-color']), CheckboxVars_getInstance().p36().i2m()));
  }
  function UncheckedCheckboxIconContainerVariant$lambda($this$addVariantBase) {
    _init_properties_Checkbox_kt__x46qhp();
    return backgroundColor(Companion_instance, CheckboxVars_getInstance().l36().i2m());
  }
  function CheckedCheckboxIconContainerVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.m2y(CheckedCheckboxIconContainerVariant$lambda$lambda);
    return Unit_instance;
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = backgroundColor(Companion_instance, CheckboxVars_getInstance().n36().i2m());
    return border(tmp, CheckedCheckboxIconContainerVariant$lambda$lambda$lambda);
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$border.s2t(CheckboxVars_getInstance().n36().i2m());
    return Unit_instance;
  }
  function CheckboxIconStyle$lambda($this$base) {
    _init_properties_Checkbox_kt__x46qhp();
    return color(size(Companion_instance, CheckboxVars_getInstance().g36().i2m()), CheckboxVars_getInstance().m36().i2m());
  }
  function CheckboxInputVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.m2y(CheckboxInputVariant$lambda$lambda);
    $this$addVariant.c2z(':focus-visible + *', CheckboxInputVariant$lambda$lambda_0);
    $this$addVariant.c2z(':not([aria-disabled]):hover + *', CheckboxInputVariant$lambda$lambda_1);
    return Unit_instance;
  }
  function CheckboxInputVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return get_HiddenInputModifier();
  }
  function CheckboxInputVariant$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return boxShadow(Companion_instance, VOID, VOID, VOID, CheckboxVars_getInstance().k36().i2m(), CheckboxVars_getInstance().j36().i2m());
  }
  function CheckboxInputVariant$lambda$lambda_1() {
    _init_properties_Checkbox_kt__x46qhp();
    return setVariable(Companion_instance, CheckboxVars_getInstance().n36(), CheckboxVars_getInstance().o36().i2m());
  }
  function BorderColor$factory_0() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.g34();
    }, null);
  }
  function BorderRadius$factory() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.e36();
    }, null);
  }
  function BorderWidth$factory() {
    return getPropertyCallableRef('BorderWidth', 1, KProperty1, function (receiver) {
      return receiver.f36();
    }, null);
  }
  function Size$factory() {
    return getPropertyCallableRef('Size', 1, KProperty1, function (receiver) {
      return receiver.g36();
    }, null);
  }
  function Spacing$factory() {
    return getPropertyCallableRef('Spacing', 1, KProperty1, function (receiver) {
      return receiver.h36();
    }, null);
  }
  function FontSize$factory_0() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.a35();
    }, null);
  }
  function IconSize$factory() {
    return getPropertyCallableRef('IconSize', 1, KProperty1, function (receiver) {
      return receiver.i36();
    }, null);
  }
  function FocusOutlineColor$factory() {
    return getPropertyCallableRef('FocusOutlineColor', 1, KProperty1, function (receiver) {
      return receiver.j36();
    }, null);
  }
  function FocusOutlineSpread$factory() {
    return getPropertyCallableRef('FocusOutlineSpread', 1, KProperty1, function (receiver) {
      return receiver.k36();
    }, null);
  }
  function UncheckedBackgroundColor$factory() {
    return getPropertyCallableRef('UncheckedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.l36();
    }, null);
  }
  function IconColor$factory() {
    return getPropertyCallableRef('IconColor', 1, KProperty1, function (receiver) {
      return receiver.m36();
    }, null);
  }
  function IconBackgroundColor$factory() {
    return getPropertyCallableRef('IconBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.n36();
    }, null);
  }
  function IconBackgroundHoverColor$factory() {
    return getPropertyCallableRef('IconBackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.o36();
    }, null);
  }
  function TransitionDuration$factory() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.p36();
    }, null);
  }
  var properties_initialized_Checkbox_kt_pem0wr;
  function _init_properties_Checkbox_kt__x46qhp() {
    if (!properties_initialized_Checkbox_kt_pem0wr) {
      properties_initialized_Checkbox_kt_pem0wr = true;
      var tmp = rowClasses(Companion_instance, VOID, CenterVertically_instance);
      CheckboxStyle = CssStyle(tmp, CheckboxStyle$lambda);
      CheckboxEnabledAnim = new Keyframes(CheckboxEnabledAnim$lambda);
      CheckboxIconContainerStyle = CssStyle(VOID, CheckboxIconContainerStyle$lambda);
      var tmp_0 = get_CheckboxIconContainerStyle();
      UncheckedCheckboxIconContainerVariant = addVariantBase(tmp_0, VOID, UncheckedCheckboxIconContainerVariant$lambda);
      var tmp_1 = get_CheckboxIconContainerStyle();
      CheckedCheckboxIconContainerVariant = addVariant(tmp_1, VOID, CheckedCheckboxIconContainerVariant$lambda);
      var tmp_2 = Companion_instance_5;
      CheckboxIconStyle = base(tmp_2, VOID, CheckboxIconStyle$lambda);
      var tmp_3 = get_InputStyle();
      CheckboxInputVariant = addVariant(tmp_3, VOID, CheckboxInputVariant$lambda);
      com_varabyte_kobweb_silk_components_forms_CheckboxDefaults$stable = 0;
      com_varabyte_kobweb_silk_components_forms_CheckboxVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_CheckboxSize$stable = 0;
      com_varabyte_kobweb_silk_components_forms_CheckboxIconScope$stable = 0;
    }
  }
  function get_HiddenInputModifier() {
    _init_properties_Input_kt__b04mg8();
    return HiddenInputModifier;
  }
  var HiddenInputModifier;
  function get_InputGroupStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputGroupStyle;
  }
  var InputGroupStyle;
  function get_InputStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputStyle;
  }
  var InputStyle;
  function get_OutlinedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return OutlinedInputVariant;
  }
  var OutlinedInputVariant;
  function get_FilledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FilledInputVariant;
  }
  var FilledInputVariant;
  function get_FlushedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FlushedInputVariant;
  }
  var FlushedInputVariant;
  function get_UnstyledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return UnstyledInputVariant;
  }
  var UnstyledInputVariant;
  var com_varabyte_kobweb_silk_components_forms_InputDefaults$stable;
  var com_varabyte_kobweb_silk_components_forms_InputVars$stable;
  var com_varabyte_kobweb_silk_components_forms_InputParams$stable;
  var com_varabyte_kobweb_silk_components_forms_InputGroupScope$stable;
  var com_varabyte_kobweb_silk_components_forms_InputSize$stable;
  function InputVars() {
    InputVars_instance = this;
    var tmp = this;
    var tmp15_defaultFallback = get_BorderColorVar().i2m();
    tmp.t36_1 = StyleVariable_0(tmp15_defaultFallback, 'silk');
    this.u36_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp16_defaultFallback = get_FocusOutlineColorVar().i2m();
    tmp_0.v36_1 = StyleVariable_0(tmp16_defaultFallback, 'silk');
    this.w36_1 = StyleVariable('silk');
    this.x36_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp17_defaultFallback = TransitionDurationVars_getInstance().e2k().i2m();
    tmp_1.y36_1 = StyleVariable_1(tmp17_defaultFallback, 'silk');
    this.z36_1 = StyleVariable('silk');
    this.a37_1 = StyleVariable('silk');
    this.b37_1 = StyleVariable('silk');
    this.c37_1 = StyleVariable('silk');
    this.d37_1 = StyleVariable('silk');
    this.e37_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp18_defaultFallback = get_PlaceholderOpacityVar().i2m();
    tmp_2.f37_1 = StyleVariable_2(tmp18_defaultFallback, 'silk');
    var tmp_3 = this;
    var tmp19_defaultFallback = get_PlaceholderColorVar().i2m();
    tmp_3.g37_1 = StyleVariable_0(tmp19_defaultFallback, 'silk');
    var tmp_4 = this;
    var tmp20_defaultFallback = get_cssRem(2.25);
    tmp_4.h37_1 = StyleVariable_0(tmp20_defaultFallback, 'silk');
    var tmp_5 = this;
    var tmp21_defaultFallback = get_cssRem(2.25);
    tmp_5.i37_1 = StyleVariable_0(tmp21_defaultFallback, 'silk');
  }
  protoOf(InputVars).g34 = function () {
    return this.t36_1.o2m(this, BorderColor$factory_1());
  };
  protoOf(InputVars).e36 = function () {
    return this.u36_1.o2m(this, BorderRadius$factory_0());
  };
  protoOf(InputVars).j37 = function () {
    return this.v36_1.o2m(this, BorderFocusColor$factory());
  };
  protoOf(InputVars).k37 = function () {
    return this.w36_1.o2m(this, BorderHoverColor$factory());
  };
  protoOf(InputVars).l37 = function () {
    return this.x36_1.o2m(this, BorderInvalidColor$factory());
  };
  protoOf(InputVars).m34 = function () {
    return this.y36_1.o2m(this, ColorTransitionDuration$factory_1());
  };
  protoOf(InputVars).m37 = function () {
    return this.z36_1.o2m(this, FilledColor$factory());
  };
  protoOf(InputVars).n37 = function () {
    return this.a37_1.o2m(this, FilledHoverColor$factory());
  };
  protoOf(InputVars).o37 = function () {
    return this.b37_1.o2m(this, FilledFocusColor$factory());
  };
  protoOf(InputVars).a35 = function () {
    return this.c37_1.o2m(this, FontSize$factory_1());
  };
  protoOf(InputVars).b35 = function () {
    return this.d37_1.o2m(this, Height$factory_0());
  };
  protoOf(InputVars).p37 = function () {
    return this.e37_1.o2m(this, Padding$factory());
  };
  protoOf(InputVars).q37 = function () {
    return this.f37_1.o2m(this, PlaceholderOpacity$factory());
  };
  protoOf(InputVars).r37 = function () {
    return this.g37_1.o2m(this, PlaceholderColor$factory());
  };
  var InputVars_instance;
  function InputVars_getInstance() {
    if (InputVars_instance == null)
      new InputVars();
    return InputVars_instance;
  }
  function inputPadding(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    var padding = InputVars_getInstance().p37().i2m();
    return paddingInline(_this__u8e3s4, padding, padding);
  }
  function Companion_1() {
    Companion_instance_16 = this;
    this.s37_1 = new InputSize(FontSizeVars_getInstance().l35().i2m(), get_cssRem(1.25), get_cssRem(0.375), BorderRadiusVars_getInstance().l35().i2m());
    this.t37_1 = new InputSize(FontSizeVars_getInstance().m35().i2m(), get_cssRem(1.75), get_cssRem(0.5), BorderRadiusVars_getInstance().m35().i2m());
    this.u37_1 = new InputSize(FontSizeVars_getInstance().n35().i2m(), get_cssRem(2.25), get_cssRem(0.625), BorderRadiusVars_getInstance().n35().i2m());
    this.v37_1 = new InputSize(FontSizeVars_getInstance().o35().i2m(), get_cssRem(2.5), get_cssRem(0.75), BorderRadiusVars_getInstance().n35().i2m());
  }
  var Companion_instance_16;
  function Companion_getInstance_2() {
    if (Companion_instance_16 == null)
      new Companion_1();
    return Companion_instance_16;
  }
  function InputSize(fontSize, height, padding, borderRadius) {
    Companion_getInstance_2();
    Base_init_$Init$(setVariable(setVariable(setVariable(setVariable(Companion_instance, InputVars_getInstance().a35(), fontSize), InputVars_getInstance().b35(), height), InputVars_getInstance().p37(), padding), InputVars_getInstance().e36(), borderRadius), VOID, this);
  }
  function InputGroupStyle$lambda($this$base) {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.d2t());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fontSize(borderRadius(border_0(tmp_1, tmp_2, 'solid', Colors_instance.d2t()), InputVars_getInstance().e36().i2m()), InputVars_getInstance().a35().i2m());
  }
  function InputStyle$lambda($this$CssStyle) {
    _init_properties_Input_kt__b04mg8();
    $this$CssStyle.m2y(InputStyle$lambda$lambda);
    var tmp = get_placeholder($this$CssStyle);
    tmp.r2x(InputStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function InputStyle$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = backgroundColor(fontSize(height(color(appearance(Companion_instance, Companion_instance_10.b2k()), get_ColorVar().i2m()), InputVars_getInstance().b35().i2m()), InputVars_getInstance().a35().i2m()), Colors_instance.d2t());
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.d2t());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border_0(tmp_1, tmp_2, 'solid', Colors_instance.d2t()), Companion_instance_2.b2n(listOf(['border-color', 'box-shadow', 'background-color']), InputVars_getInstance().m34().i2m()));
  }
  function InputStyle$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return color(opacity(Companion_instance, InputVars_getInstance().q37().i2m()), InputVars_getInstance().r37().i2m());
  }
  function OutlinedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.m2y(OutlinedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.r2x(OutlinedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).a2y(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.r2x(OutlinedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).a2y(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.r2x(OutlinedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered(_this__u8e3s4, color) {
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(border_0(_this__u8e3s4, tmp, 'solid', color), VOID, VOID, VOID, get_px(1), color);
  }
  function OutlinedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(inputPadding(Companion_instance), InputVars_getInstance().e36().i2m());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', InputVars_getInstance().g34().i2m());
  }
  function OutlinedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().l37().i2m());
  }
  function OutlinedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border(tmp, OutlinedInputVariant$lambda$lambda$lambda);
  }
  function OutlinedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.s2t(InputVars_getInstance().k37().i2m());
    return Unit_instance;
  }
  function OutlinedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().j37().i2m());
  }
  function FilledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.m2y(FilledInputVariant$lambda$lambda);
    var tmp = get_hover($this$addVariant).a2y(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp.r2x(FilledInputVariant$lambda$lambda_0);
    var tmp_0 = get_ariaInvalid($this$addVariant);
    tmp_0.r2x(FilledInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).a2y(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.r2x(FilledInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_0(_this__u8e3s4, color) {
    return boxShadow(border(_this__u8e3s4, FilledInputVariant$lambda$bordered$lambda(color)), VOID, VOID, VOID, get_px(1), color);
  }
  function FilledInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(backgroundColor(inputPadding(Companion_instance), InputVars_getInstance().m37().i2m()), InputVars_getInstance().e36().i2m());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', Colors_instance.d2t());
  }
  function FilledInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return backgroundColor(Companion_instance, InputVars_getInstance().n37().i2m());
  }
  function FilledInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(Companion_instance, InputVars_getInstance().l37().i2m());
  }
  function FilledInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(backgroundColor(Companion_instance, InputVars_getInstance().o37().i2m()), InputVars_getInstance().j37().i2m());
  }
  function FilledInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.s2t($color);
      return Unit_instance;
    };
  }
  function FlushedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.m2y(FlushedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.r2x(FlushedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).a2y(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.r2x(FlushedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).a2y(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.r2x(FlushedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_1(_this__u8e3s4, color) {
    return boxShadow(border(_this__u8e3s4, FlushedInputVariant$lambda$bordered$lambda(color)), VOID, get_px(1), VOID, VOID, color);
  }
  function FlushedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', InputVars_getInstance().g34().i2m());
  }
  function FlushedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().l37().i2m());
  }
  function FlushedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border(tmp, FlushedInputVariant$lambda$lambda$lambda);
  }
  function FlushedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.s2t(InputVars_getInstance().k37().i2m());
    return Unit_instance;
  }
  function FlushedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().j37().i2m());
  }
  function FlushedInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.s2t($color);
      return Unit_instance;
    };
  }
  function UnstyledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    return Unit_instance;
  }
  function BorderColor$factory_1() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.g34();
    }, null);
  }
  function BorderRadius$factory_0() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.e36();
    }, null);
  }
  function BorderFocusColor$factory() {
    return getPropertyCallableRef('BorderFocusColor', 1, KProperty1, function (receiver) {
      return receiver.j37();
    }, null);
  }
  function BorderHoverColor$factory() {
    return getPropertyCallableRef('BorderHoverColor', 1, KProperty1, function (receiver) {
      return receiver.k37();
    }, null);
  }
  function BorderInvalidColor$factory() {
    return getPropertyCallableRef('BorderInvalidColor', 1, KProperty1, function (receiver) {
      return receiver.l37();
    }, null);
  }
  function ColorTransitionDuration$factory_1() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.m34();
    }, null);
  }
  function FilledColor$factory() {
    return getPropertyCallableRef('FilledColor', 1, KProperty1, function (receiver) {
      return receiver.m37();
    }, null);
  }
  function FilledHoverColor$factory() {
    return getPropertyCallableRef('FilledHoverColor', 1, KProperty1, function (receiver) {
      return receiver.n37();
    }, null);
  }
  function FilledFocusColor$factory() {
    return getPropertyCallableRef('FilledFocusColor', 1, KProperty1, function (receiver) {
      return receiver.o37();
    }, null);
  }
  function FontSize$factory_1() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.a35();
    }, null);
  }
  function Height$factory_0() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.b35();
    }, null);
  }
  function Padding$factory() {
    return getPropertyCallableRef('Padding', 1, KProperty1, function (receiver) {
      return receiver.p37();
    }, null);
  }
  function PlaceholderOpacity$factory() {
    return getPropertyCallableRef('PlaceholderOpacity', 1, KProperty1, function (receiver) {
      return receiver.q37();
    }, null);
  }
  function PlaceholderColor$factory() {
    return getPropertyCallableRef('PlaceholderColor', 1, KProperty1, function (receiver) {
      return receiver.r37();
    }, null);
  }
  var properties_initialized_Input_kt_tklayu;
  function _init_properties_Input_kt__b04mg8() {
    if (!properties_initialized_Input_kt_tklayu) {
      properties_initialized_Input_kt_tklayu = true;
      var tmp = whiteSpace(overflow_0(clip(padding(margin_0(size(border_0(Companion_instance, get_px(0)), get_px(1)), get_px(-1)), get_px(0)), RectF_init_$Create$(50.0)), Companion_instance_4.u2l()), Companion_instance_7.s2m());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'absolute';
      HiddenInputModifier = position(tmp, tmp$ret$3);
      var tmp_0 = Companion_instance_5;
      InputGroupStyle = base(tmp_0, VOID, InputGroupStyle$lambda);
      InputStyle = CssStyle(VOID, InputStyle$lambda);
      var tmp_1 = get_InputStyle();
      OutlinedInputVariant = addVariant(tmp_1, VOID, OutlinedInputVariant$lambda);
      var tmp_2 = get_InputStyle();
      FilledInputVariant = addVariant(tmp_2, VOID, FilledInputVariant$lambda);
      var tmp_3 = get_InputStyle();
      FlushedInputVariant = addVariant(tmp_3, VOID, FlushedInputVariant$lambda);
      var tmp_4 = get_InputStyle();
      UnstyledInputVariant = addVariant(tmp_4, VOID, UnstyledInputVariant$lambda);
      com_varabyte_kobweb_silk_components_forms_InputDefaults$stable = 0;
      com_varabyte_kobweb_silk_components_forms_InputVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputParams$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputGroupScope$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputSize$stable = 0;
    }
  }
  function get_SwitchStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchStyle;
  }
  var SwitchStyle;
  function get_SwitchTrackStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackStyle;
  }
  var SwitchTrackStyle;
  function get_SwitchInputVariant() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchInputVariant;
  }
  var SwitchInputVariant;
  function get_SwitchThumbStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchThumbStyle;
  }
  var SwitchThumbStyle;
  var com_varabyte_kobweb_silk_components_forms_SwitchVars$stable;
  var com_varabyte_kobweb_silk_components_forms_SwitchSize$stable;
  function SwitchVars() {
    SwitchVars_instance = this;
    var tmp = this;
    var tmp33_defaultFallback = get_px(9999);
    tmp.a38_1 = StyleVariable_0(tmp33_defaultFallback, 'silk');
    this.b38_1 = StyleVariable('silk');
    this.c38_1 = StyleVariable('silk');
    this.d38_1 = StyleVariable('silk');
    this.e38_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp34_defaultFallback = get_FocusOutlineColorVar().i2m();
    tmp_0.f38_1 = StyleVariable_0(tmp34_defaultFallback, 'silk');
    this.g38_1 = StyleVariable('silk');
    this.h38_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp35_defaultFallback = TransitionDurationVars_getInstance().j38().i2m();
    tmp_1.i38_1 = StyleVariable_1(tmp35_defaultFallback, 'silk');
  }
  protoOf(SwitchVars).e36 = function () {
    return this.a38_1.o2m(this, BorderRadius$factory_1());
  };
  protoOf(SwitchVars).k38 = function () {
    return this.b38_1.o2m(this, TrackWidth$factory());
  };
  protoOf(SwitchVars).l38 = function () {
    return this.c38_1.o2m(this, TrackHeight$factory());
  };
  protoOf(SwitchVars).m38 = function () {
    return this.d38_1.o2m(this, TrackPadding$factory());
  };
  protoOf(SwitchVars).n38 = function () {
    return this.e38_1.o2m(this, TrackBackgroundColor$factory());
  };
  protoOf(SwitchVars).o38 = function () {
    return this.f38_1.o2m(this, FocusColor$factory());
  };
  protoOf(SwitchVars).p38 = function () {
    return this.g38_1.o2m(this, ThumbOffset$factory());
  };
  protoOf(SwitchVars).q38 = function () {
    return this.h38_1.o2m(this, ThumbColor$factory());
  };
  protoOf(SwitchVars).p36 = function () {
    return this.i38_1.o2m(this, TransitionDuration$factory_0());
  };
  var SwitchVars_instance;
  function SwitchVars_getInstance() {
    if (SwitchVars_instance == null)
      new SwitchVars();
    return SwitchVars_instance;
  }
  function Companion_2() {
    Companion_instance_17 = this;
    this.r38_1 = new SwitchSize(get_cssRem(1.375), get_cssRem(0.75));
    this.s38_1 = new SwitchSize(get_cssRem(1.875), get_cssRem(1));
    this.t38_1 = new SwitchSize(get_cssRem(2.875), get_cssRem(1.5));
  }
  var Companion_instance_17;
  function Companion_getInstance_3() {
    if (Companion_instance_17 == null)
      new Companion_2();
    return Companion_instance_17;
  }
  function SwitchSize(width, height, padding) {
    Companion_getInstance_3();
    padding = padding === VOID ? get_cssRem(0.188) : padding;
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, SwitchVars_getInstance().k38(), width), SwitchVars_getInstance().l38(), height), SwitchVars_getInstance().m38(), padding), VOID, this);
  }
  function SwitchStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function SwitchTrackStyle$lambda($this$CssStyle) {
    _init_properties_Switch_kt__dwcqr0();
    $this$CssStyle.m2y(SwitchTrackStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).a2y(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp.r2x(SwitchTrackStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchTrackStyle$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return boxSizing(transition_0(backgroundColor(borderRadius(padding(minHeight(height(minWidth(width(Companion_instance, SwitchVars_getInstance().k38().i2m()), SwitchVars_getInstance().k38().i2m()), SwitchVars_getInstance().l38().i2m()), SwitchVars_getInstance().l38().i2m()), SwitchVars_getInstance().m38().i2m()), SwitchVars_getInstance().e36().i2m()), SwitchVars_getInstance().n38().i2m()), [Companion_instance_2.z2m('background-color', SwitchVars_getInstance().p36().i2m())]), Companion_instance_11.s2j());
  }
  function SwitchTrackStyle$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return cursor(Companion_instance, Companion_instance_1.y2j());
  }
  function SwitchInputVariant$lambda($this$addVariant) {
    _init_properties_Switch_kt__dwcqr0();
    $this$addVariant.m2y(SwitchInputVariant$lambda$lambda);
    $this$addVariant.c2z(':focus-visible + *', SwitchInputVariant$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchInputVariant$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return get_HiddenInputModifier();
  }
  function SwitchInputVariant$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return boxShadow(Companion_instance, VOID, VOID, VOID, get_cssRem(0.1875), SwitchVars_getInstance().o38().i2m());
  }
  function SwitchThumbStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    return transition_0(translateX(backgroundColor(borderRadius(size(Companion_instance, SwitchVars_getInstance().l38().i2m()), SwitchVars_getInstance().e36().i2m()), SwitchVars_getInstance().q38().i2m()), SwitchVars_getInstance().p38().i2m()), [Companion_instance_2.z2m('translate', SwitchVars_getInstance().p36().i2m())]);
  }
  function BorderRadius$factory_1() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.e36();
    }, null);
  }
  function TrackWidth$factory() {
    return getPropertyCallableRef('TrackWidth', 1, KProperty1, function (receiver) {
      return receiver.k38();
    }, null);
  }
  function TrackHeight$factory() {
    return getPropertyCallableRef('TrackHeight', 1, KProperty1, function (receiver) {
      return receiver.l38();
    }, null);
  }
  function TrackPadding$factory() {
    return getPropertyCallableRef('TrackPadding', 1, KProperty1, function (receiver) {
      return receiver.m38();
    }, null);
  }
  function TrackBackgroundColor$factory() {
    return getPropertyCallableRef('TrackBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.n38();
    }, null);
  }
  function FocusColor$factory() {
    return getPropertyCallableRef('FocusColor', 1, KProperty1, function (receiver) {
      return receiver.o38();
    }, null);
  }
  function ThumbOffset$factory() {
    return getPropertyCallableRef('ThumbOffset', 1, KProperty1, function (receiver) {
      return receiver.p38();
    }, null);
  }
  function ThumbColor$factory() {
    return getPropertyCallableRef('ThumbColor', 1, KProperty1, function (receiver) {
      return receiver.q38();
    }, null);
  }
  function TransitionDuration$factory_0() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.p36();
    }, null);
  }
  var properties_initialized_Switch_kt_7kkg8m;
  function _init_properties_Switch_kt__dwcqr0() {
    if (!properties_initialized_Switch_kt_7kkg8m) {
      properties_initialized_Switch_kt_7kkg8m = true;
      var tmp = Companion_instance_5;
      SwitchStyle = base(tmp, VOID, SwitchStyle$lambda);
      var tmp_0 = ariaHidden(tabIndex(Companion_instance, -1));
      SwitchTrackStyle = CssStyle(tmp_0, SwitchTrackStyle$lambda);
      var tmp_1 = get_InputStyle();
      SwitchInputVariant = addVariant(tmp_1, VOID, SwitchInputVariant$lambda);
      var tmp_2 = Companion_instance_5;
      SwitchThumbStyle = base(tmp_2, VOID, SwitchThumbStyle$lambda);
      com_varabyte_kobweb_silk_components_forms_SwitchVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_SwitchSize$stable = 0;
    }
  }
  function get_CanvasStyle() {
    _init_properties_Canvas_kt__g1lz20();
    return CanvasStyle;
  }
  var CanvasStyle;
  var com_varabyte_kobweb_silk_components_graphics_RenderScope$stable;
  function CanvasStyle$lambda($this$CssStyle) {
    _init_properties_Canvas_kt__g1lz20();
    return Unit_instance;
  }
  var properties_initialized_Canvas_kt_i28dei;
  function _init_properties_Canvas_kt__g1lz20() {
    if (!properties_initialized_Canvas_kt_i28dei) {
      properties_initialized_Canvas_kt_i28dei = true;
      CanvasStyle = CssStyle(VOID, CanvasStyle$lambda);
      com_varabyte_kobweb_silk_components_graphics_RenderScope$stable = 0;
    }
  }
  var com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Fill$stable;
  var com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Stroke$stable;
  function get_HorizontalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return HorizontalDividerStyle;
  }
  var HorizontalDividerStyle;
  function get_VerticalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return VerticalDividerStyle;
  }
  var VerticalDividerStyle;
  var com_varabyte_kobweb_silk_components_layout_DividerVars$stable;
  function DividerVars() {
    DividerVars_instance = this;
    var tmp = this;
    var tmp43_defaultFallback = get_BorderColorVar().i2m();
    tmp.u38_1 = StyleVariable_0(tmp43_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp44_defaultFallback = get_percent(90);
    tmp_0.v38_1 = StyleVariable_0(tmp44_defaultFallback, 'silk');
  }
  protoOf(DividerVars).f34 = function () {
    return this.u38_1.o2m(this, Color$factory_1());
  };
  protoOf(DividerVars).w38 = function () {
    return this.v38_1.o2m(this, Length$factory());
  };
  var DividerVars_instance;
  function DividerVars_getInstance() {
    if (DividerVars_instance == null)
      new DividerVars();
    return DividerVars_instance;
  }
  function HorizontalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return width(borderTop(tmp, tmp_0, 'solid', DividerVars_getInstance().f34().i2m()), DividerVars_getInstance().w38().i2m());
  }
  function VerticalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return height(borderLeft(tmp, tmp_0, 'solid', DividerVars_getInstance().f34().i2m()), DividerVars_getInstance().w38().i2m());
  }
  function Color$factory_1() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.f34();
    }, null);
  }
  function Length$factory() {
    return getPropertyCallableRef('Length', 1, KProperty1, function (receiver) {
      return receiver.w38();
    }, null);
  }
  var properties_initialized_Divider_kt_k1kxcn;
  function _init_properties_Divider_kt__8b5dnr() {
    if (!properties_initialized_Divider_kt_k1kxcn) {
      properties_initialized_Divider_kt_k1kxcn = true;
      var tmp = Companion_instance_5;
      HorizontalDividerStyle = base(tmp, VOID, HorizontalDividerStyle$lambda);
      var tmp_0 = Companion_instance_5;
      VerticalDividerStyle = base(tmp_0, VOID, VerticalDividerStyle$lambda);
      com_varabyte_kobweb_silk_components_layout_DividerVars$stable = 8;
    }
  }
  function get_columnVariables() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return columnVariables;
  }
  var columnVariables;
  function get_SimpleGridStyle() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return SimpleGridStyle;
  }
  var SimpleGridStyle;
  function numColumns(base, sm, md, lg, xl) {
    sm = sm === VOID ? base : sm;
    md = md === VOID ? sm : md;
    lg = lg === VOID ? md : lg;
    xl = xl === VOID ? lg : xl;
    _init_properties_SimpleGrid_kt__tvipdk();
    return new ResponsiveValues(base, sm, md, lg, xl);
  }
  function SimpleGrid(numColumns, modifier, variant, ref, content, $composer, $changed, $default) {
    _init_properties_SimpleGrid_kt__tvipdk();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(1950532178);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.s10(numColumns) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.s10(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.s10(ref_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.u19(content) ? 16384 : 8192);
    if (!(($default & 2) === 2) || (!(($dirty & 46811) === 9362) || !$composer_0.u18())) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      var tmp = toAttrs(setVariable_0(setVariable_0(setVariable_0(setVariable_0(setVariable_0(toModifier(get_SimpleGridStyle(), [variant_0._v], $composer_0, 6), getValue(get_columnVariables(), Breakpoint_ZERO_getInstance()), numColumns.d30_1), getValue(get_columnVariables(), Breakpoint_SM_getInstance()), numColumns.e30_1), getValue(get_columnVariables(), Breakpoint_MD_getInstance()), numColumns.f30_1), getValue(get_columnVariables(), Breakpoint_LG_getInstance()), numColumns.g30_1), getValue(get_columnVariables(), Breakpoint_XL_getInstance()), numColumns.h30_1).q2r(modifier_0._v));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGrid.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 656877393, true, SimpleGrid$lambda(ref_0, content));
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
        // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGrid.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.k1a(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.a19();
      Div(tmp, tmp0, $composer_0, 48, 0);
    } else {
      $composer_0.l13();
    }
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(SimpleGrid$lambda_0(numColumns, modifier_0, variant_0, ref_0, content, $changed, $default));
    }
  }
  function SimpleGridStyle$lambda($this$CssStyle) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$CssStyle.m2y(SimpleGridStyle$lambda$lambda);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = get_columnVariables().c2().j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridStyle.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var breakpoint = element.v1();
      // Inline function 'kotlin.collections.component2' call
      var variable = element.w1();
      $this$CssStyle.d2z(breakpoint, SimpleGridStyle$lambda$lambda_0(variable));
    }
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda() {
    _init_properties_SimpleGrid_kt__tvipdk();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'grid');
  }
  function SimpleGridStyle$lambda$lambda$lambda$lambda($this$repeat) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$repeat.p2k(get_fr(1));
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda$lambda($variable) {
    return function ($this$gridTemplateColumns) {
      var tmp = $variable.i2m();
      $this$gridTemplateColumns.l2k(tmp, SimpleGridStyle$lambda$lambda$lambda$lambda);
      return Unit_instance;
    };
  }
  function SimpleGridStyle$lambda$lambda_0($variable) {
    return function () {
      var tmp = Companion_instance;
      return gridTemplateColumns(tmp, SimpleGridStyle$lambda$lambda$lambda($variable));
    };
  }
  function SimpleGrid$lambda($ref, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$Div, $ref._v, $composer_0, 72);
      $content($composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function SimpleGrid$lambda_0($numColumns, $modifier, $variant, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      SimpleGrid($numColumns, $modifier._v, $variant._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_SimpleGrid_kt_fum19i;
  function _init_properties_SimpleGrid_kt__tvipdk() {
    if (!properties_initialized_SimpleGrid_kt_fum19i) {
      properties_initialized_SimpleGrid_kt_fum19i = true;
      // Inline function 'kotlin.collections.associateWith' call
      var this_0 = get_entries();
      var result = LinkedHashMap_init_$Create$(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
      // Inline function 'kotlin.collections.associateWithTo' call
      var tmp0_iterator = this_0.j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        // Inline function 'com.varabyte.kobweb.silk.components.layout.columnVariables.<anonymous>' call
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = element.g2_1.toLowerCase();
        var tmp$ret$2 = new NumberValue('simple-grid-col-count-' + tmp$ret$1, VOID, 'silk');
        result.x4(element, tmp$ret$2);
      }
      columnVariables = result;
      SimpleGridStyle = CssStyle(VOID, SimpleGridStyle$lambda);
    }
  }
  function get_SurfaceStyle() {
    _init_properties_Surface_kt__8o7unv();
    return SurfaceStyle;
  }
  var SurfaceStyle;
  var com_varabyte_kobweb_silk_components_layout_SurfaceVars$stable;
  function SurfaceVars() {
    SurfaceVars_instance = this;
    var tmp = this;
    var tmp45_defaultFallback = get_BackgroundColorVar().i2m();
    tmp.x38_1 = StyleVariable_0(tmp45_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp46_defaultFallback = get_ColorVar().i2m();
    tmp_0.y38_1 = StyleVariable_0(tmp46_defaultFallback, 'silk');
  }
  protoOf(SurfaceVars).h34 = function () {
    return this.x38_1.o2m(this, BackgroundColor$factory_0());
  };
  protoOf(SurfaceVars).f34 = function () {
    return this.y38_1.o2m(this, Color$factory_2());
  };
  var SurfaceVars_instance;
  function SurfaceVars_getInstance() {
    if (SurfaceVars_instance == null)
      new SurfaceVars();
    return SurfaceVars_instance;
  }
  function Surface(modifier, variant, colorModeOverride, contentAlignment, ref, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var colorModeOverride_0 = {_v: colorModeOverride};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-2142125922);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.s10(variant_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.s10(colorModeOverride_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 1024;
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.s10(ref_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.u19(content) ? 131072 : 65536);
    if (!(($default & 9) === 9) || (!(($dirty & 374491) === 74898) || !$composer_0.u18())) {
      $composer_0.b19();
      if (($changed & 1) === 0 || $composer_0.f19()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 4) === 0)) {
          colorModeOverride_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          contentAlignment_0._v = TopStart_instance;
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.l13();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.c19();
      $composer_0.z18(-1737049201);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.e1a();
      var tmp;
      if (false || it === Companion_getInstance().r13_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
        var value = mutableStateOf(null);
        this_0.k1a(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.a19();
      var surfaceElement$delegate = tmp0_group;
      var tmp_1 = toModifier(get_SurfaceStyle(), [variant_0._v], $composer_0, 6).q2r(modifier_0._v);
      var tmp_2 = contentAlignment_0._v;
      var tmp_3 = refScope(Surface$lambda_1(ref_0, surfaceElement$delegate));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, 1615126744, true, Surface$lambda_2(colorModeOverride_0, content, surfaceElement$delegate));
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
      var tmp_5;
      if (invalid || it_0 === Companion_getInstance().r13_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.k1a(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_1.a19();
      Box(tmp_1, tmp_2, tmp_3, tmp0, $composer_0, 3656, 0);
    } else {
      $composer_0.l13();
    }
    var tmp1_safe_receiver = $composer_0.t1a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.t1f(Surface$lambda_3(modifier_0, variant_0, colorModeOverride_0, contentAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function Surface$lambda($surfaceElement$delegate) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $surfaceElement$delegate.w1();
  }
  function Surface$lambda_0($surfaceElement$delegate, _set____db54di) {
    _init_properties_Surface_kt__8o7unv();
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $surfaceElement$delegate.mr(_set____db54di);
    return Unit_instance;
  }
  function SurfaceStyle$lambda($this$CssStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$CssStyle.m2y(SurfaceStyle$lambda$lambda);
    return Unit_instance;
  }
  function SurfaceStyle$lambda$lambda() {
    _init_properties_Surface_kt__8o7unv();
    return color(backgroundColor(Companion_instance, SurfaceVars_getInstance().h34().i2m()), SurfaceVars_getInstance().f34().i2m());
  }
  function Surface$lambda$lambda($surfaceElement$delegate) {
    return function (it) {
      Surface$lambda_0($surfaceElement$delegate, it);
      return Unit_instance;
    };
  }
  function Surface$lambda_1($ref, $surfaceElement$delegate) {
    return function ($this$refScope) {
      $this$refScope.s2n($ref._v);
      $this$refScope.r2n([], Surface$lambda$lambda($surfaceElement$delegate));
      return Unit_instance;
    };
  }
  function Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation) {
    this.h39_1 = $surfaceElement;
    this.i39_1 = $currColorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$lambda$lambda$slambda).j1h = function ($this$LaunchedEffect, $completion) {
    var tmp = this.k1h($this$LaunchedEffect, $completion);
    tmp.w8_1 = Unit_instance;
    tmp.x8_1 = null;
    return tmp.c9();
  };
  protoOf(Surface$lambda$lambda$slambda).z9 = function (p1, $completion) {
    return this.j1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$lambda$lambda$slambda).c9 = function () {
    var suspendResult = this.w8_1;
    $sm: do
      try {
        var tmp = this.u8_1;
        if (tmp === 0) {
          this.v8_1 = 1;
          setSilkWidgetVariables(this.h39_1, this.i39_1);
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
  protoOf(Surface$lambda$lambda$slambda).k1h = function ($this$LaunchedEffect, completion) {
    var i = new Surface$lambda$lambda$slambda(this.h39_1, this.i39_1, completion);
    i.j39_1 = $this$LaunchedEffect;
    return i;
  };
  function Surface$lambda$lambda$slambda_0($surfaceElement, $currColorMode, resultContinuation) {
    var i = new Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.j1h($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$lambda$lambda_0($content, $this_Box, $surfaceElement) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.u18()) {
        var currColorMode = Companion_instance_13.i2z($composer_0, 8);
        LaunchedEffect(currColorMode, Surface$lambda$lambda$slambda_0($surfaceElement, currColorMode, null), $composer_0, 64);
        tmp = $content($this_Box, $composer_0, 0);
      } else {
        $composer_0.l13();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.s18(p0, p1);
    };
  }
  function Surface$lambda_2($colorModeOverride, $content, $surfaceElement$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.s10($this$Box) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) || !$composer_0.u18()) {
        if (!($colorModeOverride._v == null)) {
          $composer_0.z18(-708350689);
          var tmp47_safe_receiver = Surface$lambda($surfaceElement$delegate);
          var tmp_1;
          if (tmp47_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp_2 = $colorModeOverride._v.l31();
            // Inline function 'kotlin.run' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_3 = $composer_0;
            var dispatchReceiver = composableLambda(tmp_3, -346828591, true, Surface$lambda$lambda_0($content, $this$Box, tmp47_safe_receiver));
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
              // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
              $composer_1.k1a(value);
              tmp_4 = value;
            } else {
              tmp_4 = it;
            }
            var tmp_5 = tmp_4;
            var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
            $composer_1.a19();
            CompositionLocalProvider(tmp_2, tmp0, $composer_0, 48);
            tmp_1 = Unit_instance;
          }
          $composer_0.a19();
        } else {
          $composer_0.z18(-707941055);
          $content($this$Box, $composer_0, 14 & $dirty);
          $composer_0.a19();
        }
        tmp_0 = Unit_instance;
      } else {
        $composer_0.l13();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.m25(p0, p1, p2);
    };
  }
  function Surface$lambda_3($modifier, $variant, $colorModeOverride, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface($modifier._v, $variant._v, $colorModeOverride._v, $contentAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function BackgroundColor$factory_0() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.h34();
    }, null);
  }
  function Color$factory_2() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.f34();
    }, null);
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      SurfaceStyle = CssStyle(VOID, SurfaceStyle$lambda);
      com_varabyte_kobweb_silk_components_layout_SurfaceVars$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_components_overlay_KeepPopupOpenStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_ManualKeepPopupOpenStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_OpenClosePopupStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_ManualOpenClosePopupStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_TimedOpenClosePopupStrategy$stable;
  function get_OverlayStyle() {
    _init_properties_Overlay_kt__p5agwu();
    return OverlayStyle;
  }
  var OverlayStyle;
  var com_varabyte_kobweb_silk_components_overlay_OverlayVars$stable;
  function OverlayVars() {
    OverlayVars_instance = this;
    this.k39_1 = StyleVariable('silk');
  }
  protoOf(OverlayVars).h34 = function () {
    return this.k39_1.o2m(this, BackgroundColor$factory_1());
  };
  var OverlayVars_instance;
  function OverlayVars_getInstance() {
    if (OverlayVars_instance == null)
      new OverlayVars();
    return OverlayVars_instance;
  }
  function OverlayStyle$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_instance, OverlayVars_getInstance().h34().i2m());
  }
  function BackgroundColor$factory_1() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.h34();
    }, null);
  }
  var properties_initialized_Overlay_kt_mvmds0;
  function _init_properties_Overlay_kt__p5agwu() {
    if (!properties_initialized_Overlay_kt_mvmds0) {
      properties_initialized_Overlay_kt_mvmds0 = true;
      var tmp = Companion_instance_5;
      OverlayStyle = base(tmp, VOID, OverlayStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_OverlayVars$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Uninitialized$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_FoundElements$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Calculating$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Shown$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Hiding$stable;
  function get_PopupStyle() {
    _init_properties_Popup_kt__lluomy();
    return PopupStyle;
  }
  var PopupStyle;
  var com_varabyte_kobweb_silk_components_overlay_PopupVars$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupScope$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_Position$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_PositionAndPlacement$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy$stable;
  function PopupVars() {
    PopupVars_instance = this;
    var tmp = this;
    var tmp55_defaultFallback = TransitionDurationVars_getInstance().j38().i2m();
    tmp.l39_1 = StyleVariable_1(tmp55_defaultFallback, 'silk');
  }
  protoOf(PopupVars).p36 = function () {
    return this.l39_1.o2m(this, TransitionDuration$factory_1());
  };
  var PopupVars_instance;
  function PopupVars_getInstance() {
    if (PopupVars_instance == null)
      new PopupVars();
    return PopupVars_instance;
  }
  function PopupStyle$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition_0(Companion_instance, [Companion_instance_2.z2m('opacity', PopupVars_getInstance().p36().i2m())]);
  }
  function TransitionDuration$factory_1() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.p36();
    }, null);
  }
  var properties_initialized_Popup_kt_wwy6qs;
  function _init_properties_Popup_kt__lluomy() {
    if (!properties_initialized_Popup_kt_wwy6qs) {
      properties_initialized_Popup_kt_wwy6qs = true;
      var tmp = Companion_instance_5;
      PopupStyle = base(tmp, VOID, PopupStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_PopupVars$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupScope$stable = 0;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_Position$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_PositionAndPlacement$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy$stable = 0;
    }
  }
  function get_TRIANGLE_WIDTH() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH;
  }
  var TRIANGLE_WIDTH;
  function get_TRIANGLE_WIDTH_2X() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH_2X;
  }
  var TRIANGLE_WIDTH_2X;
  function get_TooltipStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipStyle;
  }
  var TooltipStyle;
  function get_TooltipArrowStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipArrowStyle;
  }
  var TooltipArrowStyle;
  function get_TopLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopLeftTooltipArrowVariant;
  }
  var TopLeftTooltipArrowVariant;
  function get_TopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopTooltipArrowVariant;
  }
  var TopTooltipArrowVariant;
  function get_TopRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopRightTooltipArrowVariant;
  }
  var TopRightTooltipArrowVariant;
  function get_LeftTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTopTooltipArrowVariant;
  }
  var LeftTopTooltipArrowVariant;
  function get_LeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTooltipArrowVariant;
  }
  var LeftTooltipArrowVariant;
  function get_LeftBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftBottomTooltipArrowVariant;
  }
  var LeftBottomTooltipArrowVariant;
  function get_RightTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTopTooltipArrowVariant;
  }
  var RightTopTooltipArrowVariant;
  function get_RightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTooltipArrowVariant;
  }
  var RightTooltipArrowVariant;
  function get_RightBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightBottomTooltipArrowVariant;
  }
  var RightBottomTooltipArrowVariant;
  function get_BottomLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomLeftTooltipArrowVariant;
  }
  var BottomLeftTooltipArrowVariant;
  function get_BottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomTooltipArrowVariant;
  }
  var BottomTooltipArrowVariant;
  function get_BottomRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomRightTooltipArrowVariant;
  }
  var BottomRightTooltipArrowVariant;
  function get_TooltipTextContainerStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipTextContainerStyle;
  }
  var TooltipTextContainerStyle;
  var com_varabyte_kobweb_silk_components_overlay_TooltipVars$stable;
  function TooltipVars() {
    TooltipVars_instance = this;
    this.m39_1 = StyleVariable('silk');
    this.n39_1 = StyleVariable('silk');
  }
  protoOf(TooltipVars).h34 = function () {
    return this.m39_1.o2m(this, BackgroundColor$factory_2());
  };
  protoOf(TooltipVars).f34 = function () {
    return this.n39_1.o2m(this, Color$factory_3());
  };
  var TooltipVars_instance;
  function TooltipVars_getInstance() {
    if (TooltipVars_instance == null)
      new TooltipVars();
    return TooltipVars_instance;
  }
  function triangleDown(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleDown$lambda(color));
  }
  function triangleLeft(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleLeft$lambda(color));
  }
  function triangleRight(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleRight$lambda(color));
  }
  function triangleUp(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleUp$lambda(color));
  }
  function TooltipStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), TooltipVars_getInstance().h34().i2m()), TooltipVars_getInstance().f34().i2m()), get_px(6));
  }
  function TooltipArrowStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    var tmp_0 = position(tmp, tmp$ret$3);
    return border(tmp_0, TooltipArrowStyle$lambda$lambda);
  }
  function TooltipArrowStyle$lambda$lambda($this$border) {
    _init_properties_Tooltip_kt__palx2n();
    $this$border.u2t(get_TRIANGLE_WIDTH());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$border.t2t('solid');
    return Unit_instance;
  }
  function TopLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp58_left = get_TRIANGLE_WIDTH_2X();
    var tmp59_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin_1(Companion_instance, tmp59_top, VOID, VOID, tmp58_left), get_px(0)), TooltipVars_getInstance().h34().i2m());
  }
  function TopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp61_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp62_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin_1(Companion_instance, tmp62_top, VOID, VOID, tmp61_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().h34().i2m());
  }
  function TopRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp64_right = get_TRIANGLE_WIDTH_2X();
    var tmp65_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin_1(Companion_instance, tmp65_top, tmp64_right), get_px(0)), get_px(0)), TooltipVars_getInstance().h34().i2m());
  }
  function LeftTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_instance, get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().h34().i2m());
  }
  function LeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().h34().i2m());
  }
  function LeftBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin_1(Companion_instance, VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().h34().i2m());
  }
  function RightTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_instance, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().h34().i2m());
  }
  function RightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().h34().i2m());
  }
  function RightBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp67_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp68_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin_1(Companion_instance, VOID, tmp68_right, tmp67_bottom), get_px(0)), get_px(0)), TooltipVars_getInstance().h34().i2m());
  }
  function BottomLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp70_left = get_TRIANGLE_WIDTH_2X();
    var tmp71_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(Companion_instance, VOID, VOID, tmp71_bottom, tmp70_left), get_px(0)), get_px(0)), TooltipVars_getInstance().h34().i2m());
  }
  function BottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp73_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp74_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(Companion_instance, VOID, VOID, tmp74_bottom, tmp73_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().h34().i2m());
  }
  function BottomRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin_1(Companion_instance, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().h34().i2m());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding(Companion_instance, get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.b2e('border-color', 'transparent transparent ' + toString($color) + ' transparent');
      return Unit_instance;
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.b2e('border-color', 'transparent ' + toString($color) + ' transparent transparent');
      return Unit_instance;
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.b2e('border-color', 'transparent transparent transparent ' + toString($color));
      return Unit_instance;
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.b2e('border-color', toString($color) + ' transparent transparent transparent');
      return Unit_instance;
    };
  }
  function BackgroundColor$factory_2() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.h34();
    }, null);
  }
  function Color$factory_3() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.f34();
    }, null);
  }
  var properties_initialized_Tooltip_kt_68t07n;
  function _init_properties_Tooltip_kt__palx2n() {
    if (!properties_initialized_Tooltip_kt_68t07n) {
      properties_initialized_Tooltip_kt_68t07n = true;
      TRIANGLE_WIDTH = get_px(5);
      TRIANGLE_WIDTH_2X = get_px(9);
      var tmp = Companion_instance_5;
      TooltipStyle = base(tmp, VOID, TooltipStyle$lambda);
      var tmp_0 = Companion_instance_5;
      TooltipArrowStyle = base(tmp_0, VOID, TooltipArrowStyle$lambda);
      var tmp_1 = get_TooltipArrowStyle();
      TopLeftTooltipArrowVariant = addVariantBase(tmp_1, VOID, TopLeftTooltipArrowVariant$lambda);
      var tmp_2 = get_TooltipArrowStyle();
      TopTooltipArrowVariant = addVariantBase(tmp_2, VOID, TopTooltipArrowVariant$lambda);
      var tmp_3 = get_TooltipArrowStyle();
      TopRightTooltipArrowVariant = addVariantBase(tmp_3, VOID, TopRightTooltipArrowVariant$lambda);
      var tmp_4 = get_TooltipArrowStyle();
      LeftTopTooltipArrowVariant = addVariantBase(tmp_4, VOID, LeftTopTooltipArrowVariant$lambda);
      var tmp_5 = get_TooltipArrowStyle();
      LeftTooltipArrowVariant = addVariantBase(tmp_5, VOID, LeftTooltipArrowVariant$lambda);
      var tmp_6 = get_TooltipArrowStyle();
      LeftBottomTooltipArrowVariant = addVariantBase(tmp_6, VOID, LeftBottomTooltipArrowVariant$lambda);
      var tmp_7 = get_TooltipArrowStyle();
      RightTopTooltipArrowVariant = addVariantBase(tmp_7, VOID, RightTopTooltipArrowVariant$lambda);
      var tmp_8 = get_TooltipArrowStyle();
      RightTooltipArrowVariant = addVariantBase(tmp_8, VOID, RightTooltipArrowVariant$lambda);
      var tmp_9 = get_TooltipArrowStyle();
      RightBottomTooltipArrowVariant = addVariantBase(tmp_9, VOID, RightBottomTooltipArrowVariant$lambda);
      var tmp_10 = get_TooltipArrowStyle();
      BottomLeftTooltipArrowVariant = addVariantBase(tmp_10, VOID, BottomLeftTooltipArrowVariant$lambda);
      var tmp_11 = get_TooltipArrowStyle();
      BottomTooltipArrowVariant = addVariantBase(tmp_11, VOID, BottomTooltipArrowVariant$lambda);
      var tmp_12 = get_TooltipArrowStyle();
      BottomRightTooltipArrowVariant = addVariantBase(tmp_12, VOID, BottomRightTooltipArrowVariant$lambda);
      var tmp_13 = Companion_instance_5;
      TooltipTextContainerStyle = base(tmp_13, VOID, TooltipTextContainerStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_TooltipVars$stable = 8;
    }
  }
  function get_SilkColorsStyle() {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    return SilkColorsStyle;
  }
  var SilkColorsStyle;
  function initSilkWidgets(ctx) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var mutableTheme = ctx.f2v_1;
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.f2v_1.c2w_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>' call
    var focusOutline = Blue_getInstance().b32_1.y2s().x2s(VOID, VOID, VOID, 0.5);
    var placeholder = Gray_getInstance().l32_1;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color = Colors_instance.e2t();
    set_background(this_0.q32_1, Colors_instance.p2t());
    set_color(this_0.q32_1, color);
    set_border(this_0.q32_1, color.x2s(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.q32_1, focusOutline);
    set_overlay(this_0.q32_1, color.x2s(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.q32_1, placeholder);
    var buttonBase = Colors_instance.p2t().u2s(0.2);
    get_button_0(this_0.q32_1).u39(buttonBase, buttonBase.u2s(0.2), Colors_instance.g2t(), buttonBase.u2s(0.4));
    get_checkbox_0(this_0.q32_1).a3a(Blue_getInstance().b32_1, Blue_getInstance().c32_1, Colors_instance.p2t());
    var inputFilled = Gray_getInstance().i32_1;
    var tmp76_$this = get_input_0(this_0.q32_1);
    var tmp77_filledFocus = Colors_instance.d2t();
    var tmp78_hoveredBorder = Gray_getInstance().l32_1;
    var tmp79_invalidBorder = Red_getInstance().v31_1;
    var tmp80_filledHover = inputFilled.u2s(0.1);
    tmp76_$this.i3a(tmp78_hoveredBorder, tmp79_invalidBorder, inputFilled, tmp80_filledHover, tmp77_filledFocus);
    var tmp81_$this = get_switch_0(this_0.q32_1);
    var tmp82_thumb = Colors_instance.p2t();
    var tmp83_backgroundOn = Colors_instance.k2t();
    var tmp84_backgroundOff = Colors_instance.l2t();
    tmp81_$this.a3a(tmp83_backgroundOn, tmp84_backgroundOff, tmp82_thumb);
    get_tab_0(this_0.q32_1).y3a(Colors_instance.e2t(), Colors_instance.p2t(), Colors_instance.g2t(), VOID, VOID, Colors_instance.l2t(), Colors_instance.q2t(), Colors_instance.p2t());
    get_tooltip_0(this_0.q32_1).d3b(get_color_0(this_0.q32_1), get_background_0(this_0.q32_1));
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color_0 = Colors_instance.p2t();
    set_background(this_0.r32_1, Colors_instance.e2t());
    set_color(this_0.r32_1, color_0);
    set_border(this_0.r32_1, color_0.x2s(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.r32_1, focusOutline);
    set_overlay(this_0.r32_1, color_0.x2s(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.r32_1, placeholder);
    var buttonBase_0 = lightened(Colors_instance.e2t(), 0.2);
    get_button_0(this_0.r32_1).u39(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_instance.m2t(), lightened(buttonBase_0, 0.4));
    get_checkbox_0(this_0.r32_1).a3a(Blue_getInstance().y31_1, Blue_getInstance().z31_1, Colors_instance.e2t());
    var inputFilled_0 = Gray_getInstance().p32_1;
    var tmp85_$this = get_input_0(this_0.r32_1);
    var tmp86_filledFocus = Colors_instance.d2t();
    var tmp87_hoveredBorder = Gray_getInstance().m32_1;
    var tmp88_invalidBorder = Red_getInstance().p31_1;
    var tmp89_filledHover = lightened(inputFilled_0, 0.1);
    tmp85_$this.i3a(tmp87_hoveredBorder, tmp88_invalidBorder, inputFilled_0, tmp89_filledHover, tmp86_filledFocus);
    var tmp90_$this = get_switch_0(this_0.r32_1);
    var tmp91_thumb = Colors_instance.p2t();
    var tmp92_backgroundOn = Colors_instance.m2t();
    var tmp93_backgroundOff = Colors_instance.i2t();
    tmp90_$this.a3a(tmp92_backgroundOn, tmp93_backgroundOff, tmp91_thumb);
    get_tab_0(this_0.r32_1).y3a(Colors_instance.p2t(), Colors_instance.e2t(), Colors_instance.m2t(), VOID, VOID, Colors_instance.j2t(), Colors_instance.i2t(), Colors_instance.e2t());
    get_tooltip_0(this_0.r32_1).d3b(get_color_0(this_0.r32_1), get_background_0(this_0.r32_1));
    mutableTheme.f2w('silk-colors', get_SilkColorsStyle());
    mutableTheme.e2w('silk-input', get_InputStyle());
    mutableTheme.v30('-outlined', get_OutlinedInputVariant());
    mutableTheme.v30('-filled', get_FilledInputVariant());
    mutableTheme.v30('-flushed', get_FlushedInputVariant());
    mutableTheme.v30('-unstyled', get_UnstyledInputVariant());
    mutableTheme.e2w('silk-input-group', get_InputGroupStyle());
    mutableTheme.f2w('silk-disabled', get_DisabledStyle());
    mutableTheme.f2w('silk-smooth-color', get_SmoothColorStyle());
    mutableTheme.e2w('silk-button', get_ButtonStyle());
    mutableTheme.e2w('silk-canvas', get_CanvasStyle());
    mutableTheme.e2w('silk-checkbox', get_CheckboxStyle());
    mutableTheme.v30('-checkbox', get_CheckboxInputVariant());
    mutableTheme.e2w('silk-checkbox-icon-container', get_CheckboxIconContainerStyle());
    mutableTheme.e2w('silk-checkbox-icon', get_CheckboxIconStyle());
    mutableTheme.v30('-checked', get_CheckedCheckboxIconContainerVariant());
    mutableTheme.v30('-unchecked', get_UncheckedCheckboxIconContainerVariant());
    mutableTheme.e2w('silk-overlay', get_OverlayStyle());
    mutableTheme.e2w('silk-popup', get_PopupStyle());
    mutableTheme.e2w('silk-simple-grid', get_SimpleGridStyle());
    mutableTheme.e2w('silk-surface', get_SurfaceStyle());
    mutableTheme.e2w('silk-horizontal-divider', get_HorizontalDividerStyle());
    mutableTheme.e2w('silk-vertical-divider', get_VerticalDividerStyle());
    mutableTheme.e2w('silk-switch', get_SwitchStyle());
    mutableTheme.e2w('silk-switch-track', get_SwitchTrackStyle());
    mutableTheme.e2w('silk-switch-thumb', get_SwitchThumbStyle());
    mutableTheme.v30('-switch', get_SwitchInputVariant());
    mutableTheme.e2w('silk-tabs', get_TabsStyle());
    mutableTheme.e2w('silk-tabs-tab-row', get_TabsTabRowStyle());
    mutableTheme.e2w('silk-tabs-tab', get_TabsTabStyle());
    mutableTheme.e2w('silk-tabs-panel', get_TabsPanelStyle());
    mutableTheme.e2w('silk-tooltip-arrow', get_TooltipArrowStyle());
    mutableTheme.v30('-top-left', get_TopLeftTooltipArrowVariant());
    mutableTheme.v30('-top', get_TopTooltipArrowVariant());
    mutableTheme.v30('-top-right', get_TopRightTooltipArrowVariant());
    mutableTheme.v30('-left-top', get_LeftTopTooltipArrowVariant());
    mutableTheme.v30('-left', get_LeftTooltipArrowVariant());
    mutableTheme.v30('-left-bottom', get_LeftBottomTooltipArrowVariant());
    mutableTheme.v30('-right-top', get_RightTopTooltipArrowVariant());
    mutableTheme.v30('-right', get_RightTooltipArrowVariant());
    mutableTheme.v30('-right-bottom', get_RightBottomTooltipArrowVariant());
    mutableTheme.v30('-bottom-left', get_BottomLeftTooltipArrowVariant());
    mutableTheme.v30('-bottom', get_BottomTooltipArrowVariant());
    mutableTheme.v30('-bottom-right', get_BottomRightTooltipArrowVariant());
    mutableTheme.e2w('silk-tooltip', get_TooltipStyle());
    mutableTheme.e2w('silk-tooltip-text', get_TooltipTextContainerStyle());
    mutableTheme.w30('silk-checkbox-enabled', get_CheckboxEnabledAnim());
    mutableTheme.n30('silk-button-size_xs', Companion_getInstance_0().d35_1);
    mutableTheme.n30('silk-button-size_sm', Companion_getInstance_0().e35_1);
    mutableTheme.n30('silk-button-size_md', Companion_getInstance_0().f35_1);
    mutableTheme.n30('silk-button-size_lg', Companion_getInstance_0().g35_1);
    mutableTheme.n30('silk-checkbox-size_sm', Companion_getInstance_1().q36_1);
    mutableTheme.n30('silk-checkbox-size_md', Companion_getInstance_1().r36_1);
    mutableTheme.n30('silk-checkbox-size_lg', Companion_getInstance_1().s36_1);
    mutableTheme.n30('silk-input-size_xs', Companion_getInstance_2().s37_1);
    mutableTheme.n30('silk-input-size_sm', Companion_getInstance_2().t37_1);
    mutableTheme.n30('silk-input-size_md', Companion_getInstance_2().u37_1);
    mutableTheme.n30('silk-input-size_lg', Companion_getInstance_2().v37_1);
    mutableTheme.n30('silk-switch-size_sm', Companion_getInstance_3().r38_1);
    mutableTheme.n30('silk-switch-size_md', Companion_getInstance_3().s38_1);
    mutableTheme.n30('silk-switch-size_lg', Companion_getInstance_3().t38_1);
  }
  function setSilkWidgetVariables(_this__u8e3s4, colorMode) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables.<anonymous>' call
    var silkColorsStyleName = get_name(get_SilkColorsStyle());
    removeClass(_this__u8e3s4, [suffixedWith(silkColorsStyleName, colorMode.l2z())]);
    addClass(_this__u8e3s4, [suffixedWith(silkColorsStyleName, colorMode)]);
  }
  function setSilkWidgetVariables_0(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(-938405995);
    $composer_0.z18(-436032111);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_0 = $composer_0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = this_0.e1a();
    var tmp;
    if (false || it === Companion_getInstance().r13_1) {
      // Inline function 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables.<anonymous>' call
      var tmp_0 = _this__u8e3s4.getElementById('root');
      var value = tmp_0 instanceof HTMLElement ? tmp_0 : THROW_CCE();
      this_0.k1a(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_1 = tmp;
    var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_0.a19();
    var root = tmp0_group;
    setSilkWidgetVariables_1(root, $composer_0, 8);
    var tmp1_safe_receiver = $composer_0.t1a();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.t1f(setSilkWidgetVariables$lambda(_this__u8e3s4, $changed));
    }
  }
  function setSilkWidgetVariables_1(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1a(1180012187);
    setSilkWidgetVariables(_this__u8e3s4, Companion_instance_13.i2z($composer_0, 8));
    var tmp0_safe_receiver = $composer_0.t1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t1f(setSilkWidgetVariables$lambda_0(_this__u8e3s4, $changed));
    }
  }
  function SilkColorsStyle$lambda($this$base) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var palette = toPalette($this$base.e2z_1);
    return setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(Companion_instance, get_BackgroundColorVar(), get_background(palette)), get_ColorVar(), get_color(palette)), get_BorderColorVar(), get_border(palette)), get_FocusOutlineColorVar(), get_focusOutline(palette)), get_PlaceholderColorVar(), get_placeholder_0(palette)), ButtonVars_getInstance().w34(), get_button(palette).e3b()), ButtonVars_getInstance().y34(), get_button(palette).i2f()), ButtonVars_getInstance().z34(), get_button(palette).f3b()), CheckboxVars_getInstance().n36(), get_checkbox(palette).g3b()), CheckboxVars_getInstance().o36(), get_checkbox(palette).i2f()), CheckboxVars_getInstance().m36(), get_checkbox(palette).h3b()), InputVars_getInstance().k37(), get_input(palette).i3b()), InputVars_getInstance().l37(), get_input(palette).j3b()), InputVars_getInstance().m37(), get_input(palette).k3b()), InputVars_getInstance().n37(), get_input(palette).l3b()), InputVars_getInstance().o37(), get_input(palette).m3b()), OverlayVars_getInstance().h34(), get_overlay(palette)), SwitchVars_getInstance().q38(), get_switch(palette).n3b()), TabVars_getInstance().f34(), get_tab(palette).h3b()), TabVars_getInstance().h34(), get_tab(palette).g3b()), TabVars_getInstance().i34(), get_tab(palette).o3b()), TabVars_getInstance().j34(), get_tab(palette).i2f()), TabVars_getInstance().k34(), get_tab(palette).f3b()), TooltipVars_getInstance().h34(), get_tooltip(palette).g3b()), TooltipVars_getInstance().f34(), get_tooltip(palette).h3b());
  }
  function setSilkWidgetVariables$lambda($this_setSilkWidgetVariables, $$changed) {
    return function ($composer, $force) {
      setSilkWidgetVariables_0($this_setSilkWidgetVariables, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function setSilkWidgetVariables$lambda_0($this_setSilkWidgetVariables, $$changed) {
    return function ($composer, $force) {
      setSilkWidgetVariables_1($this_setSilkWidgetVariables, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_InitSilkWidgets_kt_dse0va;
  function _init_properties_InitSilkWidgets_kt__62z9ag() {
    if (!properties_initialized_InitSilkWidgets_kt_dse0va) {
      properties_initialized_InitSilkWidgets_kt_dse0va = true;
      var tmp = Companion_instance_5;
      SilkColorsStyle = base_0(tmp, VOID, SilkColorsStyle$lambda);
    }
  }
  function get_DisabledStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return DisabledStyle;
  }
  var DisabledStyle;
  function get_SmoothColorTransitionDurationVar() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorTransitionDurationVar$delegate.o2m(null, SmoothColorTransitionDurationVar$factory());
  }
  var SmoothColorTransitionDurationVar$delegate;
  function get_SmoothColorStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorStyle;
  }
  var SmoothColorStyle;
  function DisabledStyle$lambda($composer, $changed) {
    _init_properties_CommonStyles_kt__a7wisz();
    var $composer_0 = $composer;
    $composer_0.z18(812442038);
    var tmp0 = tabIndex(ariaDisabled(Companion_instance), -1);
    $composer_0.a19();
    return tmp0;
  }
  function DisabledStyle$lambda_0($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return cursor(opacity(Companion_instance, 0.5), Companion_instance_1.z2j());
  }
  function SmoothColorStyle$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return transition_0(Companion_instance, [Companion_instance_2.z2m('background-color', get_SmoothColorTransitionDurationVar().i2m())]);
  }
  function SmoothColorTransitionDurationVar$factory() {
    return getPropertyCallableRef('SmoothColorTransitionDurationVar', 0, KProperty0, function () {
      return get_SmoothColorTransitionDurationVar();
    }, null);
  }
  var properties_initialized_CommonStyles_kt_zd2b1t;
  function _init_properties_CommonStyles_kt__a7wisz() {
    if (!properties_initialized_CommonStyles_kt_zd2b1t) {
      properties_initialized_CommonStyles_kt_zd2b1t = true;
      var tmp = Companion_instance_5;
      var tmp_0 = DisabledStyle$lambda;
      DisabledStyle = base_1(tmp, tmp_0, DisabledStyle$lambda_0);
      var tmp94_defaultFallback = TransitionDurationVars_getInstance().e2k().i2m();
      SmoothColorTransitionDurationVar$delegate = StyleVariable_1(tmp94_defaultFallback, 'silk');
      var tmp_1 = Companion_instance_5;
      SmoothColorStyle = base_0(tmp_1, VOID, SmoothColorStyle$lambda);
    }
  }
  var com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable;
  var com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable;
  function TransitionDurationVars() {
    TransitionDurationVars_instance = this;
    var tmp = this;
    var tmp95_defaultFallback = get_ms(0);
    tmp.x33_1 = StyleVariable_1(tmp95_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp96_defaultFallback = get_ms(50);
    tmp_0.y33_1 = StyleVariable_1(tmp96_defaultFallback, 'silk');
    var tmp_1 = this;
    var tmp97_defaultFallback = get_ms(100);
    tmp_1.z33_1 = StyleVariable_1(tmp97_defaultFallback, 'silk');
    var tmp_2 = this;
    var tmp98_defaultFallback = get_ms(150);
    tmp_2.a34_1 = StyleVariable_1(tmp98_defaultFallback, 'silk');
    var tmp_3 = this;
    var tmp99_defaultFallback = get_ms(200);
    tmp_3.b34_1 = StyleVariable_1(tmp99_defaultFallback, 'silk');
    var tmp_4 = this;
    var tmp100_defaultFallback = get_ms(300);
    tmp_4.c34_1 = StyleVariable_1(tmp100_defaultFallback, 'silk');
    var tmp_5 = this;
    var tmp101_defaultFallback = get_ms(400);
    tmp_5.d34_1 = StyleVariable_1(tmp101_defaultFallback, 'silk');
    var tmp_6 = this;
    var tmp102_defaultFallback = get_ms(500);
    tmp_6.e34_1 = StyleVariable_1(tmp102_defaultFallback, 'silk');
  }
  protoOf(TransitionDurationVars).d36 = function () {
    return this.z33_1.o2m(this, VeryFast$factory());
  };
  protoOf(TransitionDurationVars).j38 = function () {
    return this.a34_1.o2m(this, Fast$factory());
  };
  protoOf(TransitionDurationVars).e2k = function () {
    return this.b34_1.o2m(this, Normal$factory());
  };
  var TransitionDurationVars_instance;
  function TransitionDurationVars_getInstance() {
    if (TransitionDurationVars_instance == null)
      new TransitionDurationVars();
    return TransitionDurationVars_instance;
  }
  function VeryFast$factory() {
    return getPropertyCallableRef('VeryFast', 1, KProperty1, function (receiver) {
      return receiver.d36();
    }, null);
  }
  function Fast$factory() {
    return getPropertyCallableRef('Fast', 1, KProperty1, function (receiver) {
      return receiver.j38();
    }, null);
  }
  function Normal$factory() {
    return getPropertyCallableRef('Normal', 1, KProperty1, function (receiver) {
      return receiver.e2k();
    }, null);
  }
  function get_BackgroundColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BackgroundColorVar$delegate.o2m(null, BackgroundColorVar$factory());
  }
  var BackgroundColorVar$delegate;
  function get_ColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return ColorVar$delegate.o2m(null, ColorVar$factory());
  }
  var ColorVar$delegate;
  function get_BorderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BorderColorVar$delegate.o2m(null, BorderColorVar$factory());
  }
  var BorderColorVar$delegate;
  function get_FocusOutlineColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return FocusOutlineColorVar$delegate.o2m(null, FocusOutlineColorVar$factory());
  }
  var FocusOutlineColorVar$delegate;
  function get_PlaceholderOpacityVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderOpacityVar$delegate.o2m(null, PlaceholderOpacityVar$factory());
  }
  var PlaceholderOpacityVar$delegate;
  function get_PlaceholderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderColorVar$delegate.o2m(null, PlaceholderColorVar$factory());
  }
  var PlaceholderColorVar$delegate;
  function BackgroundColorVar$factory() {
    return getPropertyCallableRef('BackgroundColorVar', 0, KProperty0, function () {
      return get_BackgroundColorVar();
    }, null);
  }
  function ColorVar$factory() {
    return getPropertyCallableRef('ColorVar', 0, KProperty0, function () {
      return get_ColorVar();
    }, null);
  }
  function BorderColorVar$factory() {
    return getPropertyCallableRef('BorderColorVar', 0, KProperty0, function () {
      return get_BorderColorVar();
    }, null);
  }
  function FocusOutlineColorVar$factory() {
    return getPropertyCallableRef('FocusOutlineColorVar', 0, KProperty0, function () {
      return get_FocusOutlineColorVar();
    }, null);
  }
  function PlaceholderOpacityVar$factory() {
    return getPropertyCallableRef('PlaceholderOpacityVar', 0, KProperty0, function () {
      return get_PlaceholderOpacityVar();
    }, null);
  }
  function PlaceholderColorVar$factory() {
    return getPropertyCallableRef('PlaceholderColorVar', 0, KProperty0, function () {
      return get_PlaceholderColorVar();
    }, null);
  }
  var properties_initialized_ColorVars_kt_3y5hvl;
  function _init_properties_ColorVars_kt__w8x7ib() {
    if (!properties_initialized_ColorVars_kt_3y5hvl) {
      properties_initialized_ColorVars_kt_3y5hvl = true;
      BackgroundColorVar$delegate = StyleVariable('silk');
      ColorVar$delegate = StyleVariable('silk');
      BorderColorVar$delegate = StyleVariable('silk');
      FocusOutlineColorVar$delegate = StyleVariable('silk');
      PlaceholderOpacityVar$delegate = StyleVariable_2(1.0, 'silk');
      PlaceholderColorVar$delegate = StyleVariable('silk');
    }
  }
  var com_varabyte_kobweb_silk_style_vars_size_BorderRadiusVars$stable;
  var com_varabyte_kobweb_silk_style_vars_size_FontSizeVars$stable;
  function FontSizeVars() {
    FontSizeVars_instance = this;
    var tmp = this;
    var tmp107_defaultFallback = get_cssRem(0.75);
    tmp.h35_1 = StyleVariable_0(tmp107_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp108_defaultFallback = get_cssRem(0.875);
    tmp_0.i35_1 = StyleVariable_0(tmp108_defaultFallback, 'silk');
    var tmp_1 = this;
    var tmp109_defaultFallback = get_cssRem(1);
    tmp_1.j35_1 = StyleVariable_0(tmp109_defaultFallback, 'silk');
    var tmp_2 = this;
    var tmp110_defaultFallback = get_cssRem(1.125);
    tmp_2.k35_1 = StyleVariable_0(tmp110_defaultFallback, 'silk');
  }
  protoOf(FontSizeVars).l35 = function () {
    return this.h35_1.o2m(this, XS$factory());
  };
  protoOf(FontSizeVars).m35 = function () {
    return this.i35_1.o2m(this, SM$factory());
  };
  protoOf(FontSizeVars).n35 = function () {
    return this.j35_1.o2m(this, MD$factory());
  };
  protoOf(FontSizeVars).o35 = function () {
    return this.k35_1.o2m(this, LG$factory());
  };
  var FontSizeVars_instance;
  function FontSizeVars_getInstance() {
    if (FontSizeVars_instance == null)
      new FontSizeVars();
    return FontSizeVars_instance;
  }
  function BorderRadiusVars() {
    BorderRadiusVars_instance = this;
    var tmp = this;
    var tmp103_defaultFallback = get_cssRem(0.125);
    tmp.w37_1 = StyleVariable_0(tmp103_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp104_defaultFallback = get_cssRem(0.25);
    tmp_0.x37_1 = StyleVariable_0(tmp104_defaultFallback, 'silk');
    var tmp_1 = this;
    var tmp105_defaultFallback = get_cssRem(0.375);
    tmp_1.y37_1 = StyleVariable_0(tmp105_defaultFallback, 'silk');
    var tmp_2 = this;
    var tmp106_defaultFallback = get_cssRem(0.5);
    tmp_2.z37_1 = StyleVariable_0(tmp106_defaultFallback, 'silk');
  }
  protoOf(BorderRadiusVars).l35 = function () {
    return this.w37_1.o2m(this, XS$factory_0());
  };
  protoOf(BorderRadiusVars).m35 = function () {
    return this.x37_1.o2m(this, SM$factory_0());
  };
  protoOf(BorderRadiusVars).n35 = function () {
    return this.y37_1.o2m(this, MD$factory_0());
  };
  var BorderRadiusVars_instance;
  function BorderRadiusVars_getInstance() {
    if (BorderRadiusVars_instance == null)
      new BorderRadiusVars();
    return BorderRadiusVars_instance;
  }
  function XS$factory() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.l35();
    }, null);
  }
  function SM$factory() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.m35();
    }, null);
  }
  function MD$factory() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.n35();
    }, null);
  }
  function LG$factory() {
    return getPropertyCallableRef('LG', 1, KProperty1, function (receiver) {
      return receiver.o35();
    }, null);
  }
  function XS$factory_0() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.l35();
    }, null);
  }
  function SM$factory_0() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.m35();
    }, null);
  }
  function MD$factory_0() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.n35();
    }, null);
  }
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableButton$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCheckbox$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableInput$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableSwitch$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTab$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTooltip$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups$stable;
  function MutableButton(palette) {
    ColorGroup.call(this, palette, 'button');
    this.q39_1 = this.d33();
    this.r39_1 = this.d33();
    this.s39_1 = this.d33();
    this.t39_1 = this.d33();
  }
  protoOf(MutableButton).p3b = function (_set____db54di) {
    return this.q39_1.a33(this, default$factory(), _set____db54di);
  };
  protoOf(MutableButton).e3b = function () {
    return this.q39_1.o2m(this, default$factory_0());
  };
  protoOf(MutableButton).q3b = function (_set____db54di) {
    return this.r39_1.a33(this, hover$factory(), _set____db54di);
  };
  protoOf(MutableButton).i2f = function () {
    return this.r39_1.o2m(this, hover$factory_0());
  };
  protoOf(MutableButton).r3b = function (_set____db54di) {
    return this.s39_1.a33(this, focus$factory(), _set____db54di);
  };
  protoOf(MutableButton).s3b = function () {
    return this.s39_1.o2m(this, focus$factory_0());
  };
  protoOf(MutableButton).t3b = function (_set____db54di) {
    return this.t39_1.a33(this, pressed$factory(), _set____db54di);
  };
  protoOf(MutableButton).f3b = function () {
    return this.t39_1.o2m(this, pressed$factory_0());
  };
  protoOf(MutableButton).u39 = function (default_0, hover, focus, pressed) {
    this.p3b(default_0);
    this.q3b(hover);
    this.r3b(focus);
    this.t3b(pressed);
  };
  function MutableCheckbox(palette) {
    ColorGroup.call(this, palette, 'checkbox');
    this.x39_1 = this.d33();
    this.y39_1 = this.d33();
    this.z39_1 = this.d33();
  }
  protoOf(MutableCheckbox).u3b = function (_set____db54di) {
    return this.x39_1.a33(this, background$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).g3b = function () {
    return this.x39_1.o2m(this, background$factory_0());
  };
  protoOf(MutableCheckbox).q3b = function (_set____db54di) {
    return this.y39_1.a33(this, hover$factory_1(), _set____db54di);
  };
  protoOf(MutableCheckbox).i2f = function () {
    return this.y39_1.o2m(this, hover$factory_2());
  };
  protoOf(MutableCheckbox).v3b = function (_set____db54di) {
    return this.z39_1.a33(this, color$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).h3b = function () {
    return this.z39_1.o2m(this, color$factory_0());
  };
  protoOf(MutableCheckbox).a3a = function (background, hover, color) {
    this.u3b(background);
    this.q3b(hover);
    this.v3b(color);
  };
  function MutableInput(palette) {
    ColorGroup.call(this, palette, 'input');
    this.d3a_1 = this.d33();
    this.e3a_1 = this.d33();
    this.f3a_1 = this.d33();
    this.g3a_1 = this.d33();
    this.h3a_1 = this.d33();
  }
  protoOf(MutableInput).w3b = function (_set____db54di) {
    return this.d3a_1.a33(this, hoveredBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).i3b = function () {
    return this.d3a_1.o2m(this, hoveredBorder$factory_0());
  };
  protoOf(MutableInput).x3b = function (_set____db54di) {
    return this.e3a_1.a33(this, invalidBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).j3b = function () {
    return this.e3a_1.o2m(this, invalidBorder$factory_0());
  };
  protoOf(MutableInput).y3b = function (_set____db54di) {
    return this.f3a_1.a33(this, filled$factory(), _set____db54di);
  };
  protoOf(MutableInput).k3b = function () {
    return this.f3a_1.o2m(this, filled$factory_0());
  };
  protoOf(MutableInput).z3b = function (_set____db54di) {
    return this.g3a_1.a33(this, filledHover$factory(), _set____db54di);
  };
  protoOf(MutableInput).l3b = function () {
    return this.g3a_1.o2m(this, filledHover$factory_0());
  };
  protoOf(MutableInput).a3c = function (_set____db54di) {
    return this.h3a_1.a33(this, filledFocus$factory(), _set____db54di);
  };
  protoOf(MutableInput).m3b = function () {
    return this.h3a_1.o2m(this, filledFocus$factory_0());
  };
  protoOf(MutableInput).i3a = function (hoveredBorder, invalidBorder, filled, filledHover, filledFocus) {
    this.w3b(hoveredBorder);
    this.x3b(invalidBorder);
    this.y3b(filled);
    this.z3b(filledHover);
    this.a3c(filledFocus);
  };
  function MutableSwitch(palette) {
    ColorGroup.call(this, palette, 'switch');
    this.l3a_1 = this.d33();
    this.m3a_1 = this.d33();
    this.n3a_1 = this.d33();
  }
  protoOf(MutableSwitch).b3c = function (_set____db54di) {
    return this.l3a_1.a33(this, backgroundOn$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).c3c = function () {
    return this.l3a_1.o2m(this, backgroundOn$factory_0());
  };
  protoOf(MutableSwitch).d3c = function (_set____db54di) {
    return this.m3a_1.a33(this, backgroundOff$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).e3c = function () {
    return this.m3a_1.o2m(this, backgroundOff$factory_0());
  };
  protoOf(MutableSwitch).f3c = function (_set____db54di) {
    return this.n3a_1.a33(this, thumb$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).n3b = function () {
    return this.n3a_1.o2m(this, thumb$factory_0());
  };
  protoOf(MutableSwitch).a3a = function (backgroundOn, backgroundOff, thumb) {
    this.b3c(backgroundOn);
    this.d3c(backgroundOff);
    this.f3c(thumb);
  };
  function MutableTab(palette) {
    ColorGroup.call(this, palette, 'tab');
    this.q3a_1 = this.d33();
    this.r3a_1 = this.d33();
    this.s3a_1 = this.d33();
    this.t3a_1 = this.d33();
    this.u3a_1 = this.d33();
    this.v3a_1 = this.d33();
    this.w3a_1 = this.d33();
    this.x3a_1 = this.d33();
  }
  protoOf(MutableTab).v3b = function (_set____db54di) {
    return this.q3a_1.a33(this, color$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).h3b = function () {
    return this.q3a_1.o2m(this, color$factory_2());
  };
  protoOf(MutableTab).u3b = function (_set____db54di) {
    return this.r3a_1.a33(this, background$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).g3b = function () {
    return this.r3a_1.o2m(this, background$factory_2());
  };
  protoOf(MutableTab).g3c = function (_set____db54di) {
    return this.s3a_1.a33(this, selectedColor$factory(), _set____db54di);
  };
  protoOf(MutableTab).h3c = function () {
    return this.s3a_1.o2m(this, selectedColor$factory_0());
  };
  protoOf(MutableTab).i3c = function (_set____db54di) {
    return this.t3a_1.a33(this, selectedBackground$factory(), _set____db54di);
  };
  protoOf(MutableTab).j3c = function () {
    return this.t3a_1.o2m(this, selectedBackground$factory_0());
  };
  protoOf(MutableTab).k3c = function (_set____db54di) {
    return this.u3a_1.a33(this, selectedBorder$factory(), _set____db54di);
  };
  protoOf(MutableTab).l3c = function () {
    return this.u3a_1.o2m(this, selectedBorder$factory_0());
  };
  protoOf(MutableTab).q3b = function (_set____db54di) {
    return this.v3a_1.a33(this, hover$factory_3(), _set____db54di);
  };
  protoOf(MutableTab).i2f = function () {
    return this.v3a_1.o2m(this, hover$factory_4());
  };
  protoOf(MutableTab).t3b = function (_set____db54di) {
    return this.w3a_1.a33(this, pressed$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).f3b = function () {
    return this.w3a_1.o2m(this, pressed$factory_2());
  };
  protoOf(MutableTab).m3c = function (_set____db54di) {
    return this.x3a_1.a33(this, disabled$factory(), _set____db54di);
  };
  protoOf(MutableTab).o3b = function () {
    return this.x3a_1.o2m(this, disabled$factory_0());
  };
  protoOf(MutableTab).n3c = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled) {
    this.v3b(color);
    this.u3b(background);
    this.g3c(selectedColor);
    this.i3c(selectedBackground);
    this.k3c(selectedBorder);
    this.q3b(hover);
    this.t3b(pressed);
    this.m3c(disabled);
  };
  protoOf(MutableTab).y3a = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled, $super) {
    selectedBackground = selectedBackground === VOID ? background : selectedBackground;
    selectedBorder = selectedBorder === VOID ? selectedColor : selectedBorder;
    var tmp;
    if ($super === VOID) {
      this.n3c(color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
      tmp = Unit_instance;
    } else {
      tmp = $super.n3c.call(this, color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
    }
    return tmp;
  };
  function MutableTooltip(palette) {
    ColorGroup.call(this, palette, 'tooltip');
    this.b3b_1 = this.d33();
    this.c3b_1 = this.d33();
  }
  protoOf(MutableTooltip).u3b = function (_set____db54di) {
    return this.b3b_1.a33(this, background$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).g3b = function () {
    return this.b3b_1.o2m(this, background$factory_4());
  };
  protoOf(MutableTooltip).v3b = function (_set____db54di) {
    return this.c3b_1.a33(this, color$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).h3b = function () {
    return this.c3b_1.o2m(this, color$factory_4());
  };
  protoOf(MutableTooltip).d3b = function (background, color) {
    this.u3b(background);
    this.v3b(color);
  };
  function get_tooltip(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_tooltip_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_tab(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_tab_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_switch(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_switch_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_overlay(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w32('overlay');
  }
  function get_input(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_input_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_checkbox(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_checkbox_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_button(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_button_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_placeholder_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w32('placeholder');
  }
  function get_focusOutline(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w32('focusOutline');
  }
  function get_border(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w32('border');
  }
  function get_color(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w32('color');
  }
  function get_background(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w32('background');
  }
  function get_tooltip_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableTooltip(_this__u8e3s4);
  }
  function get_tab_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableTab(_this__u8e3s4);
  }
  function get_switch_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableSwitch(_this__u8e3s4);
  }
  function get_input_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableInput(_this__u8e3s4);
  }
  function get_checkbox_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableCheckbox(_this__u8e3s4);
  }
  function get_button_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableButton(_this__u8e3s4);
  }
  function set_background(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.e33('background', value);
  }
  function get_background_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w32('background');
  }
  function set_color(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.e33('color', value);
  }
  function get_color_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w32('color');
  }
  function set_border(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.e33('border', value);
  }
  function set_focusOutline(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.e33('focusOutline', value);
  }
  function set_overlay(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.e33('overlay', value);
  }
  function set_placeholder(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.e33('placeholder', value);
  }
  function default$factory() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.e3b();
    }, function (receiver, value) {
      return receiver.p3b(value);
    });
  }
  function default$factory_0() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.e3b();
    }, function (receiver, value) {
      return receiver.p3b(value);
    });
  }
  function hover$factory() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.i2f();
    }, function (receiver, value) {
      return receiver.q3b(value);
    });
  }
  function hover$factory_0() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.i2f();
    }, function (receiver, value) {
      return receiver.q3b(value);
    });
  }
  function focus$factory() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.s3b();
    }, function (receiver, value) {
      return receiver.r3b(value);
    });
  }
  function focus$factory_0() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.s3b();
    }, function (receiver, value) {
      return receiver.r3b(value);
    });
  }
  function pressed$factory() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.f3b();
    }, function (receiver, value) {
      return receiver.t3b(value);
    });
  }
  function pressed$factory_0() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.f3b();
    }, function (receiver, value) {
      return receiver.t3b(value);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.g3b();
    }, function (receiver, value) {
      return receiver.u3b(value);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.g3b();
    }, function (receiver, value) {
      return receiver.u3b(value);
    });
  }
  function hover$factory_1() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.i2f();
    }, function (receiver, value) {
      return receiver.q3b(value);
    });
  }
  function hover$factory_2() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.i2f();
    }, function (receiver, value) {
      return receiver.q3b(value);
    });
  }
  function color$factory() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.h3b();
    }, function (receiver, value) {
      return receiver.v3b(value);
    });
  }
  function color$factory_0() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.h3b();
    }, function (receiver, value) {
      return receiver.v3b(value);
    });
  }
  function hoveredBorder$factory() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.i3b();
    }, function (receiver, value) {
      return receiver.w3b(value);
    });
  }
  function hoveredBorder$factory_0() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.i3b();
    }, function (receiver, value) {
      return receiver.w3b(value);
    });
  }
  function invalidBorder$factory() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.j3b();
    }, function (receiver, value) {
      return receiver.x3b(value);
    });
  }
  function invalidBorder$factory_0() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.j3b();
    }, function (receiver, value) {
      return receiver.x3b(value);
    });
  }
  function filled$factory() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.k3b();
    }, function (receiver, value) {
      return receiver.y3b(value);
    });
  }
  function filled$factory_0() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.k3b();
    }, function (receiver, value) {
      return receiver.y3b(value);
    });
  }
  function filledHover$factory() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.l3b();
    }, function (receiver, value) {
      return receiver.z3b(value);
    });
  }
  function filledHover$factory_0() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.l3b();
    }, function (receiver, value) {
      return receiver.z3b(value);
    });
  }
  function filledFocus$factory() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.m3b();
    }, function (receiver, value) {
      return receiver.a3c(value);
    });
  }
  function filledFocus$factory_0() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.m3b();
    }, function (receiver, value) {
      return receiver.a3c(value);
    });
  }
  function backgroundOn$factory() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.c3c();
    }, function (receiver, value) {
      return receiver.b3c(value);
    });
  }
  function backgroundOn$factory_0() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.c3c();
    }, function (receiver, value) {
      return receiver.b3c(value);
    });
  }
  function backgroundOff$factory() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.e3c();
    }, function (receiver, value) {
      return receiver.d3c(value);
    });
  }
  function backgroundOff$factory_0() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.e3c();
    }, function (receiver, value) {
      return receiver.d3c(value);
    });
  }
  function thumb$factory() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.n3b();
    }, function (receiver, value) {
      return receiver.f3c(value);
    });
  }
  function thumb$factory_0() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.n3b();
    }, function (receiver, value) {
      return receiver.f3c(value);
    });
  }
  function color$factory_1() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.h3b();
    }, function (receiver, value) {
      return receiver.v3b(value);
    });
  }
  function color$factory_2() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.h3b();
    }, function (receiver, value) {
      return receiver.v3b(value);
    });
  }
  function background$factory_1() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.g3b();
    }, function (receiver, value) {
      return receiver.u3b(value);
    });
  }
  function background$factory_2() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.g3b();
    }, function (receiver, value) {
      return receiver.u3b(value);
    });
  }
  function selectedColor$factory() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.h3c();
    }, function (receiver, value) {
      return receiver.g3c(value);
    });
  }
  function selectedColor$factory_0() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.h3c();
    }, function (receiver, value) {
      return receiver.g3c(value);
    });
  }
  function selectedBackground$factory() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.j3c();
    }, function (receiver, value) {
      return receiver.i3c(value);
    });
  }
  function selectedBackground$factory_0() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.j3c();
    }, function (receiver, value) {
      return receiver.i3c(value);
    });
  }
  function selectedBorder$factory() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.l3c();
    }, function (receiver, value) {
      return receiver.k3c(value);
    });
  }
  function selectedBorder$factory_0() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.l3c();
    }, function (receiver, value) {
      return receiver.k3c(value);
    });
  }
  function hover$factory_3() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.i2f();
    }, function (receiver, value) {
      return receiver.q3b(value);
    });
  }
  function hover$factory_4() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.i2f();
    }, function (receiver, value) {
      return receiver.q3b(value);
    });
  }
  function pressed$factory_1() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.f3b();
    }, function (receiver, value) {
      return receiver.t3b(value);
    });
  }
  function pressed$factory_2() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.f3b();
    }, function (receiver, value) {
      return receiver.t3b(value);
    });
  }
  function disabled$factory() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.o3b();
    }, function (receiver, value) {
      return receiver.m3c(value);
    });
  }
  function disabled$factory_0() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.o3b();
    }, function (receiver, value) {
      return receiver.m3c(value);
    });
  }
  function background$factory_3() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.g3b();
    }, function (receiver, value) {
      return receiver.u3b(value);
    });
  }
  function background$factory_4() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.g3b();
    }, function (receiver, value) {
      return receiver.u3b(value);
    });
  }
  function color$factory_3() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.h3b();
    }, function (receiver, value) {
      return receiver.v3b(value);
    });
  }
  function color$factory_4() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.h3b();
    }, function (receiver, value) {
      return receiver.v3b(value);
    });
  }
  var properties_initialized_SilkWidgetColorGroups_kt_1mdo2;
  function _init_properties_SilkWidgetColorGroups_kt__mh2tbg() {
    if (!properties_initialized_SilkWidgetColorGroups_kt_1mdo2) {
      properties_initialized_SilkWidgetColorGroups_kt_1mdo2 = true;
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableButton$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCheckbox$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableInput$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableSwitch$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTab$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTooltip$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups$stable = 0;
    }
  }
  //region block: init
  com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Fill$stable = 0;
  com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Stroke$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_KeepPopupOpenStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_ManualKeepPopupOpenStrategy$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_OpenClosePopupStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_ManualOpenClosePopupStrategy$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_TimedOpenClosePopupStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Uninitialized$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_FoundElements$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Calculating$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Shown$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Hiding$stable = 8;
  com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable = 8;
  com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable = 8;
  com_varabyte_kobweb_silk_style_vars_size_BorderRadiusVars$stable = 8;
  com_varabyte_kobweb_silk_style_vars_size_FontSizeVars$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SimpleGrid;
  _.$_$.b = Surface;
  _.$_$.c = numColumns;
  _.$_$.d = get_SilkColorsStyle;
  _.$_$.e = initSilkWidgets;
  _.$_$.f = setSilkWidgetVariables_0;
  _.$_$.g = get_SmoothColorStyle;
  _.$_$.h = get_BorderColorVar;
  _.$_$.i = get_ColorVar;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets.js.map
