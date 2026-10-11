/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { jsx, keyframes } from "@emotion/react"
import { ShieldAlertIcon as LucideShieldAlertIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Badge as RadixThemesBadge, Box as RadixThemesBox, Button as RadixThemesButton, Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText, TextArea as RadixThemesTextArea } from "@radix-ui/themes"
import NextLink from "next/link"
import { DebounceInput } from "react-debounce-input"
import NextHead from "next/head"



export function Button_a00a4da9c77f537e904939a7bfac706f () {
  
  const reflex___state____state__trapcheck___states___guardian_state____guardian_state = useContext(StateContexts.reflex___state____state__trapcheck___states___guardian_state____guardian_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_db129051af49e1556804732c8dcc3c99 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.trapcheck___states___guardian_state____guardian_state.ask", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesButton css={({ ["isDisabled"] : reflex___state____state__trapcheck___states___guardian_state____guardian_state.is_loading, ["background"] : "#06B6D4", ["color"] : "white", ["borderRadius"] : "12px", ["padding"] : "11px 22px", ["fontWeight"] : "700" })} onClick={on_click_db129051af49e1556804732c8dcc3c99}>

{(reflex___state____state__trapcheck___states___guardian_state____guardian_state.is_loading ? "Checking local context\u2026" : "Ask Guardian")}
</RadixThemesButton>
  )
}

export function Debounceinput_594390c6b0785623f7bfd3f6c52d37cb () {
  
  const ref_guardian_question = useRef(null); refs["ref_guardian_question"] = ref_guardian_question;
  const reflex___state____state__trapcheck___states___guardian_state____guardian_state = useContext(StateContexts.reflex___state____state__trapcheck___states___guardian_state____guardian_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_737cd16ca072be14698667e84f2b5a15 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.trapcheck___states___guardian_state____guardian_state.set_question", ({ ["question"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    <DebounceInput css={({ ["width"] : "100%", ["minHeight"] : "110px", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px", ["padding"] : "14px" })} debounceTimeout={300} element={RadixThemesTextArea} id={"guardian_question"} inputRef={ref_guardian_question} onChange={on_change_737cd16ca072be14698667e84f2b5a15} placeholder={"Example: Is 500 THB for Pad Thai a scam?"} resize={"vertical"} value={reflex___state____state__trapcheck___states___guardian_state____guardian_state.question}/>
  )
}

export function Button_ce19308a8e81064458d27b673091ac5f () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_1a6f4d97bbc6eab2b38f552d9a0b5fad = useCallback(((...args) => (addEvents([(Event("_call_script", ({ ["javascript_code"] : "(function(){\n  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;\n  const status = document.getElementById('guardian_voice_status');\n  if (!SR) { if (status) status.textContent = 'Voice input is not supported in this browser. Type your question below.'; return; }\n  const recognition = new SR(); recognition.lang = 'en-US'; recognition.interimResults = false;\n  if (status) status.textContent = 'Listening\u2026 speak your question.';\n  recognition.onresult = function(e) {\n    const input = document.getElementById('guardian_question');\n    if (input) { input.value = e.results[0][0].transcript; input.dispatchEvent(new Event('input', {bubbles:true})); }\n    if (status) status.textContent = 'Voice question added. Press Ask Guardian to get advice.';\n  };\n  recognition.onerror = function() { if(status) status.textContent = 'Could not hear that. You can type instead.'; };\n  recognition.start();\n})();" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesButton css={({ ["background"] : "white", ["color"] : "#0F172A", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px", ["padding"] : "11px 18px" })} onClick={on_click_1a6f4d97bbc6eab2b38f552d9a0b5fad}>

{"Use voice"}
</RadixThemesButton>
  )
}

export function Errorboundary_cea48bf5abce468707001a1614d1eb18 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const ref_guardian_voice_status = useRef(null); refs["ref_guardian_voice_status"] = ref_guardian_voice_status;


  const on_error_0f5dbf674521530422d73a7946faf6d4 = useCallback(((_error, _info) => (addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  })))), [addEvents, Event])



  
  return (
    <ErrorBoundary fallbackRender={((event_args) => (jsx("div", ({ ["css"] : ({ ["height"] : "100%", ["width"] : "100%", ["position"] : "absolute", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem", ["maxWidth"] : "50ch", ["border"] : "1px solid #888888", ["borderRadius"] : "0.25rem", ["padding"] : "1rem" }) }), (jsx("h2", ({ ["css"] : ({ ["fontSize"] : "1.25rem", ["fontWeight"] : "bold" }) }), (jsx(Fragment, ({  }), "An error occurred while rendering this page.")))), (jsx("p", ({ ["css"] : ({ ["opacity"] : "0.75" }) }), (jsx(Fragment, ({  }), "This is an error with the application itself.")))), (jsx("details", ({  }), (jsx("summary", ({ ["css"] : ({ ["padding"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Error message")))), (jsx("div", ({ ["css"] : ({ ["width"] : "100%", ["maxHeight"] : "50vh", ["overflow"] : "auto", ["background"] : "#000", ["color"] : "#fff", ["borderRadius"] : "0.25rem" }) }), (jsx("div", ({ ["css"] : ({ ["padding"] : "0.5rem", ["width"] : "fit-content" }) }), (jsx("pre", ({  }), (jsx(Fragment, ({  }), event_args.error.stack)))))))), (jsx("button", ({ ["css"] : ({ ["padding"] : "0.35rem 0.75rem", ["margin"] : "0.5rem", ["background"] : "#fff", ["color"] : "#000", ["border"] : "1px solid #000", ["borderRadius"] : "0.25rem", ["fontWeight"] : "bold" }), ["onClick"] : ((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"](event_args.error.stack))), ["callback"] : null }), ({  })))], args, ({  })))) }), (jsx(Fragment, ({  }), "Copy")))))))), (jsx("hr", ({ ["css"] : ({ ["borderColor"] : "currentColor", ["opacity"] : "0.25" }) }))), (jsx("a", ({ ["href"] : "https://reflex.dev" }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["alignItems"] : "baseline", ["justifyContent"] : "center", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["gap"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Built with ")), (jsx("svg", ({ ["css"] : ({ ["viewBox"] : "0 0 56 12", ["fill"] : "currentColor" }), ["height"] : "12", ["width"] : "56", ["xmlns"] : "http://www.w3.org/2000/svg" }), (jsx("path", ({ ["d"] : "M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z" }))), (jsx("path", ({ ["d"] : "M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z" }))), (jsx("path", ({ ["d"] : "M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z" }))), (jsx("path", ({ ["d"] : "M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z" }))), (jsx("path", ({ ["d"] : "M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z" }))), (jsx("path", ({ ["d"] : "M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z" }))))))))))))))} onError={on_error_0f5dbf674521530422d73a7946faf6d4}>

<Fragment>

<Div_602c14884fa2de27f522fe8f94374b02/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<RadixThemesBox css={({ ["width"] : "100%", ["minHeight"] : "100vh" })}>

<nav css={({ ["position"] : "sticky", ["top"] : "0", ["zIndex"] : "50", ["background"] : "rgba(255,255,255,0.8)", ["backdropFilter"] : "blur(12px)", ["borderBottom"] : "1px solid rgba(15,23,42,0.06)" })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%", ["maxWidth"] : "1200px", ["margin"] : "0 auto", ["padding"] : "14px 24px" })} direction={"row"} justify={"between"} gap={"3"}>

<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"2"}>

<RadixThemesBox css={({ ["background"] : "#06B6D4", ["borderRadius"] : "10px", ["padding"] : "8px" })}>

<LucideShieldAlertIcon css={({ ["color"] : "white" })} size={18}/>
</RadixThemesBox>
<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Outfit, sans-serif", ["--default-font-family"] : "Outfit, sans-serif", ["fontWeight"] : "800", ["fontSize"] : "20px", ["letterSpacing"] : "-0.5px", ["color"] : "#0F172A" })}>

{"TrapCheck"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"6"}>

<RadixThemesLink asChild={true} css={({ ["color"] : "#475569", ["fontWeight"] : "500", ["&:hover"] : ({ ["color"] : "#0F172A" }), ["textDecoration"] : "none" })}>

<NextLink href={"/scanner"} passHref={true}>

{"Scanner"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["color"] : "#475569", ["fontWeight"] : "500", ["&:hover"] : ({ ["color"] : "#0F172A" }), ["textDecoration"] : "none" })}>

<NextLink href={"/map"} passHref={true}>

{"Map"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["color"] : "#475569", ["fontWeight"] : "500", ["&:hover"] : ({ ["color"] : "#0F172A" }), ["textDecoration"] : "none" })}>

<NextLink href={"/guardian"} passHref={true}>

{"Guardian"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["color"] : "#475569", ["fontWeight"] : "500", ["&:hover"] : ({ ["color"] : "#0F172A" }), ["textDecoration"] : "none" })}>

<NextLink href={"/community"} passHref={true}>

{"Community"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["color"] : "#475569", ["fontWeight"] : "500", ["&:hover"] : ({ ["color"] : "#0F172A" }), ["textDecoration"] : "none" })}>

<NextLink href={"/about"} passHref={true}>

{"How It Works"}
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/scanner"} passHref={true}>

<RadixThemesButton css={({ ["background"] : "#06B6D4", ["color"] : "white", ["borderRadius"] : "12px", ["padding"] : "8px 18px", ["fontWeight"] : "600", ["&:hover"] : ({ ["transform"] : "scale(1.03)", ["boxShadow"] : "0 6px 18px rgba(6,182,212,0.35)" }), ["transition"] : "all 0.15s ease" })}>

{"Scan Now"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</nav>
<RadixThemesContainer css={({ ["padding"] : "16px", ["maxWidth"] : "1000px" })} size={"3"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["paddingBottom"] : "48px", ["width"] : "100%" })} direction={"column"} gap={"4"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["textAlign"] : "center", ["padding"] : "34px 12px 8px" })} direction={"column"} gap={"3"}>

<RadixThemesBadge css={({ ["background"] : "rgba(6,182,212,0.1)", ["color"] : "#0891B2", ["padding"] : "7px 14px" })} radius={"full"}>

{"LOCAL EXPERT \u00b7 GEMINI + OFFLINE FALLBACK"}
</RadixThemesBadge>
<RadixThemesHeading css={({ ["fontFamily"] : "Outfit, sans-serif", ["--default-font-family"] : "Outfit, sans-serif", ["fontSize"] : "36px", ["fontWeight"] : "800", ["color"] : "#0F172A" })}>

{"Ask before you pay"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "#64748B", ["fontSize"] : "15px" })}>

{"Get a quick local read on a price, a suspicious pitch, or what to check next."}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["maxWidth"] : "720px", ["background"] : "white", ["padding"] : "24px", ["border"] : "1px solid #E2E8F0", ["borderRadius"] : "18px", ["boxShadow"] : "0 12px 34px rgba(15,23,42,0.08)" })} direction={"column"} gap={"4"}>

<Flex_bf263a9308950536fdb28ad487ce8807/>
<Debounceinput_594390c6b0785623f7bfd3f6c52d37cb/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"end"} gap={"3"}>

<Button_ce19308a8e81064458d27b673091ac5f/>
<Button_a00a4da9c77f537e904939a7bfac706f/>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["color"] : "#94A3B8", ["fontSize"] : "12px" })} id={"guardian_voice_status"} ref={ref_guardian_voice_status}>

{"Voice input uses your browser's speech recognition, when available."}
</RadixThemesText>
<Fragment_0f0331e78533f387801f3c4d95c10baa/>
<Fragment_7df8129b55f27509670f3d2006927493/>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["color"] : "#94A3B8", ["fontSize"] : "12px", ["textAlign"] : "center", ["maxWidth"] : "700px" })}>

{"Price checks use TrapCheck's local ranges when an item match is available. Treat them as guidance, not official rates."}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesContainer>
<footer css={({ ["borderTop"] : "1px solid rgba(15,23,42,0.06)", ["background"] : "white" })}>

<RadixThemesContainer css={({ ["padding"] : "16px", ["paddingTop"] : "40px", ["paddingBottom"] : "40px" })} size={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["fontWeight"] : "800", ["fontFamily"] : "Outfit, sans-serif", ["--default-font-family"] : "Outfit, sans-serif", ["fontSize"] : "18px", ["color"] : "#0F172A" })}>

{"TrapCheck"}
</RadixThemesText>
<RadixThemesBadge css={({ ["background"] : "#F1F5F9", ["color"] : "#64748B" })} radius={"full"}>

{"Beta \u2014 Bangkok \u00b7 Bali \u00b7 Jaipur"}
</RadixThemesBadge>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "13px", ["color"] : "#64748B", ["maxWidth"] : "560px" })}>

{"Privacy: scanner photos are analyzed in memory and never stored. Community photos are sanitized and shared publicly only when you submit a report. No accounts or tracking pixels."}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "12px", ["color"] : "#64748B", ["maxWidth"] : "640px" })}>

{"Fair price ranges are aggregated from local market research and community reports and are estimates, not official rates. TrapCheck is an independent project and is not affiliated with any government body or tourism authority."}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"5"}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "13px", ["color"] : "#64748B" })}>

{"Contact: hello@trapcheck.app"}
</RadixThemesText>
<RadixThemesLink asChild={true} css={({ ["fontSize"] : "13px", ["color"] : "#06B6D4", ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/about"} passHref={true}>

{"Terms & Privacy"}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesContainer>
</footer>
</RadixThemesBox>
<NextHead>

<title>

{"TrapCheck \u2014 AI Travel Guardian"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
  )
}

export function Toaster_6e6ebf8d7ce589d59b7d382fb7576edf () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)

  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast_props = ({ ["description"] : ("Check if server is reachable at "+getBackendURL(env.EVENT).href), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors]))




  
  return (
    <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Fragment_7df8129b55f27509670f3d2006927493 () {
  
  const reflex___state____state__trapcheck___states___guardian_state____guardian_state = useContext(StateContexts.reflex___state____state__trapcheck___states___guardian_state____guardian_state)





  
  return (
    <Fragment>

{isTrue(!((reflex___state____state__trapcheck___states___guardian_state____guardian_state.answer === ""))) ? (
  <Fragment>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["background"] : "#F8FAFC", ["padding"] : "20px", ["borderRadius"] : "12px", ["width"] : "100%", ["alignItems"] : "flex-start" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"2"} wrap={"wrap"}>

<RadixThemesBadge css={({ ["background"] : "rgba(6,182,212,0.1)", ["color"] : "#0E7490" })}>

{reflex___state____state__trapcheck___states___guardian_state____guardian_state.mode}
</RadixThemesBadge>
<RadixThemesText as={"p"} css={({ ["color"] : "#64748B", ["fontSize"] : "12px" })}>

{((reflex___state____state__trapcheck___states___guardian_state____guardian_state.city+" \u00b7 ")+reflex___state____state__trapcheck___states___guardian_state____guardian_state.context_label)}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["color"] : "#0F172A", ["fontSize"] : "16px", ["lineHeight"] : "1.7" })}>

{reflex___state____state__trapcheck___states___guardian_state____guardian_state.answer}
</RadixThemesText>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Fragment_f2f0916d2fcc08b7cdf76cec697f0750 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <Fragment>

{isTrue((connectErrors.length > 0)) ? (
  <Fragment>

<LucideWifiOffIcon css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Flex_bf263a9308950536fdb28ad487ce8807 () {
  
  const reflex___state____state__trapcheck___states___guardian_state____guardian_state = useContext(StateContexts.reflex___state____state__trapcheck___states___guardian_state____guardian_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"2"} wrap={"wrap"}>

<RadixThemesText as={"p"} css={({ ["fontWeight"] : "600", ["color"] : "#0F172A" })}>

{"I'm in"}
</RadixThemesText>
<>{["Bangkok", "Bali", "Jaipur"].map((city, index_e799cf4866787687) => (
  <Fragment key={index_e799cf4866787687}>

{isTrue((reflex___state____state__trapcheck___states___guardian_state____guardian_state.city === city)) ? (
  <Fragment>

<RadixThemesButton css={({ ["background"] : "#0F172A", ["color"] : "white", ["borderRadius"] : "999px", ["padding"] : "7px 15px" })} onClick={((...args) => (addEvents([(Event("reflex___state____state.trapcheck___states___guardian_state____guardian_state.set_city", ({ ["city"] : city }), ({  })))], args, ({  }))))}>

{city}
</RadixThemesButton>
</Fragment>
) : (
  <Fragment>

<RadixThemesButton css={({ ["background"] : "white", ["color"] : "#475569", ["border"] : "1px solid #E2E8F0", ["borderRadius"] : "999px", ["padding"] : "7px 15px" })} onClick={((...args) => (addEvents([(Event("reflex___state____state.trapcheck___states___guardian_state____guardian_state.set_city", ({ ["city"] : city }), ({  })))], args, ({  }))))}>

{city}
</RadixThemesButton>
</Fragment>
)}
</Fragment>
))}</>
</RadixThemesFlex>
  )
}

export function Div_602c14884fa2de27f522fe8f94374b02 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_f2f0916d2fcc08b7cdf76cec697f0750/>
</div>
  )
}

export function Fragment_0f0331e78533f387801f3c4d95c10baa () {
  
  const reflex___state____state__trapcheck___states___guardian_state____guardian_state = useContext(StateContexts.reflex___state____state__trapcheck___states___guardian_state____guardian_state)





  
  return (
    <Fragment>

{isTrue(!((reflex___state____state__trapcheck___states___guardian_state____guardian_state.error_message === ""))) ? (
  <Fragment>

<RadixThemesText as={"p"} css={({ ["color"] : "#B91C1C", ["fontSize"] : "13px" })}>

{reflex___state____state__trapcheck___states___guardian_state____guardian_state.error_message}
</RadixThemesText>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export default function Component() {
    




  return (
    <Errorboundary_cea48bf5abce468707001a1614d1eb18/>
  )
}
