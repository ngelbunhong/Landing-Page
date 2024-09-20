(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    if (typeof this['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    root['kotlinx-coroutines-core'] = factory(typeof this['kotlinx-coroutines-core'] === 'undefined' ? {} : this['kotlinx-coroutines-core'], this['kotlin-kotlin-stdlib'], this['kotlinx-atomicfu']);
  }
}(globalThis, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.d2;
  var protoOf = kotlin_kotlin.$_$.u6;
  var THROW_CCE = kotlin_kotlin.$_$.z8;
  var Element = kotlin_kotlin.$_$.i5;
  var Continuation = kotlin_kotlin.$_$.e5;
  var initMetadataForClass = kotlin_kotlin.$_$.d6;
  var VOID = kotlin_kotlin.$_$.e;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.a2;
  var Key_instance = kotlin_kotlin.$_$.z1;
  var equals = kotlin_kotlin.$_$.w5;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.x4;
  var toString = kotlin_kotlin.$_$.w6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var intercepted = kotlin_kotlin.$_$.y4;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w4;
  var initMetadataForInterface = kotlin_kotlin.$_$.g6;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var isInterface = kotlin_kotlin.$_$.m6;
  var toString_0 = kotlin_kotlin.$_$.o9;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var initMetadataForObject = kotlin_kotlin.$_$.i6;
  var hashCode = kotlin_kotlin.$_$.c6;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.t;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.v1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.w1;
  var Companion_instance = kotlin_kotlin.$_$.c2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.u1;
  var createFailure = kotlin_kotlin.$_$.f9;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.a5;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.z4;
  var get = kotlin_kotlin.$_$.b5;
  var minusKey = kotlin_kotlin.$_$.c5;
  var ContinuationInterceptor = kotlin_kotlin.$_$.d5;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var addSuppressed = kotlin_kotlin.$_$.c9;
  var Enum = kotlin_kotlin.$_$.t8;
  var startCoroutine = kotlin_kotlin.$_$.l5;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.i9;
  var Long = kotlin_kotlin.$_$.x8;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.h;
  var RuntimeException = kotlin_kotlin.$_$.y8;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.m1;
  var captureStack = kotlin_kotlin.$_$.q5;
  var Error_0 = kotlin_kotlin.$_$.u8;
  var Error_init_$Init$ = kotlin_kotlin.$_$.b1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.y;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.n9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var CancellationException = kotlin_kotlin.$_$.v4;
  var ArrayList = kotlin_kotlin.$_$.j2;
  var CoroutineImpl = kotlin_kotlin.$_$.k5;
  var SequenceScope = kotlin_kotlin.$_$.h7;
  var initMetadataForLambda = kotlin_kotlin.$_$.h6;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var sequence = kotlin_kotlin.$_$.m7;
  var plus = kotlin_kotlin.$_$.j5;
  var get_0 = kotlin_kotlin.$_$.g5;
  var fold = kotlin_kotlin.$_$.f5;
  var minusKey_0 = kotlin_kotlin.$_$.h5;
  var anyToString = kotlin_kotlin.$_$.o5;
  var UnsupportedOperationException = kotlin_kotlin.$_$.b9;
  var Exception = kotlin_kotlin.$_$.v8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var ensureNotNull = kotlin_kotlin.$_$.g9;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.u;
  var getStringHashCode = kotlin_kotlin.$_$.b6;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.l1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.r;
  var removeFirstOrNull = kotlin_kotlin.$_$.g4;
  var KtList = kotlin_kotlin.$_$.l2;
  var MutableCollection = kotlin_kotlin.$_$.o2;
  var coerceIn = kotlin_kotlin.$_$.a7;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.o1;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(ParentJob, 'ParentJob', VOID, VOID, [Element], [0]);
  initMetadataForClass(JobSupport, 'JobSupport', VOID, VOID, [Element, ParentJob], [0]);
  initMetadataForInterface(CoroutineScope, 'CoroutineScope');
  initMetadataForClass(AbstractCoroutine, 'AbstractCoroutine', VOID, JobSupport, [JobSupport, Element, Continuation, CoroutineScope], [0]);
  initMetadataForClass(StandaloneCoroutine, 'StandaloneCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', VOID, StandaloneCoroutine, VOID, [0]);
  initMetadataForClass(ScopeCoroutine, 'ScopeCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(DispatchedCoroutine, 'DispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.yj(cause) : $super.yj.call(this, cause);
  }
  initMetadataForInterface(CancellableContinuation, 'CancellableContinuation', VOID, VOID, [Continuation]);
  initMetadataForInterface(Runnable, 'Runnable');
  initMetadataForClass(SchedulerTask, 'SchedulerTask', VOID, VOID, [Runnable]);
  initMetadataForClass(DispatchedTask, 'DispatchedTask', VOID, SchedulerTask);
  initMetadataForClass(CancellableContinuationImpl, 'CancellableContinuationImpl', VOID, DispatchedTask, [DispatchedTask, CancellableContinuation]);
  initMetadataForInterface(NotCompleted, 'NotCompleted');
  initMetadataForInterface(CancelHandler, 'CancelHandler', VOID, VOID, [NotCompleted]);
  initMetadataForClass(UserSupplied, 'UserSupplied', VOID, VOID, [CancelHandler]);
  initMetadataForObject(Active, 'Active', VOID, VOID, [NotCompleted]);
  initMetadataForClass(CompletedContinuation, 'CompletedContinuation');
  initMetadataForClass(UserSupplied_0, 'UserSupplied');
  initMetadataForClass(CompletedExceptionally, 'CompletedExceptionally');
  initMetadataForClass(CancelledContinuation, 'CancelledContinuation', VOID, CompletedExceptionally);
  initMetadataForClass(CompletedWithCancellation, 'CompletedWithCancellation');
  initMetadataForObject(Key, 'Key', VOID, AbstractCoroutineContextKey);
  initMetadataForClass(CoroutineDispatcher, 'CoroutineDispatcher', VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  initMetadataForObject(Key_0, 'Key');
  initMetadataForClass(CoroutineStart, 'CoroutineStart', VOID, Enum);
  initMetadataForInterface(Delay, 'Delay', VOID, VOID, VOID, [1]);
  initMetadataForClass(EventLoop, 'EventLoop', VOID, CoroutineDispatcher);
  initMetadataForObject(ThreadLocalEventLoop, 'ThreadLocalEventLoop');
  initMetadataForClass(CompletionHandlerException, 'CompletionHandlerException', VOID, RuntimeException);
  initMetadataForClass(CoroutinesInternalError, 'CoroutinesInternalError', VOID, Error_0);
  initMetadataForObject(Key_1, 'Key');
  initMetadataForInterface(ChildHandle, 'ChildHandle');
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle', VOID, VOID, [ChildHandle]);
  initMetadataForInterface(Incomplete, 'Incomplete');
  initMetadataForClass(Empty, 'Empty', VOID, VOID, [Incomplete]);
  initMetadataForClass(LinkedListNode, 'LinkedListNode', LinkedListNode);
  initMetadataForClass(LinkedListHead, 'LinkedListHead', LinkedListHead, LinkedListNode);
  initMetadataForClass(NodeList, 'NodeList', NodeList, LinkedListHead, [LinkedListHead, Incomplete]);
  initMetadataForClass(JobNode, 'JobNode', VOID, LinkedListNode, [LinkedListNode, Incomplete]);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(Finishing, 'Finishing', VOID, SynchronizedObject, [SynchronizedObject, Incomplete]);
  initMetadataForClass(ChildCompletion, 'ChildCompletion', VOID, JobNode);
  initMetadataForLambda(JobSupport$_get_children_$slambda_k839f8, CoroutineImpl, VOID, [1]);
  initMetadataForClass(JobCancellingNode, 'JobCancellingNode', VOID, JobNode);
  initMetadataForClass(InactiveNodeList, 'InactiveNodeList', VOID, VOID, [Incomplete]);
  initMetadataForClass(ChildHandleNode, 'ChildHandleNode', VOID, JobCancellingNode, [JobCancellingNode, ChildHandle]);
  initMetadataForClass(InvokeOnCancelling, 'InvokeOnCancelling', VOID, JobCancellingNode);
  initMetadataForClass(InvokeOnCompletion, 'InvokeOnCompletion', VOID, JobNode);
  initMetadataForClass(IncompleteStateBox, 'IncompleteStateBox');
  initMetadataForClass(ChildContinuation, 'ChildContinuation', VOID, JobCancellingNode);
  initMetadataForClass(JobImpl, 'JobImpl', VOID, JobSupport, [JobSupport, Element], [0]);
  initMetadataForClass(MainCoroutineDispatcher, 'MainCoroutineDispatcher', VOID, CoroutineDispatcher);
  initMetadataForClass(SupervisorJobImpl, 'SupervisorJobImpl', VOID, JobImpl, VOID, [0]);
  initMetadataForClass(TimeoutCancellationException, 'TimeoutCancellationException', VOID, CancellationException);
  initMetadataForObject(Unconfined, 'Unconfined', VOID, CoroutineDispatcher);
  initMetadataForObject(Key_2, 'Key');
  initMetadataForClass(AbstractSharedFlow, 'AbstractSharedFlow', VOID, SynchronizedObject);
  initMetadataForClass(StateFlowImpl, 'StateFlowImpl', VOID, AbstractSharedFlow, VOID, [1]);
  initMetadataForClass(OpDescriptor, 'OpDescriptor');
  initMetadataForClass(ConcurrentLinkedListNode, 'ConcurrentLinkedListNode');
  initMetadataForClass(Segment, 'Segment', VOID, ConcurrentLinkedListNode, [ConcurrentLinkedListNode, NotCompleted]);
  initMetadataForObject(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', VOID, Exception);
  initMetadataForClass(DispatchedContinuation, 'DispatchedContinuation', VOID, DispatchedTask, [DispatchedTask, Continuation]);
  initMetadataForClass(ContextScope, 'ContextScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForClass(UndispatchedCoroutine, 'UndispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForClass(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', VOID, CoroutineDispatcher, [CoroutineDispatcher, Delay], [1]);
  initMetadataForObject(NodeDispatcher, 'NodeDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(MessageQueue, 'MessageQueue', VOID, VOID, [KtList, MutableCollection]);
  initMetadataForClass(ScheduledMessageQueue, 'ScheduledMessageQueue', VOID, MessageQueue);
  initMetadataForClass(WindowMessageQueue, 'WindowMessageQueue', VOID, MessageQueue);
  initMetadataForObject(Dispatchers, 'Dispatchers');
  initMetadataForClass(JsMainDispatcher, 'JsMainDispatcher', VOID, MainCoroutineDispatcher);
  initMetadataForClass(UnconfinedEventLoop, 'UnconfinedEventLoop', UnconfinedEventLoop, EventLoop);
  initMetadataForClass(JobCancellationException, 'JobCancellationException', VOID, CancellationException);
  initMetadataForObject(TaskContext, 'TaskContext');
  initMetadataForClass(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', VOID, RuntimeException);
  initMetadataForObject(SetTimeoutDispatcher, 'SetTimeoutDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(ClearTimeout, 'ClearTimeout', VOID, VOID, [CancelHandler]);
  initMetadataForClass(WindowClearTimeout, 'WindowClearTimeout', VOID, ClearTimeout);
  initMetadataForClass(WindowDispatcher, 'WindowDispatcher', VOID, CoroutineDispatcher, [CoroutineDispatcher, Delay], [1]);
  initMetadataForClass(CommonThreadLocal, 'CommonThreadLocal', CommonThreadLocal);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.kh(parentContext.h9(Key_instance_2));
    }
    this.nh_1 = parentContext.ag(this);
  }
  protoOf(AbstractCoroutine).a9 = function () {
    return this.nh_1;
  };
  protoOf(AbstractCoroutine).oh = function () {
    return this.nh_1;
  };
  protoOf(AbstractCoroutine).ph = function () {
    return protoOf(JobSupport).ph.call(this);
  };
  protoOf(AbstractCoroutine).qh = function (value) {
  };
  protoOf(AbstractCoroutine).rh = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).sh = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).th = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.rh(state.uh_1, state.wh());
    } else {
      this.qh((state == null ? true : !(state == null)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).f9 = function (result) {
    var state = this.xh(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.yh(state);
  };
  protoOf(AbstractCoroutine).yh = function (state) {
    return this.zh(state);
  };
  protoOf(AbstractCoroutine).ai = function (exception) {
    handleCoroutineException(this.nh_1, exception);
  };
  protoOf(AbstractCoroutine).bi = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.nh_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).bi.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).bi.call(this);
  };
  protoOf(AbstractCoroutine).ci = function (start, receiver, block) {
    start.fi(block, receiver, this);
  };
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.gj() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.ci(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.withContext.<anonymous>' call
      var oldContext = $completion.a9();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, $completion);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.h9(Key_instance), oldContext.h9(Key_instance))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, $completion);
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        coroutine_0.nh_1;
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, $completion);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$0 = coroutine_1.mj();
    }
    return tmp$ret$0;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).ej = function (exception) {
    handleCoroutineException(this.nh_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.tj_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).li = function () {
    startCoroutineCancellable_0(this.tj_1, this);
  };
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.lj_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.trySuspend.<anonymous>' call
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.lj_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.lj_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.tryResume.<anonymous>' call
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.lj_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this.lj_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).zh = function (state) {
    this.yh(state);
  };
  protoOf(DispatchedCoroutine).yh = function (state) {
    if (tryResume(this))
      return Unit_instance;
    resumeCancellableWith(intercepted(this.xj_1), recoverResult(state, this.xj_1));
  };
  protoOf(DispatchedCoroutine).mj = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.ii());
    if (state instanceof CompletedExceptionally)
      throw state.uh_1;
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  function CancellableContinuation() {
  }
  function invokeOnCancellation(_this__u8e3s4, handler) {
    var tmp;
    if (_this__u8e3s4 instanceof CancellableContinuationImpl) {
      _this__u8e3s4.ik(handler);
      tmp = Unit_instance;
    } else {
      throw UnsupportedOperationException_init_$Create$('third-party implementation of CancellableContinuation is not supported');
    }
    return tmp;
  }
  var RESUME_TOKEN;
  function _get_parentHandle__f8dcex($this) {
    return $this.hk_1.kotlinx$atomicfu$value;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.ii();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.qk_1)) {
      var tmp_0 = $this.dk_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).pk();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.dk_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.rk(cause);
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this.fk_1.kotlinx$atomicfu$value & 536870911;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(index === 536870911)) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      var message = 'The index for Segment.onCancellation(..) is broken';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      segment.sk(index, cause, $this.a9());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.a9(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.fk_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) {
        case 0:
          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          // Inline function 'kotlinx.coroutines.index' call

          var index = cur & 536870911;
          var tmp$ret$2 = (1 << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + index | 0;
          if ($this.fk_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.fk_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) {
        case 0:
          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          // Inline function 'kotlinx.coroutines.index' call

          var index = cur & 536870911;
          var tmp$ret$2 = (2 << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + index | 0;
          if ($this.fk_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.a9().h9(Key_instance_2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var handle = invokeOnCompletion(parent, true, VOID, new ChildContinuation($this));
    $this.hk_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.gk_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellationImpl.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state instanceof Active) {
        if ($this.gk_1.atomicfu$compareAndSet(state, handler))
          return Unit_instance;
      } else {
        var tmp;
        if (!(state == null) ? isInterface(state, CancelHandler) : false) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        if (tmp) {
          multipleHandlersError($this, handler, state);
        } else {
          if (state instanceof CompletedExceptionally) {
            if (!state.bl()) {
              multipleHandlersError($this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.uh_1;
              if (isInterface(handler, CancelHandler)) {
                $this.yk(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_instance;
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.uk_1 == null)) {
                multipleHandlersError($this, handler, state);
              }
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              if (state.zk()) {
                $this.yk(handler, state.xk_1);
                return Unit_instance;
              }
              var update = state.al(VOID, handler);
              if ($this.gk_1.atomicfu$compareAndSet(state, update))
                return Unit_instance;
            } else {
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              var update_0 = new CompletedContinuation(state, handler);
              if ($this.gk_1.atomicfu$compareAndSet(state, update_0))
                return Unit_instance;
            }
          }
        }
      }
    }
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var message = "It's prohibited to register multiple handlers, tried to register " + toString(handler) + ', already has ' + toString_0(state);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_instance;
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) && idempotent == null) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          tmp_1 = isInterface(state, CancelHandler);
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, isInterface(state, CancelHandler) ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.gk_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var state = this_0.kotlinx$atomicfu$value;
        if (!(state == null) ? isInterface(state, NotCompleted) : false) {
          var update = resumedState($this, state, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.gk_1.atomicfu$compareAndSet(state, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_instance;
        } else {
          if (state instanceof CancelledContinuation) {
            if (state.gl()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                $this.cl(onCancellation, state.uh_1);
              }
              return Unit_instance;
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var message = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.hl();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.dk_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.ek_1 = this.dk_1.a9();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$0 = (0 << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + 536870911 | 0;
    tmp.fk_1 = atomic$int$1(tmp$ret$0);
    this.gk_1 = atomic$ref$1(Active_instance);
    this.hk_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).il = function () {
    return this.dk_1;
  };
  protoOf(CancellableContinuationImpl).a9 = function () {
    return this.ek_1;
  };
  protoOf(CancellableContinuationImpl).ii = function () {
    return this.gk_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).ji = function () {
    var tmp = this.ii();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).jl = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.ji()) {
      handle.kl();
      this.hk_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
    }
  };
  protoOf(CancellableContinuationImpl).ll = function () {
    return this.ii();
  };
  protoOf(CancellableContinuationImpl).ml = function (takenState, cause) {
    var this_0 = this.gk_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state == null) ? isInterface(state, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        var message = 'Not completed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        if (state instanceof CompletedExceptionally)
          return Unit_instance;
        else {
          if (state instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!!state.zk()) {
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.al(VOID, VOID, VOID, VOID, cause);
            if (this.gk_1.atomicfu$compareAndSet(state, update)) {
              state.nl(this, cause);
              return Unit_instance;
            }
          } else {
            if (this.gk_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_instance;
            }
          }
        }
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).yj = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.gk_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var state = this_0.kotlinx$atomicfu$value;
        if (!(!(state == null) ? isInterface(state, NotCompleted) : false))
          return false;
        var tmp;
        if (!(state == null) ? isInterface(state, CancelHandler) : false) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        var update = new CancelledContinuation(this, cause, tmp);
        if (!this.gk_1.atomicfu$compareAndSet(state, update)) {
          break $l$block;
        }
        if (isInterface(state, CancelHandler)) {
          this.yk(state, cause);
        } else {
          if (state instanceof Segment) {
            callSegmentOnCancellation(this, state, cause);
          }
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.qk_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).ol = function (cause) {
    if (cancelLater(this, cause))
      return Unit_instance;
    this.yj(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).yk = function (handler, cause) {
    var tmp;
    try {
      handler.pl(cause);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.a9(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this.toString(), ex));
        tmp_0 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).cl = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.a9(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).ql = function (parent) {
    return parent.mi();
  };
  protoOf(CancellableContinuationImpl).mj = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.rl();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.rl();
    }
    var state = this.ii();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.uh_1, this);
    if (get_isCancellableMode(this.qk_1)) {
      var job = this.a9().h9(Key_instance_2);
      if (!(job == null) && !job.ph()) {
        var cause = job.mi();
        this.ml(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.sl(state);
  };
  protoOf(CancellableContinuationImpl).rl = function () {
    var tmp = this.dk_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tl(this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.hl();
    this.yj(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).f9 = function (result) {
    return resumeImpl$default(this, toState(result, this), this.qk_1);
  };
  protoOf(CancellableContinuationImpl).ak = function (handler) {
    return invokeOnCancellation(this, new UserSupplied(handler));
  };
  protoOf(CancellableContinuationImpl).ik = function (handler) {
    return invokeOnCancellationImpl(this, handler);
  };
  protoOf(CancellableContinuationImpl).hl = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.kl();
    this.hk_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  };
  protoOf(CancellableContinuationImpl).bk = function (_this__u8e3s4, value) {
    var tmp = this.dk_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.kk_1) === _this__u8e3s4) {
      tmp_0 = 4;
    } else {
      tmp_0 = this.qk_1;
    }
    resumeImpl$default(this, value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).sl = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.tk_1;
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : !(state == null)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).ul = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).ul.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.dk_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.vl() + '(' + toDebugString(this.dk_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).vl = function () {
    return 'CancellableContinuation';
  };
  function NotCompleted() {
  }
  function UserSupplied(handler) {
    this.yl_1 = handler;
  }
  protoOf(UserSupplied).pl = function (cause) {
    this.yl_1(cause);
  };
  protoOf(UserSupplied).toString = function () {
    return 'CancelHandler.UserSupplied[' + get_classSimpleName(this.yl_1) + '@' + get_hexAddress(this) + ']';
  };
  function CancelHandler() {
  }
  function Active() {
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    return Active_instance;
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.tk_1 = result;
    this.uk_1 = cancelHandler;
    this.vk_1 = onCancellation;
    this.wk_1 = idempotentResume;
    this.xk_1 = cancelCause;
  }
  protoOf(CompletedContinuation).zk = function () {
    return !(this.xk_1 == null);
  };
  protoOf(CompletedContinuation).nl = function (cont, cause) {
    var tmp0_safe_receiver = this.uk_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.yk(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.vk_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.cl(tmp1_safe_receiver, cause);
    }
  };
  protoOf(CompletedContinuation).zl = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).al = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.tk_1 : result;
    cancelHandler = cancelHandler === VOID ? this.uk_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.vk_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.wk_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.xk_1 : cancelCause;
    return $super === VOID ? this.zl(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.zl.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.tk_1) + ', cancelHandler=' + toString_0(this.uk_1) + ', onCancellation=' + toString_0(this.vk_1) + ', idempotentResume=' + toString_0(this.wk_1) + ', cancelCause=' + toString_0(this.xk_1) + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.tk_1 == null ? 0 : hashCode(this.tk_1);
    result = imul(result, 31) + (this.uk_1 == null ? 0 : hashCode(this.uk_1)) | 0;
    result = imul(result, 31) + (this.vk_1 == null ? 0 : hashCode(this.vk_1)) | 0;
    result = imul(result, 31) + (this.wk_1 == null ? 0 : hashCode(this.wk_1)) | 0;
    result = imul(result, 31) + (this.xk_1 == null ? 0 : hashCode(this.xk_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.tk_1, tmp0_other_with_cast.tk_1))
      return false;
    if (!equals(this.uk_1, tmp0_other_with_cast.uk_1))
      return false;
    if (!equals(this.vk_1, tmp0_other_with_cast.vk_1))
      return false;
    if (!equals(this.wk_1, tmp0_other_with_cast.wk_1))
      return false;
    if (!equals(this.xk_1, tmp0_other_with_cast.xk_1))
      return false;
    return true;
  };
  function _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return 29;
  }
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (!properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function UserSupplied_0(handler) {
    this.am_1 = handler;
  }
  protoOf(UserSupplied_0).pl = function (cause) {
    this.am_1(cause);
  };
  protoOf(UserSupplied_0).toString = function () {
    return 'InternalCompletionHandler.UserSupplied[' + get_classSimpleName(this.am_1) + '@' + get_hexAddress(this) + ']';
  };
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.uh_1 = cause;
    this.vh_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).wh = function () {
    return this.vh_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).bl = function () {
    return this.vh_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.uh_1.toString() + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + toString(continuation) + ' was cancelled normally') : cause, handled);
    this.fl_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).gl = function () {
    return this.fl_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      tmp = !(onCancellation == null) ? new CompletedWithCancellation(it, onCancellation) : it;
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.bm_1 = result;
    this.cm_1 = onCancellation;
  }
  protoOf(CompletedWithCancellation).toString = function () {
    return 'CompletedWithCancellation(result=' + toString_0(this.bm_1) + ', onCancellation=' + toString(this.cm_1) + ')';
  };
  protoOf(CompletedWithCancellation).hashCode = function () {
    var result = this.bm_1 == null ? 0 : hashCode(this.bm_1);
    result = imul(result, 31) + hashCode(this.cm_1) | 0;
    return result;
  };
  protoOf(CompletedWithCancellation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.bm_1, tmp0_other_with_cast.bm_1))
      return false;
    if (!equals(this.cm_1, tmp0_other_with_cast.cm_1))
      return false;
    return true;
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(state.uh_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = (state == null ? true : !(state == null)) ? state : THROW_CCE();
      tmp = _Result___init__impl__xyqfz8(value);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance_0 = this;
    var tmp = Key_instance;
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance_0;
  function Key_getInstance() {
    if (Key_instance_0 == null)
      new Key();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance();
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(CoroutineDispatcher).em = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).i9 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).j9 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.gm();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.h9(Key_instance_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.hm(context, exception);
        return Unit_instance;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleUncaughtCoroutineException(context, handlerException(exception, t));
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    handleUncaughtCoroutineException(context, exception);
  }
  function Key_0() {
  }
  var Key_instance_1;
  function Key_getInstance_0() {
    return Key_instance_1;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    var this_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    addSuppressed(this_0, originalException);
    return this_0;
  }
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.h9(Key_instance_2) == null) ? context : context.ag(Job()));
  }
  function coroutineScope(block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.coroutineScope.<anonymous>' call
    var coroutine = new ScopeCoroutine($completion.a9(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function cancel(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.oh().h9(Key_instance_2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Scope cannot be cancelled because it does not have a job: ' + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.ui(cause);
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_instance;
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).fi = function (block, receiver, completion) {
    var tmp;
    switch (this.h2_1) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 1:
        tmp = Unit_instance;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).gj = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function Delay() {
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.h9(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delay(timeMillis, $completion) {
    if (timeMillis.x(new Long(0, 0)) <= 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.jl();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    if (timeMillis.x(new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.a9()).im(timeMillis, cancellable);
    }
    return cancellable.mj();
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.km_1 = new Long(0, 0);
    this.lm_1 = false;
    this.mm_1 = null;
  }
  protoOf(EventLoop).nm = function () {
    var tmp0_elvis_lhs = this.mm_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.rd();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.wl();
    return true;
  };
  protoOf(EventLoop).om = function (task) {
    var tmp0_elvis_lhs = this.mm_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.mm_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.pd(task);
  };
  protoOf(EventLoop).pm = function () {
    return this.km_1.x(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).qm = function () {
    var tmp0_safe_receiver = this.mm_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).rm = function (unconfined) {
    this.km_1 = this.km_1.n2(delta(this, unconfined));
    if (!unconfined)
      this.lm_1 = true;
  };
  protoOf(EventLoop).sm = function (unconfined) {
    this.km_1 = this.km_1.o2(delta(this, unconfined));
    if (this.km_1.x(new Long(0, 0)) > 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.lm_1) {
      this.tm();
    }
  };
  protoOf(EventLoop).tm = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.um_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).vm = function () {
    var tmp0_elvis_lhs = this.um_1.xm();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().um_1.ym(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_1() {
  }
  var Key_instance_2;
  function Key_getInstance_1() {
    return Key_instance_2;
  }
  function ParentJob() {
  }
  function ChildHandle() {
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).kl = function () {
  };
  protoOf(NonDisposableHandle).xi = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.h9(Key_instance_2);
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function invokeOnCompletion(_this__u8e3s4, onCancelling, invokeImmediately, handler) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    var tmp;
    if (_this__u8e3s4 instanceof JobSupport) {
      tmp = _this__u8e3s4.ri(onCancelling, invokeImmediately, handler);
    } else {
      tmp = _this__u8e3s4.qi(onCancelling, invokeImmediately, InternalCompletionHandler$invoke$ref(handler));
    }
    return tmp;
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.ph())
      throw _this__u8e3s4.mi();
  }
  function Job(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.h9(Key_instance_2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Current context doesn't contain Job in it: " + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.ui(CancellationException_init_$Create$_0(message, cause));
  }
  function InternalCompletionHandler$invoke$ref($boundThis) {
    var l = function (p0) {
      $boundThis.pl(p0);
      return Unit_instance;
    };
    l.callableName = 'invoke';
    return l;
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.zm_1 = isActive;
  }
  protoOf(Empty).ph = function () {
    return this.zm_1;
  };
  protoOf(Empty).an = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.zm_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  protoOf(NodeList).ph = function () {
    return true;
  };
  protoOf(NodeList).an = function () {
    return this;
  };
  protoOf(NodeList).en = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    this_0.z7('List{');
    this_0.z7(state);
    this_0.z7('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.fn_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var node = cur;
        if (first)
          first = false;
        else {
          this_0.z7(', ');
        }
        this_0.y7(node);
      }
      cur = cur.fn_1;
    }
    this_0.z7(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.en('Active') : protoOf(LinkedListHead).toString.call(this);
  };
  function JobNode() {
    LinkedListNode.call(this);
  }
  protoOf(JobNode).sn = function () {
    var tmp = this.rn_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).ph = function () {
    return true;
  };
  protoOf(JobNode).an = function () {
    return null;
  };
  protoOf(JobNode).kl = function () {
    return this.sn().si(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.sn()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.xn_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.xn_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.uh_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.yn();
    var exceptions = state.zn(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) || $this.ej(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).bl();
      }
    }
    if (!wasCancelling) {
      $this.bj(finalException);
    }
    $this.th(finalState);
    var casSuccess = $this.ih_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.q()) {
      if (state.yn()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.sh() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        if (!(element instanceof CancellationException)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.p(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.j();
        while (tmp0_iterator_0.k()) {
          var element_0 = tmp0_iterator_0.l();
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.m() <= 1)
      return Unit_instance;
    var seenExceptions = identitySet(exceptions.m());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.j();
    while (tmp0_iterator.k()) {
      var exception = tmp0_iterator.l();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) && !(unwrapped === unwrappedCause)) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.h(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        addSuppressed(rootCause, unwrapped);
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.ih_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.bj(null);
    $this.th(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.hi();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.kl();
      $this.gi(NonDisposableHandle_instance);
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.uh_1;
    if (state instanceof JobNode) {
      try {
        state.pl(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.ai(new CompletionHandlerException('Exception in completion handler ' + toString(state) + ' for ' + $this.toString(), ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.an();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.bj(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.fn_1;
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var node = cur;
        try {
          node.pl(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.fn_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.ai(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.cj())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.hi();
    if (parent === null || parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.xi(cause) || isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.fn_1;
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var node = cur;
        try {
          node.pl(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.fn_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.ai(tmp0_safe_receiver_0);
    }
    return Unit_instance;
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.zm_1)
        return 0;
      if (!$this.ih_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.li();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.ih_1.atomicfu$compareAndSet(state, state.ao_1))
          return -1;
        $this.li();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_0 = tmp1_safe_receiver;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.rn_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      if (!($this.ii() === expect)) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.mn(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.zm_1 ? list : new InactiveNodeList(list);
    $this.ih_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.tn(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var list = state.fn_1;
    $this.ih_1.atomicfu$compareAndSet(state, list);
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var state = $this.ii();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.bo();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, state, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.sh() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).zi();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var state = $this.ii();
        if (state instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (state.co())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = state.yn();
          if (!(cause == null) || !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = this_0;
              tmp = this_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            state.do(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = state.eo();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          if (!wasCancelling) {
            tmp_0 = this_1;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, state.un_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_2 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = this_2;
              tmp_1 = this_2;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (state.ph()) {
              if (tryMakeCancelling($this, state, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, state, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var message = 'Cannot happen in ' + toString_0(state);
                throw IllegalStateException_init_$Create$(toString(message));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.an();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var message = 'State should have list: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.ih_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (finishing.bo())
      return get_COMPLETING_ALREADY();
    finishing.fo(true);
    if (!(finishing === state)) {
      if (!$this.ih_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.yn();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.do(tmp0_safe_receiver.uh_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.eo();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    if (!wasCancelling) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      notifyCancelling($this, list, tmp2_safe_receiver);
    }
    var child = firstChild($this, state);
    if (!(child == null) && tryWaitForChild($this, finishing, child, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.uh_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.an();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var handle = invokeOnCompletion(child_0.ko_1, VOID, false, new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0));
        if (!(handle === NonDisposableHandle_instance))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp;
        $this_0 = $this_0;
        state_0 = state_0;
        child_0 = nextChild_0;
        proposedUpdate_0 = proposedUpdate_0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) && tryWaitForChild($this, state, waitChild, proposedUpdate))
      return Unit_instance;
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.zh(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (!cur.hn_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      cur = cur.gn_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      cur = cur.fn_1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (cur.hn_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.yn() ? 'Cancelling' : state.bo() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.ph() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    SynchronizedObject.call(this);
    this.un_1 = list;
    this.vn_1 = atomic$boolean$1(isCompleting);
    this.wn_1 = atomic$ref$1(rootCause);
    this.xn_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).an = function () {
    return this.un_1;
  };
  protoOf(Finishing).fo = function (value) {
    this.vn_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).bo = function () {
    return this.vn_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).lo = function (value) {
    this.wn_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).eo = function () {
    return this.wn_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).co = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).yn = function () {
    return !(this.eo() == null);
  };
  protoOf(Finishing).ph = function () {
    return this.eo() == null;
  };
  protoOf(Finishing).zn = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        this_0.h(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.eo();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.k4(0, rootCause);
    }
    if (!(proposedException == null) && !equals(proposedException, rootCause)) {
      list.h(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).do = function (exception) {
    var rootCause = this.eo();
    if (rootCause == null) {
      this.lo(exception);
      return Unit_instance;
    }
    if (exception === rootCause)
      return Unit_instance;
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_instance;
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        this_0.h(eh);
        this_0.h(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).h(exception);
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.yn() + ', completing=' + this.bo() + ', rootCause=' + toString_0(this.eo()) + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.un_1.toString() + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.qo_1 = parent;
    this.ro_1 = state;
    this.so_1 = child;
    this.to_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).pl = function (cause) {
    continueCompleting(this.qo_1, this.ro_1, this.so_1, this.to_1);
  };
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.cp_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).mp = function ($this$sequence, $completion) {
    var tmp = this.np($this$sequence, $completion);
    tmp.w8_1 = Unit_instance;
    tmp.x8_1 = null;
    return tmp.c9();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).z9 = function (p1, $completion) {
    return this.mp(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).c9 = function () {
    var suspendResult = this.w8_1;
    $sm: do
      try {
        var tmp = this.u8_1;
        switch (tmp) {
          case 0:
            this.v8_1 = 8;
            this.ep_1 = this.cp_1.ii();
            var tmp_0 = this.ep_1;
            if (tmp_0 instanceof ChildHandleNode) {
              this.u8_1 = 6;
              suspendResult = this.dp_1.ke(this.ep_1.ko_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.ep_1;
              if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                this.fp_1 = this.ep_1.an();
                if (this.fp_1 == null) {
                  this.gp_1 = null;
                  this.u8_1 = 5;
                  continue $sm;
                } else {
                  var tmp_2 = this;
                  tmp_2.hp_1 = this.fp_1;
                  var tmp_3 = this;
                  tmp_3.ip_1 = this.hp_1;
                  var tmp_4 = this;
                  tmp_4.jp_1 = this.ip_1;
                  this.kp_1 = this.jp_1.fn_1;
                  this.u8_1 = 1;
                  continue $sm;
                }
              } else {
                this.u8_1 = 7;
                continue $sm;
              }
            }

          case 1:
            if (!!equals(this.kp_1, this.jp_1)) {
              this.u8_1 = 4;
              continue $sm;
            }

            var tmp_5 = this.kp_1;
            if (tmp_5 instanceof ChildHandleNode) {
              var tmp_6 = this;
              tmp_6.lp_1 = this.kp_1;
              this.u8_1 = 2;
              suspendResult = this.dp_1.ke(this.lp_1.ko_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.u8_1 = 3;
              continue $sm;
            }

          case 2:
            this.u8_1 = 3;
            continue $sm;
          case 3:
            this.kp_1 = this.kp_1.fn_1;
            this.u8_1 = 1;
            continue $sm;
          case 4:
            this.gp_1 = Unit_instance;
            this.u8_1 = 5;
            continue $sm;
          case 5:
            this.u8_1 = 7;
            continue $sm;
          case 6:
            this.u8_1 = 7;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.x8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.v8_1 === 8) {
          throw e;
        } else {
          this.u8_1 = this.v8_1;
          this.x8_1 = e;
        }
      }
     while (true);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).np = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.cp_1, completion);
    i.dp_1 = $this$sequence;
    return i;
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.mp($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this.ih_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.jh_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).v1 = function () {
    return Key_instance_2;
  };
  protoOf(JobSupport).gi = function (value) {
    this.jh_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).hi = function () {
    return this.jh_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).kh = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.gi(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.ki();
    var handle = parent.aj(this);
    this.gi(handle);
    if (this.ji()) {
      handle.kl();
      this.gi(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).ii = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.ih_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state instanceof OpDescriptor))
        return state;
      state.op(this);
    }
  };
  protoOf(JobSupport).ph = function () {
    var state = this.ii();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.ph();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).ji = function () {
    var tmp = this.ii();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).ki = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var state = this.ii();
      var tmp0_subject = startInternal(this, state);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).li = function () {
  };
  protoOf(JobSupport).mi = function () {
    var state = this.ii();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.eo();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.ni(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var message = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var message_0 = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.oi(state.uh_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).ni = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.sh() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).oi = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.ni(_this__u8e3s4, message) : $super.ni.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).pi = function (handler) {
    return this.ri(false, true, new UserSupplied_0(handler));
  };
  protoOf(JobSupport).qi = function (onCancelling, invokeImmediately, handler) {
    return this.ri(onCancelling, invokeImmediately, new UserSupplied_0(handler));
  };
  protoOf(JobSupport).ri = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletionInternal.<anonymous>' call
        var state = this.ii();
        if (state instanceof Empty) {
          if (state.zm_1) {
            if (this.ih_1.atomicfu$compareAndSet(state, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.an();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_instance;
              var tmp;
              if (onCancelling) {
                tmp = state instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
                rootCause = state.eo();
                var tmp_0;
                if (rootCause == null) {
                  tmp_0 = true;
                } else {
                  var tmp_1;
                  if (handler instanceof ChildHandleNode) {
                    tmp_1 = !state.bo();
                  } else {
                    tmp_1 = false;
                  }
                  tmp_0 = tmp_1;
                }
                if (tmp_0) {
                  if (!addLastAtomic(this, state, list, node)) {
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                }
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  handler.pl(rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, state, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              handler.pl(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.uh_1);
            }
            return NonDisposableHandle_instance;
          }
        }
      }
    }
  };
  protoOf(JobSupport).si = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var state = this.ii();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.ih_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.an() == null)) {
            node.ln();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).ti = function () {
    return false;
  };
  protoOf(JobSupport).ui = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.sh() : null, null, this);
    } else {
      tmp = cause;
    }
    this.vi(tmp);
  };
  protoOf(JobSupport).sh = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).vi = function (cause) {
    this.yi(cause);
  };
  protoOf(JobSupport).wi = function (parentJob) {
    this.yi(parentJob);
  };
  protoOf(JobSupport).xi = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.yi(cause) && this.dj();
  };
  protoOf(JobSupport).yi = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.ti()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.zh(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).zi = function () {
    var state = this.ii();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.eo();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.uh_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var message = 'Cannot be cancelling child in this state: ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).pp = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompleting.<anonymous>' call
        var state = this.ii();
        var finalState = tryMakeCompleting(this, state, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else {
          this.zh(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).xh = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var state = this.ii();
        var finalState = tryMakeCompleting(this, state, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this.toString() + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).qp = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).aj = function (child) {
    var tmp = invokeOnCompletion(this, true, VOID, new ChildHandleNode(child));
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  protoOf(JobSupport).ai = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).bj = function (cause) {
  };
  protoOf(JobSupport).cj = function () {
    return false;
  };
  protoOf(JobSupport).dj = function () {
    return true;
  };
  protoOf(JobSupport).ej = function (exception) {
    return false;
  };
  protoOf(JobSupport).th = function (state) {
  };
  protoOf(JobSupport).zh = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.fj() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).fj = function () {
    return this.bi() + '{' + stateString(this, this.ii()) + '}';
  };
  protoOf(JobSupport).bi = function () {
    return get_classSimpleName(this);
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  function InactiveNodeList(list) {
    this.ao_1 = list;
  }
  protoOf(InactiveNodeList).an = function () {
    return this.ao_1;
  };
  protoOf(InactiveNodeList).ph = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.ao_1.en('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.ko_1 = childJob;
  }
  protoOf(ChildHandleNode).pl = function (cause) {
    return this.ko_1.wi(this.sn());
  };
  protoOf(ChildHandleNode).xi = function (cause) {
    return this.sn().xi(cause);
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.vp_1 = handler;
    this.wp_1 = atomic$int$1(0);
  }
  protoOf(InvokeOnCancelling).pl = function (cause) {
    if (this.wp_1.atomicfu$compareAndSet(0, 1)) {
      this.vp_1.pl(cause);
    }
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.bq_1 = handler;
  }
  protoOf(InvokeOnCompletion).pl = function (cause) {
    return this.bq_1.pl(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cq_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function IncompleteStateBox(state) {
    this.cq_1 = state;
  }
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.hq_1 = child;
  }
  protoOf(ChildContinuation).pl = function (cause) {
    this.hq_1.ol(this.hq_1.ql(this.sn()));
  };
  function handlesExceptionF($this) {
    var tmp = $this.hi();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sn();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.dj())
        return true;
      var tmp_1 = parentJob.hi();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.sn();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.kh(parent);
    this.kq_1 = handlesExceptionF(this);
  }
  protoOf(JobImpl).ti = function () {
    return true;
  };
  protoOf(JobImpl).dj = function () {
    return this.kq_1;
  };
  protoOf(JobImpl).lq = function (exception) {
    return this.pp(new CompletedExceptionally(exception));
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.oq();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).oq = function () {
    var main = Dispatchers_getInstance().tq();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.nq();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).xi = function (cause) {
    return false;
  };
  function TimeoutCancellationException() {
  }
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).em = function (context) {
    return false;
  };
  protoOf(Unconfined).fm = function (context, block) {
    var yieldContext = context.h9(Key_instance_3);
    if (!(yieldContext == null)) {
      yieldContext.zq_1 = true;
      return Unit_instance;
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_2() {
  }
  var Key_instance_3;
  function Key_getInstance_2() {
    return Key_instance_3;
  }
  function get_NONE() {
    _init_properties_StateFlow_kt__eu9yi5();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    _init_properties_StateFlow_kt__eu9yi5();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow(value) {
    _init_properties_StateFlow_kt__eu9yi5();
    return new StateFlowImpl(value == null ? get_NULL() : value);
  }
  function updateState($this, expectedState, newState) {
    var curSequence;
    var curSlots;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var oldState = $this.er_1.kotlinx$atomicfu$value;
    if (!(expectedState == null) && !equals(oldState, expectedState))
      return false;
    if (equals(oldState, newState))
      return true;
    $this.er_1.kotlinx$atomicfu$value = newState;
    curSequence = $this.fr_1;
    if ((curSequence & 1) === 0) {
      curSequence = curSequence + 1 | 0;
      $this.fr_1 = curSequence;
    } else {
      $this.fr_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.gr_1;
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.StateFlowImpl.updateState.<anonymous>' call
          if (element == null)
            null;
          else {
            element.lr();
          }
        }
      }
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
      if ($this.fr_1 === curSequence) {
        $this.fr_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.fr_1;
      curSlots = $this.gr_1;
    }
  }
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.er_1 = atomic$ref$1(initialState);
    this.fr_1 = 0;
  }
  protoOf(StateFlowImpl).mr = function (value) {
    updateState(this, null, value == null ? get_NULL() : value);
  };
  protoOf(StateFlowImpl).w1 = function () {
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var this_0 = get_NULL();
    var value = this.er_1.kotlinx$atomicfu$value;
    var tmp;
    if (value === this_0) {
      tmp = (null == null ? true : !(null == null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : !(value == null)) ? value : THROW_CCE();
    }
    return tmp;
  };
  protoOf(StateFlowImpl).nr = function (expect, update) {
    var tmp = expect == null ? get_NULL() : expect;
    return updateState(this, tmp, update == null ? get_NULL() : update);
  };
  var properties_initialized_StateFlow_kt_nsqikx;
  function _init_properties_StateFlow_kt__eu9yi5() {
    if (!properties_initialized_StateFlow_kt_nsqikx) {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function AbstractSharedFlow() {
    SynchronizedObject.call(this);
    this.gr_1 = null;
    this.hr_1 = 0;
    this.ir_1 = 0;
    this.jr_1 = null;
  }
  function get_NULL() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return NULL;
  }
  var NULL;
  var UNINITIALIZED;
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function _init_properties_NullSurrogate_kt__n2yti9() {
    if (!properties_initialized_NullSurrogate_kt_39v8bl) {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function OpDescriptor() {
  }
  function get_value(_this__u8e3s4) {
    return _this__u8e3s4.xm();
  }
  function Segment() {
  }
  function ConcurrentLinkedListNode() {
  }
  function handleUncaughtCoroutineException(context, exception) {
    var tmp0_iterator = get_platformExceptionHandlers().j();
    while (tmp0_iterator.k()) {
      var handler = tmp0_iterator.l();
      try {
        handler.hm(context, exception);
      } catch ($p) {
        if ($p instanceof ExceptionSuccessfullyProcessed) {
          var _ = $p;
          return Unit_instance;
        } else {
          if ($p instanceof Error) {
            var t = $p;
            propagateExceptionFinalResort(handlerException(exception, t));
          } else {
            throw $p;
          }
        }
      }
    }
    try {
      addSuppressed(exception, new DiagnosticCoroutineContextException(context));
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
      } else {
        throw $p;
      }
    }
    propagateExceptionFinalResort(exception);
  }
  function ExceptionSuccessfullyProcessed() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.ok_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this.kk_1 = dispatcher;
    this.lk_1 = continuation;
    this.mk_1 = get_UNDEFINED();
    this.nk_1 = threadContextElements(this.a9());
    this.ok_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).a9 = function () {
    return this.lk_1.a9();
  };
  protoOf(DispatchedContinuation).pk = function () {
    return !(this.ok_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).pr = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.ok_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).gm = function () {
    this.pr();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.hl();
    }
  };
  protoOf(DispatchedContinuation).tl = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.ok_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state === get_REUSABLE_CLAIMED()) {
        if (this.ok_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!this.ok_1.atomicfu$compareAndSet(state, null)) {
            // Inline function 'kotlin.require.<anonymous>' call
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          return state;
        } else {
          var message_0 = 'Inconsistent state ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).rk = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.ok_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this.ok_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this.ok_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).ll = function () {
    var state = this.mk_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.mk_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).il = function () {
    return this;
  };
  protoOf(DispatchedContinuation).f9 = function (result) {
    var context = this.lk_1.a9();
    var state = toState_0(result);
    if (this.kk_1.em(context)) {
      this.mk_1 = state;
      this.qk_1 = 0;
      this.kk_1.fm(context, this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().vm();
        if (false && eventLoop.qm()) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.pm()) {
          this.mk_1 = state;
          this.qk_1 = 0;
          eventLoop.om(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.rm(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.a9();
            this.nk_1;
            this.lk_1.f9(result);
            $l$loop: while (eventLoop.nm()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.xl(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.sm(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).ml = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.cm_1(cause);
    }
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.kk_1.toString() + ', ' + toDebugString(this.lk_1) + ']';
  };
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (_this__u8e3s4.kk_1.em(_this__u8e3s4.a9())) {
        _this__u8e3s4.mk_1 = state;
        _this__u8e3s4.qk_1 = 1;
        _this__u8e3s4.kk_1.fm(_this__u8e3s4.a9(), _this__u8e3s4);
        tmp_0 = Unit_instance;
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().vm();
          if (false && eventLoop.qm()) {
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.pm()) {
            _this__u8e3s4.mk_1 = state;
            _this__u8e3s4.qk_1 = 1;
            eventLoop.om(_this__u8e3s4);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.rm(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.a9().h9(Key_instance_2);
                if (!(job == null) && !job.ph()) {
                  var cause = job.mi();
                  _this__u8e3s4.ml(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.f9(tmp$ret$1);
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.lk_1;
                _this__u8e3s4.nk_1;
                _this__u8e3s4.lk_1.f9(result);
              }
              $l$loop: while (eventLoop.nm()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.xl(e, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.sm(true);
            }
            tmp_1 = false;
          }
        }
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.f9(result);
      tmp = Unit_instance;
    }
    return tmp;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.qk_1 = resumeMode;
  }
  protoOf(DispatchedTask).ml = function (takenState, cause) {
  };
  protoOf(DispatchedTask).sl = function (state) {
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).ul = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.uh_1;
  };
  protoOf(DispatchedTask).wl = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    var taskContext = get_taskContext(this);
    var fatalException = null;
    try {
      var tmp = this.il();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.lk_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.nk_1;
      var context = continuation.a9();
      var state = this.ll();
      var exception = this.ul(state);
      var job = exception == null && get_isCancellableMode(this.qk_1) ? context.h9(Key_instance_2) : null;
      if (!(job == null) && !job.ph()) {
        var cause = job.mi();
        this.ml(state, cause);
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.f9(tmp$ret$0);
      } else {
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.f9(tmp$ret$1);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.sl(state);
          var tmp$ret$3 = _Result___init__impl__xyqfz8(value);
          continuation.f9(tmp$ret$3);
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      // Inline function 'kotlin.runCatching' call
      var tmp_0;
      try {
        // Inline function 'kotlin.Companion.success' call
        // Inline function 'kotlinx.coroutines.afterTask' call
        tmp_0 = _Result___init__impl__xyqfz8(Unit_instance);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e_0 = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_1 = _Result___init__impl__xyqfz8(createFailure(e_0));
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var result = tmp_0;
      this.xl(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  protoOf(DispatchedTask).xl = function (exception, finallyException) {
    if (exception === null && finallyException === null)
      return Unit_instance;
    if (!(exception === null) && !(finallyException === null)) {
      addSuppressed(exception, finallyException);
    }
    var cause = exception == null ? finallyException : exception;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + toString(this) + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.il().a9(), reason);
  };
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 || _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.il();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.qk_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.kk_1;
      var context = delegate.a9();
      if (dispatcher.em(context)) {
        dispatcher.fm(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().vm();
    if (eventLoop.pm()) {
      eventLoop.om(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.rm(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.il(), true);
        $l$loop: while (eventLoop.nm()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.xl(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.sm(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.ll();
    var exception = _this__u8e3s4.ul(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.sl(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.lk_1;
      this_0.nk_1;
      this_0.lk_1.f9(result);
    } else {
      delegate.f9(result);
    }
  }
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.xj_1 = uCont;
  }
  protoOf(ScopeCoroutine).cj = function () {
    return true;
  };
  protoOf(ScopeCoroutine).zh = function (state) {
    resumeCancellableWith(intercepted(this.xj_1), recoverResult(state, this.xj_1));
  };
  protoOf(ScopeCoroutine).yh = function (state) {
    this.xj_1.f9(recoverResult(state, this.xj_1));
  };
  function ContextScope(context) {
    this.qr_1 = context;
  }
  protoOf(ContextScope).oh = function () {
    return this.qr_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + toString(this.qr_1) + ')';
  };
  function Symbol(symbol) {
    this.rr_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.rr_1 + '>';
  };
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$glj1hg(completion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$glj1hg(fatalCompletion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure(completion, e) {
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.f9(tmp$ret$0);
    throw e;
  }
  function dispatcherFailure$accessor$glj1hg(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = block;
        tmp = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.z9(receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.xh(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        state.uh_1;
        if (true) {
          throw recoverStackTrace(state.uh_1, _this__u8e3s4.xj_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.uh_1, _this__u8e3s4.xj_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      var actualCompletion = completion;
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        completion.a9();
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = _this__u8e3s4;
        tmp = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.z9(receiver, actualCompletion);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.f9(tmp$ret$6);
          break $l$block;
        } else {
          throw $p;
        }
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
        var tmp$ret$9 = _Result___init__impl__xyqfz8(value_0);
        actualCompletion.f9(tmp$ret$9);
      }
    }
  }
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().pq_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' || typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return !(typeof navigator === 'undefined') && navigator != null && navigator.userAgent != null && !(typeof navigator.userAgent === 'undefined') && !(typeof navigator.userAgent.match === 'undefined') && navigator.userAgent.match('\\bjsdom\\b');
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.oh().ag(context);
    return !(combined === Dispatchers_getInstance().pq_1) && combined.h9(Key_instance) == null ? combined.ag(Dispatchers_getInstance().pq_1) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.ag(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).yh = function (state) {
    return this.xj_1.f9(recoverResult(state, this.xj_1));
  };
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).aa();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).yr = function () {
    process.nextTick(this.fs_1.ds_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.js();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue(dispatcher) {
    MessageQueue.call(this);
    this.cs_1 = dispatcher;
    var tmp = this;
    tmp.ds_1 = ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).ks = function () {
    this.cs_1.yr();
  };
  protoOf(ScheduledMessageQueue).ls = function () {
    setTimeout(this.ds_1, 0);
  };
  protoOf(ScheduledMessageQueue).ms = function (timeout) {
    setTimeout(this.ds_1, timeout);
  };
  function w3cSetTimeout(handler, timeout) {
    return setTimeout(handler, timeout);
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.bt_1 && event.data == this$0.ct_1) {
        event.stopPropagation();
        this$0.js();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.js();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.bt_1 = window_0;
    this.ct_1 = 'dispatchCoroutine';
    this.bt_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).ks = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).ls = function () {
    this.bt_1.postMessage(this.ct_1, '*');
  };
  function w3cSetTimeout_0(window_0, handler, timeout) {
    return setTimeout_0(window_0, handler, timeout);
  }
  function w3cClearTimeout(window_0, handle) {
    return window_0.clearTimeout(handle);
  }
  function w3cClearTimeout_0(handle) {
    return clearTimeout(handle);
  }
  function setTimeout_0(window_0, handler, timeout) {
    return window_0.setTimeout(handler, timeout);
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function propagateExceptionFinalResort(exception) {
    console.error(exception.toString());
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.pq_1 = createDefaultDispatcher();
    this.qq_1 = Unconfined_getInstance();
    this.rq_1 = new JsMainDispatcher(this.pq_1, false);
    this.sq_1 = null;
  }
  protoOf(Dispatchers).tq = function () {
    var tmp0_elvis_lhs = this.sq_1;
    return tmp0_elvis_lhs == null ? this.rq_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.et_1 = delegate;
    this.ft_1 = invokeImmediately;
    this.gt_1 = this.ft_1 ? this : new JsMainDispatcher(this.et_1, true);
  }
  protoOf(JsMainDispatcher).nq = function () {
    return this.gt_1;
  };
  protoOf(JsMainDispatcher).em = function (context) {
    return !this.ft_1;
  };
  protoOf(JsMainDispatcher).fm = function (context, block) {
    return this.et_1.fm(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.oq();
    return tmp0_elvis_lhs == null ? this.et_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).fm = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    captureStack(this, JobCancellationException);
    this.lt_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + toString(this.lt_1);
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.lt_1, this.lt_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.lt_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function Runnable() {
  }
  function SchedulerTask() {
  }
  function get_taskContext(_this__u8e3s4) {
    return TaskContext_instance;
  }
  function TaskContext() {
  }
  var TaskContext_instance;
  function TaskContext_getInstance() {
    return TaskContext_instance;
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function get_platformExceptionHandlers_() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return platformExceptionHandlers_;
  }
  var platformExceptionHandlers_;
  function get_platformExceptionHandlers() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return get_platformExceptionHandlers_();
  }
  function DiagnosticCoroutineContextException(context) {
    RuntimeException_init_$Init$_0(toString(context), this);
    captureStack(this, DiagnosticCoroutineContextException);
  }
  var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
  function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
    if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
      properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      platformExceptionHandlers_ = LinkedHashSet_init_$Create$();
    }
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).yr = function () {
    this.fs_1.ms(0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.bk(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.fs_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).fm = function (context, block) {
    this.fs_1.xs(block);
  };
  protoOf(SetTimeoutBasedDispatcher).im = function (timeMillis, continuation) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new ClearTimeout(handle));
  };
  function MessageQueue() {
    this.gs_1 = ArrayDeque_init_$Create$();
    this.hs_1 = 16;
    this.is_1 = false;
  }
  protoOf(MessageQueue).m = function () {
    return this.gs_1.ld_1;
  };
  protoOf(MessageQueue).ns = function (index, element) {
    this.gs_1.k4(index, element);
  };
  protoOf(MessageQueue).k4 = function (index, element) {
    return this.ns(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).os = function (element) {
    return this.gs_1.h(element);
  };
  protoOf(MessageQueue).h = function (element) {
    return this.os((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).ps = function (index, elements) {
    return this.gs_1.n4(index, elements);
  };
  protoOf(MessageQueue).n4 = function (index, elements) {
    return this.ps(index, elements);
  };
  protoOf(MessageQueue).qs = function (elements) {
    return this.gs_1.n(elements);
  };
  protoOf(MessageQueue).n = function (elements) {
    return this.qs(elements);
  };
  protoOf(MessageQueue).f2 = function () {
    this.gs_1.f2();
  };
  protoOf(MessageQueue).rs = function (element) {
    return this.gs_1.o(element);
  };
  protoOf(MessageQueue).o = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.rs((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).ss = function (elements) {
    return this.gs_1.s1(elements);
  };
  protoOf(MessageQueue).s1 = function (elements) {
    return this.ss(elements);
  };
  protoOf(MessageQueue).p = function (index) {
    return this.gs_1.p(index);
  };
  protoOf(MessageQueue).ts = function (element) {
    return this.gs_1.r(element);
  };
  protoOf(MessageQueue).r = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.ts((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).q = function () {
    return this.gs_1.q();
  };
  protoOf(MessageQueue).j = function () {
    return this.gs_1.j();
  };
  protoOf(MessageQueue).u1 = function (index) {
    return this.gs_1.u1(index);
  };
  protoOf(MessageQueue).us = function (element) {
    return this.gs_1.d2(element);
  };
  protoOf(MessageQueue).d2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.us((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).vs = function (elements) {
    return this.gs_1.e2(elements);
  };
  protoOf(MessageQueue).e2 = function (elements) {
    return this.vs(elements);
  };
  protoOf(MessageQueue).x3 = function (index) {
    return this.gs_1.x3(index);
  };
  protoOf(MessageQueue).ws = function (index, element) {
    return this.gs_1.q3(index, element);
  };
  protoOf(MessageQueue).q3 = function (index, element) {
    return this.ws(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).xs = function (element) {
    this.os(element);
    if (!this.is_1) {
      this.is_1 = true;
      this.ks();
    }
  };
  protoOf(MessageQueue).js = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.hs_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.wl();
        }
         while (inductionVariable < times);
    }finally {
      if (this.q()) {
        this.is_1 = false;
      } else {
        this.ls();
      }
    }
  };
  function WindowClearTimeout($outer, handle) {
    this.pt_1 = $outer;
    ClearTimeout.call(this, handle);
  }
  protoOf(WindowClearTimeout).kl = function () {
    w3cClearTimeout(this.pt_1.rt_1, this.tt_1);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.bk(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.rt_1 = window_0;
    this.st_1 = new WindowMessageQueue(this.rt_1);
  }
  protoOf(WindowDispatcher).fm = function (context, block) {
    return this.st_1.xs(block);
  };
  protoOf(WindowDispatcher).im = function (timeMillis, continuation) {
    var handle = w3cSetTimeout_0(this.rt_1, WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new WindowClearTimeout(this, handle));
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).a3();
  }
  function ClearTimeout(handle) {
    this.tt_1 = handle;
  }
  protoOf(ClearTimeout).kl = function () {
    w3cClearTimeout_0(this.tt_1);
  };
  protoOf(ClearTimeout).pl = function (cause) {
    this.kl();
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.tt_1 + ']';
  };
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  protoOf(LinkedListHead).ln = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  function LinkedListNode() {
    this.fn_1 = this;
    this.gn_1 = this;
    this.hn_1 = false;
  }
  protoOf(LinkedListNode).mn = function (node) {
    var prev = this.gn_1;
    node.fn_1 = this;
    node.gn_1 = prev;
    prev.fn_1 = node;
    this.gn_1 = node;
  };
  protoOf(LinkedListNode).ln = function () {
    return this.nn();
  };
  protoOf(LinkedListNode).kl = function () {
    this.ln();
  };
  protoOf(LinkedListNode).nn = function () {
    if (this.hn_1)
      return false;
    var prev = this.gn_1;
    var next = this.fn_1;
    prev.fn_1 = next;
    next.gn_1 = prev;
    this.hn_1 = true;
    return true;
  };
  protoOf(LinkedListNode).tn = function (node) {
    if (!(this.fn_1 === this))
      return false;
    this.mn(node);
    return true;
  };
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function SynchronizedObject() {
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.wm_1 = null;
  }
  protoOf(CommonThreadLocal).xm = function () {
    var tmp = this.wm_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).ym = function (value) {
    this.wm_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  //region block: post-declaration
  protoOf(JobSupport).ag = plus;
  protoOf(JobSupport).h9 = get_0;
  protoOf(JobSupport).zf = fold;
  protoOf(JobSupport).yf = minusKey_0;
  protoOf(CancellableContinuationImpl).zj = cancel$default;
  protoOf(CoroutineDispatcher).h9 = get;
  protoOf(CoroutineDispatcher).yf = minusKey;
  //endregion
  //region block: init
  Active_instance = new Active();
  Key_instance_1 = new Key_0();
  Key_instance_2 = new Key_1();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Key_instance_3 = new Key_2();
  counter = 0;
  DEBUG = false;
  TaskContext_instance = new TaskContext();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.b = coroutineScope;
  _.$_$.c = delay;
  _.$_$.d = withContext;
  _.$_$.e = Key_instance_2;
  _.$_$.f = MutableStateFlow;
  _.$_$.g = CancellableContinuationImpl;
  _.$_$.h = CoroutineDispatcher;
  _.$_$.i = CoroutineScope_0;
  _.$_$.j = CoroutineScope;
  _.$_$.k = Job;
  _.$_$.l = SupervisorJob;
  _.$_$.m = cancel;
  _.$_$.n = cancel_0;
  _.$_$.o = get_job;
  _.$_$.p = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-coroutines-core.js.map
