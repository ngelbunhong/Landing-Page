(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-silk-foundation.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-frontend-kobweb-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-silk-foundation.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-frontend-kobweb-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    root['kobweb-frontend-silk-widgets-kobweb'] = factory(typeof this['kobweb-frontend-silk-widgets-kobweb'] === 'undefined' ? {} : this['kobweb-frontend-silk-widgets-kobweb'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-silk-foundation'], this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-compose-html-ext'], this['kobweb-frontend-kobweb-compose'], this['html-html-core'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kobweb-frontend-kobweb-core']);
  }
}(globalThis, function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.cc;
  var ComponentKind = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var initMetadataForInterface = kotlin_kotlin.$_$.cb;
  var VOID = kotlin_kotlin.$_$.f;
  var get_BorderColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.h;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var initMetadataForObject = kotlin_kotlin.$_$.eb;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v3;
  var Companion_getInstance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t2;
  var listStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x2;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.u3;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.y4;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var KProperty1 = kotlin_kotlin.$_$.rc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.wa;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var THROW_CCE = kotlin_kotlin.$_$.ef;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.n5;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_kobweb_core.$_$.k;
  var prependIf = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var Img = kotlin_org_jetbrains_compose_html_html_core.$_$.p5;
  var Unit_getInstance = kotlin_kotlin.$_$.m4;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.w4;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var Companion_getInstance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u2;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var Anchor = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var get_link = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var get_visited = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y2;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var get_ColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.i;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.w5;
  var registerRefScope_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h2;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var get_SilkColorsStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var modifyStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var initMetadataForClass = kotlin_kotlin.$_$.za;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var KMutableProperty1 = kotlin_kotlin.$_$.pc;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(TocKind, 'TocKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(TocVars, 'TocVars');
  initMetadataForInterface(ImageKind, 'ImageKind', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(LinkKind, 'LinkKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(LinkVars, 'LinkVars');
  initMetadataForInterface(Link_1, 'Link');
  initMetadataForClass(MutableLink, 'MutableLink', VOID, ColorGroup, [ColorGroup, Link_1]);
  initMetadataForObject(SilkWidgetKobwebColorGroups, 'SilkWidgetKobwebColorGroups');
  //endregion
  function get_TocStyle() {
    _init_properties_Toc_kt__9n5312();
    return TocStyle;
  }
  var TocStyle;
  function get_TocBorderedVariant() {
    _init_properties_Toc_kt__9n5312();
    return TocBorderedVariant;
  }
  var TocBorderedVariant;
  var com_varabyte_kobweb_silk_components_document_TocVars$stable;
  function TocKind() {
  }
  function TocVars() {
    TocVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().value$default_36t2hw_k$();
    tmp.BorderColor$delegate_1 = StyleVariable(tmp0_defaultFallback, 'silk');
  }
  protoOf(TocVars).get_BorderColor_hljtgy_k$ = function () {
    return this.BorderColor$delegate_1.getValue_fbnwi2_k$(this, BorderColor$factory());
  };
  var TocVars_instance;
  function TocVars_getInstance() {
    if (TocVars_instance == null)
      new TocVars();
    return TocVars_instance;
  }
  function TocStyle$lambda($this$base) {
    _init_properties_Toc_kt__9n5312();
    return padding(textAlign(listStyle(Companion_getInstance(), Companion_getInstance_0().get_None_wo6tgh_k$()), Companion_getInstance_1().get_Start_ih4i6x_k$()), get_cssRem(0));
  }
  function TocBorderedVariant$lambda($this$addVariantBase) {
    _init_properties_Toc_kt__9n5312();
    var tmp = borderRadius(Companion_getInstance(), get_px(5));
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding(border(tmp, tmp_0, 'solid', TocVars_getInstance().get_BorderColor_hljtgy_k$().value$default_36t2hw_k$()), get_cssRem(1));
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.get_BorderColor_hljtgy_k$();
    }, null);
  }
  var properties_initialized_Toc_kt_t9o4p4;
  function _init_properties_Toc_kt__9n5312() {
    if (!properties_initialized_Toc_kt_t9o4p4) {
      properties_initialized_Toc_kt_t9o4p4 = true;
      var tmp = Companion_getInstance_3();
      TocStyle = base(tmp, VOID, TocStyle$lambda);
      var tmp_0 = get_TocStyle();
      TocBorderedVariant = addVariantBase(tmp_0, VOID, TocBorderedVariant$lambda);
      com_varabyte_kobweb_silk_components_document_TocVars$stable = 8;
    }
  }
  function get_ImageStyle() {
    _init_properties_Image_kt__h9v8mh();
    return ImageStyle;
  }
  var ImageStyle;
  function get_FitWidthImageVariant() {
    _init_properties_Image_kt__h9v8mh();
    return FitWidthImageVariant;
  }
  var FitWidthImageVariant;
  function Image(src, modifier, variant, width, height, alt, autoPrefix, ref, $composer, $changed, $default) {
    _init_properties_Image_kt__h9v8mh();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var width_0 = {_v: width};
    var height_0 = {_v: height};
    var alt_0 = {_v: alt};
    var autoPrefix_0 = {_v: autoPrefix};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-316775194);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(width_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(height_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(alt_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(autoPrefix_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 8388608 : 4194304);
    if (!(($default & 2) === 2) || (!(($dirty & 23967451) === 4793490) || !$composer_0.get_skipping_3owdve_k$())) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        width_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        height_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        alt_0._v = '';
      }
      if (!(($default & 64) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 128) === 0)) {
        ref_0._v = null;
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-9339976);
      if (!(ref_0._v == null)) {
        var tmp = Companion_getInstance();
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        Companion_getInstance_4();
        // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = toAttrs(display(tmp, 'none'));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.graphics.Image.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 861319372, true, Image$lambda(ref_0));
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
        if (invalid || it === Companion_getInstance_5().get_Empty_i9b85g_k$()) {
          // Inline function 'com.varabyte.kobweb.silk.components.graphics.Image.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Div(tmp_0, tmp0, $composer_0, 48, 0);
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var tmp_4 = prependIf(Companion_getInstance_6(), autoPrefix_0._v, src);
      var tmp_5 = alt_0._v;
      var tmp_6 = toModifier(get_ImageStyle(), [variant_0._v], $composer_0, 6).then_mmfvo6_k$(modifier_0._v);
      $composer_0.startReplaceableGroup_ip860b_k$(-9330928);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid_0 = !!(($dirty & 7168) === 2048 | ($dirty & 57344) === 16384);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid_0 || it_0 === Companion_getInstance_5().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.graphics.Image.<anonymous>' call
        var value_0 = Image$lambda_0(width_0, height_0);
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_7 = value_0;
      } else {
        tmp_7 = it_0;
      }
      var tmp_8 = tmp_7;
      var tmp0_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Img(tmp_4, tmp_5, toAttrs(tmp_6, tmp0_group), $composer_0, 112 & $dirty >> 12, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(Image$lambda_1(src, modifier_0, variant_0, width_0, height_0, alt_0, autoPrefix_0, ref_0, $changed, $default));
    }
  }
  function Image_0(src, description, modifier, variant, width, height, autoPrefix, ref, $composer, $changed, $default) {
    _init_properties_Image_kt__h9v8mh();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var width_0 = {_v: width};
    var height_0 = {_v: height};
    var autoPrefix_0 = {_v: autoPrefix};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2126309876);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(description) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 128;
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(variant_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(width_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(height_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(autoPrefix_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 8388608 : 4194304);
    if (!(($default & 4) === 4) || (!(($dirty & 23967451) === 4793490) || !$composer_0.get_skipping_3owdve_k$())) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 8) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        width_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        height_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 128) === 0)) {
        ref_0._v = null;
      }
      Image(src, modifier_0._v, variant_0._v, width_0._v, height_0._v, description, autoPrefix_0._v, ref_0._v, $composer_0, 64 | 14 & $dirty | 896 & $dirty >> 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3 | 458752 & $dirty << 12 | 3670016 & $dirty | 16777216 | 29360128 & $dirty, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Image$lambda_2(src, description, modifier_0, variant_0, width_0, height_0, autoPrefix_0, ref_0, $changed, $default));
    }
  }
  function ImageKind() {
  }
  function ImageStyle$lambda($this$CssStyle) {
    _init_properties_Image_kt__h9v8mh();
    return Unit_getInstance();
  }
  function FitWidthImageVariant$lambda($this$addVariantBase) {
    _init_properties_Image_kt__h9v8mh();
    return objectFit(width(Companion_getInstance(), get_percent(100)), Companion_getInstance_7().get_ScaleDown_ala7ur_k$());
  }
  function Image$lambda$lambda(it) {
    _init_properties_Image_kt__h9v8mh();
    var tmp = it.nextSibling;
    return tmp instanceof HTMLImageElement ? tmp : THROW_CCE();
  }
  function Image$lambda($ref) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = $ref._v;
      $composer_0.startReplaceableGroup_ip860b_k$(-335133835);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_5().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.graphics.Image.<anonymous>.<anonymous>.<anonymous>' call
        var value = Image$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      registerRefScope($this$Div, tmp, tmp0_group, $composer_0, 456);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function Image$lambda_0($width, $height) {
    return function ($this$toAttrs) {
      var tmp;
      if (!($width._v == null)) {
        $this$toAttrs.attr_w68641_k$('width', $width._v.toString());
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($height._v == null)) {
        $this$toAttrs.attr_w68641_k$('height', $height._v.toString());
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Image$lambda_1($src, $modifier, $variant, $width, $height, $alt, $autoPrefix, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      Image($src, $modifier._v, $variant._v, $width._v, $height._v, $alt._v, $autoPrefix._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Image$lambda_2($src, $description, $modifier, $variant, $width, $height, $autoPrefix, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      Image_0($src, $description, $modifier._v, $variant._v, $width._v, $height._v, $autoPrefix._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Image_kt_7kjzpx;
  function _init_properties_Image_kt__h9v8mh() {
    if (!properties_initialized_Image_kt_7kjzpx) {
      properties_initialized_Image_kt_7kjzpx = true;
      ImageStyle = CssStyle(VOID, ImageStyle$lambda);
      var tmp = get_ImageStyle();
      FitWidthImageVariant = addVariantBase(tmp, VOID, FitWidthImageVariant$lambda);
    }
  }
  function get_LinkStyle() {
    _init_properties_Link_kt__dm1ox2();
    return LinkStyle;
  }
  var LinkStyle;
  function get_UndecoratedLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UndecoratedLinkVariant;
  }
  var UndecoratedLinkVariant;
  function get_UncoloredLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UncoloredLinkVariant;
  }
  var UncoloredLinkVariant;
  function get_AlwaysUnderlinedLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return AlwaysUnderlinedLinkVariant;
  }
  var AlwaysUnderlinedLinkVariant;
  var com_varabyte_kobweb_silk_components_navigation_LinkVars$stable;
  function LinkKind() {
  }
  function LinkVars() {
    LinkVars_instance = this;
    this.DefaultColor$delegate_1 = StyleVariable_0('silk');
    this.VisitedColor$delegate_1 = StyleVariable_0('silk');
  }
  protoOf(LinkVars).get_DefaultColor_3x88vp_k$ = function () {
    return this.DefaultColor$delegate_1.getValue_fbnwi2_k$(this, DefaultColor$factory());
  };
  protoOf(LinkVars).get_VisitedColor_7oj77i_k$ = function () {
    return this.VisitedColor$delegate_1.getValue_fbnwi2_k$(this, VisitedColor$factory());
  };
  var LinkVars_instance;
  function LinkVars_getInstance() {
    if (LinkVars_instance == null)
      new LinkVars();
    return LinkVars_instance;
  }
  function Link(path, text, modifier, variant, openInternalLinksStrategy, openExternalLinksStrategy, updateHistoryMode, autoPrefix, ref, $composer, $changed, $default) {
    _init_properties_Link_kt__dm1ox2();
    var text_0 = {_v: text};
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var openInternalLinksStrategy_0 = {_v: openInternalLinksStrategy};
    var openExternalLinksStrategy_0 = {_v: openExternalLinksStrategy};
    var updateHistoryMode_0 = {_v: updateHistoryMode};
    var autoPrefix_0 = {_v: autoPrefix};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1604486341);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(path) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 128;
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(variant_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(openInternalLinksStrategy_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(openExternalLinksStrategy_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(updateHistoryMode_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(autoPrefix_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 67108864 : 33554432);
    if (!(($default & 4) === 4) || (!(($dirty & 191739611) === 38347922) || !$composer_0.get_skipping_3owdve_k$())) {
      if (!(($default & 2) === 0)) {
        text_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 8) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        openInternalLinksStrategy_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        openExternalLinksStrategy_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        updateHistoryMode_0._v = null;
      }
      if (!(($default & 128) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 256) === 0)) {
        ref_0._v = null;
      }
      var tmp = modifier_0._v;
      var tmp_0 = variant_0._v;
      var tmp_1 = openInternalLinksStrategy_0._v;
      var tmp_2 = openExternalLinksStrategy_0._v;
      var tmp_3 = updateHistoryMode_0._v;
      var tmp_4 = autoPrefix_0._v;
      var tmp_5 = ref_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.navigation.Link.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_6, -1758927476, true, Link$lambda(text_0, path));
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
      var tmp_7;
      if (invalid || it === Companion_getInstance_5().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.navigation.Link.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_7 = value;
      } else {
        tmp_7 = it;
      }
      var tmp_8 = tmp_7;
      var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Link_0(path, tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp0, $composer_0, 100663360 | 14 & $dirty | 896 & $dirty >> 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3 | 458752 & $dirty >> 3 | 3670016 & $dirty >> 3 | 16777216 | 29360128 & $dirty >> 3, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Link$lambda_0(path, text_0, modifier_0, variant_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, updateHistoryMode_0, autoPrefix_0, ref_0, $changed, $default));
    }
  }
  function Link_0(path, modifier, variant, openInternalLinksStrategy, openExternalLinksStrategy, updateHistoryMode, autoPrefix, ref, content, $composer, $changed, $default) {
    _init_properties_Link_kt__dm1ox2();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var openInternalLinksStrategy_0 = {_v: openInternalLinksStrategy};
    var openExternalLinksStrategy_0 = {_v: openExternalLinksStrategy};
    var updateHistoryMode_0 = {_v: updateHistoryMode};
    var autoPrefix_0 = {_v: autoPrefix};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-102859135);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(path) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(openInternalLinksStrategy_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(openExternalLinksStrategy_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(updateHistoryMode_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(autoPrefix_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(ref_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 67108864 : 33554432);
    if (!(($default & 2) === 2) || (!(($dirty & 191739611) === 38347922) || !$composer_0.get_skipping_3owdve_k$())) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        openInternalLinksStrategy_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        openExternalLinksStrategy_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        updateHistoryMode_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 128) === 0)) {
        ref_0._v = null;
      }
      var tmp = toAttrs(toModifier(get_LinkStyle(), [variant_0._v], $composer_0, 6).then_mmfvo6_k$(modifier_0._v));
      var tmp_0 = openInternalLinksStrategy_0._v;
      var tmp_1 = openExternalLinksStrategy_0._v;
      var tmp_2 = updateHistoryMode_0._v;
      var tmp_3 = autoPrefix_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.navigation.Link.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, -2021008369, true, Link$lambda_1(ref_0, content));
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
      var tmp_5;
      if (invalid || it === Companion_getInstance_5().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.navigation.Link.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_5 = value;
      } else {
        tmp_5 = it;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Anchor(path, tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp0, $composer_0, 1572864 | 14 & $dirty | 896 & $dirty >> 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3 | 458752 & $dirty >> 3, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Link$lambda_2(path, modifier_0, variant_0, openInternalLinksStrategy_0, openExternalLinksStrategy_0, updateHistoryMode_0, autoPrefix_0, ref_0, content, $changed, $default));
    }
  }
  function LinkStyle$lambda($this$CssStyle) {
    _init_properties_Link_kt__dm1ox2();
    $this$CssStyle.base_y8uu8g_k$(LinkStyle$lambda$lambda);
    var tmp = get_link($this$CssStyle);
    tmp.invoke_ts7809_k$(LinkStyle$lambda$lambda_0);
    var tmp_0 = get_visited($this$CssStyle);
    tmp_0.invoke_ts7809_k$(LinkStyle$lambda$lambda_1);
    var tmp_1 = get_hover($this$CssStyle);
    tmp_1.invoke_ts7809_k$(LinkStyle$lambda$lambda_2);
    return Unit_getInstance();
  }
  function LinkStyle$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_8().get_None_wo6tgh_k$());
  }
  function LinkStyle$lambda$lambda_0() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_getInstance(), LinkVars_getInstance().get_DefaultColor_3x88vp_k$().value$default_36t2hw_k$());
  }
  function LinkStyle$lambda$lambda_1() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_getInstance(), LinkVars_getInstance().get_VisitedColor_7oj77i_k$().value$default_36t2hw_k$());
  }
  function LinkStyle$lambda$lambda_2() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_8().get_Underline_oo7egz_k$());
  }
  function UndecoratedLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var tmp = get_hover($this$addVariant);
    tmp.invoke_ts7809_k$(UndecoratedLinkVariant$lambda$lambda);
    return Unit_getInstance();
  }
  function UndecoratedLinkVariant$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_8().get_None_wo6tgh_k$());
  }
  function UncoloredLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var colorModifier = color(Companion_getInstance(), get_ColorVar().value$default_36t2hw_k$());
    var tmp = get_link($this$addVariant);
    tmp.invoke_ts7809_k$(UncoloredLinkVariant$lambda$lambda(colorModifier));
    var tmp_0 = get_visited($this$addVariant);
    tmp_0.invoke_ts7809_k$(UncoloredLinkVariant$lambda$lambda_0(colorModifier));
    return Unit_getInstance();
  }
  function UncoloredLinkVariant$lambda$lambda($colorModifier) {
    return function () {
      return $colorModifier;
    };
  }
  function UncoloredLinkVariant$lambda$lambda_0($colorModifier) {
    return function () {
      return $colorModifier;
    };
  }
  function AlwaysUnderlinedLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    $this$addVariant.base_y8uu8g_k$(AlwaysUnderlinedLinkVariant$lambda$lambda);
    return Unit_getInstance();
  }
  function AlwaysUnderlinedLinkVariant$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_8().get_Underline_oo7egz_k$());
  }
  function Link$lambda($text, $path) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp0_elvis_lhs = $text._v;
        Text(tmp0_elvis_lhs == null ? $path : tmp0_elvis_lhs, $composer_0, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function Link$lambda_0($path, $text, $modifier, $variant, $openInternalLinksStrategy, $openExternalLinksStrategy, $updateHistoryMode, $autoPrefix, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      Link($path, $text._v, $modifier._v, $variant._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $updateHistoryMode._v, $autoPrefix._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Link$lambda_1($ref, $content) {
    return function ($this$Anchor, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope_0($this$Anchor, $ref._v, $composer_0, 72);
      $content($composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function Link$lambda_2($path, $modifier, $variant, $openInternalLinksStrategy, $openExternalLinksStrategy, $updateHistoryMode, $autoPrefix, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Link_0($path, $modifier._v, $variant._v, $openInternalLinksStrategy._v, $openExternalLinksStrategy._v, $updateHistoryMode._v, $autoPrefix._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function DefaultColor$factory() {
    return getPropertyCallableRef('DefaultColor', 1, KProperty1, function (receiver) {
      return receiver.get_DefaultColor_3x88vp_k$();
    }, null);
  }
  function VisitedColor$factory() {
    return getPropertyCallableRef('VisitedColor', 1, KProperty1, function (receiver) {
      return receiver.get_VisitedColor_7oj77i_k$();
    }, null);
  }
  var properties_initialized_Link_kt_5x6v44;
  function _init_properties_Link_kt__dm1ox2() {
    if (!properties_initialized_Link_kt_5x6v44) {
      properties_initialized_Link_kt_5x6v44 = true;
      LinkStyle = CssStyle(VOID, LinkStyle$lambda);
      var tmp = get_LinkStyle();
      UndecoratedLinkVariant = addVariant(tmp, VOID, UndecoratedLinkVariant$lambda);
      var tmp_0 = get_LinkStyle();
      UncoloredLinkVariant = addVariant(tmp_0, VOID, UncoloredLinkVariant$lambda);
      var tmp_1 = get_LinkStyle();
      AlwaysUnderlinedLinkVariant = addVariant(tmp_1, VOID, AlwaysUnderlinedLinkVariant$lambda);
      com_varabyte_kobweb_silk_components_navigation_LinkVars$stable = 8;
    }
  }
  function initSilkWidgetsKobweb(ctx) {
    var mutableTheme = ctx.get_theme_iz24rk_k$();
    // Inline function 'kotlin.apply' call
    var this_0 = mutableTheme.get_palettes_f7ft27_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.get_light_iuogdp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb.<anonymous>.<anonymous>' call
    get_link_0(this_1).set_djj1hu_k$(Colors_getInstance().get_Blue_wnz3k3_k$(), Colors_getInstance().get_Purple_33oyqt_k$());
    // Inline function 'kotlin.apply' call
    var this_2 = this_0.get_dark_wokkvz_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb.<anonymous>.<anonymous>' call
    get_link_0(this_2).set_djj1hu_k$(Colors_getInstance().get_Cyan_wnzzpo_k$(), Colors_getInstance().get_Violet_5rb5wo_k$());
    var tmp = get_SilkColorsStyle();
    modifyStyleBase(mutableTheme, tmp, VOID, initSilkWidgetsKobweb$lambda);
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-image', get_ImageStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-fit-width', get_FitWidthImageVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-link', get_LinkStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-uncolored', get_UncoloredLinkVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-undecorated', get_UndecoratedLinkVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-always-underlined', get_AlwaysUnderlinedLinkVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-toc', get_TocStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-bordered', get_TocBorderedVariant());
  }
  function initSilkWidgetsKobweb$lambda($this$modifyStyleBase) {
    var palette = toPalette($this$modifyStyleBase.get_colorMode_trbg8z_k$());
    return setVariable(setVariable(Companion_getInstance(), LinkVars_getInstance().get_DefaultColor_3x88vp_k$(), get_link_1(palette).get_default_qtagd4_k$()), LinkVars_getInstance().get_VisitedColor_7oj77i_k$(), get_link_1(palette).get_visited_8zg8qp_k$());
  }
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetKobwebColorGroups_MutableLink$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetKobwebColorGroups$stable;
  function Link_1() {
  }
  function MutableLink(palette) {
    ColorGroup.call(this, palette, 'link');
    this.default$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.visited$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableLink).set_default_r70t7m_k$ = function (_set____db54di) {
    return this.default$delegate_1.setValue_jpcais_k$(this, default$factory(), _set____db54di);
  };
  protoOf(MutableLink).get_default_qtagd4_k$ = function () {
    return this.default$delegate_1.getValue_fbnwi2_k$(this, default$factory_0());
  };
  protoOf(MutableLink).set_visited_wsyhe3_k$ = function (_set____db54di) {
    return this.visited$delegate_1.setValue_jpcais_k$(this, visited$factory(), _set____db54di);
  };
  protoOf(MutableLink).get_visited_8zg8qp_k$ = function () {
    return this.visited$delegate_1.getValue_fbnwi2_k$(this, visited$factory_0());
  };
  protoOf(MutableLink).set_djj1hu_k$ = function (default_0, visited) {
    this.set_default_r70t7m_k$(default_0);
    this.set_visited_wsyhe3_k$(visited);
  };
  function SilkWidgetKobwebColorGroups() {
    SilkWidgetKobwebColorGroups_instance = this;
  }
  var SilkWidgetKobwebColorGroups_instance;
  function SilkWidgetKobwebColorGroups_getInstance() {
    if (SilkWidgetKobwebColorGroups_instance == null)
      new SilkWidgetKobwebColorGroups();
    return SilkWidgetKobwebColorGroups_instance;
  }
  function get_link_0(_this__u8e3s4) {
    _init_properties_SilkWidgetKobwebColorGroups_kt__t3jte2();
    return new MutableLink(_this__u8e3s4);
  }
  function get_link_1(_this__u8e3s4) {
    _init_properties_SilkWidgetKobwebColorGroups_kt__t3jte2();
    return get_link_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function default$factory() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.get_default_qtagd4_k$();
    }, function (receiver, value) {
      return receiver.set_default_r70t7m_k$(value);
    });
  }
  function default$factory_0() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.get_default_qtagd4_k$();
    }, function (receiver, value) {
      return receiver.set_default_r70t7m_k$(value);
    });
  }
  function visited$factory() {
    return getPropertyCallableRef('visited', 1, KMutableProperty1, function (receiver) {
      return receiver.get_visited_8zg8qp_k$();
    }, function (receiver, value) {
      return receiver.set_visited_wsyhe3_k$(value);
    });
  }
  function visited$factory_0() {
    return getPropertyCallableRef('visited', 1, KMutableProperty1, function (receiver) {
      return receiver.get_visited_8zg8qp_k$();
    }, function (receiver, value) {
      return receiver.set_visited_wsyhe3_k$(value);
    });
  }
  var properties_initialized_SilkWidgetKobwebColorGroups_kt_ed8ye0;
  function _init_properties_SilkWidgetKobwebColorGroups_kt__t3jte2() {
    if (!properties_initialized_SilkWidgetKobwebColorGroups_kt_ed8ye0) {
      properties_initialized_SilkWidgetKobwebColorGroups_kt_ed8ye0 = true;
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetKobwebColorGroups_MutableLink$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetKobwebColorGroups$stable = 0;
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Image_0;
  _.$_$.b = Image;
  _.$_$.c = Link;
  _.$_$.d = Link_0;
  _.$_$.e = initSilkWidgetsKobweb;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets-kobweb.js.map
