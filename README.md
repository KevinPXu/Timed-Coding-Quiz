# Timed-Coding-Quiz

## Technologies Used

- HTML
- CSS
- JavaScript
- Web APIs
- VS Code
- Git
- GitHub

## Link to Application

https://kevinpxu.github.io/Professional-Portfolio/

## Summary

This project was used to teach myself about creating a webpage from the ground up using both HTML and CSS to structure and design the site. It allowed me to have a better understanding of how to structure the HTML file in relation to the CSS file. I also was able to use some creativity to manipulate the CSS file and create elements that are unique and functional at the same time.

## Screenshots

<img src="./Assets/images/Screenshot.png" alt="Screenshot">

## Description

Profile page of a portfolio of all currently completed projects. Includes name, biography of myself and contact information. Images of different projects will take you to the given repository containing that project.

## Code Snippet

### Profile picture inline text wrap

```HTML
<aside id="Biography">
          <h2>Biography</h2>

          <p class="Bio-content">
            <!-- Profile Picture -->
            <img
              class="profilepic"
              src="./Assets/images/Monkey-Selfie.webp"
              alt="Placeholder Monkey"
            />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </aside>
```

### CSS styling for the above code to wrap profile picture

```CSS
/* settings for the profile picture, making sure it wrapped by the text*/
#Biography .Bio-content .profilepic {
  width: 100px;
  height: 150px;
  float: left;
  padding: 10px;
```

## Author Links

[LinkedIn](https://www.linkedin.com/in/kevin-xu-4672a7215/)
[GitHub](https://github.com/KevinPXu)
