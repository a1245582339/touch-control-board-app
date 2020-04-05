(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.tsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../socket/index */ "./src/socket/index.ts");

var _index2 = _interopRequireDefault(_index);

__webpack_require__(/*! ./index.less */ "./src/pages/index/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Index, _Taro$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '首页'
    }, _this.$usedState = ["url"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _useState = (0, _taroWeapp.useState)('ws://192.168.43.135:3005'),
          _useState2 = _slicedToArray(_useState, 2),
          url = _useState2[0],
          setUrl = _useState2[1];

      var _useState3 = (0, _taroWeapp.useState)(),
          _useState4 = _slicedToArray(_useState3, 2),
          socket = _useState4[0],
          setSocket = _useState4[1];

      var connectSocket = (0, _taroWeapp.useCallback)(_asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setSocket((0, _index2.default)(url));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      })), [url]);
      var handleClick = function handleClick() {
        connectSocket();
        // Taro.scanCode({
        //   onlyFromCamera: true,
        //   success: (res) => {
        //     setUrl(res.result)
        //   },
        //   fail: (err) => {
        //     console.log(err)
        //   }
        // })
      };
      var handleClickUp = function handleClickUp() {
        socket && socket.send({
          data: 'up'
        });
      };
      var handleClickDown = function handleClickDown() {
        socket && socket.send({
          data: 'down'
        });
      };
      this.anonymousFunc0 = handleClick;
      this.anonymousFunc1 = handleClickUp;
      this.anonymousFunc2 = handleClickDown;
      Object.assign(this.__state, {
        url: url
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }]);

  return Index;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"], _class.$$componentPath = "pages/index/index", _temp2);


Index.config = { navigationBarTitleText: '首页' };
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=C:\\Users\\Lee\\Desktop\\code\\touch-control-board-app\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=template&parse=PAGE&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=C:/Users/Lee/Desktop/code/touch-control-board-app/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.tsx?taro&type=template&parse=PAGE& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/index/index.wxml";

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = function () {
  return this;
}() || {Function: Function,Boolean: Boolean,Object: Object,Number: Number,Array: Array,Date: Date,String: String,Symbol: Symbol,Error: Error,TypeError: TypeError,Map: Map,Set: Set,WeakMap: WeakMap,WeakSet: WeakSet,ArrayBuffer: ArrayBuffer,Math: Math,Promise: Promise,RegExp: RegExp,DataView: DataView,isFinite: isFinite,parseInt: parseInt,parseFloat: parseFloat,Float32Array: Float32Array,Float64Array: Float64Array,Int8Array: Int8Array,Int16Array: Int16Array,Int32Array: Int32Array,Uint8Array: Uint8Array,Uint16Array: Uint16Array,Uint32Array: Uint32Array,Uint8ClampedArray: Uint8ClampedArray,setTimeout: setTimeout,clearTimeout: clearTimeout,setInterval: setInterval,clearInterval: clearInterval};

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch (e) {
    g.regeneratorRuntime = undefined;
  }
}

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = ( false ? undefined : _typeof(module)) === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}(
// In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this;
}() || {Function: Function,Boolean: Boolean,Object: Object,Number: Number,Array: Array,Date: Date,String: String,Symbol: Symbol,Error: Error,TypeError: TypeError,Map: Map,Set: Set,WeakMap: WeakMap,WeakSet: WeakSet,ArrayBuffer: ArrayBuffer,Math: Math,Promise: Promise,RegExp: RegExp,DataView: DataView,isFinite: isFinite,parseInt: parseInt,parseFloat: parseFloat,Float32Array: Float32Array,Float64Array: Float64Array,Int8Array: Int8Array,Int16Array: Int16Array,Int32Array: Int32Array,Uint8Array: Uint8Array,Uint16Array: Uint16Array,Uint32Array: Uint32Array,Uint8ClampedArray: Uint8ClampedArray,setTimeout: setTimeout,clearTimeout: clearTimeout,setInterval: setInterval,clearInterval: clearInterval});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/weapp.socket.io/lib/weapp.socket.io.js":
/*!*************************************************************!*\
  !*** ./node_modules/weapp.socket.io/lib/weapp.socket.io.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

!function (t, e) {
  if ("object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module))) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var n, r; }
}(window, function () {
  return function (t) {
    var e = {};function r(n) {
      if (e[n]) return e[n].exports;var o = e[n] = { i: n, l: false, exports: {} };return t[n].call(o.exports, o, o.exports, r), o.l = true, o.exports;
    }return r.m = t, r.c = e, r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: true, get: n });
    }, r.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: true });
    }, r.t = function (t, e) {
      if (1 & e && (t = r(t)), 8 & e) return t;if (4 & e && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && t.__esModule) return t;var n = Object.create(null);if (r.r(n), Object.defineProperty(n, "default", { enumerable: true, value: t }), 2 & e && "string" != typeof t) for (var o in t) {
        r.d(n, o, function (e) {
          return t[e];
        }.bind(null, o));
      }return n;
    }, r.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };return r.d(e, "a", e), e;
    }, r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, r.p = "", r(r.s = 18);
  }([function (t, e) {
    t.exports = function () {
      return function () {};
    };
  }, function (t, e, r) {
    function n(t) {
      if (t) return function (t) {
        for (var e in n.prototype) {
          t[e] = n.prototype[e];
        }return t;
      }(t);
    }t.exports = n, n.prototype.on = n.prototype.addEventListener = function (t, e) {
      return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
    }, n.prototype.once = function (t, e) {
      function r() {
        this.off(t, r), e.apply(this, arguments);
      }return r.fn = e, this.on(t, r), this;
    }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function (t, e) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;var r,
          n = this._callbacks["$" + t];if (!n) return this;if (1 == arguments.length) return delete this._callbacks["$" + t], this;for (var o = 0; o < n.length; o++) {
        if ((r = n[o]) === e || r.fn === e) {
          n.splice(o, 1);break;
        }
      }return this;
    }, n.prototype.emit = function (t) {
      this._callbacks = this._callbacks || {};var e = [].slice.call(arguments, 1),
          r = this._callbacks["$" + t];if (r) for (var n = 0, o = (r = r.slice(0)).length; n < o; ++n) {
        r[n].apply(this, e);
      }return this;
    }, n.prototype.listeners = function (t) {
      return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
    }, n.prototype.hasListeners = function (t) {
      return !!this.listeners(t).length;
    };
  }, function (t, e, r) {
    var n,
        o = r(32),
        i = r(13),
        s = r(34),
        a = r(35),
        c = r(36);"undefined" != typeof ArrayBuffer && (n = r(37));var u = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
        h = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
        f = u || h;e.protocol = 3;var p = e.packets = { open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6 },
        l = o(p),
        d = { type: "error", data: "parser error" },
        y = r(38);function g(t, e, r) {
      for (var n = new Array(t.length), o = a(t.length, r), i = function i(t, r, o) {
        e(r, function (e, r) {
          n[t] = r, o(e, n);
        });
      }, s = 0; s < t.length; s++) {
        i(s, t[s], o);
      }
    }e.encodePacket = function (t, r, n, o) {
      "function" == typeof r && (o = r, r = false), "function" == typeof n && (o = n, n = null);var i = undefined === t.data ? undefined : t.data.buffer || t.data;if ("undefined" != typeof ArrayBuffer && i instanceof ArrayBuffer) return function (t, r, n) {
        if (!r) return e.encodeBase64Packet(t, n);var o = t.data,
            i = new Uint8Array(o),
            s = new Uint8Array(1 + o.byteLength);s[0] = p[t.type];for (var a = 0; a < i.length; a++) {
          s[a + 1] = i[a];
        }return n(s.buffer);
      }(t, r, o);if (undefined !== y && i instanceof y) return function (t, r, n) {
        if (!r) return e.encodeBase64Packet(t, n);if (f) return function (t, r, n) {
          if (!r) return e.encodeBase64Packet(t, n);var o = new FileReader();return o.onload = function () {
            e.encodePacket({ type: t.type, data: o.result }, r, true, n);
          }, o.readAsArrayBuffer(t.data);
        }(t, r, n);var o = new Uint8Array(1);o[0] = p[t.type];var i = new y([o.buffer, t.data]);return n(i);
      }(t, r, o);if (i && i.base64) return function (t, r) {
        var n = "b" + e.packets[t.type] + t.data.data;return r(n);
      }(t, o);var s = p[t.type];return undefined !== t.data && (s += n ? c.encode(String(t.data), { strict: false }) : String(t.data)), o("" + s);
    }, e.encodeBase64Packet = function (t, r) {
      var n,
          o = "b" + e.packets[t.type];if (undefined !== y && t.data instanceof y) {
        var i = new FileReader();return i.onload = function () {
          var t = i.result.split(",")[1];r(o + t);
        }, i.readAsDataURL(t.data);
      }try {
        n = String.fromCharCode.apply(null, new Uint8Array(t.data));
      } catch (e) {
        for (var s = new Uint8Array(t.data), a = new Array(s.length), c = 0; c < s.length; c++) {
          a[c] = s[c];
        }n = String.fromCharCode.apply(null, a);
      }return o += btoa(n), r(o);
    }, e.decodePacket = function (t, r, n) {
      if (undefined === t) return d;if ("string" == typeof t) {
        if ("b" === t.charAt(0)) return e.decodeBase64Packet(t.substr(1), r);if (n && false === (t = function (t) {
          try {
            t = c.decode(t, { strict: false });
          } catch (t) {
            return false;
          }return t;
        }(t))) return d;var o = t.charAt(0);return Number(o) == o && l[o] ? t.length > 1 ? { type: l[o], data: t.substring(1) } : { type: l[o] } : d;
      }o = new Uint8Array(t)[0];var i = s(t, 1);return y && "blob" === r && (i = new y([i])), { type: l[o], data: i };
    }, e.decodeBase64Packet = function (t, e) {
      var r = l[t.charAt(0)];if (!n) return { type: r, data: { base64: true, data: t.substr(1) } };var o = n.decode(t.substr(1));return "blob" === e && y && (o = new y([o])), { type: r, data: o };
    }, e.encodePayload = function (t, r, n) {
      "function" == typeof r && (n = r, r = null);var o = i(t);if (r && o) return y && !f ? e.encodePayloadAsBlob(t, n) : e.encodePayloadAsArrayBuffer(t, n);if (!t.length) return n("0:");g(t, function (t, n) {
        e.encodePacket(t, !!o && r, false, function (t) {
          n(null, function (t) {
            return t.length + ":" + t;
          }(t));
        });
      }, function (t, e) {
        return n(e.join(""));
      });
    }, e.decodePayload = function (t, r, n) {
      if ("string" != typeof t) return e.decodePayloadAsBinary(t, r, n);var o;if ("function" == typeof r && (n = r, r = null), "" === t) return n(d, 0, 1);for (var i, s, a = "", c = 0, u = t.length; c < u; c++) {
        var h = t.charAt(c);if (":" === h) {
          if ("" === a || a != (i = Number(a))) return n(d, 0, 1);if (a != (s = t.substr(c + 1, i)).length) return n(d, 0, 1);if (s.length) {
            if (o = e.decodePacket(s, r, false), d.type === o.type && d.data === o.data) return n(d, 0, 1);if (false === n(o, c + i, u)) return;
          }c += i, a = "";
        } else a += h;
      }return "" !== a ? n(d, 0, 1) : undefined;
    }, e.encodePayloadAsArrayBuffer = function (t, r) {
      if (!t.length) return r(new ArrayBuffer(0));g(t, function (t, r) {
        e.encodePacket(t, true, true, function (t) {
          return r(null, t);
        });
      }, function (t, e) {
        var n = e.reduce(function (t, e) {
          var r;return t + (r = "string" == typeof e ? e.length : e.byteLength).toString().length + r + 2;
        }, 0),
            o = new Uint8Array(n),
            i = 0;return e.forEach(function (t) {
          var e = "string" == typeof t,
              r = t;if (e) {
            for (var n = new Uint8Array(t.length), s = 0; s < t.length; s++) {
              n[s] = t.charCodeAt(s);
            }r = n.buffer;
          }o[i++] = e ? 0 : 1;var a = r.byteLength.toString();for (s = 0; s < a.length; s++) {
            o[i++] = parseInt(a[s]);
          }o[i++] = 255;for (n = new Uint8Array(r), s = 0; s < n.length; s++) {
            o[i++] = n[s];
          }
        }), r(o.buffer);
      });
    }, e.encodePayloadAsBlob = function (t, r) {
      g(t, function (t, r) {
        e.encodePacket(t, true, true, function (t) {
          var e = new Uint8Array(1);if (e[0] = 1, "string" == typeof t) {
            for (var n = new Uint8Array(t.length), o = 0; o < t.length; o++) {
              n[o] = t.charCodeAt(o);
            }t = n.buffer, e[0] = 0;
          }var i = (t instanceof ArrayBuffer ? t.byteLength : t.size).toString(),
              s = new Uint8Array(i.length + 1);for (o = 0; o < i.length; o++) {
            s[o] = parseInt(i[o]);
          }if (s[i.length] = 255, y) {
            var a = new y([e.buffer, s.buffer, t]);r(null, a);
          }
        });
      }, function (t, e) {
        return r(new y(e));
      });
    }, e.decodePayloadAsBinary = function (t, r, n) {
      "function" == typeof r && (n = r, r = null);for (var o = t, i = []; o.byteLength > 0;) {
        for (var a = new Uint8Array(o), c = 0 === a[0], u = "", h = 1; 255 !== a[h]; h++) {
          if (u.length > 310) return n(d, 0, 1);u += a[h];
        }o = s(o, 2 + u.length), u = parseInt(u);var f = s(o, 0, u);if (c) try {
          f = String.fromCharCode.apply(null, new Uint8Array(f));
        } catch (t) {
          var p = new Uint8Array(f);f = "";for (h = 0; h < p.length; h++) {
            f += String.fromCharCode(p[h]);
          }
        }i.push(f), o = s(o, u);
      }var l = i.length;i.forEach(function (t, o) {
        n(e.decodePacket(t, r, true), o, l);
      });
    };
  }, function (t, e, r) {
    var n = r(0)("socket.io-parser"),
        o = r(1),
        i = r(25),
        s = r(7),
        a = r(8);function c() {}e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = c, e.Decoder = f;var u = e.ERROR + '"encode error"';function h(t) {
      var r = "" + t.type;if (e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (r += t.attachments + "-"), t.nsp && "/" !== t.nsp && (r += t.nsp + ","), null != t.id && (r += t.id), null != t.data) {
        var o = function (t) {
          try {
            return JSON.stringify(t);
          } catch (t) {
            return false;
          }
        }(t.data);if (false === o) return u;r += o;
      }return n("encoded %j as %s", t, r), r;
    }function f() {
      this.reconstructor = null;
    }function p(t) {
      this.reconPack = t, this.buffers = [];
    }function l(t) {
      return { type: e.ERROR, data: "parser error: " + t };
    }c.prototype.encode = function (t, r) {
      (n("encoding packet %j", t), e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type) ? function (t, e) {
        i.removeBlobs(t, function (t) {
          var r = i.deconstructPacket(t),
              n = h(r.packet),
              o = r.buffers;o.unshift(n), e(o);
        });
      }(t, r) : r([h(t)]);
    }, o(f.prototype), f.prototype.add = function (t) {
      var r;if ("string" == typeof t) r = function (t) {
        var r = 0,
            o = { type: Number(t.charAt(0)) };if (null == e.types[o.type]) return l("unknown packet type " + o.type);if (e.BINARY_EVENT === o.type || e.BINARY_ACK === o.type) {
          for (var i = ""; "-" !== t.charAt(++r) && (i += t.charAt(r), r != t.length);) {}if (i != Number(i) || "-" !== t.charAt(r)) throw new Error("Illegal attachments");o.attachments = Number(i);
        }if ("/" === t.charAt(r + 1)) for (o.nsp = ""; ++r;) {
          if ("," === (c = t.charAt(r))) break;if (o.nsp += c, r === t.length) break;
        } else o.nsp = "/";var a = t.charAt(r + 1);if ("" !== a && Number(a) == a) {
          for (o.id = ""; ++r;) {
            var c;if (null == (c = t.charAt(r)) || Number(c) != c) {
              --r;break;
            }if (o.id += t.charAt(r), r === t.length) break;
          }o.id = Number(o.id);
        }if (t.charAt(++r)) {
          var u = function (t) {
            try {
              return JSON.parse(t);
            } catch (t) {
              return false;
            }
          }(t.substr(r));if (!(false !== u && (o.type === e.ERROR || s(u)))) return l("invalid payload");o.data = u;
        }return n("decoded %s as %j", t, o), o;
      }(t), e.BINARY_EVENT === r.type || e.BINARY_ACK === r.type ? (this.reconstructor = new p(r), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", r)) : this.emit("decoded", r);else {
        if (!a(t) && !t.base64) throw new Error("Unknown type: " + t);if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");(r = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, this.emit("decoded", r));
      }
    }, f.prototype.destroy = function () {
      this.reconstructor && this.reconstructor.finishedReconstruction();
    }, p.prototype.takeBinaryData = function (t) {
      if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
        var e = i.reconstructPacket(this.reconPack, this.buffers);return this.finishedReconstruction(), e;
      }return null;
    }, p.prototype.finishedReconstruction = function () {
      this.reconPack = null, this.buffers = [];
    };
  }, function (t, e, r) {
    "use strict";

    (function (t) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <http://feross.org>
       * @license  MIT
       */
      var n = r(26),
          o = r(27),
          i = r(28);function s() {
        return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }function a(t, e) {
        if (s() < e) throw new RangeError("Invalid typed array length");return c.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = c.prototype : (null === t && (t = new c(e)), t.length = e), t;
      }function c(t, e, r) {
        if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(t, e, r);if ("number" == typeof t) {
          if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");return f(this, t);
        }return u(this, t, e, r);
      }function u(t, e, r, n) {
        if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, r, n) {
          if (e.byteLength, r < 0 || e.byteLength < r) throw new RangeError("'offset' is out of bounds");if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");e = undefined === r && undefined === n ? new Uint8Array(e) : undefined === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n);c.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = c.prototype : t = p(t, e);return t;
        }(t, e, r, n) : "string" == typeof e ? function (t, e, r) {
          "string" == typeof r && "" !== r || (r = "utf8");if (!c.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');var n = 0 | d(e, r),
              o = (t = a(t, n)).write(e, r);o !== n && (t = t.slice(0, o));return t;
        }(t, e, r) : function (t, e) {
          if (c.isBuffer(e)) {
            var r = 0 | l(e.length);return 0 === (t = a(t, r)).length || e.copy(t, 0, 0, r), t;
          }if (e) {
            if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (n = e.length) != n ? a(t, 0) : p(t, e);if ("Buffer" === e.type && i(e.data)) return p(t, e.data);
          }var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
        }(t, e);
      }function h(t) {
        if ("number" != typeof t) throw new TypeError('"size" argument must be a number');if (t < 0) throw new RangeError('"size" argument must not be negative');
      }function f(t, e) {
        if (h(e), t = a(t, e < 0 ? 0 : 0 | l(e)), !c.TYPED_ARRAY_SUPPORT) for (var r = 0; r < e; ++r) {
          t[r] = 0;
        }return t;
      }function p(t, e) {
        var r = e.length < 0 ? 0 : 0 | l(e.length);t = a(t, r);for (var n = 0; n < r; n += 1) {
          t[n] = 255 & e[n];
        }return t;
      }function l(t) {
        if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");return 0 | t;
      }function d(t, e) {
        if (c.isBuffer(t)) return t.length;if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;"string" != typeof t && (t = "" + t);var r = t.length;if (0 === r) return 0;for (var n = false;;) {
          switch (e) {case "ascii":case "latin1":case "binary":
              return r;case "utf8":case "utf-8":case undefined:
              return q(t).length;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
              return 2 * r;case "hex":
              return r >>> 1;case "base64":
              return Y(t).length;default:
              if (n) return q(t).length;e = ("" + e).toLowerCase(), n = true;}
        }
      }function y(t, e, r) {
        var n = false;if ((undefined === e || e < 0) && (e = 0), e > this.length) return "";if ((undefined === r || r > this.length) && (r = this.length), r <= 0) return "";if ((r >>>= 0) <= (e >>>= 0)) return "";for (t || (t = "utf8");;) {
          switch (t) {case "hex":
              return C(this, e, r);case "utf8":case "utf-8":
              return O(this, e, r);case "ascii":
              return B(this, e, r);case "latin1":case "binary":
              return x(this, e, r);case "base64":
              return S(this, e, r);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
              return R(this, e, r);default:
              if (n) throw new TypeError("Unknown encoding: " + t);t = (t + "").toLowerCase(), n = true;}
        }
      }function g(t, e, r) {
        var n = t[e];t[e] = t[r], t[r] = n;
      }function v(t, e, r, n, o) {
        if (0 === t.length) return -1;if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = o ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
          if (o) return -1;r = t.length - 1;
        } else if (r < 0) {
          if (!o) return -1;r = 0;
        }if ("string" == typeof e && (e = c.from(e, n)), c.isBuffer(e)) return 0 === e.length ? -1 : m(t, e, r, n, o);if ("number" == typeof e) return e &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : m(t, [e], r, n, o);throw new TypeError("val must be string, number or Buffer");
      }function m(t, e, r, n, o) {
        var i,
            s = 1,
            a = t.length,
            c = e.length;if (undefined !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
          if (t.length < 2 || e.length < 2) return -1;s = 2, a /= 2, c /= 2, r /= 2;
        }function u(t, e) {
          return 1 === s ? t[e] : t.readUInt16BE(e * s);
        }if (o) {
          var h = -1;for (i = r; i < a; i++) {
            if (u(t, i) === u(e, -1 === h ? 0 : i - h)) {
              if (-1 === h && (h = i), i - h + 1 === c) return h * s;
            } else -1 !== h && (i -= i - h), h = -1;
          }
        } else for (r + c > a && (r = a - c), i = r; i >= 0; i--) {
          for (var f = true, p = 0; p < c; p++) {
            if (u(t, i + p) !== u(e, p)) {
              f = false;break;
            }
          }if (f) return i;
        }return -1;
      }function b(t, e, r, n) {
        r = Number(r) || 0;var o = t.length - r;n ? (n = Number(n)) > o && (n = o) : n = o;var i = e.length;if (i % 2 != 0) throw new TypeError("Invalid hex string");n > i / 2 && (n = i / 2);for (var s = 0; s < n; ++s) {
          var a = parseInt(e.substr(2 * s, 2), 16);if (isNaN(a)) return s;t[r + s] = a;
        }return s;
      }function w(t, e, r, n) {
        return z(q(e, t.length - r), t, r, n);
      }function A(t, e, r, n) {
        return z(function (t) {
          for (var e = [], r = 0; r < t.length; ++r) {
            e.push(255 & t.charCodeAt(r));
          }return e;
        }(e), t, r, n);
      }function k(t, e, r, n) {
        return A(t, e, r, n);
      }function E(t, e, r, n) {
        return z(Y(e), t, r, n);
      }function _(t, e, r, n) {
        return z(function (t, e) {
          for (var r, n, o, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) {
            r = t.charCodeAt(s), n = r >> 8, o = r % 256, i.push(o), i.push(n);
          }return i;
        }(e, t.length - r), t, r, n);
      }function S(t, e, r) {
        return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r));
      }function O(t, e, r) {
        r = Math.min(t.length, r);for (var n = [], o = e; o < r;) {
          var i,
              s,
              a,
              c,
              u = t[o],
              h = null,
              f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;if (o + f <= r) switch (f) {case 1:
              u < 128 && (h = u);break;case 2:
              128 == (192 & (i = t[o + 1])) && (c = (31 & u) << 6 | 63 & i) > 127 && (h = c);break;case 3:
              i = t[o + 1], s = t[o + 2], 128 == (192 & i) && 128 == (192 & s) && (c = (15 & u) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (c < 55296 || c > 57343) && (h = c);break;case 4:
              i = t[o + 1], s = t[o + 2], a = t[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (c = (15 & u) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && c < 1114112 && (h = c);}null === h ? (h = 65533, f = 1) : h > 65535 && (h -= 65536, n.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), n.push(h), o += f;
        }return function (t) {
          var e = t.length;if (e <= 4096) return String.fromCharCode.apply(String, t);var r = "",
              n = 0;for (; n < e;) {
            r += String.fromCharCode.apply(String, t.slice(n, n += 4096));
          }return r;
        }(n);
      }e.Buffer = c, e.SlowBuffer = function (t) {
        +t != t && (t = 0);return c.alloc(+t);
      }, e.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = undefined !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
        try {
          var t = new Uint8Array(1);return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
              return 42;
            } }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
        } catch (t) {
          return false;
        }
      }(), e.kMaxLength = s(), c.poolSize = 8192, c._augment = function (t) {
        return t.__proto__ = c.prototype, t;
      }, c.from = function (t, e, r) {
        return u(null, t, e, r);
      }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, { value: null, configurable: true })), c.alloc = function (t, e, r) {
        return function (t, e, r, n) {
          return h(e), e <= 0 ? a(t, e) : undefined !== r ? "string" == typeof n ? a(t, e).fill(r, n) : a(t, e).fill(r) : a(t, e);
        }(null, t, e, r);
      }, c.allocUnsafe = function (t) {
        return f(null, t);
      }, c.allocUnsafeSlow = function (t) {
        return f(null, t);
      }, c.isBuffer = function (t) {
        return !(null == t || !t._isBuffer);
      }, c.compare = function (t, e) {
        if (!c.isBuffer(t) || !c.isBuffer(e)) throw new TypeError("Arguments must be Buffers");if (t === e) return 0;for (var r = t.length, n = e.length, o = 0, i = Math.min(r, n); o < i; ++o) {
          if (t[o] !== e[o]) {
            r = t[o], n = e[o];break;
          }
        }return r < n ? -1 : n < r ? 1 : 0;
      }, c.isEncoding = function (t) {
        switch (String(t).toLowerCase()) {case "hex":case "utf8":case "utf-8":case "ascii":case "latin1":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
            return true;default:
            return false;}
      }, c.concat = function (t, e) {
        if (!i(t)) throw new TypeError('"list" argument must be an Array of Buffers');if (0 === t.length) return c.alloc(0);var r;if (undefined === e) for (e = 0, r = 0; r < t.length; ++r) {
          e += t[r].length;
        }var n = c.allocUnsafe(e),
            o = 0;for (r = 0; r < t.length; ++r) {
          var s = t[r];if (!c.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');s.copy(n, o), o += s.length;
        }return n;
      }, c.byteLength = d, c.prototype._isBuffer = true, c.prototype.swap16 = function () {
        var t = this.length;if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");for (var e = 0; e < t; e += 2) {
          g(this, e, e + 1);
        }return this;
      }, c.prototype.swap32 = function () {
        var t = this.length;if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");for (var e = 0; e < t; e += 4) {
          g(this, e, e + 3), g(this, e + 1, e + 2);
        }return this;
      }, c.prototype.swap64 = function () {
        var t = this.length;if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");for (var e = 0; e < t; e += 8) {
          g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4);
        }return this;
      }, c.prototype.toString = function () {
        var t = 0 | this.length;return 0 === t ? "" : 0 === arguments.length ? O(this, 0, t) : y.apply(this, arguments);
      }, c.prototype.equals = function (t) {
        if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");return this === t || 0 === c.compare(this, t);
      }, c.prototype.inspect = function () {
        var t = "",
            r = e.INSPECT_MAX_BYTES;return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">";
      }, c.prototype.compare = function (t, e, r, n, o) {
        if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");if (undefined === e && (e = 0), undefined === r && (r = t ? t.length : 0), undefined === n && (n = 0), undefined === o && (o = this.length), e < 0 || r > t.length || n < 0 || o > this.length) throw new RangeError("out of range index");if (n >= o && e >= r) return 0;if (n >= o) return -1;if (e >= r) return 1;if (this === t) return 0;for (var i = (o >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (e >>>= 0), a = Math.min(i, s), u = this.slice(n, o), h = t.slice(e, r), f = 0; f < a; ++f) {
          if (u[f] !== h[f]) {
            i = u[f], s = h[f];break;
          }
        }return i < s ? -1 : s < i ? 1 : 0;
      }, c.prototype.includes = function (t, e, r) {
        return -1 !== this.indexOf(t, e, r);
      }, c.prototype.indexOf = function (t, e, r) {
        return v(this, t, e, r, true);
      }, c.prototype.lastIndexOf = function (t, e, r) {
        return v(this, t, e, r, false);
      }, c.prototype.write = function (t, e, r, n) {
        if (undefined === e) n = "utf8", r = this.length, e = 0;else if (undefined === r && "string" == typeof e) n = e, r = this.length, e = 0;else {
          if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e |= 0, isFinite(r) ? (r |= 0, undefined === n && (n = "utf8")) : (n = r, r = undefined);
        }var o = this.length - e;if ((undefined === r || r > o) && (r = o), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");n || (n = "utf8");for (var i = false;;) {
          switch (n) {case "hex":
              return b(this, t, e, r);case "utf8":case "utf-8":
              return w(this, t, e, r);case "ascii":
              return A(this, t, e, r);case "latin1":case "binary":
              return k(this, t, e, r);case "base64":
              return E(this, t, e, r);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
              return _(this, t, e, r);default:
              if (i) throw new TypeError("Unknown encoding: " + n);n = ("" + n).toLowerCase(), i = true;}
        }
      }, c.prototype.toJSON = function () {
        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
      };function B(t, e, r) {
        var n = "";r = Math.min(t.length, r);for (var o = e; o < r; ++o) {
          n += String.fromCharCode(127 & t[o]);
        }return n;
      }function x(t, e, r) {
        var n = "";r = Math.min(t.length, r);for (var o = e; o < r; ++o) {
          n += String.fromCharCode(t[o]);
        }return n;
      }function C(t, e, r) {
        var n = t.length;(!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);for (var o = "", i = e; i < r; ++i) {
          o += M(t[i]);
        }return o;
      }function R(t, e, r) {
        for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2) {
          o += String.fromCharCode(n[i] + 256 * n[i + 1]);
        }return o;
      }function P(t, e, r) {
        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
      }function T(t, e, r, n, o, i) {
        if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');if (r + n > t.length) throw new RangeError("Index out of range");
      }function j(t, e, r, n) {
        e < 0 && (e = 65535 + e + 1);for (var o = 0, i = Math.min(t.length - r, 2); o < i; ++o) {
          t[r + o] = (e & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o);
        }
      }function N(t, e, r, n) {
        e < 0 && (e = 4294967295 + e + 1);for (var o = 0, i = Math.min(t.length - r, 4); o < i; ++o) {
          t[r + o] = e >>> 8 * (n ? o : 3 - o) & 255;
        }
      }function L(t, e, r, n, o, i) {
        if (r + n > t.length) throw new RangeError("Index out of range");if (r < 0) throw new RangeError("Index out of range");
      }function U(t, e, r, n, i) {
        return i || L(t, 0, r, 4), o.write(t, e, r, n, 23, 4), r + 4;
      }function I(t, e, r, n, i) {
        return i || L(t, 0, r, 8), o.write(t, e, r, n, 52, 8), r + 8;
      }c.prototype.slice = function (t, e) {
        var r,
            n = this.length;if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = undefined === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t), c.TYPED_ARRAY_SUPPORT) (r = this.subarray(t, e)).__proto__ = c.prototype;else {
          var o = e - t;r = new c(o, undefined);for (var i = 0; i < o; ++i) {
            r[i] = this[i + t];
          }
        }return r;
      }, c.prototype.readUIntLE = function (t, e, r) {
        t |= 0, e |= 0, r || P(t, e, this.length);for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) {
          n += this[t + i] * o;
        }return n;
      }, c.prototype.readUIntBE = function (t, e, r) {
        t |= 0, e |= 0, r || P(t, e, this.length);for (var n = this[t + --e], o = 1; e > 0 && (o *= 256);) {
          n += this[t + --e] * o;
        }return n;
      }, c.prototype.readUInt8 = function (t, e) {
        return e || P(t, 1, this.length), this[t];
      }, c.prototype.readUInt16LE = function (t, e) {
        return e || P(t, 2, this.length), this[t] | this[t + 1] << 8;
      }, c.prototype.readUInt16BE = function (t, e) {
        return e || P(t, 2, this.length), this[t] << 8 | this[t + 1];
      }, c.prototype.readUInt32LE = function (t, e) {
        return e || P(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
      }, c.prototype.readUInt32BE = function (t, e) {
        return e || P(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
      }, c.prototype.readIntLE = function (t, e, r) {
        t |= 0, e |= 0, r || P(t, e, this.length);for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) {
          n += this[t + i] * o;
        }return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n;
      }, c.prototype.readIntBE = function (t, e, r) {
        t |= 0, e |= 0, r || P(t, e, this.length);for (var n = e, o = 1, i = this[t + --n]; n > 0 && (o *= 256);) {
          i += this[t + --n] * o;
        }return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
      }, c.prototype.readInt8 = function (t, e) {
        return e || P(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
      }, c.prototype.readInt16LE = function (t, e) {
        e || P(t, 2, this.length);var r = this[t] | this[t + 1] << 8;return 32768 & r ? 4294901760 | r : r;
      }, c.prototype.readInt16BE = function (t, e) {
        e || P(t, 2, this.length);var r = this[t + 1] | this[t] << 8;return 32768 & r ? 4294901760 | r : r;
      }, c.prototype.readInt32LE = function (t, e) {
        return e || P(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
      }, c.prototype.readInt32BE = function (t, e) {
        return e || P(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
      }, c.prototype.readFloatLE = function (t, e) {
        return e || P(t, 4, this.length), o.read(this, t, true, 23, 4);
      }, c.prototype.readFloatBE = function (t, e) {
        return e || P(t, 4, this.length), o.read(this, t, false, 23, 4);
      }, c.prototype.readDoubleLE = function (t, e) {
        return e || P(t, 8, this.length), o.read(this, t, true, 52, 8);
      }, c.prototype.readDoubleBE = function (t, e) {
        return e || P(t, 8, this.length), o.read(this, t, false, 52, 8);
      }, c.prototype.writeUIntLE = function (t, e, r, n) {
        (t = +t, e |= 0, r |= 0, n) || T(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);var o = 1,
            i = 0;for (this[e] = 255 & t; ++i < r && (o *= 256);) {
          this[e + i] = t / o & 255;
        }return e + r;
      }, c.prototype.writeUIntBE = function (t, e, r, n) {
        (t = +t, e |= 0, r |= 0, n) || T(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);var o = r - 1,
            i = 1;for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) {
          this[e + o] = t / i & 255;
        }return e + r;
      }, c.prototype.writeUInt8 = function (t, e, r) {
        return t = +t, e |= 0, r || T(this, t, e, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1;
      }, c.prototype.writeUInt16LE = function (t, e, r) {
        return t = +t, e |= 0, r || T(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : j(this, t, e, true), e + 2;
      }, c.prototype.writeUInt16BE = function (t, e, r) {
        return t = +t, e |= 0, r || T(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : j(this, t, e, false), e + 2;
      }, c.prototype.writeUInt32LE = function (t, e, r) {
        return t = +t, e |= 0, r || T(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : N(this, t, e, true), e + 4;
      }, c.prototype.writeUInt32BE = function (t, e, r) {
        return t = +t, e |= 0, r || T(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : N(this, t, e, false), e + 4;
      }, c.prototype.writeIntLE = function (t, e, r, n) {
        if (t = +t, e |= 0, !n) {
          var o = Math.pow(2, 8 * r - 1);T(this, t, e, r, o - 1, -o);
        }var i = 0,
            s = 1,
            a = 0;for (this[e] = 255 & t; ++i < r && (s *= 256);) {
          t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255;
        }return e + r;
      }, c.prototype.writeIntBE = function (t, e, r, n) {
        if (t = +t, e |= 0, !n) {
          var o = Math.pow(2, 8 * r - 1);T(this, t, e, r, o - 1, -o);
        }var i = r - 1,
            s = 1,
            a = 0;for (this[e + i] = 255 & t; --i >= 0 && (s *= 256);) {
          t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255;
        }return e + r;
      }, c.prototype.writeInt8 = function (t, e, r) {
        return t = +t, e |= 0, r || T(this, t, e, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
      }, c.prototype.writeInt16LE = function (t, e, r) {
        return t = +t, e |= 0, r || T(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : j(this, t, e, true), e + 2;
      }, c.prototype.writeInt16BE = function (t, e, r) {
        return t = +t, e |= 0, r || T(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : j(this, t, e, false), e + 2;
      }, c.prototype.writeInt32LE = function (t, e, r) {
        return t = +t, e |= 0, r || T(this, t, e, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : N(this, t, e, true), e + 4;
      }, c.prototype.writeInt32BE = function (t, e, r) {
        return t = +t, e |= 0, r || T(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : N(this, t, e, false), e + 4;
      }, c.prototype.writeFloatLE = function (t, e, r) {
        return U(this, t, e, true, r);
      }, c.prototype.writeFloatBE = function (t, e, r) {
        return U(this, t, e, false, r);
      }, c.prototype.writeDoubleLE = function (t, e, r) {
        return I(this, t, e, true, r);
      }, c.prototype.writeDoubleBE = function (t, e, r) {
        return I(this, t, e, false, r);
      }, c.prototype.copy = function (t, e, r, n) {
        if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;if (0 === t.length || 0 === this.length) return 0;if (e < 0) throw new RangeError("targetStart out of bounds");if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");if (n < 0) throw new RangeError("sourceEnd out of bounds");n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);var o,
            i = n - r;if (this === t && r < e && e < n) for (o = i - 1; o >= 0; --o) {
          t[o + e] = this[o + r];
        } else if (i < 1e3 || !c.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) {
          t[o + e] = this[o + r];
        } else Uint8Array.prototype.set.call(t, this.subarray(r, r + i), e);return i;
      }, c.prototype.fill = function (t, e, r, n) {
        if ("string" == typeof t) {
          if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === t.length) {
            var o = t.charCodeAt(0);o < 256 && (t = o);
          }if (undefined !== n && "string" != typeof n) throw new TypeError("encoding must be a string");if ("string" == typeof n && !c.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
        } else "number" == typeof t && (t &= 255);if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");if (r <= e) return this;var i;if (e >>>= 0, r = undefined === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t) for (i = e; i < r; ++i) {
          this[i] = t;
        } else {
          var s = c.isBuffer(t) ? t : q(new c(t, n).toString()),
              a = s.length;for (i = 0; i < r - e; ++i) {
            this[i + e] = s[i % a];
          }
        }return this;
      };var D = /[^+\/0-9A-Za-z-_]/g;function M(t) {
        return t < 16 ? "0" + t.toString(16) : t.toString(16);
      }function q(t, e) {
        var r;e = e || Infinity;for (var n = t.length, o = null, i = [], s = 0; s < n; ++s) {
          if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
            if (!o) {
              if (r > 56319) {
                (e -= 3) > -1 && i.push(239, 191, 189);continue;
              }if (s + 1 === n) {
                (e -= 3) > -1 && i.push(239, 191, 189);continue;
              }o = r;continue;
            }if (r < 56320) {
              (e -= 3) > -1 && i.push(239, 191, 189), o = r;continue;
            }r = 65536 + (o - 55296 << 10 | r - 56320);
          } else o && (e -= 3) > -1 && i.push(239, 191, 189);if (o = null, r < 128) {
            if ((e -= 1) < 0) break;i.push(r);
          } else if (r < 2048) {
            if ((e -= 2) < 0) break;i.push(r >> 6 | 192, 63 & r | 128);
          } else if (r < 65536) {
            if ((e -= 3) < 0) break;i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
          } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");if ((e -= 4) < 0) break;i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
          }
        }return i;
      }function Y(t) {
        return n.toByteArray(function (t) {
          if ((t = function (t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
          }(t).replace(D, "")).length < 2) return "";for (; t.length % 4 != 0;) {
            t += "=";
          }return t;
        }(t));
      }function z(t, e, r, n) {
        for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o) {
          e[o + r] = t[o];
        }return o;
      }
    }).call(this, r(9));
  }, function (t, e) {
    e.encode = function (t) {
      var e = "";for (var r in t) {
        t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
      }return e;
    }, e.decode = function (t) {
      for (var e = {}, r = t.split("&"), n = 0, o = r.length; n < o; n++) {
        var i = r[n].split("=");e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
      }return e;
    };
  }, function (t, e) {
    var r = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        n = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];t.exports = function (t) {
      var e = t,
          o = t.indexOf("["),
          i = t.indexOf("]");-1 != o && -1 != i && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length));for (var s = r.exec(t || ""), a = {}, c = 14; c--;) {
        a[n[c]] = s[c] || "";
      }return -1 != o && -1 != i && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = true), a;
    };
  }, function (t, e) {
    var r = {}.toString;t.exports = Array.isArray || function (t) {
      return "[object Array]" == r.call(t);
    };
  }, function (t, e, r) {
    (function (e) {
      t.exports = function (t) {
        return r && e.isBuffer(t) || n && (t instanceof ArrayBuffer || function (t) {
          return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer;
        }(t));
      };var r = "function" == typeof e && "function" == typeof e.isBuffer,
          n = "function" == typeof ArrayBuffer;
    }).call(this, r(4).Buffer);
  }, function (t, e) {
    var r;r = function () {
      return this;
    }();try {
      r = r || new Function("return this")();
    } catch (t) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (r = window);
    }t.exports = r;
  }, function (t, e, r) {
    var n = r(29),
        o = r(15),
        i = r(1),
        s = r(3),
        a = r(16),
        c = r(17),
        u = r(0)("socket.io-client:manager"),
        h = r(14),
        f = r(53),
        p = Object.prototype.hasOwnProperty;function l(t, e) {
      if (!(this instanceof l)) return new l(t, e);t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (e = t, t = undefined), (e = e || {}).path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(false !== e.reconnection), this.reconnectionAttempts(e.reconnectionAttempts || Infinity), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new f({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = false, this.packetBuffer = [];var r = e.parser || s;this.encoder = new r.Encoder(), this.decoder = new r.Decoder(), this.autoConnect = false !== e.autoConnect, this.autoConnect && this.open();
    }t.exports = l, l.prototype.emitAll = function () {
      for (var t in this.emit.apply(this, arguments), this.nsps) {
        p.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments);
      }
    }, l.prototype.updateSocketIds = function () {
      for (var t in this.nsps) {
        p.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t));
      }
    }, l.prototype.generateId = function (t) {
      return ("/" === t ? "" : t + "#") + this.engine.id;
    }, i(l.prototype), l.prototype.reconnection = function (t) {
      return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;
    }, l.prototype.reconnectionAttempts = function (t) {
      return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts;
    }, l.prototype.reconnectionDelay = function (t) {
      return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay;
    }, l.prototype.randomizationFactor = function (t) {
      return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor;
    }, l.prototype.reconnectionDelayMax = function (t) {
      return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax;
    }, l.prototype.timeout = function (t) {
      return arguments.length ? (this._timeout = t, this) : this._timeout;
    }, l.prototype.maybeReconnectOnOpen = function () {
      !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
    }, l.prototype.open = l.prototype.connect = function (t, e) {
      if (u("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;u("opening %s", this.uri), this.engine = n(this.uri, this.opts);var r = this.engine,
          o = this;this.readyState = "opening", this.skipReconnect = false;var i = a(r, "open", function () {
        o.onopen(), t && t();
      }),
          s = a(r, "error", function (e) {
        if (u("connect_error"), o.cleanup(), o.readyState = "closed", o.emitAll("connect_error", e), t) {
          var r = new Error("Connection error");r.data = e, t(r);
        } else o.maybeReconnectOnOpen();
      });if (false !== this._timeout) {
        var c = this._timeout;u("connect attempt will timeout after %d", c);var h = setTimeout(function () {
          u("connect attempt timed out after %d", c), i.destroy(), r.close(), r.emit("error", "timeout"), o.emitAll("connect_timeout", c);
        }, c);this.subs.push({ destroy: function destroy() {
            clearTimeout(h);
          } });
      }return this.subs.push(i), this.subs.push(s), this;
    }, l.prototype.onopen = function () {
      u("open"), this.cleanup(), this.readyState = "open", this.emit("open");var t = this.engine;this.subs.push(a(t, "data", c(this, "ondata"))), this.subs.push(a(t, "ping", c(this, "onping"))), this.subs.push(a(t, "pong", c(this, "onpong"))), this.subs.push(a(t, "error", c(this, "onerror"))), this.subs.push(a(t, "close", c(this, "onclose"))), this.subs.push(a(this.decoder, "decoded", c(this, "ondecoded")));
    }, l.prototype.onping = function () {
      this.lastPing = new Date(), this.emitAll("ping");
    }, l.prototype.onpong = function () {
      this.emitAll("pong", new Date() - this.lastPing);
    }, l.prototype.ondata = function (t) {
      this.decoder.add(t);
    }, l.prototype.ondecoded = function (t) {
      this.emit("packet", t);
    }, l.prototype.onerror = function (t) {
      u("error", t), this.emitAll("error", t);
    }, l.prototype.socket = function (t, e) {
      var r = this.nsps[t];if (!r) {
        r = new o(this, t, e), this.nsps[t] = r;var n = this;r.on("connecting", i), r.on("connect", function () {
          r.id = n.generateId(t);
        }), this.autoConnect && i();
      }function i() {
        ~h(n.connecting, r) || n.connecting.push(r);
      }return r;
    }, l.prototype.destroy = function (t) {
      var e = h(this.connecting, t);~e && this.connecting.splice(e, 1), this.connecting.length || this.close();
    }, l.prototype.packet = function (t) {
      u("writing packet %j", t);var e = this;t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = true, this.encoder.encode(t, function (r) {
        for (var n = 0; n < r.length; n++) {
          e.engine.write(r[n], t.options);
        }e.encoding = false, e.processPacketQueue();
      }));
    }, l.prototype.processPacketQueue = function () {
      if (this.packetBuffer.length > 0 && !this.encoding) {
        var t = this.packetBuffer.shift();this.packet(t);
      }
    }, l.prototype.cleanup = function () {
      u("cleanup");for (var t = this.subs.length, e = 0; e < t; e++) {
        this.subs.shift().destroy();
      }this.packetBuffer = [], this.encoding = false, this.lastPing = null, this.decoder.destroy();
    }, l.prototype.close = l.prototype.disconnect = function () {
      u("disconnect"), this.skipReconnect = true, this.reconnecting = false, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();
    }, l.prototype.onclose = function (t) {
      u("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect();
    }, l.prototype.reconnect = function () {
      if (this.reconnecting || this.skipReconnect) return this;var t = this;if (this.backoff.attempts >= this._reconnectionAttempts) u("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = false;else {
        var e = this.backoff.duration();u("will wait %dms before reconnect attempt", e), this.reconnecting = true;var r = setTimeout(function () {
          t.skipReconnect || (u("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function (e) {
            e ? (u("reconnect attempt error"), t.reconnecting = false, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (u("reconnect success"), t.onreconnect());
          }));
        }, e);this.subs.push({ destroy: function destroy() {
            clearTimeout(r);
          } });
      }
    }, l.prototype.onreconnect = function () {
      var t = this.backoff.attempts;this.reconnecting = false, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t);
    };
  }, function (t, e, r) {
    var n = r(31);e.websocket = n;
  }, function (t, e, r) {
    var n = r(2),
        o = r(1);function i(t) {
      this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || false, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.withCredentials = t.withCredentials, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode = t.forceNode, this.isReactNative = t.isReactNative, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress;
    }t.exports = i, o(i.prototype), i.prototype.onError = function (t, e) {
      var r = new Error(t);return r.type = "TransportError", r.description = e, this.emit("error", r), this;
    }, i.prototype.open = function () {
      return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this;
    }, i.prototype.close = function () {
      return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;
    }, i.prototype.send = function (t) {
      if ("open" !== this.readyState) throw new Error("Transport not open");this.write(t);
    }, i.prototype.onOpen = function () {
      this.readyState = "open", this.writable = true, this.emit("open");
    }, i.prototype.onData = function (t) {
      var e = n.decodePacket(t, this.socket.binaryType);this.onPacket(e);
    }, i.prototype.onPacket = function (t) {
      this.emit("packet", t);
    }, i.prototype.onClose = function () {
      this.readyState = "closed", this.emit("close");
    };
  }, function (t, e, r) {
    (function (e) {
      var n = r(33),
          o = Object.prototype.toString,
          i = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === o.call(Blob),
          s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o.call(File);t.exports = function t(r) {
        if (!r || "object" != (typeof r === "undefined" ? "undefined" : _typeof(r))) return false;if (n(r)) {
          for (var o = 0, a = r.length; o < a; o++) {
            if (t(r[o])) return true;
          }return false;
        }if ("function" == typeof e && e.isBuffer && e.isBuffer(r) || "function" == typeof ArrayBuffer && r instanceof ArrayBuffer || i && r instanceof Blob || s && r instanceof File) return true;if (r.toJSON && "function" == typeof r.toJSON && 1 === arguments.length) return t(r.toJSON(), true);for (var c in r) {
          if (Object.prototype.hasOwnProperty.call(r, c) && t(r[c])) return true;
        }return false;
      };
    }).call(this, r(4).Buffer);
  }, function (t, e) {
    var r = [].indexOf;t.exports = function (t, e) {
      if (r) return t.indexOf(e);for (var n = 0; n < t.length; ++n) {
        if (t[n] === e) return n;
      }return -1;
    };
  }, function (t, e, r) {
    var n = r(3),
        o = r(1),
        i = r(52),
        s = r(16),
        a = r(17),
        c = r(0)("socket.io-client:socket"),
        u = r(5),
        h = r(13);t.exports = l;var f = { connect: 1, connect_error: 1, connect_timeout: 1, connecting: 1, disconnect: 1, error: 1, reconnect: 1, reconnect_attempt: 1, reconnect_failed: 1, reconnect_error: 1, reconnecting: 1, ping: 1, pong: 1 },
        p = o.prototype.emit;function l(t, e, r) {
      this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = false, this.disconnected = true, this.flags = {}, r && r.query && (this.query = r.query), this.io.autoConnect && this.open();
    }o(l.prototype), l.prototype.subEvents = function () {
      if (!this.subs) {
        var t = this.io;this.subs = [s(t, "open", a(this, "onopen")), s(t, "packet", a(this, "onpacket")), s(t, "close", a(this, "onclose"))];
      }
    }, l.prototype.open = l.prototype.connect = function () {
      return this.connected || (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting")), this;
    }, l.prototype.send = function () {
      var t = i(arguments);return t.unshift("message"), this.emit.apply(this, t), this;
    }, l.prototype.emit = function (t) {
      if (f.hasOwnProperty(t)) return p.apply(this, arguments), this;var e = i(arguments),
          r = { type: (undefined !== this.flags.binary ? this.flags.binary : h(e)) ? n.BINARY_EVENT : n.EVENT, data: e, options: {} };return r.options.compress = !this.flags || false !== this.flags.compress, "function" == typeof e[e.length - 1] && (c("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), r.id = this.ids++), this.connected ? this.packet(r) : this.sendBuffer.push(r), this.flags = {}, this;
    }, l.prototype.packet = function (t) {
      t.nsp = this.nsp, this.io.packet(t);
    }, l.prototype.onopen = function () {
      if (c("transport is open - connecting"), "/" !== this.nsp) if (this.query) {
        var t = "object" == _typeof(this.query) ? u.encode(this.query) : this.query;c("sending connect packet with query %s", t), this.packet({ type: n.CONNECT, query: t });
      } else this.packet({ type: n.CONNECT });
    }, l.prototype.onclose = function (t) {
      c("close (%s)", t), this.connected = false, this.disconnected = true, delete this.id, this.emit("disconnect", t);
    }, l.prototype.onpacket = function (t) {
      var e = t.nsp === this.nsp,
          r = t.type === n.ERROR && "/" === t.nsp;if (e || r) switch (t.type) {case n.CONNECT:
          this.onconnect();break;case n.EVENT:case n.BINARY_EVENT:
          this.onevent(t);break;case n.ACK:case n.BINARY_ACK:
          this.onack(t);break;case n.DISCONNECT:
          this.ondisconnect();break;case n.ERROR:
          this.emit("error", t.data);}
    }, l.prototype.onevent = function (t) {
      var e = t.data || [];c("emitting event %j", e), null != t.id && (c("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? p.apply(this, e) : this.receiveBuffer.push(e);
    }, l.prototype.ack = function (t) {
      var e = this,
          r = false;return function () {
        if (!r) {
          r = true;var o = i(arguments);c("sending ack %j", o), e.packet({ type: h(o) ? n.BINARY_ACK : n.ACK, id: t, data: o });
        }
      };
    }, l.prototype.onack = function (t) {
      var e = this.acks[t.id];"function" == typeof e ? (c("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : c("bad ack %s", t.id);
    }, l.prototype.onconnect = function () {
      this.connected = true, this.disconnected = false, this.emit("connect"), this.emitBuffered();
    }, l.prototype.emitBuffered = function () {
      var t;for (t = 0; t < this.receiveBuffer.length; t++) {
        p.apply(this, this.receiveBuffer[t]);
      }for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) {
        this.packet(this.sendBuffer[t]);
      }this.sendBuffer = [];
    }, l.prototype.ondisconnect = function () {
      c("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");
    }, l.prototype.destroy = function () {
      if (this.subs) {
        for (var t = 0; t < this.subs.length; t++) {
          this.subs[t].destroy();
        }this.subs = null;
      }this.io.destroy(this);
    }, l.prototype.close = l.prototype.disconnect = function () {
      return this.connected && (c("performing disconnect (%s)", this.nsp), this.packet({ type: n.DISCONNECT })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
    }, l.prototype.compress = function (t) {
      return this.flags.compress = t, this;
    }, l.prototype.binary = function (t) {
      return this.flags.binary = t, this;
    };
  }, function (t, e) {
    t.exports = function (t, e, r) {
      return t.on(e, r), { destroy: function destroy() {
          t.removeListener(e, r);
        } };
    };
  }, function (t, e) {
    var r = [].slice;t.exports = function (t, e) {
      if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");var n = r.call(arguments, 2);return function () {
        return e.apply(t, n.concat(r.call(arguments)));
      };
    };
  }, function (t, e, r) {
    r(19);t.exports = r(23);
  }, function (t, e, r) {
    (function (t) {
      var n = Object.getOwnPropertyDescriptors || function (t) {
        for (var e = Object.keys(t), r = {}, n = 0; n < e.length; n++) {
          r[e[n]] = Object.getOwnPropertyDescriptor(t, e[n]);
        }return r;
      },
          o = /%[sdj%]/g;e.format = function (t) {
        if (!v(t)) {
          for (var e = [], r = 0; r < arguments.length; r++) {
            e.push(a(arguments[r]));
          }return e.join(" ");
        }r = 1;for (var n = arguments, i = n.length, s = String(t).replace(o, function (t) {
          if ("%%" === t) return "%";if (r >= i) return t;switch (t) {case "%s":
              return String(n[r++]);case "%d":
              return Number(n[r++]);case "%j":
              try {
                return JSON.stringify(n[r++]);
              } catch (t) {
                return "[Circular]";
              }default:
              return t;}
        }), c = n[r]; r < i; c = n[++r]) {
          y(c) || !w(c) ? s += " " + c : s += " " + a(c);
        }return s;
      }, e.deprecate = function (r, n) {
        if (undefined !== t && true === t.noDeprecation) return r;if (undefined === t) return function () {
          return e.deprecate(r, n).apply(this, arguments);
        };var o = false;return function () {
          if (!o) {
            if (t.throwDeprecation) throw new Error(n);t.traceDeprecation ? console.trace(n) : console.error(n), o = true;
          }return r.apply(this, arguments);
        };
      };var i,
          s = {};function a(t, r) {
        var n = { seen: [], stylize: u };return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), d(r) ? n.showHidden = r : r && e._extend(n, r), m(n.showHidden) && (n.showHidden = false), m(n.depth) && (n.depth = 2), m(n.colors) && (n.colors = false), m(n.customInspect) && (n.customInspect = true), n.colors && (n.stylize = c), h(n, t, n.depth);
      }function c(t, e) {
        var r = a.styles[e];return r ? "[" + a.colors[r][0] + "m" + t + "[" + a.colors[r][1] + "m" : t;
      }function u(t, e) {
        return t;
      }function h(t, r, n) {
        if (t.customInspect && r && E(r.inspect) && r.inspect !== e.inspect && (!r.constructor || r.constructor.prototype !== r)) {
          var o = r.inspect(n, t);return v(o) || (o = h(t, o, n)), o;
        }var i = function (t, e) {
          if (m(e)) return t.stylize("undefined", "undefined");if (v(e)) {
            var r = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";return t.stylize(r, "string");
          }if (g(e)) return t.stylize("" + e, "number");if (d(e)) return t.stylize("" + e, "boolean");if (y(e)) return t.stylize("null", "null");
        }(t, r);if (i) return i;var s = Object.keys(r),
            a = function (t) {
          var e = {};return t.forEach(function (t, r) {
            e[t] = true;
          }), e;
        }(s);if (t.showHidden && (s = Object.getOwnPropertyNames(r)), k(r) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return f(r);if (0 === s.length) {
          if (E(r)) {
            var c = r.name ? ": " + r.name : "";return t.stylize("[Function" + c + "]", "special");
          }if (b(r)) return t.stylize(RegExp.prototype.toString.call(r), "regexp");if (A(r)) return t.stylize(Date.prototype.toString.call(r), "date");if (k(r)) return f(r);
        }var u,
            w = "",
            _ = false,
            S = ["{", "}"];(l(r) && (_ = true, S = ["[", "]"]), E(r)) && (w = " [Function" + (r.name ? ": " + r.name : "") + "]");return b(r) && (w = " " + RegExp.prototype.toString.call(r)), A(r) && (w = " " + Date.prototype.toUTCString.call(r)), k(r) && (w = " " + f(r)), 0 !== s.length || _ && 0 != r.length ? n < 0 ? b(r) ? t.stylize(RegExp.prototype.toString.call(r), "regexp") : t.stylize("[Object]", "special") : (t.seen.push(r), u = _ ? function (t, e, r, n, o) {
          for (var i = [], s = 0, a = e.length; s < a; ++s) {
            x(e, String(s)) ? i.push(p(t, e, r, n, String(s), true)) : i.push("");
          }return o.forEach(function (o) {
            o.match(/^\d+$/) || i.push(p(t, e, r, n, o, true));
          }), i;
        }(t, r, n, a, s) : s.map(function (e) {
          return p(t, r, n, a, e, _);
        }), t.seen.pop(), function (t, e, r) {
          if (t.reduce(function (t, e) {
            return undefined, t + e.replace(/\u001b\[\d\d?m/g, "").length + 1;
          }, 0) > 60) return r[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + r[1];return r[0] + e + " " + t.join(", ") + " " + r[1];
        }(u, w, S)) : S[0] + w + S[1];
      }function f(t) {
        return "[" + Error.prototype.toString.call(t) + "]";
      }function p(t, e, r, n, o, i) {
        var s, a, c;if ((c = Object.getOwnPropertyDescriptor(e, o) || { value: e[o] }).get ? a = c.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : c.set && (a = t.stylize("[Setter]", "special")), x(n, o) || (s = "[" + o + "]"), a || (t.seen.indexOf(c.value) < 0 ? (a = y(r) ? h(t, c.value, null) : h(t, c.value, r - 1)).indexOf("\n") > -1 && (a = i ? a.split("\n").map(function (t) {
          return "  " + t;
        }).join("\n").substr(2) : "\n" + a.split("\n").map(function (t) {
          return "   " + t;
        }).join("\n")) : a = t.stylize("[Circular]", "special")), m(s)) {
          if (i && o.match(/^\d+$/)) return a;(s = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = t.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = t.stylize(s, "string"));
        }return s + ": " + a;
      }function l(t) {
        return Array.isArray(t);
      }function d(t) {
        return "boolean" == typeof t;
      }function y(t) {
        return null === t;
      }function g(t) {
        return "number" == typeof t;
      }function v(t) {
        return "string" == typeof t;
      }function m(t) {
        return undefined === t;
      }function b(t) {
        return w(t) && "[object RegExp]" === _(t);
      }function w(t) {
        return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
      }function A(t) {
        return w(t) && "[object Date]" === _(t);
      }function k(t) {
        return w(t) && ("[object Error]" === _(t) || t instanceof Error);
      }function E(t) {
        return "function" == typeof t;
      }function _(t) {
        return Object.prototype.toString.call(t);
      }function S(t) {
        return t < 10 ? "0" + t.toString(10) : t.toString(10);
      }e.debuglog = function (r) {
        if (m(i) && (i = t.env.NODE_DEBUG || ""), r = r.toUpperCase(), !s[r]) if (new RegExp("\\b" + r + "\\b", "i").test(i)) {
          var n = t.pid;s[r] = function () {
            var t = e.format.apply(e, arguments);console.error("%s %d: %s", r, n, t);
          };
        } else s[r] = function () {};return s[r];
      }, e.inspect = a, a.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, a.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }, e.isArray = l, e.isBoolean = d, e.isNull = y, e.isNullOrUndefined = function (t) {
        return null == t;
      }, e.isNumber = g, e.isString = v, e.isSymbol = function (t) {
        return "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t));
      }, e.isUndefined = m, e.isRegExp = b, e.isObject = w, e.isDate = A, e.isError = k, e.isFunction = E, e.isPrimitive = function (t) {
        return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || undefined === t;
      }, e.isBuffer = r(21);var O = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];function B() {
        var t = new Date(),
            e = [S(t.getHours()), S(t.getMinutes()), S(t.getSeconds())].join(":");return [t.getDate(), O[t.getMonth()], e].join(" ");
      }function x(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }e.log = function () {
        console.log("%s - %s", B(), e.format.apply(e, arguments));
      }, e.inherits = r(22), e._extend = function (t, e) {
        if (!e || !w(e)) return t;for (var r = Object.keys(e), n = r.length; n--;) {
          t[r[n]] = e[r[n]];
        }return t;
      };var C = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : undefined;function R(t, e) {
        if (!t) {
          var r = new Error("Promise was rejected with a falsy value");r.reason = t, t = r;
        }return e(t);
      }e.promisify = function (t) {
        if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');if (C && t[C]) {
          var e;if ("function" != typeof (e = t[C])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e, C, { value: e, enumerable: false, writable: false, configurable: true }), e;
        }function e() {
          for (var e, r, n = new Promise(function (t, n) {
            e = t, r = n;
          }), o = [], i = 0; i < arguments.length; i++) {
            o.push(arguments[i]);
          }o.push(function (t, n) {
            t ? r(t) : e(n);
          });try {
            t.apply(this, o);
          } catch (t) {
            r(t);
          }return n;
        }return Object.setPrototypeOf(e, Object.getPrototypeOf(t)), C && Object.defineProperty(e, C, { value: e, enumerable: false, writable: false, configurable: true }), Object.defineProperties(e, n(t));
      }, e.promisify.custom = C, e.callbackify = function (e) {
        if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');function r() {
          for (var r = [], n = 0; n < arguments.length; n++) {
            r.push(arguments[n]);
          }var o = r.pop();if ("function" != typeof o) throw new TypeError("The last argument must be of type Function");var i = this,
              s = function s() {
            return o.apply(i, arguments);
          };e.apply(this, r).then(function (e) {
            t.nextTick(s, null, e);
          }, function (e) {
            t.nextTick(R, e, s);
          });
        }return Object.setPrototypeOf(r, Object.getPrototypeOf(e)), Object.defineProperties(r, n(e)), r;
      };
    }).call(this, r(20));
  }, function (t, e) {
    var r,
        n,
        o = t.exports = {};function i() {
      throw new Error("setTimeout has not been defined");
    }function s() {
      throw new Error("clearTimeout has not been defined");
    }function a(t) {
      if (r === setTimeout) return setTimeout(t, 0);if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0);try {
        return r(t, 0);
      } catch (e) {
        try {
          return r.call(null, t, 0);
        } catch (e) {
          return r.call(this, t, 0);
        }
      }
    }!function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : i;
      } catch (t) {
        r = i;
      }try {
        n = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (t) {
        n = s;
      }
    }();var c,
        u = [],
        h = false,
        f = -1;function p() {
      h && c && (h = false, c.length ? u = c.concat(u) : f = -1, u.length && l());
    }function l() {
      if (!h) {
        var t = a(p);h = true;for (var e = u.length; e;) {
          for (c = u, u = []; ++f < e;) {
            c && c[f].run();
          }f = -1, e = u.length;
        }c = null, h = false, function (t) {
          if (n === clearTimeout) return clearTimeout(t);if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);try {
            n(t);
          } catch (e) {
            try {
              return n.call(null, t);
            } catch (e) {
              return n.call(this, t);
            }
          }
        }(t);
      }
    }function d(t, e) {
      this.fun = t, this.array = e;
    }function y() {}o.nextTick = function (t) {
      var e = new Array(arguments.length - 1);if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) {
        e[r - 1] = arguments[r];
      }u.push(new d(t, e)), 1 !== u.length || h || a(l);
    }, d.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, o.title = "browser", o.browser = true, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = y, o.addListener = y, o.once = y, o.off = y, o.removeListener = y, o.removeAllListeners = y, o.emit = y, o.prependListener = y, o.prependOnceListener = y, o.listeners = function (t) {
      return [];
    }, o.binding = function (t) {
      throw new Error("process.binding is not supported");
    }, o.cwd = function () {
      return "/";
    }, o.chdir = function (t) {
      throw new Error("process.chdir is not supported");
    }, o.umask = function () {
      return 0;
    };
  }, function (t, e) {
    t.exports = function (t) {
      return t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8;
    };
  }, function (t, e) {
    "function" == typeof Object.create ? t.exports = function (t, e) {
      t.super_ = e, t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } });
    } : t.exports = function (t, e) {
      t.super_ = e;var r = function r() {};r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t;
    };
  }, function (t, e, r) {
    var n = r(24),
        o = r(3),
        i = r(10),
        s = r(0)("socket.io-client");t.exports = e = c;var a = e.managers = {};function c(t, e) {
      "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (e = t, t = undefined), e = e || {};var r,
          o = n(t),
          c = o.source,
          u = o.id,
          h = o.path,
          f = a[u] && h in a[u].nsps;return e.forceNew || e["force new connection"] || false === e.multiplex || f ? (s("ignoring socket cache for %s", c), r = i(c, e)) : (a[u] || (s("new io instance for %s", c), a[u] = i(c, e)), r = a[u]), o.query && !e.query && (e.query = o.query), r.socket(o.path, e);
    }e.protocol = o.protocol, e.connect = c, e.Manager = r(10), e.Socket = r(15);
  }, function (t, e, r) {
    var n = r(6),
        o = r(0)("socket.io-client:url");t.exports = function (t, e) {
      var r = t;e = e || "undefined" != typeof location && location, null == t && (t = e.protocol + "//" + e.host);"string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t), /^(https?|wss?):\/\//.test(t) || (o("protocol-less url %s", t), t = undefined !== e ? e.protocol + "//" + t : "https://" + t), o("parse %s", t), r = n(t));r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443"));r.path = r.path || "/";var i = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;return r.id = r.protocol + "://" + i + ":" + r.port, r.href = r.protocol + "://" + i + (e && e.port === r.port ? "" : ":" + r.port), r;
    };
  }, function (t, e, r) {
    var n = r(7),
        o = r(8),
        i = Object.prototype.toString,
        s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob),
        a = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === i.call(File);e.deconstructPacket = function (t) {
      var e = [],
          r = t.data,
          i = t;return i.data = function t(e, r) {
        if (!e) return e;if (o(e)) {
          var i = { _placeholder: true, num: r.length };return r.push(e), i;
        }if (n(e)) {
          for (var s = new Array(e.length), a = 0; a < e.length; a++) {
            s[a] = t(e[a], r);
          }return s;
        }if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && !(e instanceof Date)) {
          s = {};for (var c in e) {
            s[c] = t(e[c], r);
          }return s;
        }return e;
      }(r, e), i.attachments = e.length, { packet: i, buffers: e };
    }, e.reconstructPacket = function (t, e) {
      return t.data = function t(e, r) {
        if (!e) return e;if (e && e._placeholder) return r[e.num];if (n(e)) for (var o = 0; o < e.length; o++) {
          e[o] = t(e[o], r);
        } else if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) for (var i in e) {
          e[i] = t(e[i], r);
        }return e;
      }(t.data, e), t.attachments = undefined, t;
    }, e.removeBlobs = function (t, e) {
      var r = 0,
          i = t;!function t(c, u, h) {
        if (!c) return c;if (s && c instanceof Blob || a && c instanceof File) {
          r++;var f = new FileReader();f.onload = function () {
            h ? h[u] = this.result : i = this.result, --r || e(i);
          }, f.readAsArrayBuffer(c);
        } else if (n(c)) for (var p = 0; p < c.length; p++) {
          t(c[p], p, c);
        } else if ("object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && !o(c)) for (var l in c) {
          t(c[l], l, c);
        }
      }(i), r || e(i);
    };
  }, function (t, e, r) {
    "use strict";

    e.byteLength = function (t) {
      var e = u(t),
          r = e[0],
          n = e[1];return 3 * (r + n) / 4 - n;
    }, e.toByteArray = function (t) {
      var e,
          r,
          n = u(t),
          s = n[0],
          a = n[1],
          c = new i(function (t, e, r) {
        return 3 * (e + r) / 4 - r;
      }(0, s, a)),
          h = 0,
          f = a > 0 ? s - 4 : s;for (r = 0; r < f; r += 4) {
        e = o[t.charCodeAt(r)] << 18 | o[t.charCodeAt(r + 1)] << 12 | o[t.charCodeAt(r + 2)] << 6 | o[t.charCodeAt(r + 3)], c[h++] = e >> 16 & 255, c[h++] = e >> 8 & 255, c[h++] = 255 & e;
      }2 === a && (e = o[t.charCodeAt(r)] << 2 | o[t.charCodeAt(r + 1)] >> 4, c[h++] = 255 & e);1 === a && (e = o[t.charCodeAt(r)] << 10 | o[t.charCodeAt(r + 1)] << 4 | o[t.charCodeAt(r + 2)] >> 2, c[h++] = e >> 8 & 255, c[h++] = 255 & e);return c;
    }, e.fromByteArray = function (t) {
      for (var e, r = t.length, o = r % 3, i = [], s = 0, a = r - o; s < a; s += 16383) {
        i.push(h(t, s, s + 16383 > a ? a : s + 16383));
      }1 === o ? (e = t[r - 1], i.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === o && (e = (t[r - 2] << 8) + t[r - 1], i.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "="));return i.join("");
    };for (var n = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = s.length; a < c; ++a) {
      n[a] = s[a], o[s.charCodeAt(a)] = a;
    }function u(t) {
      var e = t.length;if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");var r = t.indexOf("=");return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4];
    }function h(t, e, r) {
      for (var o, i, s = [], a = e; a < r; a += 3) {
        o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(n[(i = o) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);
      }return s.join("");
    }o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63;
  }, function (t, e) {
    e.read = function (t, e, r, n, o) {
      var i,
          s,
          a = 8 * o - n - 1,
          c = (1 << a) - 1,
          u = c >> 1,
          h = -7,
          f = r ? o - 1 : 0,
          p = r ? -1 : 1,
          l = t[e + f];for (f += p, i = l & (1 << -h) - 1, l >>= -h, h += a; h > 0; i = 256 * i + t[e + f], f += p, h -= 8) {}for (s = i & (1 << -h) - 1, i >>= -h, h += n; h > 0; s = 256 * s + t[e + f], f += p, h -= 8) {}if (0 === i) i = 1 - u;else {
        if (i === c) return s ? NaN : Infinity * (l ? -1 : 1);s += Math.pow(2, n), i -= u;
      }return (l ? -1 : 1) * s * Math.pow(2, i - n);
    }, e.write = function (t, e, r, n, o, i) {
      var s,
          a,
          c,
          u = 8 * i - o - 1,
          h = (1 << u) - 1,
          f = h >> 1,
          p = 23 === o ? 5.960464477539062e-8 : 0,
          l = n ? 0 : i - 1,
          d = n ? 1 : -1,
          y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;for (e = Math.abs(e), isNaN(e) || e === Infinity ? (a = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), (e += s + f >= 1 ? p / c : p * Math.pow(2, 1 - f)) * c >= 2 && (s++, c /= 2), s + f >= h ? (a = 0, s = h) : s + f >= 1 ? (a = (e * c - 1) * Math.pow(2, o), s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, o), s = 0)); o >= 8; t[r + l] = 255 & a, l += d, a /= 256, o -= 8) {}for (s = s << o | a, u += o; u > 0; t[r + l] = 255 & s, l += d, s /= 256, u -= 8) {}t[r + l - d] |= 128 * y;
    };
  }, function (t, e) {
    var r = {}.toString;t.exports = Array.isArray || function (t) {
      return "[object Array]" == r.call(t);
    };
  }, function (t, e, r) {
    t.exports = r(30), t.exports.parser = r(2);
  }, function (t, e, r) {
    var n = r(11),
        o = r(1),
        i = r(0)("engine.io-client:socket"),
        s = r(14),
        a = r(2),
        c = r(6),
        u = r(5);function h(t, e) {
      if (!(this instanceof h)) return new h(t, e);e = e || {}, t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (e = t, t = null), t ? (t = c(t), e.hostname = t.host, e.secure = "https" === t.protocol || "wss" === t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = c(e.host).host), this.secure = null != e.secure ? e.secure : "undefined" != typeof location && "https:" === location.protocol, e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.agent = e.agent || false, this.hostname = e.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = e.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = e.query || {}, "string" == typeof this.query && (this.query = u.decode(this.query)), this.upgrade = false !== e.upgrade, this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!e.forceJSONP, this.jsonp = false !== e.jsonp, this.forceBase64 = !!e.forceBase64, this.enablesXDR = !!e.enablesXDR, this.withCredentials = false !== e.withCredentials, this.timestampParam = e.timestampParam || "t", this.timestampRequests = e.timestampRequests, this.transports = e.transports || ["websocket"], this.transportOptions = e.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = e.policyPort || 843, this.rememberUpgrade = e.rememberUpgrade || false, this.binaryType = null, this.onlyBinaryUpgrades = e.onlyBinaryUpgrades, this.perMessageDeflate = false !== e.perMessageDeflate && (e.perMessageDeflate || {}), true === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = e.pfx || null, this.key = e.key || null, this.passphrase = e.passphrase || null, this.cert = e.cert || null, this.ca = e.ca || null, this.ciphers = e.ciphers || null, this.rejectUnauthorized = undefined === e.rejectUnauthorized || e.rejectUnauthorized, this.forceNode = !!e.forceNode, this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), ("undefined" == typeof self || this.isReactNative) && (e.extraHeaders && Object.keys(e.extraHeaders).length > 0 && (this.extraHeaders = e.extraHeaders), e.localAddress && (this.localAddress = e.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open();
    }t.exports = h, h.priorWebsocketSuccess = false, o(h.prototype), h.protocol = a.protocol, h.Socket = h, h.Transport = r(12), h.transports = r(11), h.parser = r(2), h.prototype.createTransport = function (t) {
      i('creating transport "%s"', t);var e = function (t) {
        var e = {};for (var r in t) {
          t.hasOwnProperty(r) && (e[r] = t[r]);
        }return e;
      }(this.query);e.EIO = a.protocol, e.transport = t;var r = this.transportOptions[t] || {};return this.id && (e.sid = this.id), new n[t]({ query: e, socket: this, agent: r.agent || this.agent, hostname: r.hostname || this.hostname, port: r.port || this.port, secure: r.secure || this.secure, path: r.path || this.path, forceJSONP: r.forceJSONP || this.forceJSONP, jsonp: r.jsonp || this.jsonp, forceBase64: r.forceBase64 || this.forceBase64, enablesXDR: r.enablesXDR || this.enablesXDR, withCredentials: r.withCredentials || this.withCredentials, timestampRequests: r.timestampRequests || this.timestampRequests, timestampParam: r.timestampParam || this.timestampParam, policyPort: r.policyPort || this.policyPort, pfx: r.pfx || this.pfx, key: r.key || this.key, passphrase: r.passphrase || this.passphrase, cert: r.cert || this.cert, ca: r.ca || this.ca, ciphers: r.ciphers || this.ciphers, rejectUnauthorized: r.rejectUnauthorized || this.rejectUnauthorized, perMessageDeflate: r.perMessageDeflate || this.perMessageDeflate, extraHeaders: r.extraHeaders || this.extraHeaders, forceNode: r.forceNode || this.forceNode, localAddress: r.localAddress || this.localAddress, requestTimeout: r.requestTimeout || this.requestTimeout, protocols: r.protocols || undefined, isReactNative: this.isReactNative });
    }, h.prototype.open = function () {
      var t;if (this.rememberUpgrade && h.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket";else {
        if (0 === this.transports.length) {
          var e = this;return undefined;
        }t = this.transports[0];
      }this.readyState = "opening";try {
        t = this.createTransport(t);
      } catch (t) {
        return this.transports.shift(), undefined;
      }t.open(), this.setTransport(t);
    }, h.prototype.setTransport = function (t) {
      i("setting transport %s", t.name);var e = this;this.transport && (i("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", function () {
        e.onDrain();
      }).on("packet", function (t) {
        e.onPacket(t);
      }).on("error", function (t) {
        e.onError(t);
      }).on("close", function () {
        e.onClose("transport close");
      });
    }, h.prototype.probe = function (t) {
      i('probing transport "%s"', t);var e = this.createTransport(t, { probe: 1 }),
          r = false,
          n = this;function o() {
        if (n.onlyBinaryUpgrades) {
          var o = !this.supportsBinary && n.transport.supportsBinary;r = r || o;
        }r || (i('probe transport "%s" opened', t), e.send([{ type: "ping", data: "probe" }]), e.once("packet", function (o) {
          if (!r) if ("pong" === o.type && "probe" === o.data) {
            if (i('probe transport "%s" pong', t), n.upgrading = true, n.emit("upgrading", e), !e) return;h.priorWebsocketSuccess = "websocket" === e.name, i('pausing current transport "%s"', n.transport.name), n.transport.pause(function () {
              r || "closed" !== n.readyState && (i("changing transport and sending upgrade packet"), p(), n.setTransport(e), e.send([{ type: "upgrade" }]), n.emit("upgrade", e), e = null, n.upgrading = false, n.flush());
            });
          } else {
            i('probe transport "%s" failed', t);var s = new Error("probe error");s.transport = e.name, n.emit("upgradeError", s);
          }
        }));
      }function s() {
        r || (r = true, p(), e.close(), e = null);
      }function a(r) {
        var o = new Error("probe error: " + r);o.transport = e.name, s(), i('probe transport "%s" failed because of error: %s', t, r), n.emit("upgradeError", o);
      }function c() {
        a("transport closed");
      }function u() {
        a("socket closed");
      }function f(t) {
        e && t.name !== e.name && (i('"%s" works - aborting "%s"', t.name, e.name), s());
      }function p() {
        e.removeListener("open", o), e.removeListener("error", a), e.removeListener("close", c), n.removeListener("close", u), n.removeListener("upgrading", f);
      }h.priorWebsocketSuccess = false, e.once("open", o), e.once("error", a), e.once("close", c), this.once("close", u), this.once("upgrading", f), e.open();
    }, h.prototype.onOpen = function () {
      if (i("socket open"), this.readyState = "open", h.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
        i("starting upgrade probes");for (var t = 0, e = this.upgrades.length; t < e; t++) {
          this.probe(this.upgrades[t]);
        }
      }
    }, h.prototype.onPacket = function (t) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (i('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {case "open":
          this.onHandshake(JSON.parse(t.data));break;case "pong":
          this.setPing(), this.emit("pong");break;case "error":
          var e = new Error("server error");e.code = t.data, this.onError(e);break;case "message":
          this.emit("data", t.data), this.emit("message", t.data);} else i('packet received with socket readyState "%s"', this.readyState);
    }, h.prototype.onHandshake = function (t) {
      this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat));
    }, h.prototype.onHeartbeat = function (t) {
      clearTimeout(this.pingTimeoutTimer);var e = this;e.pingTimeoutTimer = setTimeout(function () {
        "closed" !== e.readyState && e.onClose("ping timeout");
      }, t || e.pingInterval + e.pingTimeout);
    }, h.prototype.setPing = function () {
      var t = this;clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function () {
        i("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout);
      }, t.pingInterval);
    }, h.prototype.ping = function () {
      var t = this;this.sendPacket("ping", function () {
        t.emit("ping");
      });
    }, h.prototype.onDrain = function () {
      this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
    }, h.prototype.flush = function () {
      "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (i("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));
    }, h.prototype.write = h.prototype.send = function (t, e, r) {
      return this.sendPacket("message", t, e, r), this;
    }, h.prototype.sendPacket = function (t, e, r, n) {
      if ("function" == typeof e && (n = e, e = undefined), "function" == typeof r && (n = r, r = null), "closing" !== this.readyState && "closed" !== this.readyState) {
        (r = r || {}).compress = false !== r.compress;var o = { type: t, data: e, options: r };this.emit("packetCreate", o), this.writeBuffer.push(o), n && this.once("flush", n), this.flush();
      }
    }, h.prototype.close = function () {
      if ("opening" === this.readyState || "open" === this.readyState) {
        this.readyState = "closing";var t = this;this.writeBuffer.length ? this.once("drain", function () {
          this.upgrading ? n() : e();
        }) : this.upgrading ? n() : e();
      }function e() {
        t.onClose("forced close"), i("socket closing - telling transport to close"), t.transport.close();
      }function r() {
        t.removeListener("upgrade", r), t.removeListener("upgradeError", r), e();
      }function n() {
        t.once("upgrade", r), t.once("upgradeError", r);
      }return this;
    }, h.prototype.onError = function (t) {
      i("socket error %j", t), h.priorWebsocketSuccess = false, this.emit("error", t), this.onClose("transport error", t);
    }, h.prototype.onClose = function (t, e) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        i('socket close with reason: "%s"', t);clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0;
      }
    }, h.prototype.filterUpgrades = function (t) {
      for (var e = [], r = 0, n = t.length; r < n; r++) {
        ~s(this.transports, t[r]) && e.push(t[r]);
      }return e;
    };
  }, function (t, e, r) {
    (function (e) {
      var n,
          o,
          i = r(12),
          s = r(2),
          a = r(5),
          c = r(39),
          u = r(40),
          h = r(0)("engine.io-client:websocket");if ("undefined" != typeof WebSocket ? n = WebSocket : "undefined" != typeof self && (n = self.WebSocket || self.MozWebSocket), "undefined" == typeof window) try {
        o = r(41);
      } catch (t) {}var f = n || o;function p(t) {
        t && t.forceBase64 && (this.supportsBinary = false), this.perMessageDeflate = t.perMessageDeflate, this.usingBrowserWebSocket = n && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (f = o), i.call(this, t);
      }t.exports = p, c(p, i), p.prototype.name = "websocket", p.prototype.supportsBinary = true, p.prototype.doOpen = function () {
        if (this.check()) {
          var t = this.uri(),
              e = this.protocols,
              r = { agent: this.agent, perMessageDeflate: this.perMessageDeflate };r.pfx = this.pfx, r.key = this.key, r.passphrase = this.passphrase, r.cert = this.cert, r.ca = this.ca, r.ciphers = this.ciphers, r.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (r.headers = this.extraHeaders), this.localAddress && (r.localAddress = this.localAddress);try {
            this.ws = this.usingBrowserWebSocket && !this.isReactNative ? e ? new f(t, e) : new f(t) : new f(t, e, r);
          } catch (t) {
            return this.emit("error", t);
          }undefined === this.ws.binaryType && (this.supportsBinary = false), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = true, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
        }
      }, p.prototype.addEventListeners = function () {
        var t = this;this.ws.onopen = function () {
          t.onOpen();
        }, this.ws.onclose = function () {
          t.onClose();
        }, this.ws.onmessage = function (e) {
          t.onData(e.data);
        }, this.ws.onerror = function (e) {
          t.onError("websocket error", e);
        };
      }, p.prototype.write = function (t) {
        var r = this;this.writable = false;for (var n = t.length, o = 0, i = n; o < i; o++) {
          !function (t) {
            s.encodePacket(t, r.supportsBinary, function (o) {
              if (!r.usingBrowserWebSocket) {
                var i = {};if (t.options && (i.compress = t.options.compress), r.perMessageDeflate) ("string" == typeof o ? e.byteLength(o) : o.length) < r.perMessageDeflate.threshold && (i.compress = false);
              }try {
                r.usingBrowserWebSocket ? r.ws.send(o) : r.ws.send(o, i);
              } catch (t) {
                h("websocket closed before onclose event");
              }--n || a();
            });
          }(t[o]);
        }function a() {
          r.emit("flush"), setTimeout(function () {
            r.writable = true, r.emit("drain");
          }, 0);
        }
      }, p.prototype.onClose = function () {
        i.prototype.onClose.call(this);
      }, p.prototype.doClose = function () {
        undefined !== this.ws && this.ws.close();
      }, p.prototype.uri = function () {
        var t = this.query || {},
            e = this.secure ? "wss" : "ws",
            r = "";return this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (r = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = u()), this.supportsBinary || (t.b64 = 1), (t = a.encode(t)).length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + r + this.path + t;
      }, p.prototype.check = function () {
        return !(!f || "__initialize" in f && this.name === p.prototype.name);
      };
    }).call(this, r(4).Buffer);
  }, function (t, e) {
    t.exports = Object.keys || function (t) {
      var e = [],
          r = Object.prototype.hasOwnProperty;for (var n in t) {
        r.call(t, n) && e.push(n);
      }return e;
    };
  }, function (t, e) {
    var r = {}.toString;t.exports = Array.isArray || function (t) {
      return "[object Array]" == r.call(t);
    };
  }, function (t, e) {
    t.exports = function (t, e, r) {
      var n = t.byteLength;if (e = e || 0, r = r || n, t.slice) return t.slice(e, r);if (e < 0 && (e += n), r < 0 && (r += n), r > n && (r = n), e >= n || e >= r || 0 === n) return new ArrayBuffer(0);for (var o = new Uint8Array(t), i = new Uint8Array(r - e), s = e, a = 0; s < r; s++, a++) {
        i[a] = o[s];
      }return i.buffer;
    };
  }, function (t, e) {
    function r() {}t.exports = function (t, e, n) {
      var o = false;return n = n || r, i.count = t, 0 === t ? e() : i;function i(t, r) {
        if (i.count <= 0) throw new Error("after called too many times");--i.count, t ? (o = true, e(t), e = n) : 0 !== i.count || o || e(null, r);
      }
    };
  }, function (t, e) {
    /*! https://mths.be/utf8js v2.1.2 by @mathias */
    var r,
        n,
        o,
        i = String.fromCharCode;function s(t) {
      for (var e, r, n = [], o = 0, i = t.length; o < i;) {
        (e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i ? 56320 == (64512 & (r = t.charCodeAt(o++))) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e), o--) : n.push(e);
      }return n;
    }function a(t, e) {
      if (t >= 55296 && t <= 57343) {
        if (e) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");return false;
      }return true;
    }function c(t, e) {
      return i(t >> e & 63 | 128);
    }function u(t, e) {
      if (0 == (4294967168 & t)) return i(t);var r = "";return 0 == (4294965248 & t) ? r = i(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (a(t, e) || (t = 65533), r = i(t >> 12 & 15 | 224), r += c(t, 6)) : 0 == (4292870144 & t) && (r = i(t >> 18 & 7 | 240), r += c(t, 12), r += c(t, 6)), r += i(63 & t | 128);
    }function h() {
      if (o >= n) throw Error("Invalid byte index");var t = 255 & r[o];if (o++, 128 == (192 & t)) return 63 & t;throw Error("Invalid continuation byte");
    }function f(t) {
      var e, i;if (o > n) throw Error("Invalid byte index");if (o == n) return false;if (e = 255 & r[o], o++, 0 == (128 & e)) return e;if (192 == (224 & e)) {
        if ((i = (31 & e) << 6 | h()) >= 128) return i;throw Error("Invalid continuation byte");
      }if (224 == (240 & e)) {
        if ((i = (15 & e) << 12 | h() << 6 | h()) >= 2048) return a(i, t) ? i : 65533;throw Error("Invalid continuation byte");
      }if (240 == (248 & e) && (i = (7 & e) << 18 | h() << 12 | h() << 6 | h()) >= 65536 && i <= 1114111) return i;throw Error("Invalid UTF-8 detected");
    }t.exports = { version: "2.1.2", encode: function encode(t, e) {
        for (var r = false !== (e = e || {}).strict, n = s(t), o = n.length, i = -1, a = ""; ++i < o;) {
          a += u(n[i], r);
        }return a;
      }, decode: function decode(t, e) {
        var a = false !== (e = e || {}).strict;r = s(t), n = r.length, o = 0;for (var c, u = []; false !== (c = f(a));) {
          u.push(c);
        }return function (t) {
          for (var e, r = t.length, n = -1, o = ""; ++n < r;) {
            (e = t[n]) > 65535 && (o += i((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += i(e);
          }return o;
        }(u);
      } };
  }, function (t, e) {
    !function () {
      "use strict";

      for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = new Uint8Array(256), n = 0; n < t.length; n++) {
        r[t.charCodeAt(n)] = n;
      }e.encode = function (e) {
        var r,
            n = new Uint8Array(e),
            o = n.length,
            i = "";for (r = 0; r < o; r += 3) {
          i += t[n[r] >> 2], i += t[(3 & n[r]) << 4 | n[r + 1] >> 4], i += t[(15 & n[r + 1]) << 2 | n[r + 2] >> 6], i += t[63 & n[r + 2]];
        }return o % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i;
      }, e.decode = function (t) {
        var e,
            n,
            o,
            i,
            s,
            a = .75 * t.length,
            c = t.length,
            u = 0;"=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);var h = new ArrayBuffer(a),
            f = new Uint8Array(h);for (e = 0; e < c; e += 4) {
          n = r[t.charCodeAt(e)], o = r[t.charCodeAt(e + 1)], i = r[t.charCodeAt(e + 2)], s = r[t.charCodeAt(e + 3)], f[u++] = n << 2 | o >> 4, f[u++] = (15 & o) << 4 | i >> 2, f[u++] = (3 & i) << 6 | 63 & s;
        }return h;
      };
    }();
  }, function (t, e) {
    var r = undefined !== r ? r : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder,
        n = function () {
      try {
        return 2 === new Blob(["hi"]).size;
      } catch (t) {
        return false;
      }
    }(),
        o = n && function () {
      try {
        return 2 === new Blob([new Uint8Array([1, 2])]).size;
      } catch (t) {
        return false;
      }
    }(),
        i = r && r.prototype.append && r.prototype.getBlob;function s(t) {
      return t.map(function (t) {
        if (t.buffer instanceof ArrayBuffer) {
          var e = t.buffer;if (t.byteLength !== e.byteLength) {
            var r = new Uint8Array(t.byteLength);r.set(new Uint8Array(e, t.byteOffset, t.byteLength)), e = r.buffer;
          }return e;
        }return t;
      });
    }function a(t, e) {
      e = e || {};var n = new r();return s(t).forEach(function (t) {
        n.append(t);
      }), e.type ? n.getBlob(e.type) : n.getBlob();
    }function c(t, e) {
      return new Blob(s(t), e || {});
    }"undefined" != typeof Blob && (a.prototype = Blob.prototype, c.prototype = Blob.prototype), t.exports = n ? o ? Blob : c : i ? a : undefined;
  }, function (t, e) {
    t.exports = function (t, e) {
      var r = function r() {};r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t;
    };
  }, function (t, e, r) {
    "use strict";

    var n,
        o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
        i = {},
        s = 0,
        a = 0;function c(t) {
      var e = "";do {
        e = o[t % 64] + e, t = Math.floor(t / 64);
      } while (t > 0);return e;
    }function u() {
      var t = c(+new Date());return t !== n ? (s = 0, n = t) : t + "." + c(s++);
    }for (; a < 64; a++) {
      i[o[a]] = a;
    }u.encode = c, u.decode = function (t) {
      var e = 0;for (a = 0; a < t.length; a++) {
        e = 64 * e + i[t.charAt(a)];
      }return e;
    }, t.exports = u;
  }, function (t, e, r) {
    var n = r(42),
        _r = r(43),
        o = _r.URL,
        _r2 = r(50),
        i = _r2.addEventListener,
        s = _r2.removeEventListener,
        a = r(51),
        c = r(0)("wx-ws:wx-ws"),
        u = ["nodebuffer", "arraybuffer"],
        h = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];

    var f = function (_n) {
      _inherits(f, _n);

      function f(t, e, r) {
        var _this;

        _classCallCheck(this, f);

        (_this = _possibleConstructorReturn(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this)), _this), c("constructor: ", t, e, r), _this.readyState = f.CONNECTING, _this.protocol = "", _this._closeCode = 1006, _this._closeMessage = "", _this._binaryType = u[0], _this._socket = null, _this.supports = { binary: true }, null !== t && (_this._bufferedAmount = 0, _this._redirects = 0, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e && (r = e, e = undefined), function (t, e, r, n) {
          var o = _extends({ maxPayload: 104857600, perMessageDeflate: true }, n);c("initAsClient: opts: ", o), t.url = e;var i = function (t, e) {
            c("start create conn: ", t);var r = wx.connectSocket(t);if (r) return r;return { onClose: wx.onSocketClose, onOpen: wx.onSocketOpen, onError: wx.onSocketError, onMessage: wx.onSocketMessage, send: wx.sendSocketMessage, close: wx.closeSocket };
          }({ url: t.url, header: o.headers, protocols: r, perMessageDeflate: !!o.perMessageDeflate, tcpNoDelay: !!o.tcpNoDelay });t.setSocket(i);
        }(_this, t, e, r));
        return _this;
      }

      _createClass(f, [{
        key: "setSocket",
        value: function setSocket(t, e) {
          var _this2 = this;

          this._socket = t, this._sender = new a(t), c("set socket: socket =", t, ", head =", e, ", this: ", this), t.onOpen(function (t) {
            c("socket onopen: ", t), _this2.readyState = f.OPEN, _this2.emit("open", t);
          }), t.onClose(function (t) {
            c("socket onclose: ", t), _this2._closeCode = t.code, _this2._closeMessage = t.reason, _this2.emitClose();
          }), t.onError(function (t) {
            c("socket onerror: ", t), _this2.emit("error", t);
          }), t.onMessage(function (t) {
            c("socket onmessage: ", t, _this2), _this2.emit("message", t.data);
          });
        }
      }, {
        key: "emitClose",
        value: function emitClose() {
          this.readyState = f.CLOSED, this.removeEventListener(), this.emit("close", this._closeCode, this._closeMessage);
        }
      }, {
        key: "send",
        value: function send(t, e, r) {
          if (c("socket send msg: ", t, this.readyState, ", sender: ", this._sender), this.readyState === f.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");if ("number" == typeof t && (t = t.toString()), this.readyState === f.OPEN) this._sender.send(t, e, r);else if (r) {
            r(new Error("WebSocket is not open: readyState " + this.readyState + " " + ("(" + h[this.readyState] + ")")));
          }
        }
      }, {
        key: "close",
        value: function close(t, e) {
          var _this3 = this;

          if (c("closing connection: ", this.readyState), this.readyState !== f.CLOSED) {
            if (this.readyState === f.CONNECTING) {
              throw new Error("WebSocket was closed before the connection was established");
            }this.readyState !== f.CLOSING && (this.readyState = f.CLOSING, setTimeout(this._socket.close({ code: t, reason: e, success: function success() {
                _this3.readyState = f.CLOSEDt, _this3._socket = null;
              } }), 3e4));
          }
        }
      }, {
        key: "CONNECTING",
        get: function get() {
          return f.CONNECTING;
        }
      }, {
        key: "CLOSING",
        get: function get() {
          return f.CLOSING;
        }
      }, {
        key: "CLOSED",
        get: function get() {
          return f.CLOSED;
        }
      }, {
        key: "OPEN",
        get: function get() {
          return f.OPEN;
        }
      }, {
        key: "bufferedAmount",
        get: function get() {
          return this._socket ? (this._socket.bufferSize || 0) + this._sender._bufferedBytes : this._bufferedAmount;
        }
      }, {
        key: "binaryType",
        get: function get() {
          return this._binaryType;
        },
        set: function set(t) {
          c("set binaryType: ", t), u.includes(t) && (this._binaryType = t);
        }
      }]);

      return f;
    }(n);

    h.forEach(function (t, e) {
      f[t] = e;
    }), ["open", "error", "close", "message"].forEach(function (t) {
      Object.defineProperty(f.prototype, "on" + t, {
        get: function get() {
          var e = this.listeners(t);for (var _t = 0; _t < e.length; _t++) {
            if (e[_t]._listener) return e[_t]._listener;
          }
        },
        set: function set(e) {
          var r = this.listeners(t);for (var _e = 0; _e < r.length; _e++) {
            r[_e]._listener && this.removeListener(t, r[_e]);
          }this.addEventListener(t, e);
        }
      });
    }), f.prototype.addEventListener = i, f.prototype.removeEventListener = s, t.exports = f;
  }, function (t, e, r) {
    "use strict";

    var n,
        o = "object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) ? Reflect : null,
        i = o && "function" == typeof o.apply ? o.apply : function (t, e, r) {
      return Function.prototype.apply.call(t, e, r);
    };n = o && "function" == typeof o.ownKeys ? o.ownKeys : Object.getOwnPropertySymbols ? function (t) {
      return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
    } : function (t) {
      return Object.getOwnPropertyNames(t);
    };var s = Number.isNaN || function (t) {
      return t != t;
    };function a() {
      a.init.call(this);
    }t.exports = a, a.EventEmitter = a, a.prototype._events = undefined, a.prototype._eventsCount = 0, a.prototype._maxListeners = undefined;var c = 10;function u(t) {
      if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (typeof t === "undefined" ? "undefined" : _typeof(t)));
    }function h(t) {
      return undefined === t._maxListeners ? a.defaultMaxListeners : t._maxListeners;
    }function f(t, e, r, n) {
      var o, i, s, a;if (u(r), undefined === (i = t._events) ? (i = t._events = Object.create(null), t._eventsCount = 0) : (undefined !== i.newListener && (t.emit("newListener", e, r.listener ? r.listener : r), i = t._events), s = i[e]), undefined === s) s = i[e] = r, ++t._eventsCount;else if ("function" == typeof s ? s = i[e] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r), (o = h(t)) > 0 && s.length > o && !s.warned) {
        s.warned = true;var c = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");c.name = "MaxListenersExceededWarning", c.emitter = t, c.type = e, c.count = s.length, a = c, console && console.warn && console.warn(a);
      }return t;
    }function p() {
      if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }function l(t, e, r) {
      var n = { fired: false, wrapFn: undefined, target: t, type: e, listener: r },
          o = p.bind(n);return o.listener = r, n.wrapFn = o, o;
    }function d(t, e, r) {
      var n = t._events;if (undefined === n) return [];var o = n[e];return undefined === o ? [] : "function" == typeof o ? r ? [o.listener || o] : [o] : r ? function (t) {
        for (var e = new Array(t.length), r = 0; r < e.length; ++r) {
          e[r] = t[r].listener || t[r];
        }return e;
      }(o) : g(o, o.length);
    }function y(t) {
      var e = this._events;if (undefined !== e) {
        var r = e[t];if ("function" == typeof r) return 1;if (undefined !== r) return r.length;
      }return 0;
    }function g(t, e) {
      for (var r = new Array(e), n = 0; n < e; ++n) {
        r[n] = t[n];
      }return r;
    }Object.defineProperty(a, "defaultMaxListeners", { enumerable: true, get: function get() {
        return c;
      }, set: function set(t) {
        if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");c = t;
      } }), a.init = function () {
      undefined !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || undefined;
    }, a.prototype.setMaxListeners = function (t) {
      if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");return this._maxListeners = t, this;
    }, a.prototype.getMaxListeners = function () {
      return h(this);
    }, a.prototype.emit = function (t) {
      for (var e = [], r = 1; r < arguments.length; r++) {
        e.push(arguments[r]);
      }var n = "error" === t,
          o = this._events;if (undefined !== o) n = n && undefined === o.error;else if (!n) return false;if (n) {
        var s;if (e.length > 0 && (s = e[0]), s instanceof Error) throw s;var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));throw a.context = s, a;
      }var c = o[t];if (undefined === c) return false;if ("function" == typeof c) i(c, this, e);else {
        var u = c.length,
            h = g(c, u);for (r = 0; r < u; ++r) {
          i(h[r], this, e);
        }
      }return true;
    }, a.prototype.addListener = function (t, e) {
      return f(this, t, e, false);
    }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function (t, e) {
      return f(this, t, e, true);
    }, a.prototype.once = function (t, e) {
      return u(e), this.on(t, l(this, t, e)), this;
    }, a.prototype.prependOnceListener = function (t, e) {
      return u(e), this.prependListener(t, l(this, t, e)), this;
    }, a.prototype.removeListener = function (t, e) {
      var r, n, o, i, s;if (u(e), undefined === (n = this._events)) return this;if (undefined === (r = n[t])) return this;if (r === e || r.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[t], n.removeListener && this.emit("removeListener", t, r.listener || e));else if ("function" != typeof r) {
        for (o = -1, i = r.length - 1; i >= 0; i--) {
          if (r[i] === e || r[i].listener === e) {
            s = r[i].listener, o = i;break;
          }
        }if (o < 0) return this;0 === o ? r.shift() : function (t, e) {
          for (; e + 1 < t.length; e++) {
            t[e] = t[e + 1];
          }t.pop();
        }(r, o), 1 === r.length && (n[t] = r[0]), undefined !== n.removeListener && this.emit("removeListener", t, s || e);
      }return this;
    }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function (t) {
      var e, r, n;if (undefined === (r = this._events)) return this;if (undefined === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : undefined !== r[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[t]), this;if (0 === arguments.length) {
        var o,
            i = Object.keys(r);for (n = 0; n < i.length; ++n) {
          "removeListener" !== (o = i[n]) && this.removeAllListeners(o);
        }return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
      }if ("function" == typeof (e = r[t])) this.removeListener(t, e);else if (undefined !== e) for (n = e.length - 1; n >= 0; n--) {
        this.removeListener(t, e[n]);
      }return this;
    }, a.prototype.listeners = function (t) {
      return d(this, t, true);
    }, a.prototype.rawListeners = function (t) {
      return d(this, t, false);
    }, a.listenerCount = function (t, e) {
      return "function" == typeof t.listenerCount ? t.listenerCount(e) : y.call(t, e);
    }, a.prototype.listenerCount = y, a.prototype.eventNames = function () {
      return this._eventsCount > 0 ? n(this._events) : [];
    };
  }, function (t, e, r) {
    "use strict";

    var n = r(44),
        o = r(46);function i() {
      this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
    }e.parse = b, e.resolve = function (t, e) {
      return b(t, false, true).resolve(e);
    }, e.resolveObject = function (t, e) {
      return t ? b(t, false, true).resolveObject(e) : e;
    }, e.format = function (t) {
      o.isString(t) && (t = b(t));return t instanceof i ? t.format() : i.prototype.format.call(t);
    }, e.Url = i;var s = /^([a-z0-9.+-]+:)/i,
        a = /:[0-9]*$/,
        c = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        u = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
        h = ["'"].concat(u),
        f = ["%", "/", "?", ";", "#"].concat(h),
        p = ["/", "?", "#"],
        l = /^[+a-z0-9A-Z_-]{0,63}$/,
        d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        y = { javascript: true, "javascript:": true },
        g = { javascript: true, "javascript:": true },
        v = { http: true, https: true, ftp: true, gopher: true, file: true, "http:": true, "https:": true, "ftp:": true, "gopher:": true, "file:": true },
        m = r(47);function b(t, e, r) {
      if (t && o.isObject(t) && t instanceof i) return t;var n = new i();return n.parse(t, e, r), n;
    }i.prototype.parse = function (t, e, r) {
      if (!o.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));var i = t.indexOf("?"),
          a = -1 !== i && i < t.indexOf("#") ? "?" : "#",
          u = t.split(a);u[0] = u[0].replace(/\\/g, "/");var b = t = u.join(a);if (b = b.trim(), !r && 1 === t.split("#").length) {
        var w = c.exec(b);if (w) return this.path = b, this.href = b, this.pathname = w[1], w[2] ? (this.search = w[2], this.query = e ? m.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this;
      }var A = s.exec(b);if (A) {
        var k = (A = A[0]).toLowerCase();this.protocol = k, b = b.substr(A.length);
      }if (r || A || b.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var E = "//" === b.substr(0, 2);!E || A && g[A] || (b = b.substr(2), this.slashes = true);
      }if (!g[A] && (E || A && !v[A])) {
        for (var _, S, O = -1, B = 0; B < p.length; B++) {
          -1 !== (x = b.indexOf(p[B])) && (-1 === O || x < O) && (O = x);
        }-1 !== (S = -1 === O ? b.lastIndexOf("@") : b.lastIndexOf("@", O)) && (_ = b.slice(0, S), b = b.slice(S + 1), this.auth = decodeURIComponent(_)), O = -1;for (B = 0; B < f.length; B++) {
          var x;-1 !== (x = b.indexOf(f[B])) && (-1 === O || x < O) && (O = x);
        }-1 === O && (O = b.length), this.host = b.slice(0, O), b = b.slice(O), this.parseHost(), this.hostname = this.hostname || "";var C = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];if (!C) for (var R = this.hostname.split(/\./), P = (B = 0, R.length); B < P; B++) {
          var T = R[B];if (T && !T.match(l)) {
            for (var j = "", N = 0, L = T.length; N < L; N++) {
              T.charCodeAt(N) > 127 ? j += "x" : j += T[N];
            }if (!j.match(l)) {
              var U = R.slice(0, B),
                  I = R.slice(B + 1),
                  D = T.match(d);D && (U.push(D[1]), I.unshift(D[2])), I.length && (b = "/" + I.join(".") + b), this.hostname = U.join(".");break;
            }
          }
        }this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), C || (this.hostname = n.toASCII(this.hostname));var M = this.port ? ":" + this.port : "",
            q = this.hostname || "";this.host = q + M, this.href += this.host, C && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== b[0] && (b = "/" + b));
      }if (!y[k]) for (B = 0, P = h.length; B < P; B++) {
        var Y = h[B];if (-1 !== b.indexOf(Y)) {
          var z = encodeURIComponent(Y);z === Y && (z = escape(Y)), b = b.split(Y).join(z);
        }
      }var F = b.indexOf("#");-1 !== F && (this.hash = b.substr(F), b = b.slice(0, F));var H = b.indexOf("?");if (-1 !== H ? (this.search = b.substr(H), this.query = b.substr(H + 1), e && (this.query = m.parse(this.query)), b = b.slice(0, H)) : e && (this.search = "", this.query = {}), b && (this.pathname = b), v[k] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
        M = this.pathname || "";var J = this.search || "";this.path = M + J;
      }return this.href = this.format(), this;
    }, i.prototype.format = function () {
      var t = this.auth || "";t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");var e = this.protocol || "",
          r = this.pathname || "",
          n = this.hash || "",
          i = false,
          s = "";this.host ? i = t + this.host : this.hostname && (i = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && o.isObject(this.query) && Object.keys(this.query).length && (s = m.stringify(this.query));var a = this.search || s && "?" + s || "";return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || v[e]) && false !== i ? (i = "//" + (i || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : i || (i = ""), n && "#" !== n.charAt(0) && (n = "#" + n), a && "?" !== a.charAt(0) && (a = "?" + a), e + i + (r = r.replace(/[?#]/g, function (t) {
        return encodeURIComponent(t);
      })) + (a = a.replace("#", "%23")) + n;
    }, i.prototype.resolve = function (t) {
      return this.resolveObject(b(t, false, true)).format();
    }, i.prototype.resolveObject = function (t) {
      if (o.isString(t)) {
        var e = new i();e.parse(t, false, true), t = e;
      }for (var r = new i(), n = Object.keys(this), s = 0; s < n.length; s++) {
        var a = n[s];r[a] = this[a];
      }if (r.hash = t.hash, "" === t.href) return r.href = r.format(), r;if (t.slashes && !t.protocol) {
        for (var c = Object.keys(t), u = 0; u < c.length; u++) {
          var h = c[u];"protocol" !== h && (r[h] = t[h]);
        }return v[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
      }if (t.protocol && t.protocol !== r.protocol) {
        if (!v[t.protocol]) {
          for (var f = Object.keys(t), p = 0; p < f.length; p++) {
            var l = f[p];r[l] = t[l];
          }return r.href = r.format(), r;
        }if (r.protocol = t.protocol, t.host || g[t.protocol]) r.pathname = t.pathname;else {
          for (var d = (t.pathname || "").split("/"); d.length && !(t.host = d.shift());) {}t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), r.pathname = d.join("/");
        }if (r.search = t.search, r.query = t.query, r.host = t.host || "", r.auth = t.auth, r.hostname = t.hostname || t.host, r.port = t.port, r.pathname || r.search) {
          var y = r.pathname || "",
              m = r.search || "";r.path = y + m;
        }return r.slashes = r.slashes || t.slashes, r.href = r.format(), r;
      }var b = r.pathname && "/" === r.pathname.charAt(0),
          w = t.host || t.pathname && "/" === t.pathname.charAt(0),
          A = w || b || r.host && t.pathname,
          k = A,
          E = r.pathname && r.pathname.split("/") || [],
          _ = (d = t.pathname && t.pathname.split("/") || [], r.protocol && !v[r.protocol]);if (_ && (r.hostname = "", r.port = null, r.host && ("" === E[0] ? E[0] = r.host : E.unshift(r.host)), r.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === d[0] ? d[0] = t.host : d.unshift(t.host)), t.host = null), A = A && ("" === d[0] || "" === E[0])), w) r.host = t.host || "" === t.host ? t.host : r.host, r.hostname = t.hostname || "" === t.hostname ? t.hostname : r.hostname, r.search = t.search, r.query = t.query, E = d;else if (d.length) E || (E = []), E.pop(), E = E.concat(d), r.search = t.search, r.query = t.query;else if (!o.isNullOrUndefined(t.search)) {
        if (_) r.hostname = r.host = E.shift(), (C = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = C.shift(), r.host = r.hostname = C.shift());return r.search = t.search, r.query = t.query, o.isNull(r.pathname) && o.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
      }if (!E.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;for (var S = E.slice(-1)[0], O = (r.host || t.host || E.length > 1) && ("." === S || ".." === S) || "" === S, B = 0, x = E.length; x >= 0; x--) {
        "." === (S = E[x]) ? E.splice(x, 1) : ".." === S ? (E.splice(x, 1), B++) : B && (E.splice(x, 1), B--);
      }if (!A && !k) for (; B--; B) {
        E.unshift("..");
      }!A || "" === E[0] || E[0] && "/" === E[0].charAt(0) || E.unshift(""), O && "/" !== E.join("/").substr(-1) && E.push("");var C,
          R = "" === E[0] || E[0] && "/" === E[0].charAt(0);_ && (r.hostname = r.host = R ? "" : E.length ? E.shift() : "", (C = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = C.shift(), r.host = r.hostname = C.shift()));return (A = A || r.host && E.length) && !R && E.unshift(""), E.length ? r.pathname = E.join("/") : (r.pathname = null, r.path = null), o.isNull(r.pathname) && o.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t.auth || r.auth, r.slashes = r.slashes || t.slashes, r.href = r.format(), r;
    }, i.prototype.parseHost = function () {
      var t = this.host,
          e = a.exec(t);e && (":" !== (e = e[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t);
    };
  }, function (t, e, r) {
    (function (t, n) {
      var o; /*! https://mths.be/punycode v1.4.1 by @mathias */!function (i) {
        e && e.nodeType, t && t.nodeType;var s = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n;s.global !== s && s.window !== s && s.self;var a,
            c = 2147483647,
            u = /^xn--/,
            h = /[^\x20-\x7E]/,
            f = /[\x2E\u3002\uFF0E\uFF61]/g,
            p = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
            l = Math.floor,
            d = String.fromCharCode;function y(t) {
          throw new RangeError(p[t]);
        }function g(t, e) {
          for (var r = t.length, n = []; r--;) {
            n[r] = e(t[r]);
          }return n;
        }function v(t, e) {
          var r = t.split("@"),
              n = "";return r.length > 1 && (n = r[0] + "@", t = r[1]), n + g((t = t.replace(f, ".")).split("."), e).join(".");
        }function m(t) {
          for (var e, r, n = [], o = 0, i = t.length; o < i;) {
            (e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i ? 56320 == (64512 & (r = t.charCodeAt(o++))) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e), o--) : n.push(e);
          }return n;
        }function b(t) {
          return g(t, function (t) {
            var e = "";return t > 65535 && (e += d((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += d(t);
          }).join("");
        }function w(t, e) {
          return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
        }function A(t, e, r) {
          var n = 0;for (t = r ? l(t / 700) : t >> 1, t += l(t / e); t > 455; n += 36) {
            t = l(t / 35);
          }return l(n + 36 * t / (t + 38));
        }function k(t) {
          var e,
              r,
              n,
              o,
              i,
              s,
              a,
              u,
              h,
              f,
              p,
              d = [],
              g = t.length,
              v = 0,
              m = 128,
              w = 72;for ((r = t.lastIndexOf("-")) < 0 && (r = 0), n = 0; n < r; ++n) {
            t.charCodeAt(n) >= 128 && y("not-basic"), d.push(t.charCodeAt(n));
          }for (o = r > 0 ? r + 1 : 0; o < g;) {
            for (i = v, s = 1, a = 36; o >= g && y("invalid-input"), ((u = (p = t.charCodeAt(o++)) - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : 36) >= 36 || u > l((c - v) / s)) && y("overflow"), v += u * s, !(u < (h = a <= w ? 1 : a >= w + 26 ? 26 : a - w)); a += 36) {
              s > l(c / (f = 36 - h)) && y("overflow"), s *= f;
            }w = A(v - i, e = d.length + 1, 0 == i), l(v / e) > c - m && y("overflow"), m += l(v / e), v %= e, d.splice(v++, 0, m);
          }return b(d);
        }function E(t) {
          var e,
              r,
              n,
              o,
              i,
              s,
              a,
              u,
              h,
              f,
              p,
              g,
              v,
              b,
              k,
              E = [];for (g = (t = m(t)).length, e = 128, r = 0, i = 72, s = 0; s < g; ++s) {
            (p = t[s]) < 128 && E.push(d(p));
          }for (n = o = E.length, o && E.push("-"); n < g;) {
            for (a = c, s = 0; s < g; ++s) {
              (p = t[s]) >= e && p < a && (a = p);
            }for (a - e > l((c - r) / (v = n + 1)) && y("overflow"), r += (a - e) * v, e = a, s = 0; s < g; ++s) {
              if ((p = t[s]) < e && ++r > c && y("overflow"), p == e) {
                for (u = r, h = 36; !(u < (f = h <= i ? 1 : h >= i + 26 ? 26 : h - i)); h += 36) {
                  k = u - f, b = 36 - f, E.push(d(w(f + k % b, 0))), u = l(k / b);
                }E.push(d(w(u, 0))), i = A(r, v, n == o), r = 0, ++n;
              }
            }++r, ++e;
          }return E.join("");
        }a = { version: "1.4.1", ucs2: { decode: m, encode: b }, decode: k, encode: E, toASCII: function toASCII(t) {
            return v(t, function (t) {
              return h.test(t) ? "xn--" + E(t) : t;
            });
          }, toUnicode: function toUnicode(t) {
            return v(t, function (t) {
              return u.test(t) ? k(t.slice(4).toLowerCase()) : t;
            });
          } }, undefined === (o = function () {
          return a;
        }.call(e, r, e, t)) || (t.exports = o);
      }();
    }).call(this, r(45)(t), r(9));
  }, function (t, e) {
    t.exports = function (t) {
      return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: true, get: function get() {
          return t.l;
        } }), Object.defineProperty(t, "id", { enumerable: true, get: function get() {
          return t.i;
        } }), t.webpackPolyfill = 1), t;
    };
  }, function (t, e, r) {
    "use strict";

    t.exports = { isString: function isString(t) {
        return "string" == typeof t;
      }, isObject: function isObject(t) {
        return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
      }, isNull: function isNull(t) {
        return null === t;
      }, isNullOrUndefined: function isNullOrUndefined(t) {
        return null == t;
      } };
  }, function (t, e, r) {
    "use strict";

    e.decode = e.parse = r(48), e.encode = e.stringify = r(49);
  }, function (t, e, r) {
    "use strict";

    function n(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }t.exports = function (t, e, r, i) {
      e = e || "&", r = r || "=";var s = {};if ("string" != typeof t || 0 === t.length) return s;var a = /\+/g;t = t.split(e);var c = 1e3;i && "number" == typeof i.maxKeys && (c = i.maxKeys);var u = t.length;c > 0 && u > c && (u = c);for (var h = 0; h < u; ++h) {
        var f,
            p,
            l,
            d,
            y = t[h].replace(a, "%20"),
            g = y.indexOf(r);g >= 0 ? (f = y.substr(0, g), p = y.substr(g + 1)) : (f = y, p = ""), l = decodeURIComponent(f), d = decodeURIComponent(p), n(s, l) ? o(s[l]) ? s[l].push(d) : s[l] = [s[l], d] : s[l] = d;
      }return s;
    };var o = Array.isArray || function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    };
  }, function (t, e, r) {
    "use strict";

    var n = function n(t) {
      switch (typeof t === "undefined" ? "undefined" : _typeof(t)) {case "string":
          return t;case "boolean":
          return t ? "true" : "false";case "number":
          return isFinite(t) ? t : "";default:
          return "";}
    };t.exports = function (t, e, r, a) {
      return e = e || "&", r = r || "=", null === t && (t = undefined), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? i(s(t), function (s) {
        var a = encodeURIComponent(n(s)) + r;return o(t[s]) ? i(t[s], function (t) {
          return a + encodeURIComponent(n(t));
        }).join(e) : a + encodeURIComponent(n(t[s]));
      }).join(e) : a ? encodeURIComponent(n(a)) + r + encodeURIComponent(n(t)) : "";
    };var o = Array.isArray || function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    };function i(t, e) {
      if (t.map) return t.map(e);for (var r = [], n = 0; n < t.length; n++) {
        r.push(e(t[n], n));
      }return r;
    }var s = Object.keys || function (t) {
      var e = [];for (var r in t) {
        Object.prototype.hasOwnProperty.call(t, r) && e.push(r);
      }return e;
    };
  }, function (t, e, r) {
    "use strict";

    var n = function n(t, e) {
      _classCallCheck(this, n);

      this.target = e, this.type = t;
    };

    var o = function (_n2) {
      _inherits(o, _n2);

      function o(t, e) {
        var _this4;

        _classCallCheck(this, o);

        (_this4 = _possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, "message", e)), _this4), _this4.data = t;
        return _this4;
      }

      return o;
    }(n);

    var i = function (_n3) {
      _inherits(i, _n3);

      function i(t, e, r) {
        var _this5;

        _classCallCheck(this, i);

        (_this5 = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, "close", r)), _this5), _this5.wasClean = r._closeFrameReceived && r._closeFrameSent, _this5.reason = e, _this5.code = t;
        return _this5;
      }

      return i;
    }(n);

    var s = function (_n4) {
      _inherits(s, _n4);

      function s(t) {
        _classCallCheck(this, s);

        return _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, "open", t));
      }

      return s;
    }(n);

    var a = function (_n5) {
      _inherits(a, _n5);

      function a(t, e) {
        var _this7;

        _classCallCheck(this, a);

        (_this7 = _possibleConstructorReturn(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, "error", e)), _this7), _this7.message = t.message, _this7.error = t;
        return _this7;
      }

      return a;
    }(n);

    var c = {
      addEventListener: function addEventListener(t, e) {
        function r(t) {
          e.call(this, new o(t, this));
        }function n(t, r) {
          e.call(this, new i(t, r, this));
        }function c(t) {
          e.call(this, new a(t, this));
        }function u() {
          e.call(this, new s(this));
        }"function" == typeof e && ("message" === t ? (r._listener = e, this.on(t, r)) : "close" === t ? (n._listener = e, this.on(t, n)) : "error" === t ? (c._listener = e, this.on(t, c)) : "open" === t ? (u._listener = e, this.on(t, u)) : this.on(t, e));
      },
      removeEventListener: function removeEventListener(t, e) {
        var r = this.listeners(t);for (var _n6 = 0; _n6 < r.length; _n6++) {
          r[_n6] !== e && r[_n6]._listener !== e || this.removeListener(t, r[_n6]);
        }
      }
    };t.exports = c;
  }, function (t, e, r) {
    var n = r(0)("wx-ws:sender");t.exports = function () {
      function _class(t) {
        _classCallCheck(this, _class);

        this._socket = t, this._queue = [], this._bufferedBytes = 0, this._deflating = false;
      }

      _createClass(_class, [{
        key: "send",
        value: function send(t, e, r) {
          n("send msg: ", t, " sender: ", this, this._deflating), this._deflating ? this.enqueue([this.dispatch, t, e, r]) : this.dispatch(t, e, r);
        }
      }, {
        key: "dispatch",
        value: function dispatch(t, e, r) {
          n("dispatch msg: ", t, ", sender: ", this), this._deflating = true, "function" == typeof e && (r = e, e = {}), this._deflating = false, this._socket.send({ data: t, success: function success(t) {
              return r && r(null, t);
            }, fail: function fail(t) {
              return r && r(t);
            } }), this.dequeue();
        }
      }, {
        key: "dequeue",
        value: function dequeue() {
          for (; !this._deflating && this._queue.length;) {
            var _t2 = this._queue.shift();this._bufferedBytes -= _t2[1].length, Reflect.apply(_t2[0], this, _t2.slice(1));
          }
        }
      }, {
        key: "enqueue",
        value: function enqueue(t) {
          this._bufferedBytes += t[1].length, this._queue.push(t);
        }
      }]);

      return _class;
    }();
  }, function (t, e) {
    t.exports = function (t, e) {
      for (var r = [], n = (e = e || 0) || 0; n < t.length; n++) {
        r[n - e] = t[n];
      }return r;
    };
  }, function (t, e) {
    function r(t) {
      t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
    }t.exports = r, r.prototype.duration = function () {
      var t = this.ms * Math.pow(this.factor, this.attempts++);if (this.jitter) {
        var e = Math.random(),
            r = Math.floor(e * this.jitter * t);t = 0 == (1 & Math.floor(10 * e)) ? t - r : t + r;
      }return 0 | Math.min(t, this.max);
    }, r.prototype.reset = function () {
      this.attempts = 0;
    }, r.prototype.setMin = function (t) {
      this.ms = t;
    }, r.prototype.setMax = function (t) {
      this.max = t;
    }, r.prototype.setJitter = function (t) {
      this.jitter = t;
    };
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};
    module.paths = [];
    // module.parent = undefined by default
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }
  return module;
};

/***/ }),

/***/ "./src/pages/index/index.less":
/*!************************************!*\
  !*** ./src/pages/index/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/index/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/index/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/index/index.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/index/index.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/index.tsx?taro&type=template&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/index/index.tsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_C_Users_Lee_Desktop_code_touch_control_board_app_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=C:/Users/Lee/Desktop/code/touch-control-board-app/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=C:\\Users\\Lee\\Desktop\\code\\touch-control-board-app\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_C_Users_Lee_Desktop_code_touch_control_board_app_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_C_Users_Lee_Desktop_code_touch_control_board_app_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_C_Users_Lee_Desktop_code_touch_control_board_app_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_C_Users_Lee_Desktop_code_touch_control_board_app_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/socket/index.ts":
/*!*****************************!*\
  !*** ./src/socket/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weappSocket = __webpack_require__(/*! weapp.socket.io */ "./node_modules/weapp.socket.io/lib/weapp.socket.io.js");

var _weappSocket2 = _interopRequireDefault(_weappSocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createSocket = function createSocket(ip) {
  var socket = (0, _weappSocket2.default)(ip);
  socket.on('connect', function (str) {
    console.log('connect', str);
  });
  socket.on('connect_error', function (str) {
    console.log('connect_error', str);
  });
  return socket;
};
exports.default = createSocket;

/***/ })

},[["./src/pages/index/index.tsx","runtime","vendors"]]]);