## February 27, 2024

Today, my group mob "programmed" setting up the gitlab repo and adding wire frame to docs. I added extensions needed for vscode formatting. Watched (and advised) James and Anthony make merge requests for features to main. Walked through template for issue ticket.

Feel a lot more comfortable making changes in gitlab, but will be nice to get some hands on keyboard experience actually making a merge to main for some feature.

## February 28, 2024

Today, my group mob programmed backend auth. Anthony drove.

We had an issue where the create user in mongo express was giving an unauthorized error that might have had something to do with token generation. After implementing the token, the bug went away.

## February 29, 2024

Brought an issue to Riley today with a bug we were having with the backend auth. The issue was that the new username was being populated by the email field, so that when the email and username were identical in account creation the account creation would give a successful 200 message. So it was username=info.email instead of username=info.username here. We were mostly taking the code from the lecture line for line and imagine Riley fixed that at some point but we just missed it as we were coding through.

form = AccountForm(username=info.username, password=info.password)
