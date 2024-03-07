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
