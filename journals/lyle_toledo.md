## Feb 27, 2024

Driver: N/A
Summary: Set up the repository and journals

We worked together to add our wireframe and got our respective REPO working. We took the time to get situated and organized and talked about how we were going to work on the project. It was decided that we would do Mob Programming. There was some trouble understanding how GitLab works since it was our first time properly using it. By following the instructions, we set up the GitLab restrictions. James and Anthony stayed a bit longer to get MangoDB set up.

## Feb 28, 2024

Driver: Anthony
Summary: Auth Backend

It took a bit to get our bearings. It was our first time creating an auth since Project Alpha. It also doesn’t help that we were thrown into this project. In the previous mods, we had practice after a lecture. Afterward, we can use that project as a reference for the project. We ran into a 401 error that unauthorized us. After resetting Docker, the error stopped showing.

## Feb 29, 2024

Driver: Lyle
Summary: Plant Backend

Before starting we ran into that 401 error again. We got help from Riley, our instructor. He pointed out that the account query was connected to the emails, not the username. After fixing the typo the error was fixed. I followed Anthony’s instructions attentively and we were able to finish the Plant endpoints.

## Mar 1, 2024

Driver: Chris
Summary: Plant-Log Backed

We worked on the Plant-Log Backend. We had trouble because it was hard to logically connect the Plant-Log to the Plant backend. We ended up making the user input the plant_id to be able to use the Plant-Log endpoints. Other than that, we just use the Plant endpoints as a reference for the logic.

## Mar 4, 2024

Driver: James
Summary: Clean code on the backend

We learned how to use GitLab issues and merge requests more efficiently, thanks to one of the SEIRs. We spent the rest of the day cleaning up the code. For example, deleting comments or adding error handling on our backend.

## Mar 5, 2024

Driver: Anthony
Summary: Frontend Setup

Anthony created the necessary pages to get started. The main page, the apiSlice, and a directory that has the rest of the pages. To properly see it working on the front end, we needed an onboard page and a home page. Then when we created a login page, we made it so it redirects you to the home page. If you are not logged in then you will be automatically redirected to the onboard page whenever you try to get to the home page. We used Riley’s lecture videos to help us.

## Mar 6, 2024

Driver: Lyle
Summary: Frontend Sign up

Started late due to the lecture running overtime. Because of this we only had time to make a signup page. We took the time to test by logging in and creating multiple users. We debated if we needed a password confirmation and decided it would be too complicated to do so.

## Mar 7, 2024

Driver: Chris
Summary: Finished Frontend Signup and Login

After seeing it in Riley’s Lecture we found how to make a password confirmation. We spent the rest of the time creating error handling, testing the errors, and cleaning up any imports that weren’t being used. This ended up finally cleaning the pipeline.

## Mar 8, 2024

Driver: James
Summary: Nav-bar

Today we simply worked on the Navbar and rationalized how it should be designed. We added our logo and the name of our app on the left-hand side and put a log-out button on the right. The rest of the day we imported it into the necessary pages and tested it.

## Mar 11, 2024

Driver: Anthony
Summary: Plant Frontend

To match our wireframe we made a plant card component that connects to the plant detail page. Then, we made a plant form page that creates plants that we can see a list of on the home page. Thanks to the plant card component, each plant was on a card that had a placeholder image, its name, its species, and the first 150 characters of the description. We ended by creating a plant detail page and made sure it was working.

## Mar 12, 2024

Driver: Lyle
Summary: Finished Plant Frontend

I finished what Anthony started by finishing the rest of the plant endpoints. We finished the plant detail page and made the update plant page. In the update plant page, we can both edit and delete the plant. Nearing the end of the day, I discovered that deleting a plant in our front end also deletes the plant logs that were made prior. This is because our front end is connected to our back end. There, we made sure to cascade to delete all the plant logs when the plant is deleted. This makes the front end easier to work with when we work on plant logs.

## Mar 13, 2024

Driver: Chris
Summary: Plant-Logs Frontend

Chris pointed out that importing the nav bar in every page is a hassle so we imported that component into the App page. This puts a nav bar on every page. We spent the whole day working on the front end of the plant log. Just like before, we used the front end of plants as a reference.

## Mar 14, 2024

Driver: Anthony
Summary: Clean-up code and Unit Testing

Due to James having an X-ray appointment, Anthony took over as the driver. We cleaned up little things like making sure the placeholder image is changed to the image that was submitted. Added proper placements to the buttons to make the webpage more user-friendly. Finally, we changed the date in the plant logs list so that it is sorted by the most recent at the top. Our merge request was inexplicably lost so we made another one. We spent the last hour making Unit tests.

## Mar 18, 2024

Driver: James
Summary: README

We had our practice test so we had to start late. Using the Smelli-Belli Repo as a reference, we were able to make our own readme markdown file. We are using our MangoDB and FastAPI to help us fill in our data model and API design. It is taking longer than expected, so we will be continuing this tomorrow

## Mar 19, 2024

Driver: Lyle
Summary: Finished README

Today, we worked on finishing the README.md. Once again we used Smelli-Belli as a reference. This marks the end of our MVP.
