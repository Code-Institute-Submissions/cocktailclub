
# **Cocktail Club**
### **Milestone project 2: Interactive Frontend Development - Code Institute**

A website that uses <a href="https://www.thecocktaildb.com/api.php" target="_blank">TheCocktailDB API</a> to search for cocktail recipes by name as well as the option for a random recipe.

## Demo
Live demo can be viewed <a href="https://fayskerritt.github.io/cocktailclub/" target="_blank">here</a>

![](assets/mockup/mockup.png)

## UX
* A simple layout provides ease of use to users from the homepage
* The site is responsive across all screen sizes
* Inputs use placeholders as well as error messages in place to clearly describe what needs to be entered by user
* Light colours used on a dark background to make the content stand out and easy to read

#### User Stories
* As a user, I want to search by cocktail name, so that I can find a cocktail recipe to make at home.
* As a user, I want to be given a random cocktail recipe, so that I can get inspiration for making cocktails at home.
* As a user, I want to learn tips and tricks for making cocktails at home, so that I can prepare what equipment I need for making cocktails at home.
* As a user, I want to be able to request for a new recipe to be added to the site, so that I can find all my favourite recipes in one place.


#### Strategy
As people are spending a lot more time at home due to the current circumstances it was decided that the Cocktail Club would be aimed at those who want to re-create cocktails in the comfort of their own home. 
A simple layout was chosen to enable users to easily search for a recipe, or get a random recipe if they need inspiration.

#### Scope
It was decided that it should be very clear and simple for the user to find their desired recipe, therefor this is the main focus of the homepage. For those users who need inspiration there is also a random button that will display a random recipe.
The site also includes an Info page which gives users tips and tricks for making cocktails at home, this is not necessary but it gives the site a nice personal touch.

#### Structure
The recipe results are displayed in an easy to view grid, each with a photo and the cocktail name. Each recipe can then be expanded to view the whole recipe. In case the user is not happy with that specific recipe there is a back button to allow users to browse each recipe without having to reload the page.

#### Skeleton
Figma was used to design a wireframe, you can view it <a href="https://www.figma.com/file/RdOmB4ks8GmqkZWuD6E7LU/Milestone-1-wireframe?node-id=212512%3A0" target="_blank">here</a>

#### Surface
* The colour theme of the website was decided on so that it is eyecatching to the user but also easy to read with light text on a dark background. 
* The background image used is very minimal so that it is not a distraction from the main content. 
* The font Poppins is very easily read and is a modern font that looks nice.

## Features
* Use of the API - <a href="https://www.thecocktaildb.com/api.php" target="_blank">TheCocktailDB</a> to build a recipe search website using Javascript and JQuery.
* Bootstrap grid system used in certain areas to ensure responsiveness on all screen sizes.
* Sticky/Fixed Navbar - gives user a sense of control and allows them to use the links to jump to any section on the site at any time.
* Collapsing Navbar - Navbar will collapse and replaced by a hamburger menu on smaller screens (below 768px) for a cleaner look.
* Recipe search functionality allows user to search the name of a cocktail and will display a grid of all matching recipes.
* Full recipe view showing the cocktail categories, instructions, method and glass to use.
* Random recipe generator - button to display a random cocktail recipe.
* Hide and show grid when viewing each recipe for ease of viewing with a 'Back' button to go back to the grid.
* Contact form to allow users to request new recipes for the site.

## Technologies
1. HTML5 - to create content for website
2. CSS3 - to style HTML content to look nice
3. JavaScript - to call API calls to retrieve cocktail recipes
4. jQuery - ***add link*** - 
4. <a href="https://www.thecocktaildb.com/api.php" target="_blank">TheCocktailDB</a> API - to pull cocktail recipes to my site.
5. <a href="https://www.figma.com/file/RdOmB4ks8GmqkZWuD6E7LU/Milestone-1-wireframe?node-id=212512%3A0" target="_blank">Figma</a> - to create wireframes
6. <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> - as a responsive template to personalise with own CSS
7. GitHub - ***add link*** - GitHub was used to store the project.
8. Git - ***add link*** - Git was used for version control by using the Gitpod terminal to add, commit and push the code to GitHub.
8. Google Fonts - ***add link*** - Google Fonts were used to import the "poppins' font which is used across all pages of the site.

## Testing
As it is key that the website is responsive so that it can be viewed on all kinds of devices and programs;
I have tested the webpage on 2 different mobile devices (iPhone XS & OnePlus) also on a large desktop as well as a smaller Macbook desktop screen. 
I have also trialed the site on Chrome and Safari to ensure it works fine on both.

#### HTML
* <a href="https://validator.w3.org/" target="_blank">W3C HTML Validator</a> to check the markup validity of the Web documents in HTML - No errors or warnings

#### CSS
* <a href="https://jigsaw.w3.org/css-validator/" target="_blank">W3C CSS Validator</a> to check the markup validity of Web documents in CSS - No errors or warnings

#### JavaScript
* <a href="https://jshint.com/" target="_blank">JSHint</a> was used to check the JavaScript on the site - No errors or warnings

#### Manual Testing
* Different types of cocktail names were searched for including ones that do not exist to see what happened.
* The site was tested on a MacBook, a desktop screen, an iPad, an iPhone XS Max and an iPhone 8 to test the site looks good and is responsive to all screen sizes.
* 

##### Bugs/Errors found
* If the search input does not match a cocktail from the API, tested by typing 'adfsgs' this would not bring up any results, to get round this I used JS to display an error message to say 'No cocktails found, please try again!', I also added an error message if the input was left blank.
* Certain cocktail recipes had incomplete data when it came to the measure, therefor I added in code to check whether the value was 'null' and if so to leave it blank.
* I had planned to add in a random selection of cocktails on the homepage to fill the page a bit more, although to br able to use this feature of the API you need to subscribe and make a monthly payment, therefor this was not implemented to the site.
* Another bug that was found was that the 'click' functions did not work on an iPhone, meaning you were unable to click on the grid of cocktails. I tried to add in 'touchstart' but this also did not solve the issue. It would require a complete restructuring of the JS code which will be added into future developments of the site.

## Deployment
This site is hosted on GitHub using GitHub pages, deployed directly from the master branch. The site will update automatically after any new commits from the master branch. 
So that the site deploys correctly the landing page has been named `index.html`.

## Credits
#### Content
* Inspiration was taken from the Code Intitute projects included in the Interactive Frontend Development module.
* Media Queries for Responsive text were copied from - <a href="https://www.w3schools.com/howto/howto_css_responsive_text.asp" target="_blank">W3schools.com</a>.

#### Media
* The image used for the background of the pages is from Unsplash and can be found <a href="https://unsplash.com/photos/FsYZE4ZZKJY" target="_blank">here</a>.
* The site logo is my own as well as the other line drawings on the Info page.

#### Acknowledgements
* My mentor for their feedback throughout the project and frequent meetings.
* Tutor support from the Code Institute tutors.

