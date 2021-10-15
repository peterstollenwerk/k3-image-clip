var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
(function() {
  "use strict";
  var render$6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("k-field", _vm._b({ staticClass: "k-files-field", scopedSlots: _vm._u([_vm.more && !_vm.disabled ? { key: "options", fn: function() {
      return [_c("k-button-group", { staticClass: "k-field-options" }, [_c("k-options-dropdown", _vm._b({ ref: "options", on: { "action": _vm.onAction } }, "k-options-dropdown", _vm.options, false))], 1)];
    }, proxy: true } : null], null, true) }, "k-field", _vm.$props, false), [_c("k-dropzone", { attrs: { "disabled": _vm.more === false }, on: { "drop": _vm.drop } }, [_vm.selected.length ? [_c("k-clip-items", { attrs: { "items": _vm.selected, "layout": _vm.layout, "size": _vm.size, "sortable": !_vm.disabled && _vm.selected.length > 1 }, on: { "sort": _vm.onInput, "sortChange": function($event) {
      return _vm.$emit("change", $event);
    }, "openClipDialog": _vm.openClipDialog }, scopedSlots: _vm._u([{ key: "options", fn: function(ref) {
      var index = ref.index;
      return [!_vm.disabled ? _c("k-button", { attrs: { "tooltip": _vm.$t("remove"), "icon": "remove" }, on: { "click": function($event) {
        return _vm.remove(index);
      } } }) : _vm._e()];
    } }], null, false, 1805525116) })] : _c("k-empty", { attrs: { "layout": _vm.layout, "data-invalid": _vm.isInvalid, "icon": "image" }, on: { "click": _vm.prompt } }, [_vm._v(" " + _vm._s(_vm.empty || _vm.$t("field.files.empty")) + " ")])], 2), _c("k-files-dialog", { ref: "selector", on: { "submit": _vm.select } }), _c("k-upload", { ref: "fileUpload", on: { "success": _vm.upload } }), _c("k-clip-dialog", { ref: "clip", attrs: { "size": "large", "image": _vm.clip_image, "clip": _vm.clip }, on: { "submit": _vm.clippedArea } })], 1);
  };
  var staticRenderFns$6 = [];
  render$6._withStripped = true;
  function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles2, scopeId, moduleIdentifier, shadowMode) {
    var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
    if (render2) {
      options.render = render2;
      options.staticRenderFns = staticRenderFns2;
      options._compiled = true;
    }
    if (functionalTemplate) {
      options.functional = true;
    }
    if (scopeId) {
      options._scopeId = "data-v-" + scopeId;
    }
    var hook;
    if (moduleIdentifier) {
      hook = function(context) {
        context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
          context = __VUE_SSR_CONTEXT__;
        }
        if (injectStyles2) {
          injectStyles2.call(this, context);
        }
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };
      options._ssrRegister = hook;
    } else if (injectStyles2) {
      hook = shadowMode ? function() {
        injectStyles2.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
      } : injectStyles2;
    }
    if (hook) {
      if (options.functional) {
        options._injectStyles = hook;
        var originalRender = options.render;
        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
    return {
      exports: scriptExports,
      options
    };
  }
  const script$6 = {
    extends: "k-files-field",
    props: {
      clip: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        clip_image: {}
      };
    },
    methods: {
      openClipDialog(id) {
        this.clip_image = this.value.find((item) => item.id === id);
        this.$refs.clip.open();
      },
      clippedArea(data) {
        this.clip_image.clip = data.clip;
        this.onInput();
        this.getPreview(data.id, data.clip);
      },
      getPreview(image_id, clip) {
        this.$api.post(this.endpoints.field + "/preview", {
          id: image_id,
          width: clip.width,
          height: clip.height,
          top: clip.top,
          left: clip.left
        }).then((data) => {
          if (data.image) {
            let field_name = this.name;
            let content_id = this.$store.state.content.current;
            let field_model = this.$store.getters["content/values"](content_id)[field_name];
            if (field_model) {
              let changed_image = field_model.find((image) => image.id === image_id);
              changed_image.image = data.image;
              this.$store.dispatch("content/update", [field_name, field_model, content_id]);
            } else {
              let updated_image = this.selected.find((image) => image.id === image_id);
              updated_image.image = data.image;
            }
          } else {
            throw new Error("image clip: no image for preview received.");
          }
        }).catch((error) => {
          console.log(error);
        });
      }
    }
  };
  const __cssModules$6 = {};
  var __component__$6 = /* @__PURE__ */ normalizeComponent(script$6, render$6, staticRenderFns$6, false, injectStyles$6, null, null, null);
  function injectStyles$6(context) {
    for (let o in __cssModules$6) {
      this[o] = __cssModules$6[o];
    }
  }
  __component__$6.options.__file = "src/fields/imageClip.vue";
  var imageClip = /* @__PURE__ */ function() {
    return __component__$6.exports;
  }();
  var render$5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("k-draggable", { staticClass: "k-items", class: "k-" + _vm.layout + "-items", attrs: { "handle": true, "options": _vm.dragOptions, "data-layout": _vm.layout, "data-size": _vm.size, "list": _vm.items }, on: { "change": function($event) {
      return _vm.$emit("change", $event);
    }, "end": function($event) {
      return _vm.$emit("sort", _vm.items, $event);
    } } }, [_vm._t("default", function() {
      return _vm._l(_vm.items, function(item, itemIndex) {
        return _c("k-clip-item", _vm._b({ key: item.id || itemIndex, class: { "k-draggable-item": _vm.sortable && item.sortable }, attrs: { "image": _vm.imageOptions(item), "layout": _vm.layout, "sortable": _vm.sortable && item.sortable, "width": item.column }, on: { "click": function($event) {
          return _vm.$emit("item", item, itemIndex);
        }, "drag": function($event) {
          return _vm.onDragStart($event, item.dragText);
        }, "flag": function($event) {
          return _vm.$emit("flag", item, itemIndex);
        }, "option": function($event) {
          return _vm.$emit("option", $event, item, itemIndex);
        }, "openClipDialog": function(id) {
          return _vm.$emit("openClipDialog", id);
        } }, nativeOn: { "mouseover": function($event) {
          return _vm.$emit("hover", $event, item, itemIndex);
        } }, scopedSlots: _vm._u([{ key: "options", fn: function() {
          return [_vm._t("options", null, { "item": item, "index": itemIndex })];
        }, proxy: true }], null, true) }, "k-clip-item", item, false));
      });
    })], 2);
  };
  var staticRenderFns$5 = [];
  render$5._withStripped = true;
  var clipItems_vue_vue_type_style_index_0_scoped_true_lang = "";
  const script$5 = {
    extends: "k-items",
    computed: {}
  };
  const __cssModules$5 = {};
  var __component__$5 = /* @__PURE__ */ normalizeComponent(script$5, render$5, staticRenderFns$5, false, injectStyles$5, "0b060670", null, null);
  function injectStyles$5(context) {
    for (let o in __cssModules$5) {
      this[o] = __cssModules$5[o];
    }
  }
  __component__$5.options.__file = "src/components/clipItems.vue";
  var clipItems = /* @__PURE__ */ function() {
    return __component__$5.exports;
  }();
  var render$4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("article", _vm._b({ staticClass: "k-item", class: _vm.layout ? "k-" + _vm.layout + "-item" : false, attrs: { "data-has-figure": _vm.hasFigure, "data-has-info": Boolean(_vm.info), "data-has-label": Boolean(_vm.label), "data-has-options": Boolean(_vm.options), "tabindex": "-1" }, on: { "click": function($event) {
      return _vm.$emit("click", $event);
    }, "dragstart": function($event) {
      return _vm.$emit("drag", $event);
    } } }, "article", _vm.data, false), [_vm.hasFigure ? _c("k-clip-item-image", { attrs: { "image": _vm.image, "layout": _vm.layout, "width": _vm.width, "id": _vm.id, "resizable": _vm.resizable, "disabled": _vm.disabled }, on: { "clicked": function($event) {
      return _vm.$emit("openClipDialog", _vm.id);
    } } }) : _vm._e(), _vm.sortable ? _c("k-sort-handle", { staticClass: "k-item-sort-handle" }) : _vm._e(), _c("header", { staticClass: "k-item-content" }, [_c("h3", { staticClass: "k-item-title" }, [_vm.link ? _c("k-link", { staticClass: "k-item-title-link", attrs: { "target": _vm.target, "to": _vm.link } }, [_c("span", { domProps: { "innerHTML": _vm._s(_vm.title) } })]) : _c("span", { domProps: { "innerHTML": _vm._s(_vm.title) } })], 1), _vm.info ? _c("p", { staticClass: "k-item-info", domProps: { "innerHTML": _vm._s(_vm.info) } }) : _vm._e()]), _vm.flag || _vm.options || _vm.$slots.options ? _c("footer", { staticClass: "k-item-footer" }, [_c("nav", { staticClass: "k-item-buttons", on: { "click": function($event) {
      $event.stopPropagation();
    } } }, [_vm.flag ? _c("k-status-icon", _vm._b({}, "k-status-icon", _vm.flag, false)) : _vm._e(), _vm._t("options", function() {
      return [_vm.options ? _c("k-options-dropdown", { staticClass: "k-item-options-dropdown", attrs: { "options": _vm.options }, on: { "option": _vm.onOption } }) : _vm._e()];
    })], 2)]) : _vm._e()], 1);
  };
  var staticRenderFns$4 = [];
  render$4._withStripped = true;
  const script$4 = {
    extends: "k-item",
    props: {
      id: String,
      resizable: Boolean,
      disabled: Boolean
    },
    computed: {
      hasFigure() {
        return this.image !== false && Object.keys(this.image).length > 0;
      },
      title() {
        return this.text || "-";
      }
    }
  };
  const __cssModules$4 = {};
  var __component__$4 = /* @__PURE__ */ normalizeComponent(script$4, render$4, staticRenderFns$4, false, injectStyles$4, null, null, null);
  function injectStyles$4(context) {
    for (let o in __cssModules$4) {
      this[o] = __cssModules$4[o];
    }
  }
  __component__$4.options.__file = "src/components/clipItem.vue";
  var clipItem = /* @__PURE__ */ function() {
    return __component__$4.exports;
  }();
  var render$3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.image ? _c("div", { staticClass: "k-item-figure relative", style: { background: _vm.$helper.color(_vm.back) } }, [_vm.resizable && !_vm.disabled ? _c("k-clip-handle", { attrs: { "layout": _vm.layout }, on: { "clicked": function($event) {
      return _vm.$emit("clicked");
    } } }) : _vm._e(), _vm.image.src ? _c("k-image", { staticClass: "k-item-image", attrs: { "cover": _vm.image.cover, "ratio": _vm.ratio, "sizes": _vm.sizes, "src": _vm.image.src, "srcset": _vm.image.srcset } }) : _c("k-aspect-ratio", { attrs: { "ratio": _vm.ratio } }, [_c("k-icon", { staticClass: "k-item-icon", attrs: { "color": _vm.$helper.color(_vm.image.color), "size": _vm.size, "type": _vm.image.icon } })], 1)], 1) : _vm._e();
  };
  var staticRenderFns$3 = [];
  render$3._withStripped = true;
  var clipItemImage_vue_vue_type_style_index_0_scoped_true_lang = "";
  const script$3 = {
    extends: "k-item-image",
    props: {
      id: String,
      resizable: Boolean,
      disabled: Boolean
    }
  };
  const __cssModules$3 = {};
  var __component__$3 = /* @__PURE__ */ normalizeComponent(script$3, render$3, staticRenderFns$3, false, injectStyles$3, "413d20b8", null, null);
  function injectStyles$3(context) {
    for (let o in __cssModules$3) {
      this[o] = __cssModules$3[o];
    }
  }
  __component__$3.options.__file = "src/components/clipItemImage.vue";
  var clipItemImage = /* @__PURE__ */ function() {
    return __component__$3.exports;
  }();
  var __$_require_a1bf4a12__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAMFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPzX0yTAAAAD3RSTlMAQIDAEPDQYLAgoFBwMJALzXfXAAAAsElEQVRYw+3TPQoCMRCG4RgXVEQwrVXwFhbilt7AQu+QvYl7BQ9h72XshUUtP+NPQImBDAq7Webtn2I+GMFxXG1JVAzaDjJlm+CivMrvoINQOhnwSPpHG2jarAsGDH4BOREs1zQwMpiRwB44HwhAwlaV0SDb4t5GiOEqCvTxbG5lEQO6eHUErtHAVVDBKU3Qm76lG/MPH2CnbHkIhBonAwbKy7ijY3OzMmg74Djuj90AekzAtvxv03QAAAAASUVORK5CYII=";
  var render$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("span", { class: "k-sort-handle k-item-sort-handle k-icon k-icon-sort clip-handle " + _vm.layout + "-handle", attrs: { "aria-hidden": "true" } }, [_c("img", { staticClass: "clipicon", attrs: { "src": __$_require_a1bf4a12__, "alt": "Clip" }, on: { "click": _vm.open } })]);
  };
  var staticRenderFns$2 = [];
  render$2._withStripped = true;
  var clipHandle_vue_vue_type_style_index_0_scoped_true_lang = "";
  const script$2 = {
    extends: "k-sort-handle",
    props: {
      layout: String
    },
    methods: {
      open() {
        this.$emit("clicked");
      }
    }
  };
  const __cssModules$2 = {};
  var __component__$2 = /* @__PURE__ */ normalizeComponent(script$2, render$2, staticRenderFns$2, false, injectStyles$2, "222403a8", null, null);
  function injectStyles$2(context) {
    for (let o in __cssModules$2) {
      this[o] = __cssModules$2[o];
    }
  }
  __component__$2.options.__file = "src/components/clipHandle.vue";
  var clipHandle = /* @__PURE__ */ function() {
    return __component__$2.exports;
  }();
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var croppr = { exports: {} };
  (function(module, exports) {
    (function(global2, factory) {
      module.exports = factory();
    })(commonjsGlobal, function() {
      (function() {
        var lastTime = 0;
        var vendors = ["ms", "moz", "webkit", "o"];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
          window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
          window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
        }
        if (!window.requestAnimationFrame)
          window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() {
              callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
          };
        if (!window.cancelAnimationFrame)
          window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
          };
      })();
      (function() {
        if (typeof window.CustomEvent === "function")
          return false;
        function CustomEvent2(event, params) {
          params = params || { bubbles: false, cancelable: false, detail: void 0 };
          var evt = document.createEvent("CustomEvent");
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        }
        CustomEvent2.prototype = window.Event.prototype;
        window.CustomEvent = CustomEvent2;
      })();
      (function(window2) {
        try {
          new CustomEvent("test");
          return false;
        } catch (e) {
        }
        function MouseEvent2(eventType, params) {
          params = params || { bubbles: false, cancelable: false };
          var mouseEvent = document.createEvent("MouseEvent");
          mouseEvent.initMouseEvent(eventType, params.bubbles, params.cancelable, window2, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
          return mouseEvent;
        }
        MouseEvent2.prototype = Event.prototype;
        window2.MouseEvent = MouseEvent2;
      })(window);
      var classCallCheck = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
      var createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var get = function get2(object, property, receiver) {
        if (object === null)
          object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === void 0) {
          var parent = Object.getPrototypeOf(object);
          if (parent === null) {
            return void 0;
          } else {
            return get2(parent, property, receiver);
          }
        } else if ("value" in desc) {
          return desc.value;
        } else {
          var getter = desc.get;
          if (getter === void 0) {
            return void 0;
          }
          return getter.call(receiver);
        }
      };
      var inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      };
      var possibleConstructorReturn = function(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      };
      var slicedToArray = function() {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = void 0;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"])
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        return function(arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();
      var Handle = function Handle2(position, constraints, cursor, eventBus) {
        classCallCheck(this, Handle2);
        var self2 = this;
        this.position = position;
        this.constraints = constraints;
        this.cursor = cursor;
        this.eventBus = eventBus;
        this.el = document.createElement("div");
        this.el.className = "croppr-handle";
        this.el.style.cursor = cursor;
        this.el.addEventListener("mousedown", onMouseDown);
        function onMouseDown(e) {
          e.stopPropagation();
          document.addEventListener("mouseup", onMouseUp);
          document.addEventListener("mousemove", onMouseMove);
          self2.eventBus.dispatchEvent(new CustomEvent("handlestart", {
            detail: { handle: self2 }
          }));
        }
        function onMouseUp(e) {
          e.stopPropagation();
          document.removeEventListener("mouseup", onMouseUp);
          document.removeEventListener("mousemove", onMouseMove);
          self2.eventBus.dispatchEvent(new CustomEvent("handleend", {
            detail: { handle: self2 }
          }));
        }
        function onMouseMove(e) {
          e.stopPropagation();
          self2.eventBus.dispatchEvent(new CustomEvent("handlemove", {
            detail: { mouseX: e.clientX, mouseY: e.clientY }
          }));
        }
      };
      var Box = function() {
        function Box2(x1, y1, x2, y2) {
          classCallCheck(this, Box2);
          this.x1 = x1;
          this.y1 = y1;
          this.x2 = x2;
          this.y2 = y2;
        }
        createClass(Box2, [{
          key: "set",
          value: function set$$1() {
            var x1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
            var y1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
            var x2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            var y2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
            this.x1 = x1 == null ? this.x1 : x1;
            this.y1 = y1 == null ? this.y1 : y1;
            this.x2 = x2 == null ? this.x2 : x2;
            this.y2 = y2 == null ? this.y2 : y2;
            return this;
          }
        }, {
          key: "width",
          value: function width() {
            return Math.abs(this.x2 - this.x1);
          }
        }, {
          key: "height",
          value: function height() {
            return Math.abs(this.y2 - this.y1);
          }
        }, {
          key: "resize",
          value: function resize(newWidth, newHeight) {
            var origin = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [0, 0];
            var fromX = this.x1 + this.width() * origin[0];
            var fromY = this.y1 + this.height() * origin[1];
            this.x1 = fromX - newWidth * origin[0];
            this.y1 = fromY - newHeight * origin[1];
            this.x2 = this.x1 + newWidth;
            this.y2 = this.y1 + newHeight;
            return this;
          }
        }, {
          key: "scale",
          value: function scale(factor) {
            var origin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [0, 0];
            var newWidth = this.width() * factor;
            var newHeight = this.height() * factor;
            this.resize(newWidth, newHeight, origin);
            return this;
          }
        }, {
          key: "move",
          value: function move() {
            var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
            var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
            var width = this.width();
            var height = this.height();
            x = x === null ? this.x1 : x;
            y = y === null ? this.y1 : y;
            this.x1 = x;
            this.y1 = y;
            this.x2 = x + width;
            this.y2 = y + height;
            return this;
          }
        }, {
          key: "getRelativePoint",
          value: function getRelativePoint() {
            var point = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [0, 0];
            var x = this.width() * point[0];
            var y = this.height() * point[1];
            return [x, y];
          }
        }, {
          key: "getAbsolutePoint",
          value: function getAbsolutePoint() {
            var point = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [0, 0];
            var x = this.x1 + this.width() * point[0];
            var y = this.y1 + this.height() * point[1];
            return [x, y];
          }
        }, {
          key: "constrainToRatio",
          value: function constrainToRatio(ratio) {
            var origin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [0, 0];
            var grow = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "height";
            if (ratio === null) {
              return;
            }
            this.width();
            this.height();
            switch (grow) {
              case "height":
                this.resize(this.width(), this.width() * ratio, origin);
                break;
              case "width":
                this.resize(this.height() * 1 / ratio, this.height(), origin);
                break;
              default:
                this.resize(this.width(), this.width() * ratio, origin);
            }
            return this;
          }
        }, {
          key: "constrainToBoundary",
          value: function constrainToBoundary(boundaryWidth, boundaryHeight) {
            var origin = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [0, 0];
            var _getAbsolutePoint = this.getAbsolutePoint(origin), _getAbsolutePoint2 = slicedToArray(_getAbsolutePoint, 2), originX = _getAbsolutePoint2[0], originY = _getAbsolutePoint2[1];
            var maxIfLeft = originX;
            var maxIfTop = originY;
            var maxIfRight = boundaryWidth - originX;
            var maxIfBottom = boundaryHeight - originY;
            var directionX = -2 * origin[0] + 1;
            var directionY = -2 * origin[1] + 1;
            var maxWidth = null, maxHeight = null;
            switch (directionX) {
              case -1:
                maxWidth = maxIfLeft;
                break;
              case 0:
                maxWidth = Math.min(maxIfLeft, maxIfRight) * 2;
                break;
              case 1:
                maxWidth = maxIfRight;
                break;
            }
            switch (directionY) {
              case -1:
                maxHeight = maxIfTop;
                break;
              case 0:
                maxHeight = Math.min(maxIfTop, maxIfBottom) * 2;
                break;
              case 1:
                maxHeight = maxIfBottom;
                break;
            }
            if (this.width() > maxWidth) {
              var factor = maxWidth / this.width();
              this.scale(factor, origin);
            }
            if (this.height() > maxHeight) {
              var _factor = maxHeight / this.height();
              this.scale(_factor, origin);
            }
            return this;
          }
        }, {
          key: "constrainToSize",
          value: function constrainToSize() {
            var maxWidth = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
            var maxHeight = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
            var minWidth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            var minHeight = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
            var origin = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [0, 0];
            var ratio = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null;
            if (ratio) {
              if (ratio > 1) {
                maxWidth = maxHeight * 1 / ratio;
                minHeight = minWidth * ratio;
              } else if (ratio < 1) {
                maxHeight = maxWidth * ratio;
                minWidth = minHeight * 1 / ratio;
              }
            }
            if (maxWidth && this.width() > maxWidth) {
              var newWidth = maxWidth, newHeight = ratio === null ? this.height() : maxHeight;
              this.resize(newWidth, newHeight, origin);
            }
            if (maxHeight && this.height() > maxHeight) {
              var _newWidth = ratio === null ? this.width() : maxWidth, _newHeight = maxHeight;
              this.resize(_newWidth, _newHeight, origin);
            }
            if (minWidth && this.width() < minWidth) {
              var _newWidth2 = minWidth, _newHeight2 = ratio === null ? this.height() : minHeight;
              this.resize(_newWidth2, _newHeight2, origin);
            }
            if (minHeight && this.height() < minHeight) {
              var _newWidth3 = ratio === null ? this.width() : minWidth, _newHeight3 = minHeight;
              this.resize(_newWidth3, _newHeight3, origin);
            }
            return this;
          }
        }]);
        return Box2;
      }();
      function enableTouch(element) {
        element.addEventListener("touchstart", simulateMouseEvent);
        element.addEventListener("touchend", simulateMouseEvent);
        element.addEventListener("touchmove", simulateMouseEvent);
      }
      function simulateMouseEvent(e) {
        e.preventDefault();
        var touch = e.changedTouches[0];
        var eventMap = {
          "touchstart": "mousedown",
          "touchmove": "mousemove",
          "touchend": "mouseup"
        };
        touch.target.dispatchEvent(new MouseEvent(eventMap[e.type], {
          bubbles: true,
          cancelable: true,
          view: window,
          clientX: touch.clientX,
          clientY: touch.clientY,
          screenX: touch.screenX,
          screenY: touch.screenY
        }));
      }
      var HANDLES = [{ position: [0, 0], constraints: [1, 0, 0, 1], cursor: "nw-resize" }, { position: [0.5, 0], constraints: [1, 0, 0, 0], cursor: "n-resize" }, { position: [1, 0], constraints: [1, 1, 0, 0], cursor: "ne-resize" }, { position: [1, 0.5], constraints: [0, 1, 0, 0], cursor: "e-resize" }, { position: [1, 1], constraints: [0, 1, 1, 0], cursor: "se-resize" }, { position: [0.5, 1], constraints: [0, 0, 1, 0], cursor: "s-resize" }, { position: [0, 1], constraints: [0, 0, 1, 1], cursor: "sw-resize" }, { position: [0, 0.5], constraints: [0, 0, 0, 1], cursor: "w-resize" }];
      var CropprCore = function() {
        function CropprCore2(element, options) {
          var _this = this;
          var deferred = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
          classCallCheck(this, CropprCore2);
          this.options = CropprCore2.parseOptions(options || {});
          if (!element.nodeName) {
            element = document.querySelector(element);
            if (element == null) {
              throw "Unable to find element.";
            }
          }
          if (!element.getAttribute("src")) {
            throw "Image src not provided.";
          }
          this._initialized = false;
          this._restore = {
            parent: element.parentNode,
            element
          };
          if (!deferred) {
            if (element.width === 0 || element.height === 0) {
              element.onload = function() {
                _this.initialize(element);
              };
            } else {
              this.initialize(element);
            }
          }
        }
        createClass(CropprCore2, [{
          key: "initialize",
          value: function initialize(element) {
            this.createDOM(element);
            this.options.convertToPixels(this.cropperEl);
            this.attachHandlerEvents();
            this.attachRegionEvents();
            this.attachOverlayEvents();
            this.box = this.initializeBox(this.options);
            this.redraw();
            this._initialized = true;
            if (this.options.onInitialize !== null) {
              this.options.onInitialize(this);
            }
          }
        }, {
          key: "createDOM",
          value: function createDOM(targetEl) {
            this.containerEl = document.createElement("div");
            this.containerEl.className = "croppr-container";
            this.eventBus = this.containerEl;
            enableTouch(this.containerEl);
            this.cropperEl = document.createElement("div");
            this.cropperEl.className = "croppr";
            this.imageEl = document.createElement("img");
            this.imageEl.setAttribute("src", targetEl.getAttribute("src"));
            this.imageEl.setAttribute("alt", targetEl.getAttribute("alt"));
            this.imageEl.className = "croppr-image";
            this.imageClippedEl = this.imageEl.cloneNode();
            this.imageClippedEl.className = "croppr-imageClipped";
            this.regionEl = document.createElement("div");
            this.regionEl.className = "croppr-region";
            this.overlayEl = document.createElement("div");
            this.overlayEl.className = "croppr-overlay";
            var handleContainerEl = document.createElement("div");
            handleContainerEl.className = "croppr-handleContainer";
            this.handles = [];
            for (var i = 0; i < HANDLES.length; i++) {
              var handle = new Handle(HANDLES[i].position, HANDLES[i].constraints, HANDLES[i].cursor, this.eventBus);
              this.handles.push(handle);
              handleContainerEl.appendChild(handle.el);
            }
            this.cropperEl.appendChild(this.imageEl);
            this.cropperEl.appendChild(this.imageClippedEl);
            this.cropperEl.appendChild(this.regionEl);
            this.cropperEl.appendChild(this.overlayEl);
            this.cropperEl.appendChild(handleContainerEl);
            this.containerEl.appendChild(this.cropperEl);
            targetEl.parentElement.replaceChild(this.containerEl, targetEl);
          }
        }, {
          key: "setImage",
          value: function setImage(src) {
            var _this2 = this;
            this.imageEl.onload = function() {
              _this2.box = _this2.initializeBox(_this2.options);
              _this2.redraw();
            };
            this.imageEl.src = src;
            this.imageClippedEl.src = src;
            return this;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._restore.parent.replaceChild(this._restore.element, this.containerEl);
          }
        }, {
          key: "initializeBox",
          value: function initializeBox(opts) {
            var width = opts.startSize.width;
            var height = opts.startSize.height;
            var box = new Box(0, 0, width, height);
            box.constrainToRatio(opts.aspectRatio, [0.5, 0.5]);
            var min = opts.minSize;
            var max = opts.maxSize;
            box.constrainToSize(max.width, max.height, min.width, min.height, [0.5, 0.5], opts.aspectRatio);
            var parentWidth = this.cropperEl.offsetWidth;
            var parentHeight = this.cropperEl.offsetHeight;
            box.constrainToBoundary(parentWidth, parentHeight, [0.5, 0.5]);
            var x = this.cropperEl.offsetWidth / 2 - box.width() / 2;
            var y = this.cropperEl.offsetHeight / 2 - box.height() / 2;
            box.move(x, y);
            return box;
          }
        }, {
          key: "redraw",
          value: function redraw() {
            var _this3 = this;
            var width = Math.round(this.box.width()), height = Math.round(this.box.height()), x1 = Math.round(this.box.x1), y1 = Math.round(this.box.y1), x2 = Math.round(this.box.x2), y2 = Math.round(this.box.y2);
            window.requestAnimationFrame(function() {
              _this3.regionEl.style.transform = "translate(" + x1 + "px, " + y1 + "px)";
              _this3.regionEl.style.width = width + "px";
              _this3.regionEl.style.height = height + "px";
              _this3.imageClippedEl.style.clip = "rect(" + y1 + "px, " + x2 + "px, " + y2 + "px, " + x1 + "px)";
              var center = _this3.box.getAbsolutePoint([0.5, 0.5]);
              var xSign = center[0] - _this3.cropperEl.offsetWidth / 2 >> 31;
              var ySign = center[1] - _this3.cropperEl.offsetHeight / 2 >> 31;
              var quadrant = (xSign ^ ySign) + ySign + ySign + 4;
              var foregroundHandleIndex = -2 * quadrant + 8;
              for (var i = 0; i < _this3.handles.length; i++) {
                var handle = _this3.handles[i];
                var handleWidth = handle.el.offsetWidth;
                var handleHeight = handle.el.offsetHeight;
                var left = x1 + width * handle.position[0] - handleWidth / 2;
                var top = y1 + height * handle.position[1] - handleHeight / 2;
                handle.el.style.transform = "translate(" + Math.round(left) + "px, " + Math.round(top) + "px)";
                handle.el.style.zIndex = foregroundHandleIndex == i ? 5 : 4;
              }
            });
          }
        }, {
          key: "attachHandlerEvents",
          value: function attachHandlerEvents() {
            var eventBus = this.eventBus;
            eventBus.addEventListener("handlestart", this.onHandleMoveStart.bind(this));
            eventBus.addEventListener("handlemove", this.onHandleMoveMoving.bind(this));
            eventBus.addEventListener("handleend", this.onHandleMoveEnd.bind(this));
          }
        }, {
          key: "attachRegionEvents",
          value: function attachRegionEvents() {
            var eventBus = this.eventBus;
            this.regionEl.addEventListener("mousedown", onMouseDown);
            eventBus.addEventListener("regionstart", this.onRegionMoveStart.bind(this));
            eventBus.addEventListener("regionmove", this.onRegionMoveMoving.bind(this));
            eventBus.addEventListener("regionend", this.onRegionMoveEnd.bind(this));
            function onMouseDown(e) {
              e.stopPropagation();
              document.addEventListener("mouseup", onMouseUp);
              document.addEventListener("mousemove", onMouseMove);
              eventBus.dispatchEvent(new CustomEvent("regionstart", {
                detail: { mouseX: e.clientX, mouseY: e.clientY }
              }));
            }
            function onMouseMove(e) {
              e.stopPropagation();
              eventBus.dispatchEvent(new CustomEvent("regionmove", {
                detail: { mouseX: e.clientX, mouseY: e.clientY }
              }));
            }
            function onMouseUp(e) {
              e.stopPropagation();
              document.removeEventListener("mouseup", onMouseUp);
              document.removeEventListener("mousemove", onMouseMove);
              eventBus.dispatchEvent(new CustomEvent("regionend", {
                detail: { mouseX: e.clientX, mouseY: e.clientY }
              }));
            }
          }
        }, {
          key: "attachOverlayEvents",
          value: function attachOverlayEvents() {
            var SOUTHEAST_HANDLE_IDX = 4;
            var self2 = this;
            var tmpBox = null;
            this.overlayEl.addEventListener("mousedown", onMouseDown);
            function onMouseDown(e) {
              e.stopPropagation();
              document.addEventListener("mouseup", onMouseUp);
              document.addEventListener("mousemove", onMouseMove);
              var container = self2.cropperEl.getBoundingClientRect();
              var mouseX = e.clientX - container.left;
              var mouseY = e.clientY - container.top;
              tmpBox = self2.box;
              self2.box = new Box(mouseX, mouseY, mouseX + 1, mouseY + 1);
              self2.eventBus.dispatchEvent(new CustomEvent("handlestart", {
                detail: { handle: self2.handles[SOUTHEAST_HANDLE_IDX] }
              }));
            }
            function onMouseMove(e) {
              e.stopPropagation();
              self2.eventBus.dispatchEvent(new CustomEvent("handlemove", {
                detail: { mouseX: e.clientX, mouseY: e.clientY }
              }));
            }
            function onMouseUp(e) {
              e.stopPropagation();
              document.removeEventListener("mouseup", onMouseUp);
              document.removeEventListener("mousemove", onMouseMove);
              if (self2.box.width() === 1 && self2.box.height() === 1) {
                self2.box = tmpBox;
                return;
              }
              self2.eventBus.dispatchEvent(new CustomEvent("handleend", {
                detail: { mouseX: e.clientX, mouseY: e.clientY }
              }));
            }
          }
        }, {
          key: "onHandleMoveStart",
          value: function onHandleMoveStart(e) {
            var handle = e.detail.handle;
            var originPoint = [1 - handle.position[0], 1 - handle.position[1]];
            var _box$getAbsolutePoint = this.box.getAbsolutePoint(originPoint), _box$getAbsolutePoint2 = slicedToArray(_box$getAbsolutePoint, 2), originX = _box$getAbsolutePoint2[0], originY = _box$getAbsolutePoint2[1];
            this.activeHandle = { handle, originPoint, originX, originY };
            if (this.options.onCropStart !== null) {
              this.options.onCropStart(this.getValue());
            }
          }
        }, {
          key: "onHandleMoveMoving",
          value: function onHandleMoveMoving(e) {
            var _e$detail = e.detail, mouseX = _e$detail.mouseX, mouseY = _e$detail.mouseY;
            var container = this.cropperEl.getBoundingClientRect();
            mouseX = mouseX - container.left;
            mouseY = mouseY - container.top;
            if (mouseX < 0) {
              mouseX = 0;
            } else if (mouseX > container.width) {
              mouseX = container.width;
            }
            if (mouseY < 0) {
              mouseY = 0;
            } else if (mouseY > container.height) {
              mouseY = container.height;
            }
            var origin = this.activeHandle.originPoint.slice();
            var originX = this.activeHandle.originX;
            var originY = this.activeHandle.originY;
            var handle = this.activeHandle.handle;
            var TOP_MOVABLE = handle.constraints[0] === 1;
            var RIGHT_MOVABLE = handle.constraints[1] === 1;
            var BOTTOM_MOVABLE = handle.constraints[2] === 1;
            var LEFT_MOVABLE = handle.constraints[3] === 1;
            var MULTI_AXIS = (LEFT_MOVABLE || RIGHT_MOVABLE) && (TOP_MOVABLE || BOTTOM_MOVABLE);
            var x1 = LEFT_MOVABLE || RIGHT_MOVABLE ? originX : this.box.x1;
            var x2 = LEFT_MOVABLE || RIGHT_MOVABLE ? originX : this.box.x2;
            var y1 = TOP_MOVABLE || BOTTOM_MOVABLE ? originY : this.box.y1;
            var y2 = TOP_MOVABLE || BOTTOM_MOVABLE ? originY : this.box.y2;
            x1 = LEFT_MOVABLE ? mouseX : x1;
            x2 = RIGHT_MOVABLE ? mouseX : x2;
            y1 = TOP_MOVABLE ? mouseY : y1;
            y2 = BOTTOM_MOVABLE ? mouseY : y2;
            var isFlippedX = false, isFlippedY = false;
            if (LEFT_MOVABLE || RIGHT_MOVABLE) {
              isFlippedX = LEFT_MOVABLE ? mouseX > originX : mouseX < originX;
            }
            if (TOP_MOVABLE || BOTTOM_MOVABLE) {
              isFlippedY = TOP_MOVABLE ? mouseY > originY : mouseY < originY;
            }
            if (isFlippedX) {
              var tmp = x1;
              x1 = x2;
              x2 = tmp;
              origin[0] = 1 - origin[0];
            }
            if (isFlippedY) {
              var _tmp = y1;
              y1 = y2;
              y2 = _tmp;
              origin[1] = 1 - origin[1];
            }
            var box = new Box(x1, y1, x2, y2);
            if (this.options.aspectRatio) {
              var ratio = this.options.aspectRatio;
              var isVerticalMovement = false;
              if (MULTI_AXIS) {
                isVerticalMovement = mouseY > box.y1 + ratio * box.width() || mouseY < box.y2 - ratio * box.width();
              } else if (TOP_MOVABLE || BOTTOM_MOVABLE) {
                isVerticalMovement = true;
              }
              var ratioMode = isVerticalMovement ? "width" : "height";
              box.constrainToRatio(ratio, origin, ratioMode);
            }
            var parentWidth = this.cropperEl.offsetWidth;
            var parentHeight = this.cropperEl.offsetHeight;
            box.constrainToBoundary(parentWidth, parentHeight, origin);
            var min = this.options.minSize;
            var max = this.options.maxSize;
            box.constrainToSize(max.width, max.height, min.width, min.height, origin, this.options.aspectRatio);
            if (box.x1 < 0 || box.y1 < 0 || box.x2 > Math.ceil(container.width) || box.y2 > Math.ceil(container.height)) {
              return;
            }
            this.box = box;
            this.redraw();
            if (this.options.onCropMove !== null) {
              this.options.onCropMove(this.getValue());
            }
          }
        }, {
          key: "onHandleMoveEnd",
          value: function onHandleMoveEnd(e) {
            if (this.options.onCropEnd !== null) {
              this.options.onCropEnd(this.getValue());
            }
          }
        }, {
          key: "onRegionMoveStart",
          value: function onRegionMoveStart(e) {
            var _e$detail2 = e.detail, mouseX = _e$detail2.mouseX, mouseY = _e$detail2.mouseY;
            var container = this.cropperEl.getBoundingClientRect();
            mouseX = mouseX - container.left;
            mouseY = mouseY - container.top;
            this.currentMove = {
              offsetX: mouseX - this.box.x1,
              offsetY: mouseY - this.box.y1
            };
            if (this.options.onCropStart !== null) {
              this.options.onCropStart(this.getValue());
            }
          }
        }, {
          key: "onRegionMoveMoving",
          value: function onRegionMoveMoving(e) {
            var _e$detail3 = e.detail, mouseX = _e$detail3.mouseX, mouseY = _e$detail3.mouseY;
            var _currentMove = this.currentMove, offsetX = _currentMove.offsetX, offsetY = _currentMove.offsetY;
            var container = this.cropperEl.getBoundingClientRect();
            mouseX = mouseX - container.left;
            mouseY = mouseY - container.top;
            this.box.move(mouseX - offsetX, mouseY - offsetY);
            if (this.box.x1 < 0) {
              this.box.move(0, null);
            }
            if (this.box.x2 > container.width) {
              this.box.move(container.width - this.box.width(), null);
            }
            if (this.box.y1 < 0) {
              this.box.move(null, 0);
            }
            if (this.box.y2 > container.height) {
              this.box.move(null, container.height - this.box.height());
            }
            this.redraw();
            if (this.options.onCropMove !== null) {
              this.options.onCropMove(this.getValue());
            }
          }
        }, {
          key: "onRegionMoveEnd",
          value: function onRegionMoveEnd(e) {
            if (this.options.onCropEnd !== null) {
              this.options.onCropEnd(this.getValue());
            }
          }
        }, {
          key: "getValue",
          value: function getValue() {
            var mode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
            if (mode === null) {
              mode = this.options.returnMode;
            }
            if (mode == "real") {
              var actualWidth = this.imageEl.naturalWidth;
              var actualHeight = this.imageEl.naturalHeight;
              var _imageEl$getBoundingC = this.imageEl.getBoundingClientRect(), elementWidth = _imageEl$getBoundingC.width, elementHeight = _imageEl$getBoundingC.height;
              var factorX = actualWidth / elementWidth;
              var factorY = actualHeight / elementHeight;
              return {
                x: Math.round(this.box.x1 * factorX),
                y: Math.round(this.box.y1 * factorY),
                width: Math.round(this.box.width() * factorX),
                height: Math.round(this.box.height() * factorY)
              };
            } else if (mode == "ratio") {
              var _imageEl$getBoundingC2 = this.imageEl.getBoundingClientRect(), _elementWidth = _imageEl$getBoundingC2.width, _elementHeight = _imageEl$getBoundingC2.height;
              return {
                x: round(this.box.x1 / _elementWidth, 3),
                y: round(this.box.y1 / _elementHeight, 3),
                width: round(this.box.width() / _elementWidth, 3),
                height: round(this.box.height() / _elementHeight, 3)
              };
            } else if (mode == "raw") {
              return {
                x: Math.round(this.box.x1),
                y: Math.round(this.box.y1),
                width: Math.round(this.box.width()),
                height: Math.round(this.box.height())
              };
            }
          }
        }], [{
          key: "parseOptions",
          value: function parseOptions(opts) {
            var defaults$$1 = {
              aspectRatio: null,
              maxSize: { width: null, height: null },
              minSize: { width: null, height: null },
              startSize: { width: 100, height: 100, unit: "%" },
              returnMode: "real",
              onInitialize: null,
              onCropStart: null,
              onCropMove: null,
              onCropEnd: null
            };
            var aspectRatio = null;
            if (opts.aspectRatio !== void 0) {
              if (typeof opts.aspectRatio === "number") {
                aspectRatio = opts.aspectRatio;
              } else if (opts.aspectRatio instanceof Array) {
                aspectRatio = opts.aspectRatio[1] / opts.aspectRatio[0];
              }
            }
            var maxSize = null;
            if (opts.maxSize !== void 0 && opts.maxSize !== null) {
              maxSize = {
                width: opts.maxSize[0] || null,
                height: opts.maxSize[1] || null,
                unit: opts.maxSize[2] || "px"
              };
            }
            var minSize = null;
            if (opts.minSize !== void 0 && opts.minSize !== null) {
              minSize = {
                width: opts.minSize[0] || null,
                height: opts.minSize[1] || null,
                unit: opts.minSize[2] || "px"
              };
            }
            var startSize = null;
            if (opts.startSize !== void 0 && opts.startSize !== null) {
              startSize = {
                width: opts.startSize[0] || null,
                height: opts.startSize[1] || null,
                unit: opts.startSize[2] || "%"
              };
            }
            var onInitialize = null;
            if (typeof opts.onInitialize === "function") {
              onInitialize = opts.onInitialize;
            }
            var onCropStart = null;
            if (typeof opts.onCropStart === "function") {
              onCropStart = opts.onCropStart;
            }
            var onCropEnd = null;
            if (typeof opts.onCropEnd === "function") {
              onCropEnd = opts.onCropEnd;
            }
            var onCropMove = null;
            if (typeof opts.onUpdate === "function") {
              console.warn("Croppr.js: `onUpdate` is deprecated and will be removed in the next major release. Please use `onCropMove` or `onCropEnd` instead.");
              onCropMove = opts.onUpdate;
            }
            if (typeof opts.onCropMove === "function") {
              onCropMove = opts.onCropMove;
            }
            var returnMode = null;
            if (opts.returnMode !== void 0) {
              var s = opts.returnMode.toLowerCase();
              if (["real", "ratio", "raw"].indexOf(s) === -1) {
                throw "Invalid return mode.";
              }
              returnMode = s;
            }
            var convertToPixels = function convertToPixels2(container) {
              var width = container.offsetWidth;
              var height = container.offsetHeight;
              var sizeKeys = ["maxSize", "minSize", "startSize"];
              for (var i = 0; i < sizeKeys.length; i++) {
                var key = sizeKeys[i];
                if (this[key] !== null) {
                  if (this[key].unit == "%") {
                    if (this[key].width !== null) {
                      this[key].width = this[key].width / 100 * width;
                    }
                    if (this[key].height !== null) {
                      this[key].height = this[key].height / 100 * height;
                    }
                  }
                  delete this[key].unit;
                }
              }
            };
            var defaultValue = function defaultValue2(v, d) {
              return v !== null ? v : d;
            };
            return {
              aspectRatio: defaultValue(aspectRatio, defaults$$1.aspectRatio),
              maxSize: defaultValue(maxSize, defaults$$1.maxSize),
              minSize: defaultValue(minSize, defaults$$1.minSize),
              startSize: defaultValue(startSize, defaults$$1.startSize),
              returnMode: defaultValue(returnMode, defaults$$1.returnMode),
              onInitialize: defaultValue(onInitialize, defaults$$1.onInitialize),
              onCropStart: defaultValue(onCropStart, defaults$$1.onCropStart),
              onCropMove: defaultValue(onCropMove, defaults$$1.onCropMove),
              onCropEnd: defaultValue(onCropEnd, defaults$$1.onCropEnd),
              convertToPixels
            };
          }
        }]);
        return CropprCore2;
      }();
      function round(value, decimals) {
        return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
      }
      var Croppr$12 = function(_CropprCore) {
        inherits(Croppr2, _CropprCore);
        function Croppr2(element, options) {
          var _deferred = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
          classCallCheck(this, Croppr2);
          return possibleConstructorReturn(this, (Croppr2.__proto__ || Object.getPrototypeOf(Croppr2)).call(this, element, options, _deferred));
        }
        createClass(Croppr2, [{
          key: "getValue",
          value: function getValue(mode) {
            return get(Croppr2.prototype.__proto__ || Object.getPrototypeOf(Croppr2.prototype), "getValue", this).call(this, mode);
          }
        }, {
          key: "setImage",
          value: function setImage(src) {
            return get(Croppr2.prototype.__proto__ || Object.getPrototypeOf(Croppr2.prototype), "setImage", this).call(this, src);
          }
        }, {
          key: "destroy",
          value: function destroy() {
            return get(Croppr2.prototype.__proto__ || Object.getPrototypeOf(Croppr2.prototype), "destroy", this).call(this);
          }
        }, {
          key: "moveTo",
          value: function moveTo(x, y) {
            this.box.move(x, y);
            this.redraw();
            if (this.options.onCropEnd !== null) {
              this.options.onCropEnd(this.getValue());
            }
            return this;
          }
        }, {
          key: "resizeTo",
          value: function resizeTo(width, height) {
            var origin = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [0.5, 0.5];
            this.box.resize(width, height, origin);
            this.redraw();
            if (this.options.onCropEnd !== null) {
              this.options.onCropEnd(this.getValue());
            }
            return this;
          }
        }, {
          key: "scaleBy",
          value: function scaleBy(factor) {
            var origin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [0.5, 0.5];
            this.box.scale(factor, origin);
            this.redraw();
            if (this.options.onCropEnd !== null) {
              this.options.onCropEnd(this.getValue());
            }
            return this;
          }
        }, {
          key: "reset",
          value: function reset() {
            this.box = this.initializeBox(this.options);
            this.redraw();
            if (this.options.onCropEnd !== null) {
              this.options.onCropEnd(this.getValue());
            }
            return this;
          }
        }]);
        return Croppr2;
      }(CropprCore);
      return Croppr$12;
    });
  })(croppr);
  var Croppr$1 = croppr.exports;
  function aspectRatioFit({ srcWidth, srcHeight, maxWidth, maxHeight }) {
    let ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
    return {
      width: srcWidth * ratio,
      height: srcHeight * ratio
    };
  }
  class Croppr {
    constructor({ el, original_dimensions, saved, clip, events }) {
      this.el = el;
      this.original_dimensions = original_dimensions;
      this.saved = saved;
      this.min_width = clip ? clip.minwidth : null;
      this.min_height = clip ? clip.minheight : null;
      this.max_width = clip ? clip.maxwidth : null;
      this.max_height = clip ? clip.maxheight : null;
      this.limit_width = null;
      this.limit_height = null;
      this.ratio = clip ? clip.ratio : null;
      this.events = events;
      this.validate();
      this.cropInstance = this.init();
    }
    reset({ position, clip }) {
      this.cropInstance.destroy();
      this.saved = position;
      this.cropInstance = this.init();
    }
    setRatio({ clip }) {
      this.cropInstance.destroy();
      this.min_width = clip ? clip.minwidth : null;
      this.min_height = clip ? clip.minheight : null;
      this.ratio = clip ? clip.ratio : null;
      this.saved = false;
      this.cropInstance = this.init();
    }
    init() {
      let options = __spreadValues({
        returnMode: "raw",
        onInitialize: (instance) => {
          let image = document.getElementsByClassName("croppr-image")[0];
          image.addEventListener("load", (event) => {
            this.image = event.target;
            this.factor_w = this.original_dimensions.width / event.target.clientWidth;
            this.factor_h = this.original_dimensions.height / event.target.clientHeight;
            this.setStartPosition();
          }, false);
        }
      }, this.events);
      if (this.min_width && this.min_height) {
        options.aspectRatio = this.ratio === "fixed" ? this.min_height / this.min_width : null;
        options.minSize = [this.min_width, this.min_height, "px"];
        this.limit_width = this.min_width;
        this.limit_height = this.min_height;
      }
      if (this.max_width && this.max_height) {
        options.aspectRatio = this.ratio === "fixed" ? this.max_height / this.max_width : null;
        options.maxSize = [this.max_width, this.max_height, "px"];
        this.limit_width = this.max_width;
        this.limit_height = this.max_height;
      }
      return new Croppr$1(this.el, options);
    }
    getCropArea() {
      let coord = this.cropInstance.getValue();
      let area = {
        width: this.roundSize(coord.width * this.factor_w, this.limit_width),
        height: this.roundSize(coord.height * this.factor_h, this.limit_height)
      };
      area.left = this.adjustPosition(coord.x * this.factor_w, area.width, this.original_dimensions.width);
      area.top = this.adjustPosition(coord.y * this.factor_h, area.height, this.original_dimensions.height);
      return area;
    }
    setStartPosition() {
      let reference = {
        width: 10,
        height: 10
      };
      if (this.max_width && this.max_height) {
        this.cropInstance.options.maxSize = reference = {
          width: this.max_width / this.factor_w,
          height: this.max_height / this.factor_h
        };
      }
      if (this.min_width && this.min_height) {
        this.cropInstance.options.minSize = reference = {
          width: this.min_width / this.factor_w,
          height: this.min_height / this.factor_h
        };
      }
      if (!this.saved) {
        let size = aspectRatioFit({
          srcWidth: reference.width,
          srcHeight: reference.height,
          maxWidth: this.original_dimensions.width,
          maxHeight: this.original_dimensions.height
        });
        reference = {
          width: size.width / this.factor_w,
          height: size.height / this.factor_h
        };
        this.cropInstance.resizeTo(reference.width, reference.height);
        this.cropInstance.moveTo(0, 0);
      } else {
        let calculated = {
          width: Math.round(this.saved.width / this.factor_w),
          height: Math.round(this.saved.height / this.factor_h),
          left: Math.round(this.saved.left / this.factor_w),
          top: Math.round(this.saved.top / this.factor_h)
        };
        this.cropInstance.resizeTo(calculated.width, calculated.height);
        this.cropInstance.moveTo(calculated.left, calculated.top);
      }
    }
    validate() {
      if (this.min_width && this.original_dimensions.width < this.min_width) {
        throw new Error(`Image width (${this.original_dimensions.width}px) must be at least ${this.min_width}px`);
      }
      if (this.min_height && this.original_dimensions.height < this.min_height) {
        throw new Error(`Image height (${this.original_dimensions.height}px) must be at least ${this.min_height}px`);
      }
      if (this.min_width && this.min_height && this.max_width && this.max_height && this.ratio === "fixed" && this.min_width / this.min_height !== this.max_width / this.max_height) {
        throw new Error(`Ratio must be same for min and max`);
      }
    }
    roundSize(value, limit = null) {
      return limit && limit - value >= -1 && limit - value <= 1 ? limit : Math.round(value);
    }
    adjustPosition(position, size, limit) {
      return position + size > limit ? limit - size : Math.round(position);
    }
  }
  function debounce(func, wait = 100) {
    let timeout;
    return function(...args) {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  }
  var render$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("k-overlay", { ref: "overlay", attrs: { "autofocus": _vm.autofocus, "centered": true }, on: { "ready": function($event) {
      return _vm.$emit("ready");
    } } }, [_c("div", { ref: "dialog", staticClass: "k-dialog", class: _vm.$vnode.data.staticClass, style: _vm.dialog_width, attrs: { "data-size": _vm.size }, on: { "mousedown": function($event) {
      $event.stopPropagation();
    } } }, [_vm.notification ? _c("div", { staticClass: "k-dialog-notification", attrs: { "data-theme": _vm.notification.type } }, [_c("p", [_vm._v(_vm._s(_vm.notification.message))]), _c("k-button", { attrs: { "icon": "cancel" }, on: { "click": function($event) {
      _vm.notification = null;
    } } })], 1) : _vm._e(), _vm.image ? _c("div", { staticClass: "k-dialog-body" }, [_vm.spinner ? _c("div", { staticClass: "preload" }, [_c("div", { staticClass: "spinner" }, [_c("div", { staticClass: "bounce1" }), _c("div", { staticClass: "bounce2" }), _c("div", { staticClass: "bounce3" })]), _c("footer", { staticClass: "preload-dialog-footer" }, [_vm._t("footer", function() {
      return [_c("k-button-group", [_c("k-button", { staticClass: "k-dialog-button-cancel", attrs: { "icon": "cancel" }, on: { "click": _vm.cancel } }, [_vm._v(" " + _vm._s(_vm.$t("cancel")) + " ")])], 1)];
    })], 2)]) : _vm._e(), _c("img", { attrs: { "src": _vm.image.url, "id": "croppr" } })]) : _vm._e(), _c("footer", { staticClass: "k-dialog-footer" }, [_vm._t("footer", function() {
      return [_c("div", { staticClass: "ratio", staticStyle: { "margin-left": "1rem", "margin-right": "1rem" } }, [_c("k-select-field", { attrs: { "options": [
        { value: "free", text: "Free" },
        { value: "1/1", text: "1/1" },
        { value: "2/1", text: "2/1" }
      ], "required": false, "label": "Ratio", "name": "ratio", "help": "" }, on: { "input": _vm.setRatio }, model: { value: _vm.ratio, callback: function($$v) {
        _vm.ratio = $$v;
      }, expression: "ratio" } })], 1), _c("k-button-group", [_c("k-button", { staticClass: "k-dialog-button-cancel", attrs: { "icon": "cancel" }, on: { "click": _vm.cancel } }, [_vm._v(" " + _vm._s(_vm.$t("cancel")) + " ")]), _c("k-button", { staticClass: "k-dialog-button-submit", attrs: { "icon": _vm.icon, "theme": _vm.theme }, on: { "click": _vm.submit } }, [_vm._v(" " + _vm._s(_vm.button || _vm.$t("confirm")) + " ")])], 1)];
    })], 2)])]);
  };
  var staticRenderFns$1 = [];
  render$1._withStripped = true;
  var clipDialog_vue_vue_type_style_index_0_lang = "";
  const script$1 = {
    extends: "k-dialog",
    props: {
      image: {
        type: Object,
        default: null
      },
      clip: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        cropprFacade: null,
        dialog_width: null,
        spinner: true,
        freezeDialog: false,
        was_moved: false,
        ratio: "free"
      };
    },
    created() {
      this.$on("ready", this.isOpen, false);
      this.$on("close", this.isClosed, false);
    },
    destroyed() {
      this.$off("ready", this.isOpen, false);
      this.$off("close", this.isClosed, false);
    },
    methods: {
      getRatioX() {
        return parseInt(this.ratio.split("/")[0]);
      },
      getRatioY() {
        return parseInt(this.ratio.split("/")[1]);
      },
      setRatio() {
        if (this.ratio == "free") {
          this.clip = {
            minwidth: null,
            minheight: null,
            ratio: null
          };
        } else {
          this.clip = {
            minwidth: this.getRatioX(),
            minheight: this.getRatioY(),
            ratio: "fixed"
          };
        }
        this.cropprFacade.setRatio({
          clip: this.clip
        });
      },
      initCropper() {
        let el = document.getElementById("croppr");
        el.addEventListener("load", this.hideSpinner, false);
        if (el.complete) {
          this.hideSpinner();
        }
        try {
          this.cropprFacade = new Croppr({
            el,
            original_dimensions: this.image.dimensions,
            clip: this.clip,
            saved: this.image.clip,
            events: {
              onCropStart: () => {
                this.freezeDialog = true;
                this.was_moved = true;
              },
              onCropEnd: () => {
                setTimeout(() => {
                  this.freezeDialog = false;
                }, 200);
              }
            }
          });
          window.addEventListener("resize", this.showSpinner, false);
          window.addEventListener("resize", this.resizeDialog, false);
        } catch (error) {
          this.cancel();
          console.error(this.image.id + ": " + error.message);
          this.$store.dispatch("notification/error", error.message);
        }
      },
      isOpen() {
        this.setDialogWidth();
        this.showSpinner();
        this.$nextTick(() => {
          this.initCropper();
        });
      },
      isClosed() {
        window.removeEventListener("resize", this.showSpinner, false);
        window.removeEventListener("resize", this.resizeDialog, false);
      },
      cancel() {
        if (this.freezeDialog)
          return;
        this.$emit("cancel");
        this.close();
      },
      remToPx(px = 1) {
        return px * parseInt(getComputedStyle(document.documentElement).fontSize);
      },
      submit() {
        if (this.was_moved) {
          this.$emit("submit", {
            id: this.image.id,
            clip: this.cropprFacade.getCropArea(),
            ratio: this.ratio
          });
          this.was_moved = false;
        }
        this.close();
      },
      setDialogWidth() {
        let max_width = window.innerWidth - this.remToPx(6);
        let max_height = window.innerHeight - this.remToPx(12);
        let size = aspectRatioFit({
          srcWidth: this.image.dimensions.width,
          srcHeight: this.image.dimensions.height,
          maxWidth: max_width,
          maxHeight: max_height
        });
        let width = this.image.dimensions.width;
        if (this.image.dimensions.width > max_width || this.image.dimensions.height > max_height) {
          width = size.width;
        }
        this.dialog_width = "width: " + width + "px;";
      },
      resizeDialog: debounce(function() {
        this.setDialogWidth();
        let last_known = this.cropprFacade.getCropArea();
        this.cropprFacade.reset({
          position: last_known,
          clip: this.clip,
          ratio: this.ratio
        });
        this.spinner = false;
      }, 500),
      hideSpinner: function() {
        this.spinner = false;
      },
      showSpinner: function() {
        if (this.spinner === false) {
          this.spinner = true;
        }
      }
    }
  };
  const __cssModules$1 = {};
  var __component__$1 = /* @__PURE__ */ normalizeComponent(script$1, render$1, staticRenderFns$1, false, injectStyles$1, null, null, null);
  function injectStyles$1(context) {
    for (let o in __cssModules$1) {
      this[o] = __cssModules$1[o];
    }
  }
  __component__$1.options.__file = "src/components/clipDialog.vue";
  var clipDialog = /* @__PURE__ */ function() {
    return __component__$1.exports;
  }();
  var structurePreview_vue_vue_type_style_index_0_scoped_true_lang = "";
  const script = {
    extends: "k-files-field-preview"
  };
  let render, staticRenderFns;
  const __cssModules = {};
  var __component__ = /* @__PURE__ */ normalizeComponent(script, render, staticRenderFns, false, injectStyles, "00f58f36", null, null);
  function injectStyles(context) {
    for (let o in __cssModules) {
      this[o] = __cssModules[o];
    }
  }
  __component__.options.__file = "src/components/structurePreview.vue";
  var structurePreview = /* @__PURE__ */ function() {
    return __component__.exports;
  }();
  panel.plugin("mullema/image-clip", {
    fields: {
      "image-clip": imageClip
    },
    components: {
      "k-clip-items": clipItems,
      "k-clip-item": clipItem,
      "k-clip-item-image": clipItemImage,
      "k-clip-handle": clipHandle,
      "k-clip-dialog": clipDialog,
      "k-image-clip-field-preview": structurePreview
    }
  });
})();
