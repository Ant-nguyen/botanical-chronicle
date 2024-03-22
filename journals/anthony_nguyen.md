## 3/22/24
Today we wrapped up our project and talked a bit of the future of our project after submitting YAY

## 3/21/24
Worked on deployment!
Had a few snags but were able to get it to work.
At one point the galvanized cli seemed to had a issue that was messing up a few peoples project and were also part of that bug, which was very unfortunate for our first time and make the whole learning experience very difficult !
But we were able to get the page deployed into gitlab which was a huge win for us.
We realized that the we had to do a lot of little tweaks that differ from the resources we were given because of Vite. One such thing was when dealing with images, we had to reference these images differently than how were doing so in raw React.
All and all everything went pretty smoothly and were happy about that.

## 3/20/24
onboard:
Lighthouse best practice at 78 to 100
And SEO and Accessibility 100

Garden page: from 74 to 93 for best practice
Half the image size from 6,000kb to 3,000kb

Today we were able to work on making our front-end pages look better. I updated the design of the onboard page to look more sleek and professional. Changed the log in to a modal. Fixed some bugs and also changed the design of the front-end for the plant log detail page.

We also explored with lighthouse performance test a bit. Found this was a guide to working on improving the performance of our site. Performance speed was pretty poor, did some digging on how we can improve that, perhaps during deployment we can improve it when the project is compiled. Above you can see some of the metrics I recorded.

Tomorrow we start our deployment hoping it runs smoothly since it is the one thing we have the least experience in.
## 3/19/24
Formatted pages to also work with network throttling in mind.
We completed our readme and added logic so that users can look at other plants and logs but buttons to edit the plants and logs will only show up if they have access to (it is their plant).
Started working on making the site look interesting.

## 3/18/24
Today was a half day, we only worked after lunch. We started on the README.md file and were looking for ways to extract the fastAPI doc to use for the MD, did not find anything useful so just did manually.
## 3/14/24
Today we completed the last of the main MVP we needed to work on. I was the main driver again and we mainly worked on the look of our page and getting things to look a certain way. This included working on resizing images to fit in cards correctly. I added the ability to slow any user included image, and had it resize to fit the card regardless of original image size!
Today I added 86 lines of code and refactored 36 lines of code.
We also worked on unit testing and were able to come up with simple unit tests for our back-end api endpoints.

## 3/13/24
Today we completed the Plant logs and editing the logs.
Chris was the driver for most of the day
Later after 5. I decided to refactor the modal delete confirmation to be usable outside of just plants and can be used with plant logs. This saved at least 70 lines of code and made the component reusable.
## 3/12/24
Today we finished up the remainder of the plant detail and plant edit pages. Today Lyle was the code driver. A-ha moment today was when we started messing around with network throttling to see how the app essentially works in slow-motion. This also uncovered a flaw in some of our logic that assumed that the fetch was relatively fast. we were able to refactor and come up with solutions in some of our logic that assured the worked appropriately even if fetch was slow.
## 3/11/24
We were able to make the plant list and plant form page. I was the driver today in our mob programming. One aha moment we had was that I began to see how we can have individual pages for each plant. Also we came up with a clever way of limiting the number of characters in our description card with a ternary operator. All and all today was a very productive day and not bad for a Monday.
## 3/8/24
Today we implemented a navbar and added the function to logout and be redirected to the right places when logging out. I also came up with an idea to refactor some code so we repeat ourselves less. Today we had social-hour so it was a light day
## 3/7/24
Today we continued with the login and the login logic, worked more with making sure redirects happens correctly. Lots of troubleshooting and accounting for errors.
## 3/6/24
Shared what I found yesterday to show what we needed for our team. They were excited to learn what was giving us errors. Today we decided it was best if we just worked on simple React stuff that we already knew and get our heads away from Redux for a bit. It was pretty productive, we were able to set up a sign-up page for users. Felt like a productive day.
## 3/5/24
Today we started the front-end. I was the driver today and we attempted to wrap our head around redux. It was difficult at first for sure and the only way for us to really understand what was going on or what we needed to do was to rely on the learning material we had. We tried to implement the login logic and have certain pages be restricted based on is a user is logged in. We had some issues and decided it was best to end the day on a bug since we were so burned out which was the first for our group. I was able to see the reasoning for our error later that evening after class and hope to share with the team tomorrow.
## 3/4/24
Today we finished out back-end fully, we added ways to delete all plants-logs associated with a plant when one delete a plant. We also got more of an understanding of how the `_id` and other IDs differ when we were working through some of the different database relations.  We also finally got a full understanding of gitlab issues and how we can die a merge request with an issue without having to make a branch and merge request with an issue! This was nice since it was a gap in our knowledge.
## 3/1/24
Today we did more work on the API back-end. I feel that I'm getting a better grasps of FastAPI.
We made a lot of work and had to think more about edge cases and auth issues. We again are learning more about Git and gitlab and how odd it can be. Workflow is slowly getting better.
## 2/29/24
Today we finished the backend-auth
and started working on the back-end end point for the CRUD of plants
We still need to limit access to some of the points but it is good overall.
Our AHA moment is that we figured out why we were getting a 401 error, it was because our accounts query was looking for emails by default but we use usernames. He had to get Riley to help us on that.
Looking forward to hopefully completeting the back-end tomorrow.

## 2/28/24
Today we worked on the back end auth
I took the driver seat today and we all worked together as a group mob programming style.
We primarily followed some of Riley's notes and lecture to parse an figured out how it worked.
I felt this was a good opportunity to learn more about rapid API and get more experience with it
which was nice. It was also great working with Mongo and getting more experience with the database.


## 2/27/24
Today we Started our project
* Worked on setting up the REPO
* Added the wireframe
* Setting up the MongoDB
* Fixing the GitLab restrictions

As a group we all worked on setting up the repo with Git and adding the
documents/journal files we needed for our project.

Later James and I worked on getting the MongoDB set up in our project and
getting the docker-compose up to what we needed.
