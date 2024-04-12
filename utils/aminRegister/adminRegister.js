import "../../app/globals.css"
import "./adminRegister.css"
import { useState } from "react"




export default function AdminReg() {
    const [page, setPage] = useState("art")
    function updatePage(e){
        setPage(e.target.value)
        return 
    }
    async function handleSumbit(form_data) {
    'use server'
    }
  return (
    <div className="admin-reg-container column">
        <select
            className="select"
            onChange={updatePage}
            defaultValue={"art"}
        >
            <option value="art">name asc</option>
            <option value="decorations">name des</option>
            <option value="judaica">price asc</option>
        </select>
        <form className="admin-reg-form column" onSubmit={handleSumbit}>
            <input name="title" type="text" placeholder="name..." min={2}></input>
            <input name="manufacturer" type="text" placeholder="manu facturer..." min={2}></input>
            <input name="desc" type="text" placeholder="description..." min={2}></input>
            <input name="img_url" type="text" placeholder="uploud image..." min={2}></input>
            <input name="price" type="number" placeholder="price..." min={1}></input>
            <button type="submit">submit</button>
        </form>
    </div>
  )
}
