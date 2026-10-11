/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { jsx, keyframes } from "@emotion/react"
import { EyeOffIcon as LucideEyeOffIcon, LockIcon as LucideLockIcon, ShieldAlertIcon as LucideShieldAlertIcon, ShieldCheckIcon as LucideShieldCheckIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Badge as RadixThemesBadge, Box as RadixThemesBox, Button as RadixThemesButton, Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import NextHead from "next/head"



export function Errorboundary_db7d3ea160573a29d5d11baf4c1203c1 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


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
<RadixThemesBox css={({ ["padding"] : "72px 24px 56px", ["background"] : "linear-gradient(180deg, rgba(6,182,212,0.09) 0%, rgba(248,250,252,0) 70%)", ["width"] : "100%" })}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"5"}>

<RadixThemesBadge css={({ ["background"] : "rgba(6,182,212,0.1)", ["color"] : "#0891B2", ["padding"] : "6px 14px", ["fontWeight"] : "600" })} radius={"full"}>

{"Free \u00b7 No signup \u00b7 Works without an account"}
</RadixThemesBadge>
<RadixThemesHeading css={({ ["fontFamily"] : "Outfit, sans-serif", ["--default-font-family"] : "Outfit, sans-serif", ["fontSize"] : "clamp(34px, 6vw, 58px)", ["fontWeight"] : "800", ["letterSpacing"] : "-1.5px", ["lineHeight"] : "1.1", ["textAlign"] : "center", ["maxWidth"] : "760px" })}>

{"Know the local price "}
<span css={({ ["color"] : "#06B6D4" })}>

{"before you pay."}
</span>
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "17px", ["color"] : "#475569", ["textAlign"] : "center", ["maxWidth"] : "620px", ["lineHeight"] : "1.6" })}>

{"Tourists are overcharged 200\u2013500% on taxis, food, souvenirs and tickets. Snap a photo of any bill or price tag \u2014 TrapCheck tells you instantly if it's fair, and what locals actually pay."}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} justify={"center"} gap={"4"} wrap={"wrap"}>

<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/scanner"} passHref={true}>

<RadixThemesButton css={({ ["background"] : "#06B6D4", ["color"] : "white", ["borderRadius"] : "12px", ["padding"] : "14px 28px", ["fontSize"] : "16px", ["fontWeight"] : "700", ["boxShadow"] : "0 10px 26px rgba(6,182,212,0.4)", ["&:hover"] : ({ ["transform"] : "scale(1.03)" }), ["transition"] : "all 0.15s ease" })}>

{"Scan a bill now"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/map"} passHref={true}>

<RadixThemesButton css={({ ["background"] : "white", ["color"] : "#0F172A", ["borderRadius"] : "12px", ["padding"] : "14px 28px", ["fontSize"] : "16px", ["fontWeight"] : "600", ["border"] : "1px solid rgba(15,23,42,0.12)", ["&:hover"] : ({ ["transform"] : "scale(1.03)" }), ["transition"] : "all 0.15s ease" })}>

{"See scam hotspots"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} justify={"center"} gap={"3"} wrap={"wrap"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["background"] : "rgba(255,255,255,0.85)", ["border"] : "1px solid rgba(15,23,42,0.06)", ["borderRadius"] : "999px", ["padding"] : "7px 14px" })} direction={"row"} gap={"2"}>

<LucideShieldCheckIcon css={({ ["color"] : "#06B6D4" })} size={15}/>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "13px", ["color"] : "#475569", ["fontWeight"] : "500" })}>

{"No photo storage"}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["background"] : "rgba(255,255,255,0.85)", ["border"] : "1px solid rgba(15,23,42,0.06)", ["borderRadius"] : "999px", ["padding"] : "7px 14px" })} direction={"row"} gap={"2"}>

<LucideEyeOffIcon css={({ ["color"] : "#06B6D4" })} size={15}/>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "13px", ["color"] : "#475569", ["fontWeight"] : "500" })}>

{"No tracking"}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["background"] : "rgba(255,255,255,0.85)", ["border"] : "1px solid rgba(15,23,42,0.06)", ["borderRadius"] : "999px", ["padding"] : "7px 14px" })} direction={"row"} gap={"2"}>

<LucideLockIcon css={({ ["color"] : "#06B6D4" })} size={15}/>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "13px", ["color"] : "#475569", ["fontWeight"] : "500" })}>

{"Encrypted analysis"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["padding"] : "0 24px 8px" })} direction={"row"} justify={"center"} gap={"4"} wrap={"wrap"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["background"] : "white", ["padding"] : "20px 28px", ["borderRadius"] : "16px", ["boxShadow"] : "0 8px 24px rgba(15,23,42,0.08)", ["border"] : "1px solid rgba(15,23,42,0.05)" })} direction={"column"} gap={"1"}>

<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Outfit, sans-serif", ["--default-font-family"] : "Outfit, sans-serif", ["fontWeight"] : "800", ["fontSize"] : "28px", ["color"] : "#0F172A" })}>

{"24"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "13px", ["color"] : "#64748B" })}>

{"Checks performed"}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["background"] : "white", ["padding"] : "20px 28px", ["borderRadius"] : "16px", ["boxShadow"] : "0 8px 24px rgba(15,23,42,0.08)", ["border"] : "1px solid rgba(15,23,42,0.05)" })} direction={"column"} gap={"1"}>

<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Outfit, sans-serif", ["--default-font-family"] : "Outfit, sans-serif", ["fontWeight"] : "800", ["fontSize"] : "28px", ["color"] : "#EF4355" })}>

{"10"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "13px", ["color"] : "#64748B" })}>

{"Scams caught"}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["background"] : "white", ["padding"] : "20px 28px", ["borderRadius"] : "16px", ["boxShadow"] : "0 8px 24px rgba(15,23,42,0.08)", ["border"] : "1px solid rgba(15,23,42,0.05)" })} direction={"column"} gap={"1"}>

<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Outfit, sans-serif", ["--default-font-family"] : "Outfit, sans-serif", ["fontWeight"] : "800", ["fontSize"] : "28px", ["color"] : "#F59E0B" })}>

{"317%"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "13px", ["color"] : "#64748B" })}>

{"Avg. tourist overcharge"}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["background"] : "white", ["padding"] : "20px 28px", ["borderRadius"] : "16px", ["boxShadow"] : "0 8px 24px rgba(15,23,42,0.08)", ["border"] : "1px solid rgba(15,23,42,0.05)" })} direction={"column"} gap={"1"}>

<RadixThemesText as={"p"} css={({ ["fontFamily"] : "Outfit, sans-serif", ["--default-font-family"] : "Outfit, sans-serif", ["fontWeight"] : "800", ["fontSize"] : "28px", ["color"] : "#06B6D4" })}>

{"3"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "13px", ["color"] : "#64748B" })}>

{"Cities covered"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["padding"] : "56px 24px" })} direction={"column"} gap={"5"}>

<RadixThemesHeading css={({ ["fontFamily"] : "Outfit, sans-serif", ["--default-font-family"] : "Outfit, sans-serif", ["fontSize"] : "30px", ["fontWeight"] : "800", ["color"] : "#0F172A", ["letterSpacing"] : "-0.5px" })}>

{"How it works"}
</RadixThemesHeading>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} justify={"center"} gap={"4"} wrap={"wrap"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start", ["background"] : "white", ["padding"] : "24px", ["borderRadius"] : "16px", ["border"] : "1px solid rgba(15,23,42,0.06)", ["boxShadow"] : "0 8px 24px rgba(15,23,42,0.06)", ["&:hover"] : ({ ["transform"] : "translateY(-3px)", ["boxShadow"] : "0 14px 34px rgba(15,23,42,0.12)" }), ["transition"] : "all 0.2s ease" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesBox css={({ ["background"] : "#06B6D4", ["color"] : "white", ["borderRadius"] : "10px", ["width"] : "36px", ["height"] : "36px", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["fontWeight"] : "700" })}>

{"1"}
</RadixThemesBox>
<RadixThemesText as={"p"} css={({ ["fontWeight"] : "700", ["fontSize"] : "17px", ["color"] : "#0F172A", ["fontFamily"] : "Outfit, sans-serif", ["--default-font-family"] : "Outfit, sans-serif" })}>

{"Snap a photo"}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "14px", ["color"] : "#475569", ["lineHeight"] : "1.6" })}>

{"Take a picture of any bill, menu, taxi meter or price tag. Nothing is saved \u2014 the photo is analyzed in memory and discarded."}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start", ["background"] : "white", ["padding"] : "24px", ["borderRadius"] : "16px", ["border"] : "1px solid rgba(15,23,42,0.06)", ["boxShadow"] : "0 8px 24px rgba(15,23,42,0.06)", ["&:hover"] : ({ ["transform"] : "translateY(-3px)", ["boxShadow"] : "0 14px 34px rgba(15,23,42,0.12)" }), ["transition"] : "all 0.2s ease" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesBox css={({ ["background"] : "#06B6D4", ["color"] : "white", ["borderRadius"] : "10px", ["width"] : "36px", ["height"] : "36px", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["fontWeight"] : "700" })}>

{"2"}
</RadixThemesBox>
<RadixThemesText as={"p"} css={({ ["fontWeight"] : "700", ["fontSize"] : "17px", ["color"] : "#0F172A", ["fontFamily"] : "Outfit, sans-serif", ["--default-font-family"] : "Outfit, sans-serif" })}>

{"AI reads the price"}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "14px", ["color"] : "#475569", ["lineHeight"] : "1.6" })}>

{"Our AI extracts the item and amount. No internet AI? A built-in offline engine takes over automatically."}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start", ["background"] : "white", ["padding"] : "24px", ["borderRadius"] : "16px", ["border"] : "1px solid rgba(15,23,42,0.06)", ["boxShadow"] : "0 8px 24px rgba(15,23,42,0.06)", ["&:hover"] : ({ ["transform"] : "translateY(-3px)", ["boxShadow"] : "0 14px 34px rgba(15,23,42,0.12)" }), ["transition"] : "all 0.2s ease" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesBox css={({ ["background"] : "#06B6D4", ["color"] : "white", ["borderRadius"] : "10px", ["width"] : "36px", ["height"] : "36px", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["fontWeight"] : "700" })}>

{"3"}
</RadixThemesBox>
<RadixThemesText as={"p"} css={({ ["fontWeight"] : "700", ["fontSize"] : "17px", ["color"] : "#0F172A", ["fontFamily"] : "Outfit, sans-serif", ["--default-font-family"] : "Outfit, sans-serif" })}>

{"See the truth"}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "14px", ["color"] : "#475569", ["lineHeight"] : "1.6" })}>

{"Get a Scam Score from 0\u2013100, the fair local price range, and one actionable tip from a local's point of view."}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["padding"] : "0 0 56px" })} direction={"row"} justify={"center"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["color"] : "#64748B", ["fontSize"] : "14px" })}>

{"Currently covering:"}
</RadixThemesText>
<RadixThemesBadge css={({ ["background"] : "white", ["color"] : "#0F172A", ["padding"] : "6px 14px", ["border"] : "1px solid rgba(15,23,42,0.08)" })} radius={"full"}>

{"Bangkok"}
</RadixThemesBadge>
<RadixThemesBadge css={({ ["background"] : "white", ["color"] : "#0F172A", ["padding"] : "6px 14px", ["border"] : "1px solid rgba(15,23,42,0.08)" })} radius={"full"}>

{"Bali"}
</RadixThemesBadge>
<RadixThemesBadge css={({ ["background"] : "white", ["color"] : "#0F172A", ["padding"] : "6px 14px", ["border"] : "1px solid rgba(15,23,42,0.08)" })} radius={"full"}>

{"Jaipur"}
</RadixThemesBadge>
</RadixThemesFlex>
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

{"TrapCheck \u2014 Know the local price before you pay"}
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
    <Errorboundary_db7d3ea160573a29d5d11baf4c1203c1/>
  )
}
