/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { jsx, keyframes } from "@emotion/react"
import { ShieldAlertIcon as LucideShieldAlertIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Badge as RadixThemesBadge, Box as RadixThemesBox, Button as RadixThemesButton, Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import Script from "next/script"
import NextHead from "next/head"



export function Flex_f56a45a94f1358540373973d9baec59b () {
  
  const reflex___state____state__trapcheck___pages___map____map_state = useContext(StateContexts.reflex___state____state__trapcheck___pages___map____map_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"2"} wrap={"wrap"}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "14px", ["color"] : "#475569", ["fontWeight"] : "500" })}>

{"Show:"}
</RadixThemesText>
<>{["All", "Bangkok", "Bali", "Jaipur"].map((city, index_a4671bed149ff938) => (
  <Fragment key={index_a4671bed149ff938}>

{isTrue((reflex___state____state__trapcheck___pages___map____map_state.active_city === city)) ? (
  <Fragment>

<RadixThemesButton css={({ ["background"] : "#0F172A", ["color"] : "white", ["borderRadius"] : "999px", ["padding"] : "6px 16px", ["fontSize"] : "13px", ["fontWeight"] : "600" })} onClick={((...args) => (addEvents([(Event("reflex___state____state.trapcheck___pages___map____map_state.set_city", ({ ["city"] : city }), ({  })))], args, ({  }))))}>

{city}
</RadixThemesButton>
</Fragment>
) : (
  <Fragment>

<RadixThemesButton css={({ ["background"] : "white", ["color"] : "#475569", ["borderRadius"] : "999px", ["padding"] : "6px 16px", ["fontSize"] : "13px", ["fontWeight"] : "500", ["border"] : "1px solid rgba(15,23,42,0.1)" })} onClick={((...args) => (addEvents([(Event("reflex___state____state.trapcheck___pages___map____map_state.set_city", ({ ["city"] : city }), ({  })))], args, ({  }))))}>

{city}
</RadixThemesButton>
</Fragment>
)}
</Fragment>
))}</>
</RadixThemesFlex>
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

export function Flex_e8a0d31ead5436e9a7b916682bd589f9 () {
  
  const reflex___state____state__trapcheck___pages___map____map_state = useContext(StateContexts.reflex___state____state__trapcheck___pages___map____map_state)





  
  return (
    <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start", ["width"] : "100%" })} direction={"column"} gap={"2"}>

<RadixThemesHeading css={({ ["fontFamily"] : "Outfit, sans-serif", ["--default-font-family"] : "Outfit, sans-serif", ["fontSize"] : "20px", ["color"] : "#0F172A" })}>

{"Recent reports"}
</RadixThemesHeading>
<>{reflex___state____state__trapcheck___pages___map____map_state.reports.map((report, index_0f988da61e46d0d9) => (
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["padding"] : "10px 12px", ["border"] : "1px solid #E2E8F0", ["borderRadius"] : "10px", ["background"] : "white" })} direction={"row"} key={index_0f988da61e46d0d9} gap={"3"} wrap={"wrap"}>

<RadixThemesBox css={({ ["width"] : "9px", ["height"] : "9px", ["borderRadius"] : "50%", ["background"] : "#EF4355" })}/>
<RadixThemesText as={"p"} css={({ ["color"] : "#0F172A", ["fontWeight"] : "700", ["fontSize"] : "13px" })}>

{report["city"]}
</RadixThemesText>
<RadixThemesBadge css={({ ["background"] : "#F1F5F9", ["color"] : "#475569" })}>

{report["category"]}
</RadixThemesBadge>
<RadixThemesText as={"p"} css={({ ["color"] : "#64748B", ["fontSize"] : "13px" })}>

{report["description"]}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "#B91C1C", ["fontSize"] : "12px" })}>

{report["amount_label"]}
</RadixThemesText>
</RadixThemesFlex>
))}</>
</RadixThemesFlex>
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

export function Errorboundary_4f19de6ac31e46475e67474cea226286 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const ref_trapmap = useRef(null); refs["ref_trapmap"] = ref_trapmap;


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
<RadixThemesContainer css={({ ["padding"] : "16px", ["maxWidth"] : "1200px" })} size={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["paddingTop"] : "36px", ["paddingBottom"] : "36px", ["width"] : "100%" })} direction={"column"} gap={"5"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"between"} gap={"3"} wrap={"wrap"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start" })} direction={"column"} gap={"1"}>

<RadixThemesHeading css={({ ["fontFamily"] : "Outfit, sans-serif", ["--default-font-family"] : "Outfit, sans-serif", ["fontSize"] : "32px", ["fontWeight"] : "800", ["color"] : "#0F172A", ["letterSpacing"] : "-0.5px" })}>

{"Scam Hotspot Map"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "15px", ["color"] : "#475569" })}>

{"17 traveler reports across Bangkok, Bali and Jaipur."}
</RadixThemesText>
</RadixThemesFlex>
<Flex_f56a45a94f1358540373973d9baec59b/>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"2"}>

<div css={({ ["width"] : "100%", ["height"] : "560px", ["borderRadius"] : "16px", ["border"] : "1px solid rgba(15,23,42,0.08)", ["zIndex"] : "0", ["background"] : "#E2E8F0" })} id={"trapmap"} ref={ref_trapmap}/>
<RadixThemesText as={"p"} css={({ ["color"] : "#94A3B8", ["fontSize"] : "12px" })}>

{"If map tiles are unavailable, recent reports are listed below."}
</RadixThemesText>
<Script src={"https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"} strategy={"afterInteractive"}/>
<link href={"https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"} rel={"stylesheet"}/>
<Script strategy={"afterInteractive"}>

{"\n(function(){\n  window.__trapPendingReports = window.__trapPendingReports || [];\n  window.__trapMapReady = false;\n  window.__trapSetReports = function(rows) {\n    window.__trapPendingReports = Array.isArray(rows) ? rows : [];\n    if (window.__trapMapReady) window.__trapDrawReports();\n  };\n  window.__trapDrawReports = function() {\n    if (!window.__trapMapReady) return;\n    window.__trapMarkers.clearLayers();\n    const city = window.__trapActiveCity || 'All';\n    const colors = {transport:'#EF4355',food:'#F59E0B',shopping:'#8B5CF6',ticket:'#F59E0B',activity:'#06B6D4',other:'#64748B',taxi:'#EF4355',auto:'#EF4355',bar:'#EF4355','gem-scam':'#EF4355',souvenir:'#F59E0B',guide:'#F59E0B'};\n    window.__trapPendingReports.filter(r => city === 'All' || r.city === city).forEach(r => {\n      const marker = L.circleMarker([Number(r.lat), Number(r.lng)], {\n        radius: 9, color: colors[r.category] || '#EF4355',\n        fillColor: colors[r.category] || '#EF4355', fillOpacity: 0.45, weight: 2\n      });\n      const popup = document.createElement('div');\n      const title = document.createElement('strong'); title.textContent = (r.category || 'Report') + ' \u00b7 ' + (r.city || '');\n      const detail = document.createElement('div'); detail.textContent = r.description || '';\n      const amount = document.createElement('div'); amount.textContent = r.amount_label || '';\n      popup.append(title, detail, amount); marker.bindPopup(popup); marker.addTo(window.__trapMarkers);\n    });\n  };\n  window.__trapSetCity = function(city, lat, lng, zoom) {\n    window.__trapActiveCity = city;\n    if (window.__trapMapReady) { window.__trapMap.setView([lat, lng], zoom); window.__trapDrawReports(); }\n  };\n  let attempts = 0;\n  const timer = setInterval(function(){\n    attempts++;\n    const target = document.getElementById('trapmap');\n    if (window.L && target && !window.__trapMapReady) {\n      clearInterval(timer);\n      if (window.__trapMap) window.__trapMap.remove();\n      window.__trapMap = L.map(target, {scrollWheelZoom:false}).setView([12,107],4);\n      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {\n        maxZoom:19, attribution:'&copy; OpenStreetMap contributors'\n      }).addTo(window.__trapMap);\n      window.__trapMarkers = L.layerGroup().addTo(window.__trapMap);\n      window.__trapMapReady = true;\n      window.__trapDrawReports();\n      setTimeout(function(){window.__trapMap.invalidateSize();}, 250);\n    }\n    if (attempts > 100) clearInterval(timer);\n  }, 100);\n})();\n"}
</Script>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "12px", ["color"] : "#94A3B8", ["textAlign"] : "center", ["padding"] : "4px 0 8px" })}>

{"Each marker is an approximate traveler report. Select a marker for its description and amount."}
</RadixThemesText>
<Flex_e8a0d31ead5436e9a7b916682bd589f9/>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/community"} passHref={true}>

<RadixThemesButton css={({ ["background"] : "#06B6D4", ["color"] : "white", ["borderRadius"] : "12px", ["padding"] : "11px 18px" })}>

{"See all reports or add a warning"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
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

{"TrapCheck \u2014 Scam Hotspot Map"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
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


export function Div_602c14884fa2de27f522fe8f94374b02 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_f2f0916d2fcc08b7cdf76cec697f0750/>
</div>
  )
}

export default function Component() {
    




  return (
    <Errorboundary_4f19de6ac31e46475e67474cea226286/>
  )
}
