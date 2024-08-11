export default function InvoiceAndBilling() {
    return (
        <div className="invoice-and-billing">
<h1 className="invoice-and-billing__title">Invoice and Billing</h1>
<h2 className="invoice-and-billing__subtitle">
    <div>Account Plans</div>
    <div>Pick an account plan that fits your enterprise</div>
</h2>

<div className="invoice-and-billing__plans">
    <div className="invoice-and-billing__plans__title">
        <div>Current Plans</div>
        <div>We will credit you account if you need to downgrade during billing cycle</div>
    </div>
    <div className="invoice-and-billing__plans__cards">
    <div className="invoice-and-billing__plans__cards__card">
    <div className="invoice-and-billing__plans__cards__card__header">
        <div>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="4" width="28" height="28" rx="9" fill="#027A48"/>
<rect x="2" y="2" width="32" height="32" rx="16" stroke="#027A48" stroke-width="4"/>
<path d="M11.3333 19.6667L18 23L24.6666 19.6667M18 13L11.3333 16.3333L18 19.6667L24.6666 16.3333L18 13Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

Basic plan
        </div>

        <input type="radio" name="" id="" />
        </div>

        <div className="invoice-and-billing__plans__cards__card__title">
        N10,000 <span>per month</span>
        </div>
        <div className="invoice-and-billing__plans__cards__card__subtitle">
        Includes up to 10 users, 20GB indiviual data and access to all features.
        </div>
        </div>
    <div className="invoice-and-billing__plans__cards__card">
    <div className="invoice-and-billing__plans__cards__card__header">
        <div>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="32" height="32" rx="16" fill="#E6FFED"/>
<rect x="2" y="2" width="32" height="32" rx="16" stroke="#E6FFED" stroke-width="4"/>
<g clip-path="url(#clip0_1_11422)">
<path d="M11.3333 21.3333L18 24.6666L24.6666 21.3333M11.3333 18L18 21.3333L24.6666 18M18 11.3333L11.3333 14.6666L18 18L24.6666 14.6666L18 11.3333Z" stroke="#0C2514" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_11422">
<rect width="16" height="16" fill="white" transform="translate(10 10)"/>
</clipPath>
</defs>
</svg>


Business plan
        </div>

        <input type="radio" name="" id="" />
        </div>

        <div className="invoice-and-billing__plans__cards__card__title">
        N20,000 <span>per month</span>
        </div>
        <div className="invoice-and-billing__plans__cards__card__subtitle">
        Includes up to 20 users, 40GB indiviual data and access to all features.
        </div>
        </div>
    <div className="invoice-and-billing__plans__cards__card">
    <div className="invoice-and-billing__plans__cards__card__header">
        <div>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="32" height="32" rx="16" fill="#E6FFED"/>
<rect x="2" y="2" width="32" height="32" rx="16" stroke="#E6FFED" stroke-width="4"/>
<path d="M18.6667 11.3333L12 19.3333H18L17.3333 24.6667L24 16.6667H18L18.6667 11.3333Z" stroke="#0C2514" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



Enterprise plan
        </div>

        <input type="radio" name="" id="" />
        </div>

        <div className="invoice-and-billing__plans__cards__card__title">
        N40,000 <span>per month</span>
        </div>
        <div className="invoice-and-billing__plans__cards__card__subtitle">
        Unlimited users, unlimited individual data and access to all features.
        </div>
        </div>
        </div>
</div>

<div className="invoice-and-billing__plan-table">
    <div className="invoice-and-billing__plan-table__title">
        <div>Current Plans</div>
        <div>We will credit you account if you need to downgrade during billing cycle</div>

        <button>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_11183)">
<path d="M6.66667 14.1667L10 17.5M10 17.5L13.3333 14.1667M10 17.5V10M17.4 15.075C18.1245 14.5655 18.6678 13.8385 18.9511 12.9993C19.2343 12.1601 19.2428 11.2525 18.9753 10.4082C18.7078 9.56387 18.1782 8.82675 17.4634 8.30381C16.7486 7.78087 15.8857 7.49931 15 7.50001H13.95C13.6994 6.52323 13.2304 5.61605 12.5784 4.84674C11.9265 4.07743 11.1085 3.46606 10.186 3.05863C9.26356 2.65121 8.26071 2.45836 7.25294 2.4946C6.24518 2.53084 5.25877 2.79523 4.36797 3.26786C3.47717 3.74049 2.70519 4.40905 2.11016 5.2232C1.51513 6.03735 1.11255 6.97588 0.932723 7.96813C0.752897 8.96038 0.800514 9.9805 1.07199 10.9517C1.34346 11.9229 1.83172 12.8198 2.50001 13.575" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_11183">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

        Download all
        </button>
    </div>

    <div className="invoice-and-billing__plan-table__table">
    <div className="invoice-and-billing__plan-table__table__header">
        <div>
        <input type="checkbox" name="" id="" />
            Invoice
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99998 3.33333V12.6667M7.99998 12.6667L12.6666 8M7.99998 12.6667L3.33331 8" stroke="#667085" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


        </div>

        <div>Billing Date</div>
        <div>Status of Suspect <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.56004 6C6.71678 5.55444 7.02614 5.17873 7.43334 4.93942C7.84055 4.7001 8.3193 4.61262 8.78483 4.69247C9.25035 4.77232 9.67259 5.01434 9.97676 5.37568C10.2809 5.73702 10.4474 6.19434 10.4467 6.66666C10.4467 8 8.44671 8.66666 8.44671 8.66666M8.50004 11.3333H8.50671M15.1667 8C15.1667 11.6819 12.1819 14.6667 8.50004 14.6667C4.81814 14.6667 1.83337 11.6819 1.83337 8C1.83337 4.3181 4.81814 1.33333 8.50004 1.33333C12.1819 1.33333 15.1667 4.3181 15.1667 8Z" stroke="#98A2B3" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>

<div>Plan</div>
        </div>

        <div className="invoice-and-billing__plan-table__table__body">

            <div className="invoice-and-billing__plan-table__table__body__invoice">
            <input type="checkbox" name="" id="" />
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="8" fill="#53389E"/>
<path d="M20.8333 11.6667H15C14.558 11.6667 14.134 11.8423 13.8215 12.1548C13.5089 12.4674 13.3333 12.8913 13.3333 13.3333V26.6667C13.3333 27.1087 13.5089 27.5326 13.8215 27.8452C14.134 28.1577 14.558 28.3333 15 28.3333H25C25.442 28.3333 25.8659 28.1577 26.1785 27.8452C26.4911 27.5326 26.6666 27.1087 26.6666 26.6667V17.5M20.8333 11.6667L26.6666 17.5M20.8333 11.6667V17.5H26.6666" stroke="#F3F9F5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

Invoice #002 - Jul 2024
            </div>

            <div>JAN- 6-2022</div>

<div className="invoice-and-billing__plan-table__table__body__status">
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3L4.5 8.5L2 6" stroke="#009B07" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

Paid
    </div>  

    <div className="invoice-and-billing__plan-table__table__body__plan">
        Basic Plan
        </div>          
    <div className="invoice-and-billing__plan-table__table__body__edit">
        Edit
        </div>          
        </div>
        <div className="invoice-and-billing__plan-table__table__body">

            <div className="invoice-and-billing__plan-table__table__body__invoice">
            <input type="checkbox" name="" id="" />
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="8" fill="#53389E"/>
<path d="M20.8333 11.6667H15C14.558 11.6667 14.134 11.8423 13.8215 12.1548C13.5089 12.4674 13.3333 12.8913 13.3333 13.3333V26.6667C13.3333 27.1087 13.5089 27.5326 13.8215 27.8452C14.134 28.1577 14.558 28.3333 15 28.3333H25C25.442 28.3333 25.8659 28.1577 26.1785 27.8452C26.4911 27.5326 26.6666 27.1087 26.6666 26.6667V17.5M20.8333 11.6667L26.6666 17.5M20.8333 11.6667V17.5H26.6666" stroke="#F3F9F5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

Invoice #002 - Jul 2024
            </div>

            <div>JAN- 6-2022</div>

<div className="invoice-and-billing__plan-table__table__body__status">
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3L4.5 8.5L2 6" stroke="#009B07" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

Paid
    </div>  

    <div className="invoice-and-billing__plan-table__table__body__plan">
        Basic Plan
        </div>          
    <div className="invoice-and-billing__plan-table__table__body__edit">
        Edit
        </div>          
        </div>
        <div className="invoice-and-billing__plan-table__table__body">

            <div className="invoice-and-billing__plan-table__table__body__invoice">
            <input type="checkbox" name="" id="" />
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="8" fill="#53389E"/>
<path d="M20.8333 11.6667H15C14.558 11.6667 14.134 11.8423 13.8215 12.1548C13.5089 12.4674 13.3333 12.8913 13.3333 13.3333V26.6667C13.3333 27.1087 13.5089 27.5326 13.8215 27.8452C14.134 28.1577 14.558 28.3333 15 28.3333H25C25.442 28.3333 25.8659 28.1577 26.1785 27.8452C26.4911 27.5326 26.6666 27.1087 26.6666 26.6667V17.5M20.8333 11.6667L26.6666 17.5M20.8333 11.6667V17.5H26.6666" stroke="#F3F9F5" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

Invoice #002 - Jul 2024
            </div>

            <div>JAN- 6-2022</div>

<div className="invoice-and-billing__plan-table__table__body__status">
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3L4.5 8.5L2 6" stroke="#009B07" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

Paid
    </div>  

    <div className="invoice-and-billing__plan-table__table__body__plan">
        Basic Plan
        </div>          
    <div className="invoice-and-billing__plan-table__table__body__edit">
        Edit
        </div>          
        </div>

    </div>
</div>
        </div>
    )
}