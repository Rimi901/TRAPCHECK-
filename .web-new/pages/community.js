/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts, UploadFilesContext } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { jsx, keyframes } from "@emotion/react"
import { CameraIcon as LucideCameraIcon, ShieldAlertIcon as LucideShieldAlertIcon, TriangleAlertIcon as LucideTriangleAlertIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Badge as RadixThemesBadge, Box as RadixThemesBox, Button as RadixThemesButton, Checkbox as RadixThemesCheckbox, Container as RadixThemesContainer, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Link as RadixThemesLink, Select as RadixThemesSelect, Text as RadixThemesText, TextArea as RadixThemesTextArea, TextField as RadixThemesTextField } from "@radix-ui/themes"
import NextLink from "next/link"
import { DebounceInput } from "react-debounce-input"
import {  } from "react-dropzone"
import { useDropzone } from "react-dropzone"
import NextHead from "next/head"



export function Debounceinput_b7178ff33e8a39fe1dd1e05571445c13 () {
  
  const reflex___state____state__trapcheck___states___community_state____community_state = useContext(StateContexts.reflex___state____state__trapcheck___states___community_state____community_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_b0389ce90ca0a6dff8d906b4849911df = useCallback(((_e) => (addEvents([(Event("reflex___state____state.trapcheck___states___community_state____community_state.set_description", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    <DebounceInput css={({ ["minHeight"] : "84px", ["width"] : "100%" })} debounceTimeout={300} element={RadixThemesTextArea} onChange={on_change_b0389ce90ca0a6dff8d906b4849911df} placeholder={"What happened? Keep it factual and brief."} value={reflex___state____state__trapcheck___states___community_state____community_state.description}/>
  )
}

export function Button_d0113fc0bd64923956100031ddaddf87 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_61e2c6765c89cebffbde6f0812f61d6a = useCallback(((...args) => (addEvents([(Event("_call_script", ({ ["javascript_code"] : "(function(){\n  const status=document.getElementById('report_location_status');\n  if(!navigator.geolocation){if(status)status.textContent='Location is not available in this browser.';return;}\n  if(status)status.textContent='Requesting location permission\u2026';\n  navigator.geolocation.getCurrentPosition(function(pos){\n    const set=(id,value)=>{const el=document.getElementById(id);if(!el)return;const setter=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set;setter.call(el,String(value));el.dispatchEvent(new Event('input',{bubbles:true}));};\n    set('report_latitude',pos.coords.latitude.toFixed(5));set('report_longitude',pos.coords.longitude.toFixed(5));\n    if(status)status.textContent='Approximate location added. You can adjust it before posting.';\n  },function(){if(status)status.textContent='Could not access location. Enter coordinates manually.';},{timeout:8000,maximumAge:60000});\n})();" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesButton css={({ ["background"] : "white", ["color"] : "#0F172A", ["border"] : "1px solid #CBD5E1", ["borderRadius"] : "10px", ["padding"] : "9px 14px" })} onClick={on_click_61e2c6765c89cebffbde6f0812f61d6a}>

{"Use my current location"}
</RadixThemesButton>
  )
}

export function Debounceinput_c00eaf5af38f48ae5e8152340d5ea81b () {
  
  const ref_report_latitude = useRef(null); refs["ref_report_latitude"] = ref_report_latitude;
  const reflex___state____state__trapcheck___states___community_state____community_state = useContext(StateContexts.reflex___state____state__trapcheck___states___community_state____community_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_3e986531accf52fc00a7db271d7ebf9f = useCallback(((_e) => (addEvents([(Event("reflex___state____state.trapcheck___states___community_state____community_state.set_latitude", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    <DebounceInput css={({ ["width"] : "50%" })} debounceTimeout={300} element={RadixThemesTextField.Root} id={"report_latitude"} inputRef={ref_report_latitude} onChange={on_change_3e986531accf52fc00a7db271d7ebf9f} placeholder={"Latitude"} type={"number"} value={reflex___state____state__trapcheck___states___community_state____community_state.latitude}/>
  )
}

export function Fragment_da11847e027dcc9f875e008b08afe16b () {
  
  const reflex___state____state__trapcheck___states___community_state____community_state = useContext(StateContexts.reflex___state____state__trapcheck___states___community_state____community_state)





  
  return (
    <Fragment>

{isTrue(!((reflex___state____state__trapcheck___states___community_state____community_state.success_message === ""))) ? (
  <Fragment>

<RadixThemesText as={"p"} css={({ ["color"] : "#047857", ["fontSize"] : "13px" })}>

{reflex___state____state__trapcheck___states___community_state____community_state.success_message}
</RadixThemesText>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Select__root_4607e7c994179cca35e29d2969f7858c () {
  
  const reflex___state____state__trapcheck___states___community_state____community_state = useContext(StateContexts.reflex___state____state__trapcheck___states___community_state____community_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_85b4e338fd176fc84ec2b9abdf6b981c = useCallback(((_ev_0) => (addEvents([(Event("reflex___state____state.trapcheck___states___community_state____community_state.set_city", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesSelect.Root onValueChange={on_change_85b4e338fd176fc84ec2b9abdf6b981c} value={reflex___state____state__trapcheck___states___community_state____community_state.city}>

<RadixThemesSelect.Trigger css={({ ["width"] : "100%" })}/>
<RadixThemesSelect.Content>

<RadixThemesSelect.Group>

{""}
<RadixThemesSelect.Item value={"Bangkok"}>

{"Bangkok"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"Bali"}>

{"Bali"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"Jaipur"}>

{"Jaipur"}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  )
}

export function Button_fff6be6b128f9c8d6a2170514703ee43 () {
  
  const [filesById, setFilesById] = useContext(UploadFilesContext);
  const reflex___state____state__trapcheck___states___community_state____community_state = useContext(StateContexts.reflex___state____state__trapcheck___states___community_state____community_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_4e562c6f70f910403fe5ac18f47e3c76 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.trapcheck___states___community_state____community_state.submit_report", ({ ["files"] : filesById["report_photo"], ["upload_id"] : "report_photo" }), ({  }), "uploadFiles"))], args, ({  })))), [addEvents, Event, filesById, setFilesById])



  
  return (
    <RadixThemesButton css={({ ["isDisabled"] : reflex___state____state__trapcheck___states___community_state____community_state.is_submitting, ["background"] : "#06B6D4", ["color"] : "white", ["borderRadius"] : "12px", ["padding"] : "12px 20px", ["width"] : "100%", ["fontWeight"] : "700" })} onClick={on_click_4e562c6f70f910403fe5ac18f47e3c76}>

{(reflex___state____state__trapcheck___states___community_state____community_state.is_submitting ? "Posting\u2026" : "Post report")}
</RadixThemesButton>
  )
}

export function Checkbox_33981194221a54391a1811398643586d () {
  
  const reflex___state____state__trapcheck___states___community_state____community_state = useContext(StateContexts.reflex___state____state__trapcheck___states___community_state____community_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_e66b92730179505755fa35b23b82df3e = useCallback(((_ev_0) => (addEvents([(Event("reflex___state____state.trapcheck___states___community_state____community_state.set_consent", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesCheckbox checked={reflex___state____state__trapcheck___states___community_state____community_state.share_consent} onCheckedChange={on_change_e66b92730179505755fa35b23b82df3e} size={"2"}/>
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


export function Debounceinput_95fc12593ffd9a26990e51b73f215f8a () {
  
  const ref_report_longitude = useRef(null); refs["ref_report_longitude"] = ref_report_longitude;
  const reflex___state____state__trapcheck___states___community_state____community_state = useContext(StateContexts.reflex___state____state__trapcheck___states___community_state____community_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_cc4ac96fa452127b18ba8b0a3b78d518 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.trapcheck___states___community_state____community_state.set_longitude", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    <DebounceInput css={({ ["width"] : "50%" })} debounceTimeout={300} element={RadixThemesTextField.Root} id={"report_longitude"} inputRef={ref_report_longitude} onChange={on_change_cc4ac96fa452127b18ba8b0a3b78d518} placeholder={"Longitude"} type={"number"} value={reflex___state____state__trapcheck___states___community_state____community_state.longitude}/>
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

export function Debounceinput_ac2f0c63a0bb01b1df8ef640a2ac2aae () {
  
  const reflex___state____state__trapcheck___states___community_state____community_state = useContext(StateContexts.reflex___state____state__trapcheck___states___community_state____community_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_8251083ce2a9ee2468dbf98ed10fef41 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.trapcheck___states___community_state____community_state.set_amount", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    <DebounceInput css={({ ["width"] : "100%" })} debounceTimeout={300} element={RadixThemesTextField.Root} onChange={on_change_8251083ce2a9ee2468dbf98ed10fef41} placeholder={"Amount quoted or paid"} type={"number"} value={reflex___state____state__trapcheck___states___community_state____community_state.amount}/>
  )
}

export function Comp_e01b26997a451ced4c6458e2b1e18940 () {
  
  const ref_report_photo = useRef(null); refs["ref_report_photo"] = ref_report_photo;
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const [filesById, setFilesById] = useContext(UploadFilesContext);
  const on_drop_4b4b2b4daf27691893e4894dc3a8fb4a = useCallback(e => setFilesById(filesById => {
    const updatedFilesById = Object.assign({}, filesById);
    updatedFilesById["report_photo"] = e;
    return updatedFilesById;
  })
    , [addEvents, Event, filesById, setFilesById])
  const {getRootProps: zahfxale, getInputProps: tdmbvlad}  = useDropzone(({ ["onDrop"] : on_drop_4b4b2b4daf27691893e4894dc3a8fb4a, ["accept"] : ({ ["image/jpeg"] : [".jpg", ".jpeg"], ["image/png"] : [".png"], ["image/webp"] : [".webp"] }), ["maxFiles"] : 1, ["multiple"] : true, ["id"] : "report_photo" }));





  
  return (
    <>

<RadixThemesBox className={"rx-Upload"} css={({ ["width"] : "100%", ["padding"] : "16px", ["border"] : "1px dashed #94A3B8", ["borderRadius"] : "12px", ["background"] : "#F8FAFC", ["textAlign"] : "center" })} id={"report_photo"} ref={ref_report_photo} {...zahfxale()}>

<input type={"file"} {...tdmbvlad()}/>
<RadixThemesFlex align={"center"} className={"rx-Stack"} direction={"column"} gap={"2"}>

<LucideCameraIcon css={({ ["color"] : "#06B6D4" })} size={25}/>
<RadixThemesText as={"p"} css={({ ["color"] : "#475569", ["fontSize"] : "13px" })}>

{"Add photo (JPG, PNG, WEBP \u00b7 max 5 MB)"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</>
  )
}

export function Flex_ab0d17b0279ad6420a3edd40d751bf33 () {
  
  const reflex___state____state__trapcheck___states___community_state____community_state = useContext(StateContexts.reflex___state____state__trapcheck___states___community_state____community_state)





  
  return (
    <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start", ["width"] : "100%" })} direction={"column"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} justify={"between"} gap={"3"}>

<RadixThemesHeading css={({ ["fontFamily"] : "Outfit, sans-serif", ["--default-font-family"] : "Outfit, sans-serif", ["fontSize"] : "20px", ["color"] : "#0F172A" })}>

{"Latest alerts"}
</RadixThemesHeading>
<RadixThemesBadge css={({ ["background"] : "#F1F5F9", ["color"] : "#475569" })}>

{"Latest traveler reports"}
</RadixThemesBadge>
</RadixThemesFlex>
<>{reflex___state____state__trapcheck___states___community_state____community_state.reports.map((report, index_c5bed1606a131be5) => (
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["padding"] : "16px", ["background"] : "white", ["border"] : "1px solid #E2E8F0", ["borderRadius"] : "16px" })} direction={"row"} key={index_c5bed1606a131be5} gap={"4"}>

<Fragment>

{isTrue(!((report["photo_data"] === ""))) ? (
  <Fragment>

<img alt={"Traveler submitted scam report photo"} css={({ ["width"] : "112px", ["height"] : "112px", ["objectFit"] : "cover", ["borderRadius"] : "12px" })} src={report["photo_data"]}/>
</Fragment>
) : (
  <Fragment>

<RadixThemesBox css={({ ["width"] : "112px", ["height"] : "112px", ["background"] : "#FFF1F2", ["borderRadius"] : "12px", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<LucideTriangleAlertIcon css={({ ["color"] : "#EF4355" })} size={24}/>
</RadixThemesBox>
</Fragment>
)}
</Fragment>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start", ["width"] : "100%" })} direction={"column"} gap={"2"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"2"} wrap={"wrap"}>

<RadixThemesBadge css={({ ["background"] : "#FFF7ED", ["color"] : "#B45309" })} radius={"full"}>

{report["category"]}
</RadixThemesBadge>
<RadixThemesBadge css={({ ["background"] : "#F1F5F9", ["color"] : "#475569" })} radius={"full"}>

{report["city"]}
</RadixThemesBadge>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["color"] : "#0F172A", ["fontWeight"] : "600", ["fontSize"] : "15px" })}>

{report["description"]}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"} wrap={"wrap"}>

<Fragment>

{isTrue(!((report["amount_label"] === ""))) ? (
  <Fragment>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"1"}>

<RadixThemesText as={"p"} css={({ ["color"] : "#B91C1C", ["fontSize"] : "13px" })}>

{"Reported amount:"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "#B91C1C", ["fontSize"] : "13px" })}>

{report["amount_label"]}
</RadixThemesText>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
<RadixThemesText as={"p"} css={({ ["color"] : "#94A3B8", ["fontSize"] : "12px" })}>

{report["date"]}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesText as={"p"} css={({ ["color"] : "#94A3B8", ["fontSize"] : "11px" })}>

{"Approximate location stored with this report."}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
))}</>
</RadixThemesFlex>
  )
}

export function Fragment_655c24d10b6a49f26ba1edcedc4f1ab0 () {
  
  const reflex___state____state__trapcheck___states___community_state____community_state = useContext(StateContexts.reflex___state____state__trapcheck___states___community_state____community_state)





  
  return (
    <Fragment>

{isTrue(!((reflex___state____state__trapcheck___states___community_state____community_state.error_message === ""))) ? (
  <Fragment>

<RadixThemesText as={"p"} css={({ ["color"] : "#B91C1C", ["fontSize"] : "13px" })}>

{reflex___state____state__trapcheck___states___community_state____community_state.error_message}
</RadixThemesText>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Errorboundary_5eacc6425dadfb34152464bed76e2819 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const ref_report_location_status = useRef(null); refs["ref_report_location_status"] = ref_report_location_status;


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

<RadixThemesHeading css={({ ["fontFamily"] : "Outfit, sans-serif", ["--default-font-family"] : "Outfit, sans-serif", ["fontSize"] : "32px", ["fontWeight"] : "800", ["color"] : "#0F172A" })}>

{"Traveler Scam Wall"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "#64748B", ["fontSize"] : "15px" })}>

{"Recent reports help other travelers spot a bad deal before it happens."}
</RadixThemesText>
</RadixThemesFlex>
<RadixThemesLink asChild={true} css={({ ["textDecoration"] : "none", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/map"} passHref={true}>

<RadixThemesButton css={({ ["background"] : "#0F172A", ["color"] : "white", ["borderRadius"] : "12px", ["padding"] : "10px 18px" })}>

{"Open hotspot map"}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
<RadixThemesGrid className={"community-grid"} css={({ ["gridTemplateColumns"] : "minmax(280px, 0.85fr) minmax(0, 1.15fr)", ["gap"] : "24px", ["width"] : "100%" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start", ["background"] : "white", ["padding"] : "20px", ["border"] : "1px solid #E2E8F0", ["borderRadius"] : "16px", ["width"] : "100%" })} direction={"column"} gap={"3"}>

<RadixThemesHeading css={({ ["fontFamily"] : "Outfit, sans-serif", ["--default-font-family"] : "Outfit, sans-serif", ["fontSize"] : "20px", ["color"] : "#0F172A" })}>

{"Share a warning"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["color"] : "#64748B", ["fontSize"] : "13px" })}>

{"A photo helps the next traveler recognize the same tactic."}
</RadixThemesText>
<Select__root_4607e7c994179cca35e29d2969f7858c/>
<Select__root_27a03b8cf042f6b847063ab1a4ef2d23/>
<Debounceinput_b7178ff33e8a39fe1dd1e05571445c13/>
<Debounceinput_ac2f0c63a0bb01b1df8ef640a2ac2aae/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"2"}>

<Debounceinput_c00eaf5af38f48ae5e8152340d5ea81b/>
<Debounceinput_95fc12593ffd9a26990e51b73f215f8a/>
</RadixThemesFlex>
<Button_d0113fc0bd64923956100031ddaddf87/>
<RadixThemesText as={"p"} css={({ ["color"] : "#94A3B8", ["fontSize"] : "11px" })} id={"report_location_status"} ref={ref_report_location_status}>

{"City center is prefilled; use your location or adjust the coordinates."}
</RadixThemesText>
<Comp_e01b26997a451ced4c6458e2b1e18940/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"2"}>

<RadixThemesText as={"label"} size={"2"}>

<RadixThemesFlex gap={"2"}>

<Checkbox_33981194221a54391a1811398643586d/>
{""}
</RadixThemesFlex>
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "#475569", ["fontSize"] : "12px" })}>

{"I agree that this report and sanitized photo will be shared publicly."}
</RadixThemesText>
</RadixThemesFlex>
<Fragment_655c24d10b6a49f26ba1edcedc4f1ab0/>
<Fragment_da11847e027dcc9f875e008b08afe16b/>
<Button_fff6be6b128f9c8d6a2170514703ee43/>
<RadixThemesText as={"p"} css={({ ["color"] : "#94A3B8", ["fontSize"] : "11px" })}>

{"The app strips image metadata before storage. Do not post faces, documents, or private details."}
</RadixThemesText>
</RadixThemesFlex>
<Flex_ab0d17b0279ad6420a3edd40d751bf33/>
</RadixThemesGrid>
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

{"TrapCheck \u2014 Traveler Scam Wall"}
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

export function Select__root_27a03b8cf042f6b847063ab1a4ef2d23 () {
  
  const reflex___state____state__trapcheck___states___community_state____community_state = useContext(StateContexts.reflex___state____state__trapcheck___states___community_state____community_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_change_603333255a3e3455127cfde601f0309d = useCallback(((_ev_0) => (addEvents([(Event("reflex___state____state.trapcheck___states___community_state____community_state.set_category", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesSelect.Root onValueChange={on_change_603333255a3e3455127cfde601f0309d} value={reflex___state____state__trapcheck___states___community_state____community_state.category}>

<RadixThemesSelect.Trigger css={({ ["width"] : "100%" })}/>
<RadixThemesSelect.Content>

<RadixThemesSelect.Group>

{""}
<RadixThemesSelect.Item value={"transport"}>

{"transport"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"food"}>

{"food"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"shopping"}>

{"shopping"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"ticket"}>

{"ticket"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"activity"}>

{"activity"}
</RadixThemesSelect.Item>
<RadixThemesSelect.Item value={"other"}>

{"other"}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  )
}

export default function Component() {
    




  return (
    <Errorboundary_5eacc6425dadfb34152464bed76e2819/>
  )
}
