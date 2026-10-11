/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts, UploadFilesContext } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { jsx, keyframes } from "@emotion/react"
import { CameraIcon as LucideCameraIcon, CircleAlertIcon as LucideCircleAlertIcon, ScanLineIcon as LucideScanLineIcon, ShieldAlertIcon as LucideShieldAlertIcon, WifiOffIcon as LucideWifiOffIcon, XIcon as LucideXIcon } from "lucide-react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Badge as RadixThemesBadge, Box as RadixThemesBox, Button as RadixThemesButton, Container as RadixThemesContainer, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Link as RadixThemesLink, Separator as RadixThemesSeparator, Spinner as RadixThemesSpinner, Text as RadixThemesText, TextArea as RadixThemesTextArea, TextField as RadixThemesTextField } from "@radix-ui/themes"
import NextLink from "next/link"
import {  } from "react-dropzone"
import { useDropzone } from "react-dropzone"
import { DebounceInput } from "react-debounce-input"
import NextHead from "next/head"



export function Flex_8ab732166ca2f881b1055951dbfcb804 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"2"} wrap={"wrap"}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "13px", ["color"] : "#64748B" })}>

{"No photo handy? Try a sample:"}
</RadixThemesText>
<>{["Bangkok bill", "Bali bill", "Jaipur bill"].map((label, index_182246b76399bf57) => (
  <RadixThemesButton css={({ ["background"] : "white", ["color"] : "#475569", ["fontSize"] : "12px", ["borderRadius"] : "999px", ["padding"] : "6px 12px", ["border"] : "1px solid rgba(15,23,42,0.1)", ["&:hover"] : ({ ["borderColor"] : "#06B6D4", ["color"] : "#0F172A" }) })} key={index_182246b76399bf57} onClick={((...args) => (addEvents([(Event("reflex___state____state.trapcheck___states___scan_state____scan_state.analyze_city_sample", ({ ["label"] : label }), ({  })))], args, ({  }))))}>

{label}
</RadixThemesButton>
))}</>
</RadixThemesFlex>
  )
}

export function Button_8a6f976d0380d38060f75051ebed9729 () {
  
  const [filesById, setFilesById] = useContext(UploadFilesContext);
  const reflex___state____state__trapcheck___states___scan_state____scan_state = useContext(StateContexts.reflex___state____state__trapcheck___states___scan_state____scan_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_bb1bef170e8751395edc9f43a5800205 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.trapcheck___states___scan_state____scan_state.handle_upload", ({ ["files"] : filesById["bill_upload"], ["upload_id"] : "bill_upload" }), ({  }), "uploadFiles"))], args, ({  })))), [addEvents, Event, filesById, setFilesById])



  
  return (
    <RadixThemesButton css={({ ["background"] : "#0F172A", ["color"] : "white", ["borderRadius"] : "12px", ["padding"] : "12px 28px", ["fontWeight"] : "700", ["width"] : "100%", ["isDisabled"] : (reflex___state____state__trapcheck___states___scan_state____scan_state.is_loading || ((filesById["bill_upload"] ? filesById["bill_upload"].map((f) => (f.path || f.name)) : []).length === 0)), ["&:hover"] : ({ ["transform"] : "scale(1.01)" }), ["transition"] : "all 0.15s ease" })} onClick={on_click_bb1bef170e8751395edc9f43a5800205}>

{"Analyze photo"}
</RadixThemesButton>
  )
}

export function Fragment_e46605a640282a72f06575682aec5ff9 () {
  
  const reflex___state____state__trapcheck___states___scan_state____scan_state = useContext(StateContexts.reflex___state____state__trapcheck___states___scan_state____scan_state)





  
  return (
    <Fragment>

{isTrue(reflex___state____state__trapcheck___states___scan_state____scan_state.has_result) ? (
  <Fragment>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["background"] : "white", ["padding"] : "28px", ["borderRadius"] : "16px", ["border"] : "1px solid rgba(15,23,42,0.06)", ["boxShadow"] : "0 14px 40px rgba(15,23,42,0.10)", ["width"] : "100%", ["animation"] : "popIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)" })} direction={"column"} gap={"5"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"3"}>

<RadixThemesBadge css={({ ["background"] : reflex___state____state__trapcheck___states___scan_state____scan_state.verdict_color, ["color"] : "white", ["padding"] : "8px 18px", ["fontWeight"] : "800", ["fontSize"] : "15px", ["letterSpacing"] : "0.5px" })} radius={"full"}>

{reflex___state____state__trapcheck___states___scan_state____scan_state.verdict}
</RadixThemesBadge>
<RadixThemesBadge css={({ ["background"] : "#F1F5F9", ["color"] : "#64748B", ["padding"] : "8px 12px", ["fontWeight"] : "600", ["fontSize"] : "12px" })} radius={"full"}>

{((reflex___state____state__trapcheck___states___scan_state____scan_state.analysis_mode === "AI") ? "AI analysis" : "Offline analysis")}
</RadixThemesBadge>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesBox css={({ ["position"] : "relative", ["width"] : "120px", ["height"] : "120px", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<svg css={({ ["viewBox"] : "0 0 120 120" })} height={"120px"} width={"120px"}>

<circle css={({ ["fill"] : "none", ["stroke"] : "#E2E8F0", ["strokeWidth"] : "10" })} cx={"60"} cy={"60"} r={"50"}/>
<circle css={({ ["transition"] : "stroke-dasharray 1s cubic-bezier(0.4, 0, 0.2, 1)", ["fill"] : "none", ["stroke"] : reflex___state____state__trapcheck___states___scan_state____scan_state.verdict_color, ["strokeWidth"] : "10", ["strokeLinecap"] : "round", ["strokeDasharray"] : ((reflex___state____state__trapcheck___states___scan_state____scan_state.scam_score * 3.14)+" 314"), ["transform"] : "rotate(-90 60 60)" })} cx={"60"} cy={"60"} r={"50"}/>
</svg>
<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"0"}>

<RadixThemesHeading css={({ ["fontSize"] : "32px", ["fontWeight"] : "800", ["fontFamily"] : "Outfit, sans-serif", ["--default-font-family"] : "Outfit, sans-serif", ["color"] : reflex___state____state__trapcheck___states___scan_state____scan_state.verdict_color })}>

{reflex___state____state__trapcheck___states___scan_state____scan_state.scam_score}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "11px", ["color"] : "#94A3B8" })}>

{"/ 100"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start" })} direction={"column"} gap={"1"}>

<RadixThemesText as={"p"} css={({ ["fontWeight"] : "800", ["fontSize"] : "20px", ["color"] : "#0F172A", ["fontFamily"] : "Outfit, sans-serif", ["--default-font-family"] : "Outfit, sans-serif" })}>

{reflex___state____state__trapcheck___states___scan_state____scan_state.result_item}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "13px", ["color"] : "#64748B" })}>

{(((reflex___state____state__trapcheck___states___scan_state____scan_state.city+" \u00b7 ")+reflex___state____state__trapcheck___states___scan_state____scan_state.risk_level)+" risk")}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"2"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"2"}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "12px", ["color"] : "#475569", ["fontWeight"] : "600" })}>

{"Your price"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "12px", ["color"] : "#0F172A", ["fontWeight"] : "700" })}>

{reflex___state____state__trapcheck___states___scan_state____scan_state.your_price_label}
</RadixThemesText>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "12px", ["color"] : "#475569", ["fontWeight"] : "600" })}>

{"Fair range"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "12px", ["color"] : "#10B981", ["fontWeight"] : "700" })}>

{reflex___state____state__trapcheck___states___scan_state____scan_state.fair_range_label}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesBox css={({ ["position"] : "relative", ["width"] : "100%", ["height"] : "14px", ["background"] : "#E2E8F0", ["borderRadius"] : "8px" })}>

<RadixThemesBox css={({ ["position"] : "absolute", ["left"] : (reflex___state____state__trapcheck___states___scan_state____scan_state.fair_range_start_pct+"%"), ["width"] : ((reflex___state____state__trapcheck___states___scan_state____scan_state.fair_range_end_pct - reflex___state____state__trapcheck___states___scan_state____scan_state.fair_range_start_pct)+"%"), ["top"] : "0", ["bottom"] : "0", ["background"] : "rgba(16,185,129,0.25)", ["borderRadius"] : "6px" })}/>
<RadixThemesBox css={({ ["position"] : "absolute", ["left"] : (reflex___state____state__trapcheck___states___scan_state____scan_state.price_marker_pct+"%"), ["top"] : "-4px", ["bottom"] : "-4px", ["width"] : "4px", ["background"] : reflex___state____state__trapcheck___states___scan_state____scan_state.verdict_color, ["borderRadius"] : "4px", ["boxShadow"] : "0 0 0 3px rgba(255,255,255,0.9), 0 2px 8px rgba(15,23,42,0.25)" })}/>
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "12px", ["color"] : "#64748B", ["lineHeight"] : "1.5" })}>

{"Scam score compares this amount with the local fair range; the verdict is a readable band, not a simple yes/no guess."}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start", ["width"] : "100%" })} direction={"column"} gap={"1"}>

<RadixThemesText as={"p"} css={({ ["fontWeight"] : "700", ["fontSize"] : "13px", ["color"] : "#0F172A", ["textTransform"] : "uppercase", ["letterSpacing"] : "0.5px" })}>

{"Why"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "14px", ["color"] : "#475569", ["lineHeight"] : "1.6" })}>

{reflex___state____state__trapcheck___states___scan_state____scan_state.reason}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start", ["width"] : "100%" })} direction={"column"} gap={"1"}>

<RadixThemesText as={"p"} css={({ ["fontWeight"] : "700", ["fontSize"] : "13px", ["color"] : "#06B6D4", ["textTransform"] : "uppercase", ["letterSpacing"] : "0.5px" })}>

{"Local tip"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "14px", ["color"] : "#0F172A", ["lineHeight"] : "1.6", ["background"] : "rgba(6,182,212,0.07)", ["padding"] : "12px 14px", ["borderRadius"] : "12px", ["width"] : "100%" })}>

{reflex___state____state__trapcheck___states___scan_state____scan_state.tip}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["background"] : "white", ["padding"] : "48px 24px", ["borderRadius"] : "16px", ["border"] : "1px dashed rgba(15,23,42,0.1)", ["width"] : "100%" })} direction={"column"} gap={"3"}>

<LucideScanLineIcon css={({ ["color"] : "#CBD5E1" })} size={44}/>
<RadixThemesText as={"p"} css={({ ["fontWeight"] : "600", ["color"] : "#94A3B8", ["fontSize"] : "15px" })}>

{"Your result will appear here"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "13px", ["color"] : "#94A3B8", ["textAlign"] : "center", ["maxWidth"] : "280px" })}>

{"Scan a photo or enter details manually to get a scam score in seconds."}
</RadixThemesText>
</RadixThemesFlex>
</Fragment>
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


export function Div_602c14884fa2de27f522fe8f94374b02 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_f2f0916d2fcc08b7cdf76cec697f0750/>
</div>
  )
}

export function Debounceinput_e3022f9f3e4727c5af9a8e46d9f9591b () {
  
  const reflex___state____state__trapcheck___states___scan_state____scan_state = useContext(StateContexts.reflex___state____state__trapcheck___states___scan_state____scan_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_e059df1d7283ac4442f1951891d47bb3 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.trapcheck___states___scan_state____scan_state.set_manual_price", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    <DebounceInput css={({ ["borderRadius"] : "12px", ["width"] : "140px", ["border"] : "1px solid rgba(15,23,42,0.12)", ["type"] : "number", ["&:focus"] : ({ ["borderColor"] : "#06B6D4", ["boxShadow"] : "none" }) })} debounceTimeout={300} element={RadixThemesTextField.Root} onChange={on_change_e059df1d7283ac4442f1951891d47bb3} placeholder={"Price paid"} value={reflex___state____state__trapcheck___states___scan_state____scan_state.manual_price}/>
  )
}

export function Fragment_3d27f43bc9670a38b250517bf7930243 () {
  
  const reflex___state____state__trapcheck___states___scan_state____scan_state = useContext(StateContexts.reflex___state____state__trapcheck___states___scan_state____scan_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <Fragment>

{isTrue(!((reflex___state____state__trapcheck___states___scan_state____scan_state.error_message === ""))) ? (
  <Fragment>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["background"] : "rgba(239,67,85,0.07)", ["border"] : "1px solid rgba(239,67,85,0.25)", ["padding"] : "12px 16px", ["borderRadius"] : "12px", ["width"] : "100%" })} direction={"row"} gap={"3"}>

<LucideCircleAlertIcon css={({ ["color"] : "#EF4355" })} size={18}/>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "14px", ["color"] : "#B91C1C" })}>

{reflex___state____state__trapcheck___states___scan_state____scan_state.error_message}
</RadixThemesText>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesButton css={({ ["background"] : "transparent", ["color"] : "#94A3B8", ["cursor"] : "pointer" })} onClick={((...args) => (addEvents([(Event("reflex___state____state.trapcheck___states___scan_state____scan_state.clear_error", ({  }), ({  })))], args, ({  }))))}>

<LucideXIcon css={({ ["color"] : "var(--current-color)" })} size={14}/>
</RadixThemesButton>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Flex_7f5bfb5472024782f5f871bc271f90b4 () {
  
  const [filesById, setFilesById] = useContext(UploadFilesContext);





  
  return (
    <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"4"}>

<Comp_6320351ca2806d5562917a60264e540d/>
<>{(filesById["bill_upload"] ? filesById["bill_upload"].map((f) => (f.path || f.name)) : []).map((filename, index_0a4736bada749d61) => (
  <RadixThemesText as={"p"} css={({ ["fontSize"] : "13px", ["color"] : "#0F766E", ["fontWeight"] : "600" })} key={index_0a4736bada749d61}>

{("Photo selected: "+filename)}
</RadixThemesText>
))}</>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start", ["width"] : "100%" })} direction={"column"} gap={"2"}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "14px", ["fontWeight"] : "700", ["color"] : "#0F172A" })}>

{"What should we check in this photo?"}
</RadixThemesText>
<Debounceinput_8b98bbfff1604a95fab86e70639f0b02/>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "12px", ["color"] : "#64748B" })}>

{"You can name a specific item, or ask for the menu's riskiest price."}
</RadixThemesText>
</RadixThemesFlex>
<Flex_8ab732166ca2f881b1055951dbfcb804/>
<Button_8a6f976d0380d38060f75051ebed9729/>
</RadixThemesFlex>
  )
}

export function Debounceinput_d85a248aacd3d6da89efc0b2b3542c41 () {
  
  const reflex___state____state__trapcheck___states___scan_state____scan_state = useContext(StateContexts.reflex___state____state__trapcheck___states___scan_state____scan_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_39415c0230b199748566b66897d4c27f = useCallback(((_e) => (addEvents([(Event("reflex___state____state.trapcheck___states___scan_state____scan_state.set_manual_item", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    <DebounceInput css={({ ["borderRadius"] : "12px", ["width"] : "100%", ["border"] : "1px solid rgba(15,23,42,0.12)", ["&:focus"] : ({ ["borderColor"] : "#06B6D4", ["boxShadow"] : "none" }) })} debounceTimeout={300} element={RadixThemesTextField.Root} onChange={on_change_39415c0230b199748566b66897d4c27f} placeholder={"e.g. Pad Thai, taxi ride, thali"} value={reflex___state____state__trapcheck___states___scan_state____scan_state.manual_item}/>
  )
}

export function Button_94375d65d04fee80d890de2c524a6975 () {
  
  const reflex___state____state__trapcheck___states___scan_state____scan_state = useContext(StateContexts.reflex___state____state__trapcheck___states___scan_state____scan_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_f32601e238ff80905c067c53f3c45950 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.trapcheck___states___scan_state____scan_state.submit_manual", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesButton css={({ ["background"] : "#06B6D4", ["color"] : "white", ["borderRadius"] : "12px", ["padding"] : "12px 22px", ["fontWeight"] : "600", ["isDisabled"] : reflex___state____state__trapcheck___states___scan_state____scan_state.is_loading, ["&:hover"] : ({ ["transform"] : "scale(1.02)" }), ["transition"] : "all 0.15s ease" })} onClick={on_click_f32601e238ff80905c067c53f3c45950}>

{"Check"}
</RadixThemesButton>
  )
}

export function Fragment_9bf59b8f02f76c699c400ad5d3930bd3 () {
  
  const reflex___state____state__trapcheck___states___scan_state____scan_state = useContext(StateContexts.reflex___state____state__trapcheck___states___scan_state____scan_state)





  
  return (
    <Fragment>

{isTrue(reflex___state____state__trapcheck___states___scan_state____scan_state.is_loading) ? (
  <Fragment>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start", ["background"] : "white", ["padding"] : "28px", ["borderRadius"] : "16px", ["border"] : "1px solid rgba(15,23,42,0.06)", ["width"] : "100%" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesSpinner css={({ ["color"] : "#06B6D4" })} size={"2"}/>
<RadixThemesText as={"p"} css={({ ["fontWeight"] : "600", ["color"] : "#0F172A", ["fontSize"] : "15px" })}>

{"Reading the photo and checking local prices\u2026"}
</RadixThemesText>
</RadixThemesFlex>
<div className={"skeleton-line"}/>
<div className={"skeleton-line short"}/>
<div className={"skeleton-line"}/>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Debounceinput_8b98bbfff1604a95fab86e70639f0b02 () {
  
  const reflex___state____state__trapcheck___states___scan_state____scan_state = useContext(StateContexts.reflex___state____state__trapcheck___states___scan_state____scan_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_620a79849c55765efe4130a8126a3e88 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.trapcheck___states___scan_state____scan_state.update_analysis_instruction", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    <DebounceInput css={({ ["width"] : "100%", ["minHeight"] : "76px", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "12px", ["padding"] : "12px" })} debounceTimeout={300} element={RadixThemesTextArea} onChange={on_change_620a79849c55765efe4130a8126a3e88} placeholder={"Example: Scan this menu's prices and check for tourist overcharges."} resize={"vertical"} value={reflex___state____state__trapcheck___states___scan_state____scan_state.analysis_instruction}/>
  )
}

export function Comp_6320351ca2806d5562917a60264e540d () {
  
  const ref_bill_upload = useRef(null); refs["ref_bill_upload"] = ref_bill_upload;
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const [filesById, setFilesById] = useContext(UploadFilesContext);
  const on_drop_3d3d675ae8c680d61016107ecc3eac03 = useCallback(e => setFilesById(filesById => {
    const updatedFilesById = Object.assign({}, filesById);
    updatedFilesById["bill_upload"] = e;
    return updatedFilesById;
  })
    , [addEvents, Event, filesById, setFilesById])
  const {getRootProps: dqirbiaf, getInputProps: ygrrczjp}  = useDropzone(({ ["onDrop"] : on_drop_3d3d675ae8c680d61016107ecc3eac03, ["accept"] : ({ ["image/jpeg"] : [".jpg", ".jpeg"], ["image/png"] : [".png"], ["image/webp"] : [".webp"] }), ["maxFiles"] : 1, ["multiple"] : true, ["id"] : "bill_upload" }));





  
  return (
    <>

<RadixThemesBox className={"rx-Upload"} css={({ ["border"] : "2px dashed rgba(6,182,212,0.45)", ["borderRadius"] : "16px", ["padding"] : "48px 24px", ["width"] : "100%", ["background"] : "rgba(6,182,212,0.03)", ["textAlign"] : "center" })} id={"bill_upload"} ref={ref_bill_upload} {...dqirbiaf()}>

<input type={"file"} {...ygrrczjp()}/>
<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<LucideCameraIcon css={({ ["color"] : "#06B6D4" })} size={40}/>
<RadixThemesText as={"p"} css={({ ["fontWeight"] : "700", ["fontSize"] : "16px", ["color"] : "#0F172A", ["fontFamily"] : "Outfit, sans-serif", ["--default-font-family"] : "Outfit, sans-serif" })}>

{"Drop a photo of the bill, menu or price tag"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "13px", ["color"] : "#64748B" })}>

{"JPG, PNG or WEBP \u00b7 up to 5 MB \u00b7 analyzed in memory, never stored"}
</RadixThemesText>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesButton css={({ ["background"] : "#06B6D4", ["color"] : "white", ["borderRadius"] : "12px", ["padding"] : "12px 24px", ["fontWeight"] : "600", ["&:hover"] : ({ ["transform"] : "scale(1.02)" }), ["transition"] : "all 0.15s ease" })}>

{"Choose a photo"}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesBox>
</>
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

export function Errorboundary_c5c0d4454b8057dcb2ec9351500cd477 () {
  
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
<RadixThemesContainer css={({ ["padding"] : "16px", ["maxWidth"] : "1100px" })} size={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["paddingTop"] : "36px", ["paddingBottom"] : "36px", ["width"] : "100%" })} direction={"column"} gap={"5"}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"between"} gap={"3"} wrap={"wrap"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start" })} direction={"column"} gap={"1"}>

<RadixThemesHeading css={({ ["fontFamily"] : "Outfit, sans-serif", ["--default-font-family"] : "Outfit, sans-serif", ["fontSize"] : "32px", ["fontWeight"] : "800", ["color"] : "#0F172A", ["letterSpacing"] : "-0.5px" })}>

{"Scam Scanner"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "15px", ["color"] : "#475569" })}>

{"Upload a bill or price tag \u2014 get the fair local price instantly."}
</RadixThemesText>
</RadixThemesFlex>
<Flex_610864937382daa3f552e603b0427b32/>
</RadixThemesFlex>
<Fragment_3d27f43bc9670a38b250517bf7930243/>
<RadixThemesGrid className={"scanner-grid"} css={({ ["gridTemplateColumns"] : "1fr 1fr", ["gap"] : "24px", ["width"] : "100%" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"5"}>

<Flex_7f5bfb5472024782f5f871bc271f90b4/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"3"}>

<RadixThemesSeparator size={"4"}/>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "12px", ["color"] : "#94A3B8", ["whiteSpace"] : "nowrap" })}>

{"or enter manually"}
</RadixThemesText>
<RadixThemesSeparator size={"4"}/>
</RadixThemesFlex>
<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"3"}>

<Debounceinput_d85a248aacd3d6da89efc0b2b3542c41/>
<Debounceinput_e3022f9f3e4727c5af9a8e46d9f9591b/>
<Button_94375d65d04fee80d890de2c524a6975/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"4"}>

<Fragment_9bf59b8f02f76c699c400ad5d3930bd3/>
<Fragment_e46605a640282a72f06575682aec5ff9/>
</RadixThemesFlex>
</RadixThemesGrid>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "12px", ["color"] : "#94A3B8", ["textAlign"] : "center", ["padding"] : "8px 0 32px" })}>

{"Privacy note: your photo is processed entirely in memory on our server, is never written to disk, and is deleted the moment your result appears."}
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

{"TrapCheck \u2014 Scanner"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
  )
}

export function Flex_610864937382daa3f552e603b0427b32 () {
  
  const reflex___state____state__trapcheck___states___scan_state____scan_state = useContext(StateContexts.reflex___state____state__trapcheck___states___scan_state____scan_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"row"} gap={"2"}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "14px", ["color"] : "#475569", ["fontWeight"] : "500" })}>

{"City:"}
</RadixThemesText>
<>{["Bangkok", "Bali", "Jaipur"].map((c, index_71c0080e961073d9) => (
  <Fragment key={index_71c0080e961073d9}>

{isTrue((reflex___state____state__trapcheck___states___scan_state____scan_state.city === c)) ? (
  <Fragment>

<RadixThemesButton css={({ ["background"] : "#0F172A", ["color"] : "white", ["borderRadius"] : "999px", ["padding"] : "6px 16px", ["fontSize"] : "13px", ["fontWeight"] : "600" })} onClick={((...args) => (addEvents([(Event("reflex___state____state.trapcheck___states___scan_state____scan_state.set_city", ({ ["city"] : c }), ({  })))], args, ({  }))))}>

{c}
</RadixThemesButton>
</Fragment>
) : (
  <Fragment>

<RadixThemesButton css={({ ["background"] : "white", ["color"] : "#475569", ["borderRadius"] : "999px", ["padding"] : "6px 16px", ["fontSize"] : "13px", ["fontWeight"] : "500", ["border"] : "1px solid rgba(15,23,42,0.1)", ["&:hover"] : ({ ["borderColor"] : "#06B6D4" }) })} onClick={((...args) => (addEvents([(Event("reflex___state____state.trapcheck___states___scan_state____scan_state.set_city", ({ ["city"] : c }), ({  })))], args, ({  }))))}>

{c}
</RadixThemesButton>
</Fragment>
)}
</Fragment>
))}</>
</RadixThemesFlex>
  )
}

export default function Component() {
    




  return (
    <Errorboundary_c5c0d4454b8057dcb2ec9351500cd477/>
  )
}
