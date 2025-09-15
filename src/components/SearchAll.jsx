import React, { useState } from 'react'
import useStore from '..'

export default function SearchAll({ value, onChange }){
  const all = useStore(s=>s.allWidgetsIndex)
  const [show, setShow] = useState(false)
  const [query, setQuery] = useState('')

  const results = all.filter(w=> (w.name + ' ' + w.text).toLowerCase().includes(query.toLowerCase()))

  return (
    <div style={{position:'relative'}}>
      <input className="search" placeholder="Search widgets..." value={value} onChange={e=>onChange(e.target.value)} />
      <button className="btn ghost" onClick={()=>setShow(true)}>Search All</button>

      {show && (
        <div style={{position:'absolute', right:0, top:40, width:360, background:'#fff', border:'1px solid #eef2f7', padding:12, borderRadius:8}}>
          <div className="field">
            <input className="input" placeholder="Search all widgets" value={query} onChange={e=>setQuery(e.target.value)} />
          </div>
          <div style={{maxHeight:260, overflow:'auto'}}>
            {results.map(r=> (
              <div key={r.id} style={{padding:8, borderBottom:'1px solid #f1f5f9'}}>
                <div style={{fontWeight:600}}>{r.name}</div>
                <div className="small">{r.text}</div>
              </div>
            ))}
            {results.length===0 && <div className="small">No results</div>}
          </div>
          <div className="footer">
            <button className="btn ghost" onClick={()=>{ setShow(false); setQuery('') }}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}