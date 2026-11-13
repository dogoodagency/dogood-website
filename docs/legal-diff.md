# Legal diff: live text vs the pages on this preview

Live source: `content/privacy.md` and `content/terms.md` in the all-pages text extract. The site header, the IODA footer and the image appendix are not part of either page. No postal address is on either page.

Only Fin's numbered changes are in the new text. Every other sentence is the live sentence.

## Privacy

- P1. The intro and section 13 name the controller as DoGood OÜ (Estonia, registry code 14695833), contact hiya@dogoodagency.co.
- P2. The RB2B block, the opt-out line, the RB2B mentions in sections 3, 5 and 7, and two section 2 bullets are removed.
- P3. The automatic-collection list is one line about Netlify.
- P4. Cookie types are Necessary (CookieYes), Functional (tawk.to and Buzzsprout, off until accepted or clicked), YouTube nocookie, and self-hosted fonts. Analytics and Marketing types are deleted. The cookie preference center links to /cookies.
- P5. Information you provide adds live chat, TidyCal bookings, Jotform and the MailerLite sign-up.
- P6. Payment processors are "(bank transfer through Wise, or card payment through Stripe)". The live sentence "We do not store your full credit card details on our servers." is kept.
- P7. Service providers are Netlify, CookieYes, tawk.to, Google Workspace, MailerLite, TidyCal, Jotform, HubSpot, PandaDoc, payments (Wise, Stripe) and Buzzsprout.
- P8. Legal basis and Transfers are new short sections. Section 4 adds restriction, objection, data portability, and a complaint to the Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon).
- P9. The "by using this website you agree" sentence and the "continued use constitutes acceptance" sentence are deleted.
- P10. "Last updated: 13 November 2026" is at the top. The date is fixed in the page. It is not generated.
- P11. The "Regular security audits and monitoring" bullet is removed from section 6.
- P12. Section 11, USERNAMES AND PASSWORDS, is removed. CHANGES TO THIS POLICY is now section 11. CONTACT US is now section 12. There were no other cross-references to renumber.

## Terms

- T1. Under the heading: this website is run by DoGood OÜ (Estonia, registry code 14695833).
- T2. The arbitration sentence is deleted. After the USD 100 sentence: nothing in these terms limits liability that cannot be limited by law, or takes away consumer rights.
- T3. The anti-spam section, the earnings-disclaimer intro paragraph, and both Compensation Disclosure sections are deleted.
- T4. "here" links to /privacy, and "Cookies Policy" links to /cookies.
- T5. "Last updated: 13 November 2026" is under the opening line, and the closing sentence uses the same fixed date. The copyright line is "© 2026 DoGood OÜ. All rights reserved."
- T6. The whole FORWARD-LOOKING STATEMENTS section is removed. The earnings sections and NO EARNINGS PROJECTIONS stay as they are.
- T7. GOVERNING LAW is added immediately before ENTIRE AGREEMENT: "These terms are governed by the laws of Estonia, and disputes go to the courts of Estonia. If you use our website as a consumer, you keep any protections the laws of your home country give you."
- T2 stands. The live exclusion paragraph is unchanged. The USD 100 cap stays, with the arbitration sentence still deleted and the carve-out still after it: nothing in these terms limits liability that cannot be limited by law, including for intent or gross negligence, or takes away your rights as a consumer.

## Cookies

The Cookies Policy is a new page on this preview. "Last updated: 13 November 2026" is fixed in the page. It is not generated.

## Last updated

Privacy, Terms and Cookies each carry a fixed "Last updated" date. Any future edit to the wording of a policy must bump that page's Last updated date. Do not generate the date from the build or from the clock.

## Unified diff

```diff
--- live/privacy.md
+++ new/privacy.md
@@ -1,45 +1,16 @@
 # Privacy Policy
 
+Last updated: 13 November 2026
+
+The controller is DoGood OÜ (Estonia, registry code 14695833). Contact: hiya@dogoodagency.co.
+
 At DoGood Agency, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website.
-
-By using [www.dogoodagency.co](http://www.dogoodagency.co/), you agree to the terms outlined in this policy.
 
 ### 1. INFORMATION WE COLLECT
 
 ### Automatically Collected Information
 
-When you visit our website, we automatically collect certain technical information, including:
-
-- IP address and geographic location
-- Browser type and operating system
-- Pages visited and time spent on our site
-- Referring website (where you came from)
-- Device information
-
-### Visitor Identification Technology
-
-We use RB2B, a third-party business intelligence tool, to identify and analyze business visitors to our website. This technology:
-
-- Identifies LinkedIn profiles of business visitors who are logged into LinkedIn
-- Tracks pages visited, time spent, and interaction patterns on our site
-- Collects business-related information (company name, job title, industry)
-- Uses cookies to maintain session data
-
-Purpose: This information helps us understand our audience, improve our services, and connect with potential clients who have demonstrated interest in our offerings.
-
-Important: RB2B only identifies visitors who are:
-
-- Logged into LinkedIn while browsing
-- Visiting from a business context
-- Matched in RB2B's business database
-
-This technology does NOT:
-
-- Track personal email addresses without consent
-- Share data with third parties for their marketing purposes
-- Identify visitors who decline cookie consent
-
-For more information about RB2B's data practices, visit: <https://www.rb2b.com/privacy-policy>
+Our host, Netlify, processes basic technical data (IP address, browser and device type, pages requested, referring page) to deliver the site and keep it secure. We don't use analytics or tracking tools.
 
 ### Cookie Consent Management
 
@@ -49,8 +20,6 @@
 - View details about each cookie category
 - Manage your preferences at any time
 
-You can opt out of RB2B tracking by declining analytics/marketing cookies in our cookie banner or by adjusting your browser settings to block third-party cookies.
-
 ### Information You Provide
 
 We may collect information you voluntarily submit through:
@@ -58,13 +27,17 @@
 - Contact forms or email inquiries
 - Program applications
 - Newsletter subscriptions
+- Live chat messages (tawk.to)
+- Call bookings (TidyCal)
+- Forms (Jotform)
+- The newsletter sign-up (MailerLite)
 - Client onboarding processes
 
 This may include your name, email address, company name, job title, phone number, and any other information you choose to share.
 
 ### Payment Information
 
-If you purchase services from us, we collect payment information through secure third-party processors (Stripe, Wise). We do not store your full credit card details on our servers.
+If you purchase services from us, we collect payment information through secure third-party processors (bank transfer through Wise, or card payment through Stripe). We do not store your full credit card details on our servers.
 
 ### 2. HOW WE USE YOUR INFORMATION
 
@@ -73,8 +46,6 @@
 - Operate and improve our website
 - Respond to your inquiries and provide customer support
 - Send updates about our services (with your consent)
-- Identify and connect with potential clients who visit our site
-- Analyze website performance and user behavior
 - Comply with legal obligations
 - Prevent fraud and maintain security
 
@@ -86,13 +57,21 @@
 
 We may share your information only in the following circumstances:
 
-Service Providers: We work with trusted third-party service providers who help us operate our business (RB2B for visitor identification, CookieYes for consent management, email service providers, payment processors). These providers are contractually required to protect your data and use it only for the purposes we specify.
+Service Providers: We work with trusted third-party service providers who help us operate our business (hosting (Netlify), consent (CookieYes), live chat (tawk.to), email and newsletter (Google Workspace, MailerLite), bookings and forms (TidyCal, Jotform), CRM and contracts (HubSpot, PandaDoc), payments (Wise, Stripe), podcast player (Buzzsprout)). These providers are contractually required to protect your data and use it only for the purposes we specify.
 
 Legal Requirements: We may disclose information if required by law, court order, or government regulation, or if necessary to protect our rights, prevent fraud, or ensure safety.
 
 Business Transfers: If DoGood Agency is acquired or merged with another company, your information may be transferred as part of that transaction.
 
 Aggregate Data: We may share anonymized, aggregate statistics about our website visitors with third parties for business purposes. This data cannot identify individual users.
+
+### Legal basis
+
+We handle data to answer you and to prepare or perform a contract, because the law requires it (for example accounting), with your consent (newsletter and functional cookies), or for our legitimate interest in running a secure site.
+
+### Transfers
+
+Some providers process data outside the EU/EEA, and where they do we rely on safeguards such as the EU Standard Contractual Clauses.
 
 ### 4. YOUR PRIVACY RIGHTS
 
@@ -103,6 +82,8 @@
 - Deletion: Request that we delete your personal information (subject to legal retention requirements)
 - Opt-Out: Unsubscribe from marketing communications at any time
 - Cookie Control: Manage or withdraw cookie consent through our cookie banner
+- Restriction, objection and data portability
+- The right to complain to the Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon)
 
 To exercise these rights, contact us at: [hiya@dogoodagency.co](mailto:hiya@dogoodagency.co)
 
@@ -114,11 +95,11 @@
 
 ### Types of Cookies We Use
 
-Necessary Cookies: Essential for website functionality (cannot be disabled)
+Necessary Cookies: CookieYes stores your consent choice.
 
-Analytics Cookies: Help us understand how visitors use our site (Google Analytics, RB2B)
+Functional Cookies: Off until you accept functional cookies or click to load: tawk.to live chat and the Buzzsprout podcast player.
 
-Marketing Cookies: Used for visitor identification and business development (RB2B)
+YouTube videos use privacy-enhanced (nocookie) mode. Fonts are hosted on our own site, with no Google Fonts.
 
 ###
 
@@ -128,7 +109,7 @@
 
 - Our cookie consent banner (appears on your first visit)
 - Your browser settings (instructions vary by browser)
-- Cookie preference center (link in footer)
+- [Cookie preference center (link in footer)](/cookies)
 
 Note: Blocking certain cookies may limit website functionality.
 
@@ -150,8 +131,6 @@
 - Fulfill the purposes outlined in this policy
 - Comply with legal, accounting, or regulatory requirements
 - Resolve disputes and enforce our agreements
-
-Visitor identification data from RB2B is retained according to RB2B's data retention policies (typically 13 months).
 
 ### 8. THIRD-PARTY LINKS
 
@@ -188,9 +167,9 @@
 
 ### We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. When we make significant changes, we will Update the "Last Updated" date at the top of this page
 
-Your continued use of our website after changes are posted constitutes acceptance of the updated policy.
+### 13. CONTACT US
 
-### 13. CONTACT US
+The controller is DoGood OÜ (Estonia, registry code 14695833). Contact: hiya@dogoodagency.co.
 
 ### If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
 
--- live/terms.md
+++ new/terms.md
@@ -1,4 +1,6 @@
 # Terms
+
+This website is run by DoGood OÜ (Estonia, registry code 14695833).
+
+Last updated: 13 November 2026.
 
 Thank you for visiting our website! If you wish to use [www.dogoodagency.co](https://www.dogoodagency.co/) you must agree that you will abide by and be legally bound by the terms and conditions listed below. If you don’t agree with any of the terms or conditions below, please do not use our website.
 
@@ -8,15 +10,7 @@
 
 ### PRIVACY POLICY IS PART OF THESE TERMS AND CONDITIONS
 
-The privacy policy we have put in place is a part of the terms and conditions we are providing. You may view our privacy policy at anytime right [here](https://www.dogoodagency.co/privacy).
-
-### ANTI-SPAM POLICY IS PART OF THESE TERMS AND CONDITIONS
-
-We have an anti-spam policy in place that is a part of, and subject to, these terms and conditions of use. If you wish to look at our anti-spam policy, you can see it at anytime right here.
-
-### EARNINGS DISCLAIMER
-
-When you purchase a product from this website, any of its affiliates, or representatives, you should consider that there are very important risk factors that should be taken into consideration. You may view our earnings disclaimer at anytime right here.
+The privacy policy we have put in place is a part of the terms and conditions we are providing. You may view our privacy policy at anytime right [here](/privacy) and our [Cookies Policy](/cookies).
 
 ### NO EARNINGS PROJECTIONS, PROMISES OR REPRESENTATIONS
 
@@ -82,14 +76,6 @@
 
 When specific income or earnings is provided on this website, (whether it is monetary or advertising credits that can be converted to cash or not), these figures are reflective of a specific individual or business, and that individual or business has earned the income or earnings provided. If you rely on the figures or income provided, you are assuming all the risk of not achieving the same results. The information, experiences, and figures we provide are not typical, and every individual’s financial results are likely to differ from those we provide in case studies, testimonials, and examples. If we have a new product or service, you also understand that it possibly was not for sale long enough to provide accurate figures or information.
 
-### COMPENSATION DISCLOSURE POLICY
-
-Any material connections that we may have with a third party who provides goods or services who is mentioned on [www.dogoodagency.co](https://www.dogoodagency.co/) are explained in the Compensation Disclosure Policy, which is incorporated with Earnings Disclaimers, and is not a guarantee or promise of any earnings or income. You are encouraged to read this policy in order to have a full understanding of the meaning of the relationships we have with third-party vendors and how it may influence or affect the content we provide on [www.dogoodagency.co](https://www.dogoodagency.co/).
-
-### COMPENSATION DISCLOSURE POLICY, IF ANY, IS PART OF THESE TERMS AND CONDITIONS
-
-If there is a Compensation Disclosure Policy featured on [www.dogoodagency.co](https://www.dogoodagency.co/), the policy is automatically a part of the terms and conditions of use and is also subject to the same terms and conditions.
-
 ### MODIFICATIONS AND TERMINATIONS
 
 The terms and conditions found on our website may change from time to time, and if any changes are made, they will be effective immediately. We will notify you by posting a notice on our website’s home page which will inform you of the changes that have taken place. If you disagree with any of the changes we have made, you should not use our website.
@@ -118,7 +104,7 @@
 
 Under absolutely no circumstances will we be held liable or responsible for any direct, indirect, incidental, consequential, special, exemplary, punitive, or other damages that arise from anything resulting from our website or you using the website, nor will be held liable for any claimed damages that arise from reading our content or using our website’s information, even if you have been told that damages have occurred. This includes but is not limited to being liable for damages of loss businesses, profits, litigation, or similar occurrences.
 
-Any liability for any claim that arises from using our website or that is related to our website will not exceed ($100) one hundred dollars, and that amount will be placed on all other remedies which may be used against our affiliates. Any claim you make will be subject to confidential, binding arbitration that is described later on in our terms and conditions of use.
+Any liability for any claim that arises from using our website or that is related to our website will not exceed ($100) one hundred dollars, and that amount will be placed on all other remedies which may be used against our affiliates. Nothing in these terms limits liability that cannot be limited by law, including for intent or gross negligence, or takes away your rights as a consumer.
 
 ### OBSCENE AND OFFENSIVE CONTENT
 
@@ -140,6 +126,6 @@
 
 These terms and conditions, including the policies incorporated herein by express reference, constitute your entire agreement with us with respect to your use of our website
 
-Please note that the content of this page can change without prior notice. This Terms and Conditions of Use Policy was last updated on 06-05-2023
+Please note that the content of this page can change without prior notice. This Terms and Conditions of Use Policy was last updated on 13 November 2026.
 
-Copyright © 2023 DoGood Agency, and licensed for use by the owner of this website at [www.dogoodagency.co](https://www.dogoodagency.co/) All Rights Reserved. No portion of this document may be copied or used by anyone other than the licensee without the express written permission of the copyright owner.
+© 2026 DoGood OÜ. All rights reserved.
+
+The FORWARD-LOOKING STATEMENTS section is deleted in full. Immediately before ENTIRE AGREEMENT, this section is added:
+
+### GOVERNING LAW
+
+These terms are governed by the laws of Estonia, and disputes go to the courts of Estonia. If you use our website as a consumer, you keep any protections the laws of your home country give you.
+
+Privacy section 6 no longer has "Regular security audits and monitoring". Privacy section 11 USERNAMES AND PASSWORDS is deleted. CHANGES TO THIS POLICY is section 11. CONTACT US is section 12.
```
