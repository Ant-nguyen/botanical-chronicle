## February 27, 2024

Today, my group mob "programmed" setting up the gitlab repo and adding wire frame to docs. I added extensions needed for vscode formatting. Watched (and advised) James and Anthony make merge requests for features to main. Walked through template for issue ticket.

Feel a lot more comfortable making changes in gitlab, but will be nice to get some hands on keyboard experience actually making a merge to main for some feature.

## February 28, 2024

Today, my group mob programmed backend auth. Anthony drove.

We had an issue where the create user in mongo express was giving an unauthorized error that might have had something to do with token generation. After implementing the token, the bug went away.

## February 29, 2024

Mob programmed today. Lyle drove today. Brought an issue to Riley today with a bug we were having with the backend auth. The issue was that the new username was being populated by the email field, so that when the email and username were identical in account creation the account creation would give a successful 200 message. So it was username=info.email instead of username=info.username here. We were mostly taking the code from the lecture line for line and imagine Riley fixed that at some point but we just missed it as we were coding through.

form = AccountForm(username=info.username, password=info.password)

## March 1, 2024

We mob programmed today, but I drove this time. We were working on the plant log models and endpoints for the backend. A lot of the code was modeled a bit like the plants, because there's a parent-child relationship between accounts/plants. As far as an ah-ha moment, I don't really know of anything specific, but I feel like I had a better understanding of what's going on because I'm actually more hands on with the code. But also we kinda roll through it pretty quickly because different people have different code chunks up and they're thinking through all our error messages. I suppose I see now where I was on the other side of the mob. I'm thinking I'd be okay with just mob programming, but we probably should decide when we're going to pair off into two pairs. I'm thinking for sure when we're working on stretch goals. Anthony had a pretty good idea about making modifications to the plant log in the database then returning that log rather than the way we were doing it before which was more rigid. We'll have to look at the plant in the future and see how it's being handled.

## March 4, 2024

Mob programmed today. James drove today. Discussed a few design decisions today. One related to database design--we were contemplating whether we should include a reference to the account id in the plant log, but asked Riley and the double query issue isn't a big resource burden because the queries by id are fast. It'll likely make the code a little more complicated, but it's not too big of a deal. Figured out how to attach an existing merge request to an issue. # number of the issue, which is pretty useful. Managed to somehow delete my journal when I merged, so I'm going to start keeping a journal in a separate folder. Thankfully, there's a timeline that keeps all history in vscode by default.

# March 5, 2024

Anthony drove. Built out the react redux apiSlice.js, querySlice.js, store.js. We got stuck on the navigate link but Anthony worked on it on his own after hours. It was an issue with == vs ===. This was a lot of heavy new react redux stuff that I didn't really completely understand. Not sure if I had any kind of ah-ha moment here, but hopefully it'll make more sense later.

# March 6, 2024

Lyle drove. Worked on building out the pages (forms--signup and login) with React code that we were more familiar with. It was mostly just the return html portions of the react code and a little bit of logic for the signup. Asked Lyle to console.log the differences between the == and ===. Turned out the issue was we had something undefined and null which were == but not ==== to each other.

# March 7, 2024

I drove today. Added functionality for password confirmation on Signup page. Added logic for Login page. Finished issue for the Login and Signup pages. Wrote issue for the nav bar. We went on a bit of a tangent to try to learn how to show the password error as well as the error message that could show if the user already existed, but ended up not combining the two error messages with a ternary because the error detail would be null if there wasn't an error message. I have a better understanding of how the apislice works because we had to code out the logic for the login page. We used a lot of the code provided in the fastAPI frontend learn to work the code for our app.

# March 8, 2024

James drove today. Built out the nav bar and functionality.

# March 11, 2024

Anthony drove today. Built out Create Plant form, cards for the home page (plant list)

# March 12, 2024

Lyle drove today. Worked on building out Edit Plant page. Decided to add the Nav bar to every page and add in logic so that the logout doesn't show up on the signup, onboard or login pages. Worked on adding logic so that slow internet would behave in the correct way. We were having issues where the user would be sent to the onboard page after logging in and not the main (garden) page. We had to add some isLoading type logic. This isLoading logic was above some of our functions which caused everything to break again. So we need to have any of the return HTML after our functions/consts and logic.

# March 13, 2024

I drove today. Finished building out the Plant Logs and Update Plant logic. A lot of the logic was just reworked code from Plant and UpdatePlant. But also I fixed a bug where our backend was mislabeled incorrectly (plants-logs vs plant-logs). There are a lot of pieces here and it was pretty difficult to wrap my mind around the relationships between the different url pieces. Had a weird bug where I put square brackets instead of curly braces that I think I need to try to understand better. The typing of the const variables results in the function not being called and the variable being undefined.

# March 14, 2024

Anthony worked on adding some code to ensure that we can show a placeholder image or an image that the user provides by adding an image URL. We got into a bunch of different bootstrap things. I wanted to try to change our frontend to change the way that our dates and times showed up on the plant log page, but Anthony wanted to do it on the backend. Anthony was confused as to why when we were trying to format the datetime in our plant log that the date was able to be sorted as he expected it was a string. I didn't really know what it was, but it turned out that it's typed to be datetime from our models.py, which is helpful to know. We all took turns writing our unit tests. I'm not quite sure exactly how this works, but I generally understand we want to pass in fake data. I'll probably try to read a little more about the response model and how that works. It's a bit strange because it looks like it's a parameter for the router function, but it seems like it actually is responsible for determining the structure of the data being returned.

# March 18, 2024

Worked together again today. James was typing and building out the readme. We were looking into seeing if we could use some sort of redoc swagger solution to automatically generate the markdown readme but couldn't find anything that would work for that. So we're doing it manually.

# March 19, 2024

Anthony drove for working on some frontend aesthetic work. Added an browser icon and changed colors and added the motto to the onboard page. I drove for some code cleanup and blocking the edit and delete buttons being viewable by users who didn't own the plants. This allows users to share the plant's direct link and allow other users to see the plant without allowing the other users to modify those plants.

# March 20, 2024

Anthony drove for stretch goals. Changed the front page to have a background page and added a modal for the login. Pretty interesting that we were able to grab the bootstrap modal object. James and I worked on studying SQL queries for the final.

# March 21, 2024

Worked on deployment today. Anthony was driving. We ran into an issue where the fastapi page wasn't loading properly after we had deployed it. Comparing with another group's work we pushed it up to our instructor. This experience was interesting because it felt a bit like how things would likely work in a real world situation. Considering that galvanize's backend was having an issue that's currently being worked by the professional devops individual. It'll be interesting if the intuition that I had about the problem turns out to be correct.

# March 22, 2024

Finishing up final touches to the codebase. Had issues with journal being overwritten, so saved it in a different file so I wouldn't have to go into timeline to try to revert old versions. We were basically novices at managing different branches and handling merge requests, but I feel less lost in my ability to use gitlab now without experiencing dread every time I do any git command. But clearly, I would still have a great deal to learn to actually feel confident. Also, knowing that I could go back in my timeline if somehow there was some sort of conflict that overwrote my code and pull it locally is a relief. I'm sure if I were to work in a real world context that this process would be very different. Adding final journal now.
