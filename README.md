[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

![example gif](/examples/example_newWorkout.gif)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/infiniteoo/homework_week_17_workout_tracker">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Workout Tracker</h3>

  <p align="center">
    NoSQL-powered workout tracker which allows the user to view, create, and track daily workouts.
    <br />
    <a href="https://github.com/infiniteoo/homework_week_17_workout_tracker"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/infiniteoo/homework_week_17_workout_tracker">View Demo</a>
    ·
    <a href="https://github.com/infiniteoo/homework_week_17_workout_tracker/issues">Report Bug</a>
    ·
    <a href="https://github.com/infiniteoo/homework_week_17_workout_tracker/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Utilizing what we've learned so far in class,  the objective for this week's homework assignment was to take supplied starter code from the front-end, and create the back-end server and accompanying HTML and API routes to build our workout tracker.

![example gif](/examples/example_charts.gif)

With the power of MongoDB and Mongoose database structure schemas, combined with the ease and versatility of Node.js, this repository is the result.

### Built With

[![node](https://aleen42.github.io/badges/src/node.svg)](https://aleen42.github.io/badges/src/node.svg)
[![eslint](https://aleen42.github.io/badges/src/eslint.svg)](https://aleen42.github.io/badges/src/eslint.svg)
[![javascript](https://aleen42.github.io/badges/src/javascript.svg)](https://aleen42.github.io/badges/src/javascript.svg)
[![github](https://aleen42.github.io/badges/src/github.svg)](https://aleen42.github.io/badges/src/github.svg)
[![npm](https://aleen42.github.io/badges/src/npm.svg)](https://aleen42.github.io/badges/src/npm.svg)
[![visual_studio_code](https://aleen42.github.io/badges/src/visual_studio_code.svg)](https://aleen42.github.io/badges/src/visual_studio_code.svg)





<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/infiniteoo/homework_week_17_workout_tracker.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```



<!-- USAGE EXAMPLES -->
## Usage

* When the user connects, stats from last workout saved to the database is displayed.  
* From here, the user can continue this workout or create a new one.  
* If the user chooses to continue the workout, every new exercise created will be added to the existing workout's database entry.
* If the user chooses to make a new workout, a new entry in the database is created and each new exercise will be added to the new workout's database entry.
* Every workout in the database has a "totalDuration" variable, which keeps a cumulative total of the amount of minutes across all exercises. 

_For more examples, please refer to the [Documentation](https://github.com/infiniteoo/homework_week_17_workout_tracker)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/infiniteoo/homework_week_17_workout_tracker/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Troy Dorman - Twitter: [@doormant](https://twitter.com/doormant)   Email - troydorman@gmail.com

Project Link: [https://github.com/infiniteoo/homework_week_17_workout_tracker](https://github.com/infiniteoo/homework_week_17_workout_tracker)

Live Interactive Link: [https://aqueous-reef-38770.herokuapp.com/](https://aqueous-reef-38770.herokuapp.com/)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/infiniteoo/homework_week_17_workout_tracker?style=for-the-badge
[contributors-url]: https://github.com/infiniteoo/homework_week_17_workout_tracker/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/infiniteoo/homework_week_17_workout_tracker?style=for-the-badge
[forks-url]: https://github.com/infiniteoo/homework_week_17_workout_tracker/network/members
[stars-shield]: https://img.shields.io/github/stars/infiniteoo/homework_week_17_workout_tracker?style=for-the-badge
[stars-url]: https://github.com/infiniteoo/homework_week_17_workout_tracker/stargazers
[issues-shield]: https://img.shields.io/github/issues/infiniteoo/homework_week_17_workout_tracker?style=for-the-badge
[issues-url]: https://github.com/infiniteoo/homework_week_17_workout_tracker/issues
[license-shield]: https://img.shields.io/github/license/infiniteoo/homework_week_17_workout_tracker?style=for-the-badge
[license-url]: https://github.com/infiniteoo/homework_week_17_workout_tracker/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/t-wayne-doorman/
