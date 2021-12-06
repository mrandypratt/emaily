Objective:
Allow Users, predominantly Startup Product Managers, to create an email campaign in order to ask users for feedback then receive, store, and use that feedback.

Pages:
0. Template:
  Navbar
    header
      Left: Emaily: Directs Home (/)
      Right: Login: Directs Login (/login)
1. / => Home page
  a. Default Text: "Get Feedback From Users Faster"
2. /login => login page
  Middle of page:
    Form:
      Field:
        Title=User Name, Type=text box
      Field:
        Title=Password, Type=Text Box
      Submit:
        Type=Button, Text=login
3. /create-account => allows user to create account
4. /%user%/home => shows campaigns for user
5. /%user%/%campaign%
6. /%user%/create-campaign
7. /%user%/

Login
  b. Create account
2. User Account Page
  a. User can Add payment type and credits via Stripe
  b. User has view of any active Campaigns
  c. User creates a new "Campaign"
3. New Campaign Page
