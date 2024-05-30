"use client"

import { useState } from "react"

export default function Cases() {
    const [modalOpen, setModalOpen] = useState(0);
    const [assignee, setAssignee] = useState(null);
   return (
    <div className="cases">
    <div className="cases__header">
        <div className="cases__header__title">
            <h2>Unassigned Cases</h2>
            <h3>Input more Information here</h3>
        </div>
        <form className="cases__header__form">
            <input type="text" placeholder="Enter Name, Agency or Case #"/>
            <button>Search</button>
        </form>

        <div className="cases__header__filter">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="23.5" fill="white" stroke="#A8A8A8"/>
<path d="M17 24V16M31 32V29M17 32V28M31 25V16M24 19V16M24 32V23" stroke="black" stroke-linecap="round"/>
<path d="M17 28C18.1046 28 19 27.1046 19 26C19 24.8954 18.1046 24 17 24C15.8954 24 15 24.8954 15 26C15 27.1046 15.8954 28 17 28Z" stroke="black" stroke-linecap="round"/>
<path d="M24 23C25.1046 23 26 22.1046 26 21C26 19.8954 25.1046 19 24 19C22.8954 19 22 19.8954 22 21C22 22.1046 22.8954 23 24 23Z" stroke="black" stroke-linecap="round"/>
<path d="M31 29C32.1046 29 33 28.1046 33 27C33 25.8954 32.1046 25 31 25C29.8954 25 29 25.8954 29 27C29 28.1046 29.8954 29 31 29Z" stroke="black" stroke-linecap="round"/>
</svg>
        </div>

    </div>

    <div className="cases__table">
        <div className="cases__table__header">
            <div>
            <svg width="12" height="25" viewBox="0 0 12 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 8.5L9.5 8.5L6 3L2.5 8.5Z" fill="#7E92A2"/>
<path d="M9.5 16.5L2.5 16.5L6 22L9.5 16.5Z" fill="#7E92A2"/>
</svg>

            Date Initiated
            </div>
            <div>
            <svg width="12" height="25" viewBox="0 0 12 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 8.5L9.5 8.5L6 3L2.5 8.5Z" fill="#7E92A2"/>
<path d="M9.5 16.5L2.5 16.5L6 22L9.5 16.5Z" fill="#7E92A2"/>
</svg>

Case No
            </div>
            <div>
            <svg width="12" height="25" viewBox="0 0 12 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 8.5L9.5 8.5L6 3L2.5 8.5Z" fill="#7E92A2"/>
<path d="M9.5 16.5L2.5 16.5L6 22L9.5 16.5Z" fill="#7E92A2"/>
</svg>

Agency
            </div>
            <div>
            <svg width="12" height="25" viewBox="0 0 12 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 8.5L9.5 8.5L6 3L2.5 8.5Z" fill="#7E92A2"/>
<path d="M9.5 16.5L2.5 16.5L6 22L9.5 16.5Z" fill="#7E92A2"/>
</svg>

Case Status
            </div>
            <div>
            <svg width="12" height="25" viewBox="0 0 12 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 8.5L9.5 8.5L6 3L2.5 8.5Z" fill="#7E92A2"/>
<path d="M9.5 16.5L2.5 16.5L6 22L9.5 16.5Z" fill="#7E92A2"/>
</svg>

Accused Status
            </div>
            <div>
            <svg width="12" height="25" viewBox="0 0 12 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 8.5L9.5 8.5L6 3L2.5 8.5Z" fill="#7E92A2"/>
<path d="M9.5 16.5L2.5 16.5L6 22L9.5 16.5Z" fill="#7E92A2"/>
</svg>

Offence
            </div>
            <div>
            <svg width="12" height="25" viewBox="0 0 12 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 8.5L9.5 8.5L6 3L2.5 8.5Z" fill="#7E92A2"/>
<path d="M9.5 16.5L2.5 16.5L6 22L9.5 16.5Z" fill="#7E92A2"/>
</svg>

Type
            </div>
            <div>
            <svg width="12" height="25" viewBox="0 0 12 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 8.5L9.5 8.5L6 3L2.5 8.5Z" fill="#7E92A2"/>
<path d="M9.5 16.5L2.5 16.5L6 22L9.5 16.5Z" fill="#7E92A2"/>
</svg>

Assignee
            </div>
        </div>

        <div className="cases__table__body">
            <div>11-03-2024</div>
            <div>EF18964</div>
            <div>EFCC</div>
            <button className="cases__table__body__case-status cases__table__body__unassigned ">Unassigned</button>
            <button className="cases__table__body__accused-status cases__table__body__remanded">Remanded In Jail</button>
            <div>Cyber Crime</div>
            <div>Criminal Case</div>
            <div className="cases__table__body__assign" onClick={() => setModalOpen(1)}>
            Assign now
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.92 8.67969H11.69H6.07999C5.11999 8.67969 4.63999 9.83969 5.31999 10.5197L10.5 15.6997C11.33 16.5297 12.68 16.5297 13.51 15.6997L15.48 13.7297L18.69 10.5197C19.36 9.83969 18.88 8.67969 17.92 8.67969Z" fill="#009B07"/>
</svg>

            </div>
            <div className="cases__table__body__options">
            <svg  width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.5C13.104 7.5 14 6.604 14 5.5C14 4.396 13.104 3.5 12 3.5C10.896 3.5 10 4.396 10 5.5C10 6.604 10.896 7.5 12 7.5ZM12 10.5C10.896 10.5 10 11.396 10 12.5C10 13.604 10.896 14.5 12 14.5C13.104 14.5 14 13.604 14 12.5C14 11.396 13.104 10.5 12 10.5ZM10 19.5C10 18.396 10.896 17.5 12 17.5C13.104 17.5 14 18.396 14 19.5C14 20.604 13.104 21.5 12 21.5C10.896 21.5 10 20.604 10 19.5Z" fill="black"/>
</svg>
            </div>
           

        </div>
        <div className="cases__table__body">
            <div>11-03-2024</div>
            <div>EF18964</div>
            <div>EFCC</div>
            <button className="cases__table__body__case-status cases__table__body__unassigned ">Unassigned</button>
            <button className="cases__table__body__accused-status cases__table__body__remanded">Remanded In Jail</button>
            <div>Cyber Crime</div>
            <div>Criminal Case</div>
            <div className="cases__table__body__assign" onClick={() => setModalOpen(1)}>
            Assign now
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.92 8.67969H11.69H6.07999C5.11999 8.67969 4.63999 9.83969 5.31999 10.5197L10.5 15.6997C11.33 16.5297 12.68 16.5297 13.51 15.6997L15.48 13.7297L18.69 10.5197C19.36 9.83969 18.88 8.67969 17.92 8.67969Z" fill="#009B07"/>
</svg>

            </div>
            <div className="cases__table__body__options">
            <svg  width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.5C13.104 7.5 14 6.604 14 5.5C14 4.396 13.104 3.5 12 3.5C10.896 3.5 10 4.396 10 5.5C10 6.604 10.896 7.5 12 7.5ZM12 10.5C10.896 10.5 10 11.396 10 12.5C10 13.604 10.896 14.5 12 14.5C13.104 14.5 14 13.604 14 12.5C14 11.396 13.104 10.5 12 10.5ZM10 19.5C10 18.396 10.896 17.5 12 17.5C13.104 17.5 14 18.396 14 19.5C14 20.604 13.104 21.5 12 21.5C10.896 21.5 10 20.604 10 19.5Z" fill="black"/>
</svg>
            </div>
           

        </div>
        <div className="cases__table__body">
            <div>11-03-2024</div>
            <div>EF18964</div>
            <div>EFCC</div>
            <button className="cases__table__body__case-status cases__table__body__unassigned ">Unassigned</button>
            <button className="cases__table__body__accused-status cases__table__body__remanded">Remanded In Jail</button>
            <div>Cyber Crime</div>
            <div>Criminal Case</div>
            <div className="cases__table__body__assign" onClick={() => setModalOpen(1)}>
            Assign now
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.92 8.67969H11.69H6.07999C5.11999 8.67969 4.63999 9.83969 5.31999 10.5197L10.5 15.6997C11.33 16.5297 12.68 16.5297 13.51 15.6997L15.48 13.7297L18.69 10.5197C19.36 9.83969 18.88 8.67969 17.92 8.67969Z" fill="#009B07"/>
</svg>

            </div>
            <div className="cases__table__body__options">
            <svg  width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.5C13.104 7.5 14 6.604 14 5.5C14 4.396 13.104 3.5 12 3.5C10.896 3.5 10 4.396 10 5.5C10 6.604 10.896 7.5 12 7.5ZM12 10.5C10.896 10.5 10 11.396 10 12.5C10 13.604 10.896 14.5 12 14.5C13.104 14.5 14 13.604 14 12.5C14 11.396 13.104 10.5 12 10.5ZM10 19.5C10 18.396 10.896 17.5 12 17.5C13.104 17.5 14 18.396 14 19.5C14 20.604 13.104 21.5 12 21.5C10.896 21.5 10 20.604 10 19.5Z" fill="black"/>
</svg>
            </div>
           

        </div>
        <div className="cases__table__body">
            <div>11-03-2024</div>
            <div>EF18964</div>
            <div>EFCC</div>
            <button className="cases__table__body__case-status cases__table__body__unassigned ">Unassigned</button>
            <button className="cases__table__body__accused-status cases__table__body__remanded">Remanded In Jail</button>
            <div>Cyber Crime</div>
            <div>Criminal Case</div>
            <div className="cases__table__body__assign" onClick={() => setModalOpen(1)}>
            Assign now
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.92 8.67969H11.69H6.07999C5.11999 8.67969 4.63999 9.83969 5.31999 10.5197L10.5 15.6997C11.33 16.5297 12.68 16.5297 13.51 15.6997L15.48 13.7297L18.69 10.5197C19.36 9.83969 18.88 8.67969 17.92 8.67969Z" fill="#009B07"/>
</svg>

            </div>
            <div className="cases__table__body__options">
            <svg  width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.5C13.104 7.5 14 6.604 14 5.5C14 4.396 13.104 3.5 12 3.5C10.896 3.5 10 4.396 10 5.5C10 6.604 10.896 7.5 12 7.5ZM12 10.5C10.896 10.5 10 11.396 10 12.5C10 13.604 10.896 14.5 12 14.5C13.104 14.5 14 13.604 14 12.5C14 11.396 13.104 10.5 12 10.5ZM10 19.5C10 18.396 10.896 17.5 12 17.5C13.104 17.5 14 18.396 14 19.5C14 20.604 13.104 21.5 12 21.5C10.896 21.5 10 20.604 10 19.5Z" fill="black"/>
</svg>
            </div>
           

        </div>
        <div className="cases__table__body">
            <div>11-03-2024</div>
            <div>EF18964</div>
            <div>EFCC</div>
            <button className="cases__table__body__case-status cases__table__body__unassigned ">Unassigned</button>
            <button className="cases__table__body__accused-status cases__table__body__remanded">Remanded In Jail</button>
            <div>Cyber Crime</div>
            <div>Criminal Case</div>
            <div className="cases__table__body__assign" onClick={() => setModalOpen(1)}>
            Assign now
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.92 8.67969H11.69H6.07999C5.11999 8.67969 4.63999 9.83969 5.31999 10.5197L10.5 15.6997C11.33 16.5297 12.68 16.5297 13.51 15.6997L15.48 13.7297L18.69 10.5197C19.36 9.83969 18.88 8.67969 17.92 8.67969Z" fill="#009B07"/>
</svg>

            </div>
            <div className="cases__table__body__options">
            <svg  width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.5C13.104 7.5 14 6.604 14 5.5C14 4.396 13.104 3.5 12 3.5C10.896 3.5 10 4.396 10 5.5C10 6.604 10.896 7.5 12 7.5ZM12 10.5C10.896 10.5 10 11.396 10 12.5C10 13.604 10.896 14.5 12 14.5C13.104 14.5 14 13.604 14 12.5C14 11.396 13.104 10.5 12 10.5ZM10 19.5C10 18.396 10.896 17.5 12 17.5C13.104 17.5 14 18.396 14 19.5C14 20.604 13.104 21.5 12 21.5C10.896 21.5 10 20.604 10 19.5Z" fill="black"/>
</svg>
            </div>
           

        </div>
        
        
        
        
        

        <div className="cases__table__pagination">
        <div className="cases__table__pagination__rows">
        Rows per page: <select name="" id="">
            <option value="">8</option>
            <option value="">10</option>
        </select>
            </div>

            <div className="cases__table__pagination__pages">
                <div>1-8 of 1240</div>
                <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 18L9.07071 12.0707C9.03166 12.0317 9.03166 11.9683 9.07071 11.9293L15 6" stroke="#9FA2B4" stroke-width="2" stroke-linecap="round"/>
</svg>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18L14.9293 12.0707C14.9683 12.0317 14.9683 11.9683 14.9293 11.9293L9 6" stroke="#9FA2B4" stroke-width="2" stroke-linecap="round"/>
</svg>

                </div>
            </div>

        </div>
    </div>

    {modalOpen && 
    <div className="cases__modal">
    {modalOpen === 1 && <div className="cases__modal__inner">
        <div className="cases__modal__inner__title">
        Assign case to
        </div>
        <form className="cases__modal__inner__form">
            <label htmlFor="">Assign</label>
            <select name="" id=""
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            >
                <option value="">Name</option>
                <option value="Okoli Chiamaka">Okoli Chiamaka</option>
            </select>
           {!!assignee && <div className="cases__modal__inner__form__names">
            <div>
            Okoli Chiamaka
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.80806 5.80806C6.05214 5.56398 6.44786 5.56398 6.69194 5.80806L10 9.11612L13.3081 5.80806C13.5521 5.56398 13.9479 5.56398 14.1919 5.80806C14.436 6.05214 14.436 6.44786 14.1919 6.69194L10.8839 10L14.1919 13.3081C14.436 13.5521 14.436 13.9479 14.1919 14.1919C13.9479 14.436 13.5521 14.436 13.3081 14.1919L10 10.8839L6.69194 14.1919C6.44786 14.436 6.05214 14.436 5.80806 14.1919C5.56398 13.9479 5.56398 13.5521 5.80806 13.3081L9.11612 10L5.80806 6.69194C5.56398 6.44786 5.56398 6.05214 5.80806 5.80806Z" fill="black"/>
</svg>

            </div>
            </div>}
        </form>
        <button onClick={() => setModalOpen(2)}>Assign</button>
        </div>}
    {modalOpen === 2 && <div className="cases__modal__success">
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="80" height="80" rx="40" fill="url(#paint0_linear_5617_29803)"/>
<rect x="20" y="20" width="40" height="40" fill="url(#pattern0_5617_29803)"/>
<defs>
<pattern id="pattern0_5617_29803" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_5617_29803" transform="scale(0.0138889)"/>
</pattern>
<linearGradient id="paint0_linear_5617_29803" x1="40" y1="0" x2="40" y2="80" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFC357" stop-opacity="0.25"/>
<stop offset="1" stop-color="#FFC357" stop-opacity="0"/>
</linearGradient>
<image id="image0_5617_29803" width="72" height="72" xlinkHref="data:image/png;base64,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"/>
</defs>
</svg>

        <div className="cases__modal__success__title">
        Case Assigned
        </div>
        
      
        <button onClick={() => setModalOpen(null)}>Close</button>
        </div>}

    </div>}
</div>
   )
}