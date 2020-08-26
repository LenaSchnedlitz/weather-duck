
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function svg_element(name) {
        return document.createElementNS('http://www.w3.org/2000/svg', name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function xlink_attr(node, attribute, value) {
        node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_style(node, key, value, important) {
        node.style.setProperty(key, value, important ? 'important' : '');
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error(`Function called outside component initialization`);
        return current_component;
    }
    function onMount(fn) {
        get_current_component().$$.on_mount.push(fn);
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if ($$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set() {
            // overridden by instance, if it has props
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.23.2' }, detail)));
    }
    function append_dev(target, node) {
        dispatch_dev("SvelteDOMInsert", { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev("SvelteDOMInsert", { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev("SvelteDOMRemove", { node });
        detach(node);
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
        else
            dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.data === data)
            return;
        dispatch_dev("SvelteDOMSetData", { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error(`'target' is a required option`);
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn(`Component was already destroyed`); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src\SearchForm.svelte generated by Svelte v3.23.2 */

    const file = "src\\SearchForm.svelte";

    function create_fragment(ctx) {
    	let section;
    	let h1;
    	let t1;
    	let form;
    	let input;
    	let t2;
    	let button;
    	let svg;
    	let circle;
    	let line;

    	const block = {
    		c: function create() {
    			section = element("section");
    			h1 = element("h1");
    			h1.textContent = `${/*greeting*/ ctx[0]()}`;
    			t1 = space();
    			form = element("form");
    			input = element("input");
    			t2 = space();
    			button = element("button");
    			svg = svg_element("svg");
    			circle = svg_element("circle");
    			line = svg_element("line");
    			attr_dev(h1, "class", "svelte-xmcsun");
    			add_location(h1, file, 138, 2, 2280);
    			attr_dev(input, "type", "text");
    			attr_dev(input, "name", "q");
    			attr_dev(input, "aria-label", "Search on DuckDuckGo");
    			input.autofocus = true;
    			attr_dev(input, "class", "svelte-xmcsun");
    			add_location(input, file, 140, 4, 2397);
    			attr_dev(circle, "cx", "11");
    			attr_dev(circle, "cy", "11");
    			attr_dev(circle, "r", "8");
    			add_location(circle, file, 144, 8, 2593);
    			attr_dev(line, "x1", "21");
    			attr_dev(line, "y1", "21");
    			attr_dev(line, "x2", "16.65");
    			attr_dev(line, "y2", "16.65");
    			add_location(line, file, 145, 8, 2641);
    			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr_dev(svg, "class", "svelte-xmcsun");
    			add_location(svg, file, 143, 6, 2544);
    			attr_dev(button, "class", "svelte-xmcsun");
    			add_location(button, file, 141, 4, 2475);
    			attr_dev(form, "method", "get");
    			attr_dev(form, "id", "search-form");
    			attr_dev(form, "action", "https://duckduckgo.com/");
    			attr_dev(form, "autocomplete", "off");
    			attr_dev(form, "class", "svelte-xmcsun");
    			add_location(form, file, 139, 2, 2304);
    			attr_dev(section, "class", "svelte-xmcsun");
    			add_location(section, file, 137, 0, 2268);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, section, anchor);
    			append_dev(section, h1);
    			append_dev(section, t1);
    			append_dev(section, form);
    			append_dev(form, input);
    			append_dev(form, t2);
    			append_dev(form, button);
    			append_dev(button, svg);
    			append_dev(svg, circle);
    			append_dev(svg, line);
    			input.focus();
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(section);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { greetings } = $$props;

    	function greeting() {
    		const currentHour = new Date().getHours();

    		if (currentHour < 5) {
    			return greetings.night;
    		} else if (currentHour < 11) {
    			return greetings.morning;
    		} else if (currentHour < 17) {
    			return greetings.day;
    		} else if (currentHour < 23) {
    			return greetings.evening;
    		} else {
    			return greetings.night;
    		}
    	}

    	const writable_props = ["greetings"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<SearchForm> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("SearchForm", $$slots, []);

    	$$self.$set = $$props => {
    		if ("greetings" in $$props) $$invalidate(1, greetings = $$props.greetings);
    	};

    	$$self.$capture_state = () => ({ greetings, greeting });

    	$$self.$inject_state = $$props => {
    		if ("greetings" in $$props) $$invalidate(1, greetings = $$props.greetings);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [greeting, greetings];
    }

    class SearchForm extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, { greetings: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "SearchForm",
    			options,
    			id: create_fragment.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*greetings*/ ctx[1] === undefined && !("greetings" in props)) {
    			console.warn("<SearchForm> was created without expected prop 'greetings'");
    		}
    	}

    	get greetings() {
    		throw new Error("<SearchForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set greetings(value) {
    		throw new Error("<SearchForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\TemperatureInfo.svelte generated by Svelte v3.23.2 */

    const file$1 = "src\\TemperatureInfo.svelte";

    function create_fragment$1(ctx) {
    	let div;
    	let t0_value = Math.round(/*temperature*/ ctx[0]) + "";
    	let t0;
    	let t1;

    	const block = {
    		c: function create() {
    			div = element("div");
    			t0 = text(t0_value);
    			t1 = text("°");
    			set_style(div, "background-color", /*backgroundColor*/ ctx[1]());
    			set_style(div, "color", /*color*/ ctx[2]());
    			attr_dev(div, "class", "svelte-1n8166g");
    			add_location(div, file$1, 44, 0, 821);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, t0);
    			append_dev(div, t1);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*temperature*/ 1 && t0_value !== (t0_value = Math.round(/*temperature*/ ctx[0]) + "")) set_data_dev(t0, t0_value);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { temperature } = $$props;

    	function backgroundColor() {
    		if (temperature > 49) {
    			$$invalidate(0, temperature = 49);
    		} else if (temperature < -50) {
    			$$invalidate(0, temperature = -50);
    		}

    		return `var(--color-${Math.round(temperature)})`;
    	}

    	/**
     * Returns black or white depending on contrast.
     */
    	function color() {
    		if (-32 <= temperature <= -18 || 35 <= temperature) {
    			return "var(--white)";
    		}

    		return "var(--black)";
    	}

    	const writable_props = ["temperature"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<TemperatureInfo> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("TemperatureInfo", $$slots, []);

    	$$self.$set = $$props => {
    		if ("temperature" in $$props) $$invalidate(0, temperature = $$props.temperature);
    	};

    	$$self.$capture_state = () => ({ temperature, backgroundColor, color });

    	$$self.$inject_state = $$props => {
    		if ("temperature" in $$props) $$invalidate(0, temperature = $$props.temperature);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [temperature, backgroundColor, color];
    }

    class TemperatureInfo extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, { temperature: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "TemperatureInfo",
    			options,
    			id: create_fragment$1.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*temperature*/ ctx[0] === undefined && !("temperature" in props)) {
    			console.warn("<TemperatureInfo> was created without expected prop 'temperature'");
    		}
    	}

    	get temperature() {
    		throw new Error("<TemperatureInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set temperature(value) {
    		throw new Error("<TemperatureInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\TimeInfo.svelte generated by Svelte v3.23.2 */

    const file$2 = "src\\TimeInfo.svelte";

    function create_fragment$2(ctx) {
    	let span;
    	let t0_value = /*hour*/ ctx[0]() + "";
    	let t0;
    	let t1;
    	let sup;

    	const block = {
    		c: function create() {
    			span = element("span");
    			t0 = text(t0_value);
    			t1 = space();
    			sup = element("sup");
    			sup.textContent = "00";
    			attr_dev(sup, "class", "svelte-1p69b5i");
    			add_location(sup, file$2, 20, 2, 226);
    			attr_dev(span, "class", "svelte-1p69b5i");
    			add_location(span, file$2, 18, 0, 206);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    			append_dev(span, t0);
    			append_dev(span, t1);
    			append_dev(span, sup);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { unixTime } = $$props;

    	function hour() {
    		return new Date(unixTime * 1000).getHours();
    	}

    	const writable_props = ["unixTime"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<TimeInfo> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("TimeInfo", $$slots, []);

    	$$self.$set = $$props => {
    		if ("unixTime" in $$props) $$invalidate(1, unixTime = $$props.unixTime);
    	};

    	$$self.$capture_state = () => ({ unixTime, hour });

    	$$self.$inject_state = $$props => {
    		if ("unixTime" in $$props) $$invalidate(1, unixTime = $$props.unixTime);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [hour, unixTime];
    }

    class TimeInfo extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { unixTime: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "TimeInfo",
    			options,
    			id: create_fragment$2.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*unixTime*/ ctx[1] === undefined && !("unixTime" in props)) {
    			console.warn("<TimeInfo> was created without expected prop 'unixTime'");
    		}
    	}

    	get unixTime() {
    		throw new Error("<TimeInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set unixTime(value) {
    		throw new Error("<TimeInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\WeatherIcon.svelte generated by Svelte v3.23.2 */

    const file$3 = "src\\WeatherIcon.svelte";

    function create_fragment$3(ctx) {
    	let svg;
    	let use;
    	let use_xlink_href_value;

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			use = svg_element("use");
    			xlink_attr(use, "xlink:href", use_xlink_href_value = "weather.svg#" + /*iconId*/ ctx[0]());
    			add_location(use, file$3, 49, 2, 873);
    			attr_dev(svg, "viewBox", "0 0 24 24");
    			attr_dev(svg, "class", "svelte-lu0fx3");
    			add_location(svg, file$3, 48, 0, 845);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, use);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { iconCode } = $$props;

    	function iconId() {
    		switch (iconCode) {
    			case "01d":
    				return "sun";
    			case "01n":
    				return "moon";
    			case "02d":
    				return "sun";
    			case "02n":
    				return "moon";
    			case "03d":
    			case "03n":
    			case "04d":
    			case "04n":
    				return "cloud";
    			case "09d":
    			case "09n":
    				return "cloud-drizzle";
    			case "10d":
    			case "10n":
    				return "cloud-rain";
    			case "11d":
    			case "11n":
    				return "cloud-lightning";
    			case "13d":
    			case "13n":
    				return "cloud-snow";
    			case "50d":
    			case "50n":
    				return "mist";
    		}
    	}

    	const writable_props = ["iconCode"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<WeatherIcon> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("WeatherIcon", $$slots, []);

    	$$self.$set = $$props => {
    		if ("iconCode" in $$props) $$invalidate(1, iconCode = $$props.iconCode);
    	};

    	$$self.$capture_state = () => ({ iconCode, iconId });

    	$$self.$inject_state = $$props => {
    		if ("iconCode" in $$props) $$invalidate(1, iconCode = $$props.iconCode);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [iconId, iconCode];
    }

    class WeatherIcon extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, { iconCode: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "WeatherIcon",
    			options,
    			id: create_fragment$3.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*iconCode*/ ctx[1] === undefined && !("iconCode" in props)) {
    			console.warn("<WeatherIcon> was created without expected prop 'iconCode'");
    		}
    	}

    	get iconCode() {
    		throw new Error("<WeatherIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set iconCode(value) {
    		throw new Error("<WeatherIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\WeatherReport.svelte generated by Svelte v3.23.2 */
    const file$4 = "src\\WeatherReport.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[2] = list[i];
    	child_ctx[4] = i;
    	return child_ctx;
    }

    // (63:2) {#each hourData as hour, i}
    function create_each_block(ctx) {
    	let li;
    	let timeinfo;
    	let t0;
    	let weathericon;
    	let t1;
    	let temperatureinfo;
    	let t2;
    	let current;

    	timeinfo = new TimeInfo({
    			props: { unixTime: /*hour*/ ctx[2].dt },
    			$$inline: true
    		});

    	weathericon = new WeatherIcon({
    			props: {
    				iconCode: /*hour*/ ctx[2].weather[0].icon
    			},
    			$$inline: true
    		});

    	temperatureinfo = new TemperatureInfo({
    			props: { temperature: /*hour*/ ctx[2].feels_like },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			li = element("li");
    			create_component(timeinfo.$$.fragment);
    			t0 = space();
    			create_component(weathericon.$$.fragment);
    			t1 = space();
    			create_component(temperatureinfo.$$.fragment);
    			t2 = space();
    			attr_dev(li, "class", "svelte-1dykhco");
    			add_location(li, file$4, 63, 4, 1267);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, li, anchor);
    			mount_component(timeinfo, li, null);
    			append_dev(li, t0);
    			mount_component(weathericon, li, null);
    			append_dev(li, t1);
    			mount_component(temperatureinfo, li, null);
    			append_dev(li, t2);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const timeinfo_changes = {};
    			if (dirty & /*hourData*/ 1) timeinfo_changes.unixTime = /*hour*/ ctx[2].dt;
    			timeinfo.$set(timeinfo_changes);
    			const weathericon_changes = {};
    			if (dirty & /*hourData*/ 1) weathericon_changes.iconCode = /*hour*/ ctx[2].weather[0].icon;
    			weathericon.$set(weathericon_changes);
    			const temperatureinfo_changes = {};
    			if (dirty & /*hourData*/ 1) temperatureinfo_changes.temperature = /*hour*/ ctx[2].feels_like;
    			temperatureinfo.$set(temperatureinfo_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(timeinfo.$$.fragment, local);
    			transition_in(weathericon.$$.fragment, local);
    			transition_in(temperatureinfo.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(timeinfo.$$.fragment, local);
    			transition_out(weathericon.$$.fragment, local);
    			transition_out(temperatureinfo.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(li);
    			destroy_component(timeinfo);
    			destroy_component(weathericon);
    			destroy_component(temperatureinfo);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(63:2) {#each hourData as hour, i}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$4(ctx) {
    	let ul;
    	let current;
    	let each_value = /*hourData*/ ctx[0];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			ul = element("ul");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(ul, "class", "svelte-1dykhco");
    			add_location(ul, file$4, 61, 0, 1228);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, ul, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(ul, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*hourData*/ 1) {
    				each_value = /*hourData*/ ctx[0];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(ul, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(ul);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let { url } = $$props;
    	let hourData = [];

    	onMount(async () => {
    		const res = await fetch(url);
    		const weatherData = await res.json();
    		const rawHourData = weatherData.hourly;
    		const currentTime = new Date(rawHourData[0].dt * 1000).getHours();
    		$$invalidate(0, hourData = rawHourData.slice(0, 48 - currentTime + 1));
    	});

    	const writable_props = ["url"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<WeatherReport> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("WeatherReport", $$slots, []);

    	$$self.$set = $$props => {
    		if ("url" in $$props) $$invalidate(1, url = $$props.url);
    	};

    	$$self.$capture_state = () => ({
    		TemperatureInfo,
    		TimeInfo,
    		WeatherIcon,
    		onMount,
    		url,
    		hourData
    	});

    	$$self.$inject_state = $$props => {
    		if ("url" in $$props) $$invalidate(1, url = $$props.url);
    		if ("hourData" in $$props) $$invalidate(0, hourData = $$props.hourData);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [hourData, url];
    }

    class WeatherReport extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, { url: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "WeatherReport",
    			options,
    			id: create_fragment$4.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*url*/ ctx[1] === undefined && !("url" in props)) {
    			console.warn("<WeatherReport> was created without expected prop 'url'");
    		}
    	}

    	get url() {
    		throw new Error("<WeatherReport>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set url(value) {
    		throw new Error("<WeatherReport>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src\App.svelte generated by Svelte v3.23.2 */

    function create_fragment$5(ctx) {
    	let searchform;
    	let t;
    	let weatherreport;
    	let current;

    	searchform = new SearchForm({
    			props: { greetings: /*greetings*/ ctx[3] },
    			$$inline: true
    		});

    	weatherreport = new WeatherReport({
    			props: {
    				url: `${/*apiUrl*/ ctx[0]}&appid=${/*apiKey*/ ctx[1]}&${/*apiLocation*/ ctx[2]}`
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(searchform.$$.fragment);
    			t = space();
    			create_component(weatherreport.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(searchform, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(weatherreport, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const searchform_changes = {};
    			if (dirty & /*greetings*/ 8) searchform_changes.greetings = /*greetings*/ ctx[3];
    			searchform.$set(searchform_changes);
    			const weatherreport_changes = {};
    			if (dirty & /*apiUrl, apiKey, apiLocation*/ 7) weatherreport_changes.url = `${/*apiUrl*/ ctx[0]}&appid=${/*apiKey*/ ctx[1]}&${/*apiLocation*/ ctx[2]}`;
    			weatherreport.$set(weatherreport_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(searchform.$$.fragment, local);
    			transition_in(weatherreport.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(searchform.$$.fragment, local);
    			transition_out(weatherreport.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(searchform, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(weatherreport, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let { apiUrl } = $$props;
    	let { apiKey } = $$props;
    	let { apiLocation } = $$props;
    	let { greetings } = $$props;
    	const writable_props = ["apiUrl", "apiKey", "apiLocation", "greetings"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("App", $$slots, []);

    	$$self.$set = $$props => {
    		if ("apiUrl" in $$props) $$invalidate(0, apiUrl = $$props.apiUrl);
    		if ("apiKey" in $$props) $$invalidate(1, apiKey = $$props.apiKey);
    		if ("apiLocation" in $$props) $$invalidate(2, apiLocation = $$props.apiLocation);
    		if ("greetings" in $$props) $$invalidate(3, greetings = $$props.greetings);
    	};

    	$$self.$capture_state = () => ({
    		SearchForm,
    		WeatherReport,
    		apiUrl,
    		apiKey,
    		apiLocation,
    		greetings
    	});

    	$$self.$inject_state = $$props => {
    		if ("apiUrl" in $$props) $$invalidate(0, apiUrl = $$props.apiUrl);
    		if ("apiKey" in $$props) $$invalidate(1, apiKey = $$props.apiKey);
    		if ("apiLocation" in $$props) $$invalidate(2, apiLocation = $$props.apiLocation);
    		if ("greetings" in $$props) $$invalidate(3, greetings = $$props.greetings);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [apiUrl, apiKey, apiLocation, greetings];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$5, create_fragment$5, safe_not_equal, {
    			apiUrl: 0,
    			apiKey: 1,
    			apiLocation: 2,
    			greetings: 3
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment$5.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*apiUrl*/ ctx[0] === undefined && !("apiUrl" in props)) {
    			console.warn("<App> was created without expected prop 'apiUrl'");
    		}

    		if (/*apiKey*/ ctx[1] === undefined && !("apiKey" in props)) {
    			console.warn("<App> was created without expected prop 'apiKey'");
    		}

    		if (/*apiLocation*/ ctx[2] === undefined && !("apiLocation" in props)) {
    			console.warn("<App> was created without expected prop 'apiLocation'");
    		}

    		if (/*greetings*/ ctx[3] === undefined && !("greetings" in props)) {
    			console.warn("<App> was created without expected prop 'greetings'");
    		}
    	}

    	get apiUrl() {
    		throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set apiUrl(value) {
    		throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get apiKey() {
    		throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set apiKey(value) {
    		throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get apiLocation() {
    		throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set apiLocation(value) {
    		throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get greetings() {
    		throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set greetings(value) {
    		throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    const app = new App({
      target: document.body,
      props: {
        apiUrl: 'https://api.openweathermap.org/data/2.5/onecall?exclude=current,minutely,daily&units=metric',
        apiKey: 'TODO',
        apiLocation: 'lat=48.210033&lon=16.363449',
        greetings: {
          morning: 'Guten Morgen!',
          day: 'Hi.',
          evening: 'Schönen Abend!',
          night: 'Gute Nacht.'
        }
      }
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
