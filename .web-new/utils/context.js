import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "$/utils/state.js"

export const initialState = {"reflex___state____state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "cookie": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "reflex___state____state.trapcheck___states___guardian_state____guardian_state": {"answer": "", "city": "Bangkok", "context_label": "", "error_message": "", "is_loading": false, "mode": "Offline local guide", "question": ""}, "reflex___state____state.trapcheck___states___community_state____community_state": {"amount": "", "category": "transport", "city": "Bangkok", "description": "", "error_message": "", "is_submitting": false, "latitude": "13.7450", "longitude": "100.5050", "reports": [], "share_consent": false, "success_message": ""}, "reflex___state____state.reflex___state____update_vars_internal_state": {}, "reflex___state____state.reflex___state____on_load_internal_state": {}, "reflex___state____state.reflex___state____frontend_event_exception_state": {}, "reflex___state____state.trapcheck___pages___map____map_state": {"active_city": "All", "reports": []}, "reflex___state____state.trapcheck___states___scan_state____scan_state": {"analysis_instruction": "Scan this menu's prices and flag any that look unusually high.", "analysis_mode": "", "city": "Bangkok", "currency_symbol": "$", "error_message": "", "fair_max": 0.0, "fair_min": 0.0, "fair_range_end_pct": 50, "fair_range_label": "— – —", "fair_range_start_pct": 25, "found_match": false, "has_result": false, "is_loading": false, "manual_item": "", "manual_price": "", "price_marker_pct": 50, "reason": "", "result_currency": "", "result_item": "", "result_price": 0.0, "risk_level": "", "scam_score": 0, "tip": "", "verdict": "", "verdict_color": "#64748B", "your_price_label": "—"}}

export const defaultColorMode = "system"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  reflex___state____state: createContext(null),
  reflex___state____state__trapcheck___states___guardian_state____guardian_state: createContext(null),
  reflex___state____state__trapcheck___states___community_state____community_state: createContext(null),
  reflex___state____state__reflex___state____update_vars_internal_state: createContext(null),
  reflex___state____state__reflex___state____on_load_internal_state: createContext(null),
  reflex___state____state__reflex___state____frontend_event_exception_state: createContext(null),
  reflex___state____state__trapcheck___pages___map____map_state: createContext(null),
  reflex___state____state__trapcheck___states___scan_state____scan_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}, "session_storage": {}}

export const state_name = "reflex___state____state"

export const exception_state_name = "reflex___state____state.reflex___state____frontend_event_exception_state"

// These events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            Event(
                'reflex___state____state.reflex___state____update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(Event('reflex___state____state.reflex___state____on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    Event('reflex___state____state.hydrate'),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export const lastCompiledTimeStamp = "2026-10-11 05:49:21.879341"

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectErrors]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [reflex___state____state, dispatch_reflex___state____state] = useReducer(applyDelta, initialState["reflex___state____state"])
  const [reflex___state____state__trapcheck___states___guardian_state____guardian_state, dispatch_reflex___state____state__trapcheck___states___guardian_state____guardian_state] = useReducer(applyDelta, initialState["reflex___state____state.trapcheck___states___guardian_state____guardian_state"])
  const [reflex___state____state__trapcheck___states___community_state____community_state, dispatch_reflex___state____state__trapcheck___states___community_state____community_state] = useReducer(applyDelta, initialState["reflex___state____state.trapcheck___states___community_state____community_state"])
  const [reflex___state____state__reflex___state____update_vars_internal_state, dispatch_reflex___state____state__reflex___state____update_vars_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____update_vars_internal_state"])
  const [reflex___state____state__reflex___state____on_load_internal_state, dispatch_reflex___state____state__reflex___state____on_load_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____on_load_internal_state"])
  const [reflex___state____state__reflex___state____frontend_event_exception_state, dispatch_reflex___state____state__reflex___state____frontend_event_exception_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____frontend_event_exception_state"])
  const [reflex___state____state__trapcheck___pages___map____map_state, dispatch_reflex___state____state__trapcheck___pages___map____map_state] = useReducer(applyDelta, initialState["reflex___state____state.trapcheck___pages___map____map_state"])
  const [reflex___state____state__trapcheck___states___scan_state____scan_state, dispatch_reflex___state____state__trapcheck___states___scan_state____scan_state] = useReducer(applyDelta, initialState["reflex___state____state.trapcheck___states___scan_state____scan_state"])
  const dispatchers = useMemo(() => {
    return {
      "reflex___state____state": dispatch_reflex___state____state,
      "reflex___state____state.trapcheck___states___guardian_state____guardian_state": dispatch_reflex___state____state__trapcheck___states___guardian_state____guardian_state,
      "reflex___state____state.trapcheck___states___community_state____community_state": dispatch_reflex___state____state__trapcheck___states___community_state____community_state,
      "reflex___state____state.reflex___state____update_vars_internal_state": dispatch_reflex___state____state__reflex___state____update_vars_internal_state,
      "reflex___state____state.reflex___state____on_load_internal_state": dispatch_reflex___state____state__reflex___state____on_load_internal_state,
      "reflex___state____state.reflex___state____frontend_event_exception_state": dispatch_reflex___state____state__reflex___state____frontend_event_exception_state,
      "reflex___state____state.trapcheck___pages___map____map_state": dispatch_reflex___state____state__trapcheck___pages___map____map_state,
      "reflex___state____state.trapcheck___states___scan_state____scan_state": dispatch_reflex___state____state__trapcheck___states___scan_state____scan_state,
    }
  }, [])

  return (
    <StateContexts.reflex___state____state.Provider value={ reflex___state____state }>
    <StateContexts.reflex___state____state__trapcheck___states___guardian_state____guardian_state.Provider value={ reflex___state____state__trapcheck___states___guardian_state____guardian_state }>
    <StateContexts.reflex___state____state__trapcheck___states___community_state____community_state.Provider value={ reflex___state____state__trapcheck___states___community_state____community_state }>
    <StateContexts.reflex___state____state__reflex___state____update_vars_internal_state.Provider value={ reflex___state____state__reflex___state____update_vars_internal_state }>
    <StateContexts.reflex___state____state__reflex___state____on_load_internal_state.Provider value={ reflex___state____state__reflex___state____on_load_internal_state }>
    <StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state.Provider value={ reflex___state____state__reflex___state____frontend_event_exception_state }>
    <StateContexts.reflex___state____state__trapcheck___pages___map____map_state.Provider value={ reflex___state____state__trapcheck___pages___map____map_state }>
    <StateContexts.reflex___state____state__trapcheck___states___scan_state____scan_state.Provider value={ reflex___state____state__trapcheck___states___scan_state____scan_state }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.reflex___state____state__trapcheck___states___scan_state____scan_state.Provider>
    </StateContexts.reflex___state____state__trapcheck___pages___map____map_state.Provider>
    </StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state.Provider>
    </StateContexts.reflex___state____state__reflex___state____on_load_internal_state.Provider>
    </StateContexts.reflex___state____state__reflex___state____update_vars_internal_state.Provider>
    </StateContexts.reflex___state____state__trapcheck___states___community_state____community_state.Provider>
    </StateContexts.reflex___state____state__trapcheck___states___guardian_state____guardian_state.Provider>
    </StateContexts.reflex___state____state.Provider>
  )
}