NAME: OLALEKAN RICHARD ADEMIJUBE  
STACK: QUALITY ASSURANCE AND API TESTING  
DATE: 11th of August, 2026  
BANKING MOBILE APP: UNIONMOBILE  
1.	Identify 4 key user expectations  
a.	Accuracy and reliability – This means that the user should have an assurance that any money sent from the app is delivered to the target account correctly.  
b.	Speed and confirmation - This means that user should be certain through instant feedback that any action taken on the application was successful.  
c.	Security - This means that the application must be built in such a way that all transfers should require PIN/OTP/Biometric details.  
d.	Ease – This means that the application should be developed in such a way that basic operations can be carried out seamlessly.
2.	Identify 3 major business risks  
a.	Financial loss from incorrect or duplicate transfers - A major defect within the app’s system could send the wrong amount, process a transaction more than once, or debit a customer's account without correctly completing the transfer, resulting in financial losses.  
b.	Fraud and unauthorized transactions - Weak authentication, poor session management, or poor transaction controls could enable unauthorized transfers, causing direct financial losses.  
c.	Reputational damage – Any failed, delayed, or incorrectly processed transfers can generate customer complaints, hamper trust in the bank, and potentially create regulatory/compliance issues.  
3.	Explain how testing this transfer feature differs between waterfall and agile scrum  
In a Waterfall approach, testing the Transfer feature is usually performed after the requirements, design, and development phases have been completed.  
The process in sequential order would be:  
a.	Requirements  
b.	Design  
c.	Development  
d.	Testing  
e.	Defect Fixing  
f.	Regression Testing  
g.	Release  
For the Transfer module, the requirements would first be documented and approved. QA would then design test cases based on those requirements.
In Agile Scrum, Quality Assurance is involved throughout the development process rather than waiting until the entire Transfer module is completed.
The Transfer functionality would normally be broken down into smaller user stories. For example: "As a customer, I want to transfer money to another bank account so that I can make payments to other people."
That story could have acceptance criteria covering beneficiary validation, transfer amount, authentication, transaction processing, and confirmation.
During a sprint, developers implement part of the functionality. Once it is ready, the Quality Assurance personnel tests it immediately.
4.	Write one complete bug observation (Title, Steps to reproduce, Expected result, Actual result, evidence, level of severity) from the UnionMobile app  
Bug Observation  
Title: Transfer button remains enabled when the transfer amount is invalid
Steps to Reproduce:  
a.	Log in to the UnionMobile app.  
b.	Navigate to the Transfer module.  
c.	Select a valid source account and beneficiary.  
d.	Enter an invalid transfer amount, such as ₦0.  
e.	Observe the Transfer/Continue button.  
f.	Tap the button.  
Expected Result:
The system should prevent the user from proceeding with the transfer and display a clear validation message indicating that the entered amount is invalid.
Actual Result:
The Transfer/Continue button remains enabled and allows the user to proceed despite the invalid transfer amount.  
Evidence:
Screenshot or screen recording showing the Transfer screen with ₦0 entered and the Transfer/Continue button still enabled.  
Severity: Medium  
Reason for Severity: The issue does not necessarily result in direct financial loss, but it represents inadequate input validation and could allow invalid transaction requests to proceed further into the transfer workflow.